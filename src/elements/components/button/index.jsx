import React from 'react';
import "./style.css";

export const buttonTypes = {
    outlinedRed: 'outlined-red',
    outlinedBlue: 'outlined-blue',
    fillBlue: 'fill-blue',
    fillRed: 'fill-red',
};

export default function Button(props) {
    let buttonClassName = 'bt';

    switch (props.type) {
        case buttonTypes.outlinedRed:
            buttonClassName = buttonClassName + ' outlined-red';
            break;
        case buttonTypes.outlinedBlue:
            buttonClassName = buttonClassName + ' outlined-blue';
            break;
        case buttonTypes.fillBlue:
            buttonClassName = buttonClassName + ' fill-blue';
            break;
        case buttonTypes.fillRed:
            buttonClassName = buttonClassName + ' fill-red';
            break;
        default:
            break;
    }

    return (
        <button className={buttonClassName + ' ' + props.className}>
            {props.children}
        </button>
    );
}