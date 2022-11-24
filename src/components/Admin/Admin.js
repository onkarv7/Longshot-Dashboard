import React from "react";
import Navbar from "./Navbar";
import "./Admin.css";
import Table from "./Table";

const Admin = () => {
  return (
    <div>
      <Navbar />
      <div className="container" style={{  }}>
        <h6><span className="grey">Keyword Explorer</span>  : Keyword Overview</h6>
        <h3 className="keyword">Keyword :<span className="grey"> Shopping in Barcelona</span> </h3>
        <h6> Database :United States 🇺🇸</h6>
        <hr className="line" />
      </div>
      <div className="grid-box">
        <div className="grid1 grid-items">
          <p>Volume</p>
          <h2>480</h2>
          <hr />
          <p>Keyboard Difficulty</p>
          <h2>46%</h2>
          {/* <a href="https://icons8.com/icon/19875/loader"></a> */}
          <p>Possible</p>
          <p>
            Slightly more competition. you'll need well-structured and unique
            content appropriately optimized for your keywords.
          </p>
        </div>
        <div className="grid2 grid-items">
          <p>Intent</p>
          <div className="commercial-text">Commercial</div>
        </div>
        <div className="grid3 grid-items">
          <p>Results</p>
          <h2>313M</h2>
        </div>
        <div className="grid4">
          <p>
            CPC
            <h3>$0.12</h3>
          </p>
          <p>
            Com.
            <h3>0.24</h3>
          </p>
        </div>
        <div className="grid5">
         <button>Broad Match</button>
          <button>Related</button>
          <button>Questions</button>
       
        <button className="add-list" >Add to list</button>
        </div>

        {/* Tables  */}
        <div className="grid6">
          {" "}
         <Table />
        </div>
      </div>
    </div>
  );
};

export default Admin;
