import React, { useState } from 'react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [toastMsg, setToastMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showToast = (type: 'success' | 'error', msg: string) => {
    setStatus(type);
    setToastMsg(msg);
    setTimeout(() => setStatus('idle'), 6000);
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      showToast('error', '⚠ Please fill in your name, email, and message.');
      return;
    }
    setStatus('loading');

    try {
      const data = new FormData();
      data.append('access_key', '3d9598ed-2434-4631-93ad-cea34c918ae9');
      data.append('subject', 'New Inquiry from Website');
      data.append('from_name', 'Website Inquiry System');
      data.append('name', formData.name);
      data.append('company', formData.company);
      data.append('email', formData.email);
      data.append('phone', formData.phone);
      data.append('message', formData.message);

      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: data });
      const json = await res.json();

      if (json.success) {
        showToast('success', '✓ Inquiry sent successfully! We will get back to you within 24 hours.');
        setFormData({ name: '', company: '', email: '', phone: '', message: '' });
      } else {
        throw new Error(json.message || 'Submission failed');
      }
    } catch {
      showToast('error', '✗ Sending failed. Please try again or contact us directly by email.');
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '60px 20px',
        background: '#faf8f3',
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600&family=DM+Sans:wght@300;400;500&display=swap');
        .contact-input {
          width: 100%;
          padding: 12px 14px;
          border: 1px solid #e2ddd5;
          border-radius: 2px;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          color: #1a1a2e;
          background: #faf8f3;
          transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
          outline: none;
          box-sizing: border-box;
        }
        .contact-input:focus {
          border-color: #c9a84c;
          background: #ffffff;
          box-shadow: 0 0 0 3px rgba(201,168,76,0.12);
        }
        .btn-submit-contact {
          flex-shrink: 0;
          padding: 13px 36px;
          background: #1a1a2e;
          color: #fff;
          border: none;
          border-radius: 2px;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          font-weight: 500;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: box-shadow 0.2s, transform 0.15s;
        }
        .btn-submit-contact::before {
          content: '';
          position: absolute;
          inset: 0;
          background: #c9a84c;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s cubic-bezier(0.22,1,0.36,1);
        }
        .btn-submit-contact:hover::before { transform: scaleX(1); }
        .btn-submit-contact:hover { box-shadow: 0 6px 24px rgba(201,168,76,0.3); }
        .btn-submit-contact:active { transform: scale(0.98); }
        .btn-submit-contact span { position: relative; z-index: 1; }
        .btn-submit-contact:disabled { opacity: 0.7; pointer-events: none; }
        @keyframes fadeUpCard {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .contact-card {
          animation: fadeUpCard 0.7s cubic-bezier(0.22,1,0.36,1) both;
        }
        @media (max-width: 720px) {
          .contact-card { grid-template-columns: 1fr !important; }
          .form-grid-inner { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <div
        className="contact-card"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.4fr',
          maxWidth: 960,
          width: '100%',
          background: '#fff',
          borderRadius: 2,
          boxShadow: '0 4px 60px rgba(26,26,46,0.10)',
          overflow: 'hidden',
        }}
      >
        {/* ── Left Panel ── */}
        <div
          style={{
            background: '#0056a7',
            padding: '56px 44px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* decorative circles */}
          <div style={{ position: 'absolute', bottom: -60, right: -60, width: 220, height: 220, borderRadius: '50%', border: '40px solid rgba(255,255,255,0.06)' }} />
          <div style={{ position: 'absolute', top: -40, left: -40, width: 160, height: 160, borderRadius: '50%', border: '30px solid rgba(255,255,255,0.05)' }} />

          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(26px, 3.5vw, 38px)',
              color: '#ffffff',
              lineHeight: 1.25,
              fontWeight: 600,
              position: 'relative',
              zIndex: 1,
            }}
          >
            Start with the ring,<br />go beyond more
          </h1>
        </div>

        {/* ── Right Panel ── */}
        <div style={{ padding: '56px 48px' }}>
          {/* Header */}
          <div style={{ marginBottom: 36 }}>
            <div style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#c9a84c', fontWeight: 500, marginBottom: 8 }}>
              Business Inquiry
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, color: '#1a1a2e', fontWeight: 600 }}>
              Send an Inquiry
            </h2>
          </div>

          {/* Toast */}
          {(status === 'success' || status === 'error') && (
            <div style={{
              marginBottom: 20,
              padding: '14px 18px',
              borderRadius: 2,
              fontSize: 13.5,
              fontWeight: 500,
              background: status === 'success' ? '#f0faf4' : '#fff5f5',
              border: `1px solid ${status === 'success' ? '#86efac' : '#fca5a5'}`,
              color: status === 'success' ? '#166534' : '#991b1b',
            }}>
              {toastMsg}
            </div>
          )}

          {/* Form Grid */}
          <div className="form-grid-inner" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>

            {/* Name */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <label style={{ fontSize: 11.5, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#7a7a8a', fontWeight: 500 }}>Name *</label>
              <input className="contact-input" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" />
            </div>

            {/* Company */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <label style={{ fontSize: 11.5, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#7a7a8a', fontWeight: 500 }}>Company</label>
              <input className="contact-input" name="company" value={formData.company} onChange={handleChange} placeholder="Company / Organization" />
            </div>

            {/* Email */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <label style={{ fontSize: 11.5, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#7a7a8a', fontWeight: 500 }}>Email *</label>
              <input className="contact-input" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" />
            </div>

            {/* Phone */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <label style={{ fontSize: 11.5, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#7a7a8a', fontWeight: 500 }}>Phone</label>
              <input className="contact-input" type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+1 ..." />
            </div>

            {/* Message */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6, gridColumn: '1 / -1' }}>
              <label style={{ fontSize: 11.5, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#7a7a8a', fontWeight: 500 }}>Message *</label>
              <textarea
                className="contact-input"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Please describe your requirements, quantity, expected delivery date, etc."
                style={{ minHeight: 110, resize: 'vertical', lineHeight: 1.6 }}
              />
            </div>

            {/* Submit */}
            <div style={{ gridColumn: '1 / -1', display: 'flex', alignItems: 'center', gap: 20, marginTop: 4 }}>
              <button
                className="btn-submit-contact"
                onClick={handleSubmit}
                disabled={status === 'loading'}
              >
                <span>{status === 'loading' ? 'Sending…' : 'Submit Inquiry'}</span>
              </button>
              <p style={{ fontSize: 12, color: '#7a7a8a', lineHeight: 1.6 }}>
                By submitting, you agree to our privacy policy.<br />
                We never share your information with third parties.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
