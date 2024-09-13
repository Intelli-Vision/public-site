import React from "react";
import TwitterIcon from '../assets/svgs/twitter.svg?react';
import LinkedInIcon from '../assets/svgs/linkedin.svg?react';
import GithubIcon from '../assets/svgs/github.svg?react';
import MailIcon from "../assets/svgs/mail.svg?react";
import { emailURL, githubURL, linkedInURL, twitterURL } from "../data";

import "../styles/Footer.css"; // Import component-specific styles

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
