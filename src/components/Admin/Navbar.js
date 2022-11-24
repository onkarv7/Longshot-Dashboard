import React from "react";

import "./Navbar.css";

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
              <div >
            
               
                <h4>My First Project</h4>
              </div>
            </div>



            <li>
              <a href="#">
                <i className="uil uil-estate"></i>
                <span className="link-name">Dashboard</span>
              </a>
            </li>

            <li>
              <a href="#">
                <i className="uil uil-estate"></i>
                <span className="link-name">Recipes</span>
              </a>
            </li>
            <hr />
            <li>
              <a href="#">
                <i className="uil uil-estate"></i>
                <span className="link-name">Blog</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="uil uil-estate"></i>
                <span className="link-name">Templates</span>
              </a>

              <li>
                <a href="#">
                  <i className="uil uil-estate sub-menu"></i>
                  <span className="link-name">Favourites</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="uil uil-estate sub-menu"></i>
                  <span className="link-name">Custome Template</span>
                </a>
              </li>
            </li>

            <li>
              <a href="#">
                <i className="uil uil-estate"></i>
                <span className="link-name">Integrations</span>
              </a>
              <li>
                <a href="#">
                  <i className="uil uil-estate sub-menu"></i>
                  <span className="link-name sub-menu">Semrush</span>
                </a>
              </li>
            </li>
          </ul>

          <ul className="logout-mod">
          <div className="project-end">
           
           
                <p style={{fontWeight:700}} >Kritikalpa.saha</p>
                <h6 style={{fontWeight:500}} >Credit Used 313.2</h6>
              <button><i></i><span>Change Plan</span></button>
              <div><i></i><span>Product Roadmap</span></div>
              <div><i></i><span>What's New?</span></div>
            
            </div>

            <li>
              <a href="#">
                <i className="uil uil-estate"></i>
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
