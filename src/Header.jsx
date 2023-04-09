import React from "react";
import "./Header.css";
import HeaderOptions from "./HeaderOptions.jsx";
import SearchIcon from "@mui/icons-material/Search";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import HomeIcon from "@mui/icons-material/Home";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "./features/userSlice";
import { auth } from "./Firebase";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const logoutFromApp = () => {
    dispatch(logout());

    auth.signOut();
  };

  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://www.vectorlogo.zone/logos/linkedin/linkedin-icon.svg"
          alt=""
        />

        <div className="header__search">
          <SearchIcon />
          <input placeholder="Search" type="text" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOptions Icon={HomeIcon} title="Home" />
        <HeaderOptions Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOptions Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOptions Icon={ChatIcon} title="Messaging" />
        <HeaderOptions Icon={NotificationsIcon} title="Notifications" />
        <HeaderOptions
          avatar={user?.photoUrl ? user?.photoUrl : user?.displayName[0]}
          title={user?.displayName}
          onClick={logoutFromApp}
        />
      </div>
    </div>
  );
};

export default Header;
