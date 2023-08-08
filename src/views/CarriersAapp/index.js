import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Header from "../../components/Header";
import slideImg from "../../assets/M-5.png";
import btmImg from "../../assets/Group 75322245.png";
import "../../styles/style.css";

const CarriersAapp = () => {
  const Slider = () => {
    return (
      <Swiper
        spaceBetween={1}
        slidesPerView={2.5}
        navigation
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        pagination={{ clickable: true }}
        style={{
          width: "1000px",
        }}
      >
        <SwiperSlide>
          <img src={slideImg} alt="Image 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slideImg} alt="Image 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slideImg} alt="Image 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slideImg} alt="Image 4" />
        </SwiperSlide>
      </Swiper>
    );
  };
  const previewSlider = () => {
    return (
      <section id="carriers1">
        <div
          style={{
            padding: "20px 20px 20px 20px",
          }}
        >
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-12 col-12">
              <h1 data-aos="zoom-in" data-aos-delay={300} data-aos-once="true">
                Carriers App Preview
              </h1>
            </div>
            <div className="col-lg-9 col-md-9 col-sm-12 col-12 scr-img">
              {Slider()}
            </div>
          </div>
        </div>
      </section>
    );
  };

  const bottomSection = () => {
    return (
      <section id="carriers2">
        <div
          style={{
            padding: "20px 30px 20px 30px",
          }}
        >
          <div className="row">
            <div className="col-lg-2 col-md-2" />
            <div className="col-lg-8 col-md-2">
              <h1>Hello Hotshot: built by carriers for carriers.</h1>
            </div>
            <div className="col-lg-2 col-md-2" />
            <div className="col-lg-4 col-md-4 col-sm-4 col-4">
              <h2
                style={{
                  fontFamily: "serif",
                }}
              >
                Respect
              </h2>
              <p>we know who is really doing the heavy lifting</p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-4">
              <h2
                style={{
                  fontFamily: "serif",
                }}
              >
                Fare transparency
              </h2>
              <p>have insight to how the money flows.</p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-4">
              <h2
                style={{
                  fontFamily: "serif",
                }}
              >
                Instant payouts{" "}
              </h2>
              <p>
                50% at pick-up / 50% at drop-off / 0% left to the imagination
              </p>
            </div>
          </div>
          <p style={{ textAlign: "center" }}>
            <img
              style={{
                display: "inline-block",
              }}
              src={btmImg}
            />
          </p>
        </div>
      </section>
    );
  };
  return (
    <>
      <Header />
      {previewSlider()}
      {bottomSection()}
    </>
  );
};

export default CarriersAapp;
