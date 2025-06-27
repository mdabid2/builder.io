import React from "react";

interface RawImgProps {
  image: string;
  alt: string;
  width?: string;
  height?: string;
  className?: string;
  style?: React.CSSProperties;
  onkeypress?: string;
  [key: string]: any;
}

export const RawImg: React.FC<RawImgProps> = ({
  image,
  alt,
  width,
  height,
  className,
  style,
  onkeypress,
  ...rest
}) => {
  return (
    <img
      src={image}
      alt={alt}
      width={width}
      height={height}
      className={className}
      style={style}
      {...rest}
    />
  );
};
