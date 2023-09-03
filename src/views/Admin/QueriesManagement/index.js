import React, { useEffect } from "react";
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
// import useGeneral from "../../../Hooks/useGeneral";
import {
  orderManagementLabel,
  orderManagementValues,
  queryManagementLabel,
  queryManagementValue,
  tableValuesAdmin,
} from "../../../utils/tableUtils";
import { useState } from "react";

var timeOut = null;
const QueriesManagement = () => {
  const navigate = useNavigate();
  // const { getQueryLists } = useGeneral();
  const [loading, setLoading] = useState(true);
  const [queries, setQueries] = useState([]);
  const [totalDocs, setTotalDocs] = useState(null);
  useEffect(() => {
    getData();
  }, []);

  const getData = (page = 1, limit = 10, filter) => {
    // getQueryLists({ page: page, limit: limit, ...filter }).then((res) => {
    //   setQueries(res?.queries);
    //   setTotalDocs(res?.totalDocs);
    //   setLoading(false);
    // });
  };

  return (
    <AdminLayout>
      <MainTable
        heading="Queries Management"
        // filter
        tableLabel={queryManagementLabel}
        tableKeys={tableValuesAdmin["queries"]}
        tableValue={queryManagementValue}
        data={queries}
        hideStatus
        // clickOnView={() => {
        //   navigate("/query-details");
        // }}
        clickOnView={(id, item) => {
          navigate(`/query-details/${id}`, {
            state: {
              item: item,
            },
          });
        }}
        onSearch={(page, limit, v) => {
          if (timeOut != null) {
            clearTimeout(timeOut);
          }
          timeOut = setTimeout(() => {
            getData(page, limit, { keyword: v });
          }, 500);
        }}
        totalDocs={totalDocs}
        search
        pagination
        onClickPagination={(page, limit) => getData(page, limit)}
        loading={loading}
        emptyTitle={"No Queries Found"}
        withShadow
      />
    </AdminLayout>
  );
};
export default QueriesManagement;
