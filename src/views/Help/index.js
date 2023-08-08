import React, { useState } from "react";
import Header from "../../components/Header";
import vec239 from "../../assets/Vector 239.png";
import grpImg from "../../assets/Group 75322470.png";

const Help = () => {
  const topSection = () => {
    return (
      <section id="help">
        <div style={{ padding: "0px 30px 10px 30px" }}>
          <div className="row">
            <div className="col-lg-1 col-md-1 col-sm-12 col-12" />
            <div className="col-lg-9 col-md-9 col-sm-12 col-12">
              <div className="row">
                <div className="col-lg-10 col-md-10 col-sm-10 col-10">
                  <h1>HELLO - hotshot help center </h1>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.Lorem Ipsum is simply dummy text of the printing
                    and typesetting industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="extTab1" style={{ padding: "0px 30px 10px 30px" }}>
          <div className="row">
            <div className="col-lg-1 col-md-1 col-sm-12 col-12" />
            <div className="col-lg-10 col-md-10 col-sm-12 col-12">
              <ul id="nav-pills" className="nav nav-pills row">
                <li className="col-lg-2 col-md-2 col-sm-4 col-2">
                  <a
                    href="#1a"
                    data-toggle="tab"
                    className="nav-pills-item active"
                    style={{
                      fontWeight: "bold",
                      fontFamily: "serif",
                      textTransform: "capitalize",
                    }}
                  >
                    general
                  </a>
                </li>
                <li className="col-lg-2 col-md-2 col-sm-4 col-4">
                  <a
                    style={{
                      fontWeight: "bold",
                      fontFamily: "serif",
                      textTransform: "capitalize",
                    }}
                    href="#2a"
                    className="nav-pills-item"
                    data-toggle="tab"
                  >
                    shipper
                  </a>
                </li>
                <li className="col-lg-2 col-md-2 col-sm-4 col-4">
                  <a
                    style={{
                      fontWeight: "bold",
                      fontFamily: "serif",
                      textTransform: "capitalize",
                    }}
                    href="#3a"
                    className="nav-pills-item"
                    data-toggle="tab"
                  >
                    carrier
                  </a>
                </li>
                <li className="col-lg-2 col-md-2 col-sm-4 col-4">
                  <a
                    style={{
                      fontWeight: "bold",
                      fontFamily: "serif",
                      textTransform: "capitalize",
                    }}
                    href="#4a"
                    className="nav-pills-item"
                    data-toggle="tab"
                  >
                    guide
                  </a>
                </li>
                <li className="col-lg-2 col-md-2 col-sm-4 col-4">
                  <a
                    style={{
                      fontWeight: "bold",
                      fontFamily: "serif",
                      textTransform: "capitalize",
                    }}
                    href="#5a"
                    className="nav-pills-item"
                    data-toggle="tab"
                  >
                    training
                  </a>
                </li>
                <li className="col-lg-2 col-md-2 col-sm-4 col-4">
                  <a
                    style={{
                      fontWeight: "bold",
                      fontFamily: "serif",
                      textTransform: "capitalize",
                    }}
                    href="#6a"
                    className="nav-pills-item"
                    data-toggle="tab"
                  >
                    profile
                  </a>
                </li>
              </ul>
              <div className="tab-content clearfix">
                <div className="tab-pane active" id="1a">
                  <div id="FAQ-section">
                    <div className="wrapper">
                      <div className="faq">
                        <button
                          style={{
                            fontFamily: "serif",
                          }}
                          className="accordion"
                        >
                          Section 1.10.32 of "de Finibus Bonorum et Malorum",
                          written BC?
                          <img src={vec239} />
                        </button>
                        <div className="pannel">
                          <h6>
                            {" "}
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                          </h6>
                        </div>
                      </div>
                      <div className="faq">
                        <button
                          style={{
                            fontFamily: "serif",
                          }}
                          className="accordion"
                        >
                          Section 1.10.32 of "de Finibus Bonorum et Malorum",
                          written BC?
                          <img src={vec239} />
                        </button>
                        <div className="pannel">
                          <h6>
                            {" "}
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                          </h6>
                        </div>
                      </div>
                      <div className="faq">
                        <button
                          style={{
                            fontFamily: "serif",
                          }}
                          className="accordion"
                        >
                          1914 translation by H. Rackham
                          <img src={vec239} />
                        </button>
                        <div className="pannel">
                          <h6>
                            {" "}
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                          </h6>
                        </div>
                      </div>
                      <div className="faq ">
                        <button
                          style={{
                            fontFamily: "serif",
                          }}
                          className="accordion"
                        >
                          Section 1.10.33 of "de Finibus Bonorum et Malorum",
                          written by Cicero?
                          <img src={vec239} />
                        </button>
                        <div className="pannel">
                          <h6>
                            {" "}
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="2a">
                  <div id="FAQ-section">
                    <div className="wrapper">
                      <div className="faq">
                        <button
                          style={{
                            fontFamily: "serif",
                          }}
                          className="accordion"
                        >
                          2nd Section 1.10.32 of "de Finibus Bonorum et
                          Malorum", written BC?
                          <img src={vec239} />
                        </button>
                        <div className="pannel">
                          <h6>
                            {" "}
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                          </h6>
                        </div>
                      </div>
                      <div className="faq">
                        <button
                          style={{
                            fontFamily: "serif",
                          }}
                          className="accordion"
                        >
                          Section 1.10.32 of "de Finibus Bonorum et Malorum",
                          written BC?
                          <img src={vec239} />
                        </button>
                        <div className="pannel">
                          <h6>
                            {" "}
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                          </h6>
                        </div>
                      </div>
                      <div className="faq">
                        <button
                          style={{
                            fontFamily: "serif",
                          }}
                          className="accordion"
                        >
                          1914 translation by H. Rackham
                          <img src={vec239} />
                        </button>
                        <div className="pannel">
                          <h6>
                            {" "}
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                          </h6>
                        </div>
                      </div>
                      <div className="faq ">
                        <button
                          style={{
                            fontFamily: "serif",
                          }}
                          className="accordion"
                        >
                          Section 1.10.33 of "de Finibus Bonorum et Malorum",
                          written by Cicero?
                          <img src={vec239} />
                        </button>
                        <div className="pannel">
                          <h6>
                            {" "}
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="3a">
                  <div id="FAQ-section">
                    <div className="wrapper">
                      <div className="faq">
                        <button
                          style={{
                            fontFamily: "serif",
                          }}
                          className="accordion"
                        >
                          3rd Section 1.10.32 of "de Finibus Bonorum et
                          Malorum", written BC?
                          <img src={vec239} />
                        </button>
                        <div className="pannel">
                          <h6>
                            {" "}
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                          </h6>
                        </div>
                      </div>
                      <div className="faq">
                        <button
                          style={{
                            fontFamily: "serif",
                          }}
                          className="accordion"
                        >
                          Section 1.10.32 of "de Finibus Bonorum et Malorum",
                          written BC?
                          <img src={vec239} />
                        </button>
                        <div className="pannel">
                          <h6>
                            {" "}
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                          </h6>
                        </div>
                      </div>
                      <div className="faq">
                        <button
                          style={{
                            fontFamily: "serif",
                          }}
                          className="accordion"
                        >
                          1914 translation by H. Rackham
                          <img src={vec239} />
                        </button>
                        <div className="pannel">
                          <h6>
                            {" "}
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                          </h6>
                        </div>
                      </div>
                      <div className="faq ">
                        <button
                          style={{
                            fontFamily: "serif",
                          }}
                          className="accordion"
                        >
                          Section 1.10.33 of "de Finibus Bonorum et Malorum",
                          written by Cicero?
                          <img src={vec239} />
                        </button>
                        <div className="pannel">
                          <h6>
                            {" "}
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane " id="4a">
                  <div id="FAQ-section">
                    <div className="wrapper">
                      <div className="faq">
                        <button
                          style={{
                            fontFamily: "serif",
                          }}
                          className="accordion"
                        >
                          4th Section 1.10.32 of "de Finibus Bonorum et
                          Malorum", written BC?
                          <img src={vec239} />
                        </button>
                        <div className="pannel">
                          <h6>
                            {" "}
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                          </h6>
                        </div>
                      </div>
                      <div className="faq">
                        <button
                          style={{
                            fontFamily: "serif",
                          }}
                          className="accordion"
                        >
                          Section 1.10.32 of "de Finibus Bonorum et Malorum",
                          written BC?
                          <img src={vec239} />
                        </button>
                        <div className="pannel">
                          <h6>
                            {" "}
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                          </h6>
                        </div>
                      </div>
                      <div className="faq">
                        <button
                          style={{
                            fontFamily: "serif",
                          }}
                          className="accordion"
                        >
                          1914 translation by H. Rackham
                          <img src={vec239} />
                        </button>
                        <div className="pannel">
                          <h6>
                            {" "}
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                          </h6>
                        </div>
                      </div>
                      <div className="faq ">
                        <button
                          style={{
                            fontFamily: "serif",
                          }}
                          className="accordion"
                        >
                          Section 1.10.33 of "de Finibus Bonorum et Malorum",
                          written by Cicero?
                          <img src={vec239} />
                        </button>
                        <div className="pannel">
                          <h6>
                            {" "}
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="5a">
                  <div id="FAQ-section">
                    <div className="wrapper">
                      <div className="faq">
                        <button className="accordion">
                          5th Section 1.10.32 of "de Finibus Bonorum et
                          Malorum", written BC?
                          <img src={vec239} />
                        </button>
                        <div className="pannel">
                          <h6>
                            {" "}
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                          </h6>
                        </div>
                      </div>
                      <div className="faq">
                        <button className="accordion">
                          Section 1.10.32 of "de Finibus Bonorum et Malorum",
                          written BC?
                          <img src={vec239} />
                        </button>
                        <div className="pannel">
                          <h6>
                            {" "}
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                          </h6>
                        </div>
                      </div>
                      <div className="faq">
                        <button className="accordion">
                          1914 translation by H. Rackham
                          <img src={vec239} />
                        </button>
                        <div className="pannel">
                          <h6>
                            {" "}
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                          </h6>
                        </div>
                      </div>
                      <div className="faq ">
                        <button className="accordion">
                          Section 1.10.33 of "de Finibus Bonorum et Malorum",
                          written by Cicero?
                          <img src={vec239} />
                        </button>
                        <div className="pannel">
                          <h6>
                            {" "}
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="6a">
                  <div id="FAQ-section">
                    <div className="wrapper">
                      <div className="faq">
                        <button className="accordion">
                          6th Section 1.10.32 of "de Finibus Bonorum et
                          Malorum", written BC?
                          <img src={vec239} />
                        </button>
                        <div className="pannel">
                          <h6>
                            {" "}
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                          </h6>
                        </div>
                      </div>
                      <div className="faq">
                        <button className="accordion">
                          Section 1.10.32 of "de Finibus Bonorum et Malorum",
                          written BC?
                          <img src={vec239} />
                        </button>
                        <div className="pannel">
                          <h6>
                            {" "}
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                          </h6>
                        </div>
                      </div>
                      <div className="faq">
                        <button className="accordion">
                          1914 translation by H. Rackham
                          <img src={vec239} />
                        </button>
                        <div className="pannel">
                          <h6>
                            {" "}
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                          </h6>
                        </div>
                      </div>
                      <div className="faq ">
                        <button className="accordion">
                          Section 1.10.33 of "de Finibus Bonorum et Malorum",
                          written by Cicero?
                          <img src={vec239} />
                        </button>
                        <div className="pannel">
                          <h6>
                            {" "}
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                          </h6>
                        </div>
                      </div>
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

  const btmSection = () => {
    return (
      <section id="help2">
        <div style={{ padding: "0px 30px 10px 30px" }}>
          <div className="row">
            <div className="col-lg-1 col-md-1 col-sm-12 col-12" />
            <div className="col-lg-10 col-md-10 col-sm-12 col-12">
              <div style={{ background: "#2B2728" }}>
                <div className="row">
                  <div className="col-lg-1 col-md-1 col-sm-1" />
                  <div className="col-lg-10 col-md-10 col-sm-10 m-6 p-6">
                    <div
                      className="m-6"
                      style={{
                        border: "2px solid #fff",
                        margin: "5%",
                        padding: "3%",
                      }}
                    >
                      <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                          <p style={{ textAlign: "right" }}>
                            <img
                              style={{
                                display: "inline-block",
                              }}
                              src={grpImg}
                            />
                          </p>
                        </div>
                        <div className="col-lg-8 col-md-8 col-sm-8 col-8">
                          <h1>contact us</h1>
                          <p>
                            It is a long established fact that a reader will be
                            by the readable content of a page when looking at
                            its layout.
                          </p>
                        </div>
                      </div>
                      <h1 />
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
      {topSection()}

      {btmSection()}
    </>
  );
};

export default Help;

//=============================================================
// import React, { useState } from "react";
// import Header from "../../components/Header";
// import vec239 from "../../assets/Vector 239.png";
// import grpImg from "../../assets/Group 75322470.png";

// const Help = () => {
//   const [activeTab, setActiveTab] = useState("1a");
//   const [activeAccordion, setActiveAccordion] = useState(null);

//   const changeTab = (tabId) => {
//     setActiveTab(tabId);
//   };

//   const toggleAccordion = (accordionId) => {
//     setActiveAccordion((currentAccordion) =>
//       currentAccordion === accordionId ? null : accordionId
//     );
//   };

//   return (
//     <section id="help">
//       <div style={{ padding: "0px 30px 10px 30px" }}>
//         <div className="row">
//           <div className="col-lg-1 col-md-1 col-sm-12 col-12" />
//           <div className="col-lg-9 col-md-9 col-sm-12 col-12">
//             <div className="row">
//               <div className="col-lg-10 col-md-10 col-sm-10 col-10">
//                 <h1>HELLO - hotshot help center </h1>
//                 <p>
//                   It is a long established fact that a reader will be distracted
//                   by the readable content of a page when looking at its
//                   layout.Lorem Ipsum is simply dummy text of the printing and
//                   typesetting industry.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div id="extTab1" style={{ padding: "0px 30px 10px 30px" }}>
//         <div className="row">
//           <div className="col-lg-1 col-md-1 col-sm-12 col-12" />
//           <div className="col-lg-9 col-md-9 col-sm-12 col-12">
//             <div className="row">
//               <div className="col-lg-10 col-md-10 col-sm-10 col-10">
//                 <ul>
//                   {["tab1", "tab2", "tab3"].map((tabId) => (
//                     <li key={tabId}>
//                       <button
//                         className={activeTab === tabId ? "active" : ""}
//                         onClick={() => changeTab(tabId)}
//                       >
//                         {tabId}
//                       </button>
//                     </li>
//                   ))}
//                 </ul>
//                 <div>
//                   {[1, 2, 3].map((accordionId) => (
//                     <div key={accordionId}>
//                       <button
//                         className={
//                           activeAccordion === accordionId ? "opened" : ""
//                         }
//                         onClick={() => toggleAccordion(accordionId)}
//                       >
//                         Accordion {accordionId}
//                       </button>
//                       {activeAccordion === accordionId && (
//                         <div>Accordion content {accordionId}</div>
//                       )}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Help;

// =========================================================================
// import React, { useState } from "react";
// import Header from "../../components/Header";
// import vec239 from "../../assets/Vector 239.png";
// import grpImg from "../../assets/Group 75322470.png";

// const Help = () => {
//   const [activeTab, setActiveTab] = useState("1a");

//   const handleTabClick = (tabId) => {
//     setActiveTab(tabId);
//   };

//   const AccordionItem = ({ id, title, content }) => {
//     const isActive = activeTab === id;

//     return (
//       <div className="faq">
//         <button
//           style={{
//             fontFamily: "serif",
//           }}
//           className={`accordion ${isActive ? "active" : ""}`}
//           onClick={() => handleTabClick(id)}
//         >
//           {title}
//           <img src={vec239} alt="Accordion Icon" />
//         </button>
//         {isActive && (
//           <div className="pannel">
//             <h6>{content}</h6>
//           </div>
//         )}
//       </div>
//     );
//   };

//   const TabContent = ({ tabId, items }) => {
//     return (
//       <div
//         className={`tab-pane ${activeTab === tabId ? "active" : ""}`}
//         id={tabId}
//       >
//         <div id="FAQ-section">
//           <div className="wrapper">
//             {items.map((item, index) => (
//               <AccordionItem
//                 key={index}
//                 id={`faq-${tabId}-${index}`}
//                 title={item.title}
//                 content={item.content}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     );
//   };

//   const tabs = [
//     {
//       id: "1a",
//       title: "general",
//       items: [
//         {
//           title:
//             "Section 1.10.32 of 'de Finibus Bonorum et Malorum', written BC?",
//           content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
//         },
//         // ... add other items here
//       ],
//     },
//     // ... add other tabs here
//   ];

//   const topSection = () => {
//     return (
//       <section id="help">
//         <div style={{ padding: "0px 30px 10px 30px" }}>
//           <div className="row">
//             <div className="col-lg-1 col-md-1 col-sm-12 col-12" />
//             <div className="col-lg-9 col-md-9 col-sm-12 col-12">
//               <div className="row">
//                 <div className="col-lg-10 col-md-10 col-sm-10 col-10">
//                   <h1>HELLO - hotshot help center </h1>
//                   <p>
//                     It is a long established fact that a reader will be
//                     distracted by the readable content of a page when looking at
//                     its layout.Lorem Ipsum is simply dummy text of the printing
//                     and typesetting industry.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div id="extTab1" style={{ padding: "0px 30px 10px 30px" }}>
//           <div className="row">
//             <div className="col-lg-1 col-md-1 col-sm-12 col-12" />
//             <div className="col-lg-10 col-md-10 col-sm-12 col-12">
//               <ul id="nav-pills" className="nav nav-pills row">
//                 {tabs.map((tab, index) => (
//                   <li className="col-lg-2 col-md-2 col-sm-4 col-4" key={index}>
//                     <a
//                       href={`#${tab.id}`}
//                       className={`nav-pills-item ${
//                         activeTab === tab.id ? "active" : ""
//                       }`}
//                     >
//                       {tab.title}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//               <div className="tab-content clearfix">
//                 {tabs.map((tab, index) => (
//                   <TabContent key={index} tabId={tab.id} items={tab.items} />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     );
//   };

//   const btmSection = () => {
//     return (
//       <section id="help2">
//         <div style={{ padding: "0px 30px 10px 30px" }}>
//           <div className="row">
//             <div className="col-lg-1 col-md-1 col-sm-12 col-12" />
//             <div className="col-lg-10 col-md-10 col-sm-12 col-12">
//               <div style={{ background: "#2B2728" }}>
//                 <div className="row">
//                   <div className="col-lg-1 col-md-1 col-sm-1" />
//                   <div className="col-lg-10 col-md-10 col-sm-10 m-6 p-6">
//                     <div
//                       className="m-6"
//                       style={{
//                         border: "2px solid #fff",
//                         margin: "5%",
//                         padding: "3%",
//                       }}
//                     >
//                       <div className="row">
//                         <div className="col-lg-4 col-md-4 col-sm-4 col-4">
//                           <p style={{ textAlign: "right" }}>
//                             <img
//                               style={{
//                                 display: "inline-block",
//                               }}
//                               src={grpImg}
//                             />
//                           </p>
//                         </div>
//                         <div className="col-lg-8 col-md-8 col-sm-8 col-8">
//                           <h1>contact us</h1>
//                           <p>
//                             It is a long established fact that a reader will be
//                             by the readable content of a page when looking at
//                             its layout.
//                           </p>
//                         </div>
//                       </div>
//                       <h1 />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     );
//   };

//   return (
//     <>
//       <Header />
//       {topSection()}
//       {btmSection()}
//     </>
//   );
// };

// export default Help;

// ===============================================================================
