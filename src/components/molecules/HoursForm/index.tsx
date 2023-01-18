import React, { useState, useEffect } from "react";
import ColorBox from "../../organisms/ColorBox";
import InputRange from "../../atoms/InputRange/InputRange";
import Select from "../../atoms/Select";
import EmojiPickerBox from "../../organisms/EmojiPickerBox";

type HoursFormProps = {
  initialRadius: number;
  initialX: number;
  initialY: number;
  initialFontSize: number;
  initialColor: string;
  initialTimeFormat: Array<string>;
  onChangeForm: (
    radius: number,
    scalarX: number,
    scalarY: number,
    fontSize: number,
    color: string,
    timeFormat: Array<string>
  ) => void;
};

const HoursForm = ({
  initialRadius,
  initialX,
  initialY,
  initialFontSize,
  initialColor,
  initialTimeFormat,
  onChangeForm,
}: HoursFormProps) => {
  const [radius, setRadius] = useState<number>(initialRadius);
  const [scalarX, setScalarX] = useState<number>(initialX);
  const [scalarY, setScalarY] = useState<number>(initialY);
  const [fontSize, setFontSize] = useState<number>(initialFontSize);
  const [hasChanged, setHasChanged] = useState<boolean>(false);
  const [color, setColor] = useState<string>(initialColor);
  const [timeFormat, setTimeFormat] = useState<string[]>(initialTimeFormat);
  const [customFormat, setCustomFormat] = useState<boolean>(false);
  const timeFormats = {
    numeric: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
    romanic: [
      "I",
      "II",
      "III",
      "IV",
      "V",
      "VI",
      "VII",
      "VIII",
      "IX",
      "X",
      "XI",
      "XII",
    ],
    custom: ["", "", "", "", "", "", "", "", "", "", "", ""],
  };

  useEffect(() => {
    hasChanged &&
      onChangeForm(radius, scalarX, scalarY, fontSize, color, timeFormat);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [color, radius, scalarX, scalarY, fontSize, timeFormat]);

  const onChangeRange =
    (fn: Function) => (e: React.ChangeEvent<HTMLInputElement>) => {
      fn(parseInt(e.target.value));
      setHasChanged(true);
    };

  const onChangeColor = (inputcolor: string, _stepColor: number) => {
    setColor(inputcolor);
    setHasChanged(true);
  };

  const onChangeTimeFormat = (value: string) => {
    let index = value as keyof typeof timeFormats;
    console.log(value, timeFormats[index]);
    setTimeFormat(timeFormats[index]);
    setCustomFormat(value === "custom");
    setHasChanged(true);
  };
  const onChangeCustomTimeFormat = (e: string) => {
    setTimeFormat([...e.split(","), ...timeFormats.custom]);
  };

  return (
    <div>
      <Select
        id="ratio"
        title="Time Format"
        defaultValue="numeric"
        options={Object.keys(timeFormats).map((i) => ({
          value: i,
          label: i?.charAt(0)?.toUpperCase() + i?.slice(1).toLocaleLowerCase(),
        }))}
        setValue={onChangeTimeFormat}
      />
      {customFormat && (
        <EmojiPickerBox
          title="d"
          defaultValue=""
          id="custom-text"
          maxLength="50"
          onChangeEmoji={onChangeCustomTimeFormat}
        />
      )}
      <InputRange
        text={`Radio: ${radius}`}
        id="radius"
        min={1}
        max={100}
        step={1}
        defaultValue={radius}
        onChange={onChangeRange(setRadius)} // onMouseUp not needed as soon perofrmance fixed
      />
      <InputRange
        text={`X offset: ${scalarX}`}
        id="x-scalar"
        min={-10}
        max={10}
        step={1}
        defaultValue={scalarX}
        onChange={onChangeRange(setScalarX)}
      />
      <InputRange
        text={`Y offset: ${scalarY}`}
        id="y-scalar"
        min={-10}
        max={10}
        step={1}
        defaultValue={scalarY}
        onChange={onChangeRange(setScalarY)}
      />
      <InputRange
        text={`Font size: ${fontSize}`}
        id="y-offset"
        min={1}
        max={30}
        step={1}
        defaultValue={fontSize}
        onChange={onChangeRange(setFontSize)}
      />
      <ColorBox
        inputText={color}
        id={`range-color`}
        onChangeColor={(color) => {
          onChangeColor(color, 0);
        }}
        defaultColor={color}
      />
    </div>
  );
};

export default HoursForm;
