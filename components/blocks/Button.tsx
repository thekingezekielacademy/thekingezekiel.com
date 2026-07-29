import React from 'react';
import Link from 'next/link';

export const Button = ({ text, link, html, ...props }: any) => {
  // Try to extract link and text from HTML if not in props
  let href = link?.url || "#";
  let label = text || "Click Here";

  if (html) {
    const hrefMatch = html.match(/href="([^"]+)"/);
    if (hrefMatch) href = hrefMatch[1];
    
    // label was likely already extracted into text, but just in case
    if (!text) {
      const textMatch = html.match(/>([^<]+)<\/a>/);
      if (textMatch) label = textMatch[1].trim();
    }
  }

  return (
    <div className="my-4">
      <Link 
        href={href}
        className="inline-block px-8 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-colors shadow-lg"
        {...props}
      >
        {label}
      </Link>
    </div>
  );
};
