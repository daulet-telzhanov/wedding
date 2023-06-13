import React, { CSSProperties } from 'react';
import './style.css';

type TextProps = {
    children?: any;
    className?: string;
    mb?: number;
    fontSize?: number;
    color?: string;
    wh?: number;
}

const Text = ({children, className, mb, fontSize, color, wh}:TextProps) => {
    let classText = 'text_wrapper';

    if (className) {
        classText += ` ${className}`
    }

    const style:CSSProperties = {};

    if (mb) style['marginBottom'] = `${mb}rem`;
    if (fontSize) style['fontSize'] = `${fontSize}rem`;
    if (color) style['color'] = color;
    if (wh) style['fontWeight'] = wh;

    return <div className={classText} style={style}>
        {children}
    </div>
}

export default Text;
