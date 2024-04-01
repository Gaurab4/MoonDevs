import React from "react";

interface AppToastProps {
  position: any;
  message: string;
  severity: any;
}

const AppToast: React.FC<AppToastProps> = ({ position, message, severity }) => {
  return <div>AppToast</div>;
};

export default AppToast;
