import React from 'react';
import type { Paper } from '../types';

interface PaperCardProps {
  paper: Paper;
  subject: string;
}

const DownloadIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
);


const PaperCard: React.FC<PaperCardProps> = ({ paper, subject }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1 p-6 flex flex-col items-center text-center">
      <div className="bg-blue-100 text-blue-800 rounded-full h-16 w-16 flex items-center justify-center mb-4">
        <span className="text-2xl font-bold">{paper.year}</span>
      </div>
      <h3 className="text-xl font-semibold text-slate-700 mb-4">Past Paper</h3>
      <div className="space-y-3 w-full">
         <a
          href={`?view=download&subject=${encodeURIComponent(subject)}&year=${paper.year}&type=Paper&link=${encodeURIComponent(paper.paperLink)}`}
          className="w-full flex items-center justify-center bg-green-700 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-800 transition-colors duration-300"
        >
          <DownloadIcon />
          Download Paper
        </a>
        <a
          href={`?view=download&subject=${encodeURIComponent(subject)}&year=${paper.year}&type=Marking%20Scheme&link=${encodeURIComponent(paper.markingSchemeLink)}`}
          className="w-full flex items-center justify-center bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300"
        >
          <DownloadIcon />
          Marking Scheme
        </a>
      </div>
    </div>
  );
};

export default PaperCard;