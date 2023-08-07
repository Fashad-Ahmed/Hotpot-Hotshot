import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import abtImg from "../../assets/Rectangle 472.png";
import s1Img from "../../assets/services image/image 464.png";
import s2Img from "../../assets/services image/image 46.png";
import s3Img from "../../assets/services image/image 462.png";
import s4Img from "../../assets/services image/image 461.png";
import s5Img from "../../assets/services image/image 463.png";
import "../../styles/style.css";

const About = () => {
  const totalCounts = () => {
    return (
      <section id="counts">
        <div
          style={{
            padding: "20px 30px 20px 30px",
          }}
        >
          <div className="row">
            <div className="col-lg-3 mr-6">
              <div className="box">
                <h1>120+</h1>
              </div>
              <h2
                style={{
                  fontFamily: "serif",
                }}
              >
                YEAR IN BUSSINESS
              </h2>
            </div>
            <div className="col-lg-3 mr-6">
              <div className="box">
                <h1>160</h1>
              </div>
              <h2
                style={{
                  fontFamily: "serif",
                }}
              >
                hours if training
              </h2>
            </div>
            <div className="col-lg-3 mr-6">
              <div className="box">
                <h1>8000</h1>
              </div>
              <h2
                style={{
                  fontFamily: "serif",
                }}
              >
                team members
              </h2>
            </div>
            <div className="col-lg-3 mr-6">
              <div className="box">
                <h1>400+</h1>
              </div>
              <h2
                style={{
                  fontFamily: "serif",
                }}
              >
                global location
              </h2>
            </div>
          </div>
        </div>
      </section>
    );
  };

  const dataSection = () => {
    return (
      <section id="about">
        <div
          style={{
            padding: "20px 20px 20px 20px",
          }}
        >
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
              <h1
                style={{
                  fontFamily: "serif",
                }}
                data-aos="zoom-in"
                data-aos-delay={300}
                data-aos-once="true"
              >
                ABOUT hello-hotshot
              </h1>
              <h2 data-aos="zoom-in" data-aos-delay={300} data-aos-once="true">
                We've Been Here From the Beginning
              </h2>
              <p data-aos="fade-up" data-aos-delay={300} data-aos-once="true">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. <br />
                <br />
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo.{" "}
              </p>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
              <img src={abtImg} width="100%" />
            </div>
          </div>
        </div>
      </section>
    );
  };

  const servicesData = () => {
    return (
      <section id="sevicesInAbout">
        <div
          style={{
            padding: "20px 20px 20px 20px",
          }}
        >
          <h1 data-aos="zoom-in" data-aos-delay={300} data-aos-once="true">
            What services Hello - Hotshot provides you!!
          </h1>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-6 col-12">
              <img src={s1Img} width="100%" />
              <h2 data-aos="zoom-in" data-aos-delay={300} data-aos-once="true">
                Under 2K lbs
              </h2>
              <p data-aos="fade-up" data-aos-delay={300} data-aos-once="true">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
              </p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-12">
              <img src={s2Img} width="100%" />
              <h2 data-aos="zoom-in" data-aos-delay={300} data-aos-once="true">
                General Freight
              </h2>
              <p data-aos="fade-up" data-aos-delay={300} data-aos-once="true">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
              </p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-12">
              <img src={s3Img} width="100%" />
              <h2 data-aos="zoom-in" data-aos-delay={300} data-aos-once="true">
                Motor Vehicle
              </h2>
              <p data-aos="fade-up" data-aos-delay={300} data-aos-once="true">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
              </p>
            </div>
            <div className="col-lg-2 col-md-2 d-none d-md-block" />
            <div className="col-lg-4 col-md-4 col-sm-6 col-12">
              <img src={s5Img} width="100%" />
              <h2 data-aos="zoom-in" data-aos-delay={300} data-aos-once="true">
                Junk Haul-off
              </h2>
              <p data-aos="fade-up" data-aos-delay={300} data-aos-once="true">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
              </p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-12">
              <img src={s4Img} width="100%" />
              <h2 data-aos="zoom-in" data-aos-delay={300} data-aos-once="true">
                26’ Boc Truck
              </h2>
              <p data-aos="fade-up" data-aos-delay={300} data-aos-once="true">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  return (
    <>
      <Header />
      {totalCounts()}
      {dataSection()}
      {servicesData()}
    </>
  );
};

export default About;
