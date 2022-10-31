import { useEffect } from "react";
import { useState } from "react";

const View = () => {
  const [img, setImg] = useState(null);

  const saveFile = (e) => {
    console.log(e);
    setImg(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div>
      <h1>미리보기</h1>
      <div>
        <img src={img} alt="img" />
      </div>
      <input type="file" onChange={saveFile} />
    </div>
  );
};

export default View;
