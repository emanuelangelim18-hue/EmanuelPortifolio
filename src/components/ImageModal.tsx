import { X, ExternalLink, ZoomIn } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  title: string;
  issuer: string;
}

export default function ImageModal({ isOpen, onClose, imageUrl, title, issuer }: ImageModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md cursor-zoom-out"
        >
          <motion.div
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl cursor-default"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-800 bg-slate-950/80 backdrop-blur-sm">
              <div>
                <h3 id="modal-title" className="text-lg font-semibold text-slate-100">{title}</h3>
                <p className="text-xs text-blue-400 font-mono">{issuer}</p>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={imageUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-400 hover:text-slate-100 hover:bg-slate-800 rounded-lg transition-colors flex items-center gap-1.5 text-xs font-mono"
                  title="Abrir em nova aba"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Ver original</span>
                </a>
                <button
                  onClick={onClose}
                  className="p-2 text-slate-400 hover:text-red-400 hover:bg-slate-800 rounded-lg transition-colors"
                  aria-label="Fechar"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Content Space */}
            <div className="relative aspect-video max-h-[70vh] flex items-center justify-center bg-slate-950 overflow-auto p-2">
              <img
                src={imageUrl}
                alt={`Certificado ${title}`}
                className="max-w-full max-h-[65vh] object-contain rounded shadow-lg select-none"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Footer */}
            <div className="p-3 bg-slate-950/40 text-center text-xs text-slate-500 font-mono border-t border-slate-900/60 flex items-center justify-center gap-1.5">
              <ZoomIn className="w-3.5 h-3.5 text-blue-500" />
              <span>Clique fora da imagem para retornar ao portfólio</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
