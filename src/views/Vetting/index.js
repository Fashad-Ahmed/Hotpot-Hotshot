import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import Header from "../../components/Header";
import vid from "../../assets/Dunes.mp4";
import "../../styles/style.css";

const Vetting = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const onLoadedData = () => {
    setIsVideoLoaded(true);
  };
  const vpOne = () => {
    return (
      <section id="VP1">
        <div className="container-fluid d-flex align-items-center">
          <div className="row">
            <div className="col-lg-1 col-md-1" />
            <div className="col-lg-6 col-md-6">
              <div style={{ marginTop: "15%" }}>
                <ReactPlayer
                  url={vid}
                  playing={true}
                  controls={true}
                  loop={true}
                  muted={true}
                  playsinline={true}
                  onReady={onLoadedData}
                  width="100%"
                />
              </div>
            </div>
            <div className="col-lg-5 col-md-5">
              <div className="vp1-right">
                <h2
                  data-aos="zoom-in"
                  data-aos-delay={300}
                  data-aos-once="true"
                  style={{
                    fontFamily: "serif",
                  }}
                >
                  Step 1
                </h2>
                <h1
                  data-aos="fade-up"
                  data-aos-delay={300}
                  data-aos-once="true"
                >
                  Carrier submits documents
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  const vpTwo = () => {
    return (
      <section id="VP2">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-md-3" />
            <div className="col-lg-6 col-md-6">
              <div className="vp-center">
                <h2
                  data-aos="zoom-in"
                  data-aos-delay={300}
                  data-aos-once="true"
                  style={{
                    fontFamily: "serif",
                  }}
                >
                  Step 2
                </h2>
                <h1
                  data-aos="fade-up"
                  data-aos-delay={300}
                  data-aos-once="true"
                >
                  Equipment walk- around
                </h1>
                <ReactPlayer
                  url={vid}
                  playing={true}
                  controls={true}
                  loop={true}
                  muted={true}
                  playsinline={true}
                  onReady={onLoadedData}
                  width="100%"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-3" />
          </div>
        </div>
      </section>
    );
  };

  const vpThree = () => {
    return (
      <section id="VP3">
        <div className="container-fluid d-flex align-items-center">
          <div className="row">
            <div className="col-lg-5 col-md-5">
              <div className="vp-left">
                <h2
                  data-aos="zoom-in"
                  data-aos-delay={300}
                  data-aos-once="true"
                  style={{
                    fontFamily: "serif",
                  }}
                >
                  Step 3
                </h2>
                <h1
                  data-aos="fade-up"
                  data-aos-delay={300}
                  data-aos-once="true"
                >
                  Carrier submits documents
                </h1>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div style={{ marginTop: "15%" }}>
                <ReactPlayer
                  url={vid}
                  playing={true}
                  controls={true}
                  loop={true}
                  muted={true}
                  playsinline={true}
                  onReady={onLoadedData}
                  width="100%"
                />
              </div>
            </div>
            <div className="col-lg-1 col-md-1" />
          </div>
        </div>
      </section>
    );
  };
  return (
    <>
      <Header />
      {vpOne()}
      {vpTwo()}
      {vpThree()}
    </>
  );
};

export default Vetting;
