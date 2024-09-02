import React from "react";
import './AboutUs.css';

function AboutUs() {
  return (
    <main className="about-us">
      <h1>About Us</h1>
      <section className="team">
        <h2>Our Team</h2>
        <div className="team-member">
          <img src="https://via.placeholder.com/150" alt="Team Member" />
          <h3>John Doe</h3>
          <p>Co-Founder & CEO</p>
          <p>John leads our team with a vision for innovation and excellence.</p>
        </div>
        <div className="team-member">
          <img src="https://via.placeholder.com/150" alt="Team Member" />
          <h3>Jane Smith</h3>
          <p>Co-Founder & CTO</p>
          <p>Jane oversees the technical aspects and ensures our solutions are top-notch.</p>
        </div>
        <div className="team-member">
          <img src="https://via.placeholder.com/150" alt="Team Member" />
          <h3>Emily Johnson</h3>
          <p>Lead Designer</p>
          <p>Emily is responsible for our aesthetic and user experience, making sure everything looks great.</p>
        </div>
      </section>
      <section className="mission">
        <h2>Our Mission</h2>
        <p>At Our Company, our mission is to create outstanding products that enhance the lives of our users. We are committed to innovation, quality, and customer satisfaction.</p>
      </section>
    </main>
  );
}

export default AboutUs;