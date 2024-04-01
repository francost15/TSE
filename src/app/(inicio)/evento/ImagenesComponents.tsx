"use client"
import Image from "next/image";
import { FC } from 'react';

const ImagenesComponent: FC = () => {
    const imageContainerStyle = {
        width: '90%',
        transition: 'transform 1.5s cubic-bezier(0.20, 0.1, 0.20, 1)',
        overflow: 'hidden',
        margin: '10px',
        border: '1px solid #ddd',
        boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)',
    };

    const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.currentTarget.style.transform = 'scale(1.1)';
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.currentTarget.style.transform = 'scale(1)';
    };

    return (
        <div className="grid grid-cols-2 gap-4">
            <div style={imageContainerStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <Image className="collage-image" src="/assets/etica.png" alt="imagenetica" layout="responsive" width={100} height={100} />
            </div>
            <div style={imageContainerStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <Image className="collage-image" src="/assets/humano.png" alt="humano" layout="responsive" width={100} height={100} />
            </div>
            <div style={imageContainerStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <Image className="collage-image" src="/assets/lenguajes.png" alt="lenguajes" layout="responsive" width={100} height={100} />
            </div>
            <div style={imageContainerStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <Image className="collage-image" src="/assets/saberes.png" alt="saberes" layout="responsive" width={100} height={100} />
            </div>
        </div>
    )
}

export default ImagenesComponent;