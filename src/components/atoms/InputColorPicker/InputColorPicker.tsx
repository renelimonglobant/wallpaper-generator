import React from "react";

type InputColorPickerProps = {
  text: string;
  id: string;
  // value?: string;
  [rest: string]: any;
};

const InputColorPicker = ({ text, id, ...rest }: InputColorPickerProps) => {
  return (
    <>
      <label htmlFor={id}>{text}</label>
      <input type="color" id={id} name={id} {...rest} />
    </>
  );
};

export default InputColorPicker;
