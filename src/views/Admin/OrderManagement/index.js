import React, { useEffect, useState } from "react";
import "./styles.css";
import "../../../assets/css/globalStyles.css";

import { useNavigate } from "react-router-dom";
import AdminLayout from "../../../components/AdminLayout";
import MainTable from "../../../components/MainTable";
import {
  orderManagementLabel,
  tableValuesAdmin,
} from "../../../utils/tableUtils";
// import useShop from "../../../Hooks/useShop";
// import { useSelector } from "react-redux";
// import { selectSettings } from "../../../Redux/slices/generalSlice";
const OrderManagement = () => {
  var timeOut = null;
  const navigate = useNavigate();
  // const { getOrders } = useShop();
  const [ordersList, setOrdersList] = useState([]);
  const [totalDocs, setTotalDocs] = useState(null);
  const [loading, setLoading] = useState(true);
  // const { constants } = useSelector(selectSettings);
  const constants = 5;
  useEffect(() => {
    handleGetOrders();
  }, []);

  function handleGetOrders(page = 1, limit = 10, keyword = {}) {
    // setLoading(true);
    // getOrders({ page: page, limit: limit, ...keyword }).then((res) => {
    //   setOrdersList(res?.orders);
    //   setTotalDocs(res?.totalDocs);
    //   setLoading(false);
    // });
  }

  return (
    <AdminLayout>
      {constants && (
        <MainTable
          heading="Order Management"
          // filter
          tableLabel={orderManagementLabel}
          tableKeys={tableValuesAdmin["orderManagement"]}
          data={ordersList}
          emptyTitle="No Orders Found"
          clickOnView={(id) => {
            navigate(`/order-details/${id}`);
          }}
          onSearch={(page, limit, v) => {
            if (timeOut != null) {
              clearTimeout(timeOut);
            }
            timeOut = setTimeout(() => {
              handleGetOrders(page, limit, { keyword: v });
            }, 500);
          }}
          withShadow
          pagination
          search
          totalDocs={totalDocs}
          onClickPagination={(page, limit) => handleGetOrders(page, limit)}
          loading={loading}
          filter
          filterStatusArray={constants?.orderStatuesArray}
          onApplyFilter={(page, limit, filter) =>
            handleGetOrders(page, limit, filter)
          }
        />
      )}
    </AdminLayout>
  );
};
export default OrderManagement;
