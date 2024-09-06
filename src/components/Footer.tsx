import React from "react";
import "../styles/Footer.css"; // Import component-specific styles
import { ReactComponent as TwitterIcon } from '../svg/twitter.svg';
import { ReactComponent as LinkedInIcon } from '../svg/linkedin.svg';
import { ReactComponent as GithubIcon } from '../svg/github.svg';
import { ReactComponent as MailIcon } from '../svg/mail.svg';

const Footer = () => {
  const email = "intellivision@noahkmoore.com";
  const emailURL = `mailto: ${email}}`;
  const linkedInURL = "https://www.linkedin.com/in/noahkmoore";
  const twitterURL = "https://twitter.com/noahkmoore";
  const githubURL = "https://github.com/mooreman11";
  return (
    <footer className="footer">
      <p>© Intellivision — All rights reserved.</p>
      <div className="social-links">
        <a
          className="social-link"
          target="_blank"
          rel="noopener noreferrer"
          href={linkedInURL}
          title="LinkedIn"
        >
          <LinkedInIcon className="svg-icon"/>
        </a>
        <a
          className="social-link"
          target="_blank"
          rel="noopener noreferrer"
          href={githubURL}
          title="GitHub"
        >
          <GithubIcon className="svg-icon"/>
        </a>
        <a
          className="social-link"
          target="_blank"
          rel="noopener noreferrer"
          href={twitterURL}
          title="Twitter"
        >
          <TwitterIcon className="svg-icon"/>
        </a>
        <a
          className="social-link"
          target="_blank"
          rel="noopener noreferrer"
          href={emailURL}
          title="Email"
        >
          <MailIcon className="svg-icon"/>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
