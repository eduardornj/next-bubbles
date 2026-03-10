import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/thank-you', '/repair-thank-you'],
      },
    ],
    sitemap: 'https://bubblesenterprise.com/sitemap.xml',
  };
}
