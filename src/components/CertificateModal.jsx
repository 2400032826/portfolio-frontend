import React, { useEffect } from 'react';
import { X, CheckCircle2 } from 'lucide-react';
import { playSound } from '../utils/audio';

export default function CertificateModal({ cert, onClose, soundEnabled }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!cert) return null;

  return (
    <div
      className="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-6 bg-slate-900/80 backdrop-blur-md animate-fadeIn font-sans"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-6 relative shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => {
            playSound('click', soundEnabled);
            onClose();
          }}
          className="absolute top-6 right-6 p-2 rounded-full border border-slate-200 bg-slate-100 text-slate-600 hover:text-slate-900 hover:border-slate-300 transition cursor-pointer"
        >
          <X size={18} />
        </button>

        {/* Modal Header */}
        <div className="space-y-1">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold font-mono">
            <CheckCircle2 size={14} />
            <span>VERIFIED CREDENTIAL</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">{cert.title}</h2>
          <p className="text-blue-600 text-xs sm:text-sm font-bold font-mono">{cert.issuer}</p>
        </div>

        {/* Full Framed Certificate Document Rendering */}
        {cert.id === 'aws-clf-c02' ? (
          <div className="bg-white p-6 sm:p-8 border-2 border-slate-300 rounded-2xl shadow-inner space-y-6 font-sans text-slate-800 relative">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <div className="space-y-0.5">
                <span className="text-xl font-extrabold text-amber-600 font-mono">aws</span>
                <span className="text-xs block text-slate-500 font-semibold uppercase">training and certification</span>
              </div>
              <div className="text-right">
                <span className="text-xs font-bold text-slate-900 block font-mono">AWS Certified Cloud Practitioner</span>
                <span className="text-[10px] text-slate-500 font-mono">Notice of Exam Results</span>
              </div>
            </div>

            {/* Exam Details Grid (Sensitive candidate ID / Reg # masked for privacy) */}
            <div className="grid grid-cols-2 gap-4 text-xs font-mono bg-slate-50 p-4 border border-slate-200 rounded-xl">
              <div>
                <span className="text-slate-500 block uppercase text-[10px]">CANDIDATE</span>
                <span className="font-bold text-slate-900">K VENKAT CHOWDARY</span>
              </div>
              <div>
                <span className="text-slate-500 block uppercase text-[10px]">EXAM DATE</span>
                <span className="font-bold text-slate-900">6/16/2026</span>
              </div>
              <div>
                <span className="text-slate-500 block uppercase text-[10px]">CANDIDATE SCORE</span>
                <span className="font-bold text-emerald-600 text-sm">865 / 1000</span>
              </div>
              <div>
                <span className="text-slate-500 block uppercase text-[10px]">RESULT</span>
                <span className="font-bold text-emerald-600 text-sm">PASS</span>
              </div>
            </div>

            <div className="text-xs text-slate-700 leading-relaxed space-y-2">
              <p className="font-bold text-slate-900">
                Congratulations! You have successfully completed the AWS Certified Cloud Practitioner and you are now AWS Certified.
              </p>
              <p className="text-slate-600">
                The AWS Certified Cloud Practitioner (CLF-C02) has a scaled score between 100 and 1,000. The scaled score needed to pass the exam is 700.
              </p>
            </div>

            <div className="text-[10px] text-slate-400 font-mono border-t border-slate-100 pt-3 flex justify-between">
              <span>* Candidate ID and Registration Number masked for privacy protection.</span>
              <span>AWS Training and Certification</span>
            </div>
          </div>
        ) : (
          <div className="bg-white p-6 sm:p-8 border-4 border-blue-900 rounded-2xl shadow-inner space-y-6 font-sans text-slate-800 text-center relative">
            {/* Certificate Header logos */}
            <div className="flex justify-between items-center text-xs font-mono border-b border-slate-200 pb-3 text-slate-600">
              <span>MINISTRY OF EDUCATION</span>
              <span>AICTE</span>
              <span>NATIONAL INTERNSHIP PORTAL</span>
              <span>EduSkills</span>
            </div>

            <div className="space-y-2 py-4">
              <span className="text-xs font-mono font-bold text-blue-800 uppercase tracking-widest block">
                CERTIFICATE OF VIRTUAL INTERNSHIP
              </span>
              <p className="text-xs text-slate-500">This is to certify that</p>
              <h3 className="text-2xl font-extrabold text-slate-900 py-1">k Venkat chowdary</h3>
              <p className="text-sm font-bold text-blue-700">K L University</p>
              <p className="text-xs text-slate-600 pt-2">has successfully completed the 8-weeks</p>
              <h4 className="text-lg font-extrabold text-slate-900">Data Science Master Virtual Internship</h4>
              <p className="text-xs font-semibold text-slate-700">During April – June 2026</p>
            </div>

            {/* Siemens Support Logo Badge */}
            <div className="pt-2">
              <span className="text-[10px] font-mono text-slate-400 block uppercase">Supported By</span>
              <span className="text-xl font-extrabold text-teal-600 tracking-wider font-mono">SIEMENS</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
