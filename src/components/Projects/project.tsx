
'use client';

import { useState } from 'react';
import GlassIcons from '@/blocks/Deck/deck';
import {
  FiServer, FiVideo, FiGithub, FiCast, FiCode
} from 'react-icons/fi';
import { useRef } from 'react';
import TechStackModal from '@/components/TechStackModal/TechStackModal';
import { cardItems } from '@/components/Projects/projectfile';
import VideoPlay from '@/components/DisplayVideo/VideoPlay';
import FuzzyText from '@/blocks/TextAnimations/FuzzyText/fuzzyText';
import FuzzyText1 from '@/blocks/TextAnimations/FuzzyText/fuzzyText1';
import ScrambledText from '@/blocks/TextAnimations/ShinyText/splitText';

type CardItem = typeof cardItems[number];

export default function HomePage() {
  const [showAll, setShowAll] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isVidOpen, setVidIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<CardItem | null>(null);

  const initialCount = 4;
  const visibleCards = showAll ? cardItems : cardItems.slice(0, initialCount);

  const containerRef = useRef(null);

  const handleTechStackClick = (item: CardItem) => {
    setSelectedItem(item);
    setIsOpen(true);
  };

  const handleVideoClick = (item: CardItem) => {
    setSelectedItem(item);
    setVidIsOpen(true);
  };

  return (
    
    <div className="bg-[#121212] text-white w-full px-4 py-14">
<FuzzyText1 baseIntensity={0.08} hoverIntensity={0.1} enableHover={true}>
              Projects
            </FuzzyText1><br />
      <h1 className=''></h1>
      <div className="min-h-[1050px] w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full px-2">
          {visibleCards.map((item, idx) => {
            const glassItems = item.links ? [
              ...(item.tech ? [{
                icon: <FiServer size={20} />,
                color: 'black',
                label: 'Tech Stack',
                onClick: () => handleTechStackClick(item),
              }] : []),
              ...(item.vid ? [{
                icon: <FiVideo size={20} />,
                color: 'orange',
                label: 'Video Demo',
                onClick: () => handleVideoClick(item),
              }] : []),
              ...(item.live ? [{
                icon: <FiCast size={20} />,
                color: 'green',
                label: 'Visit Website',
                onClick: () => window.open(item.links?.live, '_blank'),
              }] : []),
              ...(item.space ? [{
                icon: <FiCode size={20} />,
                color: 'purple',
                label: 'Check Code',
                onClick: () => window.open(item.links?.github, '_blank'),
              }] : []),
              {
                icon: <FiGithub size={20} />,
                color: 'black',
                label: 'Github',
                onClick: () => window.open(item.links?.github, '_blank'),
              }
            ] : [];

            return (
              <div key={idx} className="p-2 w-full">
                <div style={{ fontFamily: "Poppins" }} className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl shadow-md p-4 flex flex-col">
                  <div className="w-full mb-4">
                    {/* Responsive Media */}
                    <div className="w-full max-w-[500px] h-auto mx-auto">
                      {item.content}
                    </div>
                  </div>

                  <div className="text-sm text-gray-300 leading-relaxed px-1 mb-4">

                    <ScrambledText
                      className="scrambled-text-demo"
                      radius={100}
                      duration={1.2}
                      speed={0.5}
                      scrambleChars=".:">
                    {item.description}
                  </ScrambledText>

                </div>

                <div className="flex justify-center">
                  <GlassIcons items={glassItems} className="custom-class text-[10px]" />
                </div>

                {/* Tech Stack Modal */}
                <TechStackModal
                  isOpen={isOpen}
                  onClose={() => setIsOpen(false)}
                  item={
                    selectedItem && selectedItem.about
                      ? {
                        title: selectedItem.title,
                        about: selectedItem.about,
                        techStack: selectedItem.techStack,
                      }
                      : null
                  }
                />

                {/* Video Modal */}
                {isVidOpen && selectedItem?.links?.video && (
                  <VideoPlay
                    isOpen={isVidOpen}
                    onClose={() => setVidIsOpen(false)}
                    src={selectedItem.links.video}
                  />
                )}
              </div>
              </div>
        );
          })}
      </div>

      {/* View More / Less */}
      {cardItems.length > initialCount && (
        <div className="text-center mt-8">
          <button
            onClick={() => setShowAll(prev => !prev)}
            style={{ fontFamily: 'Poppins' }}
            className="text-white hover:underline"
          >
            <FuzzyText baseIntensity={0.08} hoverIntensity={0.1} enableHover={true}>
              {showAll ? 'View Less' : 'View More'}
            </FuzzyText>
          </button>
        </div>
      )}
    </div>
    </div >
  );
}
