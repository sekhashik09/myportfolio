import React from 'react';
import './Home.css';
import { FaGithub, FaFacebook, FaLinkedinIn } from "react-icons/fa";
import myphoto from '../../assets/img/myphoto.png';
import resume from '../../assets/img/ashik_billa_resume.pdf';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation(); // Initialize the translation function

  return (
    <section className="hero" id="home">
      <div className="main-content">
        <h2>{t('home.greeting')}</h2>
        <h1>{t('home.introduction')} <span>{t('home.name')}</span></h1>
        <p>{t('home.description')}</p>
        <div className="sci">
          <a href="https://www.facebook.com/devunex.89" target="blank"><FaFacebook /></a>
          <a href="https://www.linkedin.com/in/sekh-ashik-billa-989193258/" target="blank"><FaLinkedinIn /></a>
          <a href="https://github.com/sekhashik09" target="blank"><FaGithub /></a>
        </div>
        <div className="main-btn">
          <a href={resume} className="btn">{t('home.downloadCV')}</a>
        </div>
      </div>
      <div className="home-img">
        <div className="img-box">
          <div className="img-item">
            <img src={myphoto} alt={t('home.name')} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
