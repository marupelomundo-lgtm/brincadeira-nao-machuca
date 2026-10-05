import React from 'react';
import { Printer, ArrowLeft } from 'lucide-react';
import { ActData, PresentationConfig, SlideData } from '../types/presentation';

interface PrintScriptProps {
  config: PresentationConfig;
  acts: ActData[];
  slides: SlideData[];
  onClose: () => void;
}

export const PrintScript: React.FC<PrintScriptProps> = ({
  config,
  acts,
  slides,
  onClose,
}) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950 text-slate-900 overflow-y-auto">
      {/* Top Floating Action Bar (hidden when printing) */}
      <div className="no-print sticky top-0 z-50 flex items-center justify-between px-6 py-3 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 text-white">
        <button
          onClick={onClose}
          className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-white"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar ao Estúdio</span>
        </button>

        <div className="text-xs font-medium text-amber-400">
          Modo Impressão / Ficha de Palco (A4)
        </div>

        <button
          onClick={handlePrint}
          className="flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-sm transition-colors"
        >
          <Printer className="w-4 h-4" />
          <span>Imprimir / Salvar PDF</span>
        </button>
      </div>

      {/* Printable Sheet Container */}
      <div className="max-w-4xl mx-auto my-8 p-8 sm:p-12 bg-white rounded-xl shadow-2xl print:m-0 print:p-6 print:shadow-none print:max-w-none text-slate-900">
        {/* Cover Header */}
        <div className="border-b-2 border-slate-900 pb-6 mb-8">
          <div className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-1">
            Ficha de Palco & Roteiro Direto do Apresentador
          </div>
          <h1 className="text-3xl font-serif font-bold text-slate-900 mb-2">
            A PLATEIA DECIDE
          </h1>
          <p className="text-base text-slate-600 font-serif italic mb-4">
            Bullying, silêncio e o poder de uma escolha
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs pt-4 border-t border-slate-200">
            <div>
              <span className="text-slate-400 block">Palestrante:</span>
              <strong className="text-slate-800">{config.presenterName}</strong>
            </div>
            <div>
              <span className="text-slate-400 block">Instituição:</span>
              <strong className="text-slate-800">{config.schoolName}</strong>
            </div>
            <div>
              <span className="text-slate-400 block">Duração Alvo:</span>
              <strong className="text-slate-800">{config.durationMinutes} minutos</strong>
            </div>
            <div>
              <span className="text-slate-400 block">Canal da Escola:</span>
              <strong className="text-slate-800">{config.schoolSupportChannel}</strong>
            </div>
          </div>
        </div>

        {/* Tese Central Box */}
        <div className="p-4 bg-slate-50 border-l-4 border-amber-500 rounded mb-8 text-xs sm:text-sm text-slate-700 italic">
          “O bullying pode começar com uma ação, mas ganha força quando encontra uma plateia. E uma plateia também pode decidir interromper a história.”
        </div>

        {/* The 6 Acts in Sequence */}
        <div className="space-y-8">
          {acts.map((act) => (
            <section key={act.number} className="break-inside-avoid pb-6 border-b border-slate-200">
              <div className="flex items-baseline justify-between mb-2">
                <h2 className="text-xl font-serif font-bold text-slate-900">
                  ATO {act.number} — {act.title}
                </h2>
                <span className="text-xs font-mono text-slate-500">
                  {config.durationMinutes === 40 ? act.duration40m : act.duration60m}
                </span>
              </div>
              <div className="text-xs text-slate-500 mb-3 italic">
                Objetivo: {act.narrativeGoal} | Tom: {act.toneOfVoice}
              </div>

              {/* Spoken Text */}
              <div className="text-sm font-serif leading-relaxed text-slate-800 whitespace-pre-line bg-slate-50/50 p-4 rounded border border-slate-100 mb-3">
                {act.fullSpokenScript}
              </div>

              {/* Stage Notes Summary */}
              <div className="text-xs bg-amber-50/60 p-3 rounded border border-amber-200/80 text-amber-950 flex flex-col gap-1">
                <div>
                  <strong>Frase de Impacto:</strong> “{act.impactPhrase}”
                </div>
                <div>
                  <strong>Perguntas ao público:</strong> {act.audienceQuestions.join(' | ')}
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Footer Notes */}
        <div className="mt-12 pt-6 border-t border-slate-300 text-center text-xs text-slate-500">
          A Plateia Decide · Roteiro de palco de {config.presenterName} · Versão impressa para uso cênico
        </div>
      </div>
    </div>
  );
};
