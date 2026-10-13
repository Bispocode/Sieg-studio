# SIEG Studio

Galeria de templates e editores de peças do Brand Space da SIEG.

## Arquivos

| Arquivo | O que é |
|---|---|
| `index.html` | Galeria (marcas, busca, filtros, Histórico, favoritos) e editor dos templates simples |
| `sieg-studio-apresentacao.html` | Editor de apresentações (Institucional, Academy e Endomarketing) |
| `sieg-studio-allhands.html` | Editor do Anúncio All Hands |
| `sieg-studio-papel-timbrado.html` | Papel timbrado (SIEG Institucional): texto nas normas da ABNT com Figtree, exporta PDF, Word (.docx) e PNG |
| `sieg-studio-resumo-semanal.html` | Resumo semanal de atualizações (SIEG Endomarketing): seções Disponível, Em breve, Comunicado e Release, exporta PNG e JPG |

Cada arquivo é um **fragmento** (HTML + `<style>` + `<script>`, JavaScript puro, sem build) para colar num bloco
"HTML personalizado" do WordPress. As instruções de configuração estão no comentário do topo de cada arquivo.

## Base comum dos editores

O bloco `BASE COMUM DOS EDITORES` (trabalhos salvos, desfazer/refazer, enquadramento de imagem, conferência
antes de exportar) aparece igual em todos os editores, porque cada bloco do WordPress precisa estar completo.

- A fonte é `scripts/base-comum.js`. Edite lá e rode `node scripts/sincronizar-base.js` para copiar para todos os arquivos.
- `node scripts/conferir-base.js` confere se as cópias estão idênticas (sai com erro se não estiverem).

## Prévia (Vercel)

`node scripts/gerar-preview.js` gera em `dist/` páginas completas (doctype, `lang="pt-BR"`, charset, viewport e título)
a partir dos fragmentos, com os mesmos nomes de arquivo, então os links entre galeria e editores funcionam.
O `vercel.json` já usa esse script como build e `dist/` como saída. A geração falha se a base comum estiver diferente.

## Dados salvos

Tudo fica no `localStorage` do navegador de cada pessoa: `ss-historico` (lista do Histórico), `ss-trab-<id>`
(cada trabalho), `ss-thumb-<id>` (miniatura) e `ss-favoritos`. Formatos antigos são migrados ao abrir.
