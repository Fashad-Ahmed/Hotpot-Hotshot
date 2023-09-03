import React, { useState } from "react";
import "./styles.css";
import "../../../assets/css/globalStyles.css";
import { url } from "../../../API/config";
import { images } from "../../../assets";

const ListTable = (props) => {
  return (
    <div className="custom_table custom_order_table table-responsive">
      <table className="table table-borderless w-100">
        <thead>
          <tr>
            {props?.tableLabel?.map((val, index) => {
              return <th>{val}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
            {/* {props?.tableValue?.map((item, index) =>
              Object.keys(item).map((keys, i) => {
                if (i == 0) {
                  if (keys == "product") {
                    return (
                      <>
                        <td>{i + 1}</td>
                        <td>
                          <img
                            src={props?.tableValue[index][keys].images[0]}
                            alt="product Image"
                          />
                        </td>
                      </>
                    );
                  }
                  return (
                    <>
                      <td>{i + 1}</td> <td>{props?.tableValue[index][keys]}</td>
                    </>
                  );
                }
                if (keys == "image") {
                  return (
                    <td>
                      <img
                        src={props?.tableValue[index][keys].images[0]}
                        alt="product Image"
                      />
                    </td>
                  );
                }
                if (keys == "clickOnView") {
                  return (
                    <td>
                      <button
                        type="button"
                        className="notBtn"
                        data-bs-toggle="dropdown"
                        onClick={() => {
                          handleViewPopup(index);
                        }}
                      >
                        <i className="fa fa-ellipsis-v opt_icon"></i>
                      </button>
                      {viewIndex == index && (
                        <div className="tdDropDown">
                          <a
                            className="dropdown-item"
                            onClick={props?.tableValue[index][keys]}
                          >
                            <i className="far fa-eye "></i>View
                          </a>
                        </div>
                      )}
                    </td>
                  );
                }
                return <td>{props?.tableValue[index][keys]}</td>;
              })
            )} */}

            {props?.tableValue?.map((item, index) => {
              return (
                <>
                  <td>{index + 1}</td>
                  <td>
                    <img
                      src={
                        item?.product?.images?.length
                          ? url + item?.product?.images[0]?.thumbnailPath
                          : images.placeholder
                      }
                      alt="product Image"
                      className="table-img"
                      onError={(e) => (e.target.src = images.placeholder)}
                    />
                  </td>
                  <td>{item?.product?.name}</td>
                  <td>{item?.price}</td>

                  <td>{item?.quantity}</td>
                </>
              );
            })}
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default ListTable;
