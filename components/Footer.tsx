
import React from 'react';
import { Facebook, Instagram, MessageCircle } from 'lucide-react';

// Added React.SVGProps to allow TikTokIcon to receive props like style and className from cloneElement or direct usage
const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    stroke="none"
    {...props}
  >
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.06-2.89-.44-4.13-1.19-.1.28-.11.58-.11.88-.03 3.48-.27 7.33-2.3 10.11-1.33 1.79-3.34 2.8-5.51 3.22-2.09.39-4.48.1-6.23-1.09-2.21-1.5-3.23-4.32-2.92-6.91.4-3.12 3.03-5.73 6.13-6.17 1.24-.17 2.52-.04 3.73.35V13.5c-.74-.25-1.56-.35-2.33-.17-1.39.33-2.52 1.51-2.72 2.91-.25 1.71.74 3.52 2.37 4.02 1.62.56 3.61-.13 4.38-1.68.22-.44.31-.93.31-1.43V.02z" />
  </svg>
);

const Footer: React.FC = () => {
  const socials = [
    { 
      icon: <MessageCircle className="h-5 w-5" />, 
      label: 'WhatsApp', 
      href: 'https://wa.me/8615892089108' 
    },
    { 
      icon: <Facebook className="h-5 w-5" />, 
      label: 'Facebook', 
      href: 'https://www.facebook.com/profile.php?id=61580478293280' 
    },
    { 
      icon: <Instagram className="h-5 w-5" />, 
      label: 'Instagram', 
      href: 'https://www.instagram.com/dy_piston_ring/' 
    },
    { 
      icon: <TikTokIcon className="h-5 w-5" />, 
      label: 'TikTok', 
      href: '#' 
    },
  ];

  return (
    <footer className="bg-navy border-t border-white/5 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright & Branding - Streamlined */}
          <div className="flex items-center space-x-4">
            <span className="text-sm font-bold oswald tracking-tighter text-white">
              DY <span className="text-highlight">PISTON RING</span>
            </span>
            <span className="h-4 w-px bg-white/20 hidden md:block"></span>
            <p className="text-[10px] text-gray-400 uppercase tracking-widest">
              © 2024 Engineering Excellence
            </p>
          </div>

          {/* Social Bar with Gradient Icons */}
          <div className="flex items-center space-x-8">
            {socials.map((social, i) => (
              <a
                key={i}
                href={social.href}
                target={social.href !== '#' ? "_blank" : undefined}
                rel={social.href !== '#' ? "noopener noreferrer" : undefined}
                className="group relative flex items-center justify-center transition-transform hover:scale-110"
                aria-label={social.label}
              >
                {/* SVG Gradient Definition */}
                <svg width="0" height="0" className="absolute">
                  <linearGradient id={`gradient-${i}`} x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="100%" stopColor="#a6a6a6" />
                  </linearGradient>
                </svg>
                
                {/* Icon wrapper applying the gradient */}
                <div 
                  className="transition-opacity duration-300"
                  style={{ 
                    color: `url(#gradient-${i})`,
                    fill: `url(#gradient-${i})`
                  }}
                >
                  {/* Cast to React.ReactElement<any> to fix TypeScript error about 'style' property being unknown on the cloned element */}
                  {React.cloneElement(social.icon as React.ReactElement<any>, {
                    style: { stroke: `url(#gradient-${i})` }
                  })}
                </div>
                
                {/* Hover Glow Effect */}
                <span className="absolute -bottom-1 w-0 h-0.5 bg-highlight transition-all group-hover:w-full opacity-50"></span>
              </a>
            ))}
          </div>

          {/* Minimal Language/Region (Optional decorative element) */}
          <div className="hidden lg:flex items-center space-x-4 text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em]">
            <span className="text-highlight">Global</span>
            <span>CN</span>
            <span>EN</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
