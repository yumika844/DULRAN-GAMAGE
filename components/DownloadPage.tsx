import React from 'react';
import type { Paper, Note } from '../types';

interface DownloadPageProps {
  subject: string;
  year: string;
  type: string;
  downloadLink: string;
  allPapers: { [key: string]: Paper[] };
  allNotes: Note[];
}

const quotes = [
    { text: "The secret of getting ahead is getting started.", author: "Mark Twain" },
    { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
    { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" }
];

const getRandomQuote = () => {
    return quotes[Math.floor(Math.random() * quotes.length)];
};

const DownloadPage: React.FC<DownloadPageProps> = ({ subject, year, type, downloadLink, allPapers, allNotes }) => {
  const quote = getRandomQuote();

  const isNote = year === 'note';
  let suggestions: (Paper | Note)[] = [];

  if (!isNote && allPapers[subject]) {
      suggestions = allPapers[subject]
          .filter(p => p.year.toString() !== year)
          .slice(0, 3);
  } else if (isNote) {
      suggestions = allNotes
          .filter(n => n.title !== subject)
          .slice(0, 3);
  }

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col items-center p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-4xl flex-grow flex flex-col justify-center">
            <div className='w-full'>
              <a href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300 mb-8">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                  </svg>
                  Back to Home
              </a>
              
              <main className="bg-white rounded-xl shadow-lg p-8 md:p-12 text-center">
                  <h1 className="text-3xl sm:text-4xl font-bold text-blue-800">
                      {subject} {isNote ? '' : year}
                  </h1>
                  <p className="text-xl text-slate-600 mt-2">{type}</p>
                  
                  <a 
                      href={downloadLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="mt-8 inline-flex items-center justify-center bg-green-700 text-white font-bold py-4 px-10 rounded-lg hover:bg-green-800 transition-colors duration-300 text-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                  >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      Download Now
                  </a>
                  <p className="text-sm text-slate-500 mt-4">Your download should start automatically.</p>
              </main>

              {suggestions.length > 0 && (
                <section className="mt-12">
                    <h2 className="text-2xl font-bold text-center text-slate-700 mb-6">You might also like...</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {suggestions.map((item, index) => {
                          if ('year' in item) { // It's a Paper
                              const paper = item as Paper;
                              return (
                                  <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center">
                                      <h3 className="font-semibold text-slate-800">{subject} {paper.year}</h3>
                                      <div className="mt-3 space-y-2">
                                          <a href={`?view=download&subject=${encodeURIComponent(subject)}&year=${paper.year}&type=Paper&link=${encodeURIComponent(paper.paperLink)}`} className="block text-sm text-blue-600 hover:underline">Download Paper</a>
                                          <a href={`?view=download&subject=${encodeURIComponent(subject)}&year=${paper.year}&type=Marking%20Scheme&link=${encodeURIComponent(paper.markingSchemeLink)}`} className="block text-sm text-blue-600 hover:underline">Marking Scheme</a>
                                      </div>
                                  </div>
                              )
                          } else { // It's a Note
                              const note = item as Note;
                              return (
                                <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center">
                                    <h3 className="font-semibold text-slate-800 h-12 flex items-center justify-center">{note.title}</h3>
                                    <div className="mt-3">
                                        <a href={`?view=download&subject=${encodeURIComponent(note.title)}&year=note&type=Notes&link=${encodeURIComponent(note.noteLink)}`} className="block text-sm text-blue-600 hover:underline">Download Notes</a>
                                    </div>
                                </div>
                              )
                          }
                        })}
                    </div>
                </section>
              )}

              <div className="mt-12 text-center text-slate-600 p-6 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-xl font-medium italic">"{quote.text}"</p>
                  <p className="mt-3 text-md">- {quote.author}</p>
              </div>
            </div>
        </div>
    </div>
  );
};

export default DownloadPage;
