
import React, { useState, useEffect } from 'react';
import { Heart, MessageSquare, Share2, Bookmark, ThumbsUp } from 'lucide-react';

const notifications = [
  { text: "Dato Wu liked this.", type: "like", icon: <Heart className="h-3 w-3 text-red-500 fill-red-500" /> },
  { text: "Amad commented: “Good job.”", type: "comment", icon: <MessageSquare className="h-3 w-3 text-blue-500" /> },
  { text: "Alex shared this post.", type: "share", icon: <Share2 className="h-3 w-3 text-green-500" /> },
  { text: "Shriza reacted with 👍", type: "reaction", icon: <ThumbsUp className="h-3 w-3 text-yellow-500 fill-yellow-500" /> },
  { text: "Lucky Deng commented: “Looks great.”", type: "comment", icon: <MessageSquare className="h-3 w-3 text-blue-500" /> },
  { text: "Daniel bookmarked this.", type: "bookmark", icon: <Bookmark className="h-3 w-3 text-purple-500 fill-purple-500" /> },
  { text: "Sophia commented: “Very impressive.”", type: "comment", icon: <MessageSquare className="h-3 w-3 text-blue-500" /> },
  { text: "James liked this update.", type: "like", icon: <Heart className="h-3 w-3 text-red-500 fill-red-500" /> },
  { text: "K commented: “Well done.”", type: "comment", icon: <MessageSquare className="h-3 w-3 text-blue-500" /> },
  { text: "Lucas reacted with ❤️", type: "reaction", icon: <Heart className="h-3 w-3 text-red-500 fill-red-500" /> }
];

const SocialNotifications: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % notifications.length);
    }, 4000); // Matches the animation duration

    return () => clearInterval(timer);
  }, []);

  return (
    // Changed position from fixed bottom-6 to fixed top-1/2 -translate-y-1/2 (Vertical Center)
    <div className="fixed top-1/2 -translate-y-1/2 left-6 z-[60] pointer-events-none">
      <div key={index} className="flex items-center space-x-3 bg-white/90 backdrop-blur-md border border-gray-100 px-4 py-3 rounded-xl shadow-lg animate-social-pop max-w-xs">
        <div className="flex-shrink-0 w-8 h-8 bg-gray-50 rounded-full flex items-center justify-center border border-gray-100">
          {notifications[index].icon}
        </div>
        <div className="text-[11px] leading-tight text-gray-600 font-medium">
          {/* Using a simple parser to bold the name if it's the first word */}
          {notifications[index].text.split(' ').map((word, i) => (
            <span key={i} className={i === 0 || (i === 1 && notifications[index].text.startsWith('Dato')) ? "font-bold text-gray-900" : ""}>
              {word}{' '}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialNotifications;
