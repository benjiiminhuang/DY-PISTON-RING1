
import React, { useState } from 'react';
import { FAQItem } from '../types';
import { ChevronDown } from 'lucide-react';

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "What are the main functions of DY Piston Rings?",
      answer: "Our rings provide Superior Sealing, Oil Control, Heat Transfer, and Structural Support for high-performance engines.",
      highlights: ["Superior Sealing", "Oil Control", "Heat Transfer", "Structural Support"]
    },
    {
      question: "What is your primary role in this transaction?",
      answer: "I act as your dedicated consultant, coordinating all technical details such as Packaging and Marking (Printing). My mission is to bridge the gap between your requirements and the factory to ensure On-time Delivery and uncompromised quality.",
      highlights: ["dedicated consultant", "Packaging and Marking (Printing)", "On-time Delivery"]
    },
    {
      question: "What materials do you use?",
      answer: "We utilize Ductile Iron, High-Grade Steel, and advanced DLC/PVD Coatings for maximum durability.",
      highlights: ["Ductile Iron", "High-Grade Steel", "DLC/PVD Coatings"]
    },
    {
      question: "Can I request Custom Specifications?",
      answer: "Absolutely. We offer Tailored OEM/ODM Solutions to fit unique engine geometries and performance needs.",
      highlights: ["Tailored OEM/ODM Solutions"]
    },
    {
      question: "What certifications do you hold?",
      answer: "We are proudly ISO/TS16949 and IATF16949 certified, ensuring world-class Quality Management.",
      highlights: ["ISO/TS16949", "IATF16949", "Quality Management"]
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Fix: Replaced JSX.Element with React.ReactNode to resolve namespace missing error
  const highlightText = (text: string, highlights: string[]) => {
    let parts: (string | React.ReactNode)[] = [text];
    highlights.forEach(highlight => {
      const newParts: (string | React.ReactNode)[] = [];
      parts.forEach(part => {
        if (typeof part === 'string') {
          const split = part.split(new RegExp(`(${highlight})`, 'g'));
          split.forEach((s, idx) => {
            if (s === highlight) {
              newParts.push(<span key={`${highlight}-${idx}`} className="text-highlight font-semibold">{s}</span>);
            } else if (s !== "") {
              newParts.push(s);
            }
          });
        } else {
          newParts.push(part);
        }
      });
      parts = newParts;
    });
    return parts;
  };

  return (
    <section className="py-24 bg-white" id="piston-ring">
      <div className="max-w-5xl mx-auto px-4">
        {/* Updated Title: FAQ, Left-aligned, Black color */}
        <div className="text-left mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black oswald uppercase tracking-tight">FAQ</h2>
          <div className="h-1 w-20 bg-highlight mt-4"></div>
        </div>

        <div className="divide-y divide-gray-100 border-t border-gray-100">
          {faqs.map((faq, index) => (
            <div key={index} className="group overflow-hidden">
              <button 
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between py-8 text-left transition-colors hover:bg-gray-50/50 px-2"
                aria-expanded={openIndex === index}
              >
                <h4 className={`text-xl font-bold transition-colors flex items-start pr-8 ${openIndex === index ? 'text-highlight' : 'text-black'}`}>
                  <span className="text-highlight mr-4 font-black">0{index + 1}.</span>
                  {faq.question}
                </h4>
                <ChevronDown className={`shrink-0 w-6 h-6 text-gray-400 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-highlight' : ''}`} />
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-96 opacity-100 pb-10' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="pl-12 text-gray-500 leading-relaxed text-lg font-light max-w-4xl">
                  {highlightText(faq.answer, faq.highlights)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
