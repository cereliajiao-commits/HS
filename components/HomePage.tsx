'use client';
import { useEffect } from 'react';
import { LanguageProvider } from './LanguageProvider';
import Navigation from './Navigation';
import HeroSection from './HeroSection';
import BenefitsStrip from './BenefitsStrip';
import AboutSection from './AboutSection';
import FactorySection from './FactorySection';
import BuyerStorySection from './BuyerStorySection';
import ProductsSection from './ProductsSection';
import AdvantagesSection from './AdvantagesSection';
import ContactSection from './ContactSection';
import Footer from './Footer';
import ChatWidget from './ChatWidget';
import FloatingButtons from './FloatingButtons';
import ProductModal from './ProductModal';
import WeChatModal from './WeChatModal';

export default function HomePage() {
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

    revealItems.forEach((item) => observer.observe(item));
    return () => {
      observer.disconnect();
      root.classList.remove('has-scroll-reveal');
    };
  }, []);

  return (
    <LanguageProvider>
      <Navigation />
      <HeroSection />
      <BenefitsStrip />
      <AboutSection />
      <FactorySection />
      <BuyerStorySection />
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
