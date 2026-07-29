import React from 'react';

export const Column = ({ children, ...props }: any) => {
  return (
    <div className="flex-1 flex flex-col gap-4" {...props}>
      {children}
    </div>
  );
};
