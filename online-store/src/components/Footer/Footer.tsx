import React from 'react';
import './Footer.scss';

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="wrapper">
        <div className="github">
          <p>©</p>
          <p>2022</p>
          <p>
            <a
              className="github_link"
              target="blank"
              href="https://github.com/ShadowFox35">
              github: ShadowFox35
            </a>
          </p>
        </div>
        <div className="rss">
          <a target="blank" href="https://rs.school/js/">
            <img
              className="rss_logo"
              src={`${process.env.PUBLIC_URL}/assets/rs_school_js.svg`}
              alt="rs_school_logo"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
