import React from 'react';

export const Heading = ({ text, html, ...props }: any) => {
  return (
    <h2 className="text-3xl font-bold my-4" {...props}>
      {text || 'Heading'}
    </h2>
  );
};
