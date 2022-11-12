import React from 'react';
import './Project.css';
import '../App.css';
import '../portfolio.css';

function Project(props) {
  return (
    <section id="portfolio">
      <h5>My Recent Apps</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            
          </div>
          <h3>MVC Tech Blog</h3>
          {/* add target='_blank' */}
          <a href="https://github.com/Collzbaba/Mvc-Tech-Blog" className="btn">
            Github
          </a>
          <a
            href="https://github.com/Collzbaba/Mvc-Tech-Blog"
            className="btn btn-primary"
          >
            Live Demo
          </a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={pj18} alt="" />
          </div>
          <h3>Web Api Challenge Code Quiz</h3>
          {/* add target='_blank' */}
          <a href="https://github.com/Collzbaba/Web-APIs-Challenge-Code-Quiz" className="btn">
            Github
          </a>
          <a
            href="https://github.com/Collzbaba/Web-APIs-Challenge-Code-Quiz"
            className="btn btn-primary"
          >
            Live Demo
          </a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={pj14} alt="" />
          </div>
          <h3>Work Day Scheduler App</h3>
          {/* add target='_blank' */}
          <a href="https://github.com/Collzbaba/Work-Day-Scheduler-" className="btn">
            Github
          </a>
          <a
            href="https://github.com/Collzbaba/Work-Day-Scheduler-"
            className="btn btn-primary"
          >
            Live Demo
          </a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={pj14} alt="" />
          </div>
          <h3>E-Commerce Back End App</h3>
          {/* add target='_blank' */}
          <a href="https://github.com/Collzbaba/Object-Relational-Mapping" className="btn">
            Github
          </a>
          <a
            href="https://github.com/Collzbaba/Object-Relational-Mapping"
            className="btn btn-primary"
          >
            Live Demo
          </a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={pj14} alt="" />
          </div>
          <h3>Social Network Api App</h3>
          {/* add target='_blank' */}
          <a href="https://github.com/Collzbaba/social-network-api" className="btn">
            Github
          </a>
          <a
            href="https://github.com/Collzbaba/social-network-api"
            className="btn btn-primary"
          >
            Live Demo
          </a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={pj18} alt="" />
          </div>
          <h3>Weather App</h3>
          {/* add target='_blank' */}
          <a href="https://github.com/Collzbaba/Weather-App" className="btn">
            Github
          </a>
          <a
            href="https://github.com/Collzbaba/Weather-App"
            className="btn btn-primary"
          >
            Live Demo
          </a>
        </article>
        <article className="portfolio__item">
            <div className="portfolio__item-image">
                <img src={pj14} alt="" />
                </div>
        </article>
      </div>
    </section>
  );
}

export default Project;