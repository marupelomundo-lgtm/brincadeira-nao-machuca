import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  VolumeX,
  Volume2,
  Hand,
  Brain,
  ShieldAlert,
  Play,
  Square,
  CheckCircle2,
  Flashlight,
  Timer,
  Music,
  Send,
  Trash2,
  Sun,
  Moon,
} from 'lucide-react';
import { scenicAudio } from '../utils/scenicAudio';

export const AudienceInteractionLab: React.FC = () => {
  // Silence timer
  const [silenceCount, setSilenceCount] = useState<number | null>(null);
  const [silenceActive, setSilenceActive] = useState(false);

  // 3-second pact simulator
  const [pactCount, setPactCount] = useState<number | null>(null);
  const [pactActive, setPactActive] = useState(false);
  const [pactDecision, setPactDecision] = useState<'pending' | 'deleted' | 'sent'>('pending');

  // Flashlight / Spotlight metaphor simulator
  const [flashlightOn, setFlashlightOn] = useState(true);

  // Soundscape active state
  const [activeSound, setActiveSound] = useState<'none' | 'tension' | 'chime' | 'hope'>('none');

  // 5-second silence countdown logic
  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    if (silenceActive && silenceCount !== null && silenceCount > 0) {
      timer = setTimeout(() => {
        setSilenceCount(silenceCount - 1);
      }, 1000);
    } else if (silenceActive && silenceCount === 0) {
      timer = setTimeout(() => {
        setSilenceActive(false);
      }, 1500);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [silenceActive, silenceCount]);

  const startSilence = () => {
    scenicAudio.playSolemnChime();
    setActiveSound('chime');
    setSilenceCount(5);
    setSilenceActive(true);
    setTimeout(() => {
      setActiveSound('none');
    }, 6000);
  };

  // 3-second pact timer logic
  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    if (pactActive && pactCount !== null && pactCount > 1) {
      timer = setTimeout(() => {
        scenicAudio.playTick(4 - (pactCount - 1));
        setPactCount(pactCount - 1);
      }, 1000);
    } else if (pactActive && pactCount === 1) {
      timer = setTimeout(() => {
        scenicAudio.playTick(3);
        setPactCount(0);
        setPactActive(false);
      }, 1000);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [pactActive, pactCount]);

  const startPactTest = () => {
    setPactDecision('pending');
    setPactCount(3);
    setPactActive(true);
    scenicAudio.playTick(1);
  };

  const handleSoundPlay = (type: 'tension' | 'chime' | 'hope') => {
    if (activeSound === type) {
      scenicAudio.stopCurrent();
      setActiveSound('none');
      return;
    }

    if (type === 'tension') scenicAudio.playTensionDrone();
    if (type === 'chime') scenicAudio.playSolemnChime();
    if (type === 'hope') scenicAudio.playHopeChord();
    setActiveSound(type);
  };

  const handleStopAllSound = () => {
    scenicAudio.stopCurrent();
    setActiveSound('none');
  };

  return (
    <div className="w-full h-full flex flex-col bg-slate-950 p-4 lg:p-6 overflow-y-auto">
      {/* Header */}
      <div className="pb-4 border-b border-slate-800 mb-6 max-w-5xl mx-auto w-full">
        <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-amber-400 font-semibold mb-1">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Direção Cênica, Metáforas & Participação Segura</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-white">
          Recursos de Palco: Lanterna, Pacto dos 3s, Silêncio & Trilha
        </h2>
        <p className="text-xs text-slate-400 mt-0.5">
          Metáforas físicas e gatilhos de comportamento projetados para estudantes de 11 a 15 anos sem sermão.
        </p>
      </div>

      <div className="max-w-5xl mx-auto w-full flex flex-col gap-6">
        {/* Safety Disclaimer Banner */}
        <div className="p-4 bg-amber-500/10 border border-amber-500/30 rounded-xl flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <div className="text-xs font-semibold text-amber-300 uppercase tracking-wide">
              Aviso de Segurança Obrigatório ao Iniciar a Palestra:
            </div>
            <p className="text-xs sm:text-sm text-slate-200 mt-1 italic font-serif">
              “Ninguém aqui precisa contar nenhuma experiência pessoal. Vamos trabalhar com situações fictícias e reflexões internas para que todos possam pensar livremente, sem serem expostos.”
            </p>
          </div>
        </div>

        {/* 1. FEATURE: Metáfora da Lanterna / Holofote da Plateia */}
        <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl flex flex-col gap-4 shadow-lg">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <Flashlight className="w-5 h-5 text-amber-400" />
              <h3 className="text-lg font-serif font-bold text-white">
                Metáfora 1: A Lanterna no Escuro (O Holofote da Plateia)
              </h3>
            </div>
            <span className="text-xs font-mono text-amber-400/90 bg-slate-950 px-2.5 py-1 rounded border border-slate-800">
              Momento: Ato 1 (Slide 3)
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            <strong>Instrução cênica:</strong> Se o auditório puder ficar na penumbra, pegue uma pequena lanterna de bolso ou apontador laser e mire em uma <strong>cadeira vazia</strong>. Explique que o agressor não tem poder sozinho — quem dá o holofote é quem assiste e ri.
          </p>

          {/* Interactive Stage Simulation: Spotlight On vs Off */}
          <div className="relative p-6 sm:p-8 bg-slate-950 rounded-xl border border-slate-800 flex flex-col items-center justify-center text-center overflow-hidden">
            {/* Visual Spotlight Effect */}
            <div
              className={`transition-all duration-700 w-44 h-44 rounded-full flex items-center justify-center border ${
                flashlightOn
                  ? 'bg-amber-400/20 border-amber-400 shadow-[0_0_80px_rgba(251,191,36,0.35)]'
                  : 'bg-slate-900/40 border-slate-800 opacity-40'
              }`}
            >
              <div className="flex flex-col items-center">
                <span className="text-2xl mb-1">{flashlightOn ? '🎯' : '🪑'}</span>
                <span className="text-xs font-medium text-slate-200">
                  {flashlightOn ? 'Cadeira sob o Holofote' : 'Cadeira sem Plateia'}
                </span>
                <span className="text-[10px] text-slate-400">
                  {flashlightOn ? 'Risadas e compartilhamentos mantêm a luz acesa' : 'Silêncio da plateia apagou o espetáculo'}
                </span>
              </div>
            </div>

            {/* Toggle Button */}
            <div className="mt-5 flex items-center gap-3">
              <button
                onClick={() => setFlashlightOn(!flashlightOn)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 transition-colors ${
                  flashlightOn
                    ? 'bg-amber-400 hover:bg-amber-300 text-slate-950'
                    : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
                }`}
              >
                <Flashlight className="w-4 h-4" />
                <span>{flashlightOn ? 'Simular Apagar o Holofote' : 'Simular Acender o Holofote'}</span>
              </button>
            </div>

            <div className="mt-4 p-3 max-w-lg bg-slate-900/80 rounded-lg border border-slate-800 text-xs text-slate-300 italic font-serif">
              “O agressor não tem força sozinho. Quem segura a lanterna e aponta o holofote para a pessoa... é a plateia que ri e compartilha. Se a plateia apagar a luz, a humilhação perde o palco.”
            </div>
          </div>
        </div>

        {/* 2. FEATURE: O Pacto dos 3 Segundos */}
        <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl flex flex-col gap-4 shadow-lg">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <Timer className="w-5 h-5 text-amber-400" />
              <h3 className="text-lg font-serif font-bold text-white">
                Metáfora 2: O Pacto dos 3 Segundos (Antes do Botão Enviar)
              </h3>
            </div>
            <span className="text-xs font-mono text-amber-400/90 bg-slate-950 px-2.5 py-1 rounded border border-slate-800">
              Momento: Ato 4 (Slide 11)
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Uma ferramenta de autocontrole imediata para o celular. Antes de clicar no botão verde de enviar uma foto, meme ou figurinha num grupo, o aluno segura o dedo indicador por 3 segundos e faz o <strong>Teste do Espelho</strong>.
          </p>

          {/* Interactive Phone Send Simulator */}
          <div className="p-6 bg-slate-950 rounded-xl border border-slate-800 flex flex-col items-center justify-center text-center">
            {pactActive ? (
              <div className="flex flex-col items-center animate-pulse">
                <div className="text-6xl font-mono font-bold text-amber-400 mb-2">
                  {pactCount}
                </div>
                <div className="text-sm font-serif italic text-amber-200">
                  “1... 2... 3... Segure o dedo! Faça o Teste do Espelho...”
                </div>
              </div>
            ) : pactCount === 0 ? (
              <div className="flex flex-col items-center max-w-md">
                <div className="text-base font-semibold text-white mb-2">
                  Teste do Espelho:
                </div>
                <p className="text-xs sm:text-sm text-amber-200/90 italic font-serif mb-4">
                  “Se essa foto ou piada fosse sobre a sua mãe, seu irmão ou sobre você... você acharia engraçado?”
                </p>

                {pactDecision === 'pending' && (
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setPactDecision('deleted')}
                      className="flex items-center gap-1.5 px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold rounded-lg transition-colors shadow"
                    >
                      <Trash2 className="w-4 h-4" />
                      <span>Decisão: Apagar a Foto (Salvar o Colega)</span>
                    </button>
                    <button
                      onClick={() => setPactDecision('sent')}
                      className="flex items-center gap-1.5 px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs rounded-lg transition-colors"
                    >
                      <Send className="w-4 h-4" />
                      <span>Enviar mesmo assim</span>
                    </button>
                  </div>
                )}

                {pactDecision === 'deleted' && (
                  <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-lg text-emerald-300 text-xs font-medium">
                    ✓ Parabéns! Você acabou de interromper um ciclo de sofrimento sem ninguém nem saber.
                  </div>
                )}

                {pactDecision === 'sent' && (
                  <div className="p-3 bg-rose-500/10 border border-rose-500/30 rounded-lg text-rose-300 text-xs font-medium">
                    ⚠️ A fogueira ganhou mais oxigênio e a humilhação ganhou mais um espectador.
                  </div>
                )}

                <button
                  onClick={startPactTest}
                  className="mt-4 text-xs text-slate-400 hover:text-amber-300 underline"
                >
                  Testar Novamente
                </button>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-amber-400 mb-3">
                  <Timer className="w-6 h-6" />
                </div>
                <div className="text-sm font-medium text-slate-200 mb-1">
                  Simulação do Pacto dos 3 Segundos
                </div>
                <div className="text-xs text-slate-400 max-w-sm mb-4">
                  Clique no botão para simular a pausa de 3 segundos antes de enviar uma mensagem.
                </div>
                <button
                  onClick={startPactTest}
                  className="flex items-center gap-2 px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-semibold text-xs rounded-lg transition-colors shadow-md"
                >
                  <Play className="w-4 h-4 fill-current" />
                  <span>Simular Botão Enviar com Pausa de 3s</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* 3. FEATURE: Mesa de Trilha Sonora & Ambientação Cinematográfica */}
        <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl flex flex-col gap-4 shadow-lg">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <Music className="w-5 h-5 text-amber-400" />
              <h3 className="text-lg font-serif font-bold text-white">
                Mesa de Trilha Sonora & Ambientação de Palco
              </h3>
            </div>
            {activeSound !== 'none' && (
              <button
                onClick={handleStopAllSound}
                className="flex items-center gap-1.5 px-3 py-1 bg-rose-500/20 text-rose-300 border border-rose-500/30 rounded-lg text-xs font-semibold hover:bg-rose-500/30 transition-colors animate-pulse"
              >
                <Square className="w-3.5 h-3.5 fill-current" />
                <span>Parar Áudio</span>
              </button>
            )}
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Se o seu computador estiver ligado ao som do auditório, você pode acionar estes 3 ambientes sonoros sintetizados em tempo real (100% livres de direitos autorais e sem arquivos pesados):
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            {/* Tone 1 */}
            <div
              className={`p-4 rounded-xl border flex flex-col justify-between transition-all ${
                activeSound === 'tension'
                  ? 'bg-amber-950/30 border-amber-400 ring-2 ring-amber-400/20'
                  : 'bg-slate-950 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div>
                <span className="text-xs font-mono text-amber-400 uppercase tracking-wider block mb-1">
                  1. Entrada / Abertura
                </span>
                <div className="font-semibold text-slate-100 mb-1">Drone de Tensão & Suspense</div>
                <p className="text-slate-400 text-[11px] leading-tight mb-3">
                  Som grave suave de cinema. Toque enquanto você sobe ao palco e corte ao dizer as primeiras palavras.
                </p>
              </div>
              <button
                onClick={() => handleSoundPlay('tension')}
                className={`w-full py-2 rounded-lg font-semibold flex items-center justify-center gap-1.5 transition-colors ${
                  activeSound === 'tension'
                    ? 'bg-amber-400 text-slate-950'
                    : 'bg-slate-800 hover:bg-slate-700 text-slate-200'
                }`}
              >
                {activeSound === 'tension' ? <Square className="w-3.5 h-3.5 fill-current" /> : <Play className="w-3.5 h-3.5 fill-current" />}
                <span>{activeSound === 'tension' ? 'Parar Drone' : 'Tocar Drone'}</span>
              </button>
            </div>

            {/* Tone 2 */}
            <div
              className={`p-4 rounded-xl border flex flex-col justify-between transition-all ${
                activeSound === 'chime'
                  ? 'bg-amber-950/30 border-amber-400 ring-2 ring-amber-400/20'
                  : 'bg-slate-950 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div>
                <span className="text-xs font-mono text-amber-400 uppercase tracking-wider block mb-1">
                  2. Ato 6 (Clímax)
                </span>
                <div className="font-semibold text-slate-100 mb-1">Sino Solene (5 Segundos)</div>
                <p className="text-slate-400 text-[11px] leading-tight mb-3">
                  Sino tibetano suave que acompanha os 5 segundos de silêncio após “Gente, perdeu a graça”.
                </p>
              </div>
              <button
                onClick={() => handleSoundPlay('chime')}
                className={`w-full py-2 rounded-lg font-semibold flex items-center justify-center gap-1.5 transition-colors ${
                  activeSound === 'chime'
                    ? 'bg-amber-400 text-slate-950'
                    : 'bg-slate-800 hover:bg-slate-700 text-slate-200'
                }`}
              >
                {activeSound === 'chime' ? <Square className="w-3.5 h-3.5 fill-current" /> : <Play className="w-3.5 h-3.5 fill-current" />}
                <span>{activeSound === 'chime' ? 'Parar Sino' : 'Tocar Sino'}</span>
              </button>
            </div>

            {/* Tone 3 */}
            <div
              className={`p-4 rounded-xl border flex flex-col justify-between transition-all ${
                activeSound === 'hope'
                  ? 'bg-amber-950/30 border-amber-400 ring-2 ring-amber-400/20'
                  : 'bg-slate-950 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div>
                <span className="text-xs font-mono text-amber-400 uppercase tracking-wider block mb-1">
                  3. Encerramento / Aplausos
                </span>
                <div className="font-semibold text-slate-100 mb-1">Acorde de Esperança</div>
                <p className="text-slate-400 text-[11px] leading-tight mb-3">
                  Harmonia quente e acolhedora que acompanha o encerramento solene e a recepção dos aplausos.
                </p>
              </div>
              <button
                onClick={() => handleSoundPlay('hope')}
                className={`w-full py-2 rounded-lg font-semibold flex items-center justify-center gap-1.5 transition-colors ${
                  activeSound === 'hope'
                    ? 'bg-amber-400 text-slate-950'
                    : 'bg-slate-800 hover:bg-slate-700 text-slate-200'
                }`}
              >
                {activeSound === 'hope' ? <Square className="w-3.5 h-3.5 fill-current" /> : <Play className="w-3.5 h-3.5 fill-current" />}
                <span>{activeSound === 'hope' ? 'Parar Acorde' : 'Tocar Acorde'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* 4. O Silêncio dos 5 Segundos (com sino) */}
        <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl flex flex-col gap-4">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <VolumeX className="w-5 h-5 text-amber-400" />
              <h3 className="text-lg font-serif font-bold text-white">
                O Silêncio dos 5 Segundos (Ato 6)
              </h3>
            </div>
            <span className="text-xs text-slate-400">
              Momento: após “Gente, perdeu a graça”
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            O silêncio do palestrante é a ferramenta mais poderosa no palco. Em vez de preencher todo espaço com fala, esses 5 segundos forçam a mente de cada adolescente a processar a coragem de quebrar a complacência.
          </p>

          <div className="p-8 bg-slate-950 border border-slate-800 rounded-xl flex flex-col items-center justify-center text-center">
            {silenceActive ? (
              <div className="flex flex-col items-center animate-pulse">
                <div className="text-6xl sm:text-7xl font-mono font-bold text-amber-400 mb-2">
                  {silenceCount}
                </div>
                <div className="text-sm font-serif italic text-slate-300">
                  “Silêncio sagrado... Olhe nos olhos da plateia sem dizer uma única palavra.”
                </div>
              </div>
            ) : silenceCount === 0 ? (
              <div className="flex flex-col items-center text-emerald-400">
                <CheckCircle2 className="w-12 h-12 mb-2" />
                <div className="text-base font-semibold">Pausa cumprida com sucesso.</div>
                <div className="text-xs text-slate-400 mt-1">Retome com voz suave: “Quatro palavras...”</div>
                <button
                  onClick={startSilence}
                  className="mt-4 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-xs text-slate-200 rounded-lg transition-colors"
                >
                  Repetir Ensaio de Silêncio
                </button>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-amber-400 mb-3">
                  <VolumeX className="w-6 h-6" />
                </div>
                <div className="text-sm font-medium text-slate-200 mb-1">
                  Ensaio do Silêncio Dramático de 5 Segundos (com Sino)
                </div>
                <div className="text-xs text-slate-400 max-w-sm mb-4">
                  Clique para simular os 5 segundos cronometrados de silêncio absoluto no palco acompanhados do sino solene.
                </div>
                <button
                  onClick={startSilence}
                  className="flex items-center gap-2 px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-semibold text-xs rounded-lg transition-colors shadow-md"
                >
                  <Play className="w-4 h-4 fill-current" />
                  <span>Iniciar Silêncio de 5 Segundos</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* 5. Votação por Sinal Discreto de 1 Dedo */}
        <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl flex flex-col gap-4">
          <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
            <Hand className="w-5 h-5 text-amber-400" />
            <h3 className="text-lg font-serif font-bold text-white">
              Votação por Sinal Discreto (1 Dedo ou Palma Baixa)
            </h3>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Adolescentes de 11 a 15 anos têm pânico de levantar o braço inteiro no alto por medo de julgamento dos colegas. A técnica profissional é pedir um <strong>sinal discreto</strong> (levantar um único dedo na altura do queixo).
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-4 bg-slate-950 rounded-xl border border-slate-800">
              <span className="text-amber-400 font-semibold uppercase text-[10px] block mb-1">Pergunta 1 (Ato 1)</span>
              <p className="text-slate-200 font-serif text-sm mb-3">
                “Quem aqui já viu uma notificação chegar no grupo e sentiu um frio na barriga antes mesmo de abrir?”
              </p>
              <div className="text-slate-400 text-[11px]">
                Comando do palestrante: <em>“Apenas levantem um dedo na altura do queixo.”</em>
              </div>
            </div>

            <div className="p-4 bg-slate-950 rounded-xl border border-slate-800">
              <span className="text-amber-400 font-semibold uppercase text-[10px] block mb-1">Pergunta 2 (Ato 3)</span>
              <p className="text-slate-200 font-serif text-sm mb-3">
                “Quem já presenciou algo injusto e travou porque teve medo de virar o próximo alvo?”
              </p>
              <div className="text-slate-400 text-[11px]">
                Comando do palestrante: <em>“Mão aberta sobre a carteira. Olhem ao redor: vocês não estão sozinhos nesse sentimento.”</em>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
