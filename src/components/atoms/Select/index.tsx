import { useState } from 'react';
import './select.css';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  id: string;
  defaultValue: string;
  label?: string;
  options: Array<{ value: string; label: string }>;
  setValue: (value: string) => void;
}

const Select: React.FunctionComponent<SelectProps> = ({
  id,
  defaultValue,
  options,
  label,
  setValue,
  ...rest
}: SelectProps) => {
  const [selectedOption, setSelectedOption] = useState(
    defaultValue?.trim()?.length > 0 ? defaultValue : options[0].value
  );
  const onSelectChange = (value: string): void => {
    setSelectedOption(value);
    setValue(value);
  };
  return (
    <>
      <label className="select-label" htmlFor={`select-${id}`}>
        {label}
      </label>
      <select
        className="select"
        id={`select-${id}`}
        value={selectedOption}
        onChange={(e) => {
          onSelectChange(e.target.value);
        }}
        {...rest}
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;
