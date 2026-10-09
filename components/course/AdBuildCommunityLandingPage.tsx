"use client";

import { useState, useRef, useEffect } from "react";
import { YouTubePlayer, ImageCarousel } from "../renderer/DynamicComponents";

export const BUILD_COMMUNITY_WHATSAPP_URL =
  process.env.NEXT_PUBLIC_BUILD_COMMUNITY_WHATSAPP_URL ?? "https://wa.link/k4m8ft";

type CTAButtonProps = {
  label?: string;
  href?: string;
  className?: string;
};

function CTAButton({
  label = "BUY VIA WHATSAPP",
  href = BUILD_COMMUNITY_WHATSAPP_URL,
  className = "",
}: CTAButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={label}
      className={`inline-flex items-center justify-center gap-2.5 rounded-xl border border-[#25D366] bg-[#25D366] px-6 py-4 text-xs font-bold uppercase tracking-[0.14em] text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#20bd5a] focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-portfolio-bg active:translate-y-0 shadow-[0_0_25px_rgba(37,211,102,0.35)] sm:px-7 sm:py-4 sm:text-sm sm:tracking-[0.16em] ${className}`}
    >
      <svg className="h-4 w-4 shrink-0 fill-current sm:h-5 sm:w-5" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
      </svg>
      <span>{label}</span>
    </a>
  );
}

function Hero() {
  return (
    <header className="pt-8 pb-8 sm:pt-10 md:pt-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[28px] border border-portfolio-border bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.16),_transparent_45%)] p-6 sm:p-8 md:p-10 lg:p-12">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-portfolio-gold/40 bg-portfolio-gold/10 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.24em] text-portfolio-gold sm:text-xs">
              <span>5 WAYS MONETIZATION</span>
              <span>•</span>
              <span>MONETIZATION MASTERCLASS</span>
            </div>

            <h1 className="text-3xl font-extrabold leading-tight tracking-[-0.04em] text-white sm:text-5xl md:text-6xl lg:text-[4.2rem]">
              5 WAYS NIGERIANS MONETIZE THEIR SKILLS TO EARN ₦1M TO ₦3M MONTHLY
            </h1>

            <p className="mt-6 text-lg font-semibold text-portfolio-fg sm:text-xl md:text-2xl">
              Building Income With Long-Term Direction
            </p>

            {/* NOTE Box */}
            <div className="mt-6 rounded-2xl border border-portfolio-gold/40 bg-portfolio-gold/10 p-4 sm:p-5 text-left md:text-center">
              <p className="text-sm font-semibold leading-relaxed text-portfolio-gold sm:text-base">
                💡 <span className="font-extrabold text-white">NOTE:</span> Even if you do not have skill, you would be taught one! That’s how stubborn we are to see you win!
              </p>
            </div>

            {/* ADVICE Box */}
            <div className="mt-4 rounded-2xl border border-amber-500/40 bg-amber-950/30 p-4 sm:p-5 text-left md:text-center">
              <p className="text-sm font-semibold leading-relaxed text-amber-200 sm:text-base">
                ⚠️ <span className="font-extrabold text-amber-400">ADVICE:</span> Do not do all 5, there is a video King Ezekiel explained which monetisation path best suits you!
              </p>
            </div>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <CTAButton />
            </div>

            <div className="mt-10 grid gap-3 border-t border-portfolio-border pt-6 text-left sm:grid-cols-3">
              {[
                ["LEARN & BUILD", "Practical income streams"],
                ["GET A SKILL", "Taught for free inside"],
                ["GROW TOGETHER", "Community of high earners"],
              ].map(([title, desc]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-portfolio-border bg-portfolio-card/70 p-4 text-center"
                >
                  <div className="text-xs font-semibold uppercase tracking-[0.22em] text-portfolio-gold">
                    {title}
                  </div>
                  <div className="mt-2 text-sm text-portfolio-muted">
                    {desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function VideoSection() {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const currentTimeRef = useRef<number>(60);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (typeof event.data === "string") {
        try {
          const data = JSON.parse(event.data);
          if (data.event === "infoDelivery" && data.info && typeof data.info.currentTime === "number") {
            currentTimeRef.current = data.info.currentTime;
          }
        } catch {}
      }
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  function sendCommand(func: string, args: any[] = []) {
    const player = document.getElementById("build-preview-video") as HTMLIFrameElement | null;
    player?.contentWindow?.postMessage(
      JSON.stringify({
        event: "command",
        func,
        args,
      }),
      "https://www.youtube-nocookie.com"
    );
  }

  function toggleMute() {
    sendCommand(isMuted ? "unMute" : "mute");
    setIsMuted(!isMuted);
  }

  function togglePlay() {
    sendCommand(isPlaying ? "pauseVideo" : "playVideo");
    setIsPlaying(!isPlaying);
  }

  function toggleFullscreen() {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      containerRef.current?.requestFullscreen();
    }
  }

  function changeSpeed(rate: number) {
    sendCommand("setPlaybackRate", [rate]);
    setPlaybackRate(rate);
  }

  function cycleSpeed() {
    const rates = [1, 1.25, 1.5, 2];
    const nextIdx = (rates.indexOf(playbackRate) + 1) % rates.length;
    changeSpeed(rates[nextIdx]);
  }

  function seekRelative(seconds: number) {
    const targetTime = Math.max(60, Math.min(3120, currentTimeRef.current + seconds));
    sendCommand("seekTo", [targetTime, true]);
    currentTimeRef.current = targetTime;
  }

  return (
    <section aria-label="Live training recap video" className="py-6 sm:py-10">
      <div className="mx-auto max-w-6xl px-3 sm:px-6 lg:px-8">
        <div className="mb-3 text-center sm:mb-4">
          <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-portfolio-gold/40 bg-portfolio-gold/10 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-portfolio-gold sm:px-3.5 sm:text-xs sm:tracking-[0.24em]">
            <span className="inline-block h-2 w-2 rounded-full bg-red-500 animate-pulse" />
            <span>LIVE CLASS REPLAY</span>
            <span>•</span>
            <span>FULL SESSION RECAP</span>
          </div>
          <p className="mt-1.5 text-xs leading-relaxed text-portfolio-muted sm:mt-2 sm:text-base md:text-lg">
            This video is a complete recap of a live training class that already took place. Watch King Ezekiel explain step-by-step which monetization path best suits your goals!
          </p>
        </div>

        <div
          ref={containerRef}
          id="video-player-container"
          className="group relative overflow-hidden rounded-[20px] sm:rounded-[28px] border border-portfolio-border bg-portfolio-card shadow-2xl"
        >
          <div className="relative aspect-video w-full bg-black">
            <iframe
              id="build-preview-video"
              className="absolute inset-0 h-full w-full"
              tabIndex={-1}
              src="https://www.youtube-nocookie.com/embed/TniI1hTLD3I?start=60&end=3120&autoplay=1&mute=1&playsinline=1&controls=0&disablekb=1&enablejsapi=1&rel=0&loop=1&playlist=TniI1hTLD3I"
              title="5 Ways Nigerians Monetize Their Skills live class recap"
              allow="autoplay; encrypted-media; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
            />

            {/* Center Unmute Button when Muted */}
            {isMuted && (
              <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/30 pointer-events-none p-4">
                <button
                  type="button"
                  onClick={toggleMute}
                  aria-label="Unmute live class recap video"
                  className="pointer-events-auto rounded-full border-2 border-portfolio-gold bg-portfolio-gold px-5 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-black shadow-[0_0_36px_rgba(212,175,55,0.55)] transition-all duration-200 hover:scale-105 hover:bg-[#e7c75c] focus:outline-none focus:ring-4 focus:ring-white/70 sm:px-8 sm:py-5 sm:text-sm sm:tracking-[0.16em]"
                >
                  Unmute video
                </button>
              </div>
            )}

            {/* Custom Interactive Controls Overlay */}
            <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black/95 via-black/85 to-transparent p-2.5 backdrop-blur-sm sm:p-4 sm:px-6">
              
              {/* MOBILE CONTROLS BAR (sm:hidden) */}
              <div className="flex items-center justify-between gap-1.5 sm:hidden">
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={togglePlay}
                    aria-label={isPlaying ? "Pause" : "Play"}
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-portfolio-gold/30 bg-black/70 text-portfolio-gold active:bg-portfolio-gold/30"
                  >
                    {isPlaying ? (
                      <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
                    ) : (
                      <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={toggleMute}
                    aria-label={isMuted ? "Unmute" : "Mute"}
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-portfolio-gold/30 bg-black/70 text-portfolio-gold active:bg-portfolio-gold/30"
                  >
                    {isMuted ? (
                      <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/></svg>
                    ) : (
                      <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>
                    )}
                  </button>
                </div>

                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => seekRelative(-10)}
                    aria-label="Rewind 10s"
                    className="rounded-lg border border-portfolio-border bg-black/70 px-2 py-1 text-[10px] font-semibold text-portfolio-fg active:text-portfolio-gold"
                  >
                    -10s
                  </button>
                  <button
                    type="button"
                    onClick={() => seekRelative(10)}
                    aria-label="Forward 10s"
                    className="rounded-lg border border-portfolio-border bg-black/70 px-2 py-1 text-[10px] font-semibold text-portfolio-fg active:text-portfolio-gold"
                  >
                    +10s
                  </button>
                  <button
                    type="button"
                    onClick={cycleSpeed}
                    aria-label="Playback speed"
                    className="rounded-lg border border-portfolio-gold/40 bg-portfolio-gold/20 px-2 py-1 text-[10px] font-bold text-portfolio-gold"
                  >
                    {playbackRate}x
                  </button>
                  <button
                    type="button"
                    onClick={toggleFullscreen}
                    aria-label={isFullscreen ? "Minimize" : "Full Screen"}
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-portfolio-gold/40 bg-portfolio-gold/20 text-portfolio-gold active:bg-portfolio-gold active:text-black"
                  >
                    {isFullscreen ? (
                      <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"/></svg>
                    ) : (
                      <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg>
                    )}
                  </button>
                </div>
              </div>

              {/* DESKTOP CONTROLS BAR (hidden sm:flex) */}
              <div className="hidden sm:flex flex-wrap items-center justify-between gap-3">
                {/* Play / Pause & Mute controls */}
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={togglePlay}
                    aria-label={isPlaying ? "Pause video" : "Play video"}
                    title={isPlaying ? "Pause" : "Play"}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-portfolio-gold/30 bg-black/60 text-portfolio-gold transition-colors hover:border-portfolio-gold hover:bg-portfolio-gold/20"
                  >
                    {isPlaying ? (
                      <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
                    ) : (
                      <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={toggleMute}
                    aria-label={isMuted ? "Unmute sound" : "Mute sound"}
                    title={isMuted ? "Unmute sound" : "Mute sound"}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-portfolio-gold/30 bg-black/60 text-portfolio-gold transition-colors hover:border-portfolio-gold hover:bg-portfolio-gold/20"
                  >
                    {isMuted ? (
                      <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/></svg>
                    ) : (
                      <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>
                    )}
                  </button>
                </div>

                {/* Fast Forward & Rewind (-10s, -5s, +5s, +10s) */}
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <button
                    type="button"
                    onClick={() => seekRelative(-10)}
                    title="Rewind 10 seconds"
                    aria-label="Rewind 10 seconds"
                    className="inline-flex items-center gap-1 rounded-lg border border-portfolio-border bg-black/60 px-2.5 py-1.5 text-xs font-semibold text-portfolio-fg transition-colors hover:border-portfolio-gold hover:text-portfolio-gold"
                  >
                    <span>↺</span>
                    <span>-10s</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => seekRelative(-5)}
                    title="Rewind 5 seconds"
                    aria-label="Rewind 5 seconds"
                    className="inline-flex items-center gap-1 rounded-lg border border-portfolio-border bg-black/60 px-2.5 py-1.5 text-xs font-semibold text-portfolio-fg transition-colors hover:border-portfolio-gold hover:text-portfolio-gold"
                  >
                    <span>-5s</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => seekRelative(5)}
                    title="Fast forward 5 seconds"
                    aria-label="Fast forward 5 seconds"
                    className="inline-flex items-center gap-1 rounded-lg border border-portfolio-border bg-black/60 px-2.5 py-1.5 text-xs font-semibold text-portfolio-fg transition-colors hover:border-portfolio-gold hover:text-portfolio-gold"
                  >
                    <span>+5s</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => seekRelative(10)}
                    title="Fast forward 10 seconds"
                    aria-label="Fast forward 10 seconds"
                    className="inline-flex items-center gap-1 rounded-lg border border-portfolio-border bg-black/60 px-2.5 py-1.5 text-xs font-semibold text-portfolio-fg transition-colors hover:border-portfolio-gold hover:text-portfolio-gold"
                  >
                    <span>+10s</span>
                    <span>↻</span>
                  </button>
                </div>

                {/* Speed Controller & Fullscreen / Minimize button */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center rounded-lg border border-portfolio-border bg-black/60 p-0.5 text-xs">
                    {[1, 1.25, 1.5, 2].map((rate) => (
                      <button
                        key={rate}
                        type="button"
                        onClick={() => changeSpeed(rate)}
                        className={`rounded px-2 py-1 font-semibold transition-colors ${
                          playbackRate === rate
                            ? "bg-portfolio-gold text-black shadow"
                            : "text-portfolio-muted hover:text-white"
                        }`}
                      >
                        {rate}x
                      </button>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={toggleFullscreen}
                    aria-label={isFullscreen ? "Minimize / Exit Fullscreen" : "Full Screen"}
                    title={isFullscreen ? "Minimize / Exit Fullscreen" : "Full Screen"}
                    className="flex h-9 items-center justify-center gap-1.5 rounded-lg border border-portfolio-gold/40 bg-portfolio-gold/10 px-3 text-xs font-bold uppercase tracking-wider text-portfolio-gold transition-colors hover:bg-portfolio-gold hover:text-black"
                  >
                    {isFullscreen ? (
                      <>
                        <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                          <path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"/>
                        </svg>
                        <span className="hidden sm:inline">Minimize</span>
                      </>
                    ) : (
                      <>
                        <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                          <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>
                        </svg>
                        <span className="hidden sm:inline">Full Screen</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WayCard({
  number,
  title,
  subtitle,
  points,
  accent = false,
}: {
  number: string;
  title: string;
  subtitle: string;
  points: string[];
  accent?: boolean;
}) {
  return (
    <article
      className={`rounded-[20px] sm:rounded-[24px] border p-4 sm:p-8 ${
        accent
          ? "border-portfolio-gold/60 bg-[linear-gradient(180deg,_rgba(212,175,55,0.12),_rgba(17,17,17,0.95))]"
          : "border-portfolio-border bg-portfolio-card"
      }`}
    >
      <div className="mb-3 flex items-center gap-2.5 sm:mb-4 sm:gap-3">
        <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-portfolio-gold bg-portfolio-gold/10 text-xs sm:text-sm font-bold text-portfolio-gold">
          {number}
        </div>
        <div className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-portfolio-gold">
          {number === "BONUS" ? "EXCLUSIVE BONUS" : `MONETIZATION PATH ${number}`}
        </div>
      </div>
      <h3 className="text-lg font-bold uppercase tracking-tight text-white sm:text-2xl">{title}</h3>
      <p className="mt-2 text-xs leading-relaxed text-portfolio-muted sm:mt-3 sm:text-base">{subtitle}</p>

      <ul className="mt-4 space-y-2.5 text-xs leading-relaxed text-portfolio-fg sm:mt-6 sm:space-y-3 sm:text-base">
        {points.map((point) => (
          <li key={point} className="flex items-start gap-2.5 sm:gap-3">
            <span className="mt-1 flex h-2 w-2 shrink-0 rounded-full bg-portfolio-gold" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function AudienceTargetCard({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3 rounded-[18px] sm:rounded-[22px] border border-portfolio-border bg-portfolio-card p-4 sm:p-6">
      <div className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-full border border-portfolio-gold/50 bg-portfolio-gold/10 text-xs sm:text-sm font-bold text-portfolio-gold">
        ✓
      </div>
      <p className="text-xs leading-relaxed text-portfolio-fg sm:text-base">{text}</p>
    </div>
  );
}

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "How do I get access to the training?",
      a: "Click the 'BUY VIA WHATSAPP' button on this page. You'll be connected directly to WhatsApp where you will receive immediate access to the training and support group.",
    },
    {
      q: "What if I don't have any digital skill right now?",
      a: "No problem at all! Even if you don't have any skill, you will be taught high-demand skills (such as Facebook Ads, Vibe Coding, Ghostwriting, Google Ads, Branding, AI Automation & Agent Building) for free inside the course.",
    },
    {
      q: "Should I execute all 5 monetization paths?",
      a: "No! As King Ezekiel advises in the training video, do NOT attempt all 5 at once. Watch the orientation video where King Ezekiel breaks down which specific path aligns best with your situation and focus on that single path.",
    },
    {
      q: "Can I do this using my smartphone?",
      a: "Yes. All training videos, guidance, and monetization methods can be followed using a smartphone or laptop.",
    },
  ];

  return (
    <div className="space-y-2.5 sm:space-y-3">
      {faqs.map((item, index) => {
        const isOpen = index === openIndex;

        return (
          <div key={item.q} className="rounded-xl sm:rounded-2xl border border-portfolio-border bg-portfolio-card">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left sm:px-6 sm:py-4"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span className="text-sm font-semibold text-white sm:text-lg">{item.q}</span>
              <span
                className={`flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-full border border-portfolio-border text-lg sm:text-xl text-portfolio-gold transition-transform ${
                  isOpen ? "rotate-45" : "rotate-0"
                }`}
              >
                +
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-4 pb-4 text-xs leading-relaxed text-portfolio-muted sm:px-6 sm:pb-5 sm:text-base">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-portfolio-border py-6 sm:py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 text-center text-xs sm:text-sm text-portfolio-muted sm:px-6 md:flex-row md:text-left lg:px-8">
        <div>
          <div className="text-sm font-semibold text-white sm:text-base">5 Ways Monetization</div>
          <div className="mt-1">King Ezekiel • 5 Ways Nigerians Monetize Skills</div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:justify-end">
          <span>© 2026</span>
          <a href="#" className="transition-colors hover:text-portfolio-gold">
            Privacy Policy
          </a>
          <a href="#" className="transition-colors hover:text-portfolio-gold">
            Terms &amp; Conditions
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function AdBuildCommunityLandingPage() {
  const ways = [
    {
      number: "1",
      title: "SELLING KNOWLEDGE: COURSES & EBOOKS",
      subtitle: "Create once, package cleanly, and earn continuous passive income online.",
      points: [
        "Create, Package, Sell and Earn selling courses online",
        "Create, Package, Sell and Earn selling PDFs Online",
      ],
    },
    {
      number: "2",
      title: "CLASSES: WEBINARS",
      subtitle: "Organize impactful online sessions and get paid for providing direct value.",
      points: [
        "Promote & Organise successful webinars",
      ],
    },
    {
      number: "3",
      title: "CONSULTATION",
      subtitle: "Stop giving advice for free—position yourself and get paid for your expertise.",
      points: [
        "Offer professional advice and earn from it",
      ],
    },
    {
      number: "4",
      title: "E-COMMERCE",
      subtitle: "Build physical product revenue streams with simple, proven systems.",
      points: [
        "Dropshipping",
        "Arbitrage",
        "Importation",
      ],
    },
    {
      number: "5",
      title: "SERVICES: FREELANCING",
      subtitle: "Offer high-demand services to international and local high-paying clients.",
      points: [
        "Upwork",
        "Untapped Markets: X, LinkedIn, Facebook, Instagram & Google",
        "Proposal drafting like A Professional",
        "Choose A Skill: Professional Advertising or Vibe Coding: Full-Stack Web Development With AI Course",
      ],
    },
    {
      number: "BONUS",
      title: "BONUS: YOUTUBE MONETIZATION & AI ANIMATION",
      subtitle: "Turn video content into continuous revenue streams with YouTube monetization and AI animation.",
      points: [
        "Monetize YouTube channels with high-value content strategy",
        "Create engaging AI animated videos effortlessly",
        "Build recurring monthly earnings from video views and sponsorships",
      ],
      accent: true,
    },
  ];

  const bonusSkills = [
    "1. Professional Meta (Facebook) Advertising — HIGH DEMAND",
    "2. Ghostwriting Playbook — HIGH DEMAND",
    "3. Full-Stack Web Development With AI (Vibe Coding) — HIGH DEMAND",
    "4. Branding & Graphic Design With AI — HIGH DEMAND",
    "5. Professional Google Advertising — HIGH DEMAND",
    "6. AI Automation & Agent Building — HIGH DEMAND",
  ];

  const studentProofImages = [
    "/wp-content/uploads/2026/01/photo_2026-01-05-6.26.48-PM.jpeg",
    "/wp-content/uploads/2026/01/photo_2026-01-05-6.26.42-PM.jpeg",
    "/wp-content/uploads/2026/01/photo_2026-01-05-6.26.46-PM-1.jpeg",
    "/wp-content/uploads/2026/01/photo_2026-01-05-6.26.49-PM-1.jpeg",
  ];

  return (
    <main className="min-h-screen bg-portfolio-bg selection:bg-portfolio-gold selection:text-black font-sans pb-16 sm:pb-0">
      <div className="mx-auto max-w-[1400px] border-x border-portfolio-border bg-portfolio-bg p-0 shadow-[0_0_30px_rgba(0,0,0,0.35)]">
        <Hero />

        <VideoSection />

        {/* CALL TO ACTION BANNER */}
        <section className="py-4 sm:py-8">
          <div className="mx-auto max-w-3xl px-3 text-center sm:px-6 lg:px-8">
            <CTAButton className="w-full sm:w-auto text-sm py-4 px-6 sm:py-5 sm:px-8" />
            <p className="mt-2.5 text-xs text-portfolio-muted sm:mt-3 sm:text-sm">
              Instant WhatsApp Access + Support Group
            </p>
          </div>
        </section>

        {/* THIS TRAINING IS FOR YOU IF */}
        <section className="py-8 sm:py-16">
          <div className="mx-auto max-w-6xl px-3 sm:px-6 lg:px-8">
            <div className="mb-6 text-center sm:mb-8">
              <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.24em] text-portfolio-gold">
                TARGET AUDIENCE
              </p>
              <h2 className="mt-1.5 text-2xl font-bold tracking-[-0.03em] text-white sm:text-4xl md:text-5xl">
                THIS TRAINING IS FOR YOU IF:
              </h2>
            </div>

            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3 sm:gap-4">
              <AudienceTargetCard text="You're tired of low-paying jobs and want a real, high-income skill." />
              <AudienceTargetCard text="You need a side hustle or passive income that doesn't feel like a struggle." />
              <AudienceTargetCard text="You are a Freelancer stuck at low rates and want to transition to high-ticket Consultation." />
              <AudienceTargetCard text="You want to learn the 5 specific ways Nigerians are quietly dominating the global market." />
              <AudienceTargetCard text="You believe wealth on the internet is vast and you are finally ready to unlock your portion." />
              <AudienceTargetCard text="You want a proven structure, feedback, and real examples to guide your growth." />
            </div>
          </div>
        </section>

        {/* THE 5 MONETIZATION WAYS */}
        <section id="ways" className="py-8 sm:py-16">
          <div className="mx-auto max-w-6xl px-3 sm:px-6 lg:px-8">
            <div className="mb-6 text-center sm:mb-8">
              <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.24em] text-portfolio-gold">
                CURRICULUM &amp; BLUEPRINT
              </p>
              <h2 className="mt-1.5 text-2xl font-bold tracking-[-0.03em] text-white sm:text-4xl md:text-5xl">
                5 WAYS NIGERIANS MONETIZE THEIR SKILLS TO EARN ₦1M TO ₦3M MONTHLY
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-xs text-portfolio-muted sm:text-base md:text-lg">
                The 5 Ways to Monetize Your Skill — With Structure, Feedback, and Real Examples
              </p>
            </div>

            <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
              {ways.map((way) => (
                <WayCard key={way.title} {...way} />
              ))}
            </div>
          </div>
        </section>

        {/* BONUS SECTION: YOU HAVE NO SKILL? FEAR NOT */}
        <section className="py-8 sm:py-16">
          <div className="mx-auto max-w-5xl px-3 sm:px-6 lg:px-8">
            <div className="rounded-[22px] sm:rounded-[28px] border-2 border-portfolio-gold bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.18),_rgba(17,17,17,0.95))] p-5 sm:p-10 md:p-12 text-center">
              <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.24em] text-portfolio-gold">
                SPECIAL BONUS
              </p>
              <h2 className="mt-2 text-2xl font-extrabold text-white sm:text-4xl md:text-5xl">
                YOU HAVE NO SKILL?? FEAR NOT!
              </h2>
              <p className="mx-auto mt-3 max-w-3xl text-sm font-semibold leading-relaxed text-portfolio-fg sm:text-xl">
                Even if you do not have skill, you would be taught one! That’s how stubborn we are to see you win!
              </p>
              <p className="mt-1.5 text-xs text-portfolio-muted sm:text-base">
                No theory. No hype. Just a skill you can actually monetize.
              </p>

              <div className="mt-6 grid gap-2.5 text-left sm:mt-8 sm:grid-cols-2 md:grid-cols-3">
                {bonusSkills.map((skill) => (
                  <div key={skill} className="rounded-xl sm:rounded-2xl border border-portfolio-gold/30 bg-portfolio-card/80 p-3 sm:p-4 text-xs sm:text-sm font-medium text-white">
                    {skill}
                  </div>
                ))}
              </div>

              <div className="mt-6 sm:mt-8 flex justify-center">
                <CTAButton className="w-full sm:w-auto" />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section id="faq" className="py-8 sm:py-16">
          <div className="mx-auto max-w-4xl px-3 sm:px-6 lg:px-8">
            <div className="mb-6 text-center sm:mb-8">
              <h2 className="text-2xl font-bold tracking-[-0.03em] text-white sm:text-4xl md:text-5xl">
                Frequently Asked Questions
              </h2>
            </div>
            <FAQAccordion />
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-10 sm:py-18">
          <div className="mx-auto max-w-5xl px-3 text-center sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold tracking-[-0.03em] text-white sm:text-5xl md:text-6xl">
              Ready to Monetize Your Skills &amp; Earn Monthly?
            </h2>
            <p className="mx-auto mt-3 max-w-3xl text-xs leading-relaxed text-portfolio-muted sm:mt-5 sm:text-lg">
              Get full access to the 5 Ways Monetization blueprint and free skill classes today.
            </p>
            <div className="mt-6 flex justify-center sm:mt-8">
              <CTAButton className="w-full sm:w-auto" />
            </div>
            <p className="mt-3 text-[10px] sm:text-xs text-portfolio-muted">
              This site is independent of Facebook. It is not endorsed, sponsored, or connected to Facebook or Meta, Inc.
            </p>
          </div>
        </section>

        <Footer />
      </div>

      {/* STICKY MOBILE CONVERSION BAR */}
      <div className="fixed bottom-0 left-0 right-0 z-40 flex items-center justify-between gap-3 border-t border-portfolio-gold/30 bg-black/90 px-4 py-3 backdrop-blur-md shadow-[0_-10px_25px_rgba(0,0,0,0.8)] sm:hidden">
        <div className="flex flex-col text-left">
          <span className="text-[10px] font-bold uppercase tracking-wider text-portfolio-gold">5 Ways Monetization</span>
          <span className="text-xs font-semibold text-white">Instant Access</span>
        </div>
        <CTAButton className="px-4 py-2.5 text-[11px]" />
      </div>
    </main>
  );
}
