import React from 'react';
import './inputRange.css';
interface InputRangeProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  min?: number;
  max?: number;
}

const InputRange: React.FunctionComponent<InputRangeProps> = ({
  label,
  id,
  min = 0,
  max = 5,
  ...rest
}) => {
  return (
    <div className="range-box">
      <label className="label-range" htmlFor={id}>
        {label}
      </label>
      <input
        className="input-range"
        type="range"
        id={id}
        name={id}
        min={min}
        max={max}
        {...rest}
      />
    </div>
  );
};

export default InputRange;
