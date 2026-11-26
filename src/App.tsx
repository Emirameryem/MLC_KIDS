import { useState } from 'react';
import { MotionConfig } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StoryManifestoSection } from './components/StoryManifestoSection';
import { LookbookGallerySection } from './components/LookbookGallerySection';
import { TexturesValuesSection } from './components/TexturesValuesSection';
import { FooterContactSection } from './components/FooterContactSection';
import { BoutiqueContactModal } from './components/BoutiqueContactModal';

export function App() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-cream text-espresso selection:bg-latte/25 selection:text-espresso">
        <Navbar onOpenContactModal={() => setContactModalOpen(true)} />

        <main>
          <HeroSection />
          <StoryManifestoSection />
          <LookbookGallerySection />
          <TexturesValuesSection />
        </main>

        <FooterContactSection
          onOpenContactModal={() => setContactModalOpen(true)}
        />

        <BoutiqueContactModal
          isOpen={contactModalOpen}
          onClose={() => setContactModalOpen(false)}
        />
      </div>
    </MotionConfig>
  );
}

export default App;
