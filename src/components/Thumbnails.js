import '../Thumbnails.css';
// import LoadImage from './LoadImage.js'
import React, { useState, useLayoutEffect, useRef } from 'react';

export default function Thumbnails({ imgURL, title, id, rowGap, rowHeight }) {
    const [height, setHeight] = useState(0);
    const ref = useRef(null);

    const getImageSize = () => {
        const newHeight = ref.current.clientHeight;
        setHeight(newHeight);
    };

    useLayoutEffect(() => {
        window.addEventListener("load", getImageSize);
    }, []);

    useLayoutEffect(() => {
        window.addEventListener("resize", getImageSize);
    }, []);

    return (
        <div className='thumbnail' id={id} style={{ gridRowEnd: `span ${Math.ceil((height / rowHeight) + rowGap)}` }}>
            <div className='image'>
                <img ref={ref} src={imgURL} alt={title} />
            </div>
            <div className='title'><span>{title}</span></div>
        </div>
    );
}