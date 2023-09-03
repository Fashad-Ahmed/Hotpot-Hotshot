import React from "react";
import ContentLoader from "react-content-loader";

const AboutUsLoader = (props) => {
  return (
    <ContentLoader
      speed={2}
      width={1200}
      height={900}
      viewBox="0 0 1280 900"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      style={{ marginLeft: "15%" }}
      {...props}
    >
      <rect x="10" y="10" rx="5" ry="5" width="260" height="140" />
      <rect x="280" y="10" rx="5" ry="5" width="260" height="280" />
      <rect x="550" y="10" rx="5" ry="5" width="260" height="140" />
      <rect x="10" y="160" rx="5" ry="5" width="260" height="280" />
      <rect x="280" y="300" rx="5" ry="5" width="260" height="140" />
      <rect x="550" y="160" rx="5" ry="5" width="260" height="280" />
    </ContentLoader>
  );
};

export default AboutUsLoader;
