import React, { useState } from 'react';
import {
  Download,
  Printer,
  Copy,
  Check,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  FileText,
  Eye,
} from 'lucide-react';
import { RESUME } from './data/resumeData';

export default function App() {
  const [viewMode, setViewMode] = useState<'sheet' | 'pdf'>('sheet');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedAts, setCopiedAts] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(RESUME.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(RESUME.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleCopyAtsText = () => {
    const plainText = `
${RESUME.name}
${RESUME.location} • ${RESUME.phone} • ${RESUME.email}

PROFESSIONAL SUMMARY
${RESUME.summary}

CORE COMPETENCIES & TECHNICAL SKILLS
${RESUME.competencies.map((c) => `${c.category}: ${c.skills}`).join('\n')}

PROFESSIONAL EXPERIENCE
${RESUME.experience
  .map(
    (exp) => `
${exp.role} | ${exp.company}
${exp.period} | ${exp.location}
${exp.bullets.map((b) => `• ${b.title}: ${b.description}`).join('\n')}
`
  )
  .join('\n')}

EDUCATION & ACADEMIC RESEARCH
${RESUME.education
  .map(
    (edu) => `
${edu.degree} — ${edu.institution}  ${edu.period}
${edu.dissertation ? `${edu.dissertation.title}\n${edu.dissertation.description}` : ''}
`
  )
  .join('\n')}

CERTIFICATIONS
${RESUME.certifications.join(' • ')}
    `.trim();

    navigator.clipboard.writeText(plainText);
    setCopiedAts(true);
    setTimeout(() => setCopiedAts(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#0b1326] text-[#dae2fd] font-['Geist'] selection:bg-[#c0c1ff]/25 selection:text-white pb-16">
      
      {/* Top Action Toolbar (Hidden during print) */}
      <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#0b1326]/90 border-b border-[#222a3d] no-print">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          
          {/* Brand & 1-Pager Tag */}
          <div className="flex items-center gap-3 shrink-0">
            <span className="font-bold font-['Space_Grotesk'] text-base sm:text-lg text-[#dae2fd]">
              Siddhi Mehendale
            </span>
            <span className="hidden sm:inline-block text-[11px] font-['JetBrains_Mono'] px-2 py-0.5 rounded bg-[#131b2e] border border-[#222a3d] text-[#c0c1ff]">
              1-Page Resume
            </span>
          </div>

          {/* View Mode Toggle: Interactive 1-Pager vs Original PDF */}
          <div className="flex items-center p-1 rounded-lg bg-[#131b2e] border border-[#222a3d] text-xs font-['JetBrains_Mono']">
            <button
              onClick={() => setViewMode('sheet')}
              className={`px-3 py-1.5 rounded-md transition-colors flex items-center gap-1.5 ${
                viewMode === 'sheet'
                  ? 'bg-[#222a3d] text-[#dae2fd] font-semibold'
                  : 'text-[#908fa0] hover:text-[#dae2fd]'
              }`}
            >
              <FileText className="w-3.5 h-3.5 text-[#c0c1ff]" />
              <span>Resume Sheet</span>
            </button>
            <button
              onClick={() => setViewMode('pdf')}
              className={`px-3 py-1.5 rounded-md transition-colors flex items-center gap-1.5 ${
                viewMode === 'pdf'
                  ? 'bg-[#222a3d] text-[#dae2fd] font-semibold'
                  : 'text-[#908fa0] hover:text-[#dae2fd]'
              }`}
            >
              <Eye className="w-3.5 h-3.5 text-[#4fdbc8]" />
              <span>Original PDF</span>
            </button>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyAtsText}
              className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#131b2e] border border-[#222a3d] hover:bg-[#171f33] text-xs font-['JetBrains_Mono'] text-[#c7c4d7] hover:text-[#dae2fd] transition-colors"
              title="Copy plain ATS text version"
            >
              {copiedAts ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#4fdbc8]" />
                  <span>Copied Text</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy ATS</span>
                </>
              )}
            </button>

            <button
              onClick={handlePrint}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#131b2e] border border-[#222a3d] hover:bg-[#171f33] text-xs font-['JetBrains_Mono'] text-[#c7c4d7] hover:text-[#dae2fd] transition-colors"
              title="Print or save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>

            <a
              href={RESUME.pdfUrl}
              download="Siddhi_Mehendale_Resume.pdf"
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold font-['JetBrains_Mono'] uppercase tracking-wider text-[#060e20] bg-[#c0c1ff] hover:bg-[#d6d7ff] rounded-lg transition-colors shadow-sm shrink-0"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
          </div>

        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 pt-6 sm:pt-8">
        
        {viewMode === 'pdf' ? (
          /* Embedded Original PDF Preview */
          <div className="rounded-2xl bg-[#131b2e] border border-[#222a3d] overflow-hidden shadow-2xl h-[86vh] flex flex-col">
            <div className="px-4 py-2.5 bg-[#0b1326] border-b border-[#222a3d] flex items-center justify-between text-xs font-['JetBrains_Mono'] text-[#908fa0]">
              <span>Siddhi_Mehendale_-_Resume_17766d60.pdf</span>
              <a
                href={RESUME.pdfUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-[#c0c1ff] hover:underline"
              >
                <span>Open in Tab</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <iframe
              src={`${RESUME.pdfUrl}#toolbar=1&navpanes=0`}
              title="Siddhi Mehendale Resume PDF"
              className="w-full flex-1 border-none"
            />
          </div>
        ) : (
          /* Exact 1-Page Executive Resume Sheet */
          <div className="print-page bg-[#131b2e] border border-[#222a3d] rounded-2xl p-6 sm:p-10 shadow-2xl space-y-6 text-[#dae2fd]">
            
            {/* Header Block */}
            <div className="text-center space-y-2 pb-4 border-b border-[#222a3d] print-border">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-['Space_Grotesk'] tracking-wide text-[#dae2fd] print-text-dark uppercase">
                {RESUME.name}
              </h1>

              {/* Unboxed Metadata with Typographic Separators */}
              <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs font-['JetBrains_Mono'] text-[#908fa0] print-text-muted">
                <span>{RESUME.location}</span>
                <span aria-hidden="true">·</span>
                <button
                  onClick={handleCopyPhone}
                  className="hover:text-[#dae2fd] transition-colors inline-flex items-center gap-1"
                  title="Click to copy phone"
                >
                  <Phone className="w-3 h-3 text-[#7bd0ff] no-print" />
                  <span>{RESUME.phone}</span>
                  {copiedPhone && <span className="text-[#4fdbc8] text-[10px] no-print">(Copied)</span>}
                </button>
                <span aria-hidden="true">·</span>
                <button
                  onClick={handleCopyEmail}
                  className="hover:text-[#c0c1ff] transition-colors inline-flex items-center gap-1"
                  title="Click to copy email"
                >
                  <Mail className="w-3 h-3 text-[#c0c1ff] no-print" />
                  <span>{RESUME.email}</span>
                  {copiedEmail && <span className="text-[#4fdbc8] text-[10px] no-print">(Copied)</span>}
                </button>
              </div>
            </div>

            {/* Professional Summary */}
            <section className="space-y-2">
              <h2 className="text-xs font-bold font-['Space_Grotesk'] tracking-wider uppercase text-[#c0c1ff] print-text-dark border-b border-[#222a3d] pb-1 print-border">
                Professional Summary
              </h2>
              <p className="text-xs sm:text-sm font-['Geist'] text-[#c7c4d7] print-text-muted leading-relaxed">
                {RESUME.summary}
              </p>
            </section>

            {/* Core Competencies & Technical Skills */}
            <section className="space-y-2">
              <h2 className="text-xs font-bold font-['Space_Grotesk'] tracking-wider uppercase text-[#c0c1ff] print-text-dark border-b border-[#222a3d] pb-1 print-border">
                Core Competencies & Technical Skills
              </h2>
              <div className="space-y-1.5 text-xs font-['Geist'] text-[#c7c4d7] print-text-muted">
                {RESUME.competencies.map((c, i) => (
                  <div key={i} className="flex flex-col sm:flex-row sm:items-baseline gap-x-2">
                    <span className="font-bold font-['Space_Grotesk'] text-[#dae2fd] print-text-dark shrink-0 sm:w-48">
                      {c.category}:
                    </span>
                    <span className="text-xs font-['Geist'] text-[#c7c4d7] print-text-muted">
                      {c.skills}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Professional Experience */}
            <section className="space-y-4">
              <h2 className="text-xs font-bold font-['Space_Grotesk'] tracking-wider uppercase text-[#c0c1ff] print-text-dark border-b border-[#222a3d] pb-1 print-border">
                Professional Experience
              </h2>

              <div className="space-y-4">
                {RESUME.experience.map((exp, idx) => (
                  <div key={idx} className="space-y-1.5">
                    {/* Role Header */}
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                      <div className="text-sm font-bold font-['Space_Grotesk'] text-[#dae2fd] print-text-dark">
                        <span>{exp.role}</span>
                        <span className="font-normal text-[#908fa0] print-text-muted"> | </span>
                        <span className="text-[#c0c1ff] print-text-dark">{exp.company}</span>
                      </div>
                      <div className="text-xs font-['JetBrains_Mono'] text-[#908fa0] print-text-muted">
                        <span>{exp.period}</span>
                        <span> | </span>
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Bullet Points */}
                    <ul className="space-y-1 text-xs font-['Geist'] text-[#c7c4d7] print-text-muted list-disc list-outside pl-4">
                      {exp.bullets.map((b, bIdx) => (
                        <li key={bIdx} className="leading-relaxed">
                          <strong className="font-semibold text-[#dae2fd] print-text-dark">
                            {b.title}:
                          </strong>{' '}
                          {b.description}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Education & Academic Research */}
            <section className="space-y-3">
              <h2 className="text-xs font-bold font-['Space_Grotesk'] tracking-wider uppercase text-[#c0c1ff] print-text-dark border-b border-[#222a3d] pb-1 print-border">
                Education & Academic Research
              </h2>

              <div className="space-y-3">
                {RESUME.education.map((edu, eduIdx) => (
                  <div key={eduIdx} className="space-y-1">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-xs">
                      <div className="font-bold font-['Space_Grotesk'] text-[#dae2fd] print-text-dark">
                        <span>{edu.degree}</span>
                        <span className="font-normal text-[#908fa0] print-text-muted"> — </span>
                        <span className="text-[#4fdbc8] print-text-dark">{edu.institution}</span>
                      </div>
                      <div className="font-['JetBrains_Mono'] text-[#908fa0] print-text-muted">
                        {edu.period}
                      </div>
                    </div>

                    {edu.dissertation && (
                      <div className="pl-3 border-l-2 border-[#2d3449] print-border space-y-0.5 mt-1 text-xs">
                        <div className="font-semibold text-[#dae2fd] print-text-dark">
                          {edu.dissertation.title}
                        </div>
                        <p className="text-[11px] sm:text-xs text-[#c7c4d7] print-text-muted leading-relaxed">
                          {edu.dissertation.description}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Certifications */}
            <section className="space-y-2">
              <h2 className="text-xs font-bold font-['Space_Grotesk'] tracking-wider uppercase text-[#c0c1ff] print-text-dark border-b border-[#222a3d] pb-1 print-border">
                Certifications
              </h2>
              <div className="flex flex-wrap items-center gap-x-2 text-xs font-['JetBrains_Mono'] text-[#dae2fd] print-text-dark">
                {RESUME.certifications.map((cert, cIdx) => (
                  <React.Fragment key={cIdx}>
                    <span>{cert}</span>
                    {cIdx < RESUME.certifications.length - 1 && (
                      <span aria-hidden="true" className="text-[#4fdbc8] print-text-muted">
                        •
                      </span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </section>

          </div>
        )}

      </main>

    </div>
  );
}
