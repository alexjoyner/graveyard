import { useState, useEffect } from 'react';

const useWindowSize = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const updateDeminsions = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener('resize', updateDeminsions);
    return () => window.removeEventListener('resize', updateDeminsions);
  });

  return { height, width };
};

export { useWindowSize };
