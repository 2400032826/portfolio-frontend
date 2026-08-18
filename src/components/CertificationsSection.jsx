import React, { useState } from 'react';
import { Award, CheckCircle2, Eye } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';
import CertificateModal from './CertificateModal';
import { playSound } from '../utils/audio';

export default function CertificationsSection({ soundEnabled, setCursorState }) {
  const [selectedCert, setSelectedCert] = useState(null);

  const handleOpenModal = (cert) => {
    playSound('modal', soundEnabled);
    setSelectedCert(cert);
  };

  return (
    <section id="certifications" className="py-20 px-6 max-w-6xl mx-auto bg-[#f0f6ff]">
      {/* Section Header */}
      <div className="flex items-center space-x-3 mb-2 font-mono text-xs text-[#2563eb] font-bold">
        <span>04</span>
        <span className="w-8 h-px bg-blue-200" />
        <span>CERTIFICATIONS & CREDENTIALS</span>
      </div>

      <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] mb-3 tracking-tight">
        Verified <span className="text-[#2563eb]">Certifications</span>
      </h2>
      <p className="text-slate-600 text-sm max-w-xl mb-10 font-medium">
        Official cloud certifications and industry-supported virtual internship achievements.
      </p>

      {/* Direct Visible Certificate Document Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {certificationsData.map((cert) => (
          <div
            key={cert.id}
            className="bg-white p-6 sm:p-8 rounded-3xl border border-blue-200 shadow-sm hover:shadow-md transition duration-300 flex flex-col justify-between space-y-6 group hover:-translate-y-1 relative overflow-hidden"
          >
            {/* Top Red Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#ef4444]" />

            {/* Framed Document Preview Card (DIRECTLY VISIBLE ON PAGE) */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-2.5 bg-blue-50 border border-blue-200 text-[#2563eb] rounded-2xl">
                  <Award size={22} />
                </div>

                <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-emerald-50 border border-emerald-200 text-emerald-700 font-mono text-xs font-bold rounded-full">
                  <CheckCircle2 size={14} />
                  <span>VERIFIED</span>
                </div>
              </div>

              {/* Document Visual Mini Frame */}
              {cert.id === 'aws-clf-c02' ? (
                <div className="bg-[#f8fafc] p-5 border border-slate-200 rounded-2xl space-y-3 font-sans text-[#0f172a]">
                  <div className="flex justify-between items-start border-b border-slate-200 pb-2">
                    <div>
                      <span className="text-lg font-black text-amber-600 font-mono">aws</span>
                      <span className="text-[10px] text-slate-500 block uppercase font-mono font-bold">training & certification</span>
                    </div>
                    <span className="text-[10px] font-mono font-bold bg-amber-100 text-amber-900 px-2 py-0.5 rounded">CLF-C02</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
                    <div>
                      <span className="text-slate-500 block text-[9px]">SCORE</span>
                      <span className="font-extrabold text-emerald-700 text-xs">865 / 1000</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-[9px]">RESULT</span>
                      <span className="font-extrabold text-emerald-700 text-xs">PASS</span>
                    </div>
                  </div>

                  <p className="text-[11px] text-slate-700 leading-snug font-medium">
                    AWS Certified Cloud Practitioner Notice of Exam Results (June 16, 2026).
                  </p>
                </div>
              ) : (
                <div className="bg-[#f8fafc] p-5 border border-slate-200 rounded-2xl space-y-3 font-sans text-[#0f172a] text-center">
                  <div className="flex justify-between items-center text-[10px] font-mono text-slate-500 border-b border-slate-200 pb-2 font-bold">
                    <span>AICTE</span>
                    <span>EduSkills</span>
                    <span>Siemens</span>
                  </div>

                  <div className="space-y-1 py-1">
                    <span className="text-[10px] font-mono font-bold text-[#2563eb] block uppercase">Data Science Master Virtual Internship</span>
                    <span className="text-xs font-extrabold text-[#0f172a] block">k Venkat chowdary — KL University</span>
                    <span className="text-[10px] text-slate-600 block font-medium">8 Weeks (April – June 2026)</span>
                  </div>

                  <div className="pt-1">
                    <span className="text-[9px] font-mono text-slate-400 block uppercase">Supported By</span>
                    <span className="text-sm font-extrabold text-teal-700 font-mono">SIEMENS</span>
                  </div>
                </div>
              )}

              {/* Title & Summary */}
              <div>
                <h3 className="text-xl font-bold text-[#0f172a] group-hover:text-[#2563eb] transition mb-1">
                  {cert.title}
                </h3>
                <p className="text-[#2563eb] font-mono text-xs font-bold">{cert.issuer}</p>
              </div>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{cert.summary}</p>
            </div>

            {/* Action Trigger */}
            <button
              onClick={() => handleOpenModal(cert)}
              onMouseEnter={() => setCursorState({ type: 'hover', text: 'VIEW' })}
              onMouseLeave={() => setCursorState({ type: 'default', text: '' })}
              className="w-full bg-[#0f172a] hover:bg-[#2563eb] text-white font-sans font-bold text-xs py-3 rounded-xl transition shadow-xs flex items-center justify-center space-x-2 cursor-pointer"
            >
              <Eye size={16} />
              <span>VIEW FULL CERTIFICATE</span>
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
