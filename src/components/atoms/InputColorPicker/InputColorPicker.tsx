import './inputcolorpicker.css';
interface InputColorPickerProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  [rest: string]: any;
}

const InputColorPicker = ({ label, id, ...rest }: InputColorPickerProps) => {
  return (
    <>
      <label className="label-picker" htmlFor={id}>
        {label}
      </label>
      <input
        className="input-picker"
        type="color"
        id={id}
        name={id}
        {...rest}
      />
    </>
  );
};

export default InputColorPicker;
