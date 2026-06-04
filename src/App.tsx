/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import SkillsAndCertifications from './components/SkillsAndCertifications';
import Resume from './components/Resume';
import Projects from './components/Projects';
import ContactFooter from './components/ContactFooter';

export default function App() {
  return (
    <div className="min-h-screen bg-[#05080f] text-slate-100 flex flex-col font-sans antialiased selection:bg-blue-500/20 selection:text-blue-300">
      {/* Universal Sticky Header */}
      <Header />

      {/* Main Sections */}
      <main className="flex-grow">
        {/* Hero & About Emanuel */}
        <Hero />

        {/* Matrix of Skills & Credential cards */}
        <SkillsAndCertifications />

        {/* Professional Document Sheet Resume section */}
        <Resume />

        {/* Projects in detail with repository buttons */}
        <Projects />
      </main>

      {/* Footer Contact information */}
      <ContactFooter />
    </div>
  );
}

