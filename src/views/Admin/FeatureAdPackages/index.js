import React, { useEffect, useState } from "react";
import "./styles.css";
import "../../../assets/css/globalStyles.css";
// import { images } from "../../../Assets";

import "bootstrap/dist/css/bootstrap.min.css";
// import TransparentTextInput from "../../../Components/TextInputs/TransparentTextInput";
// import MainButton from "../../../Components/Buttons/MainButton";
// import TextButton from "../../../Components/Buttons/TextButton";
import { useNavigate } from "react-router-dom";
// import { DashboardHeader } from "../../../Components/Headers/DashboardHeader";
// import DashboardDrawer from "../../../Components/DashboardDrawer";
import AdminLayout from "../../../components/AdminLayout";
// import ListTable from "../../../Components/Tables/ListTable";
import MainTable from "../../../components/MainTable";
import {
  featureAdPackagesLabel,
  tableValuesAdmin,
} from "../../../utils/tableUtils";
// import useAds from "../../../Hooks/useAds";
// import { useDispatch } from "react-redux";
// import { updateFeaturedPackageRequest } from "../../../Redux/slices/adsSlice";

const FeatureAdPackages = () => {
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const { getFeaturePackages } = useAds();

  const [featuredPackages, setFeaturedPackages] = useState([]);
  const [totalDocs, setTotalDocs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    handlePackages();
  }, []);

  const handlePackages = () => {
    // getFeaturePackages({ status: ["active", "inactive"] }).then((res) => {
    //   setFeaturedPackages(res?.packages);
    //   setTotalDocs(res?.totalDocs);
    //   setLoading(false);
    // });
  };

  function updateUserStatus(id, status) {
    const data = {
      status,
    };
    // dispatch(updateFeaturedPackageRequest({ id, data }))
    //   .unwrap()
    //   .then((res) => {
    //     if (res) {
    //       handlePackages();
    //     }
    //   });
  }

  return (
    <AdminLayout>
      <MainTable
        heading="Feature Ad Packages"
        tableLabel={featureAdPackagesLabel}
        tableKeys={tableValuesAdmin["featuredAds"]}
        data={featuredPackages}
        totalDocs={totalDocs}
        emptyTitle="No Featured Packages Found"
        onChangeStatus={(id, status) => {
          updateUserStatus(id, status);
        }}
        clickOnView={(id, item) => {
          navigate(`/featured-details/`, {
            state: {
              item,
            },
          });
        }}
        // onSearch={(v) => {
        //   if (timeOut != null) {
        //     clearTimeout(timeOut);
        //   }
        //   timeOut = setTimeout(() => {
        //     handlePackages(1, limit, v.target.value);
        //   }, 500);
        // }}
        withShadow
        addButton="Add Plan"
        onAddButtonClick={() => navigate("/add-feature")}
        // onClickPagination={(page, limit) => handlePackages(page, limit)}
        loading={loading}
        // pagination
        // shadow
        // search
      />
    </AdminLayout>
  );
};
export default FeatureAdPackages;
