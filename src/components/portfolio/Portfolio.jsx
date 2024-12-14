import React from 'react';
import './Portfolio.css';
import { FaGithub } from "react-icons/fa";
import img from '../../assets/portimg/Capture.png';
import img1 from '../../assets/portimg/Capture1.png';
import img2 from '../../assets/portimg/Capture2.png';
import img3 from '../../assets/portimg/Capture3.png';
import { useTranslation } from 'react-i18next';

const Portfolio = () => {
  const { t } = useTranslation();

  const projects = [
    {
      title: t('portfolio.bookSellingTitle'),
      description: t('portfolio.bookSellingDescription'),
      image: img,
      githubLink: "https://github.com/sekhashik09/book-selling"
    },
    {
      title: t('portfolio.qrCodeTitle'),
      description: t('portfolio.qrCodeDescription'),
      image: img1,
      githubLink: "https://github.com/sekhashik09/qrcode-generator"
    },
    {
      title: t('portfolio.personalPortfolioTitle'),
      description: t('portfolio.personalPortfolioDescription'),
      image: img2,
      githubLink: "#"
    },
    {
      title: t('portfolio.courseSeekingTitle'),
      description: t('portfolio.courseSeekingDescription'),
      image: img3,
      githubLink: "https://github.com/sekhashik09/course-seeking"
    },
    {
      title: t('portfolio.project5Title'),
      description: t('portfolio.project5Description'),
      image: img,
      githubLink: "#"
    },
    {
      title: t('portfolio.project5Title'),
      description: t('portfolio.project5Description'),
      image: img,
      githubLink: "#"
    }
  ];

  return (
    <section className="portfolio" id="portfolio">
      <div className="center-text">
        <h2>{t('portfolio.heading')} <span>{t('portfolio.subheading')}</span></h2>
      </div>
      <div className="portfolio-flex">
        {projects.map((project, index) => (
          <div className="portfolio-card" key={index}>
            <img src={project.image} alt={`${project.title} image`} />
            <div className="card-overlay">
              <h5>{project.title}</h5>
              <p>{project.description}</p>
              <a href={project.githubLink} target="blank">
                <FaGithub />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
