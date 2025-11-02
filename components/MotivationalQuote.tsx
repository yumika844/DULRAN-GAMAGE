import React from 'react';

const MotivationalQuote: React.FC = () => {
  return (
    <div className="relative h-64 bg-cover bg-center" style={{ backgroundImage: "url('https://cdn.wallpapersafari.com/56/16/EbrP8e.jpg')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white p-4">
          <p className="text-2xl md:text-4xl font-semibold italic">"You have to fight to reach your dream. You have to sacrifice and work hard for it."</p>
          <p className="mt-4 text-lg">- Lionel Messi</p>
        </div>
      </div>
    </div>
  );
};

export default MotivationalQuote;
