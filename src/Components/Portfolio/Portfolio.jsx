import React from "react";
// images
import AV1 from "../../assets/img/2.png";
import AV2 from "../../assets/img/3.png";

const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <h2> Portfolio </h2>
      {/* project section */}
      <div className="project">
        <img src={AV1} alt="project-1" />
        <h3> Newsletter project</h3>
        <p>
          The "Newsletter" project is a web application designed to simplify and
          streamline the process of sending out newsletters and updates to your
          subscribers. With a user-friendly interface and a range of features,
          it's the perfect tool for content creators, businesses, and
          organizations looking to keep their audience informed and engaged.
        </p>
      </div>
      {/* projection 2 */}
      <div className="project">
        <img src={AV2} alt="project-1" />
        <h3> Weather App project</h3>
        <p>
          I developed a dynamic and user-friendly weather application using
          React that provides real-time weather information for any location
          worldwide. This project showcases my proficiency in front-end
          development and my ability to integrate external APIs effectively.
        </p>
      </div>
    </section>
  );
};

export default Portfolio;
