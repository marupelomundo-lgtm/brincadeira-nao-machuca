// Utilitário de Efeitos Sonoros e Ambientação Cinematográfica via Web Audio API pura
// Funciona 100% no navegador sem arquivos de áudio externos.

class ScenicAudioManager {
  private ctx: AudioContext | null = null;
  private currentNodes: { oscs: OscillatorNode[]; gain: GainNode } | null = null;
  private isMuted: boolean = false;

  private getContext(): AudioContext {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    return this.ctx;
  }

  // 1. Drone de Abertura / Suspense Cinematográfico (Tensão Suave)
  public playTensionDrone() {
    this.stopCurrent();
    if (this.isMuted) return;

    try {
      const ctx = this.getContext();
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.001, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.12, ctx.currentTime + 2.5);

      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(220, ctx.currentTime);

      const osc1 = ctx.createOscillator();
      osc1.type = 'sawtooth';
      osc1.frequency.setValueAtTime(55, ctx.currentTime); // Lá 1 (A1)

      const osc2 = ctx.createOscillator();
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(110, ctx.currentTime); // Lá 2 (A2)

      const osc3 = ctx.createOscillator();
      osc3.type = 'triangle';
      osc3.frequency.setValueAtTime(164.81, ctx.currentTime); // Mi 3 (E3)

      osc1.connect(filter);
      osc2.connect(filter);
      osc3.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      osc1.start();
      osc2.start();
      osc3.start();

      this.currentNodes = { oscs: [osc1, osc2, osc3], gain };
    } catch {
      // safe fallback
    }
  }

  // 2. Sino Solene / Taça Tibetana (Para o Silêncio de 5 Segundos após "Gente, perdeu a graça")
  public playSolemnChime() {
    this.stopCurrent();
    if (this.isMuted) return;

    try {
      const ctx = this.getContext();
      const now = ctx.currentTime;

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 5.5);

      const osc1 = ctx.createOscillator();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(528, now); // 528 Hz (Tom de clareza)

      const osc2 = ctx.createOscillator();
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(1056, now); // Harmônico suave

      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(ctx.destination);

      osc1.start(now);
      osc2.start(now);
      osc1.stop(now + 6);
      osc2.stop(now + 6);
    } catch {
      // safe fallback
    }
  }

  // 3. Acorde de Esperança & Encerramento (Ato 6 / Aplausos)
  public playHopeChord() {
    this.stopCurrent();
    if (this.isMuted) return;

    try {
      const ctx = this.getContext();
      const now = ctx.currentTime;
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.001, now);
      gain.gain.exponentialRampToValueAtTime(0.15, now + 3);

      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(500, now);

      // Acorde cinematográfico Dó Maior com 9ª (C, G, D, E)
      const freqs = [130.81, 196.00, 293.66, 329.63];
      const oscs = freqs.map((f) => {
        const osc = ctx.createOscillator();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(f, now);
        osc.connect(filter);
        osc.start(now);
        return osc;
      });

      filter.connect(gain);
      gain.connect(ctx.destination);

      this.currentNodes = { oscs, gain };
    } catch {
      // safe fallback
    }
  }

  // Bip sutil de contagem do Pacto dos 3 Segundos
  public playTick(step: number) {
    if (this.isMuted) return;
    try {
      const ctx = this.getContext();
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      const freq = step === 3 ? 880 : 440 + step * 100;
      osc.frequency.setValueAtTime(freq, now);
      osc.type = 'sine';

      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.18);
    } catch {
      // safe fallback
    }
  }

  public stopCurrent() {
    if (this.currentNodes && this.ctx) {
      try {
        const now = this.ctx.currentTime;
        this.currentNodes.gain.gain.cancelScheduledValues(now);
        this.currentNodes.gain.gain.exponentialRampToValueAtTime(0.001, now + 0.6);
        setTimeout(() => {
          this.currentNodes?.oscs.forEach((osc) => {
            try {
              osc.stop();
            } catch {}
          });
          this.currentNodes = null;
        }, 700);
      } catch {
        this.currentNodes = null;
      }
    }
  }

  public toggleMute() {
    this.isMuted = !this.isMuted;
    if (this.isMuted) {
      this.stopCurrent();
    }
    return this.isMuted;
  }
}

export const scenicAudio = new ScenicAudioManager();
