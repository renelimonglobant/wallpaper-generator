import './imageButton.css';

interface ImageButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  imgsrc?: string;
  imgalt?: string;
  svg?: JSX.Element;
  height?: number;
  width?: number;
}

const ImageButton: React.FunctionComponent<ImageButtonProps> = ({
  imgsrc,
  imgalt,
  height = 20,
  width = 20,
  svg,
  ...rest
}: ImageButtonProps) => {
  return (
    <button className="img-btn" {...rest}>
      {imgsrc !== '' ? (
        <img src={imgsrc} height={height} width={width} alt={imgalt} />
      ) : (
        svg
      )}
    </button>
  );
};

export default ImageButton;
