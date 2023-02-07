import { forwardRef } from 'react';
import './canvas.css';

interface CanvasProps extends React.CanvasHTMLAttributes<HTMLCanvasElement> {
  width: number;
  height: number;
  id: string;
  hidden?: boolean;
}

const Canvas = forwardRef<HTMLCanvasElement, CanvasProps>(function Canvas(
  { width, height, id, hidden = false, ...rest }: CanvasProps,
  ref
) {
  return (
    <canvas
      ref={ref}
      id={`render-${id}`}
      width={width}
      height={height}
      className={hidden ? 'hidden' : ''}
      {...rest}
    ></canvas>
  );
});

export default Canvas;
