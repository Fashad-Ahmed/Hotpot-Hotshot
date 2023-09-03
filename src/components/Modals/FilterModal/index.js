import React, { useEffect, useImperativeHandle, useState } from "react";
import "./styles.css";
// import component 👇
import "../../../assets/css/globalStyles.css";
//import styles 👇
import "bootstrap/dist/css/bootstrap.min.css";

import { Alert, Button, Modal } from "react-bootstrap";

import { useNavigate } from "react-router-dom";
import TransparentTextInput from "../../TextInputs/TransparentTextInput";
import moment from "moment";

const initialState = {
  from: "",
  to: "",
  status: "",
};

const FilterModal = (props) => {
  const defaultDateFormat = null;
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [filters, setFilters] = useState(initialState);
  useImperativeHandle(props?.reference, () => ({
    hide: hide,
    show: show,
  }));

  const hide = () => {
    setVisible(false);
  };
  const show = () => {
    setVisible(true);
  };

  const handleApply = () => {
    if (!filters?.from || !filters?.to || !filters?.status) {
      Alert("Please Select All filters");
      return;
    }
    let temp = { ...filters };
    let filterData = {
      createdAt: {
        from: temp?.from,
        to: temp?.to,
      },
      status: temp?.status,
    };
    props?.onPressApply(filterData);
    setFilters(initialState);
    hide();
  };

  return (
    <Modal show={visible} onHide={hide}>
      <div className="offcanvas-header">
        <h5 id="offcanvasRightLabel">Filter</h5>
        <button
          type="button"
          className="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
          onClick={hide}
        ></button>
      </div>
      <div className="offcanvas-body customfilters px-5">
        <div className="my-3">
          <label htmlFor="" className="mb-2">
            Sort By Date:
          </label>
          <TransparentTextInput
            key={1}
            labelText="From"
            id="from"
            className="inpDate w-100"
            type="date"
            onChange={(e) =>
              setFilters({
                ...filters,
                from: moment(
                  `${e.target.value}T${"00:00:00"}`,
                  defaultDateFormat?.dateTimeFormat
                )
                  .utc()
                  .valueOf(),
              })
            }
            OnlyValue={filters?.from}
          />
        </div>
        <div className="my-3">
          <TransparentTextInput
            key={2}
            labelText="To"
            id="to"
            className="inpDate w-100"
            type="date"
            onChange={(e) =>
              setFilters({
                ...filters,
                to: moment(
                  `${e.target.value}T${"23:59:59"}`,
                  defaultDateFormat?.dateTimeFormat
                )
                  .utc()
                  .valueOf(),
              })
            }
            placeholder="To Date"
            OnlyValue={filters?.to}
          />
        </div>
        <div className="my-3">
          <label htmlFor="adStatus" className="d-block mb-1">
            Filter By Status
          </label>
          <select
            name=""
            id="adStatus"
            className="primSelect w-100"
            onChange={(e) => setFilters({ ...filters, status: e.target.value })}
            value={filters?.status}
          >
            <option value="Select year">Select Status</option>
            {props?.filterStatus?.map((item) => {
              return (
                <option value={item}>
                  {item?.charAt(0).toUpperCase() + item.slice(1)}
                </option>
              );
            })}
          </select>
        </div>
        <div className="my-4 text-center">
          <button
            className="main-btn my-2 mx-2"
            type="button"
            data-bs-dismiss="offcanvas"
            onClick={() => {
              handleApply();
            }}
          >
            Apply
          </button>
          <button
            className="sec-btn my-2 sec-transparent mx-2"
            type="button"
            onClick={() => {
              document.getElementById("from").value = "";
              document.getElementById("to").value = "";
              setFilters(initialState);
              props?.onPressApply({});
            }}
          >
            Clear All
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default FilterModal;
