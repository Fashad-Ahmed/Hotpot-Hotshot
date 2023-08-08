import React, { useState } from "react";
import Header from "../../components/Header";
import vec239 from "../../assets/Vector 239.png";
import grpImg from "../../assets/Group 75322462.png";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const faqData = [
    {
      question:
        "Section 1.10.32 of 'de Finibus Bonorum et Malorum', written BC?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      question:
        "Section 1.10.33 of 'de Finibus Bonorum et Malorum', written by Cicero?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      question: "1914 translation by H. Rackham",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      question:
        "Section 1.10.33 of de Finibus Bonorum et Malorum, written by Cicero?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  return (
    <>
      <Header />
      <section className="FAQ-section">
        <div style={{ padding: "0px 30px 10px 30px" }}>
          <div className="row mt-6" style={{ marginTop: "10%" }}>
            <div className="col-lg-2" />
            <div className="col-lg-8">
              <h1
                style={{
                  fontFamily: "serif",
                }}
                data-aos="fade-up"
                data-aos-delay={1000}
                data-aos-once="true"
              >
                Frequently Asked Questions
              </h1>
              <p
                style={{
                  fontFamily: "serif",
                }}
                data-aos="fade-up"
                data-aos-delay={1000}
                data-aos-once="true"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip{" "}
              </p>
            </div>
            <div className="col-lg-2" />
            <div className="col-lg-8">
              <div className="wrapper">
                {faqData.map((faqItem, index) => (
                  <div className="faq" key={index}>
                    <button
                      style={{
                        fontFamily: "serif",
                      }}
                      onClick={() => handleAccordionClick(index)}
                      className={`accordion ${
                        activeIndex === index ? "active" : ""
                      }`}
                    >
                      {faqItem.question}
                      <img
                        style={{
                          display: "inline-block",
                        }}
                        src={vec239}
                        alt="Arrow"
                      />
                    </button>
                    <div
                      className={`panel ${activeIndex === index ? "show" : ""}`}
                    >
                      <h6
                        style={{
                          fontFamily: "serif",
                        }}
                      >
                        {activeIndex === index ? faqItem.answer : ""}
                      </h6>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="col-lg-4"
              style={{ padding: "30px 20px" }}
              data-aos="zoom-in-left"
              data-aos-delay={1000}
              data-aos-once="true"
            >
              <div className="box">
                <p>
                  <img
                    style={{
                      display: "inline-block",
                    }}
                    src={grpImg}
                    alt="Group"
                  />
                </p>
                <h2
                  style={{
                    fontFamily: "serif",
                  }}
                >
                  Check More Information
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <a href="#">Learn More</a>
              </div>
            </div>
            <div className="col-lg-1" />
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
