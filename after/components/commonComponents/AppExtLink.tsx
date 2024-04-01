import React from "react";

interface AppExtLinkProps {
  url: string;
  className?: string;
  children: React.ReactNode;
}

const AppExtLink: React.FC<AppExtLinkProps> = ({ url, className, children }) => {
  return (
    <a href={url} className={className} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};

export default AppExtLink;
