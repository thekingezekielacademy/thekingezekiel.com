'use client';

import React, { useState, useRef, useEffect } from 'react';

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
  const [isPlaying, setIsPlaying] = useState(false);

  let videoId = '';
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|shorts\/))([^&?]+)/);
  if (match && match[1]) {
    videoId = match[1];
  } else {
    const playlistMatch = url.match(/list=([^&?]+)/);
    if (playlistMatch && playlistMatch[1]) {
      videoId = `videoseries?list=${playlistMatch[1]}`;
    }
  }

  const isShort = url.includes('/shorts/');

  if (!videoId) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer" className="block w-full max-w-5xl my-12 p-6 border border-portfolio-gold/30 bg-portfolio-card text-portfolio-gold hover:bg-portfolio-gold hover:text-black transition-colors text-center font-mono text-sm tracking-widest uppercase">
        Watch Video Here
      </a>
    );
  }

  return (
    <div className={`w-full ${isShort ? 'max-w-md' : 'max-w-5xl'} my-12 flex justify-center`}>
      <div 
        className={`relative w-full ${isShort ? 'aspect-[9/16] max-h-[640px]' : 'aspect-video'} border border-portfolio-border bg-portfolio-card rounded-sm overflow-hidden shadow-2xl group cursor-pointer`}
        onClick={() => setIsPlaying(true)}
      >
        {!isPlaying ? (
          <>
            <img 
              src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`} 
              alt="Video Thumbnail" 
              className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-portfolio-gold rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.4)] group-hover:scale-110 group-hover:shadow-[0_0_40px_rgba(212,175,55,0.6)] transition-all">
                <svg className="w-8 h-8 md:w-10 md:h-10 text-black translate-x-1" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
          </>
        ) : (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&modestbranding=1&rel=0`}
            title="YouTube video player"
            className="absolute top-0 left-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        )}
      </div>
    </div>
  );
};

export const ImageCarousel = ({ images }: { images: string[] }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeModalIdx, setActiveModalIdx] = useState<number | null>(null);

  if (!images || images.length === 0) return null;

  const normalizedImages = images.map((img) => 
    img.startsWith('/wp-content') ? `https://thekingezekiel.com${img}` : img
  );

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -550 : 550;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const openModal = (idx: number) => {
    setActiveModalIdx(idx);
  };

  const closeModal = () => {
    setActiveModalIdx(null);
  };

  const prevModalImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeModalIdx !== null) {
      setActiveModalIdx((activeModalIdx - 1 + normalizedImages.length) % normalizedImages.length);
    }
  };

  const nextModalImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeModalIdx !== null) {
      setActiveModalIdx((activeModalIdx + 1) % normalizedImages.length);
    }
  };

  // Keyboard navigation for modal
  useEffect(() => {
    if (activeModalIdx === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowLeft') setActiveModalIdx((prev) => (prev !== null ? (prev - 1 + normalizedImages.length) % normalizedImages.length : null));
      if (e.key === 'ArrowRight') setActiveModalIdx((prev) => (prev !== null ? (prev + 1) % normalizedImages.length : null));
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeModalIdx, normalizedImages.length]);

  return (
    <div className="w-full my-12 relative">
      {/* Navigation Buttons for Desktop */}
      <div className="hidden md:flex justify-end gap-3 mb-4 pr-2">
        <button
          onClick={() => scroll('left')}
          aria-label="Previous review"
          className="w-10 h-10 rounded-full border border-portfolio-border bg-portfolio-card text-white hover:border-portfolio-gold hover:text-portfolio-gold flex items-center justify-center transition-colors cursor-pointer"
        >
          &#8592;
        </button>
        <button
          onClick={() => scroll('right')}
          aria-label="Next review"
          className="w-10 h-10 rounded-full border border-portfolio-border bg-portfolio-card text-white hover:border-portfolio-gold hover:text-portfolio-gold flex items-center justify-center transition-colors cursor-pointer"
        >
          &#8594;
        </button>
      </div>

      {/* Carousel Track */}
      <div 
        ref={scrollRef}
        className="w-full overflow-x-auto pb-6 snap-x flex gap-5 no-scrollbar items-center scroll-smooth"
      >
        {normalizedImages.map((src, idx) => (
          <div 
            key={idx} 
            onClick={() => openModal(idx)}
            className="flex-none w-[88vw] sm:w-[540px] md:w-[680px] snap-center rounded-sm overflow-hidden border border-portfolio-border bg-portfolio-card p-3 shadow-2xl transition-all duration-300 hover:border-portfolio-gold/70 cursor-zoom-in group relative"
          >
            <img 
              src={src} 
              alt={`Review testimonial ${idx + 1}`}
              className="w-full h-auto object-contain rounded-sm block mx-auto transition-transform duration-300 group-hover:scale-[1.01]"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-sm border border-portfolio-gold/40 text-portfolio-gold px-2.5 py-1 rounded text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5 shadow-lg">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                <path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"/>
              </svg>
              <span>Click to view full image</span>
            </div>
          </div>
        ))}
      </div>

      {/* Swipe/Scroll hint */}
      <p className="text-center text-xs tracking-widest uppercase text-portfolio-muted/70 mt-2 font-mono flex items-center justify-center gap-2">
        <span>←</span>
        <span>Swipe or scroll to see all {normalizedImages.length} reviews · Click any image to view in full size</span>
        <span>→</span>
      </p>

      {/* Full-Screen Lightbox Modal */}
      {activeModalIdx !== null && (
        <div 
          onClick={closeModal}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8 animate-fadeIn"
          role="dialog"
          aria-modal="true"
        >
          {/* Close button */}
          <button
            onClick={closeModal}
            aria-label="Close modal"
            className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-2xl font-light transition-colors z-50 cursor-pointer"
          >
            &times;
          </button>

          {/* Previous image button */}
          <button
            onClick={prevModalImage}
            aria-label="Previous image"
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-portfolio-gold hover:text-black text-white flex items-center justify-center text-xl transition-all z-50 cursor-pointer"
          >
            &#8592;
          </button>

          {/* Next image button */}
          <button
            onClick={nextModalImage}
            aria-label="Next image"
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-portfolio-gold hover:text-black text-white flex items-center justify-center text-xl transition-all z-50 cursor-pointer"
          >
            &#8594;
          </button>

          {/* Modal Image container */}
          <div 
            onClick={(e) => e.stopPropagation()}
            className="max-w-5xl max-h-[90vh] w-full flex flex-col items-center"
          >
            <img 
              src={normalizedImages[activeModalIdx]} 
              alt={`Full review testimonial ${activeModalIdx + 1}`}
              className="max-w-full max-h-[82vh] w-auto h-auto object-contain rounded border border-portfolio-border shadow-2xl"
            />
            <div className="mt-4 flex items-center gap-4 text-xs font-mono text-portfolio-muted">
              <span>Review {activeModalIdx + 1} of {normalizedImages.length}</span>
              <span>·</span>
              <span>Press ESC to close</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export const ImageBlock = ({ url }: { url: string }) => {
  if (!url) return null;
  const src = url.startsWith('/wp-content') ? `https://thekingezekiel.com${url}` : url;
  return (
    <div className="w-full max-w-4xl my-12">
      <div className="relative w-full rounded-sm overflow-hidden border border-portfolio-border bg-portfolio-card">
        <img 
          src={src} 
          alt="Page Image"
          className="w-full h-auto object-contain"
          loading="lazy"
          decoding="async"
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

  const lowerText = text.toLowerCase();
  const shouldTrackLead = 
    lowerText === 'buy via whatsapp' || 
    lowerText === 'join whatsapp community' || 
    lowerText === 'get yours now';

  const handleClick = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (shouldTrackLead && typeof window !== 'undefined' && (window as any).fbq) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).fbq('track', 'Contact');
    }
  };

  if (isWhatsApp) {
    return (
      <div className="my-8 flex justify-center w-full">
        <a 
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClick}
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
        onClick={handleClick}
        className="inline-block px-8 py-4 bg-portfolio-gold text-black font-semibold text-sm tracking-[0.1em] uppercase hover:bg-white transition-colors rounded-sm"
      >
        {text}
      </a>
    </div>
  );
};
