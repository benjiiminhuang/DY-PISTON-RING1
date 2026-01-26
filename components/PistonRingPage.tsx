
import React from 'react';

const PistonRingPage: React.FC = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] bg-white flex items-center justify-center p-4 md:p-12">
      <div className="max-w-7xl w-full flex justify-center items-center">
        {/* USER ASSET: Technical Detail Diagram */}
        <img 
          src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663280755586/BOduwFcOSHUGKmbv.png" 
          alt="Piston Ring Technical Detail" 
          className="w-full h-auto max-h-[85vh] object-contain animate-fade-in"
        />
      </div>
    </div>
  );
};

export default PistonRingPage;
