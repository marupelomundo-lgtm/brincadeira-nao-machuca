export type TargetAudience = '5º ao 7º ano (11 a 15 anos)';

export interface PresenterNotes {
  spokenText: string;
  emotionalIntent: string;
  rhythm: string;
  suggestedPauseSec: number;
  whereToLook: string;
  wordsToEmphasize: string[];
  misinterpretationRisk: string;
  recoveryAttentionTip: string;
}

export interface ImagePrompt {
  pt: string;
  en: string;
  palette: string;
  lighting: string;
}

export interface SlideData {
  id: string;
  number: number;
  actNumber: number;
  actTitle: string;
  title: string;
  onScreenText: string;
  subtitle?: string;
  layout: 'cinematic-image' | 'minimal-quote' | 'interactive-question' | 'three-pillars' | 'split-mirror' | 'final-call';
  imageSrc?: string;
  imageAlt?: string;
  narrativeFunction: string;
  durationMinutes40: number;
  durationMinutes60: number;
  spokenSummary: string;
  notes: PresenterNotes;
  imagePrompt?: ImagePrompt;
  slideTriggerPhrase?: string;
  whenToAdvance?: string;
  interactiveSignal?: {
    type: 'poll' | 'silence' | 'mental-choice' | 'collective-gesture';
    prompt: string;
    instruction: string;
  };
}

export interface ActData {
  number: number;
  title: string;
  subtitle: string;
  duration40m: string;
  duration60m: string;
  narrativeGoal: string;
  fullSpokenScript: string;
  pauseIndications: string[];
  toneOfVoice: string;
  audienceQuestions: string[];
  transitionToNext: string;
  impactPhrase: string;
  associatedSlideNumbers: number[];
}

export interface ImpactPhrase {
  id: string;
  text: string;
  category: 'abertura' | 'transição' | 'reflexão' | 'ação segura' | 'encerramento';
  actRef?: number;
}

export interface PresentationConfig {
  presenterName: string;
  presenterRole: string;
  schoolName: string;
  cityState: string;
  durationMinutes: 40 | 50 | 60;
  audienceSize: string;
  availableResources: string;
  preferredTone: 'cinematográfico e empático' | 'mais provocador' | 'mais poético' | 'mais direto';
  schoolSupportChannel: string;
}

export interface ChecklistItem {
  id: string;
  category: 'técnica' | 'narrativa' | 'segurança' | 'pessoal';
  text: string;
  completed: boolean;
}
