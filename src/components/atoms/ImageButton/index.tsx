// import React from "react";
import "./imageButton.css";

type ImageButtonProps = {
  imgsrc: string;
  imgalt: string;
  height?: number;
  width?: number;
  [rest: string]: any;
};

const ImageButton = ({
  imgsrc,
  imgalt,
  height = 20,
  width = 20,
  ...rest
}: ImageButtonProps) => {
  return (
    <button className="img-btn" {...rest}>
      <img src={imgsrc} height={height} width={width} alt={imgalt} />
    </button>
  );
};

export default ImageButton;
