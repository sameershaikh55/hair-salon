import React from "react";
import Container from "../layout/Container";
import Interior from "../assets/Interior5 1.png";
import Hairstyle from "../assets/Hairstyle1 2.png";

const About = () => {
  return (
    <Container parentClass="about">
      <h1 className="text-center f64 text-white fw-bold">About Us</h1>

      <div className="row gx-md-5 gy-5">
        <div className="col-12 col-md-6">
          <img className="w-100" src={Interior} alt="" />
        </div>
        <div className="col-12 col-md-6 text-white">
          <h2 className="lh-lg fw-bold">
            One of our values is a good relationship with customers.
          </h2>
          <p className="f20">
            We collected a lot of hats are gifts from our customers. And each
            one, it’s got a little signature on the inside.
          </p>
        </div>
        <div className="order-4 col-12 col-md-6 text-white">
          <h2 className="lh-lg fw-bold">Always care about looking neat </h2>
          <p className="f20">
            We always try to do our best for customers to look neat after having
            a haircut. And check out other hairstyles below this section.
          </p>
        </div>
        <div className="order-md-4 col-12 col-md-6">
          <img className="w-100" src={Hairstyle} alt="" />
        </div>
      </div>
    </Container>
  );
};

export default About;
