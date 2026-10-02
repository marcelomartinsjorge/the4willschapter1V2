/* ==========================================================================
   MOTOR DO LIVRO INTERATIVO · As Quatro Vontades
   Páginas, escolhas (com tempo), diálogo, Luz, minijogos, som por página,
   codex, progresso salvo e estatísticas de escolhas (Supabase).
   O conteúdo vem de window.LIVRO (capitulo1.js); o codex, de CHAPTER_CONFIG.
   ========================================================================== */
(() => {
'use strict';
const L = window.LIVRO, CODEX = (window.CHAPTER_CONFIG && window.CHAPTER_CONFIG.codex) || {}, ZONES = Object.assign({}, (window.CHAPTER_CONFIG && window.CHAPTER_CONFIG.zones) || {}, L.zonas || {});
const SUPA = { url: 'https://qoxvlgscpljsrybywivf.supabase.co', key: 'sb_publishable_XvoczGgXZGAezAmabNUBrQ_r25L-7ga' };
const $ = (s, r = document) => r.querySelector(s);
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const wait = (ms) => new Promise((r) => setTimeout(r, ms));
const IS_TOUCH = matchMedia('(pointer: coarse)').matches;
const H264 = !!document.createElement('video').canPlayType('video/mp4; codecs="avc1.42E01E"');
const vsrc = (u) => (H264 || !/\.mp4$/.test(u) ? u : u.replace(/\.mp4$/, '.webm'));
const SAVE_KEY = 'livro_' + L.id;
// idioma: o livro começa em inglês; o leitor pode trocar para português
let LANG = 'en'; try { LANG = localStorage.getItem('livro_lang') || 'en'; } catch (e) {}
const EN = window.LIVRO_EN || {};
const tr = (t) => (LANG === 'en' && t != null ? (EN[t] != null ? EN[t] : t) : t);
const UI = {
  pt: { cantar: '▶ Deixar Aheryn cantar', parte: 'Parte', prox: 'Próxima', fim: 'Encerrar o capítulo', voltar: '← Voltar', ouvir: 'Ouvir Aheryn', cena: '▶ Ver a cena', oque: 'O que Aheryn faz?', decida: 'Decida', decidir: 'Decidir', escolheu: 'Você escolheu:', resp: 'Responder a', silencio: 'ficar em silêncio', momento: 'Momento de jogo',
    tutLuz: 'Essa é a Luz, no canto da tela. Cada escolha acende ou apaga o Aheryn.',
    mg: { passo: 'Acompanhar Nuuk', pedra: 'A pedra', goles: 'Um pensamento a menos', 'hino-do-gelo': 'O gelo obedece', cabana: 'Conferir a casa', despedida: 'O que levar' },
    ex: { abrir: 'Abrir', fechar: 'Fechar', voltar: '← Voltar', levar: 'Levar', deixar: 'Deixar', recolocar: 'Recolocar a tábua', falta: 'Escolha o que fazer com o diário antes de partir.', diarioCab: 'Lembranças do Velho Mundo', deslize: 'Deslize para ver a cabana inteira' },
    dica: { cabana: 'Toque em cada coisa da cabana antes de sair.', despedida: 'Escolha o que vai na mochila.', passo: 'Toque nas pegadas de Nuuk quando elas aparecem, alternando os pés. Pisar fora do rastro escorrega.', pedraT: 'Quando a seta aparecer, toque o lado para onde desviar. Só existe uma chance.', pedraK: 'Quando a seta aparecer, aperte ← ou → para desviar. Só existe uma chance.', goles: 'Cada gole apaga um pensamento. Você escolhe quais afogar e quando parar de beber. O que ficar aceso vira Luz.', jogo: (l) => `A Luz que você acumulou (${l}) já começa acesa no gelo, mas faz os Tacets chegarem mais rápido.` },
    coverEye: 'As Quatro Vontades · Livro I · Capítulo I', coverLede: 'Leia. Decida pelo Aheryn. E, quando o gelo pedir, jogue.', coverGo: 'Entrar no mundo gelado', coverCont: 'Continuar de onde parei', coverRestart: 'Começar do início', coverHint: 'Use fones. Avance com o botão, com a seta → ou deslizando para o lado.',
    luzTitle: 'A Luz do Aheryn: sobe quando ele sente, lembra e canta; desce quando ele se cala',
    confirm: 'Recomeçar o capítulo? Suas escolhas serão apagadas.', capI: 'Capítulo I', fimCap: 'Fim do Capítulo I', ficou: 'O que ficou de você no gelo', luz: 'Luz', suas: 'O que você levou', pedraQ: 'A pedra', diarioQ: 'O diário', levouPedra: 'Levou a pedra', deixouPedra: 'Deixou a pedra onde estava', nuncaPedra: 'Nunca a encontrou', levouDiario: 'Levou o diário', deixouDiario: 'Deixou o diário', reler: 'Reler e escolher diferente', mesmo: (p) => `${p}% dos leitores fizeram o mesmo`,
    fraseAlta: 'Aheryn deixou a luz subir mais do que devia. Alguém, em algum lugar, pode ter visto.', fraseBaixa: 'Aheryn quase não acendeu. Ninguém em cem léguas saberia que ele esteve ali.', fraseMeio: 'Aheryn acendeu e apagou na medida de quem sobrevive há um século.',
    augMais: 'Os Aug: Nuuk vai lembrar de você com algum respeito.', augMenos: 'Os Aug: Nuuk vai lembrar de você com desconfiança.', augZero: 'Os Aug: nada mudou entre vocês.', augPulou: 'Os Aug: Nuuk levou você direto à bebida. Gromm ficou sem ser visto.', gelMais: 'Gelunah: algo entre vocês ficou mais perto.', gelZero: 'Gelunah: a distância de sempre.',
    jogoVenceu: (t, s) => `O gelo obedeceu em ${t}, com ${s} pontos.`, jogoSeguiu: 'O primeiro Tacet chegou antes do gelo. Aheryn carrega a marca de bronze no braço.', venceu: 'Venceu', perdeu: 'Os Tacets chegaram primeiro', silencioR: 'Silêncio', desviou: 'Desviou', atingido: 'Foi atingido',
    passoT: 'Acompanhar Nuuk', passoSub: 'Não perca Nuuk de vista.', sumindo: 'Nuuk está sumindo nas curvas…', perdi: 'Perdi Nuuk de vista.', atras: 'Você ficou para trás.', junto: 'Você acompanhou Nuuk.', esq: 'Pé esquerdo', dir: 'Pé direito',
    pedraSub: 'Gromm levanta alguma coisa…', pedraOk: 'Desviou por pouco.', pedraHit: 'A pedra acertou.',
    golesT: 'Um pensamento a menos', golesSub: 'Toque um pensamento para afogá-lo com um gole.', parar: 'Parar de beber', sobrou: 'O que ficou aceso se juntou ao Título.', unico: 'Sobrou um único pensamento.', guardados: 'Pensamentos que Aheryn guardou', afogados: 'afogou tudo',
  },
  en: { cantar: '▶ Let Aheryn sing', parte: 'Part', prox: 'Next', fim: 'Close the chapter', voltar: '← Back', ouvir: 'Listen to Aheryn', cena: '▶ Watch the scene', oque: 'What does Aheryn do?', decida: 'Decide', decidir: 'Decide', escolheu: 'You chose:', resp: 'Answer', silencio: 'stay silent', momento: 'Moment of play',
    tutLuz: 'This is the Light, in the corner of the screen. Every choice lights Aheryn up or puts him out.',
    mg: { passo: 'Keep up with Nuuk', pedra: 'The rock', goles: 'One thought less', 'hino-do-gelo': 'The ice obeys', cabana: 'Check the house', despedida: 'What to take' },
    ex: { abrir: 'Open', fechar: 'Close', voltar: '← Back', levar: 'Take it', deixar: 'Leave it', recolocar: 'Put the board back', falta: 'Decide what to do with the diary before leaving.', diarioCab: 'Memories of the Old World', deslize: 'Swipe to see the whole cabin' },
    dica: { cabana: 'Touch each thing in the cabin before leaving.', despedida: 'Choose what goes in the pack.', passo: 'Tap Nuuk’s footprints as they appear, alternating feet. Stepping off the track makes you slip.', pedraT: 'When the arrow appears, tap the side to dodge toward. There is only one chance.', pedraK: 'When the arrow appears, press ← or → to dodge. There is only one chance.', goles: 'Each swallow drowns one thought. You choose which to drown and when to stop drinking. Whatever stays lit becomes Light.', jogo: (l) => `The Light you gathered (${l}) starts already lit in the ice, but it brings the Tacets faster.` },
    coverEye: 'The Four Wills · Book I · Chapter I', coverLede: 'Read. Decide for Aheryn. And when the ice asks, play.', coverGo: 'Enter the frozen world', coverCont: 'Continue where I left off', coverRestart: 'Start from the beginning', coverHint: 'Wear headphones. Move on with the button, the → key, or a swipe.',
    luzTitle: 'Aheryn’s Light: it rises when he feels, remembers and sings; it falls when he goes silent',
    confirm: 'Restart the chapter? Your choices will be erased.', capI: 'Chapter I', fimCap: 'End of Chapter I', ficou: 'What of you remained in the ice', luz: 'Light', suas: 'What you carried', pedraQ: 'The stone', diarioQ: 'The diary', levouPedra: 'Took the stone', deixouPedra: 'Left the stone where it was', nuncaPedra: 'Never found it', levouDiario: 'Took the diary', deixouDiario: 'Left the diary', reler: 'Read again and choose differently', mesmo: (p) => `${p}% of readers did the same`,
    fraseAlta: 'Aheryn let the light rise more than he should have. Someone, somewhere, may have seen it.', fraseBaixa: 'Aheryn barely lit at all. No one for a hundred leagues would know he had been there.', fraseMeio: 'Aheryn lit and dimmed in the measure of someone who has survived for a century.',
    augMais: 'The Aug: Nuuk will remember you with some respect.', augMenos: 'The Aug: Nuuk will remember you with suspicion.', augZero: 'The Aug: nothing changed between you.', augPulou: 'The Aug: Nuuk took you straight to the drink. Gromm went unseen.', gelMais: 'Gelunah: something between you drew closer.', gelZero: 'Gelunah: the usual distance.',
    jogoVenceu: (t, s) => `The ice obeyed in ${t}, with ${s} points.`, jogoSeguiu: 'The first Tacet reached him before the ice. Aheryn carries the bronze mark on his arm.', venceu: 'Won', perdeu: 'The Tacets arrived first', silencioR: 'Silence', desviou: 'Dodged', atingido: 'Was hit',
    passoT: 'Keep up with Nuuk', passoSub: 'Don’t lose sight of Nuuk.', sumindo: 'Nuuk is vanishing around the bends…', perdi: 'I lost sight of Nuuk.', atras: 'You fell behind.', junto: 'You kept up with Nuuk.', esq: 'Left foot', dir: 'Right foot',
    pedraSub: 'Gromm lifts something…', pedraOk: 'Dodged by a hair.', pedraHit: 'The rock hit.',
    golesT: 'One thought less', golesSub: 'Tap a thought to drown it with a swallow.', parar: 'Stop drinking', sobrou: 'Whatever stayed lit joined the Title.', unico: 'A single thought remained.', guardados: 'Thoughts Aheryn kept', afogados: 'drowned them all',
  },
};
const U = (k) => UI[LANG][k];


// ---------------------------------------------------------------- estado
const novoEstado = () => ({ i: 0, luz: L.luzInicial, aug: 0, gelunah: 0, perfil: {}, f: {}, escolhas: {}, rotulos: {}, dialogo: {}, feitos: {}, jogo: null, sessao: (crypto.randomUUID ? crypto.randomUUID() : String(Date.now()) + Math.random()) });
let st = novoEstado();
const salvar = () => { try { localStorage.setItem(SAVE_KEY, JSON.stringify(st)); } catch (e) {} };
const carregar = () => { try { const j = JSON.parse(localStorage.getItem(SAVE_KEY)); return j && j.sessao ? j : null; } catch (e) { return null; } };
const P = L.paginas;
const visivel = (p) => !p.se || p.se(st);
const vozUrl = (n) => 'assets/audio/voz/' + n + '.mp3';
const narrOf = (p) => (typeof p.narracao === 'function' ? p.narracao(st) : p.narracao);
const fala = (nome, depois) => { if (A.ctx && nome) A.narrate(vozUrl(nome), depois); };
const idxVis = (from, dir) => { let i = from + dir; while (i >= 0 && i < P.length && !visivel(P[i])) i += dir; return i; };

// ---------------------------------------------------------------- áudio (Web Audio: funciona igual no celular)
const AC = window.AudioContext || window.webkitAudioContext;
const A = {
  ctx: null, bufs: {}, zone: null, zoneSrc: null, zoneGain: null, music: null, steps: null, narr: null, on: true,
  init() {
    if (this.ctx) return; this.ctx = new AC();
    this.master = this.ctx.createGain(); this.master.connect(this.ctx.destination);
    this.bed = this.ctx.createGain(); this.bed.connect(this.master);         // ambiente + música (abaixa na narração)
    this.fx = this.ctx.createGain(); this.fx.gain.value = .8; this.fx.connect(this.master);
    const n = this.ctx.createBuffer(1, this.ctx.sampleRate, this.ctx.sampleRate), d = n.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1; this.noise = n;
  },
  resume() { this.ctx && this.ctx.state === 'suspended' && this.ctx.resume(); },
  async buf(url) {
    if (this.bufs[url]) return this.bufs[url];
    const p = fetch(url).then((r) => r.arrayBuffer()).then((ab) => new Promise((res, rej) => this.ctx.decodeAudioData(ab, res, rej))).catch(() => null);
    this.bufs[url] = p; return p;
  },
  async loop(url, vol, fade = 1.5) {
    const b = await this.buf(url); if (!b) return null;
    const s = this.ctx.createBufferSource(); s.buffer = b; s.loop = true;
    const g = this.ctx.createGain(); g.gain.value = 0; s.connect(g); g.connect(this.bed); s.start();
    g.gain.linearRampToValueAtTime(vol, this.ctx.currentTime + fade);
    return { s, g };
  },
  stop(h, fade = 1.5) { if (!h) return; const t = this.ctx.currentTime; h.g.gain.cancelScheduledValues(t); h.g.gain.setValueAtTime(h.g.gain.value, t); h.g.gain.linearRampToValueAtTime(0, t + fade); setTimeout(() => { try { h.s.stop(); } catch (e) {} }, fade * 1000 + 100); },
  async setZone(z) {
    if (!this.ctx || z === this.zone) return; this.zone = z;
    const old = this.zoneH; this.zoneH = null; this.stop(old, 2);
    const cfg = ZONES[z]; if (!cfg) return;
    const h = await this.loop(cfg.src, cfg.volume * .8, 2.2);
    if (this.zone === z) this.zoneH = h; else this.stop(h, .3);
  },
  async once(url, vol = .7) { const b = await this.buf(url); if (!b) return 0; const s = this.ctx.createBufferSource(); s.buffer = b; const g = this.ctx.createGain(); g.gain.value = vol; s.connect(g); g.connect(this.fx); s.start(); return b.duration; },
  async narrate(url, onEnd) {
    this.stopNarr(); const b = await this.buf(url); if (!b) return false;
    const s = this.ctx.createBufferSource(); s.buffer = b; s.connect(this.master); s.start();
    this.duck(true); this.narr = s; s.onended = () => { if (this.narr === s) { this.narr = null; this.duck(false); onEnd && onEnd(); } };
    return true;
  },
  stopNarr() { if (this.narr) { const s = this.narr; this.narr = null; try { s.stop(); } catch (e) {} this.duck(false); } },
  duck(on) { const t = this.ctx.currentTime; this.bed.gain.cancelScheduledValues(t); this.bed.gain.setTargetAtTime(on ? .25 : 1, t, .25); },
  async music(url) { if (this.musicH) return; this.musicH = await this.loop(url, .55, 2.5); if (this.zoneH) this.zoneH.g.gain.setTargetAtTime(.08, this.ctx.currentTime, .6); },
  musicOut() { if (!this.musicH) return; this.stop(this.musicH, 4); this.musicH = null; const c = ZONES[this.zone]; if (this.zoneH && c) this.zoneH.g.gain.setTargetAtTime(c.volume * .8, this.ctx.currentTime, 1.2); },
  async stepsOn() { if (this.stepsH) return; this.stepsH = await this.loop('assets/audio/tacet_passos.mp3', .35, 1.5); },
  stepsOff() { if (this.stepsH) { this.stop(this.stepsH, 1.5); this.stepsH = null; } },
  setOn(on) { this.on = on; if (this.master) this.master.gain.setTargetAtTime(on ? 1 : 0, this.ctx.currentTime, .1); },
  tone(f, d, type = 'sine', v = .08, when = 0, bend = 0) {
    if (!this.ctx) return; const t = this.ctx.currentTime + when, o = this.ctx.createOscillator(), g = this.ctx.createGain();
    o.type = type; o.frequency.setValueAtTime(f, t); if (bend) o.frequency.exponentialRampToValueAtTime(f * bend, t + d);
    g.gain.setValueAtTime(.0001, t); g.gain.exponentialRampToValueAtTime(v, t + .01); g.gain.exponentialRampToValueAtTime(.0001, t + d);
    o.connect(g); g.connect(this.fx); o.start(t); o.stop(t + d + .05);
  },
  hiss(d, f, q, v, when = 0, type = 'bandpass') {
    if (!this.ctx) return; const t = this.ctx.currentTime + when, s = this.ctx.createBufferSource(); s.buffer = this.noise;
    const fl = this.ctx.createBiquadFilter(); fl.type = type; fl.frequency.value = f; fl.Q.value = q; const g = this.ctx.createGain();
    g.gain.setValueAtTime(.0001, t); g.gain.exponentialRampToValueAtTime(v, t + d * .3); g.gain.exponentialRampToValueAtTime(.0001, t + d);
    s.connect(fl); fl.connect(g); g.connect(this.fx); s.start(t); s.stop(t + d + .05);
  },
  sfx(nome, vol = .6) { if (this.ctx) this.once('assets/audio/sfx/' + nome + '.mp3', vol); },
  carregaSfx() { ['pagina', 'gole', 'apaga', 'passo1', 'passo2', 'passo3', 'escorrega', 'pedra', 'visao', 'luz'].forEach((n) => this.buf('assets/audio/sfx/' + n + '.mp3')); },
  virar() { this.sfx('pagina', .35); },
  escolha() { this.tone(660, .5, 'sine', .05); this.tone(990, .6, 'sine', .035, .06); },
  luzSobe() { this.sfx('luz', .5); },
  luzDesce() { this.tone(330, .7, 'sine', .05, 0, .6); },
  aviso() { this.tone(523, .9, 'triangle', .03); this.tone(784, 1.1, 'sine', .025, .1); },
  gole() { this.sfx('gole', .8); },
  apaga() { this.sfx('apaga', .6); },
  passo() { this.sfx('passo' + (1 + Math.floor(Math.random() * 3)), .7); },
  escorrega() { this.sfx('escorrega', .7); },
  impacto() { this.hiss(.9, 180, .5, .6, 0, 'lowpass'); this.tone(60, .9, 'sine', .35, 0, .5); },
  zunido() { this.hiss(1.1, 500, .8, .25, 0); },
};

// ---------------------------------------------------------------- fundos
const bgWrap = $('#bg');
let bgKey = '';
const resolveFundo = (p) => (st.fundoPag && st.fundoPag[p.id]) || (typeof p.fundo === 'function' ? p.fundo(st) : p.fundo);
function setFundo(f) {
  if (!f) return; const key = JSON.stringify(f); if (key === bgKey) return; bgKey = key;
  const layer = document.createElement('div');
  layer.className = 'bgl kb-' + (f.kb || 'in') + (f.tint ? ' tint-' + f.tint : '') + (f.retrato ? ' retrato' : '') + (f.desloca ? ' desloca' : '') + (f.apagada ? ' apagada' : '');
  layer.style.setProperty('--dim', f.dim != null ? f.dim : .5);
  layer.style.setProperty('--foco', f.foco || '50% 40%');
  if (f.desloca) layer.style.setProperty('--dx', (f.desloca * 100) + '%');
  const src = f.img;
  if (f.retrato || f.desloca) { const b = document.createElement('div'); b.className = 'blur'; b.style.backgroundImage = `url("${src}")`; layer.appendChild(b); }
  if (f.video || f.clip) {
    const v = document.createElement('video'); v.src = vsrc(f.video || f.clip); v.muted = true; v.loop = true; v.playsInline = true; v.setAttribute('playsinline', ''); v.autoplay = true;
    v.style.objectPosition = f.foco || '50% 40%'; v.className = 'img';
    if (f.img) v.poster = f.img; layer.appendChild(v); v.play().catch(() => {});
  } else { const im = document.createElement('div'); im.className = 'img'; im.style.backgroundImage = `url("${src}")`; layer.appendChild(im); }
  bgWrap.appendChild(layer);
  document.body.classList.toggle('lado-dir', f.lado === 'dir');
  Clima.set(f.clima || null);
  requestAnimationFrame(() => requestAnimationFrame(() => layer.classList.add('on')));
  const olds = [...bgWrap.children].filter((c) => c !== layer);
  setTimeout(() => olds.forEach((o) => o.remove()), 1600);
}

// ---------------------------------------------------------------- clima: neve lá fora, cristais nas cavernas, brasas na cabana
const Clima = (() => {
  const cv = $('#fx'), cx = cv.getContext('2d'); let modo = null, alvo = 0, dens = 0, parts = [], W = 0, H = 0, t0 = performance.now();
  const PERFIS = {
    neve: { n: 220, cor: '235,242,248', vy: [30, 90], vx: [-10, 25], r: [.8, 2.8], a: [.35, .9], wob: 18 },
    'neve-leve': { n: 90, cor: '235,242,248', vy: [18, 50], vx: [-6, 14], r: [.6, 2], a: [.25, .7], wob: 12 },
    cristais: { n: 70, cor: '170,230,235', vy: [-6, 10], vx: [-8, 8], r: [.5, 1.6], a: [.2, .8], wob: 6, pisca: true },
    brasas: { n: 45, cor: '255,190,110', vy: [-22, -6], vx: [-6, 6], r: [.6, 1.8], a: [.25, .8], wob: 10, pisca: true },
  };
  const rs = () => { const d = Math.min(devicePixelRatio || 1, 2); W = cv.width = innerWidth * d; H = cv.height = innerHeight * d; cx.setTransform(d, 0, 0, d, 0, 0); };
  addEventListener('resize', rs); rs();
  const rnd = (a) => a[0] + Math.random() * (a[1] - a[0]);
  const novo = (pf, topo) => ({ x: Math.random() * innerWidth, y: topo ? -10 : Math.random() * innerHeight, vx: rnd(pf.vx), vy: rnd(pf.vy), r: rnd(pf.r), a: rnd(pf.a), ph: Math.random() * 6.28 });
  let last = performance.now();
  const loop = (now) => {
    const dt = Math.max(0, Math.min((now - last) / 1000, .05)); last = now;
    dens = Math.max(0, dens + (alvo - dens) * Math.min(1, dt * 1.5));
    cx.clearRect(0, 0, innerWidth, innerHeight);
    const pf = PERFIS[modo];
    if (pf) {
      const n = Math.max(0, Math.round(pf.n * dens * (innerWidth < 700 ? .55 : 1)) || 0);
      while (parts.length < n) parts.push(novo(pf, false));
      if (parts.length > n) parts.length = n;
      const tt = (now - t0) / 1000;
      for (const q of parts) {
        q.x += (q.vx + Math.sin(tt * .8 + q.ph) * pf.wob * .3) * dt; q.y += q.vy * dt;
        if (q.y > innerHeight + 10 || q.y < -12 || q.x < -20 || q.x > innerWidth + 20) Object.assign(q, novo(pf, q.vy > 0), q.vy < 0 ? { y: innerHeight + 8 } : {});
        const al = q.a * (pf.pisca ? .55 + .45 * Math.sin(tt * 3 + q.ph * 3) : 1) * dens;
        cx.beginPath(); cx.fillStyle = `rgba(${pf.cor},${al.toFixed(3)})`; cx.arc(q.x, q.y, q.r, 0, 6.283); cx.fill();
      }
    }
    requestAnimationFrame(loop);
  };
  requestAnimationFrame(loop);
  return { set(m) { if (m === modo) return; if (matchMedia('(prefers-reduced-motion: reduce)').matches) m = null; modo = m; parts = []; dens = 0; alvo = m ? 1 : 0; } };
})();

// ---------------------------------------------------------------- codex (palavras douradas)
function aliasesAtuais() {
  const out = [];
  for (const [id, c] of Object.entries(CODEX)) {
    const al = LANG === 'en' ? (c.aliasesEn || [c.en && c.en.title]) : (c.aliasesPt || [c.pt && c.pt.title]);
    for (const a of al.filter(Boolean)) out.push([a, id]);
  }
  return out.sort((a, b) => b[0].length - a[0].length);
}
const esc = (t) => String(t).replace(/[&<>"]/g, (m) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[m]));
function linkify(text) {
  let html = esc(text); const used = new Set();
  for (const [a, id] of aliasesAtuais()) {
    if (used.has(id)) continue;
    const re = new RegExp(`(^|[^\\p{L}])(${a.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})(?![\\p{L}])`, 'u');
    if (re.test(html)) { html = html.replace(re, `$1<button class="gloss" data-codex="${id}">$2</button>`); used.add(id); }
  }
  return html;
}
function abrirCodex(id) {
  const c = CODEX[id]; if (!c) return; const t = c[LANG] || c.pt || c.en; let pg = 0;
  const m = $('#codex'); $('#cxImg').style.backgroundImage = `url("${c.image}")`; $('#cxEye').textContent = t.eyebrow || ''; $('#cxTitle').textContent = t.title;
  const cxp = (p) => esc(p).replace(/&lt;span class=&quot;gloss&quot; data-codex=&quot;([a-z0-9-]+)&quot;&gt;(.*?)&lt;\/span&gt;/g, '<button class="gloss" data-codex="$1">$2</button>').replace(/&lt;\/?(em|i|strong|b)&gt;/g, '');
  const draw = () => { $('#cxText').innerHTML = t.pages[pg].map((p) => `<p>${cxp(p)}</p>`).join(''); $('#cxPg').textContent = `${pg + 1} / ${t.pages.length}`; $('#cxPrev').disabled = pg === 0; $('#cxNext').disabled = pg === t.pages.length - 1; };
  $('#cxPrev').onclick = () => { pg--; draw(); }; $('#cxNext').onclick = () => { pg++; draw(); };
  draw(); m.classList.add('show'); A.tone(880, .5, 'sine', .03);
}
document.addEventListener('click', (e) => { const g = e.target.closest('.gloss'); if (g) { e.preventDefault(); abrirCodex(g.dataset.codex); } });
$('#cxClose').onclick = () => $('#codex').classList.remove('show');

// ---------------------------------------------------------------- Luz
let luzShown = st.luz;
function mudaLuz(d) {
  if (!d) return; st.luz = clamp(st.luz + d, 0, 100);
  const f = document.createElement('span'); f.className = 'luzdelta ' + (d > 0 ? 'up' : 'down'); f.textContent = (d > 0 ? '+' : '') + d;
  $('#luz').appendChild(f); setTimeout(() => f.remove(), 1600);
  d > 0 ? A.luzSobe() : A.luzDesce();
}
function drawLuz() {
  luzShown += (st.luz - luzShown) * .08;
  document.documentElement.style.setProperty('--luz', (luzShown / 100).toFixed(3));
  $('#luzV').textContent = Math.round(luzShown);
  const cl = document.body.classList;
  cl.toggle('luz-alta', luzShown >= 60); cl.toggle('luz-baixa', luzShown <= 25);
  requestAnimationFrame(drawLuz);
}
function toast(t) { const el = document.createElement('div'); el.className = 'toast'; el.textContent = t; $('#toasts').appendChild(el); A.aviso(); setTimeout(() => el.classList.add('out'), 3600); setTimeout(() => el.remove(), 4400); }

// ---------------------------------------------------------------- estatísticas (Supabase)
function registrar(escolha, opcao) {
  fetch(`${SUPA.url}/rest/v1/livro_escolhas?on_conflict=sessao,capitulo,escolha`, {
    method: 'POST', headers: { apikey: SUPA.key, 'Content-Type': 'application/json', Prefer: 'resolution=ignore-duplicates,return=minimal' },
    body: JSON.stringify({ capitulo: L.id, escolha, opcao, sessao: st.sessao }),
  }).catch(() => {});
}
async function estatisticas() {
  try {
    const r = await fetch(`${SUPA.url}/rest/v1/rpc/livro_estatisticas`, { method: 'POST', headers: { apikey: SUPA.key, 'Content-Type': 'application/json' }, body: JSON.stringify({ p_capitulo: L.id }) });
    return r.ok ? r.json() : [];
  } catch (e) { return []; }
}

// ---------------------------------------------------------------- render de página
const txt = $('#ptext'), box = $('#choices'), btnNext = $('#next'), btnPrev = $('#prev'), panel = $('#page');
const paras = (list) => (list || []).map((p) => (typeof p === 'string' ? p : (p.se(st) ? p.t : null))).filter(Boolean).map(tr);
function pHTML(p, extra = '') { const dlg = p.startsWith('—'); return `<p class="${dlg ? 'dlg' : ''} ${extra}">${linkify(p)}</p>`; }
let timers = [];
const clearTimers = () => { timers.forEach(clearTimeout); timers = []; };
const rotulo = (o) => (o.silencio ? U('silencioR') : tr(o.txt));

function render(dir = 1) {
  clearTimers(); A.stopNarr(); A.stopVozes && A.stopVozes();
  const p = P[st.i]; if (!p) return;
  setFundo(resolveFundo(p));
  if (A.ctx) {
    A.setZone(p.zona);
    if (p.som && dir > 0) A.once(p.som, .55);
    if (p.musicaSai) A.musicOut();
    if (p.passos) A.stepsOn(); else A.stepsOff();
  }
  document.body.dataset.zona = p.zona;
  { let k = st.i; while (k > 0 && !P[k].parte) k--; $('#parte').textContent = U('parte') + ' ' + (P[k].parte || 'I'); }
  const vis = P.filter(visivel), n = vis.indexOf(p) + 1; $('#pnum').textContent = `${n}`;
  $('#prog').style.setProperty('--p', (n / vis.length).toFixed(3));
  panel.classList.remove('in'); void panel.offsetWidth; panel.classList.add('in');
  panel.classList.toggle('cartao', !!p.cartao);
  if (p.cartao) {
    const c = p.cartao;
    txt.innerHTML = `<div class="ct"><p class="ct-num">${U('parte')} ${c.num}</p><h2 class="ct-nome">${esc(tr(c.nome))}</h2><span class="ct-orn">✦</span>
      <blockquote class="ct-epi"><p>${esc(tr(c.epigrafe))}</p><cite>${esc(tr(c.fonte))}</cite></blockquote></div>`;
  } else txt.innerHTML = paras(p.texto).map((t, k) => pHTML(t, k === 0 && p.capitular ? 'cap' : '')).join('');
  box.innerHTML = ''; box.classList.remove('urgente');
  [...txt.children].forEach((el, k) => { el.style.animationDelay = (k * .35) + 's'; });
  const extras = $('#extras'); extras.innerHTML = '';
  // a gravação antiga (5 páginas) só existe em inglês; mostra pra todo mundo, só avisando quando é noutra língua da leitura
  const narracaoOk = !!narrOf(p);
  const narrTag = p.narracaoLang && p.narracaoLang !== LANG ? ` (${p.narracaoLang.toUpperCase()})` : '';
  if (narracaoOk) extras.insertAdjacentHTML('beforeend', `<button class="chip" id="narr"><i class="eq"></i>${U('ouvir')}${narrTag}</button>`);
  if (p.cena) extras.insertAdjacentHTML('beforeend', `<button class="chip" id="cena">${U('cena')}</button>`);
  if (narracaoOk) {
    ligaNarr(p);
    if (A.ctx && A.on && dir >= 0) timers.push(setTimeout(() => { const b = $('#narr'); if (b && P[st.i] === p && !A.narr) b.click(); }, 700));
  }
  if (p.cena) $('#cena').onclick = () => verCena(p.cena);
  if (p.tutorialLuz && !st.feitos.tutLuz) { st.feitos.tutLuz = 1; timers.push(setTimeout(() => toast(U('tutLuz')), 2200)); }
  if (p.efeito && !st.feitos['ef:' + p.id]) { st.feitos['ef:' + p.id] = 1; if (p.efeito.flag) st.f[p.efeito.flag] = true; if (p.efeito.luz) timers.push(setTimeout(() => mudaLuz(p.efeito.luz), 1200)); }
  if (p.olhoSe && p.olhoSe(st) && !st.feitos.olho && dir > 0) timers.push(setTimeout(() => { if (P[st.i] === p) { st.feitos.olho = 1; salvar(); CINEMA.olho(); } }, 2800));
  if (p.passosGigante && A.ctx) { let k = 0; const passo = () => { A.passo(); k++; timers.push(setTimeout(passo, 950)); }; timers.push(setTimeout(passo, 600)); }
  // contagem: parte do texto espera os passos soarem antes de aparecer
  let contando = false;
  if (p.contagem && !st.feitos['ct:' + p.id]) {
    contando = true;
    const ps = [...txt.children]; ps.slice(p.contagem.mostra).forEach((el) => { el.style.display = 'none'; });
    for (let k = 0; k < p.contagem.passos; k++) timers.push(setTimeout(() => A.passo(), 1400 + k * 950));
    timers.push(setTimeout(() => {
      st.feitos['ct:' + p.id] = 1; salvar();
      ps.slice(p.contagem.mostra).forEach((el, k) => { el.style.display = ''; el.classList.add('novo'); el.style.animationDelay = (k * .4) + 's'; });
      setNext(true);
    }, 1400 + p.contagem.passos * 950 + 500));
  }
  // quieto: nenhum botão; se o leitor esperar, surge um "…" que ele pode ou não tocar
  if (p.quieto) {
    const q = p.quieto, ja = st.escolhas[q.id];
    const fala = () => {
      txt.insertAdjacentHTML('beforeend', `<p class="dlg eu novo">— ${esc(tr(q.fala))}</p>`);
      timers.push(setTimeout(() => { txt.insertAdjacentHTML('beforeend', `<p class="dlg ele novo">— ${esc(tr(q.resposta))}</p>`); A.tone(110, .5, 'sawtooth', .05, 0, .8); }, 900));
      timers.push(setTimeout(() => appendParas(q.depois), 1800));
    };
    if (ja === 'fala') { txt.insertAdjacentHTML('beforeend', `<p class="dlg eu">— ${esc(tr(q.fala))}</p><p class="dlg ele">— ${esc(tr(q.resposta))}</p>`); appendParas(q.depois); }
    else if (!ja) timers.push(setTimeout(() => {
      if (P[st.i] !== p || st.escolhas[q.id]) return;
      txt.insertAdjacentHTML('beforeend', '<button class="quieto" aria-label="…">…</button>');
      txt.querySelector('.quieto').onclick = (e) => {
        e.currentTarget.remove(); st.escolhas[q.id] = 'fala'; aplicar({ eixo: q.eixo }); registrar(q.id, 'fala'); salvar(); fala();
      };
    }, q.espera * 1000));
  }
  let livre = !contando;
  const cantaAqui = p.letra && (!p.letraSe || p.letraSe(st));
  if (cantaAqui) {
    if (p.cantarSob === 'next' && !p._cantado) { /* espera o clique de Próxima; ver irProxima() */ }
    else { livre = false; setNext(false); hino(p); }
  }
  if (p.escolha) livre = renderEscolha(p);
  if (p.dialogo) livre = renderDialogo(p);
  if (p.minijogo) livre = renderMinijogo(p);
  setNext(livre);
  btnPrev.disabled = idxVis(st.i, -1) < 0; btnPrev.textContent = U('voltar');
  btnNext.textContent = p.fim ? U('fim') : U('prox');
  st.feitos[p.id] = st.feitos[p.id] || 1; salvar();
  panel.scrollTop = 0;
}
function ligaNarr(p) {
  const b = $('#narr'); if (!b) return;
  b.onclick = () => {
    if (A.narr) { A.stopNarr(); b.classList.remove('on'); return; }
    b.classList.add('on');
    A.narrate(p._narr || narrOf(p), () => {
      if (p.narracaoDepois) A.narrate(p.narracaoDepois, () => b.classList.remove('on')); else b.classList.remove('on');
    });
  };
}
function setNext(on) { btnNext.disabled = !on; btnNext.classList.toggle('pulse', on); }
function appendParas(list, cls = '') { paras(list).forEach((t, k) => { txt.insertAdjacentHTML('beforeend', pHTML(t, 'novo ' + cls)); txt.lastElementChild.style.animationDelay = (k * .35) + 's'; }); }
const optHTML = (o, k) => `<button class="opt ${o.silencio ? 'sil' : ''}" data-id="${o.id}"><span class="k">${k + 1}</span>${o.silencio ? `<em>${U('silencio')}</em>` : esc(tr(o.txt))}</button>`;

// ----- escolhas (sem relógio: o leitor decide no tempo dele)
function renderEscolha(p) {
  const e = p.escolha, feita = st.escolhas[e.id];
  if (feita) { const o = e.opcoes.find((x) => x.id === feita); if (o) box.innerHTML = `<p class="feita">${U('escolheu')} ${esc(rotulo(o))}</p>`; appendParas(o && o.resultado); return true; }
  // algumas escolhas ficam escondidas atrás de um botão "Decidir": só a partir do clique
  // é que o relógio (e a tensão sonora) começam — assim ninguém perde tempo de leitura pra isso
  if (e.revelar && !p._revelado) {
    box.innerHTML = `<button class="opt decidir" id="revBtn">${U('decidir')}</button>`;
    box.classList.remove('urgente');
    $('#revBtn').onclick = () => { p._revelado = true; abreEscolha(p); };
    return false;
  }
  abreEscolha(p);
  return false;
}
function abreEscolha(p) {
  const e = p.escolha;
  box.innerHTML = `<p class="eyebrow">${e.urgente ? U('decida') : (e.pergunta ? esc(tr(e.pergunta)) : U('oque'))}</p>` + e.opcoes.map(optHTML).join('') + (e.janela ? '<div class="tenso"></div>' : '');
  box.classList.toggle('urgente', !!e.urgente);
  box.querySelectorAll('.opt').forEach((b) => b.onclick = () => escolher(p, b.dataset.id));
  if (e.janela) {
    if (e.som) A.sfx(e.som, .85);
    box.classList.add('sobPressao');
    timers.push(setTimeout(() => { if (!st.escolhas[e.id]) escolher(p, e.padrao); }, e.janela * 1000));
  }
}
function aplicar(o) {
  if (o.eixo) { st.perfil = st.perfil || {}; st.perfil[o.eixo] = (st.perfil[o.eixo] || 0) + 1; }
  if (o.luz) mudaLuz(o.luz);
  if (o.aug) st.aug += o.aug; if (o.gelunah) st.gelunah += o.gelunah; if (o.flag) st.f[o.flag] = true;
  if (o.aviso) timers.push(setTimeout(() => toast(tr(o.aviso)), 500));
}
function escolher(p, id) {
  const e = p.escolha; if (st.escolhas[e.id]) return;
  const o = e.opcoes.find((x) => x.id === id); st.escolhas[e.id] = id;
  if (o.fundo) { (st.fundoPag = st.fundoPag || {})[p.id] = o.fundo; setFundo(o.fundo); }
  box.querySelectorAll('.opt').forEach((b) => { b.disabled = true; b.classList.toggle('sel', b.dataset.id === id); });
  if (o.som) A.sfx(o.som, .7);
  const segue = () => { aplicar(o); A.escolha(); registrar(e.id, id); salvar(); setTimeout(() => { appendParas(o.resultado); setNext(true); }, 450);
    if (o.voz) timers.push(setTimeout(() => fala(typeof o.voz === 'function' ? o.voz(st) : o.voz), o.vozAtraso || 1500)); };
  if (e.cinema && CINEMA[e.cinema]) CINEMA[e.cinema](id).then(segue); else segue();
}

// ----- diálogo (rodadas, sem relógio)
function renderDialogo(p) {
  const d = p.dialogo, feito = st.dialogo[p.id] || [];
  const acabou = () => (st.dialogo[p.id] || []).some(([rid, oid]) => { const rr = d.rodadas.find((x) => x.id === rid); const oo = rr && rr.opcoes.find((x) => x.id === oid); return (oo && oo.fim) || (st.dialogo[p.id] || []).length >= d.rodadas.length; });
  const log = document.createElement('div'); log.className = 'dlog'; txt.appendChild(log);
  const linha = (quem, t) => { log.insertAdjacentHTML('beforeend', `<p class="dlg ${quem}">— ${esc(t)}</p>`); };
  feito.forEach(([rid, oid]) => { const r = d.rodadas.find((x) => x.id === rid), o = r.opcoes.find((x) => x.id === oid); o.silencio ? log.insertAdjacentHTML('beforeend', '<p class="dlg sil">…</p>') : linha('eu', tr(o.txt)); linha('ele', tr(o.resposta || r.resposta)); });
  const next = () => {
    const k = (st.dialogo[p.id] || []).length;
    if (acabou()) { box.innerHTML = ''; appendParas(p.depois); setNext(true); return; }
    const r = d.rodadas[k];
    box.innerHTML = `<p class="eyebrow">${r.pergunta ? esc(tr(r.pergunta)) : U('resp') + ' ' + d.interlocutor}</p>` + r.opcoes.map(optHTML).join('');
    box.querySelectorAll('.opt').forEach((b) => b.onclick = () => {
      const o = r.opcoes.find((x) => x.id === b.dataset.id);
      (st.dialogo[p.id] = st.dialogo[p.id] || []).push([r.id, o.id]); st.escolhas[r.id] = o.id;
      aplicar(o); registrar(r.id, o.id); salvar(); A.escolha(); box.innerHTML = '';
      o.silencio ? log.insertAdjacentHTML('beforeend', '<p class="dlg sil novo">…</p>') : linha('eu', tr(o.txt));
      timers.push(setTimeout(() => { A.tone(110, .5, 'sawtooth', .05, 0, .8); linha('ele', tr(o.resposta || r.resposta)); log.lastElementChild.classList.add('novo'); }, 900));
      timers.push(setTimeout(next, 2000));
    });
  };
  next();
  return acabou();
}

// ----- o hino: a voz do Aheryn verso a verso (se os arquivos existirem); senão, a trilha
async function hino(p) {
  const el = document.createElement('div'); el.className = 'letra'; txt.appendChild(el);
  const liberar = () => { if (P[st.i] === p) setNext(true); };
  const verso = (k) => { const [l, g] = p.letra[k]; el.insertAdjacentHTML('beforeend', `<p><span>${esc(l)}</span><em>${esc(tr(g))}</em></p>`); };
  let tocou = false;
  if (A.ctx && p.louvor) {
    const b = await A.buf(p.louvor.src);
    if (b && P[st.i] === p) {
      tocou = true; A.duck(true); const ini = 1.2;
      const s0 = A.ctx.createBufferSource(); s0.buffer = b; s0.connect(A.master); s0.start(A.ctx.currentTime + ini); A.vozes = [s0];
      p.louvor.marcas.forEach((m, k) => timers.push(setTimeout(() => verso(k), (ini + m) * 1000)));
      timers.push(setTimeout(() => A.duck(false), (ini + b.duration + .5) * 1000));
      timers.push(setTimeout(liberar, (ini + b.duration + .5) * 1000));
    }
  }
  if (!tocou && A.ctx && p.vozes) {
    const bufs = await Promise.all(p.vozes.map((u) => A.buf(u)));
    if (bufs.every(Boolean) && P[st.i] === p) {
      tocou = true; A.duck(true); let t = 0;
      A.vozes = [];
      bufs.forEach((b, k) => {
        timers.push(setTimeout(() => verso(k), (1.2 + t) * 1000));
        const s = A.ctx.createBufferSource(); s.buffer = b; s.connect(A.master); s.start(A.ctx.currentTime + 1.2 + t); A.vozes.push(s);
        t += b.duration + 0.9;
      });
      timers.push(setTimeout(() => A.duck(false), (1.2 + t) * 1000));
      timers.push(setTimeout(liberar, (1.2 + t) * 1000));
    }
  }
  if (!tocou) {
    if (A.ctx && p.musica) A.music(p.musica);
    p.letra.forEach((_, k) => timers.push(setTimeout(() => verso(k), 2500 + k * 6500)));
    timers.push(setTimeout(liberar, 2500 + p.letra.length * 6500));
  }
}
A.stopVozes = () => { (A.vozes || []).forEach((s) => { try { s.stop(); } catch (e) {} }); A.vozes = []; };

// ----- vídeo em tela cheia
function verCena(src) {
  const m = $('#cenaModal'), v = $('#cenaV'); v.src = vsrc(src); m.classList.add('show'); A.duck(true); v.play().catch(() => {});
  const close = () => { v.pause(); m.classList.remove('show'); A.duck(false); };
  $('#cenaClose').onclick = close; v.onended = close;
}

// ---------------------------------------------------------------- cinemáticas curtas depois de uma escolha
const CINEMA = {
  olho() {
    return new Promise((resolve) => {
      const o = abreOverlay('olho');
      o.innerHTML = `<video src="${vsrc('assets/clip/olho-gelunah.mp4')}" poster="assets/images/olho-gelunah.jpg" muted playsinline autoplay></video>`;
      const v = o.querySelector('video'); v.play().catch(() => {}); A.sfx('pedra-brilha', .5);
      requestAnimationFrame(() => o.classList.add('on'));
      let fechado = false;
      const fim = () => {
        if (fechado) return; fechado = true; A.stopNarr(); o.classList.remove('on');
        setTimeout(() => { if (o.classList.contains('olho')) fechaOverlay(); resolve(); }, 900);
      };
      o.onclick = fim;
      setTimeout(() => {
        if (fechado) return;
        if (!A.ctx || !A.on) return setTimeout(fim, 6000);
        A.narrate(vozUrl('olho-gelunah'), () => setTimeout(fim, 1000)).then((ok) => { if (!ok) setTimeout(fim, 6000); });
      }, 900);
      setTimeout(fim, 16000);
    });
  },
  pedra(modo) {
    return new Promise((resolve) => {
      const o = abreOverlay('pedra cine');
      o.innerHTML = `<div class="cam"><video class="pv" src="${vsrc('assets/clip/pedra.mp4')}" playsinline preload="auto"></video></div><div class="brilho"></div>`;
      const v = o.querySelector('.pv'), cam = o.querySelector('.cam'); v.muted = !A.on;
      const t0 = performance.now(), vt = () => (v.currentTime > .05 ? v.currentTime : (performance.now() - t0) / 1000);
      v.play().catch(() => {});
      const fim = (ms) => setTimeout(() => { v.pause(); o.classList.add('sai'); setTimeout(() => { fechaOverlay(); resolve(); }, 500); }, ms);
      const chk = setInterval(() => {
        const t = vt();
        if (modo === 'desviar' && t >= 2.55) { clearInterval(chk); cam.classList.add(Math.random() < .5 ? 'goL' : 'goR'); A.zunido(); fim(1500); }
        if (modo === 'ficar' && t >= 3.25) { clearInterval(chk); o.classList.add('hit'); A.impacto(); fim(1300); }
        if (modo === 'magia' && t >= 2.45) { clearInterval(chk); v.pause(); o.classList.add('para'); A.luzSobe(); A.sfx('visao', .4); fim(2200); }
      }, 20);
    });
  },
};

// ---------------------------------------------------------------- minijogos
function renderMinijogo(p) {
  const done = st.feitos['mg:' + p.id];
  if (p.minijogo === 'goles') txt.innerHTML = golesTexto(done ? 99 : 0).map((t) => pHTML(t)).join('');
  if (done) { appendParas(p.depois); if (p.minijogo === 'goles' && st.guardados) mostraGuardados(); return true; }
  const dicas = { cabana: U('dica').cabana, despedida: U('dica').despedida, passo: U('dica').passo, pedra: IS_TOUCH ? U('dica').pedraT : U('dica').pedraK, goles: U('dica').goles, 'hino-do-gelo': U('dica').jogo(Math.round(st.luz)) };
  box.innerHTML = `<p class="eyebrow">${U('momento')}</p><button class="opt jogar" id="mgGo"><span class="k">▶</span>${U('mg')[p.minijogo]}</button><p class="dica">${dicas[p.minijogo]}</p>`;
  $('#mgGo').onclick = () => { box.innerHTML = ''; MG[p.minijogo](p).then((res) => { st.feitos['mg:' + p.id] = 1; salvar(); if (res !== 'nav') { if (p.minijogo === 'goles') { txt.innerHTML = golesTexto(99).map((t) => pHTML(t)).join(''); mostraGuardados(); } appendParas(p.depois); setNext(true); } }); };
  return false;
}
function mostraGuardados() {
  const g = st.guardados || [];
  txt.insertAdjacentHTML('beforeend', `<p class="guardados"><span>${U('guardados')}:</span> ${g.length ? g.map((t) => esc(tr(t))).join(' · ') : U('afogados')}</p>`);
}
const overlay = $('#mg');
function abreOverlay(cls) { overlay.className = 'show ' + cls; overlay.innerHTML = ''; document.body.classList.add('mg-on'); return overlay; }
function fechaOverlay() { overlay.className = ''; overlay.innerHTML = ''; document.body.classList.remove('mg-on'); }

// ---------------------------------------------------------------- explorar: a cabana em point-and-click
function explorar(p, modo) {
  return new Promise((resolve) => {
    const ex = p.explorar, o = abreOverlay('explorar ' + modo);
    st.explorar = st.explorar || {};
    const reg = st.explorar[p.id] = st.explorar[p.id] || { vistos: [] };
    const oculto = (pt) => (typeof pt.oculto === 'function' ? pt.oculto(st) : !!pt.oculto);
    const obrig = ex.pontos.filter((pt) => !pt.opcional);
    if (A.ctx) { ex.pontos.forEach((pt) => pt.voz && A.buf(vozUrl(pt.voz))); if (modo === 'cabana') L.diario.entradas.forEach((e) => e.voz && A.buf(vozUrl(e.voz))); else ['diario-levar', 'diario-deixar'].concat(L.pedra.razoes.map((r) => r.voz)).forEach((n) => A.buf(vozUrl(n))); }
    o.innerHTML = `<div class="ex-rolo"><div class="ex-caixa" style="--r:${ex.proporcao};background-image:url('${ex.img}')"></div></div>
      <p class="ex-instr"></p>
      <div class="ex-texto"><div class="ex-corpo"></div><div class="ex-acoes"></div></div>`;
    const caixa = o.querySelector('.ex-caixa'), corpo = o.querySelector('.ex-corpo'), acoes = o.querySelector('.ex-acoes'), instr = o.querySelector('.ex-instr'), rolo = o.querySelector('.ex-rolo');
    let ocupado = false;
    const mostra = (lista) => { corpo.innerHTML = paras(lista).map((t) => `<p>${linkify(t)}</p>`).join(''); corpo.scrollTop = 0; corpo.classList.remove('novo'); void corpo.offsetWidth; corpo.classList.add('novo'); };
    const marca = (pt, b) => { if (!reg.vistos.includes(pt.id)) reg.vistos.push(pt.id); b.classList.add('visto'); salvar(); atualiza(); };
    const porta = () => {
      if (acoes.querySelector('.porta')) return;
      acoes.innerHTML = (modo === 'cabana' && ex.fecho ? `<p class="ex-fecho">${esc(tr(ex.fecho))}</p>` : '') + `<button class="cta porta">${esc(tr(ex.porta))}</button>`;
      acoes.querySelector('.porta').onclick = () => {
        if (modo === 'despedida' && !st.escolhas.diario) { mostra([U('ex').falta]); return; }
        if (modo === 'despedida') { A.sfx('mochila', .7); setTimeout(() => A.sfx('porta-frio', .6), 700); } else A.sfx('porta-frio', .7);
        st.feitos['mg:' + p.id] = 1; salvar(); fechaOverlay(); resolve('nav'); irProxima();
      };
    };
    const atualiza = () => {
      if (modo === 'cabana') {
        const n = obrig.filter((pt) => reg.vistos.includes(pt.id)).length;
        instr.textContent = `${tr(ex.instrucao)} · ${n}/${obrig.length}`;
        if (n >= obrig.length && !ocupado && !acoes.querySelector('.porta')) porta();
      } else { instr.textContent = ''; porta(); }
    };
    const modal = (html, cls) => {
      const m = document.createElement('div'); m.className = 'ex-modal ' + cls; m.innerHTML = html; o.appendChild(m); ocupado = true;
      requestAnimationFrame(() => m.classList.add('on')); return m;
    };
    const fechaModal = (m) => { m.classList.remove('on'); setTimeout(() => m.remove(), 380); ocupado = false; atualiza(); };
    const botoes = (lista) => `<div class="dz-acoes">${lista.map(([cls, t]) => `<button class="${cls}">${esc(t)}</button>`).join('')}</div>`;

    // ---- o diário, de manhã: capa, abrir, entradas
    const diario = (pt, b) => {
      const D = L.diario; A.sfx('diario-abre', .6);
      const m = modal(`<div class="dz" style="background-image:url('assets/images/diario-fechado.jpg')"></div><div class="dz-texto"></div>`, 'diario');
      const tx = m.querySelector('.dz-texto'), img = m.querySelector('.dz');
      const fechar = () => { A.stopNarr(); A.sfx('diario-fecha', .6); fechaModal(m); };
      const capa = () => {
        tx.innerHTML = `<h3>${esc(U('ex').diarioCab)}</h3><p>${esc(tr(D.capa))}</p>` + botoes([['cta dz-abrir', U('ex').abrir], ['ghost dz-fechar', U('ex').fechar]]);
        tx.querySelector('.dz-abrir').onclick = () => { A.sfx('diario-pagina', .6); img.style.backgroundImage = "url('assets/images/diario-aberto.jpg')"; marca(pt, b); lista(); };
        tx.querySelector('.dz-fechar').onclick = fechar;
      };
      const lista = () => {
        A.stopNarr();
        tx.innerHTML = `<h3>${esc(U('ex').diarioCab)}</h3><ol class="dz-lista">${D.entradas.map((e, i) => `<li><button data-i="${i}">${esc(tr(e.titulo))}</button></li>`).join('')}</ol>` + botoes([['ghost dz-fechar', U('ex').fechar]]);
        tx.querySelectorAll('.dz-lista button').forEach((bt) => bt.onclick = () => entrada(D.entradas[+bt.dataset.i]));
        tx.querySelector('.dz-fechar').onclick = fechar;
      };
      const entrada = (e) => {
        A.sfx('diario-pagina', .6);
        if (e.flag) { st.f[e.flag] = true; salvar(); }
        if (e.voz) fala(e.voz);
        tx.innerHTML = `<h3>${esc(tr(e.titulo))}</h3>${e.img ? `<img class="dz-img" src="${e.img}" alt="">` : ''}<p>${esc(tr(e.texto))}</p>` + botoes([['ghost dz-voltar', U('ex').voltar], ['ghost dz-fechar', U('ex').fechar]]);
        tx.querySelector('.dz-voltar').onclick = lista; tx.querySelector('.dz-fechar').onclick = fechar;
      };
      if (reg.vistos.includes(pt.id)) { img.style.backgroundImage = "url('assets/images/diario-aberto.jpg')"; lista(); } else capa();
    };

    // ---- a pedra debaixo da tábua
    const pedraModal = () => modal(`<video class="pz" src="${vsrc('assets/clip/pedra-gira.mp4')}" poster="assets/images/pedra-a.jpg" muted loop playsinline autoplay></video><div class="dz-texto"></div>`, 'pedra');
    const pedraCabana = (pt, b) => {
      A.sfx('tabua-solta', .7); setTimeout(() => A.sfx('pedra-brilha', .5), 700);
      st.f.viu_pedra = true; salvar();
      const m = pedraModal(), tx = m.querySelector('.dz-texto'); m.querySelector('video').play().catch(() => {});
      tx.innerHTML = L.pedra.lembranca.map((t) => `<p>${esc(tr(t))}</p>`).join('') + botoes([['cta dz-ok', U('ex').recolocar]]);
      tx.querySelector('.dz-ok').onclick = () => { A.sfx('pedra-mesa', .5); marca(pt, b); fechaModal(m); mostra([L.pedra.recolocar]); };
    };
    const pedraDespedida = (pt, b) => {
      A.sfx('tabua-solta', .7); setTimeout(() => A.sfx('pedra-brilha', .5), 700);
      const m = pedraModal(), tx = m.querySelector('.dz-texto'); m.querySelector('video').play().catch(() => {});
      const fim = (texto) => { tx.innerHTML = `<p>${esc(tr(texto))}</p>` + botoes([['ghost dz-ok', U('ex').fechar]]); tx.querySelector('.dz-ok').onclick = () => { marca(pt, b); fechaModal(m); mostra([texto]); }; };
      const ja = st.escolhas.joia;
      if (ja) { const r = L.pedra.razoes.find((x) => x.id === ja); return fim(r ? r.resultado : L.pedra.deixar); }
      const abertura = st.f.viu_pedra ? L.pedra.levantar : L.pedra.curta;
      if (!st.f.viu_pedra) st.f.achou_tarde = true;
      tx.innerHTML = `<p>${esc(tr(abertura))}</p>` + botoes([['cta dz-levar', U('ex').levar], ['ghost dz-deixar', U('ex').deixar]]);
      tx.querySelector('.dz-deixar').onclick = () => { st.escolhas.joia = 'deixar'; registrar('joia', 'deixar'); salvar(); A.sfx('pedra-mesa', .5); fim(L.pedra.deixar); };
      tx.querySelector('.dz-levar').onclick = () => {
        tx.innerHTML = `<p class="eyebrow">${esc(tr(L.pedra.pergunta))}</p>` + `<div class="dz-razoes">${L.pedra.razoes.map((r) => `<button class="opt" data-id="${r.id}">${esc(tr(r.txt))}</button>`).join('')}</div>`;
        tx.querySelectorAll('.dz-razoes button').forEach((bt) => bt.onclick = () => {
          const r = L.pedra.razoes.find((x) => x.id === bt.dataset.id);
          st.escolhas.joia = r.id; registrar('joia', r.id); salvar(); A.sfx('pedra-brilha', .5); A.escolha(); fim(r.resultado); fala(r.voz);
        });
      };
    };

    // ---- o diário, na despedida: levar ou deixar
    const diarioDespedida = (pt, b) => {
      const DD = L.diarioDespedida; A.sfx('diario-fecha', .5);
      const m = modal(`<div class="dz" style="background-image:url('assets/images/diario-fechado.jpg')"></div><div class="dz-texto"></div>`, 'diario');
      const tx = m.querySelector('.dz-texto');
      const fim = (v) => { const t = DD[v]; tx.innerHTML = `<p>${esc(tr(t))}</p>` + botoes([['ghost dz-ok', U('ex').fechar]]); tx.querySelector('.dz-ok').onclick = () => { marca(pt, b); fechaModal(m); mostra([t]); }; };
      if (st.escolhas.diario) return fim(st.escolhas.diario);
      tx.innerHTML = `<p class="eyebrow">${esc(tr(DD.pergunta))}</p>` + botoes([['cta dz-levar', U('ex').levar], ['ghost dz-deixar', U('ex').deixar]]);
      const decide = (v) => { st.escolhas.diario = v; registrar('diario', v); salvar(); A.escolha(); if (v === 'levar') A.sfx('mochila', .5); fim(v); fala(v === 'levar' ? DD.vozLevar : DD.vozDeixar); };
      tx.querySelector('.dz-levar').onclick = () => decide('levar');
      tx.querySelector('.dz-deixar').onclick = () => decide('deixar');
    };

    const toca = (pt, b) => {
      if (ocupado) return;
      if (pt.tipo === 'diario') return diario(pt, b);
      if (pt.tipo === 'pedra') return pedraCabana(pt, b);
      if (pt.tipo === 'diario-despedida') return diarioDespedida(pt, b);
      if (pt.tipo === 'pedra-despedida') return pedraDespedida(pt, b);
      if (pt.som) A.sfx(pt.som, .6);
      mostra(pt.texto); marca(pt, b); if (pt.voz) fala(pt.voz);
    };
    ex.pontos.forEach((pt) => {
      const b = document.createElement('button');
      const esc_ = oculto(pt);
      b.className = 'ex-pt' + (esc_ ? ' oculto' : '') + (pt.tipo === 'pedra-despedida' && !esc_ ? ' gema' : '') + (reg.vistos.includes(pt.id) ? ' visto' : '');
      Object.assign(b.style, { left: (pt.x - pt.w / 2) + '%', top: (pt.y - pt.h / 2) + '%', width: pt.w + '%', height: pt.h + '%' });
      b.setAttribute('aria-label', pt.rotulo ? tr(pt.rotulo) : '…');
      b.innerHTML = '<i></i>' + (pt.rotulo ? `<span>${esc(tr(pt.rotulo))}</span>` : '');
      b.onclick = (e) => { e.stopPropagation(); toca(pt, b); };
      caixa.appendChild(b);
    });
    // na tela vertical a imagem rola de lado; começa no centro, com uma dica que some ao rolar
    requestAnimationFrame(() => {
      rolo.scrollLeft = (rolo.scrollWidth - rolo.clientWidth) / 2;
      if (rolo.scrollWidth > rolo.clientWidth + 20) {
        const d = document.createElement('p'); d.className = 'ex-deslize'; d.textContent = '‹  ' + U('ex').deslize + '  ›'; o.appendChild(d);
        rolo.addEventListener('scroll', () => d.classList.add('some'), { once: true });
      }
    });
    mostra(paras(p.texto).slice(-1));
    atualiza();
  });
}

const MG = {
  cabana(p) { return explorar(p, 'cabana'); },
  despedida(p) { return explorar(p, 'despedida'); },
  // ---------- acompanhar Nuuk: o túnel corre, Nuuk vai à frente; pise nas pegadas dele alternando os pés
  goles() {
    return new Promise((resolve) => {
      const o = abreOverlay('goles');
      const pens = [
        { t: 'O século passado.' }, { t: 'Quando os Lúmae existiam.' }, { t: 'Quando eu era o herói do meu povo.', forte: 2 },
        { t: 'Todas as magias que sei lançar.' }, { t: st.gelunah >= 1 ? 'O olhar dela, hoje, sobre a montanha.' : 'Um dragão triste, a oeste.' },
        { t: st.f.ferido ? 'O ombro que ainda dói.' : st.f.pulou_gromm ? 'O gigante que eu não fui ver.' : 'O sangue de Gromm no chão.' },
      ];
      o.innerHTML = `<p class="mgt">${U('golesT')}</p><div class="campo"></div><p class="mgsub">${U('golesSub')}</p><button class="parar" disabled>${U('parar')}</button>`;
      const campo = o.querySelector('.campo'), parar = o.querySelector('.parar'); let goles = 0, fim = false;
      pens.forEach((p, k) => {
        const b = document.createElement('button'); b.className = 'pens'; b.textContent = tr(p.t); p.el = b; p.hp = p.forte || 1; p.brilho = .35;
        const a = (k / pens.length) * Math.PI * 2 + Math.random() * .4;
        p.x = .5 + Math.cos(a) * .34; p.y = .5 + Math.sin(a) * .32; p.vx = (Math.random() - .5) * .02; p.vy = (Math.random() - .5) * .02;
        b.onclick = () => {
          if (fim || p.morto) return; goles++; A.gole(); o.classList.remove('bebe'); void o.offsetWidth; o.classList.add('bebe');
          atualizaTexto(goles); parar.disabled = false;
          if (--p.hp > 0) { b.classList.add('resiste'); setTimeout(() => b.classList.remove('resiste'), 500); return; }
          p.morto = true; b.classList.add('afoga'); A.apaga();
          if (pens.every((q) => q.morto)) encerra();
        };
        campo.appendChild(b);
      });
      const encerra = () => {
        if (fim) return; fim = true; parar.remove();
        const vivos = pens.filter((p) => !p.morto), mortos = pens.length - vivos.length;
        // o que ficou aceso se junta ao Título (o cânone: sobra um único pensamento)
        vivos.forEach((p) => { p.el.classList.add('funde'); p.el.style.left = '50%'; p.el.style.top = '45%'; });
        const ganho = Math.round(vivos.length * 5 - mortos * 1.5);
        st.guardados = vivos.map((p) => p.t); st.escolhas.goles = String(vivos.length); registrar('goles', String(vivos.length)); salvar();
        atualizaTexto(99);
        setTimeout(() => {
          const tt = document.createElement('div'); tt.className = 'titulo'; tt.textContent = tr('O Título.'); campo.appendChild(tt); A.luzSobe();
          o.querySelector('.mgsub').textContent = vivos.length ? U('sobrou') : U('unico');
          if (ganho) mudaLuz(ganho);
          setTimeout(() => { fechaOverlay(); resolve(); }, 3400);
        }, 1100);
      };
      parar.onclick = encerra;
      let lastF = performance.now();
      const loop = (now) => {
        if (!o.classList.contains('show') || !o.classList.contains('goles')) return;
        const dt = Math.min((now - lastF) / 1000, .1); lastF = now;
        for (const p of pens) {
          if (p.morto || fim) continue;
          p.x += p.vx * dt; p.y += p.vy * dt; if (p.x < .12 || p.x > .88) p.vx *= -1; if (p.y < .15 || p.y > .85) p.vy *= -1;
          p.brilho = Math.min(1, p.brilho + dt * .05);
          p.el.style.left = (p.x * 100) + '%'; p.el.style.top = (p.y * 100) + '%'; p.el.style.setProperty('--b', p.brilho.toFixed(2));
        }
        requestAnimationFrame(loop);
      };
      requestAnimationFrame(loop);
    });
  },

  // ---------- o jogo do hino (O gelo obedece), dentro do livro
  'hino-do-gelo'() {
    return new Promise((resolve) => {
      const o = abreOverlay('jogo');
      A.setOn(false);
      const q = new URLSearchParams({ livro: '1', luz: String(Math.round(st.luz)), bronze: st.f.examinou_bronze ? '1' : '0', tacets: st.f.leu_tacets ? '1' : '0', ferido: st.f.ferido ? '1' : '0', hesitou: st.f.hesitou ? '1' : '0', lang: LANG });
      o.innerHTML = `<iframe src="jogo/index.html?${q}" allow="autoplay; fullscreen" title="${U('mg')['hino-do-gelo']}"></iframe>`;
      const onMsg = (e) => {
        if (!e.data || e.data.type !== 'aheryn:fim') return;
        removeEventListener('message', onMsg);
        st.jogo = { won: e.data.won, score: e.data.score, time: e.data.time, resets: e.data.resets };
        st.escolhas.jogo = e.data.won ? 'venceu' : 'perdeu'; registrar('jogo', st.escolhas.jogo); salvar();
        A.setOn(true); fechaOverlay(); resolve('nav');
        st.feitos['mg:jogo'] = 1; irProxima();
      };
      addEventListener('message', onMsg);
    });
  },
};

// ----- goles: o texto canônico avança a cada gole
function golesTexto(g) {
  const seq = ['Bebi.',
    'O sabor é o de um beijo de uma lareira apagada. Líquido límpido, quase cristalino e o cheiro do fundo de caça morta e a aspereza de um prego enferrujado.',
    'Bebi de novo, e foi um pensamento de menos.',
    'Há noites em que a vontade de pensar é mais forte, de reviver o século passado e reviver memórias boas. Quando os Lúmae existiam, quando eu era o herói do meu povo.',
    'Bebi de novo, e mais um pensamento se foi.',
    'Mas ainda questiono quanto tempo continuarei conseguindo viver assim, se um dia eu não jogarei minhas mãos para o alto e lançarei todas as magias e maldições que sei que sou capaz de lançar.'];
  return seq.slice(0, g + 1).map(tr);
}
function atualizaTexto(g) {
  const lines = golesTexto(g), have = txt.querySelectorAll('p').length;
  lines.slice(have).forEach((t) => txt.insertAdjacentHTML('beforeend', pHTML(t, 'novo')));
}

// ---------------------------------------------------------------- navegação
function irProxima() {
  const p = P[st.i];
  const cantaAqui = p && p.letra && (!p.letraSe || p.letraSe(st));
  if (cantaAqui && p.cantarSob === 'next' && !p._cantado) { p._cantado = true; setNext(false); hino(p); return; }
  if (p && p.quieto && !st.escolhas[p.quieto.id]) { st.escolhas[p.quieto.id] = 'cala'; aplicar({ eixo: 'longe' }); registrar(p.quieto.id, 'cala'); salvar(); }
  if (p && p.fim) return resumo();
  const j = idxVis(st.i, 1); if (j >= P.length) return resumo();
  st.i = j; A.ctx && A.virar(); render(1);
}
function irAnterior() { const j = idxVis(st.i, -1); if (j < 0) return; st.i = j; A.ctx && A.virar(); render(-1); }
btnNext.onclick = () => { if (!btnNext.disabled) irProxima(); };
btnPrev.onclick = irAnterior;
addEventListener('keydown', (e) => {
  if (document.body.classList.contains('mg-on') || !$('#cover').classList.contains('hide')) return;
  if ($('#codex').classList.contains('show')) { if (e.key === 'Escape') $('#codex').classList.remove('show'); return; }
  if (['ArrowRight', 'Enter', ' '].includes(e.key)) { e.preventDefault(); if (!btnNext.disabled) irProxima(); }
  else if (e.key === 'ArrowLeft') irAnterior();
  else if (/^[1-4]$/.test(e.key)) { const b = box.querySelectorAll('.opt:not(:disabled)')[+e.key - 1]; b && b.click(); }
});
let sx = null, sy = null;
panel.addEventListener('touchstart', (e) => { sx = e.touches[0].clientX; sy = e.touches[0].clientY; }, { passive: true });
panel.addEventListener('touchend', (e) => {
  if (sx == null) return; const dx = e.changedTouches[0].clientX - sx, dy = e.changedTouches[0].clientY - sy; sx = null;
  if (Math.abs(dx) > 70 && Math.abs(dx) > Math.abs(dy) * 1.5) { if (dx < 0 && !btnNext.disabled) irProxima(); else if (dx > 0) irAnterior(); }
});

// ---------------------------------------------------------------- resumo final (estilo Telltale)
function guardaEstado() {
  // o que este capítulo deixa para os próximos (mesmo endereço = mesmo navegador)
  try {
    const todos = JSON.parse(localStorage.getItem('aqv_estado') || '{}');
    const joia = st.escolhas.joia;
    todos.v = 1;
    todos.cap1 = {
      luz: Math.round(st.luz), aug: st.aug, gelunah: st.gelunah, perfil: st.perfil || {},
      viuGromm: !st.f.pulou_gromm, marcado: !!st.f.marcado, ferido: !!st.f.ferido, magiaGromm: !!st.f.magiaGromm, hesitou: !!st.f.hesitou,
      leu_tacets: !!st.f.leu_tacets, examinou_bronze: !!st.f.examinou_bronze,
      diario: st.escolhas.diario === 'levar',
      pedra: joia && joia !== 'deixar' ? { motivo: joia, nome: (L.pedra.razoes.find((r) => r.id === joia) || {}).nome } : null,
      venceu: st.jogo ? !!st.jogo.won : null, escolhas: st.escolhas, quando: new Date().toISOString(),
    };
    localStorage.setItem('aqv_estado', JSON.stringify(todos));
  } catch (e) {}
}
async function resumo() {
  guardaEstado();
  A.stepsOff(); A.musicOut();
  $('#resumo').classList.add('show');
  const luz = Math.round(st.luz), loc = LANG === 'pt' ? 'pt-BR' : 'en-US';
  $('#rsLuz').textContent = luz; $('#rsFrase').textContent = luz >= 70 ? U('fraseAlta') : luz <= 30 ? U('fraseBaixa') : U('fraseMeio');
  const rel = [st.aug >= 1 ? U('augMais') : st.aug <= -1 ? U('augMenos') : st.f.pulou_gromm ? U('augPulou') : U('augZero'), st.gelunah >= 1 ? U('gelMais') : U('gelZero')];
  if (st.jogo) rel.push(st.jogo.won ? U('jogoVenceu')(`${Math.floor(st.jogo.time / 60)}:${String(st.jogo.time % 60).padStart(2, '0')}`, Number(st.jogo.score).toLocaleString(loc)) : U('jogoSeguiu'));
  $('#rsRel').innerHTML = rel.map((r) => `<li>${esc(r)}</li>`).join('');
  // só o que mais pesa: a pedra (e o nome que ganhou) e o diário
  const joia = st.escolhas.joia, razao = L.pedra.razoes.find((x) => x.id === joia);
  const linhas = [
    { id: 'joia', q: U('pedraQ'), a: joia === 'deixar' ? U('deixouPedra') : razao ? U('levouPedra') + ': ' + tr(razao.nome) : U('nuncaPedra') },
    { id: 'diario', q: U('diarioQ'), a: st.escolhas.diario === 'levar' ? U('levouDiario') : U('deixouDiario') },
  ];
  const desenha = (stats) => {
    $('#rsEsc').innerHTML = linhas.map((l) => {
      const tot = stats.filter((x) => x.escolha === l.id).reduce((a, b) => a + Number(b.total), 0);
      const mine = stats.find((x) => x.escolha === l.id && x.opcao === (l.id === 'joia' ? joia : st.escolhas.diario));
      const pct = tot && mine ? Math.round((Number(mine.total) / tot) * 100) : null;
      return `<li><span class="q">${esc(l.q)}</span><span class="a">${esc(l.a)}</span>${pct != null ? `<span class="pct"><i style="width:${pct}%"></i><b>${U('mesmo')(pct)}</b></span>` : ''}</li>`;
    }).join('');
  };
  desenha([]); desenha(await estatisticas());
}

const reiniciar = () => { st = novoEstado(); salvar(); luzShown = st.luz; $('#resumo').classList.remove('show'); render(1); };
$('#rsReler').onclick = () => { if (confirm(U('confirm'))) reiniciar(); };
$('#menuReset').onclick = () => { if (confirm(U('confirm'))) reiniciar(); };

// ---------------------------------------------------------------- idioma
function aplicaIdioma() {
  document.documentElement.lang = LANG === 'pt' ? 'pt-BR' : 'en';
  document.querySelectorAll('.lang').forEach((b) => { b.textContent = LANG === 'pt' ? 'EN' : 'PT'; b.setAttribute('aria-label', LANG === 'pt' ? 'Read in English' : 'Ler em português'); });
  $('#cvEye').textContent = U('coverEye'); $('#cvSub').textContent = LANG === 'en' ? L.subtituloEn : L.subtitulo; $('#cvLede').textContent = U('coverLede');
  $('#cvGo').textContent = salvo && salvo.i > 0 ? U('coverRestart') : U('coverGo'); $('#cvCont').textContent = U('coverCont'); $('#cvHint').textContent = U('coverHint');
  $('.tl .cap').textContent = U('capI'); $('#rhead').textContent = `${L.titulo} · ${LANG === 'en' ? L.subtituloEn : L.subtitulo}`; $('#luz').title = U('luzTitle'); $('#luz .lbl').textContent = U('luz');
  $('#rsEye').textContent = U('fimCap'); $('#rsH').textContent = U('ficou'); $('#rsLuzL').textContent = U('luz'); $('#rsSuas').textContent = U('suas'); $('#rsReler').textContent = U('reler');
  $('#rsProx').textContent = (LANG === 'en' ? L.proximo.tituloEn : L.proximo.titulo) + ' →';
  document.title = LANG === 'en' ? 'Aheryn, The Light at the Edge of the World · The Four Wills' : 'Aheryn, A Luz na Borda do Mundo · As Quatro Vontades';
}
document.querySelectorAll('.lang').forEach((b) => b.addEventListener('click', () => {
  LANG = LANG === 'pt' ? 'en' : 'pt'; try { localStorage.setItem('livro_lang', LANG); } catch (e) {}
  aplicaIdioma(); if ($('#cover').classList.contains('hide')) render(0); if ($('#resumo').classList.contains('show')) resumo();
}));

// ---------------------------------------------------------------- capa / início
$('#cvTitle').textContent = L.titulo; $('#cover').style.setProperty('--capa', `url("${L.capa}")`);
$('#rsProx').href = L.proximo.url;
const salvo = carregar();
if (salvo && salvo.i > 0) $('#cvCont').hidden = false;
aplicaIdioma();
Clima.set('neve'); document.body.classList.add('na-capa');
const comecar = (continuar) => {
  A.init(); A.resume();
  st = continuar && salvo ? salvo : novoEstado();
  luzShown = st.luz; salvar();
  ['assets/audio/tacet_passos.mp3', 'assets/audio/hino.mp3', 'assets/audio/hino/louvor.mp3'].forEach((u) => A.buf(u)); A.carregaSfx();
  $('#cover').classList.add('hide'); document.body.classList.remove('na-capa'); A.virar(); render(1);
};
$('#cvGo').onclick = () => comecar(false);
$('#cvCont').onclick = () => comecar(true);
$('#som').onclick = () => { A.init(); A.setOn(!A.on); $('#som').classList.toggle('off', !A.on); };
drawLuz();
window.__LIVRO = { get st() { return st; }, render, irProxima, MG, A };
})();
