import React, { useState } from "react";
import StoryPage from "./components/StoryPage";
import images from "./data/StoryData";

const App = () => {
  const [activeStory, setActiveStory] = useState(null);

  const openStory = (index) => setActiveStory(index);
  const closeStory = () => setActiveStory(null);

  const next = () => {
    console.log("called");
    if (activeStory < images.length - 1)
      setActiveStory((previous) => previous + 1);
    else closeStory();
  };

  const previous = () => {
    if (activeStory > 0) setActiveStory((previous) => previous - 1);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="md:hidden">
        <div className="flex overflow-x-auto p-4 gap-4 no-scrollbar border-b border-gray-100">
          {images.map((image, index) => (
            <div
              key={index}
              onClick={() => openStory(index)}
              className="flex-shrink-0 w-20 h-20 rounded-full border-2 border-pink-500 p-0.5 cursor-pointer"
            >
              <img
                src={image.image}
                className="w-full h-full rounded-full object-cover"
                alt="thumb"
              />
            </div>
          ))}
        </div>

        {activeStory !== null && (
          <StoryPage
            StoryData={images}
            currentIndex={activeStory}
            onClose={closeStory}
            onNext={next}
            onPrev={previous}
          />
        )}
      </div>
    </div>
  );
};

export default App;
