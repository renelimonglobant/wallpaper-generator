import './checkbox.css';

interface CheckBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  checked: boolean;
  label: string;
}

const CheckBox = ({ id, label, checked, ...rest }: CheckBoxProps) => {
  return (
    <label className="checkbox-label">
      <input
        className="checkbox"
        id={`checkbox-${id}`}
        type="checkbox"
        checked={checked}
        {...rest}
      />
      {label}
    </label>
  );
};

export default CheckBox;
