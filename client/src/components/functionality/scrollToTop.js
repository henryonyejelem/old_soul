import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const element = document.getElementById('root'); // Change 'root' to the ID of your root element
    if (element) {
      element.scrollIntoView({ behavior: 'auto', block: 'start' });
    }
  }, [pathname]);

  return null;
}

export default ScrollToTop;