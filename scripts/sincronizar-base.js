// Copia scripts/base-comum.js para todos os arquivos, entre os marcadores da BASE COMUM.
// Uso: node scripts/sincronizar-base.js
var fs = require('fs'), path = require('path');
var raiz = path.join(__dirname, '..');
var base = fs.readFileSync(path.join(__dirname, 'base-comum.js'), 'utf8');
var ARQUIVOS = ['index.html', 'sieg-studio-apresentacao.html', 'sieg-studio-allhands.html', 'sieg-studio-papel-timbrado.html', 'sieg-studio-resumo-semanal.html'];
var BLOCO = /  \/\* ===== BASE COMUM DOS EDITORES · v\d+ · INÍCIO =====[\s\S]*?\/\* ===== BASE COMUM DOS EDITORES · v\d+ · FIM ===== \*\/\n/;
ARQUIVOS.forEach(function (nome) {
  var arq = path.join(raiz, nome), html = fs.readFileSync(arq, 'utf8');
  if (!BLOCO.test(html)) { console.error('Marcadores da base comum não encontrados em ' + nome); process.exitCode = 1; return; }
  fs.writeFileSync(arq, html.replace(BLOCO, function () { return base; }));
  console.log('Base comum atualizada em ' + nome);
});
