import { useEffect, useRef, useState } from "react";

const useStory = (currentIndex, onNext) => {
  const [progress, setProgress] = useState(0);

  const intervalTime = 50;
  const duration = 5000;

  const timerRef = useRef(null);
  const advancedForIndex = useRef(null);

  useEffect(() => {
    setProgress(0);

    advancedForIndex.current = null;

    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    timerRef.current = setInterval(() => {
      setProgress((prev) => {
        const next = prev + (intervalTime / duration) * 100;

        if (next >= 100 && advancedForIndex.current !== currentIndex) {
          advancedForIndex.current = currentIndex;
          clearInterval(timerRef.current);
          onNext?.();
          return 100;
        }

        return next;
      });
    }, intervalTime);

    return () => {
      clearInterval(timerRef.current);
    };
  }, [currentIndex, onNext]);

  return progress;
};

export default useStory;
