import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, hash, search } = useLocation();

  useEffect(() => {
    // Sayfa yüklendiğinde veya route değiştiğinde
    const scrollToTop = () => {
      // Mobil cihazlar için smooth scroll davranışı
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };

    // Hash (anchor) olmadığında scroll yap
    if (!hash) {
      scrollToTop();
    }

    // Sepet, adres ve ödeme sayfalarında özel kontrol
    if (pathname.includes('/orders') || pathname.includes('/checkout')) {
      scrollToTop();
    }

  }, [pathname, hash, search]); // pathname, hash ve search değişimlerini izle

  return null;
};

export default ScrollToTop;