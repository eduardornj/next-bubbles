'use client';

import { useState } from 'react';
import { Copy, Check, Link as LinkIcon, Zap } from 'lucide-react';
import { generateUTMUrl, generateUTMVariations } from '@/lib/utm-generator';

export function UTMGeneratorClient() {
  const [source, setSource] = useState('facebook');
  const [medium, setMedium] = useState('post');
  const [campaign, setCampaign] = useState('spring_promo_2026');
  const [content, setContent] = useState('');
  const [copied, setCopied] = useState<string | null>(null);

  const baseUrl = 'https://bubblesenterprise.com';
  const url = generateUTMUrl(baseUrl, { source, medium, campaign, content: content || undefined });
  const allVariations = generateUTMVariations(baseUrl, campaign);

  const sources = ['facebook', 'whatsapp', 'linkedin', 'instagram', 'email', 'nextdoor', 'google_business', 'sms', 'referral'];
  const mediums = {
    facebook: ['post', 'story', 'paid_ad'],
    whatsapp: ['direct_share'],
    linkedin: ['post', 'company_page'],
    instagram: ['post', 'story'],
    email: ['newsletter', 'followup'],
    nextdoor: ['post'],
    google_business: ['post'],
    sms: ['text'],
    referral: ['customer_share'],
  } as Record<string, string[]>;

  const handleCopy = async (text: string, key: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(key);
      setTimeout(() => setCopied(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-4">
            <Zap className="w-4 h-4" />
            <span className="text-sm font-bold">UTM Campaign Generator</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Gere URLs com Rastreamento
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Saiba exatamente de onde vem cada visitante do seu site. Crie URLs com parâmetros UTM em segundos.
          </p>
        </div>

        {/* Generator Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <LinkIcon className="w-6 h-6 text-blue-600" />
            Criar URL com UTM
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Source */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">De Onde? (Plataforma)</label>
              <select
                value={source}
                onChange={(e) => {
                  setSource(e.target.value);
                  setMedium(mediums[e.target.value]?.[0] || 'post');
                }}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {sources.map((s) => (
                  <option key={s} value={s}>
                    {s.charAt(0).toUpperCase() + s.slice(1).replace('_', ' ')}
                  </option>
                ))}
              </select>
            </div>

            {/* Medium */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Como? (Tipo)</label>
              <select
                value={medium}
                onChange={(e) => setMedium(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {(mediums[source as keyof typeof mediums] || ['post']).map((m) => (
                  <option key={m} value={m}>
                    {m.charAt(0).toUpperCase() + m.slice(1).replace('_', ' ')}
                  </option>
                ))}
              </select>
            </div>

            {/* Campaign */}
            <div className="md:col-span-2">
              <label className="block text-sm font-bold text-gray-700 mb-2">Nome da Campanha</label>
              <input
                type="text"
                value={campaign}
                onChange={(e) => setCampaign(e.target.value)}
                placeholder="ex: spring_promo_2026, emergency_repair"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono"
              />
              <p className="text-xs text-gray-500 mt-1">Use underscore para separar palavras (sem espaços)</p>
            </div>

            {/* Content (Optional) */}
            <div className="md:col-span-2">
              <label className="block text-sm font-bold text-gray-700 mb-2">Conteúdo Específico (opcional)</label>
              <input
                type="text"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="ex: button_top, hero_image"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono text-sm"
              />
              <p className="text-xs text-gray-500 mt-1">Qual elemento específico? (posts diferentes, botões diferentes, etc)</p>
            </div>
          </div>

          {/* Generated URL */}
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <p className="text-sm text-gray-600 font-bold mb-2">Sua URL com UTM:</p>
            <div className="flex items-center gap-2">
              <code className="flex-1 text-xs md:text-sm bg-white border border-gray-200 rounded px-4 py-3 font-mono overflow-auto text-gray-900 break-all">
                {url}
              </code>
              <button
                onClick={() => handleCopy(url, 'main')}
                className="flex-shrink-0 flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-bold transition-all"
              >
                {copied === 'main' ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span className="hidden sm:inline">Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span className="hidden sm:inline">Copiar</span>
                  </>
                )}
              </button>
            </div>
          </div>

          <p className="text-sm text-gray-600 mb-6">
            ✅ Cole esta URL no seu post/mensagem. O Google Analytics vai rastrear automaticamente!
          </p>
        </div>

        {/* All Variations */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            🚀 Todas as Variações (Uma Clicada!)
          </h2>
          <p className="text-gray-600 mb-6">
            Use estas URLs prontas para diferentes plataformas com a mesma campanha "{campaign}":
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(allVariations).map(([key, url]) => (
              <div key={key} className="border border-gray-200 rounded-lg p-4 hover:border-blue-400 transition-all">
                <p className="text-sm font-bold text-gray-700 mb-2">{key.replace(/_/g, ' ').toUpperCase()}</p>
                <div className="flex gap-2">
                  <code className="flex-1 text-xs bg-gray-50 rounded px-3 py-2 font-mono overflow-auto text-gray-600 break-all">
                    {url.replace('https://bubblesenterprise.com', '').substring(0, 40)}...
                  </code>
                  <button
                    onClick={() => handleCopy(url, key)}
                    className="flex-shrink-0 flex items-center justify-center w-10 h-10 bg-gray-100 hover:bg-blue-100 rounded transition-all"
                    title="Copiar URL"
                  >
                    {copied === key ? (
                      <Check className="w-4 h-4 text-green-600" />
                    ) : (
                      <Copy className="w-4 h-4 text-gray-600" />
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tips */}
        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-2xl p-8">
          <h3 className="text-lg font-bold text-blue-900 mb-4">💡 Dicas para Sucesso</h3>
          <ul className="space-y-3 text-blue-800">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold">1.</span>
              <span>Use nomes de campanha <strong>simples e descritivos</strong> (spring_2026, emergency_repair)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold">2.</span>
              <span>Cole a URL toda (não encurte, GA4 precisa dos parâmetros)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold">3.</span>
              <span>Verifique resultados no GA4 depois de 1-2 semanas</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold">4.</span>
              <span>Use o mesmo "campaign" para múltiplos canais (para agrupar)</span>
            </li>
          </ul>
        </div>

        {/* Footer Link */}
        <div className="mt-8 text-center text-sm text-gray-600">
          <p>Veja o guia completo em <a href="/utm-guide" className="text-blue-600 font-bold hover:underline">UTM-GUIA-COMPLETO.md</a></p>
        </div>
      </div>
    </div>
  );
}
