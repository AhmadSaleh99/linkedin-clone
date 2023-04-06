import React from "react";
import "./Sidebar.css";
import { Avatar } from "@mui/material";
const Sidebar = () => {
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://i0.wp.com/www.entertainmentmesh.com/wp-content/uploads/2015/07/cool-fb-profile-cover.jpg?ssl=1"
          alt=""
        />
        <Avatar className="sidebar__avatar" />
        <h2>Ahmad Saleh</h2>
        <h4>a.saleeh.17@gmail.com</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who veiwed you</p>
          <p className="sidebar__statNumber">2500</p>
        </div>
        <div className="sidebar__stat">
          <p>veiwed on post</p>
          <p className="sidebar__statNumber">2500</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("React.js")}
        {recentItem("SoftwareEngineering")}
        {recentItem("Developer")}
        {recentItem("Design")}
      </div>
    </div>
  );
};

export default Sidebar;
