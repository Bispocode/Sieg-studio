  /* ===== BASE COMUM DOS EDITORES · v2 · INÍCIO =====
     Bloco idêntico em index.html, sieg-studio-apresentacao.html, sieg-studio-allhands.html e
     sieg-studio-papel-timbrado.html. As cópias precisam ficar iguais. Não edite direto nos arquivos: edite scripts/base-comum.js
     e rode `node scripts/sincronizar-base.js`. Para conferir: `node scripts/conferir-base.js`.
     Usa as variáveis root, $ e $$ de cada editor.
     - Trabalho / criarSalvamento: cada edição fica salva neste navegador como um trabalho do Histórico.
     - criarHistorico: Desfazer / Refazer (botões e Ctrl+Z, Ctrl+Shift+Z, Ctrl+Y).
     - Ajuste: janela de enquadramento de imagem.
     - conferirExport: avisa se ainda há texto de exemplo antes de exportar.
     ================================================== */
  var BASE_VERSAO = 2;

  /* ---------- Estilos e janelas da base (criados uma vez) ---------- */
  (function () {
    if (document.getElementById('ss-base-css')) return;
    var css = document.createElement('style');
    css.id = 'ss-base-css';
    css.textContent = [
      '.ss-base-modal{position:fixed;inset:0;z-index:99999;display:grid;place-items:center;padding:16px;background:rgba(4,4,38,.55);font-family:inherit;color:#040426;line-height:1.4}',
      '.ss-base-modal[hidden]{display:none!important}',
      '.ss-base-modal *{box-sizing:border-box}',
      '.ss-base-caixa{width:min(440px,100%);max-height:100%;overflow-y:auto;background:#fff;border-radius:18px;padding:22px;box-shadow:0 24px 60px rgba(4,4,38,.3)}',
      '.ss-base-modal .ss-base-caixa h3{font-size:20px;font-weight:700;margin:0 0 4px;color:#040426;letter-spacing:normal;text-transform:none}',
      '.ss-base-modal .ss-base-caixa p{margin:0}',
      '.ss-base-modal .ss-base-dica{font-size:13px;color:#3a3f4b;margin-bottom:14px!important}',
      '.ss-base-modal .ss-base-canvas{display:block;max-width:100%;max-height:55vh;width:auto;height:auto;margin:0 auto;border-radius:12px;background:#e9ebf0;cursor:grab;touch-action:none}',
      '.ss-base-modal .ss-base-canvas.is-drag{cursor:grabbing}',
      '.ss-base-modal .ss-base-zoom{display:flex;align-items:center;gap:8px;margin:14px 0 18px}',
      '.ss-base-modal .ss-base-zoom input{flex:1;accent-color:var(--ss-accent,#005fe9);cursor:pointer;margin:0}',
      '.ss-base-modal .ss-base-icone{width:30px;height:30px;border-radius:8px;display:grid;place-items:center;color:#3a3f4b;background:none;border:0;padding:0;cursor:pointer}',
      '.ss-base-modal .ss-base-icone:hover{background:rgba(0,0,0,.06);color:#040426}',
      '.ss-base-modal .ss-base-icone svg{width:17px;height:17px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}',
      '.ss-base-modal .ss-base-acoes{display:flex;align-items:center;gap:8px;flex-wrap:wrap}',
      '.ss-base-modal .ss-base-esq{display:flex;gap:12px;margin-right:auto}',
      '.ss-base-modal .ss-base-link{font:inherit;font-size:14px;color:var(--ss-accent,#005fe9);text-decoration:underline;text-underline-offset:3px;background:none;border:0;padding:0;cursor:pointer}',
      '.ss-base-modal .ss-base-link.is-perigo{color:#b42318}',
      '.ss-base-modal .ss-base-btn{font:inherit;height:38px;padding:0 16px;border-radius:999px;font-size:15px;border:1px solid #dde0e6;background:#fff;color:#040426;cursor:pointer}',
      '.ss-base-modal .ss-base-btn:hover{border-color:var(--ss-accent,#005fe9);color:var(--ss-accent,#005fe9)}',
      '.ss-base-modal .ss-base-btn.is-principal{background:var(--ss-accent,#005fe9);border-color:var(--ss-accent,#005fe9);color:#fff}',
      '.ss-base-modal .ss-base-btn.is-principal:hover{filter:brightness(1.08);color:#fff}',
      '.ss-base-modal .ss-base-lista{margin:10px 0 18px;padding:0;list-style:none;max-height:40vh;overflow-y:auto}',
      '.ss-base-modal .ss-base-lista li{font-size:14px;padding:8px 12px;border-radius:10px;background:#f4f5f8;margin-bottom:6px}',
      '.ss-base-modal .ss-base-lista b{font-weight:600}',
      '.ss-base-alerta{margin-top:12px;padding:12px 14px;border-radius:12px;background:#fdecea;border:1px solid #f3b8b2;color:#7a1b12;font-size:14px;flex:none}',
      '.ss-base-alerta[hidden]{display:none!important}',
      '.ss-base-alerta p{margin:0 0 8px;font-size:14px}',
      '.ss-base-alerta p:last-child{margin-bottom:0}',
      '.ss-base-alerta .ss-base-liberar{font:inherit;font-size:13px;font-weight:600;padding:6px 12px;border-radius:999px;border:0;background:#b42318;color:#fff;cursor:pointer}',
      '.ss-base-nota{margin:8px 0 0;font-size:12px;color:#8a8f99;display:flex;gap:6px;align-items:center}',
      '.ss-base-nota svg{width:14px;height:14px;flex:none;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}',
      '.ss-base-corte{margin:-2px 0 8px 14px;font-size:12px;color:#b54708}',
      '.ss-base-corte::before{content:"⚠ "}'
    ].join('\n');
    document.head.appendChild(css);
  })();
  function criarJanela(html) {
    var el = document.createElement('div');
    el.className = 'ss-base-modal';
    el.setAttribute('role', 'dialog');
    el.setAttribute('aria-modal', 'true');
    el.setAttribute('data-ss-modal', '');
    el.hidden = true;
    el.innerHTML = '<div class="ss-base-caixa">' + html + '</div>';
    root.appendChild(el);
    return el;
  }
  // Verdadeiro quando uma janela ou menu do editor está aberto: os atalhos do editor ficam parados
  function modalAberto() { return !!root.querySelector('[data-ss-modal]:not([hidden])'); }
  // Mantém o Tab dentro da janela aberta
  function prenderFoco(janela, e) {
    var foc = Array.prototype.slice.call(janela.querySelectorAll('button, input, canvas[tabindex]')).filter(function (el) { return !el.hidden && el.offsetParent !== null; });
    if (!foc.length) return;
    var i = foc.indexOf(document.activeElement);
    if (e.shiftKey && i <= 0) { foc[foc.length - 1].focus(); e.preventDefault(); }
    else if (!e.shiftKey && i === foc.length - 1) { foc[0].focus(); e.preventDefault(); }
  }
  var escapar = function (s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); };
  function dataHora(ms) {
    var d = new Date(ms || Date.now()), dois = function (v) { return ('0' + v).slice(-2); };
    return dois(d.getDate()) + '/' + dois(d.getMonth() + 1) + '/' + d.getFullYear() + ' às ' + dois(d.getHours()) + ':' + dois(d.getMinutes());
  }
  // "Apresentação de Março!" -> "apresentacao-de-marco"
  function slug(t) {
    return String(t || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 60);
  }
  // Carrega uma biblioteca externa só quando for usada (ex.: jsPDF ao exportar)
  var scriptsCarregados = {};
  function carregarScript(url) {
    if (!scriptsCarregados[url]) {
      scriptsCarregados[url] = new Promise(function (ok, falha) {
        var s = document.createElement('script');
        s.src = url; s.async = true;
        s.onload = ok; s.onerror = function () { delete scriptsCarregados[url]; falha(new Error('Não carregou ' + url)); };
        document.head.appendChild(s);
      });
    }
    return scriptsCarregados[url];
  }

  /* ---------- Trabalhos salvos (Histórico) ---------- */
  var Trabalho = (function () {
    var HIST = 'ss-historico', MAX = 30;
    function lerHist() { try { var h = JSON.parse(localStorage.getItem(HIST)); return Array.isArray(h) ? h : []; } catch (e) { return []; } }
    function gravarHist(h) { localStorage.setItem(HIST, JSON.stringify(h)); }
    function ler(id) { try { return id ? JSON.parse(localStorage.getItem('ss-trab-' + id)) : null; } catch (e) { return null; } }
    function entrada(id) { return lerHist().filter(function (x) { return x.id === id; })[0] || null; }
    function novoId() { return Date.now().toString(36) + Math.random().toString(36).slice(2, 6); }
    function nomeDe(x) { return x.nome || x.titulo || 'Trabalho'; }
    function apagar(id) {
      try {
        localStorage.removeItem('ss-trab-' + id);
        localStorage.removeItem('ss-thumb-' + id);
        gravarHist(lerHist().filter(function (x) { return x.id !== id; }));
      } catch (e) {}
    }
    // Guarda tudo de um trabalho para poder desfazer a exclusão
    function pacote(id) {
      try { return { entrada: entrada(id), dados: localStorage.getItem('ss-trab-' + id), thumb: localStorage.getItem('ss-thumb-' + id) }; } catch (e) { return null; }
    }
    function devolver(p) {
      if (!p || !p.entrada) return false;
      try {
        localStorage.setItem('ss-trab-' + p.entrada.id, p.dados);
        if (p.thumb) localStorage.setItem('ss-thumb-' + p.entrada.id, p.thumb);
        var h = lerHist().filter(function (x) { return x.id !== p.entrada.id; });
        h.push(p.entrada);
        h.sort(function (a, b) { return (b.atualizado || 0) - (a.atualizado || 0); });
        gravarHist(h);
        return true;
      } catch (e) { return false; }
    }
    // info: { id, template, titulo, marca, nome }. Não apaga nada sozinho: sem espaço devolve { ok:false, cheio:true }.
    function gravar(info, dados) {
      try {
        var antes = entrada(info.id);
        var h = lerHist().filter(function (x) { return x.id !== info.id; });
        var e = { id: info.id, template: info.template, titulo: info.titulo, marca: info.marca, atualizado: Date.now() };
        if (antes && antes.renomeado) { e.nome = antes.nome; e.renomeado = true; }
        else if (info.nome) e.nome = info.nome;
        h.unshift(e);
        localStorage.setItem('ss-trab-' + info.id, JSON.stringify(dados));
        gravarHist(h);
        return { ok: true };
      } catch (err) {
        return { ok: false, cheio: /quota|exceed/i.test(String(err && (err.name + err.message))) || (err && err.code === 22) };
      }
    }
    // Trabalhos que podem ser apagados para liberar espaço (os mais antigos primeiro)
    function maisAntigos(exceto, n) {
      return lerHist().filter(function (x) { return x.id !== exceto; })
        .sort(function (a, b) { return (a.atualizado || 0) - (b.atualizado || 0); }).slice(0, n);
    }
    function renomear(id, nome) {
      var h = lerHist();
      h.forEach(function (x) { if (x.id === id) { x.nome = String(nome).trim() || x.titulo; x.renomeado = !!String(nome).trim(); } });
      try { gravarHist(h); return true; } catch (e) { return false; }
    }
    function miniatura(id, url) {
      if (url === undefined) { try { return localStorage.getItem('ss-thumb-' + id); } catch (e) { return null; } }
      try { localStorage.setItem('ss-thumb-' + id, url); } catch (e) {} // sem espaço: fica sem miniatura
    }
    // Leva para o Histórico o que a primeira versão salvava direto no modelo
    function migrar(chaveAntiga, info) {
      try {
        var v = localStorage.getItem(chaveAntiga);
        if (v === null) return;
        var dados = JSON.parse(v);
        if (dados && gravar({ id: novoId(), template: info.template, titulo: info.titulo, marca: info.marca }, dados).ok) localStorage.removeItem(chaveAntiga);
      } catch (e) {}
    }
    return { MAX: MAX, lerHist: lerHist, ler: ler, entrada: entrada, gravar: gravar, apagar: apagar, pacote: pacote, devolver: devolver,
      maisAntigos: maisAntigos, renomear: renomear, miniatura: miniatura, migrar: migrar, novoId: novoId, nomeDe: nomeDe };
  })();

  // Salvamento automático de um editor.
  // o: { info:{template,titulo,marca}, id, estado(), modelo(), nome(), aoCriar(id), miniatura(feito), antesDe, depoisDe }
  // - Só cria o trabalho quando o estado deixa de ser igual ao modelo (abrir e mexer sem mudar nada não cria).
  // - Sem espaço no navegador, mostra um aviso fixo e oferece apagar os trabalhos mais antigos (dizendo quais).
  function criarSalvamento(o) {
    var id = o.id || null, timer, timerMini;
    var alerta = document.createElement('div');
    alerta.className = 'ss-base-alerta';
    alerta.setAttribute('role', 'alert');
    alerta.hidden = true;
    o.antesDe.parentNode.insertBefore(alerta, o.antesDe);
    var nota = document.createElement('p');
    nota.className = 'ss-base-nota';
    nota.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4"/></svg>Os trabalhos ficam salvos só neste navegador. Exporte para guardar.';
    o.depoisDe.parentNode.insertBefore(nota, o.depoisDe.nextSibling);

    function mostrarSemEspaco() {
      var velhos = Trabalho.maisAntigos(id, 3);
      if (!velhos.length) {
        alerta.innerHTML = '<p><b>Não foi possível salvar este trabalho neste navegador.</b> Exporte a peça antes de sair da página.</p>';
      } else {
        alerta.innerHTML = '<p><b>O navegador ficou sem espaço e este trabalho não foi salvo.</b> Para salvar, dá para apagar ' +
          (velhos.length === 1 ? 'o trabalho mais antigo' : 'os ' + velhos.length + ' trabalhos mais antigos') + ' do Histórico:</p>' +
          '<p>' + velhos.map(function (x) { return '• ' + escapar(Trabalho.nomeDe(x)) + ' (' + dataHora(x.atualizado) + ')'; }).join('<br>') + '</p>' +
          '<p><button type="button" class="ss-base-liberar" data-liberar>Apagar ' + (velhos.length === 1 ? 'esse' : 'esses') + ' e salvar</button></p>';
      }
      alerta.hidden = false;
    }
    alerta.addEventListener('click', function (e) {
      if (!e.target.closest('[data-liberar]')) return;
      var velhos = Trabalho.maisAntigos(id, 3);
      velhos.forEach(function (x) { Trabalho.apagar(x.id); });
      agora();
      if (alerta.hidden) {
        alerta.innerHTML = '<p>Trabalho salvo. Apagados do Histórico: ' + velhos.map(function (x) { return escapar(Trabalho.nomeDe(x)); }).join(', ') + '.</p>';
        alerta.hidden = false;
        setTimeout(function () { alerta.hidden = true; }, 10000);
      }
    });
    function agora() {
      clearTimeout(timer);
      var dados = o.estado();
      if (!id) {
        if (JSON.stringify(dados) === JSON.stringify(o.modelo())) return;
        id = Trabalho.novoId();
        o.aoCriar(id);
      }
      var r = Trabalho.gravar({ id: id, template: o.info.template, titulo: o.info.titulo, marca: o.info.marca, nome: o.nome() }, dados);
      if (!r.ok) { mostrarSemEspaco(); return; }
      if (alerta.querySelector('[data-liberar]') || /não foi possível salvar/i.test(alerta.textContent)) alerta.hidden = true;
      clearTimeout(timerMini);
      timerMini = setTimeout(function () {
        if (o.miniatura) o.miniatura(function (url) { if (url && id) Trabalho.miniatura(id, url); });
      }, 1500);
    }
    return {
      salvar: function () { clearTimeout(timer); timer = setTimeout(agora, 400); },
      agora: agora,
      id: function () { return id; }
    };
  }

  /* ---------- Desfazer / Refazer ---------- */
  // opcoes: { retrato() -> cópia do estado, aplicar(r), registrou(), depois() }
  function criarHistorico(opcoes) {
    var pilha = [], refeitos = [], ultimaChave = null, ultimoT = 0, MAX_HIST = 100;
    var bDesfazer = $('[data-hist="desfazer"]'), bRefazer = $('[data-hist="refazer"]');
    function atualizar() { bDesfazer.disabled = !pilha.length; bRefazer.disabled = !refeitos.length; }
    // Chame ANTES de mudar o estado. chave agrupa ações seguidas iguais (digitar no mesmo campo,
    // vários toques de seta no mesmo elemento) num passo só.
    function registrar(chave) {
      var agora = Date.now();
      if (chave && chave === ultimaChave && agora - ultimoT < 1200) { ultimoT = agora; return; }
      ultimaChave = chave || null; ultimoT = agora;
      pilha.push(opcoes.retrato());
      if (pilha.length > MAX_HIST) pilha.shift();
      refeitos = [];
      atualizar();
      if (opcoes.registrou) opcoes.registrou();
    }
    function mover(de, para) {
      if (!de.length) return;
      para.push(opcoes.retrato());
      opcoes.aplicar(de.pop());
      ultimaChave = null;
      atualizar();
      if (opcoes.depois) opcoes.depois();
    }
    function desfazer() { mover(pilha, refeitos); }
    function refazer() { mover(refeitos, pilha); }
    bDesfazer.addEventListener('click', desfazer);
    bRefazer.addEventListener('click', refazer);
    document.addEventListener('keydown', function (e) {
      if (!(e.ctrlKey || e.metaKey) || e.altKey || modalAberto()) return;
      var a = document.activeElement;
      if (a && (/INPUT|TEXTAREA|SELECT/.test(a.tagName) || a.isContentEditable)) return; // nos campos vale o desfazer do próprio texto
      var k = e.key.toLowerCase();
      if (k === 'z' && !e.shiftKey) { e.preventDefault(); desfazer(); }
      else if ((k === 'z' && e.shiftKey) || k === 'y') { e.preventDefault(); refazer(); }
    });
    atualizar();
    return { registrar: registrar, desfazer: desfazer, refazer: refazer };
  }

  // Cópia de objetos e listas (textos e imagens em data URL são compartilhados, não duplicados)
  function clonar(v) {
    if (Array.isArray(v)) return v.map(clonar);
    if (v && typeof v === 'object') { var o = {}; for (var k in v) if (Object.prototype.hasOwnProperty.call(v, k)) o[k] = clonar(v[k]); return o; }
    return v;
  }

  /* ---------- Imagens ---------- */
  // Lê um arquivo de imagem e devolve uma cópia reduzida (data URL). PNG sem transparência vira JPG (bem menor).
  function lerImagem(f, maxLado, ok, falha) {
    if (!/^image\/(png|jpeg|webp)$/.test(f.type)) { falha('Esse arquivo não é uma imagem. Use PNG, JPG ou WEBP.'); return; }
    if (f.size > 20 * 1024 * 1024) { falha('A imagem passa de 20 MB. Reduza o tamanho e tente de novo.'); return; }
    var url = URL.createObjectURL(f), img = new Image();
    img.onload = function () {
      var r = Math.min(1, maxLado / Math.max(img.naturalWidth, img.naturalHeight)), c = document.createElement('canvas');
      c.width = Math.max(1, Math.round(img.naturalWidth * r)); c.height = Math.max(1, Math.round(img.naturalHeight * r));
      var cx = c.getContext('2d');
      cx.drawImage(img, 0, 0, c.width, c.height);
      URL.revokeObjectURL(url);
      var transparente = false;
      if (f.type !== 'image/jpeg') {
        var px = cx.getImageData(0, 0, c.width, c.height).data;
        for (var i = 3; i < px.length; i += 16) if (px[i] < 250) { transparente = true; break; }
      }
      ok(transparente ? c.toDataURL('image/png') : c.toDataURL('image/jpeg', 0.84));
    };
    img.onerror = function () { URL.revokeObjectURL(url); falha('Não foi possível abrir essa imagem. Tente outro arquivo.'); };
    img.src = url;
  }
  // Retângulo da imagem de origem que cobre uma área w×h com o enquadramento enq {x, y, z}
  function origemEnq(img, enq, w, h) {
    var iw = img.naturalWidth || img.width, ih = img.naturalHeight || img.height;
    var e = enq || { x: 0.5, y: 0.5, z: 1 };
    var s = Math.max(w / iw, h / ih) * (e.z || 1), sw = w / s, sh = h / s;
    var cx = Math.min(iw - sw / 2, Math.max(sw / 2, e.x * iw)), cy = Math.min(ih - sh / 2, Math.max(sh / 2, e.y * ih));
    return [cx - sw / 2, cy - sh / 2, sw, sh];
  }
  function desenharEnq(ctx, img, enq, x, y, w, h) {
    var o = origemEnq(img, enq, w, h);
    ctx.drawImage(img, o[0], o[1], o[2], o[3], x, y, w, h);
  }
  // Gera a imagem já recortada (data URL) com largura w e altura h
  function recortar(img, enq, w, h, tipo) {
    var c = document.createElement('canvas');
    c.width = Math.max(1, Math.round(w)); c.height = Math.max(1, Math.round(h));
    desenharEnq(c.getContext('2d'), img, enq, 0, 0, c.width, c.height);
    return c.toDataURL(tipo || 'image/jpeg', 0.88);
  }
  // CSS de fundo que mostra a imagem (iw×ih) numa área (aw×ah) com o enquadramento, sem gerar outra imagem
  function fundoEnq(iw, ih, enq, aw, ah) {
    var o = origemEnq({ naturalWidth: iw, naturalHeight: ih }, enq, aw, ah), s = aw / o[2];
    var w = iw * s, h = ih * s, x = -o[0] * s, y = -o[1] * s;
    var px = Math.abs(aw - w) < 0.5 ? 50 : x / (aw - w) * 100, py = Math.abs(ah - h) < 0.5 ? 50 : y / (ah - h) * 100;
    return { size: (w / aw * 100).toFixed(3) + '% ' + (h / ah * 100).toFixed(3) + '%', pos: px.toFixed(3) + '% ' + py.toFixed(3) + '%' };
  }

  // Ajuste.abrir({ src, enq, aspecto, circulo, aplicar(enq, img), trocar(), remover(), erro(msg) })
  var Ajuste = (function () {
    var IC_MENOS = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14"/></svg>', IC_MAIS = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>';
    var corte = criarJanela(
      '<h3>Ajustar enquadramento</h3>' +
      '<p class="ss-base-dica">Arraste a imagem para posicionar. Use o controle ou a roda do mouse para aproximar.</p>' +
      '<canvas class="ss-base-canvas" width="720" height="720" tabindex="0" aria-label="Enquadramento da imagem. Use as setas para mover e as teclas + e - para aproximar."></canvas>' +
      '<div class="ss-base-zoom"><button type="button" class="ss-base-icone" data-crop="menos" aria-label="Afastar">' + IC_MENOS + '</button>' +
      '<input type="range" min="1" max="4" step="0.01" value="1" aria-label="Zoom">' +
      '<button type="button" class="ss-base-icone" data-crop="mais" aria-label="Aproximar">' + IC_MAIS + '</button></div>' +
      '<div class="ss-base-acoes"><div class="ss-base-esq">' +
      '<button type="button" class="ss-base-link" data-crop="trocar">Trocar imagem</button>' +
      '<button type="button" class="ss-base-link is-perigo" data-crop="remover">Remover</button></div>' +
      '<button type="button" class="ss-base-btn" data-crop="cancelar">Cancelar</button>' +
      '<button type="button" class="ss-base-btn is-principal" data-crop="aplicar">Aplicar</button></div>');
    corte.setAttribute('aria-label', 'Ajustar enquadramento');
    var cv = corte.querySelector('canvas'), cx = cv.getContext('2d'), zoom = corte.querySelector('input');
    var LADO = 720, ZMAX = 4, aj = null, arrasto = null;
    function abrir(o) {
      var img = new Image();
      img.onload = function () {
        var voltar = aj ? aj.voltar : (corte.hidden ? document.activeElement : null);
        var asp = o.aspecto || 1;
        cv.width = asp >= 1 ? LADO : Math.round(LADO * asp);
        cv.height = asp >= 1 ? Math.round(LADO / asp) : LADO;
        var e = o.enq || {};
        aj = { o: o, img: img, x: e.x != null ? e.x : 0.5, y: e.y != null ? e.y : 0.5, z: e.z || 1, voltar: voltar };
        corte.querySelector('[data-crop="remover"]').hidden = !o.remover;
        corte.querySelector('[data-crop="trocar"]').hidden = !o.trocar;
        limitar(); pintar();
        corte.hidden = false;
        cv.focus();
      };
      img.onerror = function () { if (o.erro) o.erro('Não foi possível abrir essa imagem. Tente outro arquivo.'); };
      img.src = o.src;
    }
    function escala() { return Math.max(cv.width / aj.img.naturalWidth, cv.height / aj.img.naturalHeight) * aj.z; }
    function limitar() {
      aj.z = Math.min(ZMAX, Math.max(1, aj.z));
      var s = escala(), mx = cv.width / 2 / s / aj.img.naturalWidth, my = cv.height / 2 / s / aj.img.naturalHeight;
      aj.x = Math.min(1 - mx, Math.max(mx, aj.x));
      aj.y = Math.min(1 - my, Math.max(my, aj.y));
      zoom.value = aj.z;
    }
    function pintar() {
      var W = cv.width, H = cv.height, s = escala(), iw = aj.img.naturalWidth, ih = aj.img.naturalHeight;
      var cor = getComputedStyle(root).getPropertyValue('--ss-accent').trim() || '#005fe9';
      cx.clearRect(0, 0, W, H);
      cx.drawImage(aj.img, W / 2 - aj.x * iw * s, H / 2 - aj.y * ih * s, iw * s, ih * s);
      cx.strokeStyle = cor; cx.lineWidth = 8;
      if (aj.o.circulo) { // escurece o que fica fora do círculo da peça
        var r = Math.min(W, H) / 2 - 6;
        cx.fillStyle = 'rgba(4,4,38,.5)';
        cx.beginPath(); cx.rect(0, 0, W, H); cx.arc(W / 2, H / 2, r, 0, Math.PI * 2, true); cx.fill();
        cx.beginPath(); cx.arc(W / 2, H / 2, r, 0, Math.PI * 2); cx.stroke();
      } else {
        cx.strokeRect(4, 4, W - 8, H - 8);
      }
    }
    function mover(dx, dy) { var s = escala(); aj.x -= dx / s / aj.img.naturalWidth; aj.y -= dy / s / aj.img.naturalHeight; limitar(); pintar(); }
    function definirZoom(z) { aj.z = z; limitar(); pintar(); }
    function fechar() {
      corte.hidden = true;
      var v = aj && aj.voltar; aj = null;
      if (v && v.focus && document.contains(v)) v.focus();
    }
    function aplicar() {
      var o = aj.o, enq = { x: +aj.x.toFixed(4), y: +aj.y.toFixed(4), z: +aj.z.toFixed(3) }, img = aj.img;
      fechar();
      o.aplicar(enq, img);
    }

    cv.addEventListener('pointerdown', function (e) { arrasto = { x: e.clientX, y: e.clientY }; cv.setPointerCapture(e.pointerId); cv.classList.add('is-drag'); });
    cv.addEventListener('pointermove', function (e) {
      if (!arrasto || !aj) return;
      var k = cv.width / cv.getBoundingClientRect().width;
      mover((e.clientX - arrasto.x) * k, (e.clientY - arrasto.y) * k);
      arrasto = { x: e.clientX, y: e.clientY };
    });
    ['pointerup', 'pointercancel'].forEach(function (ev) { cv.addEventListener(ev, function () { arrasto = null; cv.classList.remove('is-drag'); }); });
    cv.addEventListener('wheel', function (e) { if (!aj) return; e.preventDefault(); definirZoom(aj.z * Math.exp(-e.deltaY * 0.0015)); }, { passive: false });
    zoom.addEventListener('input', function () { if (aj) definirZoom(+zoom.value); });

    corte.addEventListener('click', function (e) {
      if (e.target === corte) { fechar(); return; }
      var b = e.target.closest('[data-crop]'); if (!b || !aj) return;
      var acao = b.dataset.crop, o = aj.o;
      if (acao === 'mais') definirZoom(aj.z + 0.25);
      else if (acao === 'menos') definirZoom(aj.z - 0.25);
      else if (acao === 'aplicar') aplicar();
      else if (acao === 'cancelar') fechar();
      else if (acao === 'trocar') { fechar(); o.trocar(); }
      else if (acao === 'remover') { fechar(); o.remover(); }
    });
    corte.addEventListener('keydown', function (e) {
      e.stopPropagation(); // nenhuma tecla chega aos atalhos do editor atrás da janela
      if (!aj) return;
      if (e.key === 'Escape') { e.preventDefault(); fechar(); return; }
      if (e.key === 'Tab') { prenderFoco(corte, e); return; }
      if (e.target !== cv) return;
      var passo = e.shiftKey ? 60 : 15;
      var m = { ArrowLeft: [passo, 0], ArrowRight: [-passo, 0], ArrowUp: [0, passo], ArrowDown: [0, -passo] }[e.key];
      if (m) { e.preventDefault(); mover(m[0], m[1]); }
      else if (e.key === '+' || e.key === '=') { e.preventDefault(); definirZoom(aj.z + 0.25); }
      else if (e.key === '-') { e.preventDefault(); definirZoom(aj.z - 0.25); }
      else if (e.key === 'Enter') { e.preventDefault(); aplicar(); }
    });
    return { abrir: abrir };
  })();

  /* ---------- Conferência antes de exportar ---------- */
  // problemas: [{ onde, texto, alvo }]. Sem problemas, exporta direto.
  var conferirExport = (function () {
    var janela = criarJanela('<h3>Ainda há texto de exemplo</h3>' +
      '<p class="ss-base-dica">Estes pontos vão aparecer assim na peça exportada:</p>' +
      '<ul class="ss-base-lista"></ul>' +
      '<div class="ss-base-acoes"><div class="ss-base-esq"></div>' +
      '<button type="button" class="ss-base-btn" data-conf="exportar">Exportar assim mesmo</button>' +
      '<button type="button" class="ss-base-btn is-principal" data-conf="corrigir">Corrigir</button></div>');
    janela.setAttribute('aria-label', 'Ainda há texto de exemplo');
    var atual = null;
    function fechar() { janela.hidden = true; }
    janela.addEventListener('click', function (e) {
      if (e.target === janela) { fechar(); return; }
      var b = e.target.closest('[data-conf]'); if (!b || !atual) return;
      var a = atual; atual = null; fechar();
      if (b.dataset.conf === 'exportar') a.exportar();
      else a.corrigir(a.problemas[0]);
    });
    janela.addEventListener('keydown', function (e) {
      e.stopPropagation();
      if (e.key === 'Escape') { e.preventDefault(); fechar(); }
      else if (e.key === 'Tab') prenderFoco(janela, e);
    });
    return function (problemas, corrigir, exportar) {
      if (!problemas.length) { exportar(); return; }
      atual = { problemas: problemas, corrigir: corrigir, exportar: exportar };
      janela.querySelector('ul').innerHTML = problemas.slice(0, 12).map(function (p) {
        return '<li><b>' + escapar(p.onde) + '</b>' + (p.texto ? ': ' + escapar(p.texto) : '') + '</li>';
      }).join('') + (problemas.length > 12 ? '<li>e mais ' + (problemas.length - 12) + '…</li>' : '');
      janela.hidden = false;
      janela.querySelector('[data-conf="corrigir"]').focus();
    };
  })();
  // Texto ainda com colchetes de exemplo, como "[Título]"
  function temColchetes(t) { return /\[[^\]]*\]/.test(String(t || '')); }

  // Primeiro clique pede confirmação; o segundo executa (ex.: Restaurar modelo)
  function confirmarClique(btn, textoConfirma, acao) {
    var original = btn.textContent, timer;
    function voltar() { clearTimeout(timer); btn.textContent = original; btn.classList.remove('is-confirm'); }
    btn.addEventListener('click', function () {
      if (!btn.classList.contains('is-confirm')) {
        btn.classList.add('is-confirm');
        btn.textContent = textoConfirma;
        clearTimeout(timer);
        timer = setTimeout(voltar, 4000);
        return;
      }
      voltar();
      acao();
    });
    btn.addEventListener('blur', function () { setTimeout(function () { if (document.activeElement !== btn) voltar(); }, 150); });
  }

  // Aviso no painel com o botão Desfazer (ex.: "Slide excluído.")
  var aviso = $('.ss-undo'), timerAviso;
  function avisar(texto) {
    if (!aviso) return;
    $('.ss-undo-text').textContent = texto;
    aviso.hidden = false;
    clearTimeout(timerAviso);
    timerAviso = setTimeout(function () { aviso.hidden = true; }, 8000);
  }
  function esconderAviso() { if (!aviso) return; clearTimeout(timerAviso); aviso.hidden = true; }
  /* ===== BASE COMUM DOS EDITORES · v2 · FIM ===== */
