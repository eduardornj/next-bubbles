import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin', '/thank-you', '/repair-thank-you', '/utm-generator'],
      },
    ],
    sitemap: 'https://bubblesenterprise.com/sitemap.xml',
  };
}
