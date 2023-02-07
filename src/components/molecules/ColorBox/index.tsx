import React, { useState, useEffect } from 'react';
import Copy from '../../../assets/Copy';
import ImageButton from '../../atoms/ImageButton';
import InputColorPicker from '../../atoms/InputColorPicker';
import Paste from '../../../assets/Paste';
import './colorbox.css';

interface ColorBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  inputText: string;
  defaultColor: string;
  id: string;
  disabled?: boolean;
  onChangeColor: (params: string) => void;
}

const ColorBox: React.FunctionComponent<ColorBoxProps> = ({
  inputText,
  id,
  onChangeColor,
  defaultColor = '#000000',
  disabled = false,
  ...rest
}) => {
  const [color, setColor] = useState<string>(defaultColor);

  useEffect(() => {
    onChangeColor(color);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [color]);

  const onCopy = (_e: React.MouseEvent<HTMLButtonElement>): void => {
    void navigator.clipboard.writeText(color);
  };

  const onPaste = (_e: React.MouseEvent<HTMLButtonElement>): void => {
    void navigator.clipboard.readText().then((clipText) => {
      const text = /^#[0-9A-F]{6}$/i.test(clipText) ? clipText : '#000000';
      setColor(text);
    });
  };

  const onChangeCurrentColor = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setColor(e.target.value);
  };

  return (
    <div className="color-box">
      <InputColorPicker
        label={inputText}
        id={`range-${id}`}
        value={color}
        onChange={onChangeCurrentColor}
        disabled={disabled}
        {...rest}
      />
      <ImageButton svg={<Copy />} onClick={onCopy} />
      <ImageButton svg={<Paste />} onClick={onPaste} />
    </div>
  );
};

export default ColorBox;
