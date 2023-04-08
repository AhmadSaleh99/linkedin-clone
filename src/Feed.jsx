import React, { useEffect, useState } from "react";
import "./Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import InputOptions from "./InputOptions";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import Post from "./Post";
import { db } from "./Firebase";
import { addDoc, collection, onSnapshot } from "firebase/firestore";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "posts"), (snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });

    return () => {
      unsubscribe();
    };
  }, []);
  const sendPost = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "posts"), {
        name: "asdasda",
        description: "asdasdasd",
        message: "",
      });
    } catch (error) {
      console.error("Error adding new post: ", error);
    }
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input type="text" />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOptions Icon={ImageIcon} color="#7085f9" title="Photo" />
          <InputOptions
            Icon={SubscriptionsIcon}
            color="#E7A33E"
            title="Video"
          />
          <InputOptions Icon={EventNoteIcon} color="#C0CBCD" title="Event" />
          <InputOptions
            Icon={CalendarViewDayIcon}
            color="#7FC15E"
            title="Write Article"
          />
        </div>
      </div>
      {/* posts */}
      {posts.map((post) => {})}
      <Post
        name="Ahmad Saleh"
        description="This is a test"
        message="it works"
      />
    </div>
  );
};

export default Feed;
