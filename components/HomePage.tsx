'use client';
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
