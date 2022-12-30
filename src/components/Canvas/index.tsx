import React, {useEffect, useRef} from "react";
import './canvas.css';
import Button from '../Button'
import { drawConicalGradient, drawGradient, drawCircle } from "../../API";

type CanvasProps = {
    width: number
    height: number
}

const Canvas = ({width, height}: CanvasProps) => {
    const canvas = useRef<HTMLCanvasElement>(null);
    useEffect(() => {
        const c = canvas.current as HTMLCanvasElement | null;
        const ctx = c?.getContext('2d');
        // Create gradient
        drawGradient(ctx as CanvasRenderingContext2D);
        // Create conical gradient
        drawConicalGradient(ctx as CanvasRenderingContext2D);
        // circle
        drawCircle(ctx as CanvasRenderingContext2D, 'blue');
    });
    return (
    <div>
        <canvas ref={canvas} id='render' width={width} height={height}></canvas>
        <Button element={canvas.current} />
    </div>
    );
}
 
export default Canvas;