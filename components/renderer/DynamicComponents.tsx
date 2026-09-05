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
      {images.map((img, idx) => {
        const src = img.startsWith('/') ? `https://thekingezekiel.com${img}` : img;
        return (
          <div key={idx} className="min-w-[80vw] md:min-w-[40vw] lg:min-w-[30vw] aspect-[4/3] relative snap-center rounded-sm overflow-hidden border border-portfolio-border bg-portfolio-card">
            <img 
              src={src} 
              alt={`Carousel image ${idx + 1}`}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        );
      })}
    </div>
  );
};

export const ImageBlock = ({ url }: { url: string }) => {
  if (!url) return null;
  const src = url.startsWith('/') ? `https://thekingezekiel.com${url}` : url;
  return (
    <div className="w-full max-w-4xl my-12">
      <div className="relative w-full rounded-sm overflow-hidden border border-portfolio-border bg-portfolio-card">
        <img 
          src={src} 
          alt="Page Image"
          className="w-full h-auto object-contain"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export const ActionButton = ({ text, url }: { text: string, url: string }) => {
  const isWhatsApp = 
    url.includes('wa.link') || 
    url.includes('chat.whatsapp.com') || 
    url.includes('whatsapp.com') || 
    text.toLowerCase().includes('whatsapp');

  if (isWhatsApp) {
    return (
      <div className="my-8 flex justify-center w-full">
        <a 
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm md:text-base tracking-[0.08em] uppercase transition-all shadow-[0_0_25px_rgba(37,211,102,0.35)] hover:shadow-[0_0_35px_rgba(37,211,102,0.6)] rounded-sm group transform hover:-translate-y-0.5"
        >
          <svg className="w-5 h-5 fill-current transition-transform group-hover:scale-110" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          </svg>
          <span>{text}</span>
        </a>
      </div>
    );
  }

  return (
    <div className="my-8 flex justify-center w-full">
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
