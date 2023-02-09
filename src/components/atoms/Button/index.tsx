import './button.css';
import ImageButton from '../ImageButton';

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
    <div {...rest}>
      <button className="btn" id={`btn-${id}`} {...rest}>
        {text}
      </button>
    </div>
  );
};

export default Button;
