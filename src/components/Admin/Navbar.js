import React from "react";

import "./Navbar.css";
import {
  FcPrevious,
  FcEnteringHeavenAlive,
  FcStatistics,
  FcPaid,
  FcServiceMark,
  FcParallelTasks,
  FcGrid,
  FcLike,
  FcTemplate,
  FcVoicemail,
  FcSurvey,
  FcKindle,
  FcPodiumWithSpeaker,
} from "react-icons/fc";
// import { Link } from "@mui/material";

import{Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="logo">
          <img src="/logo.jpg" alt="" />
        </div>

        <div className="menu-items">
          <ul className="nav-links">
            <div className="project">
              <div>
              <Link to='/drag'> <p>Project</p>
                <h4>My First Project</h4></Link>
               
              </div>
            </div>

            <li>
              <a href="#">
                <i>
                  <FcGrid />
                </i>
                <span className="link-name link1">Dashboard</span>
              </a>
            </li>

            <li>
              <a href="#">
                <i>
                  <FcPodiumWithSpeaker />
                </i>
                <span className="link-name">Recipes</span>
              </a>
            </li>
            <hr  style={{marginTop :  '0.7rem',marginBottom :  '0.7rem'}} />
            <li>
              <a href="#">
                <i>
                  <FcKindle />
                </i>
                <span className="link-name">Blog</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i>
                  <FcTemplate />
                </i>
                <span className="link-name">Templates</span>
              </a>

              <li>
                <a href="#">
                  <i className="sub-menu">
                    <FcLike />
                  </i>
                  <span className="link-name">Favourites</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className=" sub-menu">
                    <FcSurvey />
                  </i>
                  <span className="link-name">Custome Template</span>
                </a>
              </li>
            </li>

            <li>
              <a href="#">
                <i>
                  <FcParallelTasks />
                </i>
                <span className="link-name">Integrations</span>
              </a>
              <li>
                <a href="#">
                  <i className=" sub-menu">
                    <FcVoicemail />
                  </i>
                  <span className="link-name ">Semrush</span>
                </a>
              </li>
            </li>
          </ul>

          <ul className="logout-mod">
            <div className="project-end">
              <li style={{ fontWeight: 700 }}>
                <i>
                  <FcServiceMark className="logo2" />
                </i>
                Kritikalpa.saha
              </li>
              <li style={{ fontWeight: 500, paddingLeft: "1.5rem" }}>
                Credit Used 313.2
              </li>
              <button className="add-btn">
                <i>
                  <FcPaid className="logo1" />
                </i>
                <span>Change Plan</span>
              </button>
              <li>
                <i>
                  <FcStatistics className="logo1" />
                </i>
                <span>Product Roadmap</span>
              </li>
              <li>
                <i>
                  <FcEnteringHeavenAlive className="logo1" />
                </i>
                <span>What's New?</span>
              </li>
            </div>

            <li>
              <a href="#">
                <i>
                  <FcPrevious className="logo1" />
                </i>
                <span className="link-name">Collapse</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
