import React from "react";
import ContentLoader from "react-content-loader";

const ContentsLoader = (props) => {
  return (
    <ContentLoader
      speed={2}
      width={1200}
      height={900}
      viewBox="0 0 1280 900"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      // style={{ marginLeft: "15%" }}
      {...props}
    >
      <rect x="3" y="3" rx="10" ry="10" width="1200" height="480" />
      <rect x="6" y="490" rx="0" ry="0" width="1002" height="20" />
      <rect x="4" y="515" rx="0" ry="0" width="1039" height="20" />
      <rect x="4" y="542" rx="0" ry="0" width="1074" height="20" />
      <rect x="6" y="590" rx="0" ry="0" width="1002" height="20" />
      <rect x="4" y="615" rx="0" ry="0" width="1039" height="20" />
      <rect x="4" y="642" rx="0" ry="0" width="1074" height="20" />
      <rect x="6" y="690" rx="0" ry="0" width="1002" height="20" />
      <rect x="4" y="715" rx="0" ry="0" width="1039" height="20" />
      <rect x="4" y="742" rx="0" ry="0" width="1074" height="20" />
    </ContentLoader>
  );
};

export default ContentsLoader;
