import type { Metadata } from 'next';
import { PersonalLanding } from '@/components/ui/personal-landing';

export const metadata: Metadata = {
  title: 'About — Gabriele Carrozzini',
  description: 'Visual designer based in Rome, Italy. Brand identity, art direction, poster design, character art and digital experiences. Design should communicate before it decorates.',
};

export default function AboutPage() {
  return <PersonalLanding />;
}
