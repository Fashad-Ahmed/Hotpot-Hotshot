import React, { useRef, useEffect, useState } from "react";
import "./styles.css";
import { images } from "../../../assets";
// import TransparentTextInput from "../../../Components/TextInputs/TransparentTextInput";
// import MainButton from "../../../Components/Buttons/MainButton";
// import TextButton from "../../../Components/Buttons/TextButton";
import { useNavigate } from "react-router-dom";
// import { DashboardHeader } from "../../../Components/Headers/DashboardHeader";
// import DashboardDrawer from "../../../Components/DashboardDrawer";
import AdminLayout from "../../../components/AdminLayout";
import MainTable from "../../../components/MainTable";
import FieldAddModal from "../../../components/Popups/FieldAddModal";
import InputField from "../../../components/TextInputs/InputField";
// import LockField from "../../../Components/TextInputs/LockField";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   addCategory,
//   editCategory,
//   getCategoryList,
//   getCategoryName,
// } from "../../../Redux/slices/adsSlice";
import { tableValuesAdmin } from "../../../utils/tableUtils";
import { showErrorToast, showSuccessToast } from "../../../API/HelperFunction";
// import ConfirmationModal from "../../../Components/Popups/ConfirmationModal";

const tableLabel = ["S. NO.", "NAME", "STATUS", "ACTION"];

const CarCategories = () => {
  const navigate = useNavigate();
  // const dispatach = useDispatch();

  const addRef = useRef();
  const editRef = useRef();
  const viewRef = useRef();

  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [newCategory, setNewCategory] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCagories();
  }, []);

  useEffect(() => {
    if (selectedId) {
      getCategoryById();
    }
  }, [selectedId]);

  const getCagories = () => {
    // dispatach(getCategoryList())
    //   .unwrap()
    //   .then((res) => {
    //     setCategories(res);
    //     setLoading(false);
    //   });
  };
  const getCategoryById = () => {
    // dispatach(getCategoryName(selectedId))
    //   .unwrap()
    //   .then((res) => {
    //     setSelectedCategory(res);
    //     editRef.current.show();
    //   });
  };

  const addNewCategory = () => {
    if (!newCategory) {
      showErrorToast("Please Enter Category Name.");
    } else {
      // dispatach(addCategory({ name: newCategory }))
      //   .unwrap()
      //   .then((res) => {
      //     showSuccessToast(res?.message), getCagories(), setNewCategory(null);
      //   });
    }
  };

  const updateCategory = () => {
    if (!selectedCategory) {
      showErrorToast("Please Enter Category Name.");
    } else {
      // dispatach(
      //   editCategory({ data: { name: selectedCategory?.name }, id: selectedId })
      // )
      //   .unwrap()
      //   .then((res) => {
      //     showSuccessToast(res?.message),
      //       getCagories(),
      //       setSelectedCategory(null);
      //   });
    }
  };

  const updateCategoryStatus = (id, status) => {
    if ((id, status)) {
      // console.log(id, status);
      // dispatach(editCategory({ data: { status: status }, id: id }))
      //   .unwrap()
      //   .then((res) => {
      //     showSuccessToast(res?.message),
      //       getCagories(),
      //       setSelectedCategory(null);
      //   });
    }
  };

  return (
    <AdminLayout>
      <div className="configuration">
        <div className="container-fluid">
          <div className="box">
            <div className="d-flex align-items-center justify-content-between flex-wrap">
              <h1 className="section-heading font-commons my-3">
                Car Categories Management
              </h1>
              <a
                className="main-btn my-3"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#addCategory"
                onClick={() => addRef.current.show()}
              >
                Add Car Category
              </a>
            </div>

            <MainTable
              tableLabel={tableLabel}
              tableKeys={tableValuesAdmin["category"]}
              data={categories}
              clickOnView={(id) => {
                editRef.current.show();
                setSelectedId(id);
              }}
              onClickStatus={(status) => updateCategory(status)}
              className="custom_table table-responsive"
              onChangeStatus={(id, status) => updateCategoryStatus(id, status)}
              onClickPagination={() => {}}
              loading={loading}
              emptyTitle={"No Car Category Found"}
            />

            {/* <FieldAddModal
              btnText="Edit"
              onBtnPress={() => {
                editRef.current.show();
              }}
              title="View Category"
              reference={viewRef}
            >
              <LockField
                label={"Category Name"}
                value={selectedCategory?.name}
              />
            </FieldAddModal> */}

            <FieldAddModal
              title="Edit Category"
              btnText="Update"
              reference={editRef}
              value={selectedCategory}
              onBtnPress={updateCategory}
            >
              <InputField
                label={"Category Name"}
                placeholder="Enter The Category"
                value={selectedCategory?.name}
                // onChange={(e) =>
                //   setSelectedCategory({
                //     ...selectedCategory,
                //     name: e.target.value,
                //   })
                // }

                onChange={(e) => {
                  // e.target.validity.valid
                  //   ? setSelectedCategory({
                  //       ...selectedCategory,
                  //       name: e.target.value,
                  //     })
                  //   : "";
                }}
                onlyValue={selectedCategory?.name}
                pattern="^[a-zA-Z]+$"
              />
            </FieldAddModal>

            <FieldAddModal
              title="Add Category"
              btnText="Add New"
              reference={addRef}
              onBtnPress={addNewCategory}
              value={newCategory}
            >
              <InputField
                label={"Category Name"}
                placeholder="Enter The Category"
                // onChange={(e) => setNewCategory(e.target.value)}
                onChange={(e) => {
                  // e.target.validity.valid ? setNewCategory(e.target.value) : "";
                }}
                onlyValue={newCategory}
                pattern="^[a-zA-Z]+$"
              />
            </FieldAddModal>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};
export default CarCategories;
