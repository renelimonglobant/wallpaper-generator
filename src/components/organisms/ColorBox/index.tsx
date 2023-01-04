import React, { useState, useEffect } from "react";
import copy from "../../../assets/copy.svg";
import ImageButton from "../../atoms/ImageButton";
import InputColorPicker from "../../atoms/InputColorPicker/InputColorPicker";
import paste from "../../../assets/paste.svg";

type ColorBoxProps = {
  inputText: string;
  defaultColor: string;
  id: string;
  onChangeColor: (params: any) => void;
  [rest: string]: any;
};

const ColorBox = ({
  inputText,
  id,
  onChangeColor,
  defaultColor = "#000000",
}: ColorBoxProps) => {
  const [color, setColor] = useState<string>(defaultColor);

  useEffect(() => {
    onChangeColor(color);
  }, [color]);

  const onCopy = (_e: React.ChangeEvent<HTMLInputElement>) => {
    navigator.clipboard.writeText(color);
  };

  const onPaste = (_e: React.ChangeEvent<HTMLInputElement>) => {
    navigator.clipboard.readText().then((clipText) => {
      const text = /^#[0-9A-F]{6}$/i.test(clipText) ? clipText : "#000000";
      setColor(text);
    });
  };

  const onChangeCurrentColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };

  return (
    <div className="color-box">
      <InputColorPicker
        text={inputText}
        id={`range-${id}`}
        value={color}
        onChange={onChangeCurrentColor}
      />
      <ImageButton imgsrc={copy} imgalt={"copy color"} onClick={onCopy} />
      <ImageButton imgsrc={paste} imgalt={"paste color"} onClick={onPaste} />
    </div>
  );
};

export default ColorBox;
