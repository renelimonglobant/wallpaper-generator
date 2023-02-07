import { type ColorsArray } from '../types';

export interface State {
  height: number;
  width: number;
  conicGradient: {
    colorList: ColorsArray;
    xOffset: number;
    yOffset: number;
    shine: number;
  };
  gradientRing: {
    enabled: boolean;
    colorList: ColorsArray;
    scaleX: number;
    scaleY: number;
    x: number;
    y: number;
    radius: number;
    shine: number;
    strokeWidth: number;
  };
  hours: {
    enabled: boolean;
    radius: number;
    x: number;
    y: number;
    fontSize: number;
    bold: boolean;
    italic: boolean;
    color: string;
    timeFormat: string[];
  };
}

export const InitialState: State = {
  width: 460, // 454
  height: 460, // 454
  conicGradient: {
    colorList: [
      { step: 0, color: '#000000' },
      { step: 0.25, color: '#545454' },
      { step: 0.5, color: '#000000' },
      { step: 0.75, color: '#545454' },
      { step: 1, color: '#000000' },
    ],
    xOffset: 0,
    yOffset: 0,
    shine: 7,
  },
  gradientRing: {
    enabled: true,
    colorList: [
      { step: 0, color: '#00FF1E' },
      { step: 0.5, color: '#6600FF' },
      { step: 1, color: '#00FF1E' },
    ],
    scaleX: 454,
    scaleY: 454,
    x: 0,
    y: 0,
    radius: -4, // size - strokeWidth
    shine: 0,
    strokeWidth: 10,
  },
  hours: {
    enabled: true,
    radius: 82,
    x: 0,
    y: 0,
    fontSize: 15,
    bold: false,
    italic: false,
    color: '#00FF11',
    timeFormat: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
  },
};
