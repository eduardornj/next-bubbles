#!/bin/bash
# indexnow-ping.sh — Notifica Bing/Yandex/etc que o site foi atualizado
# Roda DEPOIS do deploy: bash scripts/indexnow-ping.sh
# IndexNow notifica: Bing, Yandex, Seznam, Naver (todos simultaneamente)

KEY="c9c0a88d313de641fac94bc760f45fca"
HOST="bubblesenterprise.com"

echo "=== IndexNow: Notificando motores de busca ==="

curl -s -X POST "https://api.indexnow.org/indexnow" \
  -H "Content-Type: application/json" \
  -d "{
    \"host\": \"$HOST\",
    \"key\": \"$KEY\",
    \"keyLocation\": \"https://$HOST/$KEY.txt\",
    \"urlList\": [
      \"https://$HOST/\",
      \"https://$HOST/services\",
      \"https://$HOST/repairs\",
      \"https://$HOST/remove-replace\",
      \"https://$HOST/new-construction\",
      \"https://$HOST/calculator\",
      \"https://$HOST/contact\",
      \"https://$HOST/financing\",
      \"https://$HOST/gallery\",
      \"https://$HOST/about\",
      \"https://$HOST/faq\",
      \"https://$HOST/testimonials\",
      \"https://$HOST/areas\",
      \"https://$HOST/materials\",
      \"https://$HOST/soffit-repair-orlando\",
      \"https://$HOST/fascia-repair-orlando\",
      \"https://$HOST/certifications\",
      \"https://$HOST/review\",
      \"https://$HOST/blog\",
      \"https://$HOST/es/\",
      \"https://$HOST/es/services\",
      \"https://$HOST/es/calculator\",
      \"https://$HOST/es/contact\",
      \"https://$HOST/es/gallery\",
      \"https://$HOST/es/about\",
      \"https://$HOST/pt/\",
      \"https://$HOST/pt/services\",
      \"https://$HOST/pt/calculator\",
      \"https://$HOST/pt/contact\",
      \"https://$HOST/pt/gallery\",
      \"https://$HOST/pt/about\"
    ]
  }" -o /dev/null -w "HTTP Status: %{http_code}"

echo ""
echo ""
echo "Done! Status 200 ou 202 = sucesso."
echo "Bing, Yandex, Seznam e Naver foram notificados."
