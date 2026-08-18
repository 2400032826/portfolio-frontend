import React, { useState, useEffect } from 'react';
import { Award, CheckCircle2, Eye } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';
import CertificateModal from './CertificateModal';
import { playSound } from '../utils/audio';

export default function CertificationsSection({ soundEnabled, setCursorState }) {
  const [selectedCert, setSelectedCert] = useState(null);
  const [verifiedState, setVerifiedState] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVerifiedState(true);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  const handleOpenModal = (cert) => {
    playSound('modal', soundEnabled);
    setSelectedCert(cert);
  };

  return (
    <section id="certifications" className="py-20 px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center space-x-3 mb-2 font-mono text-xs text-cyan-400">
        <span>04</span>
        <span className="w-8 h-px bg-cyan-400/50" />
        <span>CERTIFICATIONS & CREDENTIALS</span>
      </div>

      <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3 tracking-tight">
        Verified <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400">Credentials</span>
      </h2>
      <p className="text-slate-400 text-sm max-w-xl mb-10">
        Official cloud certifications and industry-supported virtual internship achievements.
      </p>

      {/* Certification Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {certificationsData.map((cert) => (
          <div
            key={cert.id}
            className="cyber-glass p-8 rounded-3xl border border-cyan-500/20 hover:border-cyan-400/50 transition duration-300 flex flex-col justify-between space-y-6 group hover:-translate-y-1 shadow-[0_0_25px_rgba(0,240,255,0.05)]"
          >
            <div className="space-y-4">
              {/* Verification Status Badge */}
              <div className="flex items-center justify-between">
                <div className="p-3 bg-amber-500/10 border border-amber-500/30 text-amber-400 rounded-2xl">
                  <Award size={24} />
                </div>

                <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 font-mono text-xs font-bold rounded-full">
                  {verifiedState ? (
                    <>
                      <CheckCircle2 size={14} />
                      <span>✓ VERIFIED</span>
                    </>
                  ) : (
                    <>
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      <span>○ VERIFYING...</span>
                    </>
                  )}
                </div>
              </div>

              {/* Title & Issuer */}
              <div>
                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition mb-1">
                  {cert.title}
                </h3>
                <p className="text-cyan-400 font-mono text-xs font-bold">{cert.issuer}</p>
              </div>

              {/* Key Highlights / Metrics */}
              <div className="flex flex-wrap gap-2 pt-2">
                {cert.code && (
                  <span className="px-3 py-1 bg-slate-900 border border-amber-500/40 text-amber-300 font-mono text-xs font-bold rounded-lg">
                    {cert.code}
                  </span>
                )}
                {cert.score && (
                  <span className="px-3 py-1 bg-slate-900 border border-emerald-500/40 text-emerald-300 font-mono text-xs font-bold rounded-lg">
                    SCORE: {cert.score} ({cert.status})
                  </span>
                )}
                {cert.duration && (
                  <span className="px-3 py-1 bg-slate-900 border border-cyan-500/40 text-cyan-300 font-mono text-xs font-bold rounded-lg">
                    {cert.duration} ({cert.period})
                  </span>
                )}
                {cert.date && (
                  <span className="px-3 py-1 bg-slate-900 border border-slate-700 text-slate-300 font-mono text-xs rounded-lg">
                    {cert.date}
                  </span>
                )}
              </div>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">{cert.summary}</p>
            </div>

            {/* Action Trigger */}
            <button
              onClick={() => handleOpenModal(cert)}
              onMouseEnter={() => setCursorState({ type: 'hover', text: 'CERTIFICATE' })}
              onMouseLeave={() => setCursorState({ type: 'default', text: '' })}
              className="w-full bg-slate-900 hover:bg-cyan-400 text-slate-200 hover:text-slate-950 border border-slate-800 hover:border-cyan-400 font-mono font-bold text-xs py-3 rounded-xl transition flex items-center justify-center space-x-2 cursor-pointer"
            >
              <Eye size={16} />
              <span>VIEW CERTIFICATE</span>
            </button>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedCert && (
        <CertificateModal
          cert={selectedCert}
          onClose={() => setSelectedCert(null)}
          soundEnabled={soundEnabled}
        />
      )}
    </section>
  );
}
