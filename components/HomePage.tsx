'use client';

import { useEffect } from 'react';
import Navigation from './Navigation';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
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
    // Intersection Observer for fade-up animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <AdvantagesSection />
      <ContactSection />
      <Footer />
      <ChatWidget />
      <FloatingButtons />
      <ProductModal />
      <WeChatModal />
    </>
  );
}
