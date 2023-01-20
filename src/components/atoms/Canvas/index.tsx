import { forwardRef } from 'react';
import './canvas.css';

type CanvasProps = {
  width: number;
  height: number;
  id: string;
  hidden?: boolean;
};

const Canvas = forwardRef<HTMLCanvasElement, CanvasProps>(
  ({ width, height, id, hidden = false }, ref) => {
    return (
      <canvas
        ref={ref}
        id={`render-${id}`}
        width={width}
        height={height}
        className={hidden ? 'hidden' : ''}
      ></canvas>
    );
  }
);

export default Canvas;
