import './inputcolorpicker.css';
interface InputColorPickerProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
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
