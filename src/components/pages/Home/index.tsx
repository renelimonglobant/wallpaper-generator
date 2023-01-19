import { useEffect, useRef, useState, useReducer } from "react";
import "./home.css";
import Accordion from "../../templates/Accordion";
import Button from "../../atoms/Button";
import Canvas from "../../atoms/Canvas";
import ConicGradientForm from "../../organisms/ConicGradientForm/ConicGradientForm";
import {
  drawConicalGradient,
  drawGradientCircle,
  drawNumbers,
  // drawSeconds,
} from "../../../API";
// import Drawer from "../../templates/Drawer";
import Header from "../../templates/Header";
import HoursForm from "../../organisms/HoursForm";
import Footer from "../../templates/Footer";
import GradientRingForm from "../../organisms/GradientRingForm";
import { InitialState } from "../../../store/InitialState";
import { reducer } from "../../../store/Reducer";
import { Resolutions } from "../../../store/Resolutions";
import Select from "../../atoms/Select";

function App() {
  const canvas = useRef<HTMLCanvasElement>(null);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
  const gradientCanvas = useRef<HTMLCanvasElement>(null);
  const [contextGradient, setContextGradient] =
    useState<CanvasRenderingContext2D | null>(null);
  const ringCanvas = useRef<HTMLCanvasElement>(null);
  const [contextRing, setContextRing] =
    useState<CanvasRenderingContext2D | null>(null);
  const hoursCanvas = useRef<HTMLCanvasElement>(null);
  const [contextHours, setContextHours] =
    useState<CanvasRenderingContext2D | null>(null);
  // const [context, setContext] = useState<CanvasRenderingContext2D>({} as CanvasRenderingContext2D);
  // const [context, setContext] = useState<CanvasRenderingContext2D>();
  const [transformations, dispatch] = useReducer(reducer, InitialState);

  useEffect(() => {
    const c = canvas.current as HTMLCanvasElement | null;
    setContext(c?.getContext("2d") as CanvasRenderingContext2D);
    if (context) {
      setTimeout(() => {
        context.drawImage(gradientCanvas.current as CanvasImageSource, 0, 0);
        context.drawImage(ringCanvas.current as CanvasImageSource, 0, 0);
        context.drawImage(hoursCanvas.current as CanvasImageSource, 0, 0);
        // drawSeconds(context as CanvasRenderingContext2D, (height/2) * 0.9);
      }, 100);
    }
  }, [context, contextGradient, contextRing, contextHours, transformations]);

  useEffect(() => {
    const c = gradientCanvas.current as HTMLCanvasElement | null;
    setContextGradient(c?.getContext("2d") as CanvasRenderingContext2D);
    if (contextGradient) {
      drawConicalGradient(
        contextGradient as CanvasRenderingContext2D,
        transformations.width,
        transformations.height,
        transformations.conicGradient.colorList,
        transformations.conicGradient.xOffset,
        transformations.conicGradient.yOffset,
        transformations.conicGradient.shine
      );
    }
  }, [
    contextGradient,
    transformations.conicGradient,
    transformations.width,
    transformations.height,
  ]);

  useEffect(() => {
    const c = ringCanvas.current as HTMLCanvasElement | null;
    setContextRing(c?.getContext("2d") as CanvasRenderingContext2D);
    if (contextRing) {
      contextRing.clearRect(
        0,
        0,
        transformations.width,
        transformations.height
      );
      // ring
      transformations.gradientRing.enabled &&
        drawGradientCircle(
          contextRing as CanvasRenderingContext2D,
          transformations.gradientRing.colorList, // colorList,
          transformations.gradientRing.x, // x axe
          transformations.gradientRing.y, // y axe
          transformations.gradientRing.radius, // radius
          transformations.gradientRing.scaleX, // scale
          transformations.gradientRing.scaleY, // scale
          transformations.gradientRing.shine, // shine
          transformations.gradientRing.strokeWidth // stroke
        );
    }
  }, [
    contextRing,
    transformations.gradientRing,
    transformations.width,
    transformations.height,
  ]);

  useEffect(() => {
    const c = hoursCanvas.current as HTMLCanvasElement | null;
    setContextHours(c?.getContext("2d") as CanvasRenderingContext2D);
    if (contextHours) {
      contextHours.clearRect(
        0,
        0,
        transformations.width,
        transformations.height
      );
      // hours
      transformations.hours.enabled &&
        drawNumbers(
          contextHours as CanvasRenderingContext2D,
          transformations.hours.radius,
          transformations.hours.x,
          transformations.hours.y,
          transformations.hours.fontSize,
          transformations.hours.bold,
          transformations.hours.italic,
          transformations.width,
          transformations.height,
          transformations.hours.color,
          transformations.hours.timeFormat
        );
    }
  }, [
    contextHours,
    transformations.hours,
    transformations.width,
    transformations.height,
  ]);

  const onSave = () => {
    let downloadLink = document.createElement("a");
    downloadLink.setAttribute("download", "wallpaper.png");
    let canvasObj = canvas.current;
    let dataURL = canvasObj?.toDataURL("image/png");
    let url = dataURL?.replace(
      /^data:image\/png/,
      "data:application/octet-stream"
    );
    downloadLink.setAttribute("href", url as string);
    downloadLink.click();
    // this methods is not working properly on MiWatch
    /*
    let downloadLink = document.createElement("a");
    downloadLink.setAttribute("download", "wallpaper.png");
    let canvasobj = canvas.current as HTMLCanvasElement;
    canvasobj.toBlob((blob) => {
      let url = URL.createObjectURL(blob as Blob);
      downloadLink.setAttribute("href", url);
      downloadLink.click();
    });
    */
  };

  const onChangeConicGradient = (
    shine: number,
    xOffset: number,
    yOffset: number,
    colorList: Array<{}>
  ) => {
    dispatch({
      type: "conical-gradient",
      value: { shine, xOffset, yOffset, colorList },
    });
  };

  const onChangeHours = (
    enabled: boolean,
    radius: number,
    x: number,
    y: number,
    fontSize: number,
    bold: boolean,
    italic: boolean,
    color: string,
    timeFormat: Array<string>
  ) => {
    dispatch({
      type: "hours",
      value: {
        enabled,
        color,
        radius,
        x,
        y,
        fontSize,
        bold,
        italic,
        timeFormat,
      },
    });
  };

  const onChangeGradientRing = (
    enabled: boolean,
    shine: number,
    x: number,
    y: number,
    radius: number,
    strokeWidth: number,
    colorList: Array<{}>
  ) => {
    dispatch({
      type: "gradient-ring",
      value: {
        enabled,
        colorList,
        shine,
        x,
        y,
        radius,
        strokeWidth,
      },
    });
  };

  const onChangeRatio = (value: string) => {
    const dimensions = Resolutions.find((o) => o.key === value);
    dispatch({
      type: "resize-canvas",
      value: {
        height: dimensions?.height,
        width: dimensions?.width,
      },
    });
  };

  return (
    <div className="App">
      <Header />
      <main className="container">
        <div className="grid">
          <section className="scroll">
            <Canvas
              ref={canvas}
              id="screen"
              width={transformations.width}
              height={transformations.height}
            />
            <Canvas
              ref={gradientCanvas}
              id="gradient"
              width={transformations.width}
              height={transformations.height}
              hidden
            />
            <Canvas
              ref={ringCanvas}
              id="ring"
              width={transformations.width}
              height={transformations.height}
              hidden
            />
            <Canvas
              ref={hoursCanvas}
              id="hours"
              width={transformations.width}
              height={transformations.height}
              hidden
            />
            {/* <Drawer /> */}
            <Button id="save" onClick={onSave} text="Save" />
          </section>
          <section className="flex-grid">
            <div className="scroll settings">
              <Select
                id="ratio"
                defaultValue="0"
                options={Resolutions.map(({ key, label }) => ({
                  value: key,
                  label,
                }))}
                setValue={onChangeRatio}
              />
              <Accordion
                render={[
                  {
                    title: "Background",
                    item: (
                      <ConicGradientForm
                        initialShine={transformations.conicGradient.shine}
                        initialX={transformations.conicGradient.xOffset}
                        initialY={transformations.conicGradient.yOffset}
                        initialColors={transformations.conicGradient.colorList}
                        onChangeForm={onChangeConicGradient}
                      />
                    ),
                  },
                  {
                    title: "Ring",
                    item: (
                      <GradientRingForm
                        enabled={transformations.gradientRing.enabled}
                        initialShine={transformations.gradientRing.shine}
                        initialRadius={transformations.gradientRing.radius}
                        initialStroke={transformations.gradientRing.strokeWidth}
                        initialX={transformations.gradientRing.x}
                        initialY={transformations.gradientRing.y}
                        initialColors={transformations.gradientRing.colorList}
                        onChangeForm={onChangeGradientRing}
                      />
                    ),
                  },
                  {
                    title: "Hours",
                    item: (
                      <HoursForm
                        initialRadius={transformations.hours.radius}
                        initialX={transformations.hours.x}
                        initialY={transformations.hours.y}
                        initialFontSize={transformations.hours.fontSize}
                        initialColor={transformations.hours.color}
                        initialTimeFormat={transformations.hours.timeFormat}
                        onChangeForm={onChangeHours}
                        bold={transformations.hours.bold}
                        italic={transformations.hours.italic}
                        enabled={transformations.hours.enabled}
                      />
                    ),
                  },
                ]}
              />
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
