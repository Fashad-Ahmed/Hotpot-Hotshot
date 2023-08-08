import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import Header from "../../components/Header";
import rectImg from "../../assets/Rectangle 480.png";
import rect1 from "../../assets/Rectangle 482 (1).png";
import rect2 from "../../assets/Rectangle 483.png";
import rect3 from "../../assets/Rectangle 484.png";
import vid from "../../assets/Dunes.mp4";
import "../../styles/style.css";

const CDLSchool = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const onLoadedData = () => {
    setIsVideoLoaded(true);
  };
  const cdOne = () => {
    return (
      <section id="cdl">
        <div
          style={{
            padding: "20px 30px 20px 30px",
          }}
        >
          <h2 data-aos="zoom-in" data-aos-delay={300} data-aos-once="true">
            Hello - Hotshot
          </h2>
          <h1 data-aos="zoom-in" data-aos-delay={300} data-aos-once="true">
            Cdl School For Hotshots
          </h1>
          <p data-aos="fade-up" data-aos-delay={300} data-aos-once="true">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. Lorem
            Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div
                style={{
                  opacity: isVideoLoaded ? 1 : 0,
                  display: "flex",
                  justifyContent: "center", // Center align horizontally
                  alignItems: "center", // Center align vertically
                  minHeight: "70vh", // Set a minimum height to ensure video is visible
                }}
              >
                <ReactPlayer
                  url={vid}
                  playing={true}
                  controls={true}
                  loop={true}
                  muted={true}
                  playsinline={true}
                  onReady={onLoadedData}
                  width="100%" // Make the video fill the width of the container
                  height="auto" // Let the height adjust based on the aspect ratio
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  const cdTwo = () => {
    return (
      <section id="cdl1">
        <div
          style={{
            padding: "20px 30px 20px 30px",
          }}
        >
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12">
              <img src={rectImg} width="100%" />
            </div>
            <div className="col-lg-8 col-md-8 col-sm-12">
              <h1 data-aos="zoom-in" data-aos-delay={300} data-aos-once="true">
                About the program
              </h1>
              <h2 data-aos="zoom-in" data-aos-delay={300} data-aos-once="true">
                Start Your career inCommercial Truck driving
              </h2>
              <p data-aos="fade-up" data-aos-delay={300} data-aos-once="true">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem. Ut enim ad minima veniam, quis nostrum
                exercitationem ullam corporis suscipit laboriosam, nisi ut
                aliquid ex ea commodi consequatur? Quis autem vel eum iure
                reprehenderit qui in ea voluptate velit esse quam nihil
                molestiae consequatur, vel illum qui dolorem eum fugiat quo
                voluptas nulla pariatur
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };

  const cdThree = () => {
    return (
      <section id="cdl2">
        <div
          style={{
            padding: "20px 30px 20px 30px",
          }}
        >
          <div className="row">
            <div className="col-lg-1 col-md-1" />
            <div className="col-lg-10">
              <div className="box">
                <div className="row">
                  <div
                    className="col-lg-4 col-md-4 col-sm-4"
                    style={{ marginTop: "10%" }}
                  >
                    <img src={rect1} width="100%" />
                    <h2
                      data-aos="zoom-in"
                      data-aos-delay={300}
                      data-aos-once="true"
                    >
                      Duration: 32 hours, 2 week contact
                    </h2>
                    <p
                      data-aos="fade-up"
                      data-aos-delay={300}
                      data-aos-once="true"
                    >
                      Commercial Learner's Permit (CLP) &amp; Entry-Level Driver
                      Training
                    </p>
                  </div>
                  <div
                    className="col-lg-4 col-md-4 col-sm-4"
                    style={{ marginTop: "5%" }}
                  >
                    <img src={rect2} width="100%" />
                    <h2
                      data-aos="zoom-in"
                      data-aos-delay={300}
                      data-aos-once="true"
                    >
                      Duration: 96 hours, 6 week contact
                    </h2>
                    <p
                      data-aos="fade-up"
                      data-aos-delay={300}
                      data-aos-once="true"
                    >
                      Behind-the-Wheel Range Operations
                    </p>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    <img src={rect3} width="100%" />
                    <h2
                      data-aos="zoom-in"
                      data-aos-delay={300}
                      data-aos-once="true"
                    >
                      Duration: 40 hours, 2 1/2 week contact
                    </h2>
                    <p
                      data-aos="fade-up"
                      data-aos-delay={300}
                      data-aos-once="true"
                    >
                      Behind-the-Wheel Road Driving Skills
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-1" />
          </div>
          <div className="row">
            <div className="col-lg-2 col-md-2" />
            <div className="col-lg-8 col-md-8">
              <h1 data-aos="zoom-in" data-aos-delay={300} data-aos-once="true">
                Hello - Hotshot CDL School for Hotshots, We will teach you
                everything{" "}
              </h1>
            </div>
          </div>
        </div>
      </section>
    );
  };

  const cdFour = () => {
    return (
      <section id="cdl3">
        <div
          style={{
            padding: "20px 30px 20px 30px",
          }}
        >
          <div className="row">
            <div className="col-lg-2 col-md-1 " />
            <div className="col-lg-8 col-md-10">
              <div className="box">
                <h1
                  data-aos="zoom-in"
                  data-aos-delay={300}
                  data-aos-once="true"
                >
                  To become a Driver/Carrier
                </h1>
                <h2
                  data-aos="zoom-in"
                  data-aos-delay={300}
                  data-aos-once="true"
                >
                  Start Your career &amp; Get enrolled now{" "}
                </h2>
                <form>
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                      <input type="text" placeholder="Enter your first name" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                      <input type="text" placeholder="Enter your last name" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                      <input type="text" placeholder="Enter your valid email" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                      <input
                        type="text"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div className="col-lg-4 col-md-4" />
                    <div
                      style={{ textAlign: "center", verticalAlign: "center" }}
                    >
                      <p>
                        <button
                          style={{
                            fontFamily: "serif",
                          }}
                        >
                          GET ENROLL NOW
                        </button>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-2 col-md-1" />
          </div>
        </div>
      </section>
    );
  };
  return (
    <>
      <Header />
      {cdOne()}
      {cdTwo()}
      {cdThree()}
      {cdFour()}
    </>
  );
};

export default CDLSchool;
