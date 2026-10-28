"use client";

import { useState } from "react";

type CoursePreviewVideoProps = {
  videoId: string;
  title: string;
  description: string;
};

export function CoursePreviewVideo({
  videoId,
  title,
  description,
}: CoursePreviewVideoProps) {
  const [isMuted, setIsMuted] = useState(true);

  function toggleMute() {
    const player = document.getElementById(
      "course-preview-video",
    ) as HTMLIFrameElement | null;

    player?.contentWindow?.postMessage(
      JSON.stringify({
        event: "command",
        func: isMuted ? "unMute" : "mute",
        args: [],
      }),
      "https://www.youtube-nocookie.com",
    );
    setIsMuted(!isMuted);
  }

  return (
    <section aria-label="Course preview video" className="py-8 sm:py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-4 text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-portfolio-gold sm:text-xs">
            WATCH THIS FIRST
          </p>
          <p className="mt-3 text-base text-portfolio-muted sm:text-lg">
            {description}
          </p>
        </div>

        <div className="relative overflow-hidden rounded-[28px] border border-portfolio-border bg-portfolio-card shadow-2xl">
          <div className="relative aspect-video w-full bg-black">
            <iframe
              id="course-preview-video"
              className="pointer-events-none absolute inset-0 h-full w-full"
              tabIndex={-1}
              src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&playsinline=1&controls=0&disablekb=1&enablejsapi=1&rel=0&loop=1&playlist=${videoId}`}
              title={title}
              allow="autoplay; encrypted-media; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
            />
            <div className="absolute inset-0 z-10 flex items-center justify-center">
              <button
                type="button"
                onClick={toggleMute}
                aria-label={
                  isMuted
                    ? "Unmute course preview video"
                    : "Mute course preview video"
                }
                className="rounded-full border-2 border-portfolio-gold bg-portfolio-gold px-8 py-5 text-sm font-bold uppercase tracking-[0.16em] text-black shadow-[0_0_36px_rgba(212,175,55,0.55)] transition-all duration-200 hover:scale-105 hover:bg-[#e7c75c] focus:outline-none focus:ring-4 focus:ring-white/70"
              >
                {isMuted ? "Unmute video" : "Mute video"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
