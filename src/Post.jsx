import React from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import InputOptions from "./InputOptions";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

const Post = ({ name, description, message, photoURL }) => {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar />

        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className="post__body">
        <p>{message}</p>
      </div>
      <div className="post__buttons">
        <InputOptions Icon={ThumbUpOffAltIcon} color="gray" title="Like" />
        <InputOptions Icon={ChatOutlinedIcon} color="gray" title="Comment" />
        <InputOptions Icon={ShareOutlinedIcon} color="gray" title="Share" />
        <InputOptions Icon={SendOutlinedIcon} color="gray" title="Send" />
      </div>
    </div>
  );
};

export default Post;
