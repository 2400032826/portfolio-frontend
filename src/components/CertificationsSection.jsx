import React, { useState, useEffect, useRef } from 'react';
import { Award, CheckCircle2, Eye, X } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

function CertModal({ cert, onClose }) {
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    // Prevent body scroll while modal is open
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Certificate: ${cert.title}`}
      className="fixed inset-0 z-[9000] flex items-center justify-center p-3 sm:p-6"
      style={{ backgroundColor: 'rgba(15,23,42,0.80)', backdropFilter: 'blur(6px)' }}
      onClick={onClose}
    >
      <div
        className="relative bg-white w-full rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden"
        style={{
          maxWidth: '640px',
          maxHeight: '90vh',
          overflowY: 'auto',
          border: '1px solid #e2e8f0',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top red bar */}
        <div className="h-1" style={{ backgroundColor: '#ef4444' }} />

        <div className="p-5 sm:p-8">
          {/* Close button — large touch target */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 sm:top-5 sm:right-5 flex items-center justify-center rounded-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            style={{
              backgroundColor: '#f1f5f9',
              border: '1px solid #e2e8f0',
              color: '#64748b',
              width: '40px',
              height: '40px',
              minWidth: '40px',
              minHeight: '40px',
            }}
            aria-label="Close certificate"
          >
            <X size={18} />
          </button>

          {/* Verified badge */}
          <div
            className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-bold font-mono mb-4"
            style={{ backgroundColor: '#ecfdf5', border: '1px solid #a7f3d0', color: '#065f46' }}
          >
            <CheckCircle2 size={13} />
            <span>VERIFIED CREDENTIAL</span>
          </div>

          <h2
            className="font-extrabold mb-1 pr-10"
            style={{ color: '#0f172a', fontSize: 'clamp(1.25rem, 4vw, 1.75rem)' }}
          >
            {cert.title}
          </h2>
          <p className="text-sm font-bold font-mono mb-5" style={{ color: '#2563eb' }}>
            {cert.issuer}
          </p>

          {/* AWS Certificate Content */}
          {cert.id === 'aws-clf-c02' ? (
            <div
              className="rounded-2xl space-y-4"
              style={{ backgroundColor: '#f8fafc', border: '2px solid #e2e8f0', padding: '20px' }}
            >
              <div
                className="flex flex-wrap items-start justify-between gap-3 pb-4"
                style={{ borderBottom: '1px solid #e2e8f0' }}
              >
                <div>
                  <span className="text-lg sm:text-xl font-extrabold font-mono" style={{ color: '#b45309' }}>aws</span>
                  <span className="block text-xs font-semibold uppercase mt-0.5" style={{ color: '#94a3b8' }}>
                    training and certification
                  </span>
                </div>
                <div className="text-right">
                  <span className="block text-sm font-bold font-mono" style={{ color: '#0f172a' }}>
                    AWS Certified Cloud Practitioner
                  </span>
                  <span className="text-xs font-mono" style={{ color: '#94a3b8' }}>
                    Notice of Exam Results
                  </span>
                </div>
              </div>

              <div
                className="grid grid-cols-2 gap-3 rounded-xl p-4 font-mono"
                style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0' }}
              >
                {[
                  ['CANDIDATE', 'K VENKAT CHOWDARY'],
                  ['EXAM DATE', '6/16/2026'],
                  ['SCORE', '865 / 1000'],
                  ['RESULT', 'PASS'],
                ].map(([label, value]) => (
                  <div key={label}>
                    <span className="text-[10px] uppercase block mb-0.5" style={{ color: '#94a3b8' }}>{label}</span>
                    <span
                      className="font-bold text-sm"
                      style={{ color: label === 'SCORE' || label === 'RESULT' ? '#059669' : '#0f172a' }}
                    >
                      {value}
                    </span>
                  </div>
                ))}
              </div>

              <p className="text-sm font-semibold" style={{ color: '#0f172a' }}>
                Congratulations! You have successfully passed the AWS Certified Cloud Practitioner exam.
              </p>
              <p className="text-sm" style={{ color: '#64748b' }}>
                Passing score: 700. Your score: <strong>865 / 1000</strong>.
              </p>
              <p className="text-[10px] font-mono pt-2" style={{ borderTop: '1px solid #f1f5f9', color: '#94a3b8' }}>
                * Candidate ID and Registration Number are masked for privacy protection.
              </p>
            </div>
          ) : (
            /* Siemens Internship Certificate */
            <div
              className="rounded-2xl text-center space-y-4"
              style={{ backgroundColor: '#f8fafc', border: '2px solid #1e3a5f', padding: '20px' }}
            >
              <div
                className="flex flex-wrap justify-between items-center gap-2 text-xs font-mono pb-4"
                style={{ borderBottom: '1px solid #e2e8f0', color: '#64748b' }}
              >
                <span>MINISTRY OF EDUCATION</span>
                <span>AICTE</span>
                <span>EduSkills</span>
              </div>

              <div className="py-3 space-y-2">
                <p className="text-xs font-mono font-bold uppercase tracking-widest" style={{ color: '#1e40af' }}>
                  Certificate of Virtual Internship
                </p>
                <p className="text-xs" style={{ color: '#64748b' }}>This is to certify that</p>
                <h3 className="text-xl sm:text-2xl font-extrabold" style={{ color: '#0f172a' }}>
                  k Venkat chowdary
                </h3>
                <p className="text-sm font-bold" style={{ color: '#2563eb' }}>K L University</p>
                <p className="text-sm" style={{ color: '#64748b' }}>has successfully completed the 8-week</p>
                <h4 className="text-base sm:text-lg font-extrabold" style={{ color: '#0f172a' }}>
                  Data Science Master Virtual Internship
                </h4>
                <p className="text-sm font-semibold" style={{ color: '#64748b' }}>During April – June 2026</p>
              </div>

              <div>
                <p className="text-[10px] uppercase font-mono" style={{ color: '#94a3b8' }}>Supported By</p>
                <p className="text-xl font-extrabold font-mono tracking-wider" style={{ color: '#0d9488' }}>SIEMENS</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function CertificationsSection() {
  const [selectedCert, setSelectedCert] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add('section-visible'); },
      { threshold: 0.08 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="certifications"
      ref={ref}
      className="section-hidden py-16 sm:py-20 md:py-24 px-4 sm:px-6"
      style={{ backgroundColor: '#eaf2ff' }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Label */}
        <div className="flex items-center space-x-3 mb-3">
          <span className="text-xs font-mono font-bold" style={{ color: '#2563eb' }}>04</span>
          <span className="w-8 h-px" style={{ backgroundColor: '#bfdbfe' }} />
          <span className="text-xs font-mono font-bold" style={{ color: '#2563eb' }}>CERTIFICATIONS &amp; CREDENTIALS</span>
        </div>

        <h2 className="section-heading mb-3">
          Verified <span style={{ color: '#2563eb' }}>Certifications</span>
        </h2>
        <p className="text-sm mb-8 sm:mb-10" style={{ color: '#64748b' }}>
          Official cloud certifications and industry-supported virtual internship achievements.
        </p>

        {/* Cards — 1 col on mobile, 2 on md+ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
          {certificationsData.map((cert, certIdx) => (
            <div
              key={cert.id}
              className={`cert-card stagger-child stagger-${certIdx + 1} relative overflow-hidden rounded-2xl sm:rounded-3xl flex flex-col`}
              style={{ backgroundColor: '#ffffff', border: '1px solid #bfdbfe' }}
            >
              {/* Red top accent */}
              <div className="h-1 shrink-0" style={{ backgroundColor: '#ef4444' }} />

              <div className="p-5 sm:p-7 flex flex-col flex-1 space-y-4 sm:space-y-5">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="p-2.5 rounded-xl" style={{ backgroundColor: '#eaf2ff', color: '#2563eb' }}>
                    <Award size={20} />
                  </div>
                  <div
                    className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-full text-xs font-bold font-mono"
                    style={{ backgroundColor: '#ecfdf5', border: '1px solid #a7f3d0', color: '#065f46' }}
                  >
                    <CheckCircle2 size={12} className="check-icon" />
                    <span>VERIFIED</span>
                  </div>
                </div>

                {/* Inline certificate preview */}
                {cert.id === 'aws-clf-c02' ? (
                  <div
                    className="rounded-xl space-y-3"
                    style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', padding: '14px' }}
                  >
                    <div
                      className="flex items-start justify-between pb-2"
                      style={{ borderBottom: '1px solid #e2e8f0' }}
                    >
                      <div>
                        <span className="text-sm font-extrabold font-mono" style={{ color: '#b45309' }}>aws</span>
                        <span className="block text-[10px] font-mono font-bold uppercase" style={{ color: '#94a3b8' }}>
                          training &amp; certification
                        </span>
                      </div>
                      <span
                        className="text-[10px] font-mono font-bold px-2 py-0.5 rounded"
                        style={{ backgroundColor: '#fef3c7', color: '#92400e' }}
                      >
                        CLF-C02
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-xs font-mono">
                      <div>
                        <span className="block text-[9px] uppercase" style={{ color: '#94a3b8' }}>SCORE</span>
                        <span className="font-extrabold" style={{ color: '#059669' }}>865/1000</span>
                      </div>
                      <div>
                        <span className="block text-[9px] uppercase" style={{ color: '#94a3b8' }}>RESULT</span>
                        <span className="font-extrabold" style={{ color: '#059669' }}>PASS</span>
                      </div>
                      <div>
                        <span className="block text-[9px] uppercase" style={{ color: '#94a3b8' }}>DATE</span>
                        <span className="font-bold" style={{ color: '#0f172a' }}>Jun 2026</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div
                    className="rounded-xl text-center space-y-2"
                    style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', padding: '14px' }}
                  >
                    <div
                      className="flex justify-between text-[10px] font-mono pb-2"
                      style={{ borderBottom: '1px solid #e2e8f0', color: '#94a3b8' }}
                    >
                      <span>AICTE</span><span>EduSkills</span><span>Siemens</span>
                    </div>
                    <span className="block text-[10px] font-mono font-bold uppercase" style={{ color: '#2563eb' }}>
                      Data Science Master Virtual Internship
                    </span>
                    <span className="block text-sm font-extrabold" style={{ color: '#0f172a' }}>
                      k Venkat chowdary
                    </span>
                    <span className="block text-xs" style={{ color: '#64748b' }}>KL University · Apr–Jun 2026</span>
                    <span className="text-base font-extrabold font-mono" style={{ color: '#0d9488' }}>SIEMENS</span>
                  </div>
                )}

                {/* Title & Summary */}
                <div>
                  <h3 className="text-base sm:text-lg font-bold mb-1" style={{ color: '#0f172a' }}>{cert.title}</h3>
                  <p className="text-xs font-bold font-mono" style={{ color: '#2563eb' }}>{cert.issuer}</p>
                </div>
                <p className="text-xs sm:text-sm leading-relaxed flex-1" style={{ color: '#64748b' }}>
                  {cert.summary}
                </p>

                {/* View Full Button — 44px touch target */}
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="w-full flex items-center justify-center space-x-2 rounded-xl font-bold text-sm cursor-pointer transition-all duration-200"
                  style={{
                    backgroundColor: '#0f172a',
                    color: '#ffffff',
                    minHeight: '44px',
                    padding: '10px 16px',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#2563eb')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#0f172a')}
                  aria-label={`View full certificate for ${cert.title}`}
                >
                  <Eye size={15} />
                  <span>VIEW FULL CERTIFICATE</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedCert && <CertModal cert={selectedCert} onClose={() => setSelectedCert(null)} />}
    </section>
  );
}
