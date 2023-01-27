import React, { useState, useEffect } from 'react';
import ColorBox from '../../molecules/ColorBox';
import './hours-form.css';
import InputRange from '../../atoms/InputRange/InputRange';
import Select from '../../atoms/Select';
import EmojiPickerBox from '../../molecules/EmojiPickerBox';
import CheckBox from '../../atoms/CheckBox';

type HoursFormProps = {
  initialRadius: number;
  initialX: number;
  initialY: number;
  initialFontSize: number;
  bold: boolean;
  italic: boolean;
  enabled: boolean;
  initialColor: string;
  initialTimeFormat: Array<string>;
  onChangeForm: (
    enabled: boolean,
    radius: number,
    scalarX: number,
    scalarY: number,
    fontSize: number,
    bold: boolean,
    italic: boolean,
    color: string,
    timeFormat: Array<string>
  ) => void;
};

const HoursForm = ({
  initialRadius,
  initialX,
  initialY,
  initialFontSize,
  bold,
  italic,
  enabled,
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
  const [isEnabled, setIsEnabled] = useState<boolean>(enabled);
  const [isBold, setIsBold] = useState<boolean>(bold);
  const [isItalic, setIsItalic] = useState<boolean>(italic);
  const timeFormats = {
    numeric: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    roman: [
      'I',
      'II',
      'III',
      'IV',
      'V',
      'VI',
      'VII',
      'VIII',
      'IX',
      'X',
      'XI',
      'XII',
    ],
    custom: ['', '', '', '', '', '', '', '', '', '', '', ''],
  };

  useEffect(() => {
    hasChanged &&
      onChangeForm(
        isEnabled,
        radius,
        scalarX,
        scalarY,
        fontSize,
        isBold,
        isItalic,
        color,
        timeFormat
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    isEnabled,
    color,
    radius,
    scalarX,
    scalarY,
    fontSize,
    isBold,
    isItalic,
    timeFormat,
  ]);

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
    setTimeFormat(timeFormats[index]);
    setCustomFormat(value === 'custom');
    setHasChanged(true);
  };
  const onChangeCustomTimeFormat = (e: string) => {
    setTimeFormat([...e.split(','), ...timeFormats.custom]);
  };

  return (
    <div>
      <div className="check-container">
        <CheckBox
          id="show-hours"
          label="Show hours"
          checked={isEnabled}
          onChange={() => setIsEnabled(!isEnabled)}
        />
      </div>
      <Select
        id="ratio"
        label="Time Format"
        defaultValue="numeric"
        options={Object.keys(timeFormats).map((i) => ({
          value: i,
          label: i?.charAt(0)?.toUpperCase() + i?.slice(1).toLocaleLowerCase(),
        }))}
        setValue={onChangeTimeFormat}
        disabled={!isEnabled}
      />
      {customFormat && (
        <EmojiPickerBox
          title="Choose your emoji"
          defaultValue=""
          id="custom-text"
          maxLength="50"
          onChangeEmoji={onChangeCustomTimeFormat}
          disabled={!isEnabled}
        />
      )}
      <div className="check-container">
        <CheckBox
          id="bold"
          label="Bold"
          checked={isBold}
          onChange={() => setIsBold(!isBold)}
          disabled={!isEnabled}
        />
        <CheckBox
          id="italic"
          label="Italic"
          checked={isItalic}
          onChange={() => setIsItalic(!isItalic)}
          disabled={!isEnabled}
        />
      </div>
      <InputRange
        label={`Radius: ${radius}`}
        id="radius"
        min={1}
        max={100}
        step={1}
        defaultValue={radius}
        onChange={onChangeRange(setRadius)} // onMouseUp not needed anymore as soon performance was fixed
        disabled={!isEnabled}
      />
      <InputRange
        label={`X offset: ${scalarX}`}
        id="x-scalar"
        min={-10}
        max={10}
        step={1}
        defaultValue={scalarX}
        onChange={onChangeRange(setScalarX)}
        disabled={!isEnabled}
      />
      <InputRange
        label={`Y offset: ${scalarY}`}
        id="y-scalar"
        min={-10}
        max={10}
        step={1}
        defaultValue={scalarY}
        onChange={onChangeRange(setScalarY)}
        disabled={!isEnabled}
      />
      <InputRange
        label={`Font size: ${fontSize}`}
        id="y-offset"
        min={1}
        max={30}
        step={1}
        defaultValue={fontSize}
        onChange={onChangeRange(setFontSize)}
        disabled={!isEnabled}
      />
      <ColorBox
        inputText={color}
        id={`range-color`}
        onChangeColor={(color) => {
          onChangeColor(color, 0);
        }}
        defaultColor={color}
        disabled={!isEnabled}
      />
    </div>
  );
};

export default HoursForm;
