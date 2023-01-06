import React, { useEffect, useRef, useState } from "react";
import "./home.css";
// import Canvas from "../../Canvas";
import Drawer from "../../templates/Drawer";
import Header from "../../templates/Header";
import Footer from "../../templates/Footer";
import Button from "../../atoms/Button";
import {
  drawGradientCircle,
  drawGradient,
  drawNumbers,
  drawSeconds,
} from "../../../API";
// import { drawConicalGradient, drawGradient, drawCircle } from "../../API";
import ConicGradientForm from "../../molecules/ConicGradientForm/ConicGradientForm";

const width = 400;
const height = 400;
function App() {
  const canvas = useRef<HTMLCanvasElement>(null);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
  // const [context, setContext] = useState<CanvasRenderingContext2D>({} as CanvasRenderingContext2D);
  // const [context, setContext] = useState<CanvasRenderingContext2D>();

  useEffect(() => {
    const c = canvas.current as HTMLCanvasElement | null;
    setContext(c?.getContext("2d") as CanvasRenderingContext2D);
    if (context) {
      // Create gradient
      // drawGradient(context as CanvasRenderingContext2D);
      // circle
      // drawGradientCircle(context as CanvasRenderingContext2D, 'blue');
      // drawNumbers(context as CanvasRenderingContext2D, (width/2) * 0.9);
      // drawSeconds(context as CanvasRenderingContext2D, (height/2) * 0.9);
    }
  }, [context]);
  return (
    <div className="App">
      <Header />
      <Drawer />
      <main className="container">
        <canvas ref={canvas} id="render" width={width} height={height}></canvas>
        <article className="grid">
          <ConicGradientForm
            title="Cono"
            context={context}
            width={width}
            height={height}
          />
        </article>
        <Button element={canvas.current} id='save' />
      </main>
      <Footer />
    </div>
  );
}

export default App;
