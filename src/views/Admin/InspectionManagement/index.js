import React, { useEffect, useState } from "react";
import "./styles.css";
import "../../../assets/css/globalStyles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../../../components/AdminLayout";
import MainTable from "../../../components/MainTable";
import {
  inspectionTableLabel,
  tableValuesAdmin,
} from "../../../utils/tableUtils";
// import { useDispatch, useSelector } from "react-redux";
// import { selectSettings } from "../../../Redux/slices/generalSlice";
// import { getInspectionReports } from "../../../Redux/slices/adsSlice";

const InspectionManagement = () => {
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const { constants } = useSelector(selectSettings);
  const constants = null;
  const [ads, setAds] = useState([]);
  const [totalDocs, setTotalDocs] = useState(null);
  const [loading, setLoading] = useState(true);
  const getData = (page = 1, limit = 10, data) => {
    // dispatch(
    //   getInspectionReports({
    //     page,
    //     limit,
    //     ...data,
    //     status: ["pending", "completed"],
    //   })
    // )
    //   .unwrap()
    //   .then((res) => {
    //     console.log(res?.reports);
    //     setAds(res?.reports);
    //     setTotalDocs(res?.totalDocs);
    //     setLoading(false);
    //   });
  };
  useEffect(() => {
    getData();
  }, []);

  console.log(constants, "constantsconstants");

  return (
    <AdminLayout>
      <MainTable
        heading="Inspection Reports"
        tableLabel={inspectionTableLabel}
        tableKeys={tableValuesAdmin["inspectionReportList"]}
        data={ads}
        clickOnView={(id) => {
          navigate(`/inspection-report/${id}`);
        }}
        totalDocs={totalDocs}
        filter
        withShadow
        search
        pagination
        onClickPagination={(page, limit) => getData(page, limit)}
        onSearch={(page, limit, searchText) =>
          getData(page, limit, { keyword: searchText })
        }
        onApplyFilter={(page, limit, filter) => getData(page, limit, filter)}
        filterStatusArray={["pending", "completed"]}
        loading={loading}
        emptyTitle={"No Inspection Report Found"}
      />
    </AdminLayout>
  );
};
export default InspectionManagement;
