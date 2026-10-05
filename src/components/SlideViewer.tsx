import React, { useEffect, useState, useRef } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  Clock,
  Sparkles,
  Info,
  Music,
  Square,
} from 'lucide-react';
import { SlideData } from '../types/presentation';
import { scenicAudio } from '../utils/scenicAudio';

interface SlideViewerProps {
  slides: SlideData[];
  currentSlideIndex: number;
  setCurrentSlideIndex: (index: number) => void;
  durationMinutes: number;
  presenterName: string;
  schoolName: string;
}

export const SlideViewer: React.FC<SlideViewerProps> = ({
  slides,
  currentSlideIndex,
  setCurrentSlideIndex,
  durationMinutes,
  presenterName,
  schoolName,
}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showThumbnails, setShowThumbnails] = useState(false);
  const [activeSound, setActiveSound] = useState<'none' | 'tension' | 'chime' | 'hope'>('none');
  const containerRef = useRef<HTMLDivElement>(null);

  const currentSlide = slides[currentSlideIndex];
  const totalSlides = slides.length;

  const handlePlayScenicSound = (type: 'tension' | 'chime' | 'hope') => {
    if (activeSound === type) {
      scenicAudio.stopCurrent();
      setActiveSound('none');
    } else {
      if (type === 'tension') scenicAudio.playTensionDrone();
      if (type === 'chime') scenicAudio.playSolemnChime();
      if (type === 'hope') scenicAudio.playHopeChord();
      setActiveSound(type);
    }
  };

  const nextSlide = () => {
    if (currentSlideIndex < totalSlides - 1) {
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(currentSlideIndex - 1);
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen?.();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen?.();
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        prevSlide();
      } else if (e.key === 'f' || e.key === 'F') {
        e.preventDefault();
        toggleFullscreen();
      } else if (e.key === 'Home') {
        e.preventDefault();
        setCurrentSlideIndex(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        setCurrentSlideIndex(totalSlides - 1);
      }
    };

    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, [currentSlideIndex, totalSlides]);

  // Calculate estimated accumulated time
  const accumulatedTime = slides
    .slice(0, currentSlideIndex + 1)
    .reduce((acc, s) => acc + (durationMinutes === 40 ? s.durationMinutes40 : s.durationMinutes60), 0);

  return (
    <div
      ref={containerRef}
      className={`relative flex flex-col justify-between w-full h-full bg-slate-950 select-none overflow-hidden ${
        isFullscreen ? 'p-0' : 'p-4 lg:p-6'
      }`}
    >
      {/* Upper Status Line */}
      <div className="flex items-center justify-between px-4 py-2 text-xs text-slate-400 bg-slate-900/60 rounded-lg border border-slate-800/80 mb-3">
        <div className="flex items-center gap-3">
          <span className="font-semibold text-amber-400">{currentSlide.actTitle}</span>
          <span className="text-slate-600" aria-hidden="true">·</span>
          <span>Slide {currentSlideIndex + 1} de {totalSlides}</span>
          <span className="hidden md:inline text-slate-600" aria-hidden="true">·</span>
          <span className="hidden md:inline text-slate-400 truncate max-w-[280px]">{schoolName}</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-1 bg-slate-950 px-2 py-0.5 rounded border border-slate-800 text-[11px]">
            <Music className="w-3 h-3 text-amber-400" />
            <button
              onClick={() => handlePlayScenicSound('tension')}
              className={`px-1.5 py-0.5 rounded ${
                activeSound === 'tension' ? 'bg-amber-400 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
              }`}
              title="Drone de suspense de abertura"
            >
              Drone
            </button>
            <button
              onClick={() => handlePlayScenicSound('chime')}
              className={`px-1.5 py-0.5 rounded ${
                activeSound === 'chime' ? 'bg-amber-400 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
              }`}
              title="Sino para os 5s de silêncio"
            >
              Sino
            </button>
            <button
              onClick={() => handlePlayScenicSound('hope')}
              className={`px-1.5 py-0.5 rounded ${
                activeSound === 'hope' ? 'bg-amber-400 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
              }`}
              title="Acorde de encerramento"
            >
              Final
            </button>
            {activeSound !== 'none' && (
              <button
                onClick={() => {
                  scenicAudio.stopCurrent();
                  setActiveSound('none');
                }}
                className="p-0.5 text-rose-400 hover:text-rose-300"
                title="Parar áudio"
              >
                <Square className="w-2.5 h-2.5 fill-current" />
              </button>
            )}
          </div>
          <div className="flex items-center gap-1.5 text-slate-300">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            <span>~{Math.round(accumulatedTime)}m de {durationMinutes}m</span>
          </div>
          <button
            onClick={toggleFullscreen}
            className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
            title="Tela cheia (Atalho: F)"
          >
            {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            <span className="hidden sm:inline">{isFullscreen ? 'Sair' : 'Tela Cheia (F)'}</span>
          </button>
        </div>
      </div>

      {/* 16:9 Stage Viewport Container */}
      <div className="relative flex-1 w-full max-w-6xl mx-auto aspect-video rounded-xl overflow-hidden border border-slate-800/80 bg-slate-900 shadow-2xl flex items-center justify-center">
        {/* Background Image / Visual Theme */}
        {currentSlide.imageSrc ? (
          <div className="absolute inset-0 w-full h-full">
            <img
              src={currentSlide.imageSrc}
              alt={currentSlide.imageAlt || currentSlide.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover opacity-35 filter brightness-75 contrast-125"
            />
            {/* Scrim Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/40" />
          </div>
        ) : (
          <div className="absolute inset-0 bg-radial from-slate-900 via-slate-950 to-black opacity-90" />
        )}

        {/* Ambient Glow */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Stage Content */}
        <div className="relative z-10 w-full max-w-4xl px-8 sm:px-14 py-8 text-center flex flex-col items-center justify-center">
          {/* Subtle Act Pill */}
          <div className="text-xs uppercase tracking-widest text-amber-400/90 font-medium mb-4">
            {currentSlide.actTitle}
          </div>

          {/* Main Title / Big Text */}
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight max-w-3xl mb-6">
            {currentSlide.onScreenText.split('\n').map((line, idx) => (
              <span key={idx} className="block">
                {line}
              </span>
            ))}
          </h1>

          {/* Subtitle / Meaning */}
          {currentSlide.subtitle && (
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 font-light max-w-2xl leading-relaxed">
              {currentSlide.subtitle}
            </p>
          )}

          {/* Interactive Signal Indicator if present */}
          {currentSlide.interactiveSignal && (
            <div className="mt-8 flex items-center gap-2.5 px-4 py-2 bg-amber-400/10 border border-amber-400/30 rounded-lg text-amber-300 text-xs sm:text-sm animate-pulse">
              <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
              <span className="font-semibold">{currentSlide.interactiveSignal.prompt}</span>
              <span className="text-slate-300">{currentSlide.interactiveSignal.instruction}</span>
            </div>
          )}
        </div>

        {/* Floating Slide Watermark */}
        <div className="absolute bottom-4 right-6 text-[10px] text-slate-500 tracking-wider">
          A PLATEIA DECIDE · {presenterName.toUpperCase()}
        </div>

        {/* Left & Right Stage Click zones for mouse */}
        <button
          onClick={prevSlide}
          disabled={currentSlideIndex === 0}
          aria-label="Slide anterior"
          className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-950/60 hover:bg-slate-900 border border-slate-800/60 text-slate-300 hover:text-white disabled:opacity-20 disabled:pointer-events-none transition-all"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          disabled={currentSlideIndex === totalSlides - 1}
          aria-label="Próximo slide"
          className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-950/60 hover:bg-slate-900 border border-slate-800/60 text-slate-300 hover:text-white disabled:opacity-20 disabled:pointer-events-none transition-all"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Bottom Bar: Navigation and Thumbnails */}
      <div className="flex flex-col gap-2 mt-3 max-w-6xl mx-auto w-full">
        <div className="flex items-center justify-between px-2 text-xs">
          <div className="flex items-center gap-2 text-slate-400">
            <button
              onClick={() => setShowThumbnails(!showThumbnails)}
              className="text-xs text-amber-400 hover:text-amber-300 underline font-medium"
            >
              {showThumbnails ? 'Ocultar Miniaturas' : 'Ver Todas as Miniaturas (16)'}
            </button>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400">Teclas: ← Anterior | → Próximo | F Tela Cheia</span>
          </div>
          <div className="text-slate-400">
            Função: <span className="text-slate-200">{currentSlide.narrativeFunction}</span>
          </div>
        </div>

        {/* Thumbnail Filmstrip */}
        {showThumbnails && (
          <div className="flex items-center gap-2.5 overflow-x-auto p-2 bg-slate-900/90 rounded-lg border border-slate-800 scrollbar-thin">
            {slides.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setCurrentSlideIndex(idx)}
                className={`relative shrink-0 w-32 aspect-video rounded-md border overflow-hidden p-1.5 text-left transition-all ${
                  idx === currentSlideIndex
                    ? 'border-amber-400 bg-amber-950/40 ring-2 ring-amber-400/50'
                    : 'border-slate-800 bg-slate-950 hover:border-slate-700'
                }`}
              >
                <div className="text-[10px] font-mono text-amber-400/80 mb-0.5">#{s.number}</div>
                <div className="text-[10px] font-medium text-slate-200 line-clamp-2 leading-tight">
                  {s.title}
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
