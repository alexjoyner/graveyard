import { useState, useEffect } from 'react';

const useWindowSize = () => {
  const mql = window.matchMedia('(min-width: 800px)');
  const [matches, setMatches] = useState(mql.matches);

  useEffect(() => {
    mql.addListener(() => setMatches(mql.matches));
    return () => mql.removeListener(() => setMatches(mql.matches));
  }, []);

  return matches;
};

export { useWindowSize };
