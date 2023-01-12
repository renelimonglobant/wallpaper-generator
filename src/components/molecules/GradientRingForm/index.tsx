import React, { useState, useEffect } from "react";
import ColorBox from "../../organisms/ColorBox";
import InputRange from "../../atoms/InputRange/InputRange";

type ConicGradientFormProps = {
  initialShine: number;
  initialStroke: number;
  initialX: number;
  initialY: number;
  initialRadius: number;
  initialColors: Array<ColorObj>;
  onChangeForm: (
    shine: number,
    x: number,
    y: number,
    r: number,
    strokeWidth: number,
    colors: Array<ColorObj>
  ) => void;
};
type ColorObj = {
  step: number;
  color: string;
};

const ConicGradientForm = ({
  initialShine,
  initialX,
  initialY,
  initialRadius,
  initialStroke,
  initialColors,
  onChangeForm,
}: ConicGradientFormProps) => {
  const [shine, setShine] = useState<number>(initialShine);
  const [xOffset, setXOffset] = useState<number>(initialX);
  const [yOffset, setYOffset] = useState<number>(initialY);
  const [radius, setRadius] = useState<number>(initialRadius);
  const [stroke, setStroke] = useState<number>(initialStroke);
  const [colorList, setColorList] = useState<ColorObj[]>(initialColors);

  useEffect(() => {
    onChangeForm(shine, xOffset, yOffset, radius, stroke, colorList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [colorList, xOffset, yOffset, shine, radius, stroke]);

  const onChangeShine = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShine(parseInt(e.target.value));
  };

  const onChangeXOffset = (e: React.ChangeEvent<HTMLInputElement>) => {
    setXOffset(parseInt(e.target.value));
  };

  const onChangeYOffset = (e: React.ChangeEvent<HTMLInputElement>) => {
    setYOffset(parseInt(e.target.value));
  };

  const onChangeRadius = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRadius(parseInt(e.target.value));
  };

  const onChangeStroke = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStroke(parseInt(e.target.value));
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
      <InputRange
        text={`Shine position: ${shine}`}
        id="shine"
        min={0}
        max={60}
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
        text={`Radius: ${radius}`}
        id="radius"
        min={-50}
        max={0}
        step={1}
        defaultValue={radius}
        onChange={onChangeRadius}
      />
      <InputRange
        text={`Stroke: ${stroke}`}
        id="stroke"
        min={1}
        max={20}
        step={1}
        defaultValue={stroke}
        onChange={onChangeStroke}
      />
      <InputRange
        text={`Number of colors: ${colorList.length}`}
        id="range"
        min={2}
        max={8}
        step={1}
        defaultValue={initialColors.length}
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
