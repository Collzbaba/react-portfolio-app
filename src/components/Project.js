import React from "react";
import "../style/Project.css";
import "./HeaderSocials";
import HeaderSocials from "./HeaderSocials";
import app18 from "../assets/app-18-social-network-api.png";
import app14 from "../assets/app14-Mvc-Tech-Blog.png";
import gpproject from "../assets/gpproject2-primary-keys-rentals.png";
import app19 from "../assets/app19pwa.png";
import app12 from "../assets/app12-employeeTracker.png";
import app10 from "../assets/app10-team-profile-generator.png";
import app11 from "../assets/DaydreamAthletics-Project.png";

function Project() {
  return (
    <section id="portfolio">
      <h5>My Most Recent Applications</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={app11} alt="Day Dream Athletics" />
          </div>
          <h3>Day Dream Athletics Project</h3>
          <a
            href="https://github.com/Collzbaba/DayDreamAthletic-App"
            className="btn"
            target="__blank"
          >
            Github
          </a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={app18} alt="SocialNetworkAPI" />
          </div>
          <h3>Social Network API</h3>
          <a
            href="https://github.com/Collzbaba/social-network-api"
            className="btn"
            target="__blank"
          >
            Github
          </a>
          <a
            href="https://vimeo.com/763662187"
            className="btn btn-secondary"
            target="__blank"
          >
            Live Demo
          </a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={app14} alt="MVCTechBlog" />
          </div>
          <h3>MVC TechBlog</h3>

          <a
            href="https://github.com/Collzbaba/Mvc-Tech-Blog"
            className="btn"
            target="__blank"
          >
            Github
          </a>
          <a
            href="https://blessed-mvc-tech-blog.herokuapp.com/dashboard"
            className="btn btn-secondary"
            target="__blank"
          >
            Live Demo
          </a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={gpproject} alt="" />
          </div>
          <h3>Primary Keys Rentals</h3>
          <a
            href="https://github.com/Collzbaba/Primary-Keys-Rentals"
            className="btn"
            target="__blank"
          >
            Github
          </a>
          <a
            href="https://primary-keys-rentals.herokuapp.com/login"
            className="btn btn-secondary"
            target="__blank"
          >
            Live Demo
          </a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={app19} alt="TextEditorPWA" />
          </div>
          <h3>Text Editor PWA</h3>
          <a
            href="https://github.com/Collzbaba/progressive-web-applications--pwa-"
            className="btn"
            target="__blank"
          >
            Github
          </a>
          <a
            href="https://stark-thicket-97300.herokuapp.com/"
            className="btn btn-secondary"
            target="__blank"
          >
            Live Demo
          </a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={app12} alt="EmployeeTracker" />
          </div>
          <h3>Employee Tracker</h3>
          <a
            href="https://github.com/Collzbaba/Employee-Tracker"
            className="btn"
            target="__blank"
          >
            Github
          </a>
          <a
            href="https://kapwi.ng/w/WT3a9uaKVa"
            className="btn btn-secondary"
            target="__blank"
          >
            Live Demo
          </a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={app10} alt="TeamProfileGenerator" />
          </div>
          <h3>Team Profile Generator</h3>
          <a
            href="https://github.com/Collzbaba/team-profile-generator-app"
            className="btn"
            target="__blank"
          >
            Github
          </a>
          <a
            href="https://www.awesomescreenshot.com/video/12081469?key=3af71984216838d52ad929c7f8390e5e"
            className="btn btn-secondary"
            target="__blank"
          >
            Live Demo
          </a>
        </article>
      </div>
      <HeaderSocials />
    </section>
  );
}

export default Project;
