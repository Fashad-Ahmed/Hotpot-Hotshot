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
  mechanicTableLabel,
  mechanicTableValue,
  tableValuesAdmin,
} from "../../../utils/tableUtils";
// import { useDispatch, useSelector } from "react-redux";
// import { getUsers, updateStatus } from "../../../Redux/slices/userSlice";
// import { selectSettings } from "../../../Redux/slices/generalSlice";

const MechanicManagement = () => {
  const navigate = useNavigate();
  // const dispatach = useDispatch();
  const [users, setUsers] = useState([]);
  const [totalDocs, setTotalDocs] = useState(null);
  const [limit, setLimit] = useState(10);
  const [loading, setLoading] = useState(true);
  // const { constants } = useSelector(selectSettings);
  const constants = "";
  var timeOut = null;
  useEffect(() => {
    getData();
  }, []);
  function getData(page = 1, limit = 10, filter) {
    // setLoading(true);
    // dispatach(
    //   getUsers({ role: "mechanic", page: page, limit: limit, ...filter })
    // )
    //   .unwrap()
    //   .then((res) => {
    //     setUsers(res?.users);
    //     setTotalDocs(res?.totalDocs);
    //     setLimit(limit);
    //     setLoading(false);
    //   });
  }

  function updateUserStatus(user) {
    // dispatach(updateStatus({ userId: user.id, status: user.status }))
    //   .unwrap()
    //   .then((res) => {
    //     getData();
    //   });
  }
  return (
    <AdminLayout>
      <MainTable
        heading="Mechanics Management"
        // filter
        tableLabel={mechanicTableLabel}
        tableValue={mechanicTableValue}
        tableKeys={tableValuesAdmin["mechanics"]}
        data={users}
        onSearch={(page, limit, v) => {
          if (timeOut != null) {
            clearTimeout(timeOut);
          }
          timeOut = setTimeout(() => {
            getData(page, limit, { keyword: v });
          }, 500);
        }}
        search
        clickOnView={(id) => {
          navigate(`/mechanic-details/${id}`);
        }}
        onChangeStatus={(id, status) => {
          updateUserStatus({ id, status });
        }}
        withShadow
        pagination
        filter
        totalDocs={totalDocs}
        loading={loading}
        onClickPagination={(page, limit) => getData(page, limit, {})}
        emptyTitle={"No Mechanic Found"}
        onApplyFilter={(page, limit, filter) => getData(page, limit, filter)}
        filterStatusArray={constants?.generalStatusArray}
      />
    </AdminLayout>
  );
};
export default MechanicManagement;
