import React, { useEffect } from "react";

type VideoPlayProps = {
  isOpen: boolean;
  onClose: () => void;
  src: string;
};

const VideoPlay: React.FC<VideoPlayProps> = ({ isOpen, onClose, src }) => {
  // Always register hook
  useEffect(() => {
    if (!isOpen) return; // only active when modal is open

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null; // now safe

  const isYouTube = src.includes("youtube.com") || src.includes("youtu.be");
  const isDrive = src.includes("drive.google.com");

  let embedSrc = src;
  if (isYouTube) {
    embedSrc = src
      .replace("watch?v=", "embed/")
      .replace("youtu.be/", "youtube.com/embed/");
  } else if (isDrive) {
    embedSrc = src.replace("/view", "/preview");
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="relative bg-gray-900 rounded-xl p-4 shadow-lg max-w-[95%] w-full sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white text-2xl hover:text-gray-300 transition"
          aria-label="Close video"
        >
          ✕
        </button>

        {isYouTube || isDrive ? (
          <iframe
            src={embedSrc}
            className="w-full aspect-video rounded-lg"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="Video Player"
          />
        ) : (
          <video
            src={src}
            controls
            controlsList="nodownload"
            className="w-full aspect-video rounded-lg"
          />
        )}
      </div>
    </div>
  );
};

export default VideoPlay;
