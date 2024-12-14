import React, { useState } from 'react';
import './Contact.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import validator from 'email-validator';
import { Vortex } from 'react-loader-spinner';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validator.validate(formData.email)) {
      toast.error(t('contact.emailError'));
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post('https://myportfolio-backend-b2hv.onrender.com/send-email', formData);
      toast.success(t('contact.sendSuccess'));
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error(error);
      toast.error(t('contact.sendError'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-details">
          <h2>{t('contact.heading')}</h2>
          <ul>
            <li><strong>{t('contact.address')}:</strong> {t('contact.addressDetails')}</li>
            <li><strong>{t('contact.phone')}:</strong> {t('contact.phoneDetails')}</li>
            <li className='ema'><strong>{t('contact.email')}:</strong> {t('contact.emailDetails')}</li>
          </ul>
        </div>
        <div className="contact-form">
          <h2>{t('contact.formHeading')}</h2>
          <p>{t('contact.formDescription')}</p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">{t('contact.nameLabel')}</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={loading}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">{t('contact.emailLabel')}</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={loading}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">{t('contact.messageLabel')}</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                disabled={loading}
              ></textarea>
            </div>
            <button type="submit" className="submit-button" disabled={loading}>
              {loading ? (
                <Vortex
                  alignment="center"
                  visible={true}
                  height="50"
                  width="50"
                  ariaLabel="vortex-loading"
                  wrapperClass="vortex-wrapper"
                  wrapperStyle={{ display: 'inline-block' }}
                  colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
                />
              ) : t('contact.submit')}
            </button>
          </form>
          <ToastContainer />
        </div>
      </div>
    </section>
  );
};

export default Contact;
