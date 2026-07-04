'use client';

import { useState, useRef } from 'react';

const WHATSAPP_NUMBER = '8617751097209';

interface Message {
  text: string;
  isUser: boolean;
  time: string;
}

function getCurrentTime() {
  return new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
}

function getBotReply(message: string): string {
  const msg = message.toLowerCase();

  if (msg.includes('quote') || msg.includes('price') || msg.includes('cost')) {
    return `<strong>Quote Request</strong><br/><br/>Thanks for your interest! To provide an accurate quote, please let us know:<br/>&#8226; Product model/type<br/>&#8226; Quantity needed<br/>&#8226; Your company name<br/><br/>Our team will respond within 2 hours during business hours.`;
  }
  if (msg.includes('product') || msg.includes('catalog') || msg.includes('what do you')) {
    return `<strong>Our Product Range</strong><br/><br/>We manufacture:<br/>&#8226; Steering Arms (200+ models)<br/>&#8226; Steering Knuckles (all major truck brands)<br/>&#8226; Vertical Arms / Drop Arms<br/>&#8226; Drive Shafts (agricultural & industrial)<br/>&#8226; Suspension Assemblies (John Deere)<br/><br/>Browse our products above or ask about specific models!`;
  }
  if (msg.includes('support') || msg.includes('technical') || msg.includes('help')) {
    return `<strong>Technical Support</strong><br/><br/>Our engineering team can help with:<br/>&#8226; Product specifications<br/>&#8226; Compatibility questions<br/>&#8226; Custom manufacturing<br/>&#8226; OEM partnerships<br/><br/>For immediate assistance, chat with us on WhatsApp for real-time support.`;
  }
  if (msg.includes('moq') || msg.includes('minimum') || msg.includes('order')) {
    return `<strong>Minimum Order Quantity</strong><br/><br/>Our MOQ varies by product:<br/>&#8226; Standard products: 50-100 pcs<br/>&#8226; Custom/OEM: 200-500 pcs<br/>&#8226; Sample orders: Available<br/><br/>Contact us for specific MOQ requirements.`;
  }
  if (msg.includes('delivery') || msg.includes('shipping') || msg.includes('lead time')) {
    return `<strong>Delivery Information</strong><br/><br/>&#8226; Sample: 3-5 days<br/>&#8226; Standard orders: 15-25 days<br/>&#8226; Large orders: 30-45 days<br/><br/>We ship worldwide via sea freight, air freight, or express courier.`;
  }
  if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey')) {
    return `Hello! Welcome to HONGSHENG Auto Parts.<br/><br/>I'm here to help you with product inquiries, quotes, or technical questions. What can I assist you with today?`;
  }

  return `Thank you for your message! Our team will get back to you soon.<br/><br/>For immediate assistance, you can:<br/>&#8226; Chat on WhatsApp for instant response<br/>&#8226; Email us at chinahs@hotmail.com<br/>&#8226; Call: +86 177 5109 7209`;
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [showBadge, setShowBadge] = useState(true);
  const [messages, setMessages] = useState<Message[]>([
    {
      text: 'Welcome to HONGSHENG Auto Parts!<br/><br/>How can we help you today? Feel free to ask about our products, request a quote, or get technical support.',
      isUser: false,
      time: 'Just now',
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [showQuickReplies, setShowQuickReplies] = useState(true);
  const chatBodyRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) setShowBadge(false);
  };

  const sendMessage = (text?: string) => {
    const message = text || inputValue.trim();
    if (!message) return;

    const userMsg: Message = { text: message, isUser: true, time: getCurrentTime() };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setShowQuickReplies(false);

    setTimeout(() => {
      const botReply = getBotReply(message);
      const botMsg: Message = { text: botReply, isUser: false, time: getCurrentTime() };
      setMessages((prev) => [...prev, botMsg]);

      setTimeout(() => {
        const waMsg: Message = {
          text: `For faster response, continue the conversation on WhatsApp:<br/><br/><a href="https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}" target="_blank" rel="noopener noreferrer" style="color:#25D366;font-weight:600;text-decoration:underline">Click here to chat on WhatsApp &rarr;</a>`,
          isUser: false,
          time: getCurrentTime(),
        };
        setMessages((prev) => [...prev, waMsg]);
      }, 2000);
    }, 800);
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
              <button className="chat-quick-btn" onClick={() => sendMessage('I need a quote for steering arms')}>Quote Request</button>
              <button className="chat-quick-btn" onClick={() => sendMessage('What products do you offer?')}>Products</button>
              <button className="chat-quick-btn" onClick={() => sendMessage('I need technical support')}>Support</button>
              <button className="chat-quick-btn" onClick={() => sendMessage('What is your MOQ?')}>MOQ</button>
            </div>
          )}
          <div className="chat-wa-notice">
            Messages are sent via <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer">WhatsApp</a> for instant response
          </div>
          <div className="chat-input-row">
            <input
              type="text"
              className="chat-input"
              placeholder="Type your message..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button className="chat-send" onClick={() => sendMessage()}>
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
