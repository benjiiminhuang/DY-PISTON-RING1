import React from 'react';

const DisplayPage: React.FC = () => {
  // 8 items as requested
  const items = [
    {
      id: 1,
      title: "DQ20+Cr-DQ20+Cr-Hump Ring",
      image: "https://raw.githubusercontent.com/benjiiminhuang/DY-PISTON-RING1/main/DQ20%2BCr-DQ20%2BCr-Hump%20Ring.jpg",
      description: "DQ20+Cr-DQ20+Cr-Hump Ring"
    },
    {
      id: 2,
      title: "DQ20+Cr-DQ20+Cr-Hump Ring1",
      image: "https://raw.githubusercontent.com/benjiiminhuang/DY-PISTON-RING1/main/DQ20%2BCr-DQ20%2BCr-Hump%20Ring1.jpg",
      description: "DQ20+Cr-DQ20+Cr-Hump Ring1"
    },
    {
      id: 3,
      title: "P/P（two stroke）",
      image: "https://raw.githubusercontent.com/benjiiminhuang/DY-PISTON-RING1/main/P-P.jpg",
      description: "P/P（two stroke）"
    },
    {
      id: 4,
      title: "P-P-Cr",
      image: "https://raw.githubusercontent.com/benjiiminhuang/DY-PISTON-RING1/main/P-P-Cr1.jpg",
      description: "P-P-Cr"
    },
    {
      id: 5,
      title: "ST+Cr/ST/+P-Cr",
      image: "https://raw.githubusercontent.com/benjiiminhuang/DY-PISTON-RING1/main/ST%2BCr-ST%2BP-Cr.jpg",
      description: "ST+Cr/ST/+P-Cr"
    },
    {
      id: 6,
      title: "Box",
      image: "https://raw.githubusercontent.com/benjiiminhuang/DY-PISTON-RING1/main/%E5%8C%85%E8%A3%85%E7%9B%922.jpg",
      description: "Box"
    },
    {
      id: 7,
      title: "Bag",
      image: "https://raw.githubusercontent.com/benjiiminhuang/DY-PISTON-RING1/main/%E8%A2%8B%E8%A3%851.jpg",
      description: "Bag"
    },
    {
      id: 8,
      title: "Roll",
      image: "https://raw.githubusercontent.com/benjiiminhuang/DY-PISTON-RING1/main/roll01.jpg",
      description: "Roll"
    }
  ];

  return (
    <div className="bg-white min-h-screen py-24 animate-fade-in">
      <div className="max-w-2xl mx-auto px-6">
        
        {/* Header Area */}
        <div className="mb-24 text-center">
          <h1 className="text-4xl font-bold oswald uppercase tracking-tighter text-highlight">
            Product & Package
          </h1>
          <div className="h-1 w-16 bg-highlight mx-auto mt-4"></div>
          <p className="mt-6 text-gray-400 font-light text-sm uppercase tracking-widest">Minimalist Technical Catalog</p>
        </div>

        {/* Vertical List */}
        <div className="flex flex-col space-y-32">
          {items.map((item) => (
            <div key={item.id} className="flex flex-col items-center group">
              
              {/* Image Frame */}
              <div className="w-full aspect-square overflow-hidden bg-gray-100 shadow-sm border border-gray-100 relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://via.placeholder.com/800?text=Image+Loading...";
                  }}
                />
                {/* Visual Label */}
                <div className="absolute top-4 left-4 bg-navy text-white text-[10px] font-bold px-2 py-1 uppercase tracking-tighter">
                  DY-MOD-{item.id}
                </div>
              </div>

              {/* Text Frame */}
              <div className="mt-8 max-w-sm text-center">
                <p className="text-gray-900 font-bold oswald uppercase tracking-wider text-sm md:text-base leading-relaxed">
                  {item.description}
                </p>
                <div className="h-px w-8 bg-highlight/30 mx-auto mt-4"></div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Spacing */}
        <div className="h-24"></div>
      </div>
    </div>
  );
};

export default DisplayPage;
