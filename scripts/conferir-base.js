// Confere se a BASE COMUM está idêntica nos três arquivos e em scripts/base-comum.js.
// Uso: node scripts/conferir-base.js   (sai com erro se alguma cópia estiver diferente)
var fs = require('fs'), path = require('path');
var raiz = path.join(__dirname, '..');
var base = fs.readFileSync(path.join(__dirname, 'base-comum.js'), 'utf8');
var ARQUIVOS = ['index.html', 'sieg-studio-apresentacao.html', 'sieg-studio-allhands.html'];
var BLOCO = /  \/\* ===== BASE COMUM DOS EDITORES · v\d+ · INÍCIO =====[\s\S]*?\/\* ===== BASE COMUM DOS EDITORES · v\d+ · FIM ===== \*\/\n/;
var ok = true;
ARQUIVOS.forEach(function (nome) {
  var m = fs.readFileSync(path.join(raiz, nome), 'utf8').match(BLOCO);
  if (!m) { console.error('✗ ' + nome + ': marcadores da base comum não encontrados'); ok = false; return; }
  if (m[0] !== base) { console.error('✗ ' + nome + ': base comum diferente de scripts/base-comum.js (rode node scripts/sincronizar-base.js)'); ok = false; return; }
  console.log('✓ ' + nome);
});
if (!ok) process.exit(1);
console.log('Base comum idêntica nos três arquivos.');
