import React, { useState } from 'react';
import {
  Quote,
  Sparkles,
  Copy,
  Check,
  ShieldCheck,
  CheckSquare,
  Clock,
  Layers,
  FileText,
  AlertCircle,
  HelpCircle,
} from 'lucide-react';
import {
  IMPACT_QUOTES,
  INITIAL_CHECKLIST,
  SLIDES_DATA,
} from '../data/presentationData';
import { ChecklistItem, ImpactPhrase } from '../types/presentation';

interface ToolboxViewProps {
  durationMinutes: number;
  setDurationMinutes: (mins: 40 | 50 | 60) => void;
  schoolSupportChannel: string;
}

export const ToolboxView: React.FC<ToolboxViewProps> = ({
  durationMinutes,
  setDurationMinutes,
  schoolSupportChannel,
}) => {
  const [activeSection, setActiveSection] = useState<'quotes' | 'prompts' | 'timing' | 'safety' | 'checklist'>('quotes');
  const [quotesFilter, setQuotesFilter] = useState<string>('all');
  const [copiedQuoteId, setCopiedQuoteId] = useState<string | null>(null);
  const [copiedPromptId, setCopiedPromptId] = useState<string | null>(null);
  const [checklist, setChecklist] = useState<ChecklistItem[]>(INITIAL_CHECKLIST);

  const toggleChecklistItem = (id: string) => {
    setChecklist((prev) =>
      prev.map((item) => (item.id === id ? { ...item, completed: !item.completed } : item))
    );
  };

  const handleCopyQuote = (quote: ImpactPhrase) => {
    navigator.clipboard.writeText(`“${quote.text}”`);
    setCopiedQuoteId(quote.id);
    setTimeout(() => setCopiedQuoteId(null), 2000);
  };

  const handleCopyPrompt = (promptText: string, id: string) => {
    navigator.clipboard.writeText(promptText);
    setCopiedPromptId(id);
    setTimeout(() => setCopiedPromptId(null), 2000);
  };

  const filteredQuotes =
    quotesFilter === 'all'
      ? IMPACT_QUOTES
      : IMPACT_QUOTES.filter((q) => q.category === quotesFilter);

  const slidesWithPrompts = SLIDES_DATA.filter((s) => s.imagePrompt);

  return (
    <div className="w-full h-full flex flex-col bg-slate-950 p-4 lg:p-6 overflow-y-auto">
      {/* Header */}
      <div className="pb-4 border-b border-slate-800 mb-6 max-w-5xl mx-auto w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-amber-400 font-semibold mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Kit de Ferramentas & Protocolos da Palestra</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-white">
            Frases, Prompts Visuais, Protocolo de Segurança & Checklist
          </h2>
        </div>

        {/* Section Tabs */}
        <div className="flex flex-wrap items-center gap-1 p-1 bg-slate-900 rounded-lg border border-slate-800 text-xs">
          <button
            onClick={() => setActiveSection('quotes')}
            className={`px-3 py-1.5 font-medium rounded-md transition-colors whitespace-nowrap ${
              activeSection === 'quotes'
                ? 'bg-amber-400 text-slate-950 font-semibold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            20 Frases de Impacto
          </button>
          <button
            onClick={() => setActiveSection('timing')}
            className={`px-3 py-1.5 font-medium rounded-md transition-colors whitespace-nowrap ${
              activeSection === 'timing'
                ? 'bg-amber-400 text-slate-950 font-semibold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            40m vs 60m
          </button>
          <button
            onClick={() => setActiveSection('prompts')}
            className={`px-3 py-1.5 font-medium rounded-md transition-colors whitespace-nowrap ${
              activeSection === 'prompts'
                ? 'bg-amber-400 text-slate-950 font-semibold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Prompts de Imagens
          </button>
          <button
            onClick={() => setActiveSection('safety')}
            className={`px-3 py-1.5 font-medium rounded-md transition-colors whitespace-nowrap ${
              activeSection === 'safety'
                ? 'bg-amber-400 text-slate-950 font-semibold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Protocolo de Proteção
          </button>
          <button
            onClick={() => setActiveSection('checklist')}
            className={`px-3 py-1.5 font-medium rounded-md transition-colors whitespace-nowrap ${
              activeSection === 'checklist'
                ? 'bg-amber-400 text-slate-950 font-semibold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Checklist Pré-Palco
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto w-full">
        {/* 1. Impact Quotes Section */}
        {activeSection === 'quotes' && (
          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap items-center justify-between gap-3 p-4 bg-slate-900 border border-slate-800 rounded-xl">
              <div className="text-xs text-slate-300">
                Frases afiadas, sem clichês de autoajuda. Copie para usar nos seus slides ou cartões de bolso.
              </div>
              <div className="flex flex-wrap items-center gap-1.5 text-xs">
                {['all', 'abertura', 'transição', 'reflexão', 'ação segura', 'encerramento'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setQuotesFilter(cat)}
                    className={`px-2.5 py-1 rounded-md capitalize transition-colors ${
                      quotesFilter === cat
                        ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 font-medium'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {cat === 'all' ? 'Todas (20)' : cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredQuotes.map((q) => (
                <div
                  key={q.id}
                  className="p-5 bg-slate-900/90 border border-slate-800 rounded-xl flex flex-col justify-between hover:border-slate-700 transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between text-[11px] text-slate-400 mb-2">
                      <span className="capitalize font-mono text-amber-400">
                        {q.category} · Ato {q.actRef}
                      </span>
                      <button
                        onClick={() => handleCopyQuote(q)}
                        className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
                      >
                        {copiedQuoteId === q.id ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span className="text-emerald-400">Copiada</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copiar</span>
                          </>
                        )}
                      </button>
                    </div>
                    <p className="text-sm sm:text-base text-slate-100 font-serif leading-relaxed italic">
                      “{q.text}”
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 2. Timing Comparer (40m vs 60m) */}
        {activeSection === 'timing' && (
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* 40 Minutes Card */}
              <div
                className={`p-6 rounded-2xl border transition-all ${
                  durationMinutes === 40
                    ? 'bg-slate-900 border-amber-400 ring-2 ring-amber-400/20'
                    : 'bg-slate-900/60 border-slate-800'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-amber-400 font-semibold uppercase">
                    Versão Ágil (1 Hora-Aula)
                  </span>
                  <button
                    onClick={() => setDurationMinutes(40)}
                    className={`px-3 py-1 text-xs font-semibold rounded-lg ${
                      durationMinutes === 40
                        ? 'bg-amber-400 text-slate-950'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    {durationMinutes === 40 ? 'Ativa no Momento' : 'Selecionar 40m'}
                  </button>
                </div>
                <h3 className="text-xl font-serif font-bold text-white mb-2">40 Minutos</h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  Ideal para quando a palestra ocorre dentro de um único tempo de aula regular (45 a 50 min com tolerância de entrada/saída).
                </p>

                <div className="space-y-2 text-xs text-slate-300">
                  <div className="p-2.5 bg-slate-950 rounded-lg border border-slate-800">
                    <strong className="text-amber-300 block mb-0.5">Onde encurtar:</strong>
                    Reduza os detalhes dos exemplos do Ato 2 (cite apenas 2 situações em vez de 3). Pule histórias secundárias de redes no Ato 4.
                  </div>
                  <div className="p-2.5 bg-slate-950 rounded-lg border border-slate-800">
                    <strong className="text-emerald-300 block mb-0.5">O que NUNCA cortar:</strong>
                    A cena de abertura completa do Ato 1, o silêncio de 5s no Ato 6 e o protocolo Fato-Impacto-Pedido no Ato 5.
                  </div>
                </div>
              </div>

              {/* 60 Minutes Card */}
              <div
                className={`p-6 rounded-2xl border transition-all ${
                  durationMinutes === 60
                    ? 'bg-slate-900 border-amber-400 ring-2 ring-amber-400/20'
                    : 'bg-slate-900/60 border-slate-800'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-amber-400 font-semibold uppercase">
                    Versão Master (Auditório Solene)
                  </span>
                  <button
                    onClick={() => setDurationMinutes(60)}
                    className={`px-3 py-1 text-xs font-semibold rounded-lg ${
                      durationMinutes === 60
                        ? 'bg-amber-400 text-slate-950'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    {durationMinutes === 60 ? 'Ativa no Momento' : 'Selecionar 60m'}
                  </button>
                </div>
                <h3 className="text-xl font-serif font-bold text-white mb-2">60 Minutos</h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  Ideal para grandes auditórios, eventos de abertura de ano letivo, semana da paz ou encontros de séries reunidas.
                </p>

                <div className="space-y-2 text-xs text-slate-300">
                  <div className="p-2.5 bg-slate-950 rounded-lg border border-slate-800">
                    <strong className="text-amber-300 block mb-0.5">Onde aprofundar:</strong>
                    Permita pausas reflexivas mais longas. Explore mais detalhadamente os canais de denúncia segura da escola e os 4 pensamentos do espectador.
                  </div>
                  <div className="p-2.5 bg-slate-950 rounded-lg border border-slate-800">
                    <strong className="text-emerald-300 block mb-0.5">Espaço para perguntas:</strong>
                    Reserve os últimos 8 a 10 minutos para acolhimento de dúvidas anônimas (bilhetinhos em urna, sem exposição verbal pública).
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 3. Image Prompts Section */}
        {activeSection === 'prompts' && (
          <div className="flex flex-col gap-6">
            <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-300">
              Prompts prontos para ferramentas de geração de imagens com direção de arte cinematográfica consistente (luz dramática, azul marinho, violeta e âmbar quente). Sem violência explícita, sem caricaturas.
            </div>

            <div className="space-y-5">
              {slidesWithPrompts.map((slide) => {
                if (!slide.imagePrompt) return null;
                return (
                  <div
                    key={slide.id}
                    className="p-5 bg-slate-900 border border-slate-800 rounded-2xl flex flex-col gap-3"
                  >
                    <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                      <div className="text-xs font-semibold text-amber-400">
                        Slide #{slide.number} · {slide.title}
                      </div>
                      <div className="text-[11px] text-slate-400">Proporção 16:9</div>
                    </div>

                    <div className="space-y-2 text-xs">
                      <div>
                        <div className="text-slate-400 font-medium mb-1">Prompt em Português:</div>
                        <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 text-slate-200 leading-relaxed font-mono text-[11px]">
                          {slide.imagePrompt.pt}
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center justify-between text-slate-400 font-medium mb-1">
                          <span>Prompt em Inglês (Midjourney / Imagen):</span>
                          <button
                            onClick={() => handleCopyPrompt(slide.imagePrompt!.en, slide.id)}
                            className="text-amber-400 hover:text-amber-300 flex items-center gap-1 text-[11px]"
                          >
                            {copiedPromptId === slide.id ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                            <span>{copiedPromptId === slide.id ? 'Copiado!' : 'Copiar EN'}</span>
                          </button>
                        </div>
                        <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 text-slate-300 leading-relaxed font-mono text-[11px]">
                          {slide.imagePrompt.en}
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 pt-1 text-[11px] text-slate-400">
                        <span><strong>Paleta:</strong> {slide.imagePrompt.palette}</span>
                        <span><strong>Iluminação:</strong> {slide.imagePrompt.lighting}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* 4. Safety Protocol Section */}
        {activeSection === 'safety' && (
          <div className="flex flex-col gap-6">
            <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl flex flex-col gap-4">
              <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
                <ShieldCheck className="w-5 h-5 text-amber-400" />
                <h3 className="text-lg font-serif font-bold text-white">
                  Protocolo de Proteção e Acolhimento Socioemocional
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                  <h4 className="font-semibold text-amber-300 text-sm">Durante a Palestra</h4>
                  <p className="text-slate-300 leading-relaxed">
                    • <strong>Sem exposição individual:</strong> Nunca peça para quem já sofreu bullying levantar a mão em público ou contar sua história diante da turma.
                  </p>
                  <p className="text-slate-300 leading-relaxed">
                    • <strong>Sem rotulação de agressores:</strong> Não aponte para alunos tidos como difíceis. O foco é a escolha do comportamento coletivo, não a humilhação pública de quem errou.
                  </p>
                  <p className="text-slate-300 leading-relaxed">
                    • <strong>Direito de pausa:</strong> Estudantes que se sentirem emocionados ou desconfortáveis podem ir beber água sem serem repreendidos.
                  </p>
                </div>

                <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                  <h4 className="font-semibold text-emerald-300 text-sm">Após o Encerramento</h4>
                  <p className="text-slate-300 leading-relaxed">
                    • <strong>Presença do Adulto de Referência:</strong> Deixe o orientador pedagógico ou psicólogo escolar visível na saída para acolher estudantes que quiserem conversar em particular.
                  </p>
                  <p className="text-slate-300 leading-relaxed">
                    • <strong>Regra de Sigilo Responsável:</strong> Nunca prometa "segredo absoluto" a um aluno se houver risco grave à sua integridade física ou psicológica. Explique com carinho: "Eu vou te proteger e vou buscar ajuda qualificada com você".
                  </p>
                  <p className="text-slate-300 leading-relaxed">
                    • <strong>Canal da Escola:</strong> Divulgar ativamente: <span className="text-amber-300 font-medium">{schoolSupportChannel}</span> e o Disque 100.
                  </p>
                </div>
              </div>

              {/* Fato - Impacto - Pedido Reference */}
              <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl">
                <span className="text-xs font-mono text-amber-400 font-semibold uppercase block mb-1">
                  A Ferramenta de Ouro para os Estudantes
                </span>
                <h4 className="text-base font-serif font-bold text-white mb-2">
                  Estrutura FATO — IMPACTO — PEDIDO
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 bg-slate-900 rounded-lg">
                    <span className="text-amber-400 font-bold block mb-1">1. FATO</span>
                    <span className="text-slate-300">O que aconteceu de forma concreta, com datas e sem adjetivos pejorativos.</span>
                  </div>
                  <div className="p-3 bg-slate-900">
                    <span className="text-amber-400 font-bold block mb-1">2. IMPACTO</span>
                    <span className="text-slate-300">Como a situação está ferindo a pessoa, seu sono, rendimento ou vontade de ir à escola.</span>
                  </div>
                  <div className="p-3 bg-slate-900">
                    <span className="text-amber-400 font-bold block mb-1">3. PEDIDO</span>
                    <span className="text-slate-300">Ação clara solicitada ao adulto (ex: monitorar o corredor no recreio, conversar com responsáveis).</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 5. Pre-Stage Checklist Section */}
        {activeSection === 'checklist' && (
          <div className="flex flex-col gap-6">
            <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-between text-xs">
              <span className="text-slate-300">
                Checklist de 12 itens pré-palco para garantir excelência técnica, cênica e emocional.
              </span>
              <span className="text-amber-400 font-mono font-medium">
                {checklist.filter((c) => c.completed).length} de {checklist.length} concluídos
              </span>
            </div>

            <div className="grid grid-cols-1 gap-2.5">
              {checklist.map((item) => (
                <button
                  key={item.id}
                  onClick={() => toggleChecklistItem(item.id)}
                  className={`w-full p-4 rounded-xl border text-left flex items-start gap-3 transition-colors ${
                    item.completed
                      ? 'bg-slate-900/40 border-slate-800 text-slate-400'
                      : 'bg-slate-900 border-slate-700/80 text-slate-100 hover:border-amber-400/50'
                  }`}
                >
                  <div className="mt-0.5 shrink-0">
                    {item.completed ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <div className="w-4 h-4 rounded border border-slate-600" />
                    )}
                  </div>
                  <div className="text-xs sm:text-sm">
                    <span className={`block ${item.completed ? 'line-through text-slate-500' : ''}`}>
                      {item.text}
                    </span>
                    <span className="text-[10px] font-mono uppercase text-amber-400/80 mt-1 block">
                      Categoria: {item.category}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
