import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import Header from "../../components/Header";
import formImg from "../../assets/Group 75322468.png";
import rect1 from "../../assets/Rectangle 482 (1).png";
import rect2 from "../../assets/Rectangle 483.png";
import rect3 from "../../assets/Rectangle 484.png";
import "../../styles/style.css";

const Contact = () => {
  const sectionData = () => {
    return (
      <section id="contact">
        <div
          style={{
            padding: "20px 30px 20px 30px",
          }}
        >
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="contact-left">
                <img
                  src={formImg}
                  style={{ width: "100%", position: "relative" }}
                />
              </div>
            </div>
            <div className="col-lg-8 col-md-6">
              <div className="contact-right">
                <h1>We’d love to help you</h1>
                <p>Reach out we’ll get touch within 24 hours </p>
                <form style={{ marginTop: "4%" }}>
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <h2
                        style={{
                          fontFamily: "serif",
                        }}
                      >
                        First name
                      </h2>
                      <input
                        className="input"
                        type="text"
                        placeholder="First name"
                      />
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-16 col-12">
                      <h2
                        style={{
                          fontFamily: "serif",
                        }}
                      >
                        Last name
                      </h2>
                      <input
                        className="input"
                        type="text"
                        placeholder="Last name"
                      />
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <h2
                        style={{
                          fontFamily: "serif",
                        }}
                      >
                        Subject
                      </h2>
                      <input
                        className="input"
                        type="text"
                        placeholder="Write Subject"
                      />
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <h2
                        style={{
                          fontFamily: "serif",
                        }}
                      >
                        Email
                      </h2>
                      <input
                        className="input"
                        type="text"
                        placeholder="Email"
                      />
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <h2
                        style={{
                          fontFamily: "serif",
                        }}
                      >
                        Phone Number
                      </h2>
                      <input
                        className="input"
                        type="text"
                        placeholder="Phone No."
                      />
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <h2
                        style={{
                          fontFamily: "serif",
                        }}
                      >
                        Message
                      </h2>
                      <textarea placeholder="Message" defaultValue={""} />
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <input type="radio" id="radio" name="fav_language" />
                      &nbsp;{" "}
                      <label>You agree to our friendly privacy policy</label>
                      <br />
                      <br />
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <p style={{ textAlign: "left" }}>
                        {" "}
                        <button
                          style={{
                            fontFamily: "serif",
                          }}
                        >
                          Send Message
                        </button>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  return (
    <>
      <Header />
      {sectionData()}
    </>
  );
};

export default Contact;
