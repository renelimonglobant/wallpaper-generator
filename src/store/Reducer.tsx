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
        gradientRing: {
          ...state.gradientRing,
          scaleX: action.value.width,
          scaleY: action.value.height
        }
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
    case "gradient-ring":
      return {
        ...state,
        gradientRing: {
          ...state.gradientRing,
          enabled: action.value.enabled,
          colorList: action.value.colorList,
          shine: action.value.shine,
          x: action.value.x,
          y: action.value.y,
          radius: action.value.radius,
          strokeWidth: action.value.strokeWidth,
        },
      };
    case "reset":
      return InitialState;
    default:
      return state;
  }
};
