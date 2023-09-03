import React from "react";
import ContentLoader from "react-content-loader";

const AdListingLoader = (props) => {
  return (
    <ContentLoader
      speed={2}
      width={1280}
      height={900}
      viewBox="0 0 1280 900"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
      //   style={{ marginLeft: "15%" }}
    >
      <rect x="30" y="55" rx="4" ry="4" width="300" height="10" />
      <rect x="30" y="75" rx="4" ry="4" width="300" height="10" />
      <rect x="30" y="95" rx="4" ry="4" width="300" height="10" />
      <rect x="30" y="115" rx="4" ry="4" width="300" height="10" />
      <rect x="30" y="135" rx="4" ry="4" width="300" height="10" />
      <rect x="30" y="155" rx="4" ry="4" width="300" height="10" />
      <rect x="450" y="40" rx="0" ry="0" width="160" height="100" />
      <rect x="650" y="40" rx="0" ry="0" width="160" height="100" />
      <rect x="850" y="40" rx="0" ry="0" width="160" height="100" />
      <rect x="450" y="150" rx="2" ry="2" width="160" height="100" />
      <rect x="650" y="150" rx="2" ry="2" width="160" height="100" />
      <rect x="850" y="150" rx="2" ry="2" width="160" height="100" />
      <rect x="450" y="260" rx="2" ry="2" width="160" height="100" />
      <rect x="650" y="260" rx="2" ry="2" width="160" height="100" />
      <rect x="850" y="260" rx="2" ry="2" width="160" height="100" />
    </ContentLoader>
  );
};

export default AdListingLoader;
