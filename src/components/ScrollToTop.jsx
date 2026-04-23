import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (hash) {
            // Small delay to ensure the component has rendered
            const scrollElement = () => {
                const element = document.getElementById(hash.replace('#', ''));
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
            
            // Try immediately and after a small delay
            scrollElement();
            const timer = setTimeout(scrollElement, 100);
            return () => clearTimeout(timer);
        } else {
            window.scrollTo({ top: 0, behavior: 'instant' });
        }
    }, [pathname, hash]);

    return null;
};

export default ScrollToTop;

