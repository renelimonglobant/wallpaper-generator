export type State = {
  height: number;
  width: number;
  conicGradient: {
    colorList: Array<{ step: number; color: string }>;
    xOffset: number;
    yOffset: number;
    shine: number;
  };
};

export const InitialState: State = {
  width: 400,
  height: 400,
  conicGradient: {
    colorList: [
      { step: 0, color: "#000000" },
      { step: 0.5, color: "#FFFFFF" },
      { step: 1, color: "#000000" },
    ],
    xOffset: 0,
    yOffset: 0,
    shine: 0,
  },
};
