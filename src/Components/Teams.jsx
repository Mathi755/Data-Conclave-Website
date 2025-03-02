import React from "react";

const Teams = () => {
  return (
    <footer className="bg-transparent text-white px-8 sm:px-36 py-4">
      <div className="container mx-auto flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
        {/* Left Section */}
        <div className="text-sm text-center sm:text-left px-2 sm:px-10">
          &copy; {new Date().getFullYear()} Data Conclave<sup className="text-sup">TM</sup> All rights reserved.
        </div>

        {/* <div className="text-sm">
          Powered by <span className="font-bold">React JS</span>
        </div> */}

        <div className="text-sm text-center sm:text-left">
          Developed by <a href="https://dsbsstudentassociation.vercel.app/" target="_blank" rel="noopener noreferrer"><span className="font-bold">DSBS Student Association</span></a> & <a href="https://www.linkedin.com/company/the-data-science-club-srmist/posts/?feedView=all" target="_blank" rel="noopener noreferrer"><span className="font-bold">Data Science Club</span></a>
        </div>
      </div>
    </footer>
  );
};

export default Teams;