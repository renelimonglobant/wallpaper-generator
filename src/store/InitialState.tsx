export type State = {
  height: number;
  width: number;
  conicGradient: {
    colorList: Array<{ step: number; color: string }>;
    xOffset: number;
    yOffset: number;
    shine: number;
  };
  gradientRing: {
    enabled: boolean;
    colorList: Array<{ step: number; color: string }>;
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
    color: string;
    timeFormat: Array<string>;
  };
};

export const InitialState: State = {
  width: 454,
  height: 454,
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
  gradientRing: {
    enabled: true,
    colorList: [
      { step: 0, color: "#D00000" },
      { step: 0.5, color: "#FFFFFF" },
      { step: 1, color: "#D00000" },
    ],
    scaleX: 454,
    scaleY: 454,
    x: 0,
    y: 0,
    radius: 0, // size - strokeWidth
    shine: 0,
    strokeWidth: 10,
  },
  hours: {
    enabled: true,
    radius: 85,
    x: 0,
    y: 0,
    fontSize: 9,
    color: "#D00000",
    timeFormat: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
  },
};
