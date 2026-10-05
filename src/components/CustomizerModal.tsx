import React, { useState } from 'react';
import { X, Save, RotateCcw, Sliders } from 'lucide-react';
import { PresentationConfig } from '../types/presentation';
import { DEFAULT_CONFIG } from '../data/presentationData';

interface CustomizerModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: PresentationConfig;
  onSaveConfig: (newConfig: PresentationConfig) => void;
}

export const CustomizerModal: React.FC<CustomizerModalProps> = ({
  isOpen,
  onClose,
  config,
  onSaveConfig,
}) => {
  const [formData, setFormData] = useState<PresentationConfig>(config);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveConfig(formData);
    onClose();
  };

  const handleReset = () => {
    setFormData(DEFAULT_CONFIG);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
          <div className="flex items-center gap-2.5">
            <Sliders className="w-5 h-5 text-amber-400" />
            <div>
              <h3 className="text-lg font-serif font-bold text-white">
                Personalizar Palestra “A Plateia Decide”
              </h3>
              <p className="text-xs text-slate-400">
                Ajuste os dados da escola, palestrante e duração para adaptar o roteiro e slides em tempo real.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium text-slate-300 mb-1">
                Nome do Palestrante
              </label>
              <input
                type="text"
                value={formData.presenterName}
                onChange={(e) => setFormData({ ...formData, presenterName: e.target.value })}
                className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-slate-100 focus:outline-none focus:border-amber-400"
                placeholder="Ex: Adilson Vicente"
                required
              />
            </div>

            <div>
              <label className="block font-medium text-slate-300 mb-1">
                Cargo / Apresentação
              </label>
              <input
                type="text"
                value={formData.presenterRole}
                onChange={(e) => setFormData({ ...formData, presenterRole: e.target.value })}
                className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-slate-100 focus:outline-none focus:border-amber-400"
                placeholder="Ex: Policial Rodoviário Federal / Educador"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium text-slate-300 mb-1">
                Nome da Escola / Evento / Auditório
              </label>
              <input
                type="text"
                value={formData.schoolName}
                onChange={(e) => setFormData({ ...formData, schoolName: e.target.value })}
                className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-slate-100 focus:outline-none focus:border-amber-400"
                placeholder="Ex: Escola Estadual Machado de Assis"
                required
              />
            </div>

            <div>
              <label className="block font-medium text-slate-300 mb-1">
                Cidade / Estado
              </label>
              <input
                type="text"
                value={formData.cityState}
                onChange={(e) => setFormData({ ...formData, cityState: e.target.value })}
                className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-slate-100 focus:outline-none focus:border-amber-400"
                placeholder="Ex: Brasília / DF"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block font-medium text-slate-300 mb-1">
                Duração da Palestra
              </label>
              <select
                value={formData.durationMinutes}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    durationMinutes: Number(e.target.value) as 40 | 50 | 60,
                  })
                }
                className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-slate-100 focus:outline-none focus:border-amber-400"
              >
                <option value={40}>40 minutos (Ágil / 1 aula)</option>
                <option value={50}>50 minutos (Padrão)</option>
                <option value={60}>60 minutos (Completa & Solene)</option>
              </select>
            </div>

            <div>
              <label className="block font-medium text-slate-300 mb-1">
                Público Estimado
              </label>
              <input
                type="text"
                value={formData.audienceSize}
                onChange={(e) => setFormData({ ...formData, audienceSize: e.target.value })}
                className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-slate-100 focus:outline-none focus:border-amber-400"
                placeholder="Ex: 150 alunos (5º ao 7º ano)"
              />
            </div>

            <div>
              <label className="block font-medium text-slate-300 mb-1">
                Tom Narrativo Principal
              </label>
              <select
                value={formData.preferredTone}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    preferredTone: e.target.value as PresentationConfig['preferredTone'],
                  })
                }
                className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-slate-100 focus:outline-none focus:border-amber-400"
              >
                <option value="cinematográfico e empático">Cinematográfico e Empático</option>
                <option value="mais provocador">Mais Provocador</option>
                <option value="mais poético">Mais Poético</option>
                <option value="mais direto">Mais Direto</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block font-medium text-slate-300 mb-1">
              Canal de Acolhimento / Apoio da Escola
            </label>
            <input
              type="text"
              value={formData.schoolSupportChannel}
              onChange={(e) =>
                setFormData({ ...formData, schoolSupportChannel: e.target.value })
              }
              className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-slate-100 focus:outline-none focus:border-amber-400"
              placeholder="Ex: Serviço de Orientação Educacional (SOE) / Sala dos Professores"
            />
            <p className="text-[11px] text-slate-500 mt-1">
              Este canal será referenciado nas orientações de saída e nos slides finais.
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex items-center justify-between pt-5 border-t border-slate-800 mt-6">
            <button
              type="button"
              onClick={handleReset}
              className="flex items-center gap-1.5 px-3 py-2 text-slate-400 hover:text-white transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Restaurar Padrões</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-slate-300 hover:bg-slate-800 rounded-lg transition-colors"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="flex items-center gap-1.5 px-4 py-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-semibold rounded-lg transition-colors shadow-md"
              >
                <Save className="w-3.5 h-3.5" />
                <span>Salvar Configurações</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
