import React from "react";
import Container from "../layout/Container";
import Tinting from "../assets/service/Tinting-black-ver 2.png";
import haircut from "../assets/service/haircut_-black-vers 2.png";
import waxing from "../assets/service/waxing-black-ver 2.png";

const Service = () => {
  const service = [
    {
      img: Tinting,
      name: "Haircut",
      para: "We served the haircut service with not a reasonable price but great style.",
    },
    {
      img: haircut,
      name: "Waxing",
      para: "We always tried to do our best not to have pain during waxing.",
    },
    {
      img: waxing,
      name: "Tinting",
      para: "We focused on naturally doing the Tinting.",
    },
  ];

  return (
    <Container parentClass="service">
      <h1 className="text-center f64 color1 fw-bold">Our Services</h1>

      <div className="row align-items-end gy-5">
        {service.map((prev, i) => {
          return (
            <div key={i} className="col-12 col-sm-6 col-md-4 single">
              <div className="d-flex justify-content-center">
                <img src={prev.img} alt="" />
              </div>
              <h2 className="text-center fw800 color1">{prev.name}</h2>
              <p className="color1 f20">{prev.para}</p>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default Service;
