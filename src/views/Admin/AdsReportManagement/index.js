import React, { useEffect, useState } from "react";
import "./styles.css";
import "../../../assets/css/globalStyles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, useParams } from "react-router-dom";
import AdminLayout from "../../../components/AdminLayout";
import MainTable from "../../../components/MainTable";
import {
  adReportManagementLabel,
  adReportValues,
  tableValuesAdmin,
} from "../../../utils/tableUtils";
// import useAds from "../../../Hooks/useAds";

var timeOut = null;
const AdsReportManagement = () => {
  // const { getAdsReports } = useAds();
  const [adsReportsData, setAdsReportsData] = useState([]);
  const navigate = useNavigate();
  const [totalDocs, setTotalDocs] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    handleGetAdsReport();
  }, []);

  const handleGetAdsReport = (page = 1, limit = 10, keyword = "") => {
    // setLoading(true);
    // getAdsReports({ page: page, limit: limit, keyword: keyword }).then(
    //   (res) => {
    //     if (res) {
    //       setAdsReportsData(res?.spamReports);
    //       setTotalDocs(res?.totalDocs);
    //       setLoading(false);
    //     }
    //   }
    // );
  };

  return (
    <AdminLayout>
      <MainTable
        heading="Ads Report Management"
        tableLabel={adReportManagementLabel}
        // tableValue={adReportValues}
        tableKeys={tableValuesAdmin["adsReports"]}
        data={adsReportsData}
        clickOnView={(id, item) => {
          navigate(`/ad-details/${id}`, {
            state: {
              adsReports: true,
              item: item,
            },
          });
        }}
        // filter
        withShadow
        onSearch={(page, limit, v) => {
          if (timeOut != null) {
            clearTimeout(timeOut);
          }
          timeOut = setTimeout(() => {
            handleGetAdsReport(page, limit, v);
          }, 500);
        }}
        search
        pagination
        onClickPagination={(page, limit) => handleGetAdsReport(page, limit)}
        totalDocs={totalDocs}
        loading={loading}
        emptyTitle={"No Reported Ads Found"}
        hideStatus
      />
    </AdminLayout>
  );
};
export default AdsReportManagement;
