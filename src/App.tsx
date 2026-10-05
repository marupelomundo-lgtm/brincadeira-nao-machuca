import React, { useState, useEffect } from 'react';
import { TopBar, ActiveTab } from './components/TopBar';
import { SlideViewer } from './components/SlideViewer';
import { PresenterMode } from './components/PresenterMode';
import { ScriptViewer } from './components/ScriptViewer';
import { EmotionalCurve } from './components/EmotionalCurve';
import { AudienceInteractionLab } from './components/AudienceInteractionLab';
import { ToolboxView } from './components/ToolboxView';
import { CustomizerModal } from './components/CustomizerModal';
import { PrintScript } from './components/PrintScript';
import { ACTS_DATA, DEFAULT_CONFIG, SLIDES_DATA } from './data/presentationData';
import { PresentationConfig, SlideData } from './types/presentation';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('slides');
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);
  const [isPrintOpen, setIsPrintOpen] = useState(false);

  // Configuration with local storage persistence
  const [config, setConfig] = useState<PresentationConfig>(() => {
    try {
      const saved = localStorage.getItem('plateia_decide_config');
      return saved ? JSON.parse(saved) : DEFAULT_CONFIG;
    } catch {
      return DEFAULT_CONFIG;
    }
  });

  const handleSaveConfig = (newConfig: PresentationConfig) => {
    setConfig(newConfig);
    try {
      localStorage.setItem('plateia_decide_config', JSON.stringify(newConfig));
    } catch {
      // safe fallback
    }
  };

  const handleSelectSlide = (index: number) => {
    setCurrentSlideIndex(index);
    setActiveTab('slides');
  };

  const handleSetDuration = (duration: 40 | 50 | 60) => {
    handleSaveConfig({
      ...config,
      durationMinutes: duration,
    });
  };

  return (
    <div className="flex flex-col w-screen h-screen bg-slate-950 text-slate-100 overflow-hidden font-sans">
      {/* Top Bar with standard 3-zone contract */}
      <TopBar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenCustomizer={() => setIsCustomizerOpen(true)}
        onOpenPrint={() => setIsPrintOpen(true)}
        presenterName={config.presenterName}
        durationMinutes={config.durationMinutes}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full h-full overflow-hidden relative">
        {activeTab === 'slides' && (
          <SlideViewer
            slides={SLIDES_DATA}
            currentSlideIndex={currentSlideIndex}
            setCurrentSlideIndex={setCurrentSlideIndex}
            durationMinutes={config.durationMinutes}
            presenterName={config.presenterName}
            schoolName={config.schoolName}
          />
        )}

        {activeTab === 'presenter' && (
          <PresenterMode
            slides={SLIDES_DATA}
            currentSlideIndex={currentSlideIndex}
            setCurrentSlideIndex={setCurrentSlideIndex}
            durationMinutes={config.durationMinutes}
            presenterName={config.presenterName}
          />
        )}

        {activeTab === 'script' && (
          <ScriptViewer
            acts={ACTS_DATA}
            slides={SLIDES_DATA}
            onSelectSlide={handleSelectSlide}
            durationMinutes={config.durationMinutes}
          />
        )}

        {activeTab === 'curve' && <EmotionalCurve />}

        {activeTab === 'interaction' && <AudienceInteractionLab />}

        {activeTab === 'toolbox' && (
          <ToolboxView
            durationMinutes={config.durationMinutes}
            setDurationMinutes={handleSetDuration}
            schoolSupportChannel={config.schoolSupportChannel}
          />
        )}
      </main>

      {/* Customizer Modal */}
      <CustomizerModal
        isOpen={isCustomizerOpen}
        onClose={() => setIsCustomizerOpen(false)}
        config={config}
        onSaveConfig={handleSaveConfig}
      />

      {/* Printable Stage View */}
      {isPrintOpen && (
        <PrintScript
          config={config}
          acts={ACTS_DATA}
          slides={SLIDES_DATA}
          onClose={() => setIsPrintOpen(false)}
        />
      )}
    </div>
  );
}
