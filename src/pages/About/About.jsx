import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import Topbar from "../../components/Topbar/Topbar";
import AboutUs from "./AboutUs";
import ClientQuote from "./ClientQuote";
import FromOurBlog from "./FromOurBlog";

const About = () => {


  return (
    <Layout>
      <Topbar text='About' />
      <AboutUs/>
      <ClientQuote/>
      <FromOurBlog/>
    </Layout>
  );
};

export default About;
