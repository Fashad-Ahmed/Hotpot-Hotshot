import React, { useState, useEffect } from "react";
import MainTable from "../../../components/MainTable";
import { useNavigate } from "react-router-dom";
import { tableValuesAdmin } from "../../../utils/tableUtils";
import AdminLayout from "../../../components/AdminLayout";

const tableLabel = [
  "S. NO.",
  "NAME",
  "EMAIL",
  "REGISTER ON",
  "STATUS",
  "ACTION",
];

const UserManagement = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  //   const { constants } = useSelector(selectSettings);
  // const [keyword, setKeyword] = useState("")

  const [totalDocs, setTotalDocs] = useState(null);
  const [loading, setLoading] = useState(true);
  const constants = null;

  var timeOut = null;
  useEffect(() => {
    // getData();
  }, []);
  function getData(page = 1, limit = 10, filter) {
    // dispatch(getUsers({ page: page, limit: limit, ...filter, role: "user" }))
    //   .unwrap()
    //   .then((res) => {
    //     setUsers(res?.users);
    //     setTotalDocs(res?.totalDocs);
    //     setLoading(false);
    //   });
  }
  function updateUserStatus(user) {
    //   // dispatch(getUsers({ page: page, limit: limit, keyword: keyword }))
    //   // console.log("updateUserStatus: ",user);
    //   dispatch(updateStatus({ userId: user.id, status: user.status }))
    //     .unwrap()
    //     .then((res) => {
    //       // console.log("updateStatus: ", res);
    //       getData();
    //     });
    //   // getAds({ page: page, limit: limit }).then((res) => {
    //   //   setAdsList(res?.ads);
    //   //   // setPage(res?.page);
    //   // });
  }
  return (
    <AdminLayout>
      <MainTable
        heading="User Management"
        tableLabel={tableLabel}
        tableKeys={tableValuesAdmin["users"]}
        data={users}
        emptyTitle="No Users Found"
        onSearch={(page, limit, v) => {
          if (timeOut != null) {
            clearTimeout(timeOut);
          }
          timeOut = setTimeout(() => {
            getData(page, limit, { keyword: v });
          }, 500);
        }}
        onChangeStatus={(id, status) => {
          updateUserStatus({ id, status });
        }}
        onClickPagination={(page, limit) => getData(page, limit)}
        search
        clickOnView={(id) => navigate(`/user-details/${id}`)}
        filter
        onApplyFilter={(page, limit, filter) => getData(page, limit, filter)}
        withShadow
        pagination
        totalDocs={totalDocs}
        loading={loading}
        filterStatusArray={constants?.generalStatusArray}
      />
    </AdminLayout>
  );
};

export default UserManagement;
