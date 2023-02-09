import './button.css';
//hello f d
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  id: string;
  text: string;
}

const Button: React.FunctionComponent<ButtonProps> = ({
  id,
  text,
  ...rest
}: ButtonProps) => {
  return (
    <div>
      <button className="btn" id={`btn-${id}`} {...rest}>
        {text}
      </button>
    </div>
  );
};

export default Button;
