import { InitialState, State } from "./InitialState";

type action = {
  type: string;
  value: any;
};

export const reducer = (state: State, action: action) => {
  switch (action.type) {
    case "resize-canvas":
      return {
        ...state,
        height: action.value.height,
        width: action.value.width,
      };
    case "conical-gradient":
      return {
        ...state,
        conicGradient: {
          colorList: action.value.colorList,
          shine: action.value.shine,
          xOffset: action.value.xOffset,
          yOffset: action.value.yOffset,
        },
      };
    case "reset":
      return InitialState;
    default:
      return state;
  }
};
