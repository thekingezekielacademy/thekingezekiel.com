import React from 'react';
import NextImage from 'next/image';

export const Image = ({ src, alt, html, ...props }: any) => {
  // If the extractor couldn't grab the src cleanly, try to extract from html
  let imgSrc = src;
  if (!imgSrc && html) {
    const match = html.match(/src="([^"]+)"/);
    if (match) imgSrc = match[1];
  }
  
  if (!imgSrc) return null;

  return (
    <div className="w-full relative overflow-hidden rounded-2xl shadow-lg my-4" {...props}>
      {/* Fallback to regular img if NextImage has hostname issues initially */}
      <img 
        src={imgSrc} 
        alt={alt || "Image"} 
        className="w-full h-auto object-cover"
      />
    </div>
  );
};
