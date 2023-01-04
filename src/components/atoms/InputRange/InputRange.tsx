import React from "react";

type InputRangeProps = {
  text: string;
  id: string;
  min?: number;
  max?: number;
  [rest: string]: any;
};

const InputRange = ({
  text,
  id,
  min = 0,
  max = 5,
  ...rest
}: InputRangeProps) => {
  return (
    <div>
      <label htmlFor={id}>{text}</label>
      <input type="range" id={id} name={id} min={min} max={max} {...rest} />
    </div>
  );
};

export default InputRange;
