import React, { useEffect } from 'react';
import { X, CheckCircle2, ShieldCheck } from 'lucide-react';
import { playSound } from '../utils/audio';

export default function CertificateModal({ cert, onClose, soundEnabled }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!cert) return null;

  return (
    <div
      className="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl animate-fadeIn font-mono"
      onClick={onClose}
    >
      <div
        className="cyber-glass w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border border-cyan-500/40 p-6 sm:p-8 space-y-6 relative shadow-[0_0_50px_rgba(0,240,255,0.25)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => {
            playSound('click', soundEnabled);
            onClose();
          }}
          className="absolute top-6 right-6 p-2 rounded-full border border-slate-700 bg-slate-900 text-slate-300 hover:text-cyan-400 hover:border-cyan-400 transition cursor-pointer"
        >
          <X size={18} />
        </button>

        {/* Modal Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-emerald-500/40 bg-emerald-950/40 text-emerald-400 text-xs">
            <CheckCircle2 size={14} />
            <span>VERIFIED CREDENTIAL</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">{cert.title}</h2>
          <p className="text-cyan-400 text-xs sm:text-sm font-bold">{cert.issuer}</p>
        </div>

        {/* High-Res Vector Certificate Display Graphic */}
        <div className="cyber-glass p-8 rounded-2xl border border-cyan-500/30 bg-[#07090e] space-y-6 text-center relative overflow-hidden">
          {/* Subtle Watermark */}
          <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
            <ShieldCheck size={280} className="text-cyan-400" />
          </div>

          <div className="space-y-1">
            <p className="text-xs text-slate-400 uppercase tracking-widest">OFFICIAL CERTIFICATE OF ACHIEVEMENT</p>
            <p className="text-xl font-bold text-white tracking-wide">{cert.title}</p>
            {cert.code && <p className="text-sm font-bold text-amber-400">EXAM CODE: {cert.code}</p>}
          </div>

          {/* Metric Badges inside Certificate */}
          <div className="flex flex-wrap justify-center gap-4 py-2">
            {cert.score && (
              <div className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-center">
                <span className="text-[10px] text-slate-400 block uppercase">SCORE</span>
                <span className="text-lg font-bold text-emerald-400">{cert.score}</span>
              </div>
            )}
            {cert.status && (
              <div className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-center">
                <span className="text-[10px] text-slate-400 block uppercase">STATUS</span>
                <span className="text-lg font-bold text-cyan-400">{cert.status}</span>
              </div>
            )}
            {cert.date && (
              <div className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-center">
                <span className="text-[10px] text-slate-400 block uppercase">DATE</span>
                <span className="text-xs font-bold text-white mt-1 block">{cert.date}</span>
              </div>
            )}
            {cert.duration && (
              <div className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-center">
                <span className="text-[10px] text-slate-400 block uppercase">DURATION</span>
                <span className="text-xs font-bold text-white mt-1 block">{cert.duration}</span>
              </div>
            )}
          </div>

          {/* Privacy Note */}
          <p className="text-[10px] text-slate-500 italic">
            * Candidate ID and Registration Identifiers masked for public privacy protection.
          </p>
        </div>

        {/* Certificate Breakdown Details */}
        <div className="space-y-2 text-xs sm:text-sm text-slate-300">
          <p className="text-slate-400 text-xs font-bold uppercase">// CREDENTIAL_HIGHLIGHTS</p>
          <ul className="space-y-2">
            {cert.details.map((d, idx) => (
              <li key={idx} className="flex items-start space-x-2">
                <span className="text-cyan-400">▸</span>
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
