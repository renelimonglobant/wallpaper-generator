import './inputcolorpicker.css'
type InputColorPickerProps = {
  text: string;
  id: string;
  [rest: string]: any;
};

const InputColorPicker = ({ text, id, ...rest }: InputColorPickerProps) => {
  return (
    <>
      <label className='label-picker' htmlFor={id}>{text}</label>
      <input className='input-picker' type="color" id={id} name={id} {...rest} />
    </>
  );
};

export default InputColorPicker;
