import React from "react";
import "../styles/InvestorInfo.css";

export default function Investors(){
  return (
    <div className="investor-info">
      <section className="overview">
        <h2>Company Overview</h2>
        <p>
          Welcome to Intellivision, a pioneering leader in augmented reality technology. Our mission is to revolutionize the AR experience with smart glasses that combine cutting-edge technology and practical design. With a proven track record of innovation and success, we are dedicated to driving growth and creating exceptional value for our stakeholders.
        </p>
      </section>

      <section className="financials">
        <h2>Financial Highlights</h2>
        <ul>
          <li>
            <strong>Revenue:</strong> $0 million (2023)
          </li>
          <li>
            <strong>Net Income:</strong> $0 million (2023)
          </li>
          <li>
            <strong>Gross Margin:</strong> 0%
          </li>
          <li>
            <strong>Funding Raised:</strong> $0 million
          </li>
        </ul>
      </section>

      <section className="team">
        <h2>Meet Our Team</h2>
        <div className="team-member">
          <img src="https://via.placeholder.com/80" alt="Noah Moore" />
          <h3>Noah Moore</h3>
          <p>CEO & Founder</p>
          <p>Noah is a visionary leader with extensive experience in the tech industry. He is driving Intellivision&apos;s mission to innovate the AR space and deliver cutting-edge solutions.</p>
        </div>
        <div className="team-member">
          <img src="https://via.placeholder.com/80" alt="Leor Yomtobian" />
          <h3>Leor Yomtobian</h3>
          <p>CTO - Engineering</p>
          <p>Leor leads our engineering team, focusing on the development of advanced AR technologies and ensuring our products are at the forefront of innovation.</p>
        </div>
        <div className="team-member">
          <img src="https://via.placeholder.com/80" alt="Michael Berman" />
          <h3>Michael Berman</h3>
          <p>CTO - Programming</p>
          <p>Michael spearheads our programming efforts, working on the core software that powers our smart glasses and enhances the AR experience.</p>
        </div>
      </section>

      <section className="contact">
        <h2>Contact Us</h2>
        <p>For investment inquiries, please reach out to us:</p>
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:intellivision@noahkmoore.com">
            intellivision@noahkmoore.com
          </a>
        </p>
        <p>
          <strong>Phone:</strong> (123) 456-7890
        </p>
        <p>
          <strong>Address (Israel):</strong> Carlibach 1, Tel Aviv
        </p>
        <p>
          <strong>Address (United States):</strong> 231 Front Street, Brooklyn, New York, 11201
        </p>
      </section>
    </div>
  );
};
