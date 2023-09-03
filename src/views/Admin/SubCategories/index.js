import React, { useState, useEffect, useRef } from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, useParams } from "react-router-dom";
import AdminLayout from "../../../components/AdminLayout";
import MainTable from "../../../components/MainTable";
import {
  subCategoryManagementLabel,
  tableValuesAdmin,
} from "../../../utils/tableUtils";
// import useShop from "../../../Hooks/useShop";
import FieldAddModal from "../../../components/Popups/FieldAddModal";
import InputField from "../../../components/TextInputs/InputField";
// import { useDispatch } from "react-redux";
// import { postUpdateCategoryData } from "../../../Redux/slices/shopSlice";
// import EmptyCard from "../../../Components/Cards/EmptyCard";

const SubCategories = () => {
  const { id } = useParams();
  const parentId = useParams();
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  let timeOut = 10;
  let limit = 10;
  // const { getCategories, createInventoryCategory, updateInventoryCategory } =
  //   useShop();
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState(null);
  const [currentCategory, setCurrentCategory] = useState(null);

  console.log(categories, "categoriescategoriescategories");

  const addRef = useRef();
  const editRef = useRef();

  const returnTableHeading = () => {
    return "Sub Category Management";
  };

  const returnButtonText = () => {
    return "Add New Sub Category";
  };

  const returnTableLabel = () => {
    return subCategoryManagementLabel;
  };
  useEffect(() => {
    handleCategories();
  }, []);

  const handleCategories = (page = 1, limit = 10, keyword = "") => {
    // getCategories({ parent: id }).then((res) => {
    //   setCategories(res?.categories);
    //   setLoading(false);
    // });
  };

  const handleAddCategory = () => {
    const data = {
      name: newCategory,
      parent: id,
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
      parent: id,
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
      parent: parentId?.id,
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
                <span className="backLink" onClick={() => navigate(-1)}>
                  <i className="fas fa-arrow-left go-back-icon"></i>
                </span>
                <h6 className="section-heading mb-0">Inventory Management</h6>
              </div>
            </div>
            <div className="custom_tabs">
              <div className="tab-content" id="pills-tabContent">
                <MainTable
                  data={categories}
                  heading={returnTableHeading()}
                  tableLabel={returnTableLabel()}
                  tableKeys={tableValuesAdmin["inventory_sub_categories"]}
                  emptyTitle="No Sub Categories Found"
                  onSearch={(v) => {
                    if (timeOut != null) {
                      clearTimeout(timeOut);
                    }
                    timeOut = setTimeout(() => {
                      handleCategories(1, limit, v.target.value);
                    }, 500);
                  }}
                  clickOnView={(id, item) => {
                    navigate(`/products/${id}`);
                  }}
                  onChangeStatus={(id, status) => {
                    updateUserStatus(id, status);
                  }}
                  className={"tab-pane fade show active"}
                  // filter
                  addButton={returnButtonText()}
                  onAddButtonClick={() => addRef.current.show()}
                  onClickEdit={(id, item) => handleEdit(item)}
                  onClickPagination={(page, limit) =>
                    handleCategories(page, limit)
                  }
                  // pagination
                  // shadow
                  // search
                  loading={loading}
                />
              </div>

              <FieldAddModal
                title="Add Sub Category"
                btnText="Add New Sub Category"
                reference={addRef}
                onBtnPress={handleAddCategory}
                value={newCategory}
              >
                <InputField
                  label={"Sub Category Name"}
                  placeholder="Enter The Sub Category"
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
export default SubCategories;
