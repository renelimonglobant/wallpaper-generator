import React, { useState, useEffect } from 'react';
import ColorBox from '../../molecules/ColorBox';
import InputRange from '../../atoms/InputRange';
import { Color, ColorsArray } from '../../../types';

type ConicGradientFormProps = {
  initialShine: number;
  initialX: number;
  initialY: number;
  initialColors: ColorsArray;
  onChangeForm: (
    shine: number,
    x: number,
    y: number,
    colors: ColorsArray
  ) => void;
};

const ConicGradientForm = ({
  initialShine,
  initialX,
  initialY,
  initialColors,
  onChangeForm,
}: ConicGradientFormProps) => {
  const [shine, setShine] = useState<number>(initialShine);
  const [xOffset, setXOffset] = useState<number>(initialX);
  const [yOffset, setYOffset] = useState<number>(initialY);
  const [colorList, setColorList] = useState<ColorsArray>(initialColors);

  useEffect(() => {
    onChangeForm(shine, xOffset, yOffset, colorList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [colorList, xOffset, yOffset, shine]);

  const onChangeRange =
    (fn: Function) => (e: React.ChangeEvent<HTMLInputElement>) => {
      fn(parseInt(e.target.value));
    };

  const onChangeColors = (e: React.ChangeEvent<HTMLInputElement>) => {
    const limit = parseInt(e.target.value);
    const newList = [];
    for (let i = 0; i < limit; i++) {
      newList[i] = {
        step: i / (limit - 1),
        color: !!colorList[i] ? colorList[i].color : '#000000',
      };
    }
    setColorList(newList);
  };

  const onChangeColor = (color: string, step: number) => {
    setColorList((prevList: Array<Color>) =>
      prevList.reduce(
        (acc, item) =>
          item.step === step
            ? [
                ...acc,
                {
                  step,
                  color,
                },
              ]
            : [...acc, item],
        [] as Color[]
      )
    );
  };

  return (
    <div>
      <InputRange
        label={`Shine position: ${shine}`}
        id="shine"
        min={0}
        max={60}
        step={1}
        defaultValue={shine}
        // onMouseUp={onChangeRange(setShine)}
        onChange={onChangeRange(setShine)}
      />
      <InputRange
        label={`Horizontal position: ${xOffset}`}
        id="x-offset"
        min={-10}
        max={10}
        step={1}
        defaultValue={xOffset}
        onChange={onChangeRange(setXOffset)}
      />
      <InputRange
        label={`Vertical position: ${yOffset}`}
        id="y-offset"
        min={-10}
        max={10}
        step={1}
        defaultValue={yOffset}
        onChange={onChangeRange(setYOffset)}
      />
      <InputRange
        label={`Number of colors: ${colorList.length}`}
        id="range"
        min={2}
        max={8}
        step={1}
        defaultValue={initialColors.length}
        onChange={onChangeColors}
      />
      {colorList &&
        colorList.map((inputcolor: Color, i: number) => (
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
