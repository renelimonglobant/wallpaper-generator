import React, { useState, useEffect } from 'react';
import CheckBox from '../../atoms/CheckBox';
import ColorBox from '../../molecules/ColorBox';
import InputRange from '../../atoms/InputRange';
import { Color, ColorsArray } from '../../../types';

type ConicGradientFormProps = {
  initialShine: number;
  initialStroke: number;
  initialX: number;
  initialY: number;
  initialRadius: number;
  initialColors: ColorsArray;
  enabled: boolean;
  onChangeForm: (
    enabled: boolean,
    shine: number,
    x: number,
    y: number,
    r: number,
    strokeWidth: number,
    colors: ColorsArray
  ) => void;
};

const ConicGradientForm = ({
  initialShine,
  initialX,
  initialY,
  initialRadius,
  initialStroke,
  initialColors,
  enabled,
  onChangeForm,
}: ConicGradientFormProps) => {
  const [shine, setShine] = useState<number>(initialShine);
  const [xOffset, setXOffset] = useState<number>(initialX);
  const [yOffset, setYOffset] = useState<number>(initialY);
  const [radius, setRadius] = useState<number>(initialRadius);
  const [stroke, setStroke] = useState<number>(initialStroke);
  const [colorList, setColorList] = useState<ColorsArray>(initialColors);
  const [isEnabled, setIsEnabled] = useState<boolean>(enabled);

  useEffect(() => {
    onChangeForm(isEnabled, shine, xOffset, yOffset, radius, stroke, colorList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEnabled, colorList, xOffset, yOffset, shine, radius, stroke]);

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
      <div className="check-container">
        <CheckBox
          id="show-hours"
          label="Show ring"
          checked={isEnabled}
          onChange={() => setIsEnabled(!isEnabled)}
        />
      </div>
      <InputRange
        label={`Shine position: ${shine}`}
        id="shine"
        min={0}
        max={60}
        step={1}
        defaultValue={shine}
        onChange={onChangeShine}
        disabled={!isEnabled}
      />
      <InputRange
        label={`Horizontal position: ${xOffset}`}
        id="x-offset"
        min={-10}
        max={10}
        step={1}
        defaultValue={xOffset}
        onChange={onChangeXOffset}
        disabled={!isEnabled}
      />
      <InputRange
        label={`Vertical position: ${yOffset}`}
        id="y-offset"
        min={-10}
        max={10}
        step={1}
        defaultValue={yOffset}
        onChange={onChangeYOffset}
        disabled={!isEnabled}
      />
      <InputRange
        label={`Radius: ${radius}`}
        id="radius"
        min={-50}
        max={0}
        step={1}
        defaultValue={radius}
        onChange={onChangeRadius}
        disabled={!isEnabled}
      />
      <InputRange
        label={`Stroke: ${stroke}`}
        id="stroke"
        min={1}
        max={20}
        step={1}
        defaultValue={stroke}
        onChange={onChangeStroke}
        disabled={!isEnabled}
      />
      <InputRange
        label={`Number of colors: ${colorList.length}`}
        id="range"
        min={2}
        max={8}
        step={1}
        defaultValue={initialColors.length}
        onChange={onChangeRange}
        disabled={!isEnabled}
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
              disabled={!isEnabled}
            />
          </React.Fragment>
        ))}
    </div>
  );
};

export default ConicGradientForm;
