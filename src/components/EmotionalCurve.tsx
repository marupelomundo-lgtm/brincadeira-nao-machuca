import React, { useState } from 'react';
import { Activity, ShieldCheck, Heart, Sparkles, TrendingUp, Users } from 'lucide-react';
import { EMOTIONAL_CURVE_DATA } from '../data/presentationData';

export const EmotionalCurve: React.FC = () => {
  const [activeAct, setActiveAct] = useState(1);

  const selectedData = EMOTIONAL_CURVE_DATA.find((d) => d.act === activeAct) || EMOTIONAL_CURVE_DATA[0];

  return (
    <div className="w-full h-full flex flex-col bg-slate-950 p-4 lg:p-6 overflow-y-auto">
      {/* Header */}
      <div className="pb-4 border-b border-slate-800 mb-6 max-w-5xl mx-auto w-full">
        <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-amber-400 font-semibold mb-1">
          <Activity className="w-3.5 h-3.5" />
          <span>Curva Emocional & Transformação Socioemocional</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-white">
          A Jornada do Estudante (11 a 15 anos) Durante a Palestra
        </h2>
        <p className="text-xs text-slate-400 mt-0.5">
          Como conduzir a atenção sem sermão, alternando picos de tensão narrativa e momentos de acolhimento seguro.
        </p>
      </div>

      <div className="max-w-5xl mx-auto w-full flex flex-col gap-6">
        {/* Macro Transformation Hero */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5 bg-slate-900 border border-slate-800 rounded-2xl">
          <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">No Começo</span>
              <h4 className="text-sm font-semibold text-slate-300 mt-1 mb-2">Desconfiança / Tédio</h4>
              <p className="text-xs text-slate-400 italic font-serif">
                “É apenas mais uma palestra chata sobre bullying.”
              </p>
            </div>
            <div className="mt-3 text-[11px] text-slate-500">Postura de braços cruzados, expectativa de sermão moralista.</div>
          </div>

          <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-amber-400 uppercase tracking-wider">No Meio</span>
              <h4 className="text-sm font-semibold text-amber-200 mt-1 mb-2">Identificação / Choque</h4>
              <p className="text-xs text-amber-100/90 italic font-serif">
                “Eu já vi isso acontecer. Talvez eu tenha rido ou ficado quieto.”
              </p>
            </div>
            <div className="mt-3 text-[11px] text-slate-400">Reconhecimento do próprio papel como espectador. Alívio de culpa.</div>
          </div>

          <div className="p-4 bg-slate-950 rounded-xl border border-amber-500/30 bg-amber-500/5 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-amber-300 uppercase tracking-wider">No Final</span>
              <h4 className="text-sm font-semibold text-amber-300 mt-1 mb-2">Agência / Decisão</h4>
              <p className="text-xs text-amber-200 italic font-serif">
                “Eu não controlo tudo, mas minha escolha pode mudar o caminho da história.”
              </p>
            </div>
            <div className="mt-3 text-[11px] text-amber-400/80">Saem lembrando de 1 história, 1 imagem e 1 frase de ação segura.</div>
          </div>
        </div>

        {/* Visual Chart / Stepper Across the 6 Acts */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">
              Linha de Tensão vs Empatia nos 6 Atos
            </span>
            <div className="flex items-center gap-4 text-xs">
              <span className="flex items-center gap-1.5 text-rose-400">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" />
                Tensão Dramática
              </span>
              <span className="flex items-center gap-1.5 text-amber-300">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block" />
                Empatia & Acolhimento
              </span>
            </div>
          </div>

          {/* Stepper Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-6 gap-2 mb-6">
            {EMOTIONAL_CURVE_DATA.map((item) => (
              <button
                key={item.act}
                onClick={() => setActiveAct(item.act)}
                className={`p-3 rounded-xl border text-left transition-all ${
                  activeAct === item.act
                    ? 'bg-slate-800 border-amber-400 shadow-md ring-1 ring-amber-400/30'
                    : 'bg-slate-950 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="text-[10px] font-mono text-amber-400">ATO {item.act}</div>
                <div className="text-xs font-medium text-slate-200 truncate mt-0.5">
                  {item.name.replace(`Ato ${item.act}: `, '')}
                </div>
                <div className="mt-2 flex items-center justify-between text-[10px] text-slate-400">
                  <span className="text-rose-400 font-mono">{item.tension}% T</span>
                  <span className="text-amber-300 font-mono">{item.empathy}% E</span>
                </div>
              </button>
            ))}
          </div>

          {/* Detailed View of Selected Act */}
          <div className="p-5 bg-slate-950 border border-slate-800/80 rounded-xl flex flex-col gap-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
              <div>
                <span className="text-xs font-mono text-amber-400 font-semibold uppercase">
                  Aprofundamento Emocional · {selectedData.name}
                </span>
                <h3 className="text-lg font-serif font-bold text-white mt-0.5">
                  {selectedData.insight}
                </h3>
              </div>
            </div>

            {/* Gauge meters */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-rose-300 font-medium">Nível de Tensão Dramática (Atenção):</span>
                  <span className="font-mono text-rose-400">{selectedData.tension}%</span>
                </div>
                <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                  <div
                    className="h-full bg-rose-500 rounded-full transition-all duration-500"
                    style={{ width: `${selectedData.tension}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-amber-200 font-medium">Nível de Empatia & Conexão:</span>
                  <span className="font-mono text-amber-300">{selectedData.empathy}%</span>
                </div>
                <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                  <div
                    className="h-full bg-amber-400 rounded-full transition-all duration-500"
                    style={{ width: `${selectedData.empathy}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Shift of mindset */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2 text-xs">
              <div className="p-3 bg-slate-900/60 rounded-lg border border-slate-800">
                <span className="text-slate-500 uppercase font-mono text-[10px] block mb-1">Voz Interna Anterior:</span>
                <p className="text-slate-300 italic font-serif">{selectedData.stateBefore}</p>
              </div>
              <div className="p-3 bg-amber-500/10 rounded-lg border border-amber-500/20">
                <span className="text-amber-400 uppercase font-mono text-[10px] block mb-1">Novo Raciocínio Desperto:</span>
                <p className="text-amber-200 italic font-serif">{selectedData.stateAfter}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
