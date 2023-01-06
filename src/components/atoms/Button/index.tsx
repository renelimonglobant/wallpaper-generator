import React from "react";
import "./button.css";

type ButtonProps = {
  element: HTMLCanvasElement | null;
  id: string;
};

const Button = ({ element, id }: ButtonProps) => {
  const onSave = () => {
    // both methods working properly
    /*
        let downloadLink = document.createElement('a');
        downloadLink.setAttribute('download', 'wallpaper.png');
        let canvas = element;
        let dataURL = canvas?.toDataURL('image/png');
        let url = dataURL?.replace(/^data:image\/png/,'data:application/octet-stream');
        downloadLink.setAttribute('href', url as string);
        downloadLink.click();
        */
    let downloadLink = document.createElement("a");
    downloadLink.setAttribute("download", "wallpaper.png");
    let canvas = element as HTMLCanvasElement;
    canvas.toBlob((blob) => {
      let url = URL.createObjectURL(blob as Blob);
      downloadLink.setAttribute("href", url);
      downloadLink.click();
    });
  };
  return (
    <div>
      <button className="btn" id={`btn-${id}`} onClick={onSave}>
        Save
      </button>
    </div>
  );
};

export default Button;
