import React from 'react';

export const Columns = ({ children, ...props }: any) => {
  return (
    <div className="w-full flex flex-col md:flex-row gap-8 py-8" {...props}>
      {children}
    </div>
  );
};
