#!/bin/bash
# prepare-deploy.sh — Gera deploy-full.tar.gz pronto para o servidor
# Resolve o conflito com CloudLinux renomeando node_modules → _modules
# Uso: bash scripts/prepare-deploy.sh

set -e
cd "$(dirname "$0")/.."

echo "=== 1/6 Building Next.js ==="
npm run build

echo "=== 2/6 Copying static + public + env ==="
cp -r .next/static .next/standalone/.next/static
cp -r public .next/standalone/public
cp .env.local .next/standalone/.env.local
cat > .next/standalone/.htaccess << 'HTEOF'
PassengerEnabled on
PassengerAppRoot /home/bubbles1/domains/bubblesenterprise.com/public_html
PassengerAppType node
PassengerStartupFile server.js
HTEOF

echo "=== 3/6 Renaming node_modules → _modules (CloudLinux fix) ==="
cd .next/standalone
if [ -d "node_modules" ]; then
  mv node_modules _modules
fi

echo "=== 4/6 Patching server.js to use _modules ==="
# Adiciona MODULE_PATH no topo do server.js para que require() procure em _modules
if ! grep -q "_modules" server.js; then
  # Insere a linha de module paths ANTES de tudo
  sed -i '1i\process.env.NODE_PATH = require("path").join(__dirname, "_modules"); require("module").Module._initPaths();' server.js
fi

echo "=== 5/6 Creating tar.gz ==="
tar -czf ../../deploy-full.tar.gz .

echo "=== 6/6 Done! ==="
cd ../..
SIZE=$(du -h deploy-full.tar.gz | cut -f1)
echo ""
echo "✓ deploy-full.tar.gz ($SIZE) ready!"
echo ""
echo "No servidor:"
echo "  cd /home/bubbles1/domains/bubblesenterprise.com/public_html"
echo "  ls | grep -v backup.zip | grep -v deploy-full.tar.gz | xargs rm -rf"
echo "  tar -xzf deploy-full.tar.gz"
echo "  # Restart no DirectAdmin → Node.js → Restart"
