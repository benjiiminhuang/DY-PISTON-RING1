
import React from 'react';

interface MarqueeCard {
  image: string;
  title: string;
  highlightedWord: string;
}

const NewsMarquee: React.FC = () => {
  const products: MarqueeCard[] = [
    {
      image: "https://images.unsplash.com/photo-1635333750577-9419d18d4a94?auto=format&fit=crop&q=80&w=400",
      title: "High-Precision Ring",
      highlightedWord: "Precision"
    },
    {
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=400",
      title: "Custom Alloy Solutions",
      highlightedWord: "Alloy"
    },
    {
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=400",
      title: "Advanced DLC Coating",
      highlightedWord: "DLC"
    }
  ];

  const renderTitle = (title: string, highlight: string) => {
    const parts = title.split(new RegExp(`(${highlight})`, 'gi'));
    return parts.map((part, i) => 
      part.toLowerCase() === highlight.toLowerCase() ? 
        <span key={i} className="text-highlight font-bold">{part}</span> : part
    );
  };

  return (
    <div className="bg-gray-50 py-12 border-t border-gray-100 overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee">
        {/* Render twice for seamless loop */}
        {[...products, ...products, ...products].map((item, index) => (
          <div 
            key={index} 
            className="inline-block mx-6 w-80 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transform transition-transform hover:scale-105"
          >
            <div className="h-48 w-full overflow-hidden">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-navy oswald uppercase tracking-wider text-lg">
                {renderTitle(item.title, item.highlightedWord)}
              </h3>
              <div className="mt-2 h-0.5 w-12 bg-highlight/30 mx-auto"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsMarquee;
