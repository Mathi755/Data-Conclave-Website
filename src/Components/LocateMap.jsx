import React from 'react';

const LocateMap = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-4 w-full">
        <div className="p-2 text-xl text-center md:text-2xl px-2 text-center text-[#ff00cc] bg-gradient-to-br from-[#fc03e3] to-[#a6033c] bg-clip-text text-transparent font-sans font-semibold">Data Science Conclave Promo</div>
        <div className="flex flex-col justify-center py-3 px-3 overflow-hidden">
          <iframe
            className="w-80 h-80 rounded outline outline-white outline-2 shadow-md"
            src="https://www.instagram.com/p/DG3MF0ET6n6/embed"
            width="450"
            height="1000"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default LocateMap;