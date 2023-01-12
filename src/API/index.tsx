import "create-conical-gradient";

export const drawConicalGradient = (
  context: CanvasRenderingContext2D,
  width: number = 300,
  height: number = 300,
  values: Array<{ step: number; color: string }> = [
    { step: 0, color: "#F00" },
    { step: 0.2, color: "#00F" },
    { step: 0.4, color: "#0FF" },
    { step: 0.6, color: "#F0F" },
    { step: 0.8, color: "#FF0" },
    { step: 1, color: "#F00" },
  ],
  xOffset: number = 0,
  yOffset: number = 0,
  shine: number = 0
) => {
  const shineScalar = shine / 8.2;
  const xOffsetScalar = xOffset * 5;
  const yOffsetScalar = yOffset * 5;
  const gradient = context.createConicalGradient(
    width / 2 + xOffsetScalar,
    height / 2 + yOffsetScalar,
    -Math.PI + shineScalar,
    Math.PI + shineScalar
  );
  values.forEach((e) => gradient?.addColorStop(e.step, e.color));
  context.fillStyle = gradient.pattern;
  context.fillRect(0, 0, width, height);
};

export const drawGradientCircle = (
  context: CanvasRenderingContext2D,
  values: Array<{ step: number; color: string }> = [
    { step: 0, color: "#F00" },
    { step: 0.2, color: "#00F" },
    { step: 0.4, color: "#0FF" },
    { step: 0.6, color: "#F0F" },
    { step: 0.8, color: "#FF0" },
    { step: 1, color: "#F00" },
  ],
  x: number = 150,
  y: number = 150,
  r: number = 150,
  scaleX: number = 300,
  scaleY: number = 300,
  shine: number = 0,
  lineWidth: number = 5
) => {
  context?.beginPath();
  const shineScalar = shine / 4;
  const xScale = (scaleX + x * 25) / 2;
  const yScale = (scaleY + y * 25) / 2;
  const rValue = scaleX + r * 7 > 0 ? scaleX + r * 7 : 1;
  const rScale = rValue / 2;
  // console.log(r, scaleX, rValue, rScale);
  const gradient = context.createConicalGradient(
    xScale,
    yScale,
    -Math.PI + shineScalar,
    Math.PI + shineScalar
  );
  values.forEach((e) => gradient?.addColorStop(e.step, e.color));
  context.strokeStyle = gradient.pattern;
  context.lineWidth = lineWidth;
  context?.arc(xScale, yScale, rScale, 0, 2 * Math.PI);
  context?.stroke();
};

export const drawNumbers = (
  context: CanvasRenderingContext2D,
  radius: number
) => {
  let ang;
  context.font = radius * 0.09 + "px arial";
  context.textBaseline = "middle";
  context.textAlign = "center";
  for (let num = 1; num < 13; num++) {
    ang = (num * Math.PI) / 6;
    context.rotate(ang);
    context.translate(0, -radius * 0.85);
    context.rotate(-ang);
    context.fillText(num.toString(), 0, 0);
    context.rotate(ang);
    context.translate(0, radius * 0.85);
    context.rotate(-ang);
  }
};

export const drawSeconds = (
  context: CanvasRenderingContext2D,
  radius: number
) => {
  let ang;
  const distanceFromCenter = 0.9;
  context.font = radius * 0.1 + "px arial";
  context.textBaseline = "middle";
  context.textAlign = "center";
  for (let num = 1; num < 61; num++) {
    if (num % (6 - 1) !== 0) {
      ang = (num * Math.PI) / 30;
      context.rotate(ang);
      context.translate(0, -radius * distanceFromCenter);
      context.rotate(-ang);
      context.fillText(".", 0, 0);
      context.rotate(ang);
      context.translate(0, radius * distanceFromCenter);
      context.rotate(-ang);
    }
  }
};

export const drawGradient = (
  context: CanvasRenderingContext2D,
  width: number = 300,
  height: number = 300,
  values: Array<{ step: number; color: string }> = [
    { step: 0, color: "#0D9" },
    { step: 0.5, color: "#A00" },
    { step: 1, color: "#006" },
  ]
) => {
  // Create gradient
  const gradient = context?.createRadialGradient(150, 150, 100, 100, 100, 220);
  values.forEach((e) => gradient?.addColorStop(e.step, e.color));
  // Fill with gradient
  context && (context.fillStyle = gradient as CanvasGradient);
  context?.fillRect(0, 0, width, height);
};

export const drawCircle = (
  context: CanvasRenderingContext2D,
  color: string = "#92F070",
  x: number = 150,
  y: number = 150,
  r: number = 150
) => {
  context?.beginPath();
  context.strokeStyle = color;
  context?.arc(x, y, r, 0, 2 * Math.PI);
  context?.stroke();
};
