import React, { useState } from "react";
import bgImg from "../../../assets/hhs_logos_wordmark_black.png";
import img from "../../../assets/Group 75322527.png";
import "../../../styles/newStyles.css";
import { Link } from "react-router-dom";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      email: email,
      password: password,
    };

    console.log("data", data);
  };

  return (
    <div className="bg">
      <div className="container w-100 d-flex flex-column justify-content-center align-items-center">
        <div className="row">
          <div className="col-lg-12 col-md-sm-12 mb-3 mt-5 d-flex justify-content-center align-items-center">
            <img src={bgImg} alt="" />
          </div>
        </div>
        <div className="row d-flex flex-column justify-content-center align-items-center">
          <div className="input_block w-100">
            <div className="col-lg-6 col-md-sm-8 mt-2">
              {" "}
              <h3>
                <i> Sign in to your account</i>
              </h3>
            </div>
            <div className="w-75">
              <div>Email</div>
              <div className="input">
                <input
                  type="text"
                  placeholder="Enter your registered email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-sm-4 w-75 ">
              <div className="w-75">
                <div>Password</div>
                <div>{/* <a href="#">Forgot your password</a> */}</div>
              </div>
              <div className="input">
                <input
                  type="text"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-sm-4 w-75">
              <input type="checkbox" id="flexCheckDefault" />
              <label htmlFor="flexCheckDefault">
                stay signed in for a week ?
              </label>
            </div>
            <div className="col-lg-6 col-md-sm-4 w-75">
              <Link to={"/"}>
                {" "}
                <button
                  onClick={() => {
                    handleSubmit();
                  }}
                  className="w-100 mb-4"
                >
                  <b>Sign in</b>
                </button>
              </Link>
            </div>
          </div>
          <div className="col-lg-8 col-md-sm-6 w-75">
            <div className="">
              <img src={img} alt="" />
            </div>
            <div>
              <p style={{ color: "white" }}>
                Bookmark this page and only use <br />
                the bookmark to sign in to avoid phishing attempts phishing
                website pretend to be stripe to <br />
                access your password
              </p>
            </div>
            <div style={{ color: "white", width: "95%" }}>
              is this tip helpful? <button> Yes 👍 </button>{" "}
              <button> No 👎 </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
