import './input.css';
type InputProps = {
  text: string;
  id: string;
  type?: string;
  [rest: string]: any;
};

const Input = ({ text, id, type = 'text', ...rest }: InputProps) => {
  return (
    <>
      <label className="label-input" htmlFor={id}>
        {text}
      </label>
      <input className="input-text" type={type} id={id} name={id} {...rest} />
    </>
  );
};

export default Input;
