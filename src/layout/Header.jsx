import React from "react";
import data from "./navigations.json";

// IMPORTS
import Container from "./Container";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <Container parentClass="header">
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <img className="logo" src={logo} alt="logo" />
        </div>
        <ul className="d-none d-md-flex list-unstyled gap-4 mb-0">
          {data.navigations.map((prev, i) => {
            return (
              <Link
                key={i}
                to={prev.url}
                className="text-decoration-none text-white"
              >
                <li>{prev.name}</li>
              </Link>
            );
          })}
        </ul>
      </div>
    </Container>
  );
};

export default Header;
