import './input.css';
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  type?: string;
  // [rest: string]: any;
}

const Input = ({ label, id, type = 'text', ...rest }: InputProps) => {
  return (
    <>
      <label className="label-input" htmlFor={id}>
        {label}
      </label>
      <input className="input-text" type={type} id={id} name={id} {...rest} />
    </>
  );
};

export default Input;
