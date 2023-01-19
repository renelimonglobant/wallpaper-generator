import "./checkbox.css";

type CheckBoxProps = {
  id: string;
  checked: boolean;
  label: string;
  [rest: string]: any;
};

const CheckBox = ({ id, label, checked, ...rest }: CheckBoxProps) => {
  return (
    <label className="checkbox-label">
      <input
        className="checkbox"
        id={`checkbox-${id}`}
        type="checkbox"
        checked={checked}
        //   onChange={handleChange}
        {...rest}
      />
      {label}
    </label>
  );
};

export default CheckBox;
