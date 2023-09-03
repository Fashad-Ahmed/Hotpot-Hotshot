import React, { useEffect, useRef, useState } from "react";
import "./styles.css";
import "../../../assets/css/globalStyles.css";
import { images } from "../../../assets";

import "bootstrap/dist/css/bootstrap.min.css";
import TransparentTextInput from "../../../components/TextInputs/TransparentTextInput";
import MainButton from "../../../components/Buttons/MainButton";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../../../components/AdminLayout";
import ListTable from "../../../components/Tables/ListTable";
// import useShop from "../../../Hooks/useShop";
import { useParams } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { selectSettings } from "../../../Redux/slices/generalSlice";
import ConfirmationModal from "../../../components/Popups/ConfirmationModal";

const tableLabel = [
  "S. NO.",
  "PRODUCT",
  "PRODUCT NAME",
  "AMOUNT ($)",
  "QUANTITY",
];

const OrderDetails = () => {
  const conRef = useRef();
  const { id } = useParams();
  const navigate = useNavigate();
  // const { getOrderDetails, editOrderDetails } = useShop();
  const [orderDetails, setOrderDetails] = useState(null);
  const [orderStatus, setOrderStatus] = useState("pending");
  // const { constants } = useSelector(selectSettings);
const constants = null
  useEffect(() => {
    handleOrderDetails();
  }, []);

  const handleOrderDetails = () => {
    // getOrderDetails({ orderId: id }).then((res) => {
    //   setOrderDetails(res?.order);
    //   setOrderStatus(res?.order?.status);
    // });
  };

  const handleEditOrderDetails = (value) => {
    // setOrderStatus(value);
    // editOrderDetails({
    //   orderId: id,
    //   status: orderStatus,
    // }).then((res) => {
    //   handleOrderDetails();
    // });
  };

  const handleOrderTaxType = () => {
    if (orderDetails?.charges?.tax?.taxType == "fixed") {
      return "$";
    } else {
      return "%";
    }
  };

  const handleOrderTotal = () => {
    var sum = 0;
    if (orderDetails?.orderItems) {
      orderDetails?.orderItems?.forEach((element) => {
        sum = element?.price * element?.quantity;
      });
    }
    return sum;
  };

  const handleShippingType = () => {
    if (orderDetails?.charges?.shipping?.shippingType == "flat") {
      return "$" + orderDetails?.charges?.shipping?.fee;
    }
  };
  if (orderDetails == null) return null;

  const renderStatus = () => {
    if (
      orderStatus == "delivered" ||
      orderStatus == "cancelled" ||
      orderStatus == "refunded"
    ) {
      return true;
    } else {
      return false;
    }
  };
  console.log("===============>");
  return (
    <AdminLayout>
      <div className="configuration">
        <div className="container-fluid">
          <div className="box my-4">
            <div className="d-flex align-items-center justify-content-between flex-wrap">
              <div className="d-flex align-items-center my-3 section-heading">
                <span className="backLink" onClick={() => navigate(-1)}>
                  <i className="fas fa-arrow-left go-back-icon"></i>
                </span>
                <h6 className="section-heading mb-0">Order Details</h6>
              </div>
              {/* <option value="Select year">Select Status</option>
            {props?.filterStatus?.map((item) => {
              return (
                <option value={item}>
                  {item?.charAt(0).toUpperCase() + item.slice(1)}
                </option>
              );
            })} */}
              <select
                className="m-0 selectingOptions"
                value={orderDetails?.status}
                disabled={renderStatus()}
                // onChange={(e) => handleEditOrderDetails(e.target.value)}
                onChange={(e) => {
                  conRef.current.show();
                  setOrderStatus(e.target.value);
                  // handleEditOrderDetails(e.target.value)
                }}
              >
                {/* {constants?.orderStatues?.map((item) => {
                  return (
                    <option value={item}>
                      {item?.charAt(0).toUpperCase() + item.slice(1)}
                    </option>
                  );
                })} */}
                {Object.entries(constants?.orderStatues)?.map((item) => {
                  return (
                    <option value={constants?.orderStatues[item[1]]}>
                      {constants?.orderStatues[item[0]]
                        ?.charAt(0)
                        .toUpperCase() +
                        constants?.orderStatues[item[0]]
                          ?.slice(1)
                          ?.replace(/([A-Z])/g, " $1")
                          .trim()}
                    </option>
                  );
                })}

                {/* <option value="pending">Pending</option>
                <option value="inprocess">Inprocess</option>
                <option value="delivered">Delivered</option> */}
              </select>
            </div>
            <div className="row">
              <div className="col-xxl-3 col-xl-4 col-md-8">
                <div className="details_wrap my-4 contflexBox">
                  <label htmlFor="">Order ID</label>
                  <p className="mb-0">{orderDetails?._id}</p>
                </div>
                <div className="details_wrap my-4 contflexBox">
                  <label htmlFor="">Order Date</label>
                  <p className="mb-0">{orderDetails?.createdAt}</p>
                </div>
              </div>
            </div>
            <div className="row align-items-baseline">
              <div className="col-xl-8 my-2">
                <ListTable
                  tableLabel={tableLabel}
                  tableValue={orderDetails?.orderItems}
                />
              </div>
              <div className="col-xl-4 my-2">
                <div className="summary_box">
                  {/* <div className="d-md-flex align-items-center justify-content-between my-4">
                    <h6 className="cGray">Total Amount:</h6>
                    <h6 className="cBlack">$250</h6>
                  </div> */}
                  <div className="d-md-flex align-items-center justify-content-between my-4">
                    <h6 className="cGray">Sub Total</h6>
                    <h6 className="cBlack">${handleOrderTotal()}</h6>
                  </div>
                  {orderDetails?.charges?.tax?.amount > 0 && (
                    <div className="d-md-flex align-items-center justify-content-between my-4">
                      <h6 className="cGray">Tax</h6>
                      <h6 className="cBlack">
                        {handleOrderTaxType()}
                        {orderDetails?.charges?.tax?.amount}
                      </h6>
                    </div>
                  )}
                  <div className="d-md-flex align-items-center justify-content-between my-4">
                    <h6 className="cGray">Delivery Fee</h6>
                    <h6 className="cBlack">{handleShippingType()}</h6>
                  </div>
                  <hr />
                  <div className="d-md-flex align-items-center justify-content-between my-4">
                    <h6 className="cGray">Total</h6>
                    <h6 className="cBlack">
                      $
                      {handleOrderTotal() +
                        orderDetails?.charges?.shipping?.fee}{" "}
                    </h6>
                  </div>
                </div>
              </div>
              {/* <div className="col-xxl-3 col-xl-4 col-md-8">
                <h1 className="section-heading font-commons my-2">
                  Contact Information
                </h1>
                <div className="details_wrap my-4 contflexBox">
                  <label htmlFor="Name">Name</label>
                  <p className="mb-0">
                    {orderDetails?.addresses?.shipping?.firstName}{" "}
                    {orderDetails?.addresses?.shipping?.lastName}
                  </p>
                </div>
                <div className="details_wrap my-4 contflexBox">
                  <label htmlFor="Name">Email</label>
                  <p className="mb-0">{orderDetails?.addresses?.shipping?.email}</p>
                </div>
                <div className="details_wrap my-4 contflexBox">
                  <label htmlFor="Name">Phone Number</label>
                  <p className="mb-0">{orderDetails?.addresses?.shipping?.phone}</p>
                </div>
                <div className="details_wrap my-4 contflexBox">
                  <label htmlFor="Name">User ID</label>
                  <p className="mb-0">{orderDetails?.user}</p>
                </div>
              </div> */}
              <h1 className="section-heading font-commons my-2">
                Billing Information
              </h1>
              <div className="details_wrap my-4 contflexBox">
                <label htmlFor="Name">Name</label>
                <p className="mb-0">
                  {orderDetails?.user?.firstName}
                  {orderDetails?.user?.lastName}
                </p>
              </div>
              <div className="details_wrap my-4 contflexBox">
                <label htmlFor="Name">Email</label>
                <p className="mb-0">{orderDetails?.user?.email}</p>
              </div>
              <div className="details_wrap my-4 contflexBox">
                <label htmlFor="Name">Phone Number</label>
                <p className="mb-0">{orderDetails?.user?.phone}</p>
              </div>
              <div className="details_wrap my-4 contflexBox">
                <label htmlFor="Name">User ID</label>
                <p className="mb-0">{orderDetails?.user?._id}</p>
              </div>
              <div className="col-xxl-3 col-xl-4 col-md-8">
                <h5 className="fw400 mt-3">Billing Address</h5>
                <div className="details_wrap my-3">
                  <p className="cGray">
                    {orderDetails?.addresses?.billing?.address}
                  </p>
                  <p className="cGray">
                    {orderDetails?.addresses?.billing?.city}
                  </p>
                  <p className="cGray">
                    {orderDetails?.addresses?.billing?.country}
                  </p>
                  <p className="cGray">
                    {orderDetails?.addresses?.billing?.state}
                  </p>
                  <p className="cGray">
                    {orderDetails?.addresses?.billing?.zip}
                  </p>
                </div>
              </div>
              {orderDetails?.addresses?.shipToBillingAddress ? (
                <div className="col-xxl-3 col-xl-4 col-md-8">
                  <h5 className="fw400 mt-3">Shipping Address</h5>
                  <div className="details_wrap my-3">
                    <p className="cGray">
                      {orderDetails?.addresses?.billing?.address}
                    </p>
                    <p className="cGray">
                      {orderDetails?.addresses?.billing?.city}
                    </p>
                    <p className="cGray">
                      {orderDetails?.addresses?.billing?.country}
                    </p>
                    <p className="cGray">
                      {orderDetails?.addresses?.billing?.state}
                    </p>
                    <p className="cGray">
                      {orderDetails?.addresses?.billing?.zip}{" "}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="col-xxl-3 col-xl-4 col-md-8">
                  <h5 className="fw400 mt-3">Shipping Address</h5>
                  <div className="details_wrap my-3">
                    <p className="cGray">
                      {orderDetails?.addresses?.shipping?.address}
                    </p>
                    <p className="cGray">
                      {orderDetails?.addresses?.shipping?.city}
                    </p>
                    <p className="cGray">
                      {orderDetails?.addresses?.shipping?.country}
                    </p>
                    <p className="cGray">
                      {orderDetails?.addresses?.shipping?.state}
                    </p>
                    <p className="cGray">
                      {orderDetails?.addresses?.shipping?.zip}{" "}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <ConfirmationModal
        reference={conRef}
        title={orderStatus}
        message={`Are you sure you want to update the status to ${orderStatus}?`}
        onBtnPress={handleEditOrderDetails}
      />
    </AdminLayout>
  );
};
export default OrderDetails;
