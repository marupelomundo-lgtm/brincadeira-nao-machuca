import React, { useState, useEffect } from 'react';
import {
  Play,
  Pause,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  Eye,
  Volume2,
  AlertTriangle,
  Lightbulb,
  Sparkles,
  Clock,
  Music,
  Square,
} from 'lucide-react';
import { SlideData } from '../types/presentation';
import { scenicAudio } from '../utils/scenicAudio';

interface PresenterModeProps {
  slides: SlideData[];
  currentSlideIndex: number;
  setCurrentSlideIndex: (index: number) => void;
  durationMinutes: number;
  presenterName: string;
}

export const PresenterMode: React.FC<PresenterModeProps> = ({
  slides,
  currentSlideIndex,
  setCurrentSlideIndex,
  durationMinutes,
  presenterName,
}) => {
  const [secondsElapsed, setSecondsElapsed] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [pauseTimer, setPauseTimer] = useState<number | null>(null);
  const [activeSound, setActiveSound] = useState<'none' | 'tension' | 'chime' | 'hope'>('none');

  const currentSlide = slides[currentSlideIndex];
  const nextSlide = slides[currentSlideIndex + 1];
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

  // Stopwatch timer
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setSecondsElapsed((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerRunning]);

  // Suggested pause countdown
  useEffect(() => {
    let timeout: NodeJS.Timeout | null = null;
    if (pauseTimer !== null && pauseTimer > 0) {
      timeout = setTimeout(() => {
        setPauseTimer(pauseTimer - 1);
      }, 1000);
    } else if (pauseTimer === 0) {
      timeout = setTimeout(() => setPauseTimer(null), 1200);
    }
    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [pauseTimer]);

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remSecs = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${remSecs.toString().padStart(2, '0')}`;
  };

  const totalTargetSeconds = durationMinutes * 60;
  const progressPercent = Math.min(100, (secondsElapsed / totalTargetSeconds) * 100);

  const triggerPause = (sec: number) => {
    setPauseTimer(sec);
    scenicAudio.playSolemnChime();
    setActiveSound('chime');
    setTimeout(() => setActiveSound('none'), 5500);
  };

  return (
    <div className="w-full h-full flex flex-col bg-slate-950 p-4 lg:p-6 overflow-y-auto">
      {/* Top Teleprompter Header: Timer & Status */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-slate-900 border border-slate-800 rounded-xl mb-4">
        <div className="flex items-center gap-3">
          <div className="text-xs uppercase tracking-wider text-slate-400 font-medium">
            Modo Apresentador · {presenterName}
          </div>
          <span className="text-slate-600" aria-hidden="true">·</span>
          <span className="text-xs text-amber-400 font-semibold">{currentSlide.actTitle}</span>
        </div>

        {/* Stopwatch & Scenic Soundscape Control */}
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2 font-mono text-xl font-bold tracking-tight text-white bg-slate-950 px-3 py-1 rounded-lg border border-slate-800">
            <Clock className="w-4 h-4 text-amber-400" />
            <span>{formatTime(secondsElapsed)}</span>
            <span className="text-xs font-normal text-slate-500">/ {durationMinutes}:00</span>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setIsTimerRunning(!isTimerRunning)}
              className={`p-2 rounded-lg text-xs font-medium flex items-center gap-1 transition-colors ${
                isTimerRunning
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                  : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
              }`}
            >
              {isTimerRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span>{isTimerRunning ? 'Pausar' : 'Iniciar'}</span>
            </button>
            <button
              onClick={() => {
                setIsTimerRunning(false);
                setSecondsElapsed(0);
              }}
              title="Zerar cronômetro"
              className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Quick Scenic Audio Buttons */}
          <div className="hidden md:flex items-center gap-1 bg-slate-950 p-1 rounded-lg border border-slate-800 text-[11px]">
            <span className="px-2 text-slate-500 flex items-center gap-1 font-mono">
              <Music className="w-3 h-3 text-amber-400" /> Som Cênico:
            </span>
            <button
              onClick={() => handlePlayScenicSound('tension')}
              title="Drone de suspense/tensão para abertura"
              className={`px-2 py-1 rounded font-medium transition-colors ${
                activeSound === 'tension'
                  ? 'bg-amber-400 text-slate-950 font-bold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Drone Entrada
            </button>
            <button
              onClick={() => handlePlayScenicSound('chime')}
              title="Sino para os 5 segundos de silêncio"
              className={`px-2 py-1 rounded font-medium transition-colors ${
                activeSound === 'chime'
                  ? 'bg-amber-400 text-slate-950 font-bold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Sino 5s
            </button>
            <button
              onClick={() => handlePlayScenicSound('hope')}
              title="Acorde inspirador para o encerramento"
              className={`px-2 py-1 rounded font-medium transition-colors ${
                activeSound === 'hope'
                  ? 'bg-amber-400 text-slate-950 font-bold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Acorde Final
            </button>
            {activeSound !== 'none' && (
              <button
                onClick={() => {
                  scenicAudio.stopCurrent();
                  setActiveSound('none');
                }}
                className="p-1 rounded text-rose-400 hover:text-rose-300"
                title="Parar som"
              >
                <Square className="w-3 h-3 fill-current" />
              </button>
            )}
          </div>
        </div>

        {/* Slide navigation controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrentSlideIndex(Math.max(0, currentSlideIndex - 1))}
            disabled={currentSlideIndex === 0}
            className="px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 disabled:opacity-30 disabled:pointer-events-none flex items-center gap-1"
          >
            <ChevronLeft className="w-4 h-4" /> Anterior
          </button>
          <span className="text-xs font-mono font-medium text-slate-300 px-2">
            {currentSlideIndex + 1} / {totalSlides}
          </span>
          <button
            onClick={() => setCurrentSlideIndex(Math.min(totalSlides - 1, currentSlideIndex + 1))}
            disabled={currentSlideIndex === totalSlides - 1}
            className="px-3 py-1.5 text-xs font-medium rounded-lg bg-amber-500 text-slate-950 font-semibold hover:bg-amber-400 disabled:opacity-30 disabled:pointer-events-none flex items-center gap-1"
          >
            Próximo <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Progress Bar of Time Elapsed */}
      <div className="w-full bg-slate-900 rounded-full h-1.5 mb-4 overflow-hidden border border-slate-800/80">
        <div
          className={`h-full transition-all duration-300 ${
            progressPercent > 90 ? 'bg-rose-500' : progressPercent > 75 ? 'bg-amber-400' : 'bg-emerald-400'
          }`}
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Split Screen Grid: Visuals on Left/Top, Notes on Right/Bottom */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 flex-1">
        {/* Left Column: Slide Previews (Current + Next) */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          {/* Current Slide Display */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 flex flex-col">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
              <span className="font-semibold text-amber-300">EM EXIBIÇÃO NO TELÃO</span>
              <span className="font-mono">Slide #{currentSlide.number}</span>
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden bg-slate-950 border border-slate-800/80 flex items-center justify-center p-4 text-center">
              {currentSlide.imageSrc && (
                <img
                  src={currentSlide.imageSrc}
                  alt={currentSlide.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-25"
                />
              )}
              <div className="relative z-10">
                <div className="text-sm font-serif font-bold text-white line-clamp-2 mb-1">
                  {currentSlide.onScreenText}
                </div>
                {currentSlide.subtitle && (
                  <div className="text-[11px] text-slate-400 line-clamp-2">{currentSlide.subtitle}</div>
                )}
              </div>
            </div>
            <div className="mt-2 text-[11px] text-slate-400 leading-tight">
              <span className="text-amber-400 font-medium">Função:</span> {currentSlide.narrativeFunction}
            </div>
          </div>

          {/* Next Slide Preview */}
          {nextSlide ? (
            <div className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-3 flex flex-col">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                <span className="text-slate-300">A SEGUIR (PRÓXIMO)</span>
                <span className="font-mono text-slate-500">Slide #{nextSlide.number}</span>
              </div>
              <div className="relative aspect-video rounded-lg overflow-hidden bg-slate-950 border border-slate-800/60 flex items-center justify-center p-4 text-center opacity-80">
                <div className="relative z-10">
                  <div className="text-xs font-serif font-bold text-slate-200 line-clamp-2">
                    {nextSlide.onScreenText}
                  </div>
                </div>
              </div>
              <div className="mt-2 text-[11px] text-slate-500">
                Transição mental: antecipe o tom do próximo bloco.
              </div>
            </div>
          ) : (
            <div className="bg-slate-900/40 border border-slate-800/60 rounded-xl p-4 text-center text-xs text-slate-500">
              Último slide da apresentação. Prepare o fechamento com reverência.
            </div>
          )}

          {/* Pause Timer Feature */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 flex items-center justify-between">
            <div className="text-xs">
              <div className="font-medium text-slate-200">Pausa Cênica Indicada:</div>
              <div className="text-slate-400">{currentSlide.notes.suggestedPauseSec} segundos de silêncio</div>
            </div>
            <button
              onClick={() => triggerPause(currentSlide.notes.suggestedPauseSec)}
              className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-300 border border-slate-700 transition-colors"
            >
              {pauseTimer !== null ? `Silêncio: ${pauseTimer}s` : 'Disparar Silêncio'}
            </button>
          </div>
        </div>

        {/* Right Column: Complete Stage Notes & Teleprompter */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          {/* Slide Advance & Trigger Cue Banner */}
          <div className="bg-slate-900 border border-amber-500/40 rounded-xl p-4 shadow-sm flex flex-col gap-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-mono text-amber-400 font-semibold uppercase flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Sincronia Cênica · {currentSlide.actTitle}
              </span>
              <span className="text-[11px] text-slate-400 font-mono">
                Slide #{currentSlide.number} de {totalSlides}
              </span>
            </div>

            <div className="text-xs text-slate-300">
              <strong className="text-amber-300">Frase em que este slide entra:</strong>{' '}
              <span className="italic font-serif text-slate-100">
                “{currentSlide.slideTriggerPhrase || currentSlide.notes.spokenText}”
              </span>
            </div>

            <div className="text-xs text-slate-300 pt-1.5 border-t border-slate-800">
              <strong className="text-emerald-400">Quando avançar para o próximo slide:</strong>{' '}
              <span className="text-slate-200">
                {currentSlide.whenToAdvance || 'Avance para o próximo slide ao concluir este raciocínio.'}
              </span>
            </div>
          </div>

          {/* Main Spoken Text Box */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-sm">
            <div className="flex items-center justify-between mb-3 border-b border-slate-800 pb-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wide">
                <Volume2 className="w-4 h-4" />
                <span>Texto Falado Sugerido (Roteiro de Palco)</span>
              </div>
              <span className="text-xs text-slate-500">Ritmo: {currentSlide.notes.rhythm}</span>
            </div>

            <p className="text-base sm:text-lg text-slate-100 font-light leading-relaxed mb-4">
              “{currentSlide.notes.spokenText}”
            </p>

            {/* Words to emphasize */}
            <div className="flex flex-wrap items-center gap-1.5 text-xs">
              <span className="text-slate-400 font-medium">Palavras com ênfase de voz:</span>
              {currentSlide.notes.wordsToEmphasize.map((word, wIdx) => (
                <span
                  key={wIdx}
                  className="px-2 py-0.5 rounded bg-amber-400/10 text-amber-300 border border-amber-400/20 font-medium"
                >
                  {word}
                </span>
              ))}
            </div>
          </div>

          {/* Scenic Intent & Staging Directives Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {/* Intention & Eye Contact */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-300 mb-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Intenção Emocional</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {currentSlide.notes.emotionalIntent}
              </p>
              <div className="mt-3 pt-2 border-t border-slate-800/80 flex items-start gap-2 text-xs text-slate-400">
                <Eye className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
                <span><strong className="text-slate-300">Onde olhar:</strong> {currentSlide.notes.whereToLook}</span>
              </div>
            </div>

            {/* Pitfalls & Dispersal Recovery */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-rose-300 mb-2">
                <AlertTriangle className="w-4 h-4 text-rose-400" />
                <span>Evitar Esse Erro</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mb-2">
                {currentSlide.notes.misinterpretationRisk}
              </p>
              <div className="pt-2 border-t border-slate-800/80 flex items-start gap-2 text-xs text-amber-300">
                <Lightbulb className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span><strong className="text-amber-200">Se dispersar:</strong> {currentSlide.notes.recoveryAttentionTip}</span>
              </div>
            </div>
          </div>

          {/* Interactive signal if exists */}
          {currentSlide.interactiveSignal && (
            <div className="p-3.5 bg-amber-500/10 border border-amber-500/30 rounded-xl flex items-start gap-3">
              <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div className="text-xs">
                <div className="font-semibold text-amber-300 mb-0.5">
                  Interação Programada com os Estudantes:
                </div>
                <div className="text-slate-200 font-medium">{currentSlide.interactiveSignal.prompt}</div>
                <div className="text-slate-400">{currentSlide.interactiveSignal.instruction}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
