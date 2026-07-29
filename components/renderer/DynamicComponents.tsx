import React from 'react';

export const HeroHeading = ({ text }: { text: string }) => {
  return (
    <div className="w-full py-12 md:py-16">
      <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white tracking-tight mb-4 border-l-4 border-portfolio-gold pl-6 md:pl-8">
        {text}
      </h1>
    </div>
  );
};

export const TextContent = ({ html }: { html: string }) => {
  return (
    <div 
      className="prose prose-invert prose-lg max-w-4xl text-portfolio-muted font-light leading-relaxed prose-headings:font-serif prose-headings:text-white prose-headings:font-medium prose-a:text-portfolio-gold hover:prose-a:text-white transition-colors prose-p:mb-6"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export const YouTubePlayer = ({ url }: { url: string }) => {
  let videoId = '';
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?]+)/);
  if (match && match[1]) {
    videoId = match[1];
  } else {
    const playlistMatch = url.match(/list=([^&?]+)/);
    if (playlistMatch && playlistMatch[1]) {
      videoId = `videoseries?list=${playlistMatch[1]}`;
    }
  }

  if (!videoId) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer" className="block w-full max-w-5xl my-12 p-6 border border-portfolio-gold/30 bg-portfolio-card text-portfolio-gold hover:bg-portfolio-gold hover:text-black transition-colors text-center font-mono text-sm tracking-widest uppercase">
        Watch Video Here
      </a>
    );
  }

  return (
    <div className="w-full max-w-5xl my-12">
      <div className="relative w-full aspect-video border border-portfolio-border bg-portfolio-card rounded-sm overflow-hidden shadow-2xl">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          className="absolute top-0 left-0 w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export const ImageCarousel = ({ images }: { images: string[] }) => {
  if (!images || images.length === 0) return null;
  
  return (
    <div className="w-full my-12 overflow-x-auto pb-4 snap-x flex gap-4 no-scrollbar">
      {images.map((img, idx) => (
        <div key={idx} className="min-w-[80vw] md:min-w-[40vw] lg:min-w-[30vw] aspect-[4/3] relative snap-center rounded-sm overflow-hidden border border-portfolio-border bg-portfolio-card">
          <img 
            src={img} 
            alt={`Carousel image ${idx + 1}`}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
};

export const ImageBlock = ({ url }: { url: string }) => {
  if (!url) return null;
  return (
    <div className="w-full max-w-4xl my-12">
      <div className="relative w-full rounded-sm overflow-hidden border border-portfolio-border bg-portfolio-card">
        <img 
          src={url} 
          alt="Page Image"
          className="w-full h-auto object-contain"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export const ActionButton = ({ text, url }: { text: string, url: string }) => {
  return (
    <div className="my-8">
      <a 
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-8 py-4 bg-portfolio-gold text-black font-semibold text-sm tracking-[0.1em] uppercase hover:bg-white transition-colors rounded-sm"
      >
        {text}
      </a>
    </div>
  );
};
