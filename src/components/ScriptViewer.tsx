import React, { useState } from 'react';
import {
  BookOpen,
  Volume2,
  Clock,
  HelpCircle,
  ArrowRight,
  Sparkles,
  Layers,
  ChevronRight,
  Monitor,
  Calendar,
  AlertCircle,
  ListOrdered,
} from 'lucide-react';
import { ActData, SlideData } from '../types/presentation';

interface ScriptViewerProps {
  acts: ActData[];
  slides: SlideData[];
  onSelectSlide: (slideIndex: number) => void;
  durationMinutes: number;
}

export const ScriptViewer: React.FC<ScriptViewerProps> = ({
  acts,
  slides,
  onSelectSlide,
  durationMinutes,
}) => {
  const [viewMode, setViewMode] = useState<'script' | 'sync-map'>('sync-map');
  const [selectedActNumber, setSelectedActNumber] = useState<number | 'all'>('all');
  const [copiedAct, setCopiedAct] = useState<number | null>(null);

  const displayedActs =
    selectedActNumber === 'all'
      ? acts
      : acts.filter((a) => a.number === selectedActNumber);

  const handleCopy = (text: string, actNum: number) => {
    navigator.clipboard.writeText(text);
    setCopiedAct(actNum);
    setTimeout(() => setCopiedAct(null), 2000);
  };

  // Helper to render script with highlighted interactive slide tags
  const renderFormattedScript = (scriptText: string) => {
    const paragraphs = scriptText.split('\n\n');

    return paragraphs.map((para, pIdx) => {
      // Check if paragraph contains slide cue
      if (para.startsWith('[▶')) {
        const lines = para.split('\n');
        const cueLine = lines[0];
        const restLines = lines.slice(1).join('\n');

        // Extract slide number if possible (e.g. "[▶ AVANÇAR PARA SLIDE 2: ...]")
        const match = cueLine.match(/SLIDE\s+(\d+)/i);
        const slideNum = match ? parseInt(match[1], 10) : null;
        const slideIndex = slideNum ? slides.findIndex((s) => s.number === slideNum) : -1;

        return (
          <div key={pIdx} className="space-y-2 my-4">
            <div className="flex items-center justify-between p-3 rounded-lg bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-semibold">
              <div className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{cueLine.replace('[▶ ', '').replace(']', '')}</span>
              </div>
              {slideIndex >= 0 && (
                <button
                  onClick={() => onSelectSlide(slideIndex)}
                  className="px-2.5 py-1 text-xs rounded bg-amber-400 text-slate-950 font-bold hover:bg-amber-300 transition-colors shrink-0 flex items-center gap-1"
                >
                  <Monitor className="w-3.5 h-3.5" />
                  <span>Ver Slide #{slideNum}</span>
                </button>
              )}
            </div>
            {restLines && (
              <p className="text-slate-100 font-light leading-relaxed pl-3 border-l-2 border-slate-700">
                {restLines}
              </p>
            )}
          </div>
        );
      }

      // Dramatic pause line
      if (para.includes('(Pausa dramática') || para.includes('(Silêncio sagrado') || para.includes('(Silêncio de 5')) {
        return (
          <div
            key={pIdx}
            className="p-3 my-3 rounded-lg bg-slate-900 border border-slate-700/80 text-amber-300 font-mono text-xs flex items-center gap-2"
          >
            <Clock className="w-4 h-4 text-amber-400 shrink-0" />
            <span>{para}</span>
          </div>
        );
      }

      return (
        <p key={pIdx} className="text-slate-100 font-light leading-relaxed">
          {para}
        </p>
      );
    });
  };

  return (
    <div className="w-full h-full flex flex-col bg-slate-950 p-4 lg:p-6 overflow-y-auto">
      {/* Header and Filter */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-800 mb-6">
        <div>
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-amber-400 font-semibold mb-1">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Roteiro & Mapa de Troca de Slides</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-white">
            {viewMode === 'sync-map'
              ? 'Mapa de Sincronia: Quando Mudar de Slide (Atos × Slides)'
              : 'Texto Falado Integral dos 6 Atos com Gatilhos'}
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Descubra exatamente qual ato corresponde a cada slide e a frase exata para avançar a apresentação.
          </p>
        </div>

        {/* View Mode Toggle: Sync Map vs Full Script */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 p-1 bg-slate-900 rounded-lg border border-slate-800 text-xs">
            <button
              onClick={() => setViewMode('sync-map')}
              className={`px-3 py-1.5 font-medium rounded-md transition-colors whitespace-nowrap flex items-center gap-1.5 ${
                viewMode === 'sync-map'
                  ? 'bg-amber-400 text-slate-950 font-bold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <ListOrdered className="w-3.5 h-3.5" />
              <span>Mapa de Sincronia (Atos × Slides)</span>
            </button>
            <button
              onClick={() => setViewMode('script')}
              className={`px-3 py-1.5 font-medium rounded-md transition-colors whitespace-nowrap flex items-center gap-1.5 ${
                viewMode === 'script'
                  ? 'bg-amber-400 text-slate-950 font-bold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Roteiro Falado Cênico</span>
            </button>
          </div>
        </div>
      </div>

      {/* Answer to the user question in a highlighted alert card */}
      <div className="max-w-5xl mx-auto w-full mb-6 p-4 bg-amber-500/10 border border-amber-500/30 rounded-xl flex items-start gap-3">
        <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
        <div className="text-xs sm:text-sm">
          <div className="font-bold text-amber-300 mb-1">
            Como funciona a troca de slides na palestra? (Você NÃO fica no mesmo slide o ato todo!)
          </div>
          <p className="text-slate-200 leading-relaxed">
            A palestra é dividida em <strong>6 Atos Narrativos</strong>, e possui <strong>16 Slides</strong> no total. 
            Em cada ato, você falará uma parte da história e <strong>mudará de slide 2 a 3 vezes</strong> para pontuar visualmente o momento. 
            Veja abaixo o mapeamento exato de qual slide pertence a cada ato e a <strong>frase-gatilho</strong> em que você deve avançar:
          </p>
        </div>
      </div>

      {/* VIEW 1: MAPA DE SINCRONIA (ATOS × SLIDES) */}
      {viewMode === 'sync-map' && (
        <div className="max-w-5xl mx-auto w-full flex flex-col gap-8">
          {acts.map((act) => {
            const actSlides = slides.filter((s) => act.associatedSlideNumbers.includes(s.number));

            return (
              <div
                key={act.number}
                className="p-6 bg-slate-900 border border-slate-800 rounded-2xl flex flex-col gap-4 shadow-lg"
              >
                {/* Act Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-800">
                  <div>
                    <span className="text-xs font-mono text-amber-400 font-semibold uppercase">
                      ATO {act.number} · {durationMinutes === 40 ? act.duration40m : act.duration60m}
                    </span>
                    <h3 className="text-lg sm:text-xl font-serif font-bold text-white mt-0.5">
                      {act.title}
                    </h3>
                    <p className="text-xs text-slate-400 italic font-serif">{act.subtitle}</p>
                  </div>
                  <div className="text-xs text-slate-300 px-3 py-1 bg-slate-950 rounded-lg border border-slate-800">
                    Contém <strong className="text-amber-300">{actSlides.length} slides</strong> (Slides {act.associatedSlideNumbers.join(', ')})
                  </div>
                </div>

                {/* Slides Step-by-Step for this Act */}
                <div className="grid grid-cols-1 gap-4">
                  {actSlides.map((slide, sIdx) => {
                    const slideIndex = slides.findIndex((s) => s.id === slide.id);

                    return (
                      <div
                        key={slide.id}
                        className="p-4 bg-slate-950 rounded-xl border border-slate-800 hover:border-slate-700 transition-colors flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                      >
                        {/* Slide Info & Thumbnail Preview */}
                        <div className="flex items-start gap-4">
                          <div className="relative w-28 aspect-video rounded-lg overflow-hidden bg-slate-900 border border-slate-800 shrink-0 flex items-center justify-center p-1 text-center">
                            {slide.imageSrc && (
                              <img
                                src={slide.imageSrc}
                                alt={slide.title}
                                className="absolute inset-0 w-full h-full object-cover opacity-30"
                              />
                            )}
                            <span className="relative z-10 font-mono text-xs font-bold text-amber-400">
                              #{slide.number}
                            </span>
                          </div>

                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-mono px-2 py-0.5 rounded bg-amber-400/10 text-amber-300 font-semibold">
                                Slide #{slide.number}
                              </span>
                              <span className="text-xs text-slate-400">
                                ~{durationMinutes === 40 ? slide.durationMinutes40 : slide.durationMinutes60} min na tela
                              </span>
                            </div>
                            <h4 className="text-sm font-serif font-bold text-white mt-1">
                              {slide.title}
                            </h4>
                            <p className="text-xs text-slate-300 line-clamp-1 italic font-serif">
                              “{slide.onScreenText.replace('\n', ' ')}”
                            </p>
                          </div>
                        </div>

                        {/* Trigger Phrase & When to Change Instructions */}
                        <div className="flex-1 max-w-lg text-xs space-y-1.5 bg-slate-900/60 p-3 rounded-lg border border-slate-800">
                          <div>
                            <strong className="text-amber-300 font-medium">Frase-gatilho de entrada:</strong>{' '}
                            <span className="text-slate-200 italic font-serif">
                              “{slide.slideTriggerPhrase || slide.notes.spokenText}”
                            </span>
                          </div>
                          <div>
                            <strong className="text-emerald-400 font-medium">Quando mudar para o próximo:</strong>{' '}
                            <span className="text-slate-300">
                              {slide.whenToAdvance || 'Avance para o próximo slide ao terminar o raciocínio.'}
                            </span>
                          </div>
                        </div>

                        {/* Action to test slide */}
                        <button
                          onClick={() => onSelectSlide(slideIndex)}
                          className="px-3 py-1.5 text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg border border-slate-700 transition-colors shrink-0 flex items-center gap-1.5"
                        >
                          <Monitor className="w-3.5 h-3.5 text-amber-400" />
                          <span>Ver no Telão</span>
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* VIEW 2: ROTEIRO FALADO INTEGRAL CÊNICO */}
      {viewMode === 'script' && (
        <div className="flex flex-col gap-8 max-w-5xl mx-auto w-full">
          {/* Act Selector Segmented Control */}
          <div className="flex flex-wrap items-center gap-1 p-1 bg-slate-900 rounded-lg border border-slate-800 text-xs self-start">
            <button
              onClick={() => setSelectedActNumber('all')}
              className={`px-3 py-1.5 font-medium rounded-md transition-colors whitespace-nowrap ${
                selectedActNumber === 'all'
                  ? 'bg-amber-400 text-slate-950 shadow-sm font-semibold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Todos os 6 Atos
            </button>
            {acts.map((act) => (
              <button
                key={act.number}
                onClick={() => setSelectedActNumber(act.number)}
                className={`px-3 py-1.5 font-medium rounded-md transition-colors whitespace-nowrap ${
                  selectedActNumber === act.number
                    ? 'bg-amber-400 text-slate-950 shadow-sm font-semibold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Ato {act.number}
              </button>
            ))}
          </div>

          {displayedActs.map((act) => (
            <article
              key={act.number}
              className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 relative shadow-lg"
            >
              {/* Act Header Badge */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800/80 mb-5">
                <div>
                  <div className="text-xs font-mono text-amber-400 font-semibold uppercase tracking-wider mb-1">
                    ATO {act.number} · {durationMinutes === 40 ? act.duration40m : act.duration60m}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                    {act.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 font-light mt-1">
                    {act.subtitle}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleCopy(act.fullSpokenScript, act.number)}
                    className="px-3 py-1.5 text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg border border-slate-700 transition-colors"
                  >
                    {copiedAct === act.number ? 'Copiado!' : 'Copiar Texto do Ato'}
                  </button>
                </div>
              </div>

              {/* Strategic Overview & Voice Directives */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-slate-950/80 border border-slate-800 rounded-xl mb-6 text-xs">
                <div>
                  <div className="text-slate-400 font-medium mb-1">Objetivo Narrativo:</div>
                  <div className="text-slate-200 leading-relaxed">{act.narrativeGoal}</div>
                </div>
                <div>
                  <div className="text-amber-400 font-medium mb-1">Tom de Voz & Postura de Palco:</div>
                  <div className="text-slate-200 leading-relaxed">{act.toneOfVoice}</div>
                </div>
              </div>

              {/* Spoken Text with Dramatic Layout & Cues */}
              <div className="mb-6">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Volume2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>Texto Integral Falado com Marcações de Troca de Slide</span>
                </div>
                <div className="bg-slate-950 p-5 sm:p-6 rounded-xl border border-slate-800/80 text-slate-100 text-base sm:text-lg font-light leading-relaxed whitespace-pre-line space-y-4">
                  {renderFormattedScript(act.fullSpokenScript)}
                </div>
              </div>

              {/* Questions to the Audience */}
              <div className="mb-5 p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl">
                <div className="text-xs font-semibold text-amber-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <HelpCircle className="w-3.5 h-3.5" />
                  <span>Perguntas Rápidas de Conexão com a Plateia</span>
                </div>
                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-200 list-disc list-inside">
                  {act.audienceQuestions.map((q, qIdx) => (
                    <li key={qIdx} className="leading-snug">
                      {q}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Impact Phrase & Transition */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800">
                  <div className="text-amber-400 font-semibold mb-1 flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Frase de Impacto para Fixar:</span>
                  </div>
                  <div className="text-slate-200 italic font-serif text-sm">
                    “{act.impactPhrase}”
                  </div>
                </div>

                <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800">
                  <div className="text-slate-400 font-semibold mb-1 flex items-center gap-1">
                    <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                    <span>Transição para o Próximo Bloco:</span>
                  </div>
                  <div className="text-slate-300 leading-snug">{act.transitionToNext}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
};
