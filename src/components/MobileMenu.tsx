import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { YearSection } from '../types';

interface MobileMenuProps {
  worksData: YearSection[];
  selectedWork: string | null;
  onWorkSelect: (workId: string) => void;
  isOpen: boolean;
  onToggle: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  worksData,
  selectedWork,
  onWorkSelect,
  isOpen,
  onToggle
}) => {
  const [expandedYears, setExpandedYears] = useState<Set<string>>(new Set(['2025']));

  const toggleYear = (year: string) => {
    const newExpanded = new Set(expandedYears);
    if (newExpanded.has(year)) {
      newExpanded.delete(year);
    } else {
      newExpanded.add(year);
    }
    setExpandedYears(newExpanded);
  };

  const handleWorkSelect = (workId: string) => {
    onWorkSelect(workId);
    onToggle(); // Close menu after selection
  };

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={onToggle}
        className="lg:hidden fixed top-4 right-4 z-50 p-2 bg-white rounded-lg shadow-lg"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={onToggle}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="absolute right-0 top-0 h-full w-80 bg-white shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="mb-8">
                  <h1 className="text-xl font-medium text-gray-900">박선영</h1>
                </div>

                <nav>
                  {worksData.map((yearSection) => (
                    <div key={yearSection.year} className="mb-6">
                      <button
                        onClick={() => toggleYear(yearSection.year)}
                        className="flex items-center text-sm text-gray-500 hover:text-gray-900 transition-colors duration-200 mb-3"
                      >
                        {expandedYears.has(yearSection.year) ? (
                          <ChevronDown className="w-4 h-4 mr-2" />
                        ) : (
                          <ChevronRight className="w-4 h-4 mr-2" />
                        )}
                        ∴{yearSection.year}
                      </button>
                      
                      <AnimatePresence>
                        {expandedYears.has(yearSection.year) && (
                          <motion.ul
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="ml-6 space-y-2"
                          >
                            {yearSection.works.map((work) => (
                              <motion.li
                                key={work.id}
                                initial={{ x: -10, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.1 }}
                              >
                                <button
                                  onClick={() => handleWorkSelect(work.id)}
                                  className={`sidebar-link ${
                                    selectedWork === work.id ? 'active' : ''
                                  }`}
                                >
                                  {work.title}
                                </button>
                              </motion.li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </nav>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileMenu; 