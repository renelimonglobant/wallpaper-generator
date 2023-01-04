import React, {useEffect, useRef, useState} from "react";
import './canvas.css';
import Button from '../atoms/Button'
import { drawConicalGradient, drawGradient, drawCircle } from "../../API";
import ConicGradientForm from "../molecules/ConicGradientForm";

type CanvasProps = {
    width: number
    height: number
}

const Canvas = ({width, height}: CanvasProps) => {
    const canvas = useRef<HTMLCanvasElement>(null);
    const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
    // const [context, setContext] = useState<CanvasRenderingContext2D>({} as CanvasRenderingContext2D);
    // const [context, setContext] = useState<CanvasRenderingContext2D>();

    useEffect(() => {
        const c = canvas.current as HTMLCanvasElement | null;
        setContext(c?.getContext('2d') as CanvasRenderingContext2D);
        if (context) {
            // Create gradient
            drawGradient(context as CanvasRenderingContext2D);
            // circle
            // drawCircle(context as CanvasRenderingContext2D, 'blue');
        }
    });
    return (
    <div>
        <canvas ref={canvas} id='render' width={width} height={height}></canvas>
        <ConicGradientForm title="Cono" context={context} />
        <Button element={canvas.current} />
    </div>
    );
}
 
export default Canvas;