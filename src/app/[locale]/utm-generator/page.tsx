import { Metadata } from 'next';
import { UTMGeneratorClient } from './UTMGeneratorClient';

export const metadata: Metadata = {
  title: 'UTM Generator | Bubbles Enterprise',
  description: 'Generate tracking URLs for marketing campaigns. Track every visitor source.',
  robots: 'noindex', // Don't index this utility page
};

export default function UTMGeneratorPage() {
  return <UTMGeneratorClient />;
}
