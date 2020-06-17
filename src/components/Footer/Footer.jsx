import React from 'react';
import { Container } from 'react-bootstrap';

const footerData = {
  networks: [
    {
      name: 'twitter',
      url: 'https://twitter.com/chee_kh_v',
    },
    {
      name: 'codepen',
      url: 'https://codepen.io/davinchee',
    },
    {
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/vincent-kh-chee/',
    },
    {
      name: 'github',
      url: 'https://github.com/davinchee',
    },
    {
      name: 'coffee',
      url: 'https://www.buymeacoffee.com/davinchee',
    },
    {
      name: 'medium',
      url: 'https://medium.com/@dahvinchee',
    },
  ],
};

const Footer = () => {
  return (
    <footer className="footer navbar-static-bottom">
      <Container>
        <a href="#top" aria-label="Back To Top" className="back-to-top">
          <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
        </a>
        <div className="social-links">
          {footerData.networks.map(x => {
            const { name, url } = x;
            return (
              <a
                key={name}
                href={url || 'https://github.com/cobidev/gatsby-simplefolio'}
                rel="noopener noreferrer"
                target="_blank"
                aria-label={name}
              >
                <i className={`fa fa-${name || 'refresh'} fa-inverse`} />
              </a>
            );
          })}
        </div>
        <hr />
        <p className="footer__text">{new Date().getFullYear()}</p>
      </Container>
    </footer>
  );
};

export default Footer;
