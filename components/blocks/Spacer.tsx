import React from 'react';

export const Spacer = ({ html, ...props }: any) => {
  // We can try to extract height from the style tag
  let height = "2rem"; // default
  
  if (html) {
    const match = html.match(/height:([^"';]+)/);
    if (match) height = match[1].trim();
  }
  
  // Since some heights are var(--wp...), we can just use a generic spacing 
  // or apply the inline style directly if it's safe.
  const inlineStyle = height.includes('var') ? {} : { height };
  
  return (
    <div 
      className="w-full" 
      style={inlineStyle}
      {...props}
    >
      {/* If height is var, we'll just fall back to a fixed tailwind class for now */}
      {height.includes('var') && <div className="h-12 w-full" />}
    </div>
  );
};
