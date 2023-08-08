import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import svsImg from "../../assets/services image/image 464.png";
import serImg from "../../assets/Group 75322246.png";
import "../../styles/style.css";

const Under2k = () => {
  const detailBox = () => {
    return (
      <section id="servicesDetail">
        <div
          style={{
            padding: "20px 30px 20px 30px",
          }}
        >
          <div className="row">
            <div className="col-lg-2 col-md-1"></div>
            <div className="col-lg-8 col-md-10">
              <h1 data-aos="zoom-in" data-aos-delay={300} data-aos-once="true">
              Under 2k Lbs
              </h1>
              <h2 data-aos="zoom-in" data-aos-delay={300} data-aos-once="true">
                It is a long established fact that a will be distracted by the
                content of a readable.
              </h2>
            </div>
            <div className="col-lg-2 col-md-1" />
            <div className="col-lg-1" />
            <div className="col-lg-10 col-md-12">
              <p data-aos="fade-up" data-aos-delay={300} data-aos-once="true">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                here normal distribution of letters, as opposed to using
                'Content here, content here', making it look like readable
                English. Many desktop publishing packages and web page editors
                now use Lorem Ipsum as their default model text, and a search
                for 'lorem ipsum' will uncover many web sites still in their
                here is infancy. Many desktop publishing packages and web page
                are editors now use Lorem Ipsum as their default model text, and
                a search for 'lorem ipsum' will uncover many web sites still in
                their infancy.
              </p>
            </div>
            <div className="col-lg-1" />
            <div
              className="col-lg-12"
              data-aos="zoom-in"
              data-aos-delay={300}
              data-aos-once="true"
            >
              <img src={svsImg} width="100%" style={{ marginTop: "4%" }} />
            </div>
          </div>
        </div>
      </section>
    );
  };

  const moreServices = () => {
    return (
      <section id="Services" style={{ marginBottom: "10%" }}>
        <div
          style={{
            padding: "0px 30px 20px 30px",
          }}
        >
          <div className="row">
            <div className="col-lg-1" />
            <div className="col-lg-10 col-md-12">
              <h1 data-aos="zoom-in" data-aos-delay={300} data-aos-once="true">
                More services Hello - Hotshot provides you!!
              </h1>
              <h6 data-aos="fade-up" data-aos-delay={300} data-aos-once="true">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </h6>
            </div>
            <div className="col-lg-1" />
          </div>
          <div className="row">
            <div
              className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 mt-4"
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
                        Less Than <br /> 2k Lbs{" "}
                      </h3>
                    </div>
                  </div>
                  <div className="flip-card-back ">
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
                          <Link to="Under2k">
                            <img src={serImg} width="100%" />
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
              className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 mt-4"
              data-aos="fade-up"
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
                          <Link to="MotorVehicle">
                            <img src={serImg} width="100%" />
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
              className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 mt-4"
              data-aos="fade-down"
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
                          <Link href="JunkHaul">
                            <img src={serImg} width="100%" />
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
              className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 mt-4"
              data-aos="fade-left"
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
                          <Link to="GeneralFreight">
                            <img src={serImg} width="100%" />
                          </Link>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-5 col-sm-5 col-5" />
                    </div>
                  </div>
                </div>
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
      {detailBox()}
      {moreServices()}
    </>
  );
};

export default Under2k;
