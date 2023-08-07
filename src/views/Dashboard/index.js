import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Header from "../../components/Header";
import mainImg from "../../assets/Group 75322253.png";
import prevImg from "../../assets/MYVECCCCCCCCCCCCCCCCCCCCC 6.png";
import "../../styles/style.css";

const Dashboard = () => {
  const dashboardBanner = () => {
    return (
      <section>
        <div>
          <img
            src={mainImg}
            style={{ display: "inline-block" }}
            galleryimg="no"
            width="100%"
          />
        </div>
      </section>
    );
  };
  const Slider = () => {
    return (
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        navigation
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        pagination={{ clickable: true }}
        style={{
          width: "1080px",
        }}
      >
        <SwiperSlide>
          <img src={prevImg} alt="Image 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={prevImg} alt="Image 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={prevImg} alt="Image 3" />
        </SwiperSlide>
      </Swiper>
    );
  };

  const previewSlider = () => {
    return (
      <section id="d-Pview">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-2">
              <h1
                style={{ width: "600px" }}
                data-aos="zoom-in"
                data-aos-delay={300}
                data-aos-once="true"
              >
                Hello Hotshot Dashboard Preview
              </h1>
            </div>
            <div className="col-lg-8 col-md-8" />
            <div className="col-lg-2 col-md-2 col-sm-12" />
            <div className="col-lg-10 col-md-10 col-sm-12">
              {/* <div
                className="MagicScroll"
                data-options="arrows: inside; scrollOnWheel: true; arrows: off; speed: 800"
              >
                <img
                  style={{
                    display: "inline-block",
                  }}
                  src={prevImg}
                />
                <img
                  style={{
                    display: "inline-block",
                  }}
                  src={prevImg}
                />
                <img
                  style={{
                    display: "inline-block",
                  }}
                  src={prevImg}
                />
                <img
                  style={{
                    display: "inline-block",
                  }}
                  src={prevImg}
                />
              </div> */}
              {Slider()}
            </div>
          </div>
        </div>
      </section>
    );
  };
  return (
    <>
      <Header />
      {dashboardBanner()}
      {previewSlider()}
    </>
  );
};

export default Dashboard;
