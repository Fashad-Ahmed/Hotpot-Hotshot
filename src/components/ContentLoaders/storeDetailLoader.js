import React from "react";
import ContentLoader from "react-content-loader";

const StoreDetailLoader = (props) => {
  return (
    <ContentLoader
      speed={2}
      width={1000}
      height={500}
      viewBox="0 0 1000 500"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="104" y="42" rx="0" ry="0" width="228" height="201" />
      <rect x="376" y="44" rx="0" ry="0" width="126" height="107" />
      <rect x="167" y="255" rx="0" ry="0" width="23" height="23" />
      <rect x="205" y="255" rx="0" ry="0" width="23" height="23" />
      <rect x="241" y="255" rx="0" ry="0" width="23" height="23" />
      <rect x="107" y="295" rx="0" ry="0" width="154" height="24" />
      <rect x="107" y="336" rx="0" ry="0" width="227" height="6" />
      <rect x="108" y="354" rx="0" ry="0" width="227" height="6" />
      <rect x="107" y="382" rx="0" ry="0" width="154" height="24" />
      <rect x="109" y="420" rx="0" ry="0" width="227" height="6" />
      <rect x="108" y="436" rx="0" ry="0" width="227" height="6" />
      <rect x="387" y="176" rx="0" ry="0" width="105" height="20" />
    </ContentLoader>
  );
};

export default StoreDetailLoader;
