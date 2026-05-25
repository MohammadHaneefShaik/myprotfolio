import React, { useState } from 'react';
import './contactstyle.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '', type: '' });

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: '', type: '' }), 4000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const form = new FormData();
    form.append("access_key", "748f9bcb-d13b-4676-ba38-0f84080f88a9");
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("message", formData.message);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form
      });

      const data = await res.json();

      if (data.success) {
        showToast("✅ Your message has been sent successfully!", "success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        showToast("❌ Failed to send message. Try again later.", "error");
      }
    } catch (error) {
      console.error("Error:", error);
      showToast("❌ Something went wrong. Please try again.", "error");
    }

    setIsLoading(false);
  };

  return (
    <div className="contact-form-container">
      {/* Toast Notification */}
      {toast.show && (
        <div className={`toast-notification ${toast.type}`}>
          {toast.message}
        </div>
      )}

      <div className="contact-form-box scroll-reveal">
        <h1 style={{ color: "#c770f0" }}>Get in Touch</h1>
        <p>
          Having a <span style={{ color: "#c770f0" }}>project</span>,
          <span style={{ color: "#c770f0" }}> freelance work</span>,
          <span style={{ color: "#c770f0" }}> internship</span>, or any
          <span style={{ color: "#c770f0" }}> collaboration</span> in mind?
          Just drop a message—I'll reach out!
        </p>

        <form onSubmit={handleSubmit} className="contact-form" id="contact-form">
          <div>
            <label htmlFor="name">Your Name</label>
            <input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              required
            />
          </div>

          <div>
            <label htmlFor="email">Your Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="What's your email?"
              required
            />
          </div>

          <div>
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              required
            />
          </div>

          <button type="submit" disabled={isLoading}>
            {isLoading ? <span className="loading-dots">Sending</span> : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
}
