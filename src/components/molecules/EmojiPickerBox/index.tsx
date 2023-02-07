import React, { useState, useEffect } from 'react';
import Input from '../../atoms/Input';
import EmojiPicker, { type EmojiClickData, Emoji } from 'emoji-picker-react';
import ImageButton from '../../atoms/ImageButton';
import './emoji-picker.css';

interface EmojiPickerBoxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  title: string;
  defaultValue: string;
  id: string;
  onChangeEmoji: (params: string) => void;
}

const EmojiPickerBox: React.FunctionComponent<EmojiPickerBoxProps> = ({
  title,
  id,
  onChangeEmoji,
  defaultValue = '#000000',
  ...rest
}) => {
  const [value, setValue] = useState<string>(defaultValue);
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    onChangeEmoji(value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const onChangeCurrentValue = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setValue(e.target.value);
  };

  const onSelectEmoji = (e: EmojiClickData): void => {
    setValue((prev) => prev + e.emoji);
  };

  const onTogglePicker = (_e: React.MouseEvent<HTMLButtonElement>): void => {
    setShow(!show);
  };

  return (
    <div className="emoji-picker-box">
      <div className="box">
        <div>
          <Input
            label="Add comma separated emojis/text"
            id={`emoji-${id}`}
            onChange={onChangeCurrentValue}
            value={value}
            {...rest}
          />
        </div>
        <ImageButton
          svg={<Emoji unified="1f600" size={25} />}
          onClick={onTogglePicker}
        />
      </div>
      <div className={show ? '' : 'hidden'}>
        <EmojiPicker onEmojiClick={onSelectEmoji} height="27em" width="100%" />
      </div>
    </div>
  );
};

export default EmojiPickerBox;
