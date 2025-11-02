import React from 'react';

const Advertisement: React.FC = () => {
  return (
    <section className="mt-16">
      <div className="bg-slate-200 border border-slate-300 rounded-lg p-8 text-center">
        <h3 className="text-xl font-semibold text-slate-600">Advertisement</h3>
        <p className="text-slate-500 mt-2">Your ad banner could be here. Contact us for details.</p>
      </div>
    </section>
  );
};

export default Advertisement;