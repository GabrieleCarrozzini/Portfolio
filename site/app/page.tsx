import type { Metadata } from 'next';
import Hero from '@/components/home/Hero';
import CollectionGallery from '@/components/home/CollectionGallery';
import Capabilities from '@/components/home/Capabilities';
import AboutTeaser from '@/components/home/AboutTeaser';
import ContactBand from '@/components/home/ContactBand';

export const metadata: Metadata = {
  title: 'Gabriele Carrozzini — Visual Designer',
  description:
    'Portfolio of Gabriele Carrozzini — Visual Designer based in Rome, Italy. Brand identity, art direction, poster design, character art. Design should communicate before it decorates.',
};

export default function HomePage() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <Hero />
      <CollectionGallery />
      <Capabilities />
      <AboutTeaser />
      <ContactBand />
    </>
  );
}
