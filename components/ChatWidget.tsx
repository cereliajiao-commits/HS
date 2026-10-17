'use client';

import { useEffect, useRef, useState } from 'react';
import { useLanguage } from './LanguageProvider';

const WHATSAPP_NUMBER = '8617751097209';

interface Message {
  text: string;
  isUser: boolean;
  time: string;
  linkUrl?: string;
  linkLabel?: string;
}

function getCurrentTime(lang: string) {
  const locale = ({ zh: 'zh-CN', es: 'es-ES', fr: 'fr-FR', ar: 'ar-SA', ru: 'ru-RU', pt: 'pt-BR' } as Record<string, string>)[lang] ?? 'en-US';
  return new Date().toLocaleTimeString(locale, { hour: '2-digit', minute: '2-digit' });
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

function whatsappLabel(lang: string) {
  const labels: Record<string, string> = {
    en: 'Continue on WhatsApp',
    zh: '转到 WhatsApp 继续咨询',
    es: 'Continuar en WhatsApp',
    fr: 'Continuer sur WhatsApp',
    ar: 'المتابعة عبر واتساب',
    ru: 'Продолжить в WhatsApp',
    pt: 'Continuar no WhatsApp',
  };
  return labels[lang] ?? labels.en;
}

export default function ChatWidget() {
  const { lang, t } = useLanguage();
  const welcomeText = t('chat.welcome');
  const justNowText = t('chat.justNow');
  const [isOpen, setIsOpen] = useState(false);
  const [showBadge, setShowBadge] = useState(true);
  const [messages, setMessages] = useState<Message[]>([
    {
      text: welcomeText,
      isUser: false,
      time: justNowText,
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

  useEffect(() => {
    setMessages((current) => {
      if (current.length !== 1 || current[0].isUser) return current;
      return [{ ...current[0], text: welcomeText, time: justNowText }];
    });
  }, [lang, welcomeText, justNowText]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) setShowBadge(false);
  };

  const sendMessage = async (text?: string) => {
    const message = text || inputValue.trim();
    if (!message || sending) return;

    const userMsg: Message = { text: message, isUser: true, time: getCurrentTime(lang) };
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

      setMessages((prev) => [...prev, {
        text: replyText,
        isUser: false,
        time: getCurrentTime(lang),
        linkUrl: data?.needsHuman ? undefined : getReplyLink(message),
        linkLabel: data?.needsHuman ? undefined : whatsappLabel(lang),
      }]);

      if (data?.needsHuman || data?.action === 'handoff' || data?.action === 'draft_for_human') {
        void fetch('/api/handoff', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message, language: data?.language || lang }),
        });
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          text: lang === 'zh' ? '系统暂时繁忙，请稍后再试，或直接联系我们的 WhatsApp。' : 'The system is temporarily busy. Please try again later or contact us on WhatsApp.',
          isUser: false,
          time: getCurrentTime(lang),
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
          <div className="chat-avatar" aria-hidden="true">🏭</div>
          <div className="chat-header-info">
            <h4>{t('chat.title')}</h4>
            <p>{t('chat.online')}</p>
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
              <div className="chat-msg-avatar" aria-hidden="true">{msg.isUser ? '👤' : '🏭'}</div>
              <div className="chat-msg-content">
                <div className="chat-msg-sender">{msg.isUser ? t('chat.you') : t('chat.title')}</div>
                <div className="chat-msg-bubble">
                  <span>{msg.text}</span>
                  {msg.linkUrl && (
                    <a className="chat-msg-action" href={msg.linkUrl} target="_blank" rel="noopener noreferrer">
                      {msg.linkLabel} <span aria-hidden="true">→</span>
                    </a>
                  )}
                </div>
                <div className="chat-msg-time">{msg.time}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="chat-input-area">
          {showQuickReplies && (
            <div className="chat-quick-replies">
              <button className="chat-quick-btn" onClick={() => sendMessage(quickText(lang, 'quote'))}>{t('chat.quoteBtn')}</button>
              <button className="chat-quick-btn" onClick={() => sendMessage(quickText(lang, 'products'))}>{t('chat.productsBtn')}</button>
              <button className="chat-quick-btn" onClick={() => sendMessage(quickText(lang, 'support'))}>{t('chat.supportBtn')}</button>
              <button className="chat-quick-btn" onClick={() => sendMessage(quickText(lang, 'moq'))}>{t('chat.moqBtn')}</button>
            </div>
          )}
          <div className="chat-wa-notice">
            {t('chat.waNotice')}
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
