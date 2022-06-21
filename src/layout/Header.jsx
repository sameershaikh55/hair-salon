import React from "react";
import data from "./navigations.json";

// IMPORTS
import Container from "./Container";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

const Header = ({ isOpen, OnClick }) => {
  return (
    <Container parentClass="header">
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <img className="logo" src={logo} alt="logo" />
        </div>

        <div className="d-block d-md-none">
          {(isOpen && (
            <svg
              onClick={OnClick}
              stroke="#c5c5c5"
              fill="#c5c5c5"
              stroke-width="0"
              viewBox="0 0 352 512"
              height="2.5em"
              width="2.5em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path>
            </svg>
          )) || (
            <svg
              onClick={OnClick}
              stroke="#c5c5c5"
              fill="#c5c5c5"
              stroke-width="0"
              viewBox="0 0 512 512"
              height="2.5em"
              width="2.5em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"></path>
            </svg>
          )}
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
