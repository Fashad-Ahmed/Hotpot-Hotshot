import React from "react";
import { Link } from "react-router-dom";
import vectorImg from "../../assets/Vector 260.png";
import vectorImgTwo from "../../assets/Vector 260 (1).png";
import boxImage from "../../assets/image 57.png";
import "../../styles/style.css";

const BlogGallery = () => {
  return (
    <section id="blogs">
      <div
        style={{
          padding: "20px 30px 20px 30px",
        }}
      >
        <div className="row">
          <div
            className="col-xl-8 col-lg-8 col-md-6 col-sm-12 col-12"
            data-aos="zoom-in"
            data-aos-delay={200}
            data-aos-once="true"
          >
            <h1>Read recent blogs</h1>
          </div>
          <div
            className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12"
            data-aos="zoom-in"
            data-aos-delay={200}
            data-aos-once="true"
          >
            <p style={{ textAlign: "right", marginTop: 30 }}>
              <Link to="/Blog">
                See All Blog{" "}
                <img
                  style={{
                    display: "inline-block",
                  }}
                  src={vectorImg}
                />
              </Link>
            </p>
          </div>
          <div
            className="col-lg-4 col-md-6 col-sm-6 col-12"
            data-aos="fade-down-right"
            data-aos-delay={200}
            data-aos-once="true"
          >
            <div className="box">
              <img
                style={{
                  display: "inline-block",
                }}
                src={boxImage}
                width="100%"
              />
              <h2
                style={{
                  fontFamily: "serif",
                }}
              >
                Logistic Insights Unleashed
              </h2>
              <h6>
                Discover the Key Strategies, Cutting-Edge Technologies, and
                Industry Trends in Our Informative Blog Section
              </h6>
              <Link to="/Blog" className="blog-btn">
                Read Blog{" "}
                <img
                  style={{
                    display: "inline-block",
                  }}
                  src={vectorImgTwo}
                />
              </Link>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 col-sm-6 col-12 "
            data-aos="fade-up"
            data-aos-delay={500}
            data-aos-once="true"
          >
            <div className="box">
              <img
                src={boxImage}
                style={{
                  display: "inline-block",
                }}
                width="100%"
              />
              <h2
                style={{
                  fontFamily: "serif",
                }}
              >
                Logistic Insights Unleashed
              </h2>
              <h6>
                Discover the Key Strategies, Cutting-Edge Technologies, and
                Industry Trends in Our Informative Blog Section
              </h6>
              <Link to="/Blog" className="blog-btn">
                Read Blog{" "}
                <img
                  style={{
                    display: "inline-block",
                  }}
                  src={vectorImgTwo}
                />
              </Link>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 col-sm-6 col-12"
            data-aos="fade-down-left"
            data-aos-delay={200}
            data-aos-once="true"
          >
            <div className="box">
              <img
                src={boxImage}
                style={{
                  display: "inline-block",
                }}
                width="100%"
              />
              <h2
                style={{
                  fontFamily: "serif",
                }}
              >
                Logistic Insights Unleashed
              </h2>
              <h6>
                Discover the Key Strategies, Cutting-Edge Technologies, and
                Industry Trends in Our Informative Blog Section
              </h6>
              <Link to="/Blog" className="blog-btn">
                Read Blog{" "}
                <img
                  style={{
                    display: "inline-block",
                  }}
                  src={vectorImgTwo}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogGallery;
