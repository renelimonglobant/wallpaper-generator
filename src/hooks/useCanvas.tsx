import React from "react";

const useCanvas = () => {
    const onSave = () => {
        console.log('saved');
    }
    return (
    <div>
        <button id='save-btn' onClick={onSave}>Save</button>
    </div>
    );
}

export default useCanvas;