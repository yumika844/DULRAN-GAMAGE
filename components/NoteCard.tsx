import React from 'react';
import type { Note } from '../types';

interface NoteCardProps {
  note: Note;
}

const DocumentIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
);

const DownloadIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
);


const NoteCard: React.FC<NoteCardProps> = ({ note }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1 p-6 flex flex-col items-center text-center">
      <div className="bg-blue-100 text-blue-800 rounded-full h-16 w-16 flex items-center justify-center mb-4">
        <DocumentIcon />
      </div>
      <h3 className="text-xl font-semibold text-slate-700 mb-4 h-14 flex items-center justify-center">{note.title}</h3>
      <div className="w-full mt-auto">
         <a
          href={`?view=download&subject=${encodeURIComponent(note.title)}&year=note&type=Notes&link=${encodeURIComponent(note.noteLink)}`}
          className="w-full flex items-center justify-center bg-green-700 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-800 transition-colors duration-300"
        >
          <DownloadIcon />
          Download Notes
        </a>
      </div>
    </div>
  );
};

export default NoteCard;