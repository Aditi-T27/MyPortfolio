import React from "react";

type VideoPlayProps = {
  isOpen: boolean;
  onClose: () => void;
  src: string;
};

// const VideoPlay: React.FC<VideoPlayProps> = ({ isOpen, onClose, src }) => {
//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
//       <div className="relative bg-gray-900 rounded-lg p-6 shadow-lg">
//         <button
//           onClick={onClose}
//           className="absolute top-2 right-2 text-white text-xl"
//         >
//           ✕
//         </button>
//         <video src={src} controls className="w-[600px] max-w-full rounded-lg" />
//       </div>
//     </div>
//   );
// };

const VideoPlay: React.FC<VideoPlayProps> = ({ isOpen, onClose, src }) => {
  if (!isOpen) return null;

  const isYouTube = src.includes("youtube.com") || src.includes("youtu.be");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="relative bg-gray-900 rounded-lg p-6 shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white text-xl"
        >
          ✕
        </button>
        {isYouTube ? (
          <iframe
            src={src.replace("watch?v=", "embed/")}
            className="w-[600px] h-[340px] max-w-full rounded-lg"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="My Video"
          />
        ) : (
          <video src={src} controls  controlsList="nodownload" className="w-[600px] max-w-full rounded-lg" />
        )}
      </div>
    </div>
  );
};

export default VideoPlay;