import React from "react";
import useStory from "../Hooks/Story";

function StoryPage({ currentIndex, onNext, onPrev, StoryData, onClose }) {
  const progress = useStory(currentIndex, onNext, StoryData.length);

  const handle = (e) => {
    const { clientX } = e;
    const { innerWidth } = window;
    if (clientX < innerWidth / 3) onPrev();
    else onNext();
  };
  return (
    <div className="fixed inset-0 z-50 bg-black flex flex-col md:hidden">
      <div className="absolute top-4 left-0 right-0 flex px-2 gap-1 z-20">
        {StoryData.map((_, index) => (
          <div key={index} className="h-1 flex-1 bg-gray-600 rounded-full">
            <div
              className="h-full bg-white transition-all duration-[50ms] ease-linear"
              style={{
                width:
                  index === currentIndex
                    ? `${progress}%`
                    : index < currentIndex
                    ? "100%"
                    : "0%",
              }}
            />
          </div>
        ))}
      </div>

      <button
        onClick={onClose}
        className="absolute top-8 right-4 z-30 text-white text-2xl"
      >
        ✕
      </button>

      <div className="w-full h-full relative" onClick={handle}>
        <img
          src={StoryData[currentIndex]?.image}
          alt="Story"
          className="w-full h-full select-none object-contain"
        />
      </div>
    </div>
  );
}

export default StoryPage;
