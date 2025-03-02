import React from 'react';

const LocateMap = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-4 w-full">
        <div className="p-2 text-xl text-center md:text-2xl px-2 text-center text-[#ff00cc] bg-gradient-to-br from-[#fc03e3] to-[#a6033c] bg-clip-text text-transparent font-sans font-semibold">Locate Us</div>
        <div className="flex flex-col justify-center py-3 px-3 overflow-hidden">
          <iframe
            className="w-50 h-60 rounded outline outline-white outline-2 shadow-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7780.62619968604!2d80.0348887935791!3d12.823032999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f712b82a78d9%3A0xfdb944a3aee53831!2sSRM%20Institute%20of%20Science%20and%20Technology!5e0!3m2!1sen!2sin!4v1740815279013!5m2!1sen!2sin" width="450" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        {/* <div className="pt-2 px-4 text-sm text-white">
          <p>Jerusalem College of Engineering (JCE),</p>
          <p>
            Pallikarnai <br /> Chennai 600100
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default LocateMap;
