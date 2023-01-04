import React from "react";
import './button.css';

type ButtonProps = {
    element: HTMLCanvasElement | null
}

const Button = ({element}: ButtonProps) => {
    const onSave = () => {
        let downloadLink = document.createElement('a');
        downloadLink.setAttribute('download', 'wallpaper.png');
        let canvas = element;
        let dataURL = canvas?.toDataURL('image/png');
        let url = dataURL?.replace(/^data:image\/png/,'data:application/octet-stream');
        downloadLink.setAttribute('href', url as string);
        downloadLink.click();
    }
    return (
    <div>
        <button id='save-btn' onClick={onSave}>Save</button>
    </div>
    );
}

export default Button;