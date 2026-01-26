
import React from 'react';

const IntroCard: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20">
          
          {/* Profile Image */}
          <div className="w-full md:w-1/3 shrink-0">
            <div className="relative">
              <div className="aspect-[2/3] overflow-hidden rounded-lg shadow-sm">
                {/* USER ASSET: Profile Photo of Benjimin */}
                <img 
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663280755586/SoKGcsbWZezEUiWl.jpg" 
                  alt="Benjimin" 
                  className="w-full h-full object-cover object-top grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* Minimalist Text Content */}
          <div className="flex-1 w-full text-center md:text-left">
            <h3 className="text-xl md:text-3xl font-light text-gray-600 leading-relaxed tracking-tight">
              Hi, This is Benjimin from DY Piston Ring, 
              <br className="hidden md:block" />
              I created this website to better serve my customers.
            </h3>
          </div>

        </div>
      </div>
    </section>
  );
};

export default IntroCard;
