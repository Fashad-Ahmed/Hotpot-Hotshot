import React, { useEffect, useRef, useState } from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../../../Components/Layouts/AdminLayout";
import MainTable from "../../../Components/Tables/MainTable";
import {
  tableValuesAdmin,
  tableBrandSettings,
  tableFeaturesSettings,
  tableFinancingPlans,
} from "../../../Utility/tableUtils";
import { useDispatch, useSelector } from "react-redux";
import {
  postUpdateBrandData,
  postUpdateFeaturedData,
} from "../../../Redux/slices/generalSlice";
import TransparentTextInput from "../../../Components/TextInputs/TransparentTextInput";
import useGeneral from "../../../Hooks/useGeneral";
import FieldAddModal from "../../../Components/Popups/FieldAddModal";
import InputField from "../../../Components/TextInputs/InputField";
import { uploadImage } from "../../../Redux/slices/authSlice";
import MainButton from "../../../Components/Buttons/MainButton";
import ImageCropPopup from "../../../Components/Popups/ImageCropPopup";
import { showErrorToast, showSuccessToast } from "../../../API/HelperFunction";
import { url } from "../../../API/config";

const months = [12, 24, 36, 48, 60, 72, 84, 96, 108, 120];

const Settings = () => {
  const cropPopup = useRef();
  const generalSettings = useSelector(
    (state) => state?.general?.settings?.entityTypes
  );

  const dispatch = useDispatch();
  const addRef = useRef();
  const editRef = useRef();
  const planRef = useRef();
  const editPlanRef = useRef();
  const {
    getBrands,
    createBrand,
    updateBrand,
    getFeatures,
    createFeature,
    updateFeature,
    createDeliveryCharges,
    updateDeliveryCharges,
    createTaxes,
    updateTaxes,
    createComission,
    updateComission,
    getComission,
    getDeliveryCharges,
    getTax,
    getFinancePlan,
    createFinancePlan,
    updateFinancePlan,
  } = useGeneral();
  const navigate = useNavigate();
  const [selectedLog, setSelectedLog] = useState(1);
  const [brands, setBrands] = useState([]);
  const [features, setFeatures] = useState([]);
  const [newBrand, setNewBrand] = useState(null);
  const [newFeature, setNewFeature] = useState(null);
  const [currentBrand, setCurrentBrand] = useState(null);
  const [currentFeature, setCurrentFeature] = useState(null);
  const [currentPlan, setCurrentPlan] = useState(null);
  const [bannerImage, setBannerImage] = useState(null);
  const [featuredImage, setFeaturedImage] = useState(null);
  const [currentDeliveryCharges, setCurrentDeliveryCharges] = useState(null);
  const [taxes, setTaxes] = useState(null);
  const [comission, setComission] = useState(null);
  const [financePlan, setFinancePlan] = useState([]);
  const [addFinancePlan, setAddFinancePlan] = useState(null);

  const tabLogsButton = [
    {
      id: 1,
      name: "Brand",
      onClick: () => {
        setSelectedLog(1);
      },
    },
    {
      id: 2,
      name: "Features",
      onClick: () => {
        setSelectedLog(2);
      },
    },
    {
      id: 3,
      name: "Financing Plans",
      onClick: () => {
        setSelectedLog(3);
      },
    },
    {
      id: 4,
      name: "Shipping Charges",
      onClick: () => {
        setSelectedLog(4);
      },
    },
    // {
    //   id: 5,
    //   name: "Taxes",
    //   onClick: () => {
    //     setSelectedLog(5);
    //   },
    // },
    {
      id: 6,
      name: "Commission",
      onClick: () => {
        setSelectedLog(6);
      },
    },
  ];

  const returnTableHeading = () => {
    switch (selectedLog) {
      case 1: {
        return "Brands";
      }
      case 2: {
        return "Features";
      }
      case 3: {
        return "Financing Plans";
      }
      case 4: {
        return "Shipping Taxes";
      }
      default: {
        return "Brands";
      }
    }
  };
  const returnTableLabel = () => {
    switch (selectedLog) {
      case 1: {
        return tableBrandSettings;
      }
      case 2: {
        return tableFeaturesSettings;
      }
      case 3: {
        return tableFinancingPlans;
      }
      // case 4: {
      //   return tableTransmissionSettings;
      // }
      default: {
        return tableBrandSettings;
      }
    }
  };

  const returnTableData = () => {
    switch (selectedLog) {
      case 1: {
        return brands;
      }
      case 2: {
        return features;
      }
      case 3: {
        return financePlan;
      }
      // case 4: {
      //   return transmissions;
      // }
      default: {
        return [];
      }
    }
  };

  const returnEmptyTableData = () => {
    switch (selectedLog) {
      case 1: {
        return "No Brand Found";
      }
      case 2: {
        return "No Feature Found";
      }
      case 3: {
        return "No Finance Plan Found";
      }
      // case 4: {
      //   return "No Transmission Found";
      // }
      default: {
        return [];
      }
    }
  };
  const returnTableKeys = () => {
    switch (selectedLog) {
      case 1: {
        return tableValuesAdmin["settingsBrand"];
      }
      case 2: {
        return tableValuesAdmin["settingsFeatures"];
      }
      case 3: {
        return tableValuesAdmin["financePlans"];
      }
      // case 4: {
      //   return tableValuesAdmin["settingsTransmission"];
      // }
      default: {
        return [];
      }
    }
  };

  const returnButtonText = () => {
    switch (selectedLog) {
      case 1: {
        return "Add New Brand";
      }
      case 2: {
        return "Add New Feature";
      }
      case 3: {
        return "Add New Plan";
      }
    }
  };

  const returnAddText = () => {
    switch (selectedLog) {
      case 1: {
        return "Add Brand";
      }
      case 2: {
        return "Add Feature";
      }
      case 3: {
        return "Add Finance Plan";
      }
    }
  };

  const returnUpdateText = () => {
    switch (selectedLog) {
      case 1: {
        return "Update Brand";
      }
      case 2: {
        return "Update Feature";
      }
      case 2: {
        return "Update Finance Plan";
      }
    }
  };

  const returnInputLabel = () => {
    switch (selectedLog) {
      case 1: {
        return "Brand Name";
      }
      case 2: {
        return "Feature Name";
      }
    }
  };

  const returnInputPlaceholder = () => {
    switch (selectedLog) {
      case 1: {
        return "Enter the Brand Name";
      }
      case 2: {
        return "Enter the Feature Name";
      }
    }
  };

  useEffect(() => {
    handleGetBrands();
    handleGetFeatures();
    handleGetComission();
    handleGetDeliveryCharges();
    handleGetTax();
    handleGetFinance();
  }, []);

  const handleGetDeliveryCharges = () => {
    getDeliveryCharges().then((res) => {
      if (res?.deliveryCharges?.length > 0) {
        setCurrentDeliveryCharges(
          res?.deliveryCharges[res?.deliveryCharges?.length - 1]?.amount
        );
      }
    });
  };

  const handleGetTax = () => {
    getTax().then((res) => {
      if (res?.taxes?.length > 0) {
        setTaxes(res?.taxes[res?.taxes?.length - 1]?.amount);
      }
    });
  };

  const handleGetComission = () => {
    getComission().then((res) => {
      if (res?.commissions?.length > 0) {
        setComission(res?.commissions[res?.commissions.length - 1]?.amount);
      }
    });
  };

  const handleGetBrands = () => {
    getBrands().then((res) => {
      if (res) {
        setBrands(res);
      }
    });
  };

  const handleGetFeatures = () => {
    getFeatures().then((res) => {
      if (res) {
        setFeatures(res);
      }
    });
  };
  const handleGetFinance = () => {
    getFinancePlan({ status: ["active", "inactive"] }).then((res) => {
      if (res) {
        setFinancePlan(res);
      }
    });
  };

  const handleCreateShippingCharges = () => {
    const data = {
      amount: currentDeliveryCharges,
    };
    createDeliveryCharges(data).then((res) => {
      if (res) {
        // getShippingCharges()
      }
    });
  };

  const handleCreateShippingTaxes = () => {
    const data = {
      amount: taxes,
    };
    createTaxes(data).then((res) => {
      if (res) {
        // getShippingCharges()
      }
    });
  };

  const handleCreateComission = () => {
    const data = {
      amount: comission,
    };
    createComission(data).then((res) => {
      if (res) {
        // getShippingCharges()
      }
    });
  };

  const handleCreateFeature = () => {
    const data = {
      name: newFeature,
      image: featuredImage?._id,
    };
    createFeature(data).then((res) => {
      if (res) {
        handleGetFeatures();
        setNewFeature("");
        setFeaturedImage("");
      }
    });
  };

  const handleCreateBrand = () => {
    const data = {
      name: newBrand,
      image: bannerImage?._id,
    };
    createBrand(data).then((res) => {
      if (res) {
        handleGetBrands();
        setNewBrand("");
        setBannerImage("");
      }
    });
  };

  const handleCreatePlan = () => {
    if (!addFinancePlan?.interestRate) {
      showErrorToast("Please Enter Interest Rate");
      return;
    }
    if (!addFinancePlan?.downPaymentRate) {
      showErrorToast("Please Enter Down Payment Rate");
      return;
    }
    if (!addFinancePlan?.months) {
      showErrorToast("Please Enter Months");
      return;
    }
    createFinancePlan(addFinancePlan).then((res) => {
      if (res) {
        showSuccessToast(res?.message);
        handleGetFinance();
        setAddFinancePlan(null);
      }
    });
  };

  const handleUpdatePlan = () => {
    if (!currentPlan?.interestRate) {
      showErrorToast("Please Enter Interest Rate");
      return;
    }
    if (!currentPlan?.downPaymentRate) {
      showErrorToast("Please Enter Down Payment Rate");
      return;
    }
    if (!currentPlan?.months) {
      showErrorToast("Please Enter Months");
      return;
    }
    const data = {
      interestRate: currentPlan?.interestRate,
      downPaymentRate: currentPlan?.downPaymentRate,
      months: currentPlan?.months,
    };
    updateFinancePlan(currentPlan?._id, data).then((res) => {
      if (res) {
        showSuccessToast(res?.message);
        handleGetFinance();
      }
    });
  };

  const handleUpdateBrand = () => {
    if (selectedLog == 1) {
      const data = {
        name: currentBrand?.name,
        image: bannerImage?._id,
        isDeleted: false,
      };
      updateBrand(currentBrand?._id, data).then((res) => {
        if (res) {
          handleGetBrands();
        }
      });
      return;
    }

    if (selectedLog == 2) {
      const data = {
        name: currentFeature?.name,
        image: featuredImage?._id,
      };
      updateFeature(currentFeature?._id, data).then((res) => {
        if (res) {
          handleGetFeatures();
        }
      });
    }
  };

  const handleUploadFeatureImage = async (event) => {
    if (event.target.files && event.target.files[0]) {
      const image = await event.target.files[0];
      if (image) {
        const data = {
          entityType:
            selectedLog == 1
              ? generalSettings?.brand
              : generalSettings?.featureIcon,
          image: image,
        };
        dispatch(uploadImage(data))
          .unwrap()
          .then((res) => {
            // setImages([...images, res?.image]);
            console.log(res, "resresresres");
            selectedLog == 1
              ? setBannerImage(res?.image)
              : setFeaturedImage(res?.image);
          })
          .catch((err) => console.log("Error:", err));
      }
    }
  };

  const handleUploadBrandImage = async (event) => {
    if (event) {
      const data = {
        entityType:
          selectedLog == 1
            ? generalSettings?.brand
            : generalSettings?.featureIcon,
        image: event,
      };
      dispatch(uploadImage(data))
        .unwrap()
        .then((res) => {
          cropPopup.current.hide();
          selectedLog == 1
            ? setBannerImage(res?.image)
            : setFeaturedImage(res?.image);
        })
        .catch((err) => console.log("Error:", err));
    }
  };

  const handleEdit = (item) => {
    if (selectedLog == 1) {
      setCurrentBrand(item);
      editRef.current.show(item);
      return;
    }

    if (selectedLog == 2) {
      setCurrentFeature(item);
      editRef.current.show(item);
      return;
    }
    if (selectedLog == 3) {
      setCurrentPlan(item);
      editPlanRef.current.show(item);
      return;
    }
  };

  const handleUpdateBrandName = (text) => {
    if (selectedLog == 1) {
      const tempBrand = { ...currentBrand };
      tempBrand.name = text;
      setCurrentBrand(tempBrand);
      return;
    }

    if (selectedLog == 2) {
      const tempFeature = { ...currentFeature };
      tempFeature.name = text;
      setCurrentFeature(tempFeature);
      return;
    }
  };

  const updateUserStatus = async (id, status) => {
    if (selectedLog == 1) {
      const data = {
        status,
      };
      const response = await dispatch(
        postUpdateBrandData({ id, data })
      ).unwrap();
      if (response) {
        handleGetBrands();
      }
      return;
    }

    if (selectedLog == 2) {
      const data = {
        status,
      };
      const response = await dispatch(
        postUpdateFeaturedData({ id, data })
      ).unwrap();
      if (response) {
        handleGetFeatures();
      }
    }
    if (selectedLog == 3) {
      const data = {
        status,
      };
      const response = await dispatch(updateFinancePlan(id, data)).unwrap();
      if (response) {
        alert("CHECk");
        handleGetFinance();
      }
    }
  };

  const renderViews = () => {
    switch (selectedLog) {
      case 4: {
        return renderDeliveryChargesView();
      }

      case 5: {
        return renderTaxesView();
      }

      case 6: {
        return renderCommissionView();
      }
    }
  };
  const renderDeliveryChargesView = () => {
    return (
      <div className="col-md-4">
        <TransparentTextInput
          key={1}
          labelText="Shipping Charges ($)"
          required
          className="primary-inputs secInp w-20"
          value={currentDeliveryCharges}
          placeholder="Enter Shipping Charges"
          type="text"
          min={1}
          maxLength={4}
          pattern="[0-9]*"
          onlyValue={currentDeliveryCharges}
          onChange={(e) =>
            setCurrentDeliveryCharges((v) =>
              e.target.validity.valid ? e.target.value : v
            )
          }
        />
        <MainButton
          onClick={handleCreateShippingCharges}
          text={currentDeliveryCharges ? "Update" : "Add"}
          className="mt-3"
        />
      </div>
    );
  };

  const renderTaxesView = () => {
    return (
      <div className="col-md-4">
        <TransparentTextInput
          key={2}
          labelText="Shipping Taxes"
          required
          className="primary-inputs secInp w-20"
          value={taxes}
          placeholder="Enter Shipping Taxes in %"
          type="text"
          min={1}
          maxLength={2}
          pattern="[0-9]*"
          onlyValue={taxes}
          onChange={(e) =>
            setTaxes((v) => (e.target.validity.valid ? e.target.value : v))
          }
        />

        <MainButton
          onClick={handleCreateShippingTaxes}
          text={taxes ? "Update" : "Add"}
          className="mt-3"
        />
      </div>
    );
  };

  const renderCommissionView = () => {
    return (
      <div className="col-md-4">
        <TransparentTextInput
          key={3}
          labelText="Admin Commission in %"
          required
          className="primary-inputs secInp w-20"
          value={comission}
          placeholder="Enter Commission in %"
          type="text"
          min={1}
          maxLength={2}
          pattern="[0-9]*"
          onlyValue={comission}
          onChange={(e) =>
            setComission((v) => (e.target.validity.valid ? e.target.value : v))
          }
        />

        <MainButton
          onClick={handleCreateComission}
          text={comission ? "Update" : "Add"}
          className="mt-3"
        />
      </div>
    );
  };

  return (
    <AdminLayout>
      <div className="configuration">
        <div className="container-fluid">
          <div className="box my-4">
            <div className="d-flex align-items-center justify-content-between flex-wrap">
              <div className="d-flex align-items-center my-3 section-heading">
                {/* <span className="backLink" onClick={() => navigate(-1)}>
                  <i className="fas fa-arrow-left go-back-icon"></i>
                </span> */}
                <h6 className="section-heading mb-0">Settings</h6>
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
                {selectedLog > 3 ? (
                  renderViews()
                ) : (
                  <MainTable
                    heading={returnTableHeading()}
                    tableLabel={returnTableLabel()}
                    tableKeys={returnTableKeys()}
                    data={returnTableData()}
                    emptyTitle={returnEmptyTableData()}
                    clickOnView
                    withoutView
                    onAddButtonClick={() =>
                      selectedLog == 3
                        ? planRef.current.show()
                        : addRef.current.show()
                    }
                    onChangeStatus={(id, status) => {
                      updateUserStatus(id, status);
                    }}
                    addButton={returnButtonText()}
                    onClickEdit={(id, item) => handleEdit(item)}
                    className={"tab-pane fade show active"}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <FieldAddModal
        title={returnAddText()}
        btnText={returnAddText()}
        reference={addRef}
        onBtnPress={selectedLog == 1 ? handleCreateBrand : handleCreateFeature}
        value={selectedLog == 1 ? newBrand : newFeature}
        onClickCross={() => {
          setNewBrand(null),
            setNewFeature(null),
            setBannerImage(null),
            setFeaturedImage(null);
        }}
      >
        <div className="mb-4"></div>
        <InputField
          label={returnInputLabel()}
          placeholder={returnInputPlaceholder()}
          // onChange={(e) =>
          //   selectedLog == 1
          //     ? setNewBrand(e.target.value)
          //     : setNewFeature(e.target.value)
          // }

          onChange={(e) => {
            e.target.validity.valid
              ? selectedLog == 1
                ? setNewBrand(e.target.value)
                : setNewFeature(e.target.value)
              : "";
          }}
          onlyValue={selectedLog == 1 ? newBrand : newFeature}
          pattern="^[a-zA-Z ]*$"
        />

        <label className="notBtn uploadBtnBox me-3  my-2">
          <i className="fas fa-upload "></i>
          <i className="d-block prime-label mb-3">
            {selectedLog == 1 ? "Upload Brand Image" : "Upload Feature Image"}
          </i>
          {selectedLog == 1 ? (
            <input
              id="uploadImg"
              // type="file"
              accept="image/*,application/pdf"
              className="d-none"
              onClick={() => cropPopup?.current.show()}
            />
          ) : (
            <input
              id="uploadImg"
              type="file"
              accept="image/*,application/pdf"
              className="d-none"
              onChange={handleUploadFeatureImage}
            />
          )}
        </label>

        {(bannerImage?.thumbnail || featuredImage?.thumbnail) && (
          <div className="d-flex align-items-end">
            <div className="upload_product">
              <img
                id="profile-preview"
                src={
                  selectedLog == 1
                    ? url + bannerImage?.thumbnailPath
                    : url + featuredImage?.thumbnailPath
                }
                alt={selectedLog == 1 ? "Brand" : "Feature"}
                className="popup-img"
              />
            </div>
          </div>
        )}

        <ImageCropPopup
          reference={cropPopup}
          onCompleteCrop={handleUploadBrandImage}
        />
      </FieldAddModal>

      <FieldAddModal
        title={returnUpdateText()}
        btnText="Update"
        reference={editRef}
        onBtnPress={handleUpdateBrand}
        value={selectedLog == 1 ? currentBrand?.name : currentFeature?.name}
      >
        <InputField
          label={returnInputLabel()}
          placeholder={returnInputPlaceholder()}
          value={selectedLog == 1 ? currentBrand?.name : currentFeature?.name}
          onChange={(e) => handleUpdateBrandName(e.target.value)}
        />

        <label className="notBtn uploadBtnBox me-3  my-2">
          <i className="fas fa-upload"></i>
          {selectedLog == 1 ? (
            <input
              id="uploadImg"
              // type="file"
              accept="image/*,application/pdf"
              className="d-none"
              onClick={() => cropPopup?.current.show()}
            />
          ) : (
            <input
              id="uploadImg"
              type="file"
              accept="image/*,application/pdf"
              className="d-none"
              onChange={handleUploadFeatureImage}
            />
          )}
        </label>

        <div className="d-flex align-items-end">
          <div className="upload_product">
            {bannerImage || featuredImage ? (
              <img
                id="profile-preview"
                src={
                  selectedLog == 1
                    ? url + bannerImage?.thumbnailPath
                    : url + featuredImage?.thumbnailPath
                }
                alt="product"
                className="popup-img"
              />
            ) : (
              <img
                id="profile-preview"
                src={
                  selectedLog == 1
                    ? url + currentBrand?.image?.path
                    : url + currentFeature?.image?.path
                }
                alt="product"
                className="popup-img"
              />
            )}
          </div>
        </div>

        <ImageCropPopup
          reference={cropPopup}
          onCompleteCrop={handleUploadBrandImage}
        />
      </FieldAddModal>
      <FieldAddModal
        title={"Add New Financing Plan"}
        btnText="Add"
        reference={planRef}
        onBtnPress={handleCreatePlan}
        value={addFinancePlan}
        onClickCross={() => {
          setAddFinancePlan(null);
        }}
      >
        <TransparentTextInput
          key={3}
          labelText="Interest Rate in %"
          required
          className="primary-inputs secInp w-10 plan-field"
          // value={comission}
          // onChange={(e) => setComission(e.target.value)}
          placeholder="Enter Interest Rate in %"
          type="text"
          min={1}
          maxLength={2}
          pattern="[0-9]*"
          onlyValue={addFinancePlan?.interestRate ?? ""}
          onChange={(e) =>
            setAddFinancePlan((v) =>
              e.target.validity.valid
                ? { ...v, interestRate: e.target.value }
                : v
            )
          }
        />
        <TransparentTextInput
          key={3}
          labelText="Downpayment Rate in %"
          required
          className="primary-inputs secInp w-10 plan-field"
          // value={comission}
          placeholder="Enter Downpayment Rate in %"
          type="text"
          min={1}
          maxLength={2}
          pattern="[0-9]*"
          onlyValue={addFinancePlan?.downPaymentRate ?? ""}
          onChange={(e) =>
            setAddFinancePlan((v) =>
              e.target.validity.valid
                ? { ...v, downPaymentRate: e.target.value }
                : v
            )
          }
        />
        <select
          onChange={(event) =>
            setAddFinancePlan({ ...addFinancePlan, months: event.target.value })
          }
          name=""
          className="primSelect secInp w-100 plan-field"
        >
          <option selected disabled>
            Select Months
          </option>
          {months.map((element) => {
            return <option value={element}>{element} Months</option>;
          })}
        </select>
      </FieldAddModal>
      <FieldAddModal
        title={"Edit Financing Plan"}
        btnText="Edit"
        reference={editPlanRef}
        onBtnPress={handleUpdatePlan}
        value={currentPlan}
      >
        <TransparentTextInput
          key={3}
          labelText="Interest Rate in %"
          required
          className="primary-inputs secInp w-10 plan-field"
          // value={comission}
          // onChange={(e) => setComission(e.target.value)}
          placeholder="Enter Interest Rate in %"
          type="text"
          min={1}
          maxLength={2}
          pattern="[0-9]*"
          onlyValue={currentPlan?.interestRate ?? ""}
          onChange={(e) =>
            setCurrentPlan((v) =>
              e.target.validity.valid
                ? { ...v, interestRate: e.target.value }
                : v
            )
          }
        />
        <TransparentTextInput
          key={3}
          labelText="Downpayment Rate in %"
          required
          className="primary-inputs secInp w-10 plan-field"
          // value={comission}
          placeholder="Enter Downpayment Rate in %"
          type="text"
          min={1}
          maxLength={2}
          pattern="[0-9]*"
          onlyValue={currentPlan?.downPaymentRate ?? ""}
          onChange={(e) =>
            setCurrentPlan((v) =>
              e.target.validity.valid
                ? { ...v, downPaymentRate: e.target.value }
                : v
            )
          }
        />
        <select
          onChange={(event) =>
            setCurrentPlan({ ...currentPlan, months: event.target.value })
          }
          name=""
          className="primSelect secInp w-100 plan-field"
          selected={currentPlan?.months}
          value={currentPlan?.months}
        >
          <option selected disabled>
            Select Months
          </option>
          {months.map((element) => {
            return <option value={element}>{element} Months</option>;
          })}
        </select>
      </FieldAddModal>
    </AdminLayout>
  );
};
export default Settings;
