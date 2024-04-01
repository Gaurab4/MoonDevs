import React from "react";

interface AppIconProps {
  url: string;
  fill: string;
  size: number;
  margin: number;
}

const AppIcon: React.FC<AppIconProps> = ({ url, fill, size, margin }) => {
  return (
    <img src={url} alt="App Icon" style={{ fill, width: `${size}rem`, margin: `${margin}rem` }} />
  );
};

export default AppIcon;
