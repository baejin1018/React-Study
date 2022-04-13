import React, { useState, useCallback } from "react";
import Cropper from "react-easy-crop";
import defaultImg from "./logo192.png";
const CropImg = () => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [imgFile, setImgFile] = useState(defaultImg);
  const [choseFile, setChoseFile] = useState(false);

  const saveFileImg = (e) => {
    setImgFile(URL.createObjectURL(e.target.files[0]));
    setChoseFile(true);
  };

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    console.log(croppedArea, croppedAreaPixels);
  }, []);

  return (
    <div>
      <img src={imgFile} style={{ width: 200, height: 200 }} />
      <input type="file" onChange={saveFileImg} accept="image/*" />
      {choseFile && (
        <div style={{ position: "relative", width: 400, height: 400 }}>
          <Cropper
            image={imgFile}
            crop={crop}
            zoom={zoom}
            aspect={1 / 1}
            onCropChange={setCrop}
            onCropComplete={onCropComplete}
            onZoomChange={setZoom}
            cropShape={"round"}
            cropSize={{ width: 200, height: 200 }}
            showGrid={false}
          />
        </div>
      )}
      <button>확인</button>
    </div>
  );
};

export default CropImg;
