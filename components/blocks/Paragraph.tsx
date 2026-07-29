import React from 'react';

export const Paragraph = ({ text, html, ...props }: any) => {
  return (
    <p className="text-gray-700 my-2 leading-relaxed" {...props}>
      {text || 'Paragraph text'}
    </p>
  );
};
