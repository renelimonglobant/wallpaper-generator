import React, { useState, useEffect } from "react";
import Copy from "../../../assets/Copy";
import ImageButton from "../../atoms/ImageButton";
import InputColorPicker from "../../atoms/InputColorPicker/InputColorPicker";
import Paste from "../../../assets/Paste";
import './colorbox.css';

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
  ...rest
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
        {...rest}
      />
      <ImageButton svg={<Copy />} onClick={onCopy} />
      <ImageButton svg={<Paste />} onClick={onPaste} />
    </div>
  );
};

export default ColorBox;
