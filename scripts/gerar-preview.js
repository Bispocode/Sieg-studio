// Gera páginas completas (doctype, <html lang="pt-BR">, <head>) a partir dos fragmentos do WordPress,
// para testar no Vercel ou localmente. Os fragmentos continuam sendo a fonte; nada é copiado à mão.
// Uso: node scripts/gerar-preview.js   →  pasta dist/ (mesmos nomes de arquivo, então os links funcionam)
var fs = require('fs'), path = require('path');
var raiz = path.join(__dirname, '..'), saida = path.join(raiz, 'dist');
var PAGINAS = {
  'index.html': 'SIEG Studio',
  'sieg-studio-apresentacao.html': 'Apresentação | SIEG Studio',
  'sieg-studio-allhands.html': 'Anúncio All Hands | SIEG Studio'
};
require('./conferir-base.js'); // falha a geração se a base comum estiver diferente entre os arquivos
fs.mkdirSync(saida, { recursive: true });
Object.keys(PAGINAS).forEach(function (nome) {
  var fragmento = fs.readFileSync(path.join(raiz, nome), 'utf8');
  var pagina = '<!doctype html>\n<html lang="pt-BR">\n<head>\n<meta charset="utf-8">\n' +
    '<meta name="viewport" content="width=device-width, initial-scale=1">\n' +
    '<title>' + PAGINAS[nome] + '</title>\n' +
    '<style>html,body{margin:0;background:#f2f4f8}</style>\n</head>\n<body>\n' +
    fragmento + '\n</body>\n</html>\n';
  fs.writeFileSync(path.join(saida, nome), pagina);
  console.log('dist/' + nome);
});
