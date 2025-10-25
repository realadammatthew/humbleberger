import React from 'react';
import '../i18n'; // Initialize i18n
import Header from "../components/header";
import Navbar from "../components/Navbar";
import Banner from "../components/banner";
import Copyright from "../components/copyright";

const withBanner = (Component) => (props) => (
  <>
    <Header />
    <Navbar />
    <Banner />
    <Component {...props} />
    <Copyright />
  </>
);

export default withBanner;
