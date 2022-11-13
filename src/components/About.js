import React from "react";
import HeaderSocial from "./HeaderSocials";

function About(props) {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="container about__container">
        <p>
        Welcome to my little tech world of full stack web development, my name is Blessed Adodo, 
        I am a freelance web developer. I ventured into coding because of my love for computers and technology. 
        I want to use the skills I have learnt from the UC Berkeley Coding Boot camp to meet client needs and 
        solve worlds problems in web development. My Languages are: JavaScript, MySQL, Java, React,
        jQuery, HTML, CSS, and C++
        My Programmings are: Node.js, Express, MongoDB, indexDB, Handlebars, PWA, NoSQL, MVC, OOP, Data structures,
        Bootstrap, Ajax, Mongoose, REST APIs, RESTful, JSON, GitHub, Insomnia, Workbench,
        Compass, Heroku and VS code. I have excellent verbal and written communication, and interpersonal skills.
        </p>
      </div>
      <HeaderSocial />
    </section>
  );
}

export default About;
