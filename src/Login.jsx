import React, { useState } from "react";
import "./Login.css";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "./Firebase";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";
const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photopic, setPhotopic] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const loginToApp = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            photoUrl: userAuth.user.photopic,
          })
        );
      })
      .catch((error) => alert(error));
  };

  const register = () => {
    if (!name) {
      alert("please enter your full name");
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        // Signed in
        updateProfile(userAuth.user, {
          displayName: name,
          photoURL: photopic,
        }).then(() => {
          dispatch(
            login({
              email: userAuth.user.email,
              uid: userAuth.user.uid,
              displayName: name,
              photoUrl: photopic,
            })
          );
        });
        // ...
      })
      .catch((error) => alert(error));
  };

  return (
    <div className="login">
      <img
        src="https://www.vhv.rs/dpng/d/434-4347570_linkedin-logo-transparent-linkedin-logo-vector-hd-png.png"
        alt="LinkedIn"
      />

      <form>
        <input
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name (Required if registering)"
          type="text"
        />
        <input
          onChange={(e) => setPhotopic(e.target.value)}
          placeholder="Profile pic URL (optinal)"
          type="text"
        />
        <input
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="email"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
        />
        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>
      <p>
        Not a member ?!{" "}
        <span className="login__register" onClick={register}>
          Register now
        </span>
      </p>
    </div>
  );
};

export default Login;
