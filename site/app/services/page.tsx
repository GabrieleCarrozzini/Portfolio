import type { Metadata } from 'next';
import ServicesClient from './ServicesClient';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Services offered by Gabriele Carrozzini — 3D character art and rendering, poster and key art design, cover and packaging design, advertising composition, art direction.',
};

export default function ServicesPage() {
  return <ServicesClient />;
}
