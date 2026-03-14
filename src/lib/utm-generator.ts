/**
 * UTM Parameter Generator — Bubbles Enterprise
 * Generates tracking URLs for all marketing channels
 *
 * Usage:
 *   const url = generateUTMUrl('bubblesenterprise.com', {
 *     source: 'facebook',
 *     medium: 'post',
 *     campaign: 'spring_promo_2026'
 *   });
 */

export interface UTMParams {
  source: string;      // de onde vem (facebook, linkedin, whatsapp, etc)
  medium: string;      // como (post, story, email, direct_share, etc)
  campaign: string;    // qual campanha/iniciativa
  content?: string;    // qual elemento específico (opcional)
  term?: string;       // palavra-chave (opcional)
}

/**
 * Gera URL com parâmetros UTM
 */
export function generateUTMUrl(baseUrl: string, params: UTMParams): string {
  const url = new URL(baseUrl.startsWith('http') ? baseUrl : `https://${baseUrl}`);

  url.searchParams.set('utm_source', params.source);
  url.searchParams.set('utm_medium', params.medium);
  url.searchParams.set('utm_campaign', params.campaign);

  if (params.content) {
    url.searchParams.set('utm_content', params.content);
  }
  if (params.term) {
    url.searchParams.set('utm_term', params.term);
  }

  return url.toString();
}

/**
 * Templates prontos para cada canal
 */
export const UTM_TEMPLATES = {
  facebook: {
    post: (campaign: string) => ({
      source: 'facebook',
      medium: 'post',
      campaign,
    }),
    story: (campaign: string) => ({
      source: 'facebook',
      medium: 'story',
      campaign,
    }),
    ad: (campaign: string) => ({
      source: 'facebook',
      medium: 'paid_ad',
      campaign,
    }),
  },

  whatsapp: {
    direct: (campaign: string) => ({
      source: 'whatsapp',
      medium: 'direct_share',
      campaign,
    }),
  },

  linkedin: {
    post: (campaign: string) => ({
      source: 'linkedin',
      medium: 'post',
      campaign,
    }),
    company_page: (campaign: string) => ({
      source: 'linkedin',
      medium: 'company_page',
      campaign,
    }),
  },

  instagram: {
    post: (campaign: string) => ({
      source: 'instagram',
      medium: 'post',
      campaign,
    }),
    story: (campaign: string) => ({
      source: 'instagram',
      medium: 'story',
      campaign,
    }),
  },

  email: {
    newsletter: (campaign: string) => ({
      source: 'email',
      medium: 'newsletter',
      campaign,
    }),
    followup: (campaign: string) => ({
      source: 'email',
      medium: 'followup',
      campaign,
    }),
  },

  nextdoor: {
    post: (campaign: string) => ({
      source: 'nextdoor',
      medium: 'post',
      campaign,
    }),
  },

  google_business: {
    post: (campaign: string) => ({
      source: 'google_business',
      medium: 'post',
      campaign,
    }),
  },

  sms: {
    text: (campaign: string) => ({
      source: 'sms',
      medium: 'text',
      campaign,
    }),
  },

  referral: {
    customer: (campaign: string) => ({
      source: 'referral',
      medium: 'customer_share',
      campaign,
    }),
  },
};

/**
 * Exemplo de uso em componentes React
 *
 * const url = generateUTMUrl('bubblesenterprise.com',
 *   UTM_TEMPLATES.facebook.post('spring_promo')
 * );
 * // → https://bubblesenterprise.com?utm_source=facebook&utm_medium=post&utm_campaign=spring_promo
 */

/**
 * Helper para copiar URL para clipboard
 */
export async function copyToClipboard(text: string): Promise<void> {
  try {
    await navigator.clipboard.writeText(text);
  } catch (err) {
    console.error('Failed to copy:', err);
  }
}

/**
 * Gera todas as variações de uma URL para diferentes canais
 */
export function generateUTMVariations(
  baseUrl: string,
  campaign: string
): Record<string, string> {
  return {
    facebook_post: generateUTMUrl(baseUrl, UTM_TEMPLATES.facebook.post(campaign)),
    facebook_story: generateUTMUrl(baseUrl, UTM_TEMPLATES.facebook.story(campaign)),
    facebook_ad: generateUTMUrl(baseUrl, UTM_TEMPLATES.facebook.ad(campaign)),
    whatsapp: generateUTMUrl(baseUrl, UTM_TEMPLATES.whatsapp.direct(campaign)),
    linkedin_post: generateUTMUrl(baseUrl, UTM_TEMPLATES.linkedin.post(campaign)),
    instagram_post: generateUTMUrl(baseUrl, UTM_TEMPLATES.instagram.post(campaign)),
    instagram_story: generateUTMUrl(baseUrl, UTM_TEMPLATES.instagram.story(campaign)),
    email_newsletter: generateUTMUrl(baseUrl, UTM_TEMPLATES.email.newsletter(campaign)),
    nextdoor: generateUTMUrl(baseUrl, UTM_TEMPLATES.nextdoor.post(campaign)),
    google_business: generateUTMUrl(baseUrl, UTM_TEMPLATES.google_business.post(campaign)),
  };
}
