import React from 'react';
import type { Paper } from '../types';
import PaperCard from './PaperCard';

interface PaperSectionProps {
  title: string;
  papers: Paper[];
}

const PaperSection: React.FC<PaperSectionProps> = ({ title, papers }) => {
  const subject = title.replace(' Papers', '');
  return (
    <section>
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {papers.map((paper) => (
          <PaperCard key={paper.year} paper={paper} subject={subject} />
        ))}
      </div>
    </section>
  );
};

export default PaperSection;