import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>vincent chee | dev</title>
        <html lang="en" />
        <meta name="description" content="the portfolio" />
        <script src="https://kit.fontawesome.com/2a0224dc11.js" crossorigin="anonymous" data-auto-add-css="false" />
      </Helmet>
      <App />
    </>
  );
};
