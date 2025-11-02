import React from 'react';
import type { Note } from '../types';
import NoteCard from './NoteCard';

interface NotesSectionProps {
  title: string;
  notes: Note[];
}

const NotesSection: React.FC<NotesSectionProps> = ({ title, notes }) => {
  return (
    <section>
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {notes.map((note) => (
          <NoteCard key={note.title} note={note} />
        ))}
      </div>
    </section>
  );
};

export default NotesSection;
