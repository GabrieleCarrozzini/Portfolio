import type { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Gabriele Carrozzini — available for freelance projects and creative roles. 3D character art, poster design, advertising composition, art direction.',
};

export default function ContactPage() {
  return <ContactClient />;
}
