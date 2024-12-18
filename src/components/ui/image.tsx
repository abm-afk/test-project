import { useState } from 'react';
import { cx } from "class-variance-authority";

interface ImageWithFallbackProps {
    src: string;
    alt: string;
    fallbackSrc: string;
    className?: string;
}

const ImageWithFallback = ({ src, alt, fallbackSrc, ...props }: ImageWithFallbackProps) => {

    const [imgSrc, setImgSrc] = useState(src || fallbackSrc);

    const handleError = () => {
        setImgSrc(fallbackSrc);
    };

    return (
        <div className="flex items-center justify-center w-10 h-10 border border-customBorderColor rounded-full">
        <img
            src={imgSrc}
            alt={alt}
            onError={handleError}
            className={cx("w-7 h-7 object-fill rounded-full", props.className)}
            {...props}
        />
        </div>
    );
};

export default ImageWithFallback;