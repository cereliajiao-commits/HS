'use client';

import { useEffect, useRef, useState } from 'react';
import { useLanguage } from './LanguageProvider';

const WHATSAPP_NUMBER = '8617751097209';

interface Message {
  text: string;
  isUser: boolean;
  time: string;
}

function getCurrentTime() {
  return new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
}

function quickText(lang: string, type: 'quote' | 'products' | 'support' | 'moq') {
  const map: Record<string, Record<string, string>> = {
    en: {
      quote: 'I need a quote for steering arms',
      products: 'What products do you offer?',
      support: 'I need technical support',
      moq: 'What is your MOQ?',
    },
    zh: {
      quote: '我需要转向臂报价',
      products: '你们有哪些产品？',
      support: '我需要技术支持',
      moq: '最小起订量是多少？',
    },
    es: {
      quote: 'Necesito una cotización',
      products: '¿Qué productos ofrecen?',
      support: 'Necesito soporte técnico',
      moq: '¿Cuál es su MOQ?',
    },
    fr: {
      quote: 'Je veux un devis',
      products: 'Quels produits proposez-vous ?',
      support: 'J’ai besoin d’assistance technique',
      moq: 'Quel est votre MOQ ?',
    },
    ar: {
      quote: 'أحتاج إلى عرض سعر',
      products: 'ما المنتجات التي تقدمونها؟',
      support: 'أحتاج إلى دعم فني',
      moq: 'ما هو الحد الأدنى للطلب؟',
    },
    ru: {
      quote: 'Мне нужна цена',
      products: 'Какие у вас есть продукты?',
      support: 'Мне нужна техническая поддержка',
      moq: 'Какой у вас MOQ?',
    },
    pt: {
      quote: 'Preciso de um orçamento',
      products: 'Quais produtos vocês oferecem?',
      support: 'Preciso de suporte técnico',
      moq: 'Qual é o MOQ?',
    },
  };
  return map[lang]?.[type] ?? map.en[type];
}

function getReplyLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function humanNotice(lang: string) {
  if (lang === 'zh') return '这个问题我先帮你转给人工同事处理。';
  if (lang === 'es') return 'Voy a pasar este caso a un agente humano.';
  if (lang === 'fr') return 'Je vais transmettre cette demande à un agent humain.';
  if (lang === 'ar') return 'سأحوّل هذا الطلب إلى أحد أعضاء الفريق.';
  if (lang === 'ru') return 'Я передам этот вопрос сотруднику.';
  if (lang === 'pt') return 'Vou encaminhar este caso para um atendente.';
  return 'I will pass this to a human agent.';
}

export default function ChatWidget() {
  const { lang, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [showBadge, setShowBadge] = useState(true);
  const [messages, setMessages] = useState<Message[]>([
    {
      text: t('chat.welcome'),
      isUser: false,
      time: 'Just now',
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [showQuickReplies, setShowQuickReplies] = useState(true);
  const [sending, setSending] = useState(false);
  const chatBodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = () => setIsOpen(true);
    window.addEventListener('openChatWidget', handler as EventListener);
    return () => window.removeEventListener('openChatWidget', handler as EventListener);
  }, []);

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) setShowBadge(false);
  };

  const sendMessage = async (text?: string) => {
    const message = text || inputValue.trim();
    if (!message || sending) return;

    const userMsg: Message = { text: message, isUser: true, time: getCurrentTime() };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setShowQuickReplies(false);
    setSending(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message, lang }),
      });
      const data = await res.json();
      const replyText = data?.reply || t('contact.successMsg');

      setMessages((prev) => [...prev, { text: replyText, isUser: false, time: getCurrentTime() }]);

      if (data?.needsHuman || data?.action === 'handoff' || data?.action === 'draft_for_human') {
        void fetch('/api/handoff', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message, language: data?.language || lang }),
        });
        setMessages((prev) => [
          ...prev,
          {
            text: humanNotice(lang),
            isUser: false,
            time: getCurrentTime(),
          },
        ]);
      } else {
        setTimeout(() => {
          setMessages((prev) => [
            ...prev,
            {
              text: `For faster response, continue on WhatsApp:<br/><br/><a href="${getReplyLink(message)}" target="_blank" rel="noopener noreferrer" style="color:#25D366;font-weight:600;text-decoration:underline">Click here to chat on WhatsApp &rarr;</a>`,
              isUser: false,
              time: getCurrentTime(),
            },
          ]);
        }, 500);
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          text: lang === 'zh' ? '系统暂时繁忙，请稍后再试，或直接联系我们的 WhatsApp。' : 'The system is temporarily busy. Please try again later or contact us on WhatsApp.',
          isUser: false,
          time: getCurrentTime(),
        },
      ]);
    } finally {
      setSending(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') sendMessage();
  };

  return (
    <div className="chat-widget">
      <button className="chat-toggle" onClick={toggleChat}>
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" />
        </svg>
        {showBadge && <span className="chat-badge">1</span>}
      </button>

      <div className={`chat-window ${isOpen ? 'active' : ''}`}>
        <div className="chat-header">
          <div className="chat-avatar">&#127981;</div>
          <div className="chat-header-info">
            <h4>HONGSHENG Support</h4>
            <p>Online now</p>
          </div>
          <button className="chat-close" onClick={toggleChat}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="chat-body" ref={chatBodyRef}>
          {messages.map((msg, i) => (
            <div key={i} className={`chat-message ${msg.isUser ? 'user' : 'bot'}`}>
              <div className="chat-msg-avatar">{msg.isUser ? '&#128100;' : '&#127981;'}</div>
              <div>
                <div className="chat-msg-bubble" dangerouslySetInnerHTML={{ __html: msg.text }} />
                <div className="chat-msg-time">{msg.time}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="chat-input-area">
          {showQuickReplies && (
            <div className="chat-quick-replies">
              <button className="chat-quick-btn" onClick={() => sendMessage(quickText(lang, 'quote'))}>Quote Request</button>
              <button className="chat-quick-btn" onClick={() => sendMessage(quickText(lang, 'products'))}>Products</button>
              <button className="chat-quick-btn" onClick={() => sendMessage(quickText(lang, 'support'))}>Support</button>
              <button className="chat-quick-btn" onClick={() => sendMessage(quickText(lang, 'moq'))}>MOQ</button>
            </div>
          )}
          <div className="chat-wa-notice">
            Messages are sent via <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer">WhatsApp</a> for instant response
          </div>
          <div className="chat-input-row">
            <input
              type="text"
              className="chat-input"
              placeholder={t('chat.placeholder')}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyPress}
            />
            <button className="chat-send" onClick={() => sendMessage()} disabled={sending}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
