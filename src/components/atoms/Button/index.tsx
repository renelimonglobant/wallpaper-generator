import "./button.css";

type ButtonProps = {
  id: string;
  text: string;
  [rest: string]: any;
};

const Button = ({ id, text, ...rest }: ButtonProps) => {
  return (
    <div>
      <button className="btn" id={`btn-${id}`} {...rest}>
        {text}
      </button>
    </div>
  );
};

export default Button;
