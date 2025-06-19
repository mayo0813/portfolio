import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { YearSection } from '../types';

interface SidebarProps {
  worksData: YearSection[];
  selectedWork: string | null;
  onWorkSelect: (workId: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ worksData, selectedWork, onWorkSelect }) => {
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

  return (
    <motion.div
      initial={{ x: -200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-64 bg-white border-r border-gray-200 p-6 fixed h-full overflow-y-auto"
    >
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
                        onClick={() => onWorkSelect(work.id)}
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
    </motion.div>
  );
};

export default Sidebar; 