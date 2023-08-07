import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Map from "../../components/Map";
import lbImg from "../../assets/Group 75322246.png";
import truckImg from "../../assets/image 46.png";
import vectorImg from "../../assets/Vector 260.png";
import bigImg from "../../assets/MYVECCCCCCCCCCCCCCCCCCCCC 3 (2).png";
import bigTwoImg from "../../assets/Group 75322243.png";
import ellipseImg from "../../assets/Ellipse 62.png";
import groupImg from "../../assets/Group 75322245.png";
import BlogGallery from "../../components/BlogGallery";
import "../../styles/style.css";

const Home = () => {
  const sectionView = () => {
    return (
      <section id="Services">
        <div
          style={{
            maxWidth: "1680px",
            paddingTop: "10%",
          }}
          className="container"
        >
          <h1
            style={{
              fontSize: "70px",
              fontFamily: "BC Alphapipe",
              fontWeight: "700",
              marginBottom: "30px",
            }}
            data-aos="zoom-in"
            data-aos-delay={200}
            data-aos-once="true"
          >
            Keeping carriers moving
          </h1>
          <div className="row">
            <div
              className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 mt-2"
              data-aos="fade-right"
              data-aos-delay={300}
              data-aos-once="true"
            >
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <div className="">
                      <h3
                        style={{
                          fontFamily: "serif",
                        }}
                      >
                        Less Than <br /> 2k Lbs{" "}
                      </h3>
                    </div>
                  </div>
                  <div className="flip-card-back">
                    <h2
                      style={{
                        fontFamily: "serif",
                      }}
                    >
                      Less Than 2k Lbs
                    </h2>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                    <div className="row">
                      <div className="col-lg-5 col-md-5 col-sm-5 col-5" />
                      <div className="col-lg-2 col-md-2 col-sm-2 col-2 ">
                        <div className="link-btn">
                          <Link to="/Under2k">
                            <img
                              src={lbImg}
                              width="100%"
                              style={{
                                display: "inline-block",
                              }}
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-5 col-sm-5 col-5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-9 col-lg-9 col-md-6 col-sm-12 col-12 mt-4"
              data-aos="fade-left"
              data-aos-delay={300}
              data-aos-once="true"
            >
              <img src={truckImg} />
            </div>
            <div
              className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 mt-4"
              data-aos="fade-right"
              data-aos-delay={300}
              data-aos-once="true"
            >
              <div className="flip-card">
                <div className="flip-card-inner ">
                  <div className="flip-card-front">
                    <div className="">
                      <h3
                        style={{
                          fontFamily: "serif",
                        }}
                      >
                        General Freight
                      </h3>
                    </div>
                  </div>
                  <div className="flip-card-back ">
                    <h2
                      style={{
                        fontFamily: "serif",
                      }}
                    >
                      General Freight
                    </h2>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                    <div className="row">
                      <div className="col-lg-5 col-md-5 col-sm-5 col-5" />
                      <div className="col-lg-2 col-md-2 col-sm-2 col-2 ">
                        <div className="link-btn">
                          <Link to="/GeneralFreight">
                            <img src={lbImg} width="100%" />
                          </Link>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-5 col-sm-5 col-5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-9 col-lg-9 col-md-6 col-sm-12 col-12 mt-4"
              data-aos="fade-left"
              data-aos-delay={300}
              data-aos-once="true"
            >
              <img src={truckImg} />
            </div>
            <div
              className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 mt-4"
              data-aos="fade-right"
              data-aos-delay={300}
              data-aos-once="true"
            >
              <div className="flip-card">
                <div className="flip-card-inner ">
                  <div className="flip-card-front">
                    <div className="">
                      <h3
                        style={{
                          fontFamily: "serif",
                        }}
                      >
                        Motor Vehicles
                      </h3>
                    </div>
                  </div>
                  <div className="flip-card-back ">
                    <h2
                      style={{
                        fontFamily: "serif",
                      }}
                    >
                      Motor Vehicles
                    </h2>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                    <div className="row">
                      <div className="col-lg-5 col-md-5 col-sm-5 col-5" />
                      <div className="col-lg-2 col-md-2 col-sm-2 col-2 ">
                        <div className="link-btn">
                          <Link to="/MotorVehicle">
                            <img src={lbImg} width="100%" />
                          </Link>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-5 col-sm-5 col-5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-9 col-lg-9 col-md-6 col-sm-12 col-12 mt-4"
              data-aos="fade-left"
              data-aos-delay={300}
              data-aos-once="true"
            >
              <img src={truckImg} />
            </div>
            <div
              className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 mt-4"
              data-aos="fade-right"
              data-aos-delay={300}
              data-aos-once="true"
            >
              <div className="flip-card">
                <div className="flip-card-inner ">
                  <div className="flip-card-front">
                    <div className="">
                      <h3
                        style={{
                          fontFamily: "serif",
                        }}
                      >
                        Junk Haul-off
                      </h3>
                    </div>
                  </div>
                  <div className="flip-card-back ">
                    <h2
                      style={{
                        fontFamily: "serif",
                      }}
                    >
                      Junk Haul-off
                    </h2>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                    <div className="row">
                      <div className="col-lg-5 col-md-5 col-sm-5 col-5" />
                      <div className="col-lg-2 col-md-2 col-sm-2 col-2 ">
                        <div className="link-btn">
                          <Link to="/JunkHaul">
                            <img src={lbImg} width="100%" />
                          </Link>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-5 col-sm-5 col-5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-9 col-lg-9 col-md-6 col-sm-12 col-12 mt-4"
              data-aos="fade-left"
              data-aos-delay={300}
              data-aos-once="true"
            >
              <img src={truckImg} />
            </div>
            <div
              className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 mt-4"
              data-aos="fade-right"
              data-aos-delay={300}
              data-aos-once="true"
            >
              <div className="flip-card">
                <div className="flip-card-inner ">
                  <div className="flip-card-front">
                    <div className="">
                      <h3
                        style={{
                          fontFamily: "serif",
                        }}
                      >
                        26’ Box Truck
                      </h3>
                    </div>
                  </div>
                  <div className="flip-card-back ">
                    <h2
                      style={{
                        fontFamily: "serif",
                      }}
                    >
                      26’ Box Truck
                    </h2>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                    <div className="row">
                      <div className="col-lg-5 col-md-5 col-sm-5 col-5" />
                      <div className="col-lg-2 col-md-2 col-sm-2 col-2 ">
                        <div className="link-btn">
                          <Link to="/BoxTruck">
                            <img src={lbImg} width="100%" />
                          </Link>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-5 col-sm-5 col-5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-9 col-lg-9 col-md-6 col-sm-12 col-12 mt-4"
              data-aos="fade-left"
              data-aos-delay={300}
              data-aos-once="true"
            >
              <img src={truckImg} />
            </div>
          </div>
        </div>
      </section>
    );
  };
  const trackView = () => {
    return (
      <section id="Track">
        <div className="container-fluid">
          <div className="row g-0 p-0">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 pr-0 pl-0 ">
              <div className="Track-div " style={{ minHeight: "70vh" }}>
                <h1
                  data-aos="zoom-in"
                  data-aos-delay={200}
                  data-aos-once="true"
                >
                  Now you can manage, track and schedule, your shipment easily{" "}
                </h1>
                <Link to="/Dashboard">
                  See More <img src={vectorImg} />
                </Link>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 pr-0 pl-0 flex-first flex-md-unordered">
              <img
                src={bigImg}
                width="100%"
                style={{ minHeight: "70vh", maxHeight: "70vh" }}
              />
            </div>
          </div>
          <div className="row flex-column-reverse flex-md-row g-0 p-0">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 pr-0 pl-0">
              <img
                src={bigTwoImg}
                width="100%"
                style={{ minHeight: "70vh", maxHeight: "70vh" }}
              />
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 pr-0 pl-0">
              <div className="Track-div " style={{ minHeight: "70vh" }}>
                <h2
                  data-aos="zoom-in"
                  data-aos-delay={200}
                  data-aos-once="true"
                >
                  Hello Hotshot: built by carriers for carriers.{" "}
                </h2>
                <p data-aos="zoom-in" data-aos-delay={200} data-aos-once="true">
                  <img
                    src={ellipseImg}
                    style={{
                      display: "inline-block",
                    }}
                  />{" "}
                  Respect: we know who is really doing the heavy lifting
                </p>
                <p data-aos="zoom-in" data-aos-delay={200} data-aos-once="true">
                  <img
                    src={ellipseImg}
                    style={{
                      display: "inline-block",
                    }}
                  />{" "}
                  Fare transparency: have insight to how the money flows.
                </p>
                <p data-aos="zoom-in" data-aos-delay={200} data-aos-once="true">
                  <img
                    src={ellipseImg}
                    style={{
                      display: "inline-block",
                    }}
                  />{" "}
                  Instant payouts: 50% at pick-up / 50% at drop-off / 0% left to
                  the imagination
                </p>
                <img src={groupImg} width="50%" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  const sliderView = () => {
    return (
      <>
        <section id="Process">
          <div className="container-fluid">
            <h1 data-aos="zoom-in" data-aos-delay={200} data-aos-once="true">
              That’s how we process{" "}
            </h1>
          </div>
        </section>
        <section className="slides">
          <div className="slide">
            <h2>1</h2>
            <div className="content">
              <h3>Request &amp; Accept</h3>
              <h4>
                customer <br /> requests and <br />
                accepts quote
              </h4>
            </div>
          </div>
          <div className="slide">
            <h2>2</h2>
            <div className="content">
              <h4>Confirms pick up</h4>
            </div>
          </div>
          <div className="slide">
            <h2>3</h2>
            <div className="content">
              <h4>Get 4 digits pin</h4>
            </div>
          </div>
          <div className="slide">
            <h2>4</h2>
            <div className="content">
              <h4>Track via dashboard</h4>
            </div>
          </div>
          <div className="slide">
            <h2>5</h2>
            <div className="content">
              <h4>Confirm pin &amp; deliver</h4>
            </div>
          </div>
        </section>
      </>
    );
  };
  return (
    <>
      <Header />
      {sectionView()}
      {trackView()}
      {sliderView()}
      <Map />
      <BlogGallery />
    </>
  );
};

export default Home;
