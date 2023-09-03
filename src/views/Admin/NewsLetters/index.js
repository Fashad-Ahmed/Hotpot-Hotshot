import React, { useRef, useEffect, useState } from "react";
import "./styles.css";

import { useNavigate } from "react-router-dom";

import AdminLayout from "../../../components/AdminLayout";
import MainTable from "../../../components/MainTable";
// import FieldAddModal from "../../../components/Popups/FieldAddModal";
// import InputField from "../../../components/TextInputs/InputField";
// import LockField from "../../../components/TextInputs/LockField";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   addCategory,
//   editCategory,
//   getCategoryList,
//   getCategoryName,
// } from "../../../Redux/slices/adsSlice";
import { tableValuesAdmin } from "../../../utils/tableUtils";
import { showErrorToast, showSuccessToast } from "../../../API/HelperFunction";
import ConfirmationModal from "../../../components/Popups/ConfirmationModal";
// import {
//   getNewsLetter,
//   sendNewsLetter,
// } from "../../../Redux/slices/contentSlice";
import NewsLetterModal from "../../../components/Popups/newsLetterPopup";
import GeneralModal from "../../../components/Popups/GeneralModal";

const tableLabel = ["S. NO.", "SUBJECT", "SENDED ON", "ACTION"];

const NewsLetters = () => {
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  const [letters, setLetters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalDocs, setTotalDocs] = useState(null);
  const [subject, setSubject] = useState(null);
  const [message, setMessage] = useState(null);
  const addRef = useRef();
  const successRef = useRef();
  const getData = (page = 1, limit = 10) => {
    // dispatch(getNewsLetter({ page, limit }))
    //   .unwrap()
    //   .then((res) => {
    //     setLetters(res?.newsLetters?.docs);
    //     setTotalDocs(res?.newsLetters?.totalDocs);
    //     setLoading(false);
    //   });
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSendNewsLetter = () => {
    if (!subject) {
      showErrorToast("Please Enter Subject");
    } else if (!message) {
      showErrorToast("Please Enter Message");
    } else {
      let data = { subject, message };
      // dispatch(sendNewsLetter(data)).then((res) => {
      //   if (!res.err) {
      //     successRef.current.show();
      //     getData();
      //   }
      // });
    }
  };

  return (
    <AdminLayout>
      <div className="configuration">
        <div className="container-fluid">
          <div className="box">
            <div className="d-flex align-items-center justify-content-between flex-wrap">
              <h1 className="section-heading font-commons my-3">
                News Letter Management
              </h1>
              <a
                className="main-btn my-3"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#addCategory"
                onClick={() => addRef.current.show()}
              >
                Send a News Letter
              </a>
            </div>

            <MainTable
              tableLabel={tableLabel}
              tableKeys={tableValuesAdmin["newsLetters"]}
              data={letters}
              clickOnView={(id, val) => {
                navigate("/news-letter-detail", { state: { item: val } });
              }}
              className="custom_table table-responsive"
              onClickPagination={(page, limit) => {
                getData(page, limit);
              }}
              loading={loading}
              totalDocs={totalDocs}
              pagination
              emptyTitle={"No News Letter Found"}
              hideStatus
            />
            <NewsLetterModal
              rModal
              reference={addRef}
              onChangeSubject={setSubject}
              onChangeMessage={setMessage}
              value={subject && message}
              onBtnPress={handleSendNewsLetter}
            />
            <GeneralModal
              reference={successRef}
              title="Success"
              message="News Letter has been send successfully"
              onClick={successRef?.current?.hide}
            />
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};
export default NewsLetters;
