import React, {useEffect, useRef, useState} from "react";
import './canvas.css';
import Button from '../atoms/Button'
import { drawGradientCircle, drawGradient, drawNumbers, drawSeconds } from "../../API";
// import { drawConicalGradient, drawGradient, drawCircle } from "../../API";
import ConicGradientForm from "../molecules/ConicGradientForm/ConicGradientForm";

type CanvasProps = {
    width: number
    height: number
    ref: any
}

const Canvas = ({width, height, ref}: CanvasProps) => {
    /*
    const canvas = useRef<HTMLCanvasElement>(null);
    const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
    // const [context, setContext] = useState<CanvasRenderingContext2D>({} as CanvasRenderingContext2D);
    // const [context, setContext] = useState<CanvasRenderingContext2D>();

    useEffect(() => {
        const c = canvas.current as HTMLCanvasElement | null;
        setContext(c?.getContext('2d') as CanvasRenderingContext2D);
        if (context) {
            // Create gradient
            // drawGradient(context as CanvasRenderingContext2D);
            // circle
            // drawGradientCircle(context as CanvasRenderingContext2D, 'blue');
            // drawNumbers(context as CanvasRenderingContext2D, (width/2) * 0.9);
            // drawSeconds(context as CanvasRenderingContext2D, (height/2) * 0.9);
        }
    }, [context]);
    */
    return (
    <div>
        <canvas ref={ref} id='render' width={width} height={height}></canvas>
        {/* <ConicGradientForm title="Cono" context={context} width={width} height={height} /> */}
        {/* <Button element={canvas.current} /> */}
    </div>
    );
}
 
export default Canvas;