import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Sidebar from './components/Sidebar';
import WorkDetail from './components/WorkDetail';
import MobileMenu from './components/MobileMenu';
import { worksData } from './data/works';
import { Work } from './types';

const App: React.FC = () => {
  const [selectedWork, setSelectedWork] = useState<string | null>(null);
  const [currentWork, setCurrentWork] = useState<Work | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Find the selected work from data
  useEffect(() => {
    if (selectedWork) {
      const work = worksData
        .flatMap(year => year.works)
        .find(w => w.id === selectedWork);
      setCurrentWork(work || null);
    } else {
      setCurrentWork(null);
    }
  }, [selectedWork]);

  // Auto-select first work on mount
  useEffect(() => {
    if (worksData.length > 0 && worksData[0].works.length > 0) {
      setSelectedWork(worksData[0].works[0].id);
    }
  }, []);

  return (
    <div className="flex min-h-screen bg-white">
      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <Sidebar
          worksData={worksData}
          selectedWork={selectedWork}
          onWorkSelect={setSelectedWork}
        />
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        worksData={worksData}
        selectedWork={selectedWork}
        onWorkSelect={setSelectedWork}
        isOpen={isMobileMenuOpen}
        onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      />

      {/* Main Content */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex-1 lg:ml-64 p-4 lg:p-8 lg:p-12"
      >
        <div className="max-w-6xl mx-auto">
          <WorkDetail work={currentWork} />
        </div>
      </motion.main>
    </div>
  );
};

export default App; 