import React, { useState } from 'react';
import Header from './components/Header';
import MotivationalQuote from './components/MotivationalQuote';
import PaperSection from './components/PaperSection';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import Advertisement from './components/Advertisement';
import NavigationTabs from './components/NavigationTabs';
import NotesSection from './components/NotesSection';
import DownloadPage from './components/DownloadPage';
import type { Paper, Note } from './types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Combined Maths');

  const generatePapers = (startYear: number, endYear: number): Paper[] => {
    const papers: Paper[] = [];
    for (let year = startYear; year >= endYear; year--) {
      papers.push({ year, paperLink: '#', markingSchemeLink: '#' });
    }
    return papers;
  };

  const combinedMathsPapers: Paper[] = generatePapers(2024, 2015);
  const physicsPapers: Paper[] = generatePapers(2024, 2015);
  const chemistryPapers: Paper[] = generatePapers(2024, 2015);

  const notesData: Note[] = [
    { title: 'Inorganic Chemistry Notes', noteLink: '#' },
    { title: 'Organic පරිවර්තන', noteLink: '#' },
    { title: 'C.Maths Pure Short Note', noteLink: '#' },
    { title: 'C.Maths Applied short note', noteLink: '#' },
    { title: 'Physics short note', noteLink: '#' },
  ];

  const urlParams = new URLSearchParams(window.location.search);
  const view = urlParams.get('view');

  if (view === 'download') {
    const subject = urlParams.get('subject') || 'Unknown';
    const year = urlParams.get('year') || 'N/A';
    const type = urlParams.get('type') || 'File';
    const link = urlParams.get('link') || '#';

    const allPapers = {
        'Combined Maths': combinedMathsPapers,
        'Physics': physicsPapers,
        'Chemistry': chemistryPapers,
    };

    return (
      <DownloadPage
        subject={subject}
        year={year}
        type={type}
        downloadLink={link}
        allPapers={allPapers}
        allNotes={notesData}
      />
    );
  }

  const renderContentSection = () => {
    switch (activeTab) {
      case 'Combined Maths':
        return <PaperSection title="Combined Maths Papers" papers={combinedMathsPapers} />;
      case 'Physics':
        return <PaperSection title="Physics Papers" papers={physicsPapers} />;
      case 'Chemistry':
        return <PaperSection title="Chemistry Papers" papers={chemistryPapers} />;
      case 'Notes':
        return <NotesSection title="Study Notes" notes={notesData} />;
      default:
        return null;
    }
  };


  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
      <Header />
      <main className="flex-grow">
        <MotivationalQuote />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <NavigationTabs activeTab={activeTab} setActiveTab={setActiveTab} />
          <div className="mt-12">
            {renderContentSection()}
          </div>
          <Advertisement />
          <AboutUs />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;