import React, { useCallback, useImperativeHandle, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import MainButton from "../Buttons/MainButton";
// import InputField from "../TextInputs/InputField";
import Slider from "react-rangeslider";
// import { getOrientation } from "get-orientation/browser";
import { getCroppedImg, getRotatedImage } from "../../utils/canvasUtils";

import Cropper from "react-easy-crop";
import "./styles.css";
// import { images } from "../../as/index";
const ImageCropPopup = (props) => {
  const [visible, setVisible] = useState(false);

  const [imageSrc, setImageSrc] = React.useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const dataURLtoFile = async (url, filename) => {
    var pos = url.indexOf(";base64,");
    var type = url.substring(5, pos);
    let splitType = type.split("/");
    await fetch(url)
      .then((res) => res.blob())
      .then((blob) => {
        props?.onCompleteCrop(
          new File([blob], filename + "." + splitType[1], { type: type })
        );
      })
      .then(() => setLoading(false), setVisible(false), setImageSrc(null));
  };

  const showCroppedImage = useCallback(async () => {
    setLoading(true);
    try {
      const croppedImage = await getCroppedImg(
        imageSrc,
        croppedAreaPixels,
        rotation
      );
      dataURLtoFile(croppedImage, "image");
      // setCroppedImage(dataURLtoFile(croppedImage, "image"));
    } catch (e) {
      console.error(e);
    }
  }, [imageSrc, croppedAreaPixels, rotation]);

  useImperativeHandle(props?.reference, () => ({
    hide: hide,
    show: show,
  }));

  const hide = () => {
    setVisible(false);
    setImageSrc(null);
    if (props?.onBtnPress) {
      props?.onBtnPress();
    }
  };
  const show = () => {
    setVisible(true);
  };

  function readFile(file) {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.addEventListener("load", () => resolve(reader.result), false);
      reader.readAsDataURL(file);
    });
  }
  const onFileChange = async (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      let imageDataUrl = await readFile(file);

      // try {
      //   // apply rotation if needed
      //   const orientation = await getOrientation(file);
      //   const rotation = ORIENTATION_TO_ANGLE[orientation];
      //   console.log(ORIENTATION_TO_ANGLE[orientation], "ORIENTATION");
      //   if (rotation) {
      //     imageDataUrl = await getRotatedImage(imageDataUrl, rotation);
      //   }
      // } catch (e) {
      //   console.warn("failed to detect the orientation");
      // }

      setImageSrc(imageDataUrl);
    }
  };

  return (
    <Modal show={visible} onHide={hide} centered>
      <div
        className="customModal"
        id="profileUpdated"
        tabIndex="-1"
        aria-labelledby="profileUpdatedLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div>
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close modal_close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={() => {
                    setVisible(false);
                    setImageSrc(null);
                  }}
                ></button>

                <h4 className="mt-4">{"Crop Tool"}</h4>
              </div>
              <div className="text-center mt-2 fieldview">
                {imageSrc ? (
                  <>
                    <div className="add_details_inner">
                      <div className="cropper">
                        <Cropper
                          image={imageSrc}
                          crop={crop}
                          rotation={rotation}
                          zoom={zoom}
                          aspect={4 / 3}
                          onCropChange={setCrop}
                          onRotationChange={setRotation}
                          onCropComplete={onCropComplete}
                          onZoomChange={setZoom}
                        />
                      </div>
                    </div>

                    <div className={"slider-bar"}>
                      <div className={"w-100 px-2"}>
                        <label>Zoom</label>
                        <Slider
                          value={zoom}
                          min={1}
                          max={3}
                          step={0.1}
                          aria-labelledby="Zoom"
                          onChange={(zoom) => setZoom(zoom)}
                        />
                      </div>
                      <div className={"w-100 px-2"}>
                        <label>Rotation</label>
                        <Slider
                          value={rotation}
                          min={0}
                          max={360}
                          onChange={(rotation) => setRotation(rotation)}
                        />
                      </div>
                    </div>
                    <div className="modal-footer">
                      <MainButton
                        text={"CROP"}
                        onClick={showCroppedImage}
                        loading={loading}
                      />
                    </div>
                  </>
                ) : (
                  <div className="form-group">
                    <label htmlFor="upload">
                      <label className="notBtn uploadFile">
                        <input
                          id="uploadFile"
                          type="file"
                          accept="image/*"
                          onChange={onFileChange}
                          className="d-none"
                        />
                        <div className="btn-theme-solid">Add Photo</div>
                      </label>

                      <div className="gallery">
                        <div className="uploadBtn">
                          <div className="image-gallery"></div>
                        </div>
                      </div>
                    </label>
                  </div>
                  // <input type="file" onChange={onFileChange} accept="image/*" />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ImageCropPopup;
