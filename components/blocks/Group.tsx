import React from 'react';

export const Group = ({ children, ...props }: any) => {
  return (
    <div className="w-full flex flex-col gap-4 py-4" {...props}>
      {children}
    </div>
  );
};
