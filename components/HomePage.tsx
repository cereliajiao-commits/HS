'use client';
import { useEffect } from 'react';
import { LanguageProvider } from './LanguageProvider';
import Navigation from './Navigation';
import HeroSection from './HeroSection';
import BenefitsStrip from './BenefitsStrip';
import AboutSection from './AboutSection';
import FactorySection from './FactorySection';
import ProductsSection from './ProductsSection';
import AdvantagesSection from './AdvantagesSection';
import ContactSection from './ContactSection';
import Footer from './Footer';
import ChatWidget from './ChatWidget';
import FloatingButtons from './FloatingButtons';
import ProductModal from './ProductModal';
import WeChatModal from './WeChatModal';
import type { Language } from './LanguageProvider';

export default function HomePage({ initialLanguage }: { initialLanguage?: Language }) {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add('has-scroll-reveal');
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>('.fade-up'));
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reducedMotion || !('IntersectionObserver' in window)) {
      revealItems.forEach((item) => item.classList.add('visible'));
      return () => root.classList.remove('has-scroll-reveal');
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14, rootMargin: '0px 0px -8% 0px' });

    root.classList.add('scroll-reveal-ready');
    revealItems.forEach((item) => observer.observe(item));
    const revealVisibleFallback = () => {
      const viewportBottom = window.innerHeight * 0.92;
      revealItems.forEach((item) => {
        const rect = item.getBoundingClientRect();
        if (rect.top < viewportBottom && rect.bottom > 0) item.classList.add('visible');
      });
    };
    window.addEventListener('scroll', revealVisibleFallback, { passive: true });
    revealVisibleFallback();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', revealVisibleFallback);
      root.classList.remove('has-scroll-reveal');
      root.classList.remove('scroll-reveal-ready');
    };
  }, []);

  return (
    <LanguageProvider initialLanguage={initialLanguage}>
      <Navigation />
      <HeroSection />
      <BenefitsStrip />
      <AboutSection />
      <FactorySection />
      <ProductsSection />
      <AdvantagesSection />
      <ContactSection />
      <Footer />
      <ChatWidget />
      <FloatingButtons />
      <ProductModal />
      <WeChatModal />
    </LanguageProvider>
  );
}
