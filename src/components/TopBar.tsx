import React from 'react';
import { Sliders, Monitor, UserCheck, Printer } from 'lucide-react';

export type ActiveTab = 'slides' | 'presenter' | 'script' | 'curve' | 'interaction' | 'toolbox';

interface TopBarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  onOpenCustomizer: () => void;
  onOpenPrint: () => void;
  presenterName: string;
  durationMinutes: number;
}

export const TopBar: React.FC<TopBarProps> = ({
  activeTab,
  setActiveTab,
  onOpenCustomizer,
  onOpenPrint,
  presenterName,
  durationMinutes,
}) => {
  return (
    <header className="sticky top-0 z-40 flex items-center justify-between px-6 py-3.5 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80">
      {/* Zone 1: Single text element wordmark */}
      <div className="flex items-center gap-3">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setActiveTab('slides');
          }}
          className="text-lg font-serif tracking-tight text-amber-300 hover:text-amber-200 transition-colors whitespace-nowrap"
        >
          A Plateia Decide
        </a>
        <div className="hidden sm:flex items-center text-xs text-slate-400">
          <span className="truncate max-w-[130px]">{presenterName}</span>
          <span className="mx-1.5 text-slate-600" aria-hidden="true">·</span>
          <span>{durationMinutes} min</span>
        </div>
      </div>

      {/* Zone 2: 4-6 clean text navigation links */}
      <nav className="hidden lg:flex items-center gap-1.5 p-1 bg-slate-900/80 rounded-lg border border-slate-800 text-xs">
        <button
          onClick={() => setActiveTab('slides')}
          className={`px-3 py-1.5 font-medium rounded-md transition-colors whitespace-nowrap ${
            activeTab === 'slides'
              ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30 shadow-sm'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          Telão 16:9
        </button>
        <button
          onClick={() => setActiveTab('presenter')}
          className={`px-3 py-1.5 font-medium rounded-md transition-colors whitespace-nowrap flex items-center gap-1.5 ${
            activeTab === 'presenter'
              ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30 shadow-sm'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <UserCheck className="w-3.5 h-3.5" />
          Modo Apresentador
        </button>
        <button
          onClick={() => setActiveTab('script')}
          className={`px-3 py-1.5 font-medium rounded-md transition-colors whitespace-nowrap ${
            activeTab === 'script'
              ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30 shadow-sm'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          Roteiro dos 6 Atos
        </button>
        <button
          onClick={() => setActiveTab('curve')}
          className={`px-3 py-1.5 font-medium rounded-md transition-colors whitespace-nowrap ${
            activeTab === 'curve'
              ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30 shadow-sm'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          Curva Emocional
        </button>
        <button
          onClick={() => setActiveTab('interaction')}
          className={`px-3 py-1.5 font-medium rounded-md transition-colors whitespace-nowrap ${
            activeTab === 'interaction'
              ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30 shadow-sm'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          Interação & Silêncio
        </button>
        <button
          onClick={() => setActiveTab('toolbox')}
          className={`px-3 py-1.5 font-medium rounded-md transition-colors whitespace-nowrap ${
            activeTab === 'toolbox'
              ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30 shadow-sm'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          Ferramentas & Protocolos
        </button>
      </nav>

      {/* Zone 3: 1-2 primary actions */}
      <div className="flex items-center gap-2">
        <button
          onClick={onOpenPrint}
          title="Exportar ou Imprimir Ficha de Palco"
          className="p-2 text-xs font-medium text-slate-300 bg-slate-900 border border-slate-800 rounded-lg hover:bg-slate-800 hover:text-white transition-colors"
        >
          <Printer className="w-4 h-4" />
        </button>
        <button
          onClick={onOpenCustomizer}
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-200 bg-slate-900 border border-slate-700/80 rounded-lg hover:bg-slate-800 hover:border-slate-600 transition-colors whitespace-nowrap"
        >
          <Sliders className="w-3.5 h-3.5 text-amber-400" />
          <span className="hidden sm:inline">Personalizar</span>
        </button>
        <button
          onClick={() => setActiveTab('slides')}
          className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-slate-950 bg-amber-400 rounded-lg hover:bg-amber-300 transition-colors whitespace-nowrap shadow-sm shadow-amber-500/20"
        >
          <Monitor className="w-3.5 h-3.5" />
          <span>Apresentar</span>
        </button>
      </div>
    </header>
  );
};
