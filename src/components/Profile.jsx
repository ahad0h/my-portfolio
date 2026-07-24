import React, { useState } from 'react';
import botImg from '../assets/bot-icon.jpg.png'; // أو امتداد صورتك المعتمد

function Profile() {
  // حالة التحكم بفتح وإغلاق الشات بوت
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi! I am Ahad\'s AI Assistant. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');

  // دالة الفتح والإغلاق عند الضغط على الأيقونة
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  // دالة إرسال الرسالة
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // إضافة رسالة المستخدم
    const newMessages = [...messages, { sender: 'user', text: input }];
    setMessages(newMessages);
    const userQuery = input;
    setInput('');

    // رد تلقائي مبسط من المساعد
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: 'bot', text: `Thanks for asking about "${userQuery}"! Ahad is specialized in AI Engineering and RAG systems.` }
      ]);
    }, 1000);
  };

  return (
    <>
      <section className="hero-section">
        <div className="badge">
          <span className="sparkle">✨</span> Computer Science Graduate & AI Enthusiast
        </div>

        <div className="hero-content">
          <div className="hero-text">
            <h1 className="greeting">
              Hi, I'm <span className="highlight-name">Ahad Alharbi</span>
              <img 
                src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Waving%20Hand.png" 
                alt="Waving Hand" 
                className="waving-hand" 
              />
            </h1>
            <p className="bio">
              Computer Science Graduate from Qassim University specializing in AI engineering, 
              RAG pipelines, FAISS vector databases, and full-stack web development.
            </p>
            
            <div className="action-buttons">
              <a href="https://github.com/Ahad0h" target="_blank" rel="noreferrer" className="btn btn-primary">
                🌐 GitHub Profile
              </a>
              <a href="mailto:ahad.3890@icloud.com" className="btn btn-secondary">
                ✉️ Contact Me
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 🤖 نافذة الشات بوت عند الفتح */}
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <div className="chat-header-info">
              <img src={botImg} alt="Bot Avatar" className="chat-header-img" />
              <div>
                <h4>Ahad's AI Assistant</h4>
                <span className="online-status">🟢 Online</span>
              </div>
            </div>
            <button className="close-btn" onClick={toggleChat}>✕</button>
          </div>

          <div className="chat-body">
            {messages.map((msg, index) => (
              <div key={index} className={`chat-message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>

          <form onSubmit={handleSendMessage} className="chat-footer">
            <input 
              type="text" 
              placeholder="Ask me anything..." 
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit">Send</button>
          </form>
        </div>
      )}

      {/* 🔘 الزر العائم (الأيقونة التي يتم الضغط عليها) */}
      <div className="floating-bot-widget" onClick={toggleChat} title="Ask Ahad's AI Assistant">
        <img 
          src={botImg} 
          alt="Ahad AI Assistant" 
          className="bot-avatar-img"
        />
        <span className="floating-bot-tooltip">
          {isOpen ? '❌ Close Chat' : '✨ Ask Ahad\'s AI'}
        </span>
      </div>
    </>
  );
}

export default Profile;