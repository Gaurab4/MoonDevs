import React from "react";

interface AppChipProps {
  onClick?: () => void;
  title: string;
  endIcon: string;
  startIcon: string;
}

const AppChip: React.FC<AppChipProps> = ({ onClick, title, endIcon, startIcon }) => {
  return (
    <div className="app-chip" onClick={onClick}>
      <img src={startIcon} alt="Start Icon" className="start-icon" />
      <span className="title">{title}</span>
      <img src={endIcon} alt="End Icon" className="end-icon" />
    </div>
  );
};

export default AppChip;
