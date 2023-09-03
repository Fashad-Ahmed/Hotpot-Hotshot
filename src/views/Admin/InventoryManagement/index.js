import React, { useState, useEffect, useRef } from "react";
import "./styles.css";
// import { images } from "../../../Assets";

import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../../../components/AdminLayout";
import MainTable from "../../../components/MainTable";
import {
  categoryManagementLabel,
  categoryManagementValues,
  subCategoryManagementLabel,
  subCategoryManagementValues,
  inventoryTableLabel,
  inventoryTableValues,
  tableValuesAdmin,
} from "../../../utils/tableUtils";
// import useShop from "../../../Hooks/useShop";
import FieldAddModal from "../../../components/Popups/FieldAddModal";
import InputField from "../../../components/TextInputs/InputField";
// import { useDispatch } from "react-redux";
// import { postUpdateCategoryData } from "../../../Redux/slices/shopSlice";
// import EmptyCard from "../../../components/Cards/EmptyCard";

const InventoryManagement = () => {
  const navigate = useNavigate();
  // const { getCategories, createInventoryCategory, updateInventoryCategory } =
  //   useShop();
  // const dispatch = useDispatch();
  let timeOut = 10;
  let limit = 10;
  const [selectedLog, setSelectedLog] = useState(1);
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState(null);
  const [currentCategory, setCurrentCategory] = useState(null);
  const [totalDocs, setTotalDocs] = useState([]);

  const addRef = useRef();
  const editRef = useRef();

  const tabLogsButton = [
    {
      id: 1,
      name: "Category Management",
      onClick: () => {
        setSelectedLog(1);
      },
    },
    {
      id: 2,
      name: "Sub-Category Management",
      onClick: () => {
        setSelectedLog(2);
      },
    },
    {
      id: 3,
      name: "Inventory",
      onClick: () => {
        setSelectedLog(3);
      },
    },
  ];

  const returnTableHeading = () => {
    switch (selectedLog) {
      case 1: {
        return "Category Management";
      }
      case 2: {
        return "Sub Category Management";
      }
      case 3: {
        return "Inventory";
      }
      default: {
        return "Category Management";
      }
    }
  };

  const returnButtonText = () => {
    switch (selectedLog) {
      case 1: {
        return "Add New Category";
      }
      case 2: {
        return "Add New Sub Category";
      }
      case 3: {
        return "Add New Item";
      }
    }
  };

  const returnTableLabel = () => {
    switch (selectedLog) {
      case 1: {
        return categoryManagementLabel;
      }
      case 2: {
        return subCategoryManagementLabel;
      }
      case 3: {
        return inventoryTableLabel;
      }
      default: {
        return categoryManagementLabel;
      }
    }
  };
  const returnTableValue = () => {
    switch (selectedLog) {
      case 1: {
        return categoryManagementValues;
      }
      case 2: {
        return subCategoryManagementValues;
      }
      case 3: {
        return inventoryTableValues;
      }
      default: {
        return categoryManagementValues;
      }
    }
  };
  const returnRoute = () => {
    switch (selectedLog) {
      case 1: {
        return "/sub-categories";
      }
      case 2: {
        return "/booking-details";
      }
      case 3: {
        return "/featured-details";
      }
    }
  };

  const returnAddButtonClick = () => {
    switch (selectedLog) {
      case 1: {
        return "/car-categories";
      }
      case 2: {
        return "/booking-details";
      }
      case 3: {
        return () => navigate("");
      }
    }
  };

  useEffect(() => {
    handleCategories();
  }, []);

  const handleCategories = (page = 1, limit = 10, keyword = "") => {
    const parent = "null";

    // getCategories({ parent }).then((res) => {
    //   setCategories(res?.categories);
    //   setTotalDocs(res?.totalDocs);
    // });
  };

  const handleAddCategory = () => {
    const data = {
      name: newCategory,
    };
    // createInventoryCategory(data).then((res) => {

    //   if (res) {
    //     handleCategories();
    //   }
    // });
  };

  const handleUpdateCategory = () => {
    const data = {
      name: currentCategory?.name,
    };
    // updateInventoryCategory(currentCategory?._id, data).then((res) => {
    //   if (res) {
    //     handleCategories();
    //   }
    // });
  };

  const handleEdit = (item) => {
    setCurrentCategory(item);
    editRef.current.show(item);
  };

  const updateUserStatus = async (id, status) => {
    const data = {
      status,
    };
    // const response = await dispatch(
    //   postUpdateCategoryData({ id, data })
    // ).unwrap();
    // if (response) {
    //   handleCategories();
    // }
  };

  const handleUpdateCategoryName = (text) => {
    const tempCategory = { ...currentCategory };
    tempCategory.name = text;
    setCurrentCategory(tempCategory);
  };

  return (
    <AdminLayout>
      <div className="configuration">
        <div className="container-fluid">
          <div className="box my-4">
            <div className="d-flex align-items-center justify-content-between flex-wrap">
              <div className="d-flex align-items-center my-3 section-heading">
                <h6 className="section-heading mb-0">Inventory Management</h6>
              </div>
            </div>
            <div className="custom_tabs">
              <div className="tab-content" id="pills-tabContent">
                <MainTable
                  data={categories}
                  heading={returnTableHeading()}
                  tableLabel={returnTableLabel()}
                  tableKeys={tableValuesAdmin["inventory_categories"]}
                  emptyTitle="No Categories Found"
                  totalDocs={totalDocs}
                  onSearch={(v) => {
                    if (timeOut != null) {
                      clearTimeout(timeOut);
                    }
                    timeOut = setTimeout(() => {
                      handleCategories(1, limit, v.target.value);
                    }, 500);
                  }}
                  clickOnView={(id, item) => {
                    navigate(`/sub-categories/${id}`);
                  }}
                  onChangeStatus={(id, status) => {
                    updateUserStatus(id, status);
                  }}
                  className={"tab-pane fade show active"}
                  addButton={returnButtonText()}
                  onAddButtonClick={() => addRef.current.show()}
                  onClickEdit={(id, item) => handleEdit(item)}
                  onClickPagination={(page, limit) =>
                    handleCategories(page, limit)
                  }
                  // pagination
                  // shadow
                  // search
                />
              </div>

              <FieldAddModal
                title="Add Category"
                btnText="Add New"
                reference={addRef}
                onBtnPress={handleAddCategory}
                value={newCategory}
              >
                <InputField
                  label={"Category Name"}
                  placeholder="Enter The Category"
                  onChange={(e) => setNewCategory(e.target.value)}
                />
              </FieldAddModal>

              <FieldAddModal
                title="Update Category"
                btnText="Update"
                reference={editRef}
                onBtnPress={handleUpdateCategory}
                value={currentCategory?.name}
              >
                <InputField
                  label={"Category Name"}
                  placeholder="Enter The Category"
                  value={currentCategory?.name}
                  onChange={(e) => handleUpdateCategoryName(e.target.value)}
                />
              </FieldAddModal>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};
export default InventoryManagement;
