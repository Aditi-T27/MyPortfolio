type TechStackModalProps = {
  isOpen: boolean;
  onClose: () => void;
  item: {
    title: string;
    about: string;
    techStack?: string[];
  } | null;
};

const TechStackModal = ({ isOpen, onClose, item }: TechStackModalProps) => {
  if (!isOpen || !item) return null;

  return (
    <div style={{fontFamily:"Poppins"}}className="fixed inset-0 flex items-center justify-center z-50   backdrop-blur-sm">
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white rounded-2xl w-[800px] max-h-[85vh] p-8 relative shadow-2xl border border-yellow-500/30 transform transition-all duration-300 scale-100 hover:scale-[1.02]">
        
        {/* Close Button */}
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-yellow-400 hover:text-yellow-300 text-2xl font-bold transition-colors duration-200 hover:rotate-90 transform w-8 h-8 flex items-center justify-center rounded-full hover:bg-yellow-400/10"
        >
          ×
        </button>
        
        {/* Header */}
        <div className="mb-6 border-b border-gray-700 pb-4">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent mb-2">
            Tech Stack
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"></div>
        </div>

        {/* Content */}
        <div className="space-y-6 overflow-y-auto max-h-[calc(85vh-200px)] pr-2">
          
          {/* Title Section */}
          <div className="bg-gray-800/50 rounded-lg p-4 border-l-4 border-yellow-400">
            <span className="text-yellow-300 font-semibold text-sm uppercase tracking-wide">Project Title</span>
            <h3 className="text-xl font-bold text-white mt-1">{item.title}</h3>
          </div>

          {/* About Section */}
          <div className="bg-gray-800/50 rounded-lg p-4 border-l-4 border-yellow-400">
            <span className="text-yellow-300 font-semibold text-sm uppercase tracking-wide">About</span>
            <p className="text-gray-300 mt-2 leading-relaxed">{item.about}</p>
          </div>

          {/* Hackathon Section (Uncomment if needed) */}
          {/* 
          <div className="bg-gray-800/50 rounded-lg p-4 border-l-4 border-yellow-400">
            <span className="text-yellow-300 font-semibold text-sm uppercase tracking-wide">Hackathon</span>
            <p className="text-gray-300 mt-1">{item.hackathon}</p>
          </div>
          */}

          {/* Tech Stack Section */}
          <div className="bg-gray-800/50 rounded-lg p-4 border-l-4 border-yellow-400">
            <span className="text-yellow-300 font-semibold text-sm uppercase tracking-wide mb-3 block">
              Technology Stack
            </span>
            
            {item.techStack && item.techStack.length > 0 ? (
              <div className="grid grid-cols-2 gap-3 mt-3">
                {item.techStack.map((tech, index) => (
                  <div 
                    key={tech}
                    className="bg-gradient-to-r from-gray-700 to-gray-600 rounded-lg p-3 border border-gray-600 hover:border-yellow-400/50 transition-all duration-200 hover:shadow-lg hover:shadow-yellow-400/10 group"
                  >
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full group-hover:scale-125 transition-transform duration-200"></div>
                      <span className="text-white font-medium">{tech}</span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-400 italic">No technologies specified</p>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-gray-700">
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2 bg-gradient-to-r from-yellow-600 to-yellow-500 text-gray-900 font-semibold rounded-lg hover:from-yellow-500 hover:to-yellow-400 transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStackModal;