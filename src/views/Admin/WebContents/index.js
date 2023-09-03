import React, { useEffect, useRef, useState } from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { editorStates, convertToRaw } from "draft-js";
import AdminLayout from "../../../components//AdminLayout";
import draftToHtml from "draftjs-to-html";
// import { useDispatch, useSelector } from "react-redux";

import TransparentTextInput from "../../../components/TextInputs/TransparentTextInput";
// import useGeneral from "../../../Hooks/useGeneral";
// import FieldAddModal from "../../../components/Popups/FieldAddModal";
// import InputField from "../../../components/TextInputs/InputField";
// import { uploadImage } from "../../../Redux/slices/authSlice";
import MainButton from "../../../components/Buttons/MainButton";
// import ImageCropPopup from "../../../components/Popups/ImageCropPopup";
import { showErrorToast, showSuccessToast } from "../../../API/HelperFunction";
// import useContents from "../../../Hooks/useContents";
import HTMLEditor from "../../../components/HTMLEditor";
import GeneralModal from "../../../components/Popups/GeneralModal";

const WebContents = () => {
  // const {
  //   getHomeContent,
  //   getPrivacyContent,
  //   getTermsConditionContent,
  //   getAboutContent,
  //   getSiteContents,
  //   editAbout,
  //   editPrivacy,
  //   editTermsAndCondition,
  //   editSiteContent,
  //   getFeatureContents,
  //   editFeature,
  // } = useContents();

  const navigate = useNavigate();
  const [selectedLog, setSelectedLog] = useState(1);
  const [aboutUs, setAboutUs] = useState(null);
  const [termsCondition, setTermsCondition] = useState(null);
  const [privacyPolicy, setPrivacyPolicy] = useState(null);
  const [home, setHome] = useState(null);
  const [siteContent, setSiteContent] = useState(null);
  const [feature, setFeature] = useState(null);
  const [modalText, setModalText] = useState(null);

  const popupRef = useRef();

  const tabLogsButton = [
    {
      id: 1,
      name: "Home Content",
      onClick: () => {
        setSelectedLog(1);
      },
    },
    {
      id: 2,
      name: "Privacy Policy",
      onClick: () => {
        setSelectedLog(2);
      },
    },
    {
      id: 3,
      name: "Terms And Condition",
      onClick: () => {
        setSelectedLog(3);
      },
    },
    {
      id: 4,
      name: "Feature Ad",
      onClick: () => {
        setSelectedLog(4);
      },
    },
    {
      id: 5,
      name: "Site Content",
      onClick: () => {
        setSelectedLog(5);
      },
    },
  ];

  useEffect(() => {
    handleGetAboutUs();
    handleGetPrivacyPolicy();
    handleGetTermsCondition();
    handleGetHome();
    handleGetSiteContent();
    handleGetFeatureContent();
  }, []);
  const handleGetAboutUs = () => {
    // getAboutContent().then((res) => {
    //   if (res?.content) {
    //     setAboutUs(res?.content);
    //   }
    // });
  };
  const handleGetPrivacyPolicy = () => {
    //   getPrivacyContent().then((res) => {
    //     if (res) {
    //       setPrivacyPolicy(res?.content);
    //     }
    //   });
  };
  const handleGetTermsCondition = () => {
    // getTermsConditionContent().then((res) => {
    //   if (res) {
    //     setTermsCondition(res?.content);
    //   }
    // });
  };
  const handleGetHome = () => {
    // getHomeContent().then((res) => {
    //   if (res) {
    //     setHome(res);
    //   }
    // });
  };
  const handleGetSiteContent = () => {
    // getSiteContents().then((res) => {
    //   if (res) {
    //     setSiteContent(res?.content);
    //   }
    // });
  };

  const handleGetFeatureContent = () => {
    // getFeatureContents().then((res) => {
    //   if (res) {
    //     setFeature(res?.content);
    //   }
    // });
  };

  const handleAboutContent = (val) => {
    console.log(draftToHtml(convertToRaw(val.getCurrentContent())));
    setAboutUs({
      ...aboutUs,
      content: draftToHtml(convertToRaw(val.getCurrentContent())),
    });
  };

  const handleCompanyContent = (val) => {
    console.log(draftToHtml(convertToRaw(val.getCurrentContent())));
    setAboutUs({
      ...aboutUs,
      ourCompany: {
        ...aboutUs?.ourCompany,
        description: draftToHtml(convertToRaw(val.getCurrentContent())),
      },
    });
  };

  const handleUpdateAbout = () => {
    let data = { content: aboutUs };
    console.log(data, "DATAA");
    // editAbout(data).then((res) => {
    //   popupRef.current.show();
    //   showSuccessToast(res?.message);
    // });
  };

  const handleUpdatePrivacy = () => {
    let data = { content: privacyPolicy };
    // editPrivacy(data).then((res) => {
    //   setModalText("Privacy Policy has been updated");
    //   showSuccessToast(res?.message);
    //   popupRef.current.show();
    // });
  };
  const handleUpdateTerms = () => {
    let data = { content: termsCondition };
    console.log(data, "DATAAA");
    // editTermsAndCondition(data).then((res) => {
    //   setModalText("Terms And Condition has been updated");
    //   showSuccessToast(res?.message);
    //   popupRef.current.show();
    // });
  };

  const handleUpdateSiteContent = () => {
    let data = { content: siteContent };
    // editSiteContent(data).then((res) => {
    //   setModalText("Site Content for footer has been updated");
    //   showSuccessToast(res?.message);
    //   popupRef.current.show();
    // });
  };

  const handleUpdateFeatureContent = () => {
    let data = { content: feature };
    // editFeature(data).then((res) => {
    //   setModalText("Feature Ad content has been updated");
    //   showSuccessToast(res?.message);
    //   popupRef.current.show();
    // });
  };

  const renderViews = () => {
    switch (selectedLog) {
      case 1: {
        return renderAboutUs();
      }
      case 2: {
        return renderPrivacyPolicy();
      }
      case 3: {
        return renderTermsCondition();
      }
      case 4: {
        return renderFeature();
      }
      case 5: {
        return renderSiteContent();
      }
    }
  };

  const handleInformation = (index, vars, val) => {
    const temp = { ...aboutUs };
    temp.information[index][vars] = val;
    setAboutUs(temp);
  };

  const handleQuickLinks = (index, vars, val) => {
    const temp = { ...siteContent };
    temp.quickLinks[index][vars] = val;
    setSiteContent(temp);
  };

  const renderAboutUs = () => {
    if (aboutUs)
      return (
        <div className="col-md-6">
          <TransparentTextInput
            key={1}
            labelText="Title"
            required
            className="primary-inputs secInp w-20"
            placeholder="Enter Title"
            type="text"
            value={aboutUs?.title}
            onChange={(e) => {
              setAboutUs({
                ...aboutUs,
                title: e.target.value,
              });
            }}
          />
          <TransparentTextInput
            key={2}
            labelText="Sub Title"
            required
            className="primary-inputs secInp w-20"
            placeholder="Enter Title"
            type="text"
            value={aboutUs?.subTitle}
            onChange={(e) => {
              setAboutUs({ ...aboutUs, subTitle: e.target.value });
            }}
          />
          <HTMLEditor
            key={27}
            labelText={"Content"}
            required
            editorStates={aboutUs?.content}
            onEditorStateChange={handleAboutContent}
          />
          <h6 className="my-4">Our Company</h6>
          <TransparentTextInput
            key={3}
            labelText="Title"
            required
            className="primary-inputs secInp w-20"
            placeholder="Enter Sub Title"
            value={aboutUs?.ourCompany?.title}
            type="text"
            onChange={(e) => {
              setAboutUs({
                ...aboutUs,
                ourCompany: { ...aboutUs?.ourCompany, title: e.target.value },
              });
            }}
          />
          <HTMLEditor
            key={26}
            labelText={"Content"}
            required
            editorStates={aboutUs?.ourCompany?.description}
            onEditorStateChange={handleCompanyContent}
            className="mb-2"
          />
          <TransparentTextInput
            key={4}
            labelText="Year of Experience Label"
            required
            className="primary-inputs secInp w-20"
            placeholder="Enter Title"
            value={aboutUs?.information[0]?.label}
            type="text"
            onChange={(e) => {
              handleInformation(0, "label", e.target.value);
            }}
          />
          <TransparentTextInput
            key={5}
            labelText="Year of Experience"
            required
            className="primary-inputs secInp w-20"
            placeholder="Enter Year of Experience"
            value={aboutUs?.information[0]?.value}
            type="text"
            onChange={(e) => handleInformation(0, "value", e.target.value)}
          />
          <TransparentTextInput
            key={6}
            labelText="Used Car Label"
            required
            className="primary-inputs secInp w-20"
            placeholder="Enter Title"
            value={aboutUs?.information[1]?.label}
            type="text"
            onChange={(e) => {
              handleInformation(1, "label", e.target.value);
            }}
          />
          <TransparentTextInput
            key={24}
            labelText="Vehicles Products Label"
            required
            className="primary-inputs secInp w-20"
            placeholder="Enter Title"
            value={aboutUs?.information[2]?.label}
            type="text"
            onChange={(e) => {
              handleInformation(2, "label", e.target.value);
            }}
          />

          <TransparentTextInput
            key={7}
            labelText="User Label"
            required
            className="primary-inputs secInp w-20"
            placeholder="Enter User Label"
            value={aboutUs?.information[3]?.label}
            type="text"
            onChange={(e) => {
              handleInformation(3, "label", e.target.value);
            }}
          />
          <MainButton text="Update" onClick={handleUpdateAbout} />
        </div>
      );
  };
  const renderPrivacyPolicy = () => {
    if (privacyPolicy) {
      return (
        <div className="col-md-6">
          <TransparentTextInput
            key={8}
            labelText="Title"
            required
            className="primary-inputs secInp w-20"
            placeholder="Enter Title"
            type="text"
            value={privacyPolicy?.title}
            onChange={(e) => {
              setPrivacyPolicy({
                ...privacyPolicy,
                title: e.target.value,
              });
            }}
          />
          <TransparentTextInput
            key={9}
            labelText="Small Title"
            required
            className="primary-inputs secInp w-20"
            placeholder="Enter Small Title"
            type="text"
            value={privacyPolicy?.smallTitle}
            onChange={(e) => {
              setPrivacyPolicy({
                ...privacyPolicy,
                smallTitle: e.target.value,
              });
            }}
          />
          <TransparentTextInput
            key={10}
            labelText="Sub Title"
            required
            className="primary-inputs secInp w-20"
            placeholder="Enter Sub Title"
            type="text"
            value={privacyPolicy?.subTitle}
            onChange={(e) => {
              setPrivacyPolicy({
                ...privacyPolicy,
                subTitle: e.target.value,
              });
            }}
          />
          <HTMLEditor
            key={25}
            labelText={"Content"}
            required
            editorStates={privacyPolicy?.content}
            onEditorStateChange={(val) =>
              setPrivacyPolicy({
                ...privacyPolicy,
                content: draftToHtml(convertToRaw(val.getCurrentContent())),
              })
            }
            className="mb-2"
          />
          <MainButton text="Update" onClick={handleUpdatePrivacy} />
        </div>
      );
    }
  };
  const renderTermsCondition = () => {
    if (termsCondition) {
      return (
        <div className="col-md-6">
          <TransparentTextInput
            key={11}
            labelText="Title"
            required
            className="primary-inputs secInp w-20"
            placeholder="Enter Title"
            type="text"
            value={termsCondition?.title}
            onChange={(e) => {
              setTermsCondition({
                ...termsCondition,
                title: e.target.value,
              });
            }}
          />
          <TransparentTextInput
            key={12}
            labelText="Small Title"
            required
            className="primary-inputs secInp w-20"
            placeholder="Enter Small Title"
            type="text"
            value={termsCondition?.smallTitle}
            onChange={(e) => {
              setTermsCondition({
                ...termsCondition,
                smallTitle: e.target.value,
              });
            }}
          />
          <TransparentTextInput
            key={13}
            labelText="Sub Title"
            required
            className="primary-inputs secInp w-20"
            placeholder="Enter Sub Title"
            type="text"
            value={termsCondition?.subTitle}
            onChange={(e) => {
              setTermsCondition({
                ...termsCondition,
                subTitle: e.target.value,
              });
            }}
          />
          <HTMLEditor
            key={28}
            labelText={"Content"}
            required
            editorStates={termsCondition?.content}
            onEditorStateChange={(val) =>
              setTermsCondition({
                ...termsCondition,
                content: draftToHtml(convertToRaw(val.getCurrentContent())),
              })
            }
            className="mb-2"
          />
          <MainButton text="Update" onClick={handleUpdateTerms} />
        </div>
      );
    }
  };
  const renderSiteContent = () => {
    if (siteContent) {
      return (
        <div className="col-md-6">
          <TransparentTextInput
            key={14}
            labelText="Tagline"
            required
            className="primary-inputs secInp w-20"
            placeholder="Enter Tagline"
            type="text"
            rows={5}
            value={siteContent?.tagline}
            onChange={(e) => {
              setSiteContent({
                ...siteContent,
                tagline: e.target.value,
              });
            }}
          />
          <TransparentTextInput
            key={15}
            labelText="Copy Right Text"
            required
            className="primary-inputs secInp w-20"
            placeholder="Enter Copy Right"
            type="text"
            value={siteContent?.copyRight}
            onChange={(e) => {
              setSiteContent({
                ...siteContent,
                copyRight: e.target.value,
              });
            }}
          />
          <h2>News Letter Section</h2>
          <TransparentTextInput
            key={16}
            labelText="News Letter Title"
            required
            className="primary-inputs secInp w-20"
            placeholder="Enter News Letter Title"
            type="text"
            value={siteContent?.newsLetter?.title}
            onChange={(e) => {
              setSiteContent({
                ...siteContent,
                newsLetter: {
                  ...siteContent?.newsLetter,
                  title: e.target.value,
                },
              });
            }}
          />
          <TransparentTextInput
            key={17}
            labelText="News Letter Description"
            required
            className="primary-inputs secInp w-20"
            placeholder="Enter Description"
            type="text"
            value={siteContent?.newsLetter?.description}
            onChange={(e) => {
              setSiteContent({
                ...siteContent,
                newsLetter: {
                  ...siteContent?.newsLetter,
                  description: e.target.value,
                },
              });
            }}
          />
          <h2>Footer Links</h2>
          <TransparentTextInput
            key={18}
            labelText="First Label"
            required
            className="primary-inputs secInp w-20"
            placeholder="Enter First Label"
            type="text"
            value={siteContent?.quickLinks[0]?.label}
            onChange={(e) => {
              handleQuickLinks(0, "label", e.target.value);
            }}
          />
          <TransparentTextInput
            key={19}
            labelText="First Link"
            required
            className="primary-inputs secInp w-20"
            placeholder="Enter First Link"
            type="text"
            value={siteContent?.quickLinks[0]?.url}
            onChange={(e) => {
              handleQuickLinks(0, "url", e.target.value);
            }}
          />
          <TransparentTextInput
            key={20}
            labelText="Second Label"
            required
            className="primary-inputs secInp w-20"
            placeholder="Enter Second Label"
            type="text"
            value={siteContent?.quickLinks[1]?.label}
            onChange={(e) => {
              handleQuickLinks(1, "label", e.target.value);
            }}
          />
          <TransparentTextInput
            key={21}
            labelText="Second Link"
            required
            className="primary-inputs secInp w-20"
            placeholder="Enter Second Link"
            type="text"
            value={siteContent?.quickLinks[1]?.url}
            onChange={(e) => {
              handleQuickLinks(1, "url", e.target.value);
            }}
          />

          <TransparentTextInput
            key={22}
            labelText="Third Label"
            required
            className="primary-inputs secInp w-20"
            placeholder="Enter Third Label"
            type="text"
            value={siteContent?.quickLinks[2]?.label}
            onChange={(e) => {
              handleQuickLinks(2, "label", e.target.value);
            }}
          />
          <TransparentTextInput
            key={23}
            labelText="Third Link"
            required
            className="primary-inputs secInp w-20"
            placeholder="Enter Third Link"
            type="text"
            value={siteContent?.quickLinks[2]?.url}
            onChange={(e) => {
              handleQuickLinks(2, "url", e.target.value);
            }}
          />
          <MainButton text="Update" onClick={handleUpdateSiteContent} />
        </div>
      );
    }
  };

  const renderFeature = () => {
    if (feature) {
      return (
        <div className="col-md-6">
          <TransparentTextInput
            key={29}
            labelText="Title"
            required
            className="primary-inputs secInp w-20"
            placeholder="Enter Title"
            type="text"
            value={feature?.title}
            onChange={(e) => {
              setFeature({
                ...feature,
                title: e.target.value,
              });
            }}
          />
          <TransparentTextInput
            key={30}
            labelText="Sub Title"
            required
            className="primary-inputs secInp w-20"
            placeholder="Enter Sub Title"
            type="text"
            value={feature?.subTitle}
            onChange={(e) => {
              setFeature({
                ...feature,
                subTitle: e.target.value,
              });
            }}
          />
          <HTMLEditor
            key={31}
            labelText={"Content"}
            required
            editorStates={feature?.content}
            onEditorStateChange={(val) =>
              setFeature({
                ...feature,
                content: draftToHtml(convertToRaw(val.getCurrentContent())),
              })
            }
            className="mb-2"
          />
          <MainButton text="Update" onClick={handleUpdateFeatureContent} />
        </div>
      );
    }
  };

  return (
    <AdminLayout>
      <div className="configuration">
        <div className="container-fluid">
          <div className="box my-4">
            <div className="d-flex align-items-center justify-content-between flex-wrap">
              <div className="d-flex align-items-center my-3 section-heading">
                <h6 className="section-heading mb-0">Web Contents</h6>
              </div>
            </div>
            <div className="custom_tabs">
              <div className="text-center mb-3">
                <span className="d-inline-block ul_tabs_wrapper">
                  <ul
                    className="nav nav-pills justify-content-center"
                    id="pills-tab"
                    role="tablist"
                  >
                    {tabLogsButton.map((val) => {
                      return (
                        <li className="nav-item" role="presentation">
                          <button
                            className={`nav-link ${
                              selectedLog == val?.id && "active"
                            }`}
                            onClick={val.onClick}
                          >
                            {val?.name}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </span>
              </div>
              <div className="tab-content " id="pills-tabContent">
                {/* Render Here */}
                {renderViews()}
              </div>
            </div>
          </div>
        </div>
      </div>
      <GeneralModal
        reference={popupRef}
        title="Successfully"
        message={modalText}
        onClick={() => {}}
      />
    </AdminLayout>
  );
};
export default WebContents;
