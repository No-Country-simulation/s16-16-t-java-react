import { useEffect } from 'react';
import { useLocation } from 'wouter';

const ScrollToTop = () => {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 40,
      behavior: 'smooth',
    });
  }, [location]);

  return null;
};

export default ScrollToTop;
