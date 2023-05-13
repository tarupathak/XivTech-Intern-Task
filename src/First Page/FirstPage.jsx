import React from "react";
import "./first.css";
import img1 from "../Images/img1.jpg";
import img2 from "../Images/img2.png";
import img3 from "../Images/img3.jpg";
import img4 from "../Images/img 4.jpg";
import arrow from "../Images/arrow.svg";
import { NavLink } from "react-router-dom";

const FirstPage = () => {
  return (
    <div>
      <div id="colab">Let's Collaborate</div>
      <div className="topics">
        <div className="content">
          <h1>AI + RPA is what we do</h1>
          <p>
            Future-Proof your business. Drive efficiency, profitability and
            deliver on customer experience
          </p>
          <NavLink to={"/details1"}>
            <p className="link">
              <span>AI + RPA Automation</span>
              <img src={arrow} alt="arrow" className="arrow"  />
            </p>
          </NavLink>
        </div>
        <div>
          <img src={img1} alt="ai/rpa image" className="pic1" />
        </div>
      </div>
      <div className="topics">
        <div className="content">
          <h1>Make Bolder Choices</h1>
          <p>Digital focused strategies to realize market-changing ideas</p>
          <NavLink to={"/details2"}>
            <p className="link">
              <span>Build Better Apps</span>
              <img src={arrow} alt="arrow" className="arrow" />
            </p>
          </NavLink>
        </div>
        <div>
          <img src={img2} alt="ai/rpa image" className="pic" />
        </div>
      </div>
      <div className="topics">
        <div className="content">
          <h1>Innovate with Speed</h1>
          <p>
            Create higher quality software, deliver on customer expectations and
            business goals
          </p>
          <NavLink  to={"/details3"}>
            <p className="link">
              <span>DevOps</span>
              <img src={arrow} alt="arrow" className="arrow" />
            </p>
          </NavLink>
        </div>
        <div>
          <img src={img3} alt="ai/rpa image" className="pic" />
        </div>
      </div>
      <div className="topics">
        <div className="content">
          <h1>Embrace Cloud</h1>
          <p>With Cloud-First accelerate innovation and optimize performance</p>
          <NavLink  to={"/details4"}>
            <p className="link">
              <span>Cloud Services</span>
              <img src={arrow} alt="arrow" className="arrow" />
            </p>
          </NavLink>
        </div>
        <div>
          <img src={img4} alt="ai/rpa image" className="pic" />
        </div>
      </div>
      <div className="btn">Get in Touch</div>
    </div>
  );
};

export default FirstPage;
