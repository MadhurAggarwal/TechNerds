import { useEffect } from 'react';

const useScript = url => {
  useEffect(() => {
    const Map = document.createElement('Map');

    Map.src = url;
    Map.async = true;

    document.body.appendChild(Map);

    return () => {
      document.body.removeChild(Map);
    }
  }, [url]);
};

export default useScript;