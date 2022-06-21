import React from "react";
import Container from "./Container";
import logo from "../assets/logo.svg";
import i1 from "../assets/contact/i1.svg";
import i2 from "../assets/contact/i2.svg";
import i3 from "../assets/contact/i3.svg";

const Footer = () => {
  return (
    <Container parentClass="footer">
      <div className="row">
        <div className="col-4">
          <div className="row">
            <div className="col-10">
              <img className="w-100" src={logo} alt="" />
            </div>
          </div>
          <p className="f22">© 2022 Lacabana Hair Studio</p>
        </div>
        <div className="col-8">
          <div className="d-flex justify-content-between">
            <div>
              <h2 className="fw800 text-white">Hours</h2>
              <p className="para mt-4 f20">
                Monday 10a.m–6p.m Friday 10a.m.–6p.m <br />
                Tuesday 10a.m–6p.m Saturday 10a.m.–5:30p.m <br />
                Wednesday 10a.m–6p.m Sunday Closed <br />
                Thursday 10a.m–6p.m
              </p>
            </div>
            <div>
              <h2 className="fw800 text-white">Contact Us</h2>

              <ul className="mt-4 list-unstyled contact_icons">
                <li>
                  <img src={i1} alt="" />
                  <a href="tel:604-253-4335">604-253-4335</a>
                </li>
                <li>
                  <img src={i2} alt="" />
                  <a href="tel:778-863-7503">778-863-7503</a>
                </li>
                <li>
                  <img src={i3} alt="" />
                  <a href="mailto:nhanvuc@yahoo.com">nhanvuc@yahoo.com</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
