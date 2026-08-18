import React, { useState, useEffect, useRef } from 'react';
import { Award, CheckCircle2, Eye, X } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

function CertModal({ cert, onClose }) {
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[9000] flex items-center justify-center p-4 sm:p-8"
      style={{ backgroundColor: 'rgba(15,23,42,0.75)', backdropFilter: 'blur(6px)' }}
      onClick={onClose}
    >
      <div
        className="relative bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl p-8 shadow-2xl"
        style={{ border: '1px solid #e2e8f0' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full transition cursor-pointer"
          style={{ backgroundColor: '#f1f5f9', border: '1px solid #e2e8f0', color: '#64748b' }}
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

        <h2 className="text-2xl sm:text-3xl font-extrabold mb-1" style={{ color: '#0f172a' }}>
          {cert.title}
        </h2>
        <p className="text-sm font-bold font-mono mb-6" style={{ color: '#2563eb' }}>
          {cert.issuer}
        </p>

        {cert.id === 'aws-clf-c02' ? (
          <div
            className="p-6 rounded-2xl space-y-5"
            style={{ backgroundColor: '#f8fafc', border: '2px solid #e2e8f0' }}
          >
            <div className="flex items-center justify-between border-b pb-4" style={{ borderColor: '#e2e8f0' }}>
              <div>
                <span className="text-xl font-extrabold font-mono" style={{ color: '#b45309' }}>aws</span>
                <span className="block text-xs font-semibold uppercase" style={{ color: '#94a3b8' }}>
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
              className="grid grid-cols-2 gap-4 p-4 rounded-xl font-mono text-sm"
              style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0' }}
            >
              {[
                ['CANDIDATE', 'K VENKAT CHOWDARY'],
                ['EXAM DATE', '6/16/2026'],
                ['CANDIDATE SCORE', '865 / 1000'],
                ['RESULT', 'PASS'],
              ].map(([label, value]) => (
                <div key={label}>
                  <span className="text-[10px] uppercase block mb-0.5" style={{ color: '#94a3b8' }}>
                    {label}
                  </span>
                  <span
                    className="font-bold"
                    style={{ color: label === 'CANDIDATE SCORE' || label === 'RESULT' ? '#059669' : '#0f172a' }}
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
              Scaled score needed to pass: 700. Your score: 865 / 1000.
            </p>
            <p
              className="text-[10px] font-mono pt-2"
              style={{ borderTop: '1px solid #f1f5f9', color: '#94a3b8' }}
            >
              * Candidate ID and Registration Number are masked for privacy protection.
            </p>
          </div>
        ) : (
          <div
            className="p-6 rounded-2xl text-center space-y-5"
            style={{ backgroundColor: '#f8fafc', border: '2px solid #1e3a5f' }}
          >
            <div
              className="flex justify-between items-center text-xs font-mono pb-4"
              style={{ borderBottom: '1px solid #e2e8f0', color: '#64748b' }}
            >
              <span>MINISTRY OF EDUCATION</span>
              <span>AICTE</span>
              <span>EduSkills</span>
            </div>

            <div className="py-4 space-y-2">
              <p className="text-xs font-mono font-bold uppercase tracking-widest" style={{ color: '#1e40af' }}>
                Certificate of Virtual Internship
              </p>
              <p className="text-xs" style={{ color: '#64748b' }}>This is to certify that</p>
              <h3 className="text-2xl font-extrabold" style={{ color: '#0f172a' }}>
                k Venkat chowdary
              </h3>
              <p className="text-sm font-bold" style={{ color: '#2563eb' }}>K L University</p>
              <p className="text-sm" style={{ color: '#64748b' }}>
                has successfully completed the 8-week
              </p>
              <h4 className="text-lg font-extrabold" style={{ color: '#0f172a' }}>
                Data Science Master Virtual Internship
              </h4>
              <p className="text-sm font-semibold" style={{ color: '#64748b' }}>
                During April – June 2026
              </p>
            </div>

            <div>
              <p className="text-[10px] uppercase font-mono" style={{ color: '#94a3b8' }}>Supported By</p>
              <p className="text-xl font-extrabold font-mono tracking-wider" style={{ color: '#0d9488' }}>
                SIEMENS
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function CertificationsSection() {
  const [selectedCert, setSelectedCert] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.classList.add('section-visible');
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="certifications"
      ref={ref}
      className="section-hidden py-24 px-6"
      style={{ backgroundColor: '#eaf2ff' }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Label */}
        <div className="flex items-center space-x-3 mb-3">
          <span className="text-xs font-mono font-bold" style={{ color: '#2563eb' }}>04</span>
          <span className="w-8 h-px" style={{ backgroundColor: '#bfdbfe' }} />
          <span className="text-xs font-mono font-bold" style={{ color: '#2563eb' }}>
            CERTIFICATIONS &amp; CREDENTIALS
          </span>
        </div>

        <h2
          className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3"
          style={{ color: '#0f172a' }}
        >
          Verified <span style={{ color: '#2563eb' }}>Certifications</span>
        </h2>
        <p className="text-sm mb-10" style={{ color: '#64748b' }}>
          Official cloud certifications and industry-supported virtual internship achievements.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              className="card-hover relative overflow-hidden rounded-3xl flex flex-col"
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #bfdbfe',
              }}
            >
              {/* Top red accent */}
              <div
                className="h-1 shrink-0"
                style={{ backgroundColor: '#ef4444' }}
              />

              <div className="p-6 sm:p-8 flex flex-col flex-1 space-y-5">
                {/* Header row */}
                <div className="flex items-start justify-between">
                  <div
                    className="p-2.5 rounded-xl"
                    style={{ backgroundColor: '#eaf2ff', color: '#2563eb' }}
                  >
                    <Award size={22} />
                  </div>
                  <div
                    className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-bold font-mono"
                    style={{ backgroundColor: '#ecfdf5', border: '1px solid #a7f3d0', color: '#065f46' }}
                  >
                    <CheckCircle2 size={13} />
                    <span>VERIFIED</span>
                  </div>
                </div>

                {/* Inline document-style summary */}
                {cert.id === 'aws-clf-c02' ? (
                  <div
                    className="p-5 rounded-2xl space-y-3"
                    style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0' }}
                  >
                    <div
                      className="flex justify-between items-start pb-2"
                      style={{ borderBottom: '1px solid #e2e8f0' }}
                    >
                      <div>
                        <span className="text-base font-extrabold font-mono" style={{ color: '#b45309' }}>
                          aws
                        </span>
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
                    <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                      <div>
                        <span className="block text-[9px] uppercase" style={{ color: '#94a3b8' }}>SCORE</span>
                        <span className="font-extrabold" style={{ color: '#059669' }}>865 / 1000</span>
                      </div>
                      <div>
                        <span className="block text-[9px] uppercase" style={{ color: '#94a3b8' }}>RESULT</span>
                        <span className="font-extrabold" style={{ color: '#059669' }}>PASS</span>
                      </div>
                      <div>
                        <span className="block text-[9px] uppercase" style={{ color: '#94a3b8' }}>DATE</span>
                        <span className="font-bold" style={{ color: '#0f172a' }}>June 16, 2026</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div
                    className="p-5 rounded-2xl text-center space-y-2"
                    style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0' }}
                  >
                    <div
                      className="flex justify-between text-[10px] font-mono pb-2"
                      style={{ borderBottom: '1px solid #e2e8f0', color: '#94a3b8' }}
                    >
                      <span>AICTE</span>
                      <span>EduSkills</span>
                      <span>Siemens</span>
                    </div>
                    <span className="block text-[10px] font-mono font-bold uppercase" style={{ color: '#2563eb' }}>
                      Data Science Master Virtual Internship
                    </span>
                    <span className="block text-sm font-extrabold" style={{ color: '#0f172a' }}>
                      k Venkat chowdary — KL University
                    </span>
                    <span className="block text-xs" style={{ color: '#64748b' }}>
                      8 Weeks (April – June 2026)
                    </span>
                    <div className="pt-1">
                      <span className="block text-[9px] font-mono uppercase" style={{ color: '#94a3b8' }}>
                        Supported By
                      </span>
                      <span className="text-base font-extrabold font-mono" style={{ color: '#0d9488' }}>
                        SIEMENS
                      </span>
                    </div>
                  </div>
                )}

                {/* Title */}
                <div>
                  <h3 className="text-xl font-bold mb-1" style={{ color: '#0f172a' }}>
                    {cert.title}
                  </h3>
                  <p className="text-xs font-bold font-mono" style={{ color: '#2563eb' }}>
                    {cert.issuer}
                  </p>
                </div>

                <p className="text-sm leading-relaxed flex-1" style={{ color: '#64748b' }}>
                  {cert.summary}
                </p>

                {/* View button */}
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl font-bold text-sm transition-all duration-200 cursor-pointer hover:-translate-y-0.5"
                  style={{ backgroundColor: '#0f172a', color: '#ffffff' }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#2563eb')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#0f172a')}
                >
                  <Eye size={16} />
                  <span>VIEW FULL CERTIFICATE</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedCert && (
        <CertModal cert={selectedCert} onClose={() => setSelectedCert(null)} />
      )}
    </section>
  );
}
