import React from "react";
import About from "../components/About";
import Hero from "../components/Hero";
import Location from "../components/Location";
import Price from "../components/Price";
import Service from "../components/Service";
import SliderComp from "../components/Slider";
import Video from "../components/Video";
import Layout from "../layout";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <div className="dark_bg">
        <About />
        <SliderComp />
        <Video />
      </div>
      <Service />
      <Price />
      <Location />
    </Layout>
  );
};

export default Home;
