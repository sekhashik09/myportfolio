import React from 'react';
import './About.css';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="about" id="about">
        <h2>{t('about.title')}</h2> 
    
        <div className="about-text">
            <p>{t('about.intro')}</p>
            <p>{t('about.internship')}</p>
            <p>{t('about.learning')}</p>
        </div>
    
        <div className="about-boxes">
            <div className="box education">
                <h3>{t('about.education')}</h3>
                <p>{t('about.bca')}</p>
                <p>{t('about.vocational')}</p>
                <p>{t('about.secondary')}</p>
            </div>
            <div className="box">
                <h3>{t('about.experience')}</h3>
                <p>{t('about.internship_role')}</p>
                <p>{t('about.projects')}</p>
            </div>
        </div>
    </section>
  );
}

export default About;
