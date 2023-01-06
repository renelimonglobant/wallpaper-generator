import React, { useState, useEffect } from "react";
import ColorBox from "../../organisms/ColorBox";
import { drawConicalGradient } from "../../../API";
import InputRange from "../../atoms/InputRange/InputRange";

type ConicGradientFormProps = {
  title: string;
  context: CanvasRenderingContext2D | null;
  numberOfColors?: number;
  width: number;
  height: number;
};
type ColorObj = {
  step: number;
  color: string;
};

const ConicGradientForm = ({
  title,
  context,
  numberOfColors = 3,
  width,
  height
}: ConicGradientFormProps) => {
  const [shine, setShine] = useState<number>(0);
  const [xOffset, setXOffset] = useState<number>(0);
  const [yOffset, setYOffset] = useState<number>(0);
  const [colorList, setColorList] = useState<ColorObj[]>([
    { step: 0, color: "#000000" },
    { step: 0.5, color: "#FFFFFF" },
    { step: 1, color: "#000000" },
  ]);

  useEffect(() => {
    console.log(colorList);
    context &&
      drawConicalGradient(
        context as CanvasRenderingContext2D,
        width,
        height,
        colorList,
        xOffset,
        yOffset,
        shine
      );
  }, [context, height, width, colorList, xOffset, yOffset, shine]);

  const onChangeShine = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShine(parseInt(e.target.value));
  };

  const onChangeXOffset = (e: React.ChangeEvent<HTMLInputElement>) => {
    setXOffset(parseInt(e.target.value));
  };

  const onChangeYOffset = (e: React.ChangeEvent<HTMLInputElement>) => {
    setYOffset(parseInt(e.target.value));
  };

  const onChangeRange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const limit = parseInt(e.target.value);
    const newList = [];
    for (let i = 0; i < limit; i++) {
      newList[i] = {
        step: i / (limit - 1),
        color: !!colorList[i] ? colorList[i].color : "#000000",
      };
    }
    setColorList(newList);
  };

  const onChangeColor = (inputcolor: string, stepColor: number) => {
    setColorList((prevList: Array<ColorObj>) => {
      return prevList.reduce(
        (acc, item) =>
          item.step === stepColor
            ? [
                ...acc,
                {
                  step: stepColor,
                  color: inputcolor,
                },
              ]
            : [...acc, item],
        [] as ColorObj[]
      );
    });
  };

  return (
    <div>
      <h2>{title}</h2>
      <InputRange
        text={`Shine position: ${shine}`}
        id="shine"
        min={0}
        max={25}
        step={1}
        defaultValue={shine}
        onChange={onChangeShine}
      />
      <InputRange
        text={`Horizontal position: ${xOffset}`}
        id="x-offset"
        min={-10}
        max={10}
        step={1}
        defaultValue={xOffset}
        onChange={onChangeXOffset}
      />
      <InputRange
        text={`Vertical position: ${yOffset}`}
        id="y-offset"
        min={-10}
        max={10}
        step={1}
        defaultValue={yOffset}
        onChange={onChangeYOffset}
      />
      <InputRange
        text={`Number of colors: ${colorList.length}`}
        id="range"
        min={2}
        max={6}
        step={1}
        defaultValue={numberOfColors}
        onChange={onChangeRange}
      />
      {colorList &&
        colorList.map((inputcolor, i) => (
          <React.Fragment key={i}>
            <ColorBox
              inputText={inputcolor.color}
              id={`range-${inputcolor.step}`}
              onChangeColor={(color) => {
                onChangeColor(color, inputcolor.step);
              }}
              defaultColor={inputcolor.color}
            />
          </React.Fragment>
        ))}
    </div>
  );
};

export default ConicGradientForm;
