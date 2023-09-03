import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { url } from "../../API/config";
import { onImageError } from "../../assets";
import "./styles.css";

const ImageSlider = ({ images }) => {
  return (
    <Carousel className="my-slider slider product-slider">
      {images?.map((image) => (
        <div key={image?._id} className="item item-sliderNav">
          <img
            src={url + image?.path}
            className=""
            alt="Slider Image"
            onError={onImageError}
          />
        </div>
      ))}
    </Carousel>
  );
};
export default ImageSlider;
