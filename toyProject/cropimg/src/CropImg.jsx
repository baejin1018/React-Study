import React, { useState, useCallback, useRef } from "react";
import Cropper from "react-easy-crop";
import "./CropImg.css";
import defaultImg from "./logo192.png";
const CropImg = () => {
  const canvas = useRef();
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [imgFile, setImgFile] = useState(defaultImg);
  const [choseFile, setChoseFile] = useState(false);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState({});
  const [dontShowDefault, setDontShowDefault] = useState(false);
  const [dontShowCanvas, setDontShowCanvas] = useState(true);
  const saveFileImg = (e) => {
    setDontShowDefault(true);
    setImgFile(URL.createObjectURL(e.target.files[0]));
    setChoseFile(true);
    setDontShowCanvas(false);
  };

  const onClickConfirm = useCallback(() => {
    setChoseFile(false);
  }, []);

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    const ctx = canvas.current.getContext("2d");
    const image = document.getElementById("source");

    canvas.current.setAttribute("width", croppedAreaPixels.width);
    canvas.current.setAttribute("height", croppedAreaPixels.height);
    ctx.drawImage(
      image,
      croppedAreaPixels.x,
      croppedAreaPixels.y,
      croppedAreaPixels.width,
      croppedAreaPixels.height,
      0,
      0,
      croppedAreaPixels.width,
      croppedAreaPixels.height
    );
  }, []);

  return (
    <div>
      <img
        id="source"
        src={imgFile}
        className={dontShowDefault ? "dontshow" : ""}
        style={{ width: 200, height: 200 }}
      />
      <canvas
        className={dontShowCanvas ? "dontshow" : ""}
        id="source"
        style={{ width: 200, height: 200 }}
        ref={canvas}
        width={croppedAreaPixels.width}
        height={croppedAreaPixels.height}
      ></canvas>
      <input type="file" onChange={saveFileImg} accept="image/*" />
      {choseFile && (
        <div style={{ position: "relative", width: 400, height: 400 }}>
          <Cropper
            image={imgFile}
            crop={crop}
            aspect={1 / 1}
            onCropChange={setCrop}
            onCropComplete={onCropComplete}
            cropShape={"round"}
            cropSize={{ width: 200, height: 200 }}
            showGrid={false}
          />
        </div>
      )}
      <button onClick={onClickConfirm}>확인</button>
    </div>
  );
};

export default CropImg;
