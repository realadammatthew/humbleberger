import React from 'react';
import '../i18n'; // Initialize i18n
import Header from "../components/header";
import Banner from "../components/banner";
import Copyright from "../components/copyright";

const withBanner = (Component) => (props) => (
  <>
    <Header />
    <Banner />
    <Component {...props} />
    <Copyright />
  </>
);

export default withBanner;
