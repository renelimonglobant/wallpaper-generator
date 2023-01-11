import React, { useEffect, useRef, useState, useReducer } from "react";
import "./home.css";
// import Canvas from "../../Canvas";
import Button from "../../atoms/Button";
import ConicGradientForm from "../../molecules/ConicGradientForm/ConicGradientForm";
import Drawer from "../../templates/Drawer";
import Header from "../../templates/Header";
import Footer from "../../templates/Footer";
import { InitialState } from "../../../store/InitialState";
import { reducer } from "../../../store/Reducer";
import { Resolutions } from "../../../store/Resolutions";
import {
  drawGradientCircle,
  drawConicalGradient,
  drawGradient,
  drawNumbers,
  drawSeconds,
} from "../../../API";
import Select from "../../atoms/Select";
// import { drawConicalGradient, drawGradient, drawCircle } from "../../API";

function App() {
  const canvas = useRef<HTMLCanvasElement>(null);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
  // const [context, setContext] = useState<CanvasRenderingContext2D>({} as CanvasRenderingContext2D);
  // const [context, setContext] = useState<CanvasRenderingContext2D>();
  const [transformations, dispatch] = useReducer(reducer, InitialState);

  useEffect(() => {
    const c = canvas.current as HTMLCanvasElement | null;
    setContext(c?.getContext("2d") as CanvasRenderingContext2D);
    if (context) {
      drawConicalGradient(
        context as CanvasRenderingContext2D,
        transformations.width,
        transformations.height,
        transformations.conicGradient.colorList,
        transformations.conicGradient.xOffset,
        transformations.conicGradient.yOffset,
        transformations.conicGradient.shine
      );
      // Create gradient
      // drawGradient(context as CanvasRenderingContext2D);
      // circle
      // console.log(transformations.conicGradient.colorList);
      // drawGradientCircle(
      //   context as CanvasRenderingContext2D,
      //   "red",
      //   transformations.width * 2,
      //   transformations.height * 2,
      //   transformations.conicGradient.colorList
      // );
      // drawNumbers(context as CanvasRenderingContext2D, (width/2) * 0.9);
      // drawSeconds(context as CanvasRenderingContext2D, (height/2) * 0.9);
    }
  }, [context, transformations]);

  const onSave = () => {
    // both methods working properly
    /*
        let downloadLink = document.createElement('a');
        downloadLink.setAttribute('download', 'wallpaper.png');
        let canvas = element;
        let dataURL = canvas?.toDataURL('image/png');
        let url = dataURL?.replace(/^data:image\/png/,'data:application/octet-stream');
        downloadLink.setAttribute('href', url as string);
        downloadLink.click();
        */
    let downloadLink = document.createElement("a");
    downloadLink.setAttribute("download", "wallpaper.png");
    let canvasobj = canvas.current as HTMLCanvasElement;
    canvasobj.toBlob((blob) => {
      let url = URL.createObjectURL(blob as Blob);
      downloadLink.setAttribute("href", url);
      downloadLink.click();
    });
  };

  return (
    <div className="App">
      <Header />
      <Drawer />
      <main className="container">
        <section className="grid">
          <Select
            id="ratio"
            defaultValue="0"
            options={Resolutions.map(({ key, label }) => ({
              value: key,
              label,
            }))}
            setValue={(value) => {
              const dimensions = Resolutions.find((o) => o.key === value);
              dispatch({
                type: "resize-canvas",
                value: { height: dimensions?.height, width: dimensions?.width },
              });
            }}
          />
        </section>
        <section className="scroll">
          <canvas
            ref={canvas}
            id="render"
            width={transformations.width}
            height={transformations.height}
          ></canvas>
        </section>
        <section className="grid">
          <ConicGradientForm
            title="Cono"
            numberOfColors={transformations.conicGradient.colorList.length}
            initialShine={transformations.conicGradient.shine}
            initialX={transformations.conicGradient.xOffset}
            initialY={transformations.conicGradient.yOffset}
            initialColors={transformations.conicGradient.colorList}
            onChangeForm={(shine, xOffset, yOffset, colorList) => {
              dispatch({
                type: "conical-gradient",
                value: { shine, xOffset, yOffset, colorList },
              });
            }}
          />
        </section>
        <Button id="save" onClick={onSave} text="Save" />
      </main>
      <Footer />
    </div>
  );
}

export default App;
