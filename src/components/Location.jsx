import React from "react";
import Container from "../layout/Container";
import map from "../assets/map.svg";

const Location = () => {
  return (
    <Container parentClass="location">
      <h1 className="text-center color1 f64 fw-bold">Location</h1>

      <div className="row">
        <div className="col-12">
          <img className="w-100" src={map} alt="" />
        </div>
      </div>

      <h2 className="mt-5">
        La Cabana Hair Studio, 1912 Commercial Dr, Vancouver, BC V5N 4A7
      </h2>
    </Container>
  );
};

export default Location;
