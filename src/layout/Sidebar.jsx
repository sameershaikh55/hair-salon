import React from "react";
import data from "./navigations.json";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, OnClick }) => {
  return (
    <div
      onClick={OnClick}
      style={{
        opacity: `${isOpen ? "1" : "0"}`,
        top: `${isOpen ? "0%" : "-100%"}`,
      }}
      className="SideBarContainer"
    >
      <ul>
        {data.navigations.map((item, i) => {
          return (
            <li className="fw600 text-white f28 pointer" key={i}>
              <Link to={item.url}>{item.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
