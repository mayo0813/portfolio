import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Work } from '../types';

interface WorkDetailProps {
  work: Work | null;
}

const WorkDetail: React.FC<WorkDetailProps> = ({ work }) => {
  if (!work) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex items-center justify-center h-96 text-gray-500"
      >
        <p className="text-lg">작품을 선택해주세요</p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full lg:w-[700px] lg:mx-32 xl:mx-80"
    >
      <div className="w-full">
        {/* Image Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <div className="w-full">
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img
                src={work.imageUrl}
                alt={work.title}
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                style={{ maxHeight: '80vh' }}
              />
            </div>
          </div>
        </motion.div>

        {/* Work Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-6"
        >
          <div>
            <h2 className="text-2xl font-medium italic mb-2">{work.title}</h2>
            <p className="text-gray-600 mb-1">{work.year}</p>
            <p className="text-gray-500 text-sm">{work.materials}</p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="prose prose-gray max-w-none"
          >
            <div className="text-sm leading-relaxed text-gray-700 space-y-4">
              {work.description.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <a
              href={work.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              PLAY
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default WorkDetail; 