import React from "react";

const Container = ({
  className,
  children,
}: {
  className: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={className + " max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 "}>
      {children}
    </div>
  );
};

export default Container;
