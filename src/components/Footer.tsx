import React from "react";
import "../styles/Footer.css"; // Import component-specific styles
import { ReactComponent as TwitterIcon } from '../svg/twitter.svg';
import { ReactComponent as LinkedInIcon } from '../svg/linkedin.svg';
import { ReactComponent as GithubIcon } from '../svg/github.svg';
import { ReactComponent as MailIcon } from '../svg/mail.svg';
import { emailURL, githubURL, linkedInURL, twitterURL } from "../data";

export default function Footer(){
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
