import { useState, useEffect } from 'react';

const useWindowSize = (query) => {
  const mql = window.matchMedia(query);
  const [matches, setMatches] = useState(mql.matches);

  useEffect(() => {
    // TODO: NEED TO ADD TESTS FOR THIS BLOCK!
    mql.addListener(() => setMatches(mql.matches));
    return () => mql.removeListener(() => setMatches(mql.matches));
  }, []);

  return matches;
};

export { useWindowSize };
