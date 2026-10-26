/* ==========================================================================
   AS QUATRO VONTADES · CAPÍTULO I · AHERYN — roteiro interativo
   --------------------------------------------------------------------------
   Texto canônico = o capítulo publicado, dividido em páginas.
   Texto NOVO (ramos das escolhas) está marcado com  // NOVO  para revisão.
   Estado da história (st):
     st.luz        0–100  quanto o Aheryn deixou a luz acender
     st.aug        relação com os Aug (Nuuk, Gromm)
     st.gelunah    vínculo com Gelunah
     st.f          flags: bronze, ferido, hesitou, passoPerdido ...
   Cada parágrafo pode ser texto ou { se: st => condição, t: 'texto' }.
   ========================================================================== */

// perfil invisível: + deixa o mundo chegar perto, − mantém distância
// v21: os três Aheryns, pela Luz do momento (quieto é o cânone)
window.quieto = (st) => st.luz <= 30;
window.medido = (st) => st.luz > 30 && st.luz < 60;
window.aceso = (st) => st.luz >= 60;
window.perfil = (st) => ((st.perfil && st.perfil.perto) || 0) - ((st.perfil && st.perfil.longe) || 0);

window.LIVRO = {
  id: 'cap01',
  titulo: 'Aheryn',
  subtitulo: 'A Luz na Borda do Mundo',
  subtituloEn: 'The Light at the Edge of the World',
  capa: 'assets/images/capa-2.jpg',
  luzInicial: 20,
  proximo: { titulo: 'Capítulo II · Laura D’Orrose, Sob a Seda', tituloEn: 'Chapter II · Laura D’Orrose, Beneath the Silk', url: 'https://marcelomartinsjorge.github.io/the4willschapter2V2/' },

  // camas sonoras extras (somam-se às do capítulo antigo)
  zonas: {
    tunel: { src: 'assets/audio/tunel-loop.mp3', volume: .45 },
    'cabana-dentro': { src: 'assets/audio/cabana-dentro-loop.mp3', volume: .55 },
    'cabana-dia': { src: 'assets/audio/cabana-dia-loop.mp3', volume: .5 },
    'cabana-amanhecer': { src: 'assets/audio/cabana-amanhecer-loop.mp3', volume: .5 },
  },

  // o diário de Aheryn (cabana, de manhã)
  diario: {
    capa: 'Um caderno de couro, mais novo do que o que guarda. Na capa, na língua que só eu leio: Lembranças do Velho Mundo. Algumas anotações de como era a vida nas Cidades-Espelho, feitas quando eu achava que a memória precisava de ajuda. Descobri depois que ela só precisava de descanso.', // NOVO
    entradas: [
      { id: 'noite', titulo: 'I. A Noite Luminosa', voz: 'noite-luminosa', texto: 'Na primeira noite de cada estação, nos reuníamos ao pôr do sol e iluminávamos juntos os nossos pensamentos, em silêncio, uma comunhão, uma grande reunião sem palavras. Noite virava dia.' }, // NOVO
      { id: 'estrelas', titulo: 'II. Estrelas', texto: 'Os pontos luminosos no céu e nossos heróis na terra. Uma vez por ano, uma grande festividade para honrar nossos heróis, vivos ou mortos, por seus avanços na filosofia, na matemática, na arquitetura, na magia, no estudo dos seres vivos e em outros conhecimentos importantes.' }, // NOVO
      { id: 'ajudantes', titulo: 'III. Ajudantes', flag: 'leu_tacets', voz: 'diario-ajudantes', img: 'assets/images/diario-tacet.jpg', texto: 'Os Tacets chegaram numa manhã, de bronze e de magia, para carregar o que não queríamos carregar. Uma invenção que nos elevou como raça dominante. O primeiro que vi na vida varria a praça toda manhã, e eu nunca a vi suja. Hoje, me procuram para me matar com a mesma disciplina com que varriam a praça.' }, // NOVO
      { id: 'outras', titulo: 'IV. Outras anotações', texto: 'Não é o momento de visitar todo o passado agora.' }, // NOVO
    ],
  },

  // a pedra debaixo da tábua
  pedra: {
    lembranca: [
      'Uma tábua solta ao lado do catre, que eu nunca preguei. Debaixo dela, embrulhada num pano, a pedra.',
      'Achei-a numa viagem, meio enterrada no cascalho de um rio seco, entre pedras que não eram da mesma família. Azul, e violeta quando a girei contra a luz, e depois cinza, como o gelo faz. Conheço pedras melhor do que a maioria, e não sei que mineral é este.',
    ], // NOVO
    recolocar: 'Recoloquei a tábua. Melhor deixá-la guardada.', // NOVO
    curta: 'Uma tábua solta ao lado do catre. Debaixo dela, embrulhada num pano, uma pedra que achei numa viagem e nunca soube o que era.', // NOVO
    levantar: 'Levantei a tábua. A pedra estava no pano, do jeito que eu a deixei.', // NOVO
    deixar: 'Recoloquei a tábua e pisei nela até assentar. A pedra ficou onde estava, sem ninguém para lhe dar nome.', // NOVO
    pergunta: 'Por que ele a leva?',
    razoes: [
      { id: 'valer', voz: 'pedra-valer', txt: 'Porque parece valer alguma coisa.', nome: 'a Pedra da Borda', resultado: 'Levei porque uma pedra assim paga um inverno, ou serve para convencer algumas bocas de que eu não existo.' }, // NOVO
      { id: 'cor', soSe: (st) => st.f.afogouGelunah, txt: 'Porque tem a cor de alguma coisa.', nome: 'a pedra azul', resultado: 'Levei porque tem a cor de alguma coisa que eu não consegui lembrar. Fiquei um tempo olhando para ela, tentando.' }, // NOVO v22 (Gelunah afogada nos goles)
      { id: 'gelunah', soSe: (st) => !st.f.afogouGelunah, voz: 'pedra-gelunah', txt: 'Porque me lembra Gelunah.', nome: 'o Olho de Gelunah', resultado: 'Levei porque tem a cor do olho dela. A Mãe do Inverno que me fez companhia, mesmo que solitária, por todos esses anos na Borda do Mundo.' }, // NOVO
      { id: 'misterio', voz: 'pedra-misterio', txt: 'Parece mágica, misteriosa.', nome: 'a pedra', resultado: 'Levei porque não sei o que é, de que material é feita. É um mistério que preciso solucionar.' }, // NOVO
    ],
  },
  diarioDespedida: {
    pergunta: 'O diário, na mesa.',
    vozLevar: 'diario-levar', vozDeixar: 'diario-deixar',
    levar: 'Coloquei o diário no fundo da mochila, embaixo do resto, como uma memória que não se quer lembrar, mas que também não se pode esquecer.', // NOVO
    deixar: 'Deixei o diário na mesa, fechado. As luzes já são provas suficientes contra mim.', // NOVO
  },

  // nomes que aparecem no resumo final
  escolhas: {
    armadilha: 'Os pinguins vivos',
    gelunah: 'Quando Gelunah passou',
    nuuk1: 'A primeira pergunta a Nuuk',
    nuuk3: 'O pedido a Nuuk',
    bronze: 'O bronze do Glaciar',
    diario: 'O diário',
    joia: 'A pedra debaixo da tábua',
    passo: 'Nos túneis com Nuuk',
    atencao: 'O que Aheryn percebeu nos túneis',
    pedra: 'A pedra de Gromm',
    destilaria: 'Com Nuuk, enchendo os frascos',
    ritual: 'Antes de beber',
    hino: 'Como cantou o hino',
    proibido: 'A magia proibida',
    jogo: 'O gelo obedece',
  },

  paginas: [

    // ===================================================== ABERTURA (v20): tela preta, a contenção
    { id: 'abertura', escuro: true, estado: 'seco', zona: 'borda', fundo: { img: 'assets/images/soleira.jpg', kb: 'none', dim: .95 },
      antes: { som: 'frasco', somEm: 7600, ms: 8800 },
      pensa: [
        { id: 'ab1', t: 'Na primeira noite de cada estação, a cidade inteira acendia junto.', atraso: 700, vida: 5600, luz: 2, prende: true }, // NOVO v20
        { id: 'ab2', t: 'Gelunah passou baixo ontem. Ou anteontem.', atraso: 3400, vida: 4600, luz: 2, prende: true }, // NOVO v20
      ],
      falas: [{ n: 'abertura-1', ms: 1800 }, { n: 'abertura-2', ms: 5400 }], // v23 voz
      titulo: { nivel: 1, atraso: 5600 },
      texto: ['O último frasco tinha secado havia nove dias.'] }, // NOVO v20

    // ===================================================== I · BORDA DO MUNDO
    { id: 'parte-I', parte: 'I', zona: 'borda', fundo: { img: 'assets/images/codex-borda-do-mundo.webp', kb: 'in', dim: .62, clima: 'neve' },
      cartao: { num: 'I', nome: 'A Borda do Mundo', epigrafe: 'O frio não guarda rancor. Guarda todo o resto.', fonte: 'ditado dos caçadores de Frígia' } }, // NOVO (epígrafe)

    { id: 'p01', zona: 'borda', fundo: { img: 'assets/images/soleira.jpg', kb: 'in', foco: '72% 45%', clima: 'neve' },
      narracao: 'assets/audio/narration/line1.mp3', narracaoLang: 'en', som: 'assets/audio/corvos.mp3', capitular: true,
      texto: [
        'A neve daquele ano chegou cedo, e chegou seca, do jeito que ela manda quando anda de bom humor. Depois de tantas décadas vivendo na Borda do Mundo, é natural para mim reconhecer o estado de espírito da Mãe do Inverno.',
        'Saí da soleira rumo à armadilha de cova que uso para capturar os pinguins. Os Aug adoram o sabor de pinguins, mas por terem quase quatro metros, é muito difícil capturarem um. E eles não sabem fazer armadilhas. O escambo é simples: eu junto centenas de pinguins e troco com eles por outros materiais. Pele de urso das neves, madeiras das árvores de Frígia e, claro, bebida alcoólica. Muita.',
      ] },

    { id: 'c-armadilha', falas: [{ n: 'cova-1', ms: 2400 }], zona: 'borda', fundo: { img: 'assets/images/cova.jpg', kb: 'in', dim: .4, foco: '65% 40%', clima: 'neve' },
      texto: [
        'Cheguei à beira da cova. Uma colônia nova tinha caído lá, e alguns estavam vivos. Depois de tanto tempo, ver um bicho morrer no fundo de um buraco ainda me incomoda. Restam poucas coisas que me incomodam.',
        'Três se mexiam no fundo da cova, machucados demais da queda para subir sozinhos. Um deles tinha parado de tentar e me olhava.', // NOVO
      ],
      pensa: [{ id: 'cova', t: 'Ele me olhava como eu olho para o norte.', mais: 'Toda manhã, da soleira. Nunca soube o que esperava ver lá.', luz: 3, atraso: 3600 }], // NOVO v20
      escolha: { id: 'armadilha', opcoes: [
        { eixo: 'perto', id: 'rapido', txt: 'Descer e acabar com eles, rápido.', rs: 'Acabou com eles, rápido.', luz: 4,
          resultado: ['Desci pela borda de gelo. Três vezes a mesma torção, a mesma pressa. Quando subi, a ponta dos meus dedos ainda estava acesa. Fechei as mãos dentro das mangas até apagar.'] }, // NOVO
        { eixo: 'longe', id: 'frio', txt: 'Deixar que morram sozinhos.', rs: 'Deixou que morressem sozinhos.', luz: -4,
          resultado: ['Não desci. Fiquei de costas para a cova, contando a respiração, até o fundo ficar quieto.'] }, // NOVO
        { eixo: 'perto', id: 'salvar', voz: 'cova-2', vozAtraso: 2600, txt: 'Tirar da cova o que me olhava.', rs: 'Tirou da cova o pinguim que olhava para ele.', luz: 8, fundo: { img: 'assets/images/pinguim-salvo.jpg', kb: 'in', dim: .35, foco: '70% 60%', clima: 'neve' },
          resultado: ['Desci, peguei o que me olhava pelo meio do corpo e o pus na neve, longe da borda. Ele ficou parado um tempo, depois foi embora sem pressa, como se a ideia tivesse sido dele. Os outros dois deixei como estavam.'] }, // NOVO
      ] } },

    { id: 'ponte', zona: 'borda', fundo: { img: 'assets/images/encosta.jpg', kb: 'in', dim: .45, foco: '30% 50%', lado: 'dir', clima: 'neve' },
      narracao: 'assets/audio/voz/ponte.mp3', narracaoLang: 'en',
      texto: [
        'Contei os pinguins, era o suficiente. Cem, contando os da cova.', // NOVO
        'Amarrei os pinguins no trenó e voltei à cabana para buscar os frascos, que eu levava vazios e trazia cheios. Às vezes, parece que minha vida sempre foi sobre isso.', // NOVO
        { se: (st) => st.escolhas.armadilha === 'salvar', t: 'Noventa e nove, na verdade. Para os Aug, cem.' }, // NOVO (sem voz, depois da gravação)
      ] },

    { id: 'p02', zona: 'borda', fundo: { img: 'assets/images/codex-gelunah.webp', kb: 'out', dim: .55, foco: '40% 40%', lado: 'dir', retrato: true, clima: 'neve' },
      texto: [
        'No início eu me importava com a severidade do inverno. Claro que por aqui sempre fez frio, mas quando Gelunah se incomodava com algo, geralmente fome, ela tornava o ambiente inabitável. Exceto para mim… e para os Aug, os gigantes que são os únicos seres minimamente conscientes com quem mantenho contato desde que cheguei.',
        'Gelunah também é consciente, claro, de um jeito que não sei medir. Mas a comunicação com ela é diferente: não diria telepatia, e sim algo espiritual. Algo que eu, como Lúmae, devo evitar sentir. Foi exatamente esse tipo de investigação mais profunda do imaterial que levou à extinção completa dos meus semelhantes, e é o motivo de eu viver na Borda do Mundo.',
      ] },

    { id: 'p03', zona: 'borda', fundo: { img: 'assets/images/codex-lumae.webp', kb: 'none', dim: .45, retrato: true, foco: '50% 12%' },
      pensa: [{ id: 'luminosa', t: 'Antes, brilhar era bonito.', mais: 'Na Noite Luminosa nada se escondia, e de longe parecia que o chão tinha pegado fogo.', luz: 4, atraso: 4200 }], // NOVO v20
      texto: [
        'Às vezes sinto falta de uma conversa mais elaborada. Os Aug não são conhecidos por grande intelecto. Mas a vantagem é essa: não ligam se sou um Lúmae ou não, nem se deveriam se juntar ao resto do mundo, mais rico em conhecimento, para me declarar inimigo mortal da existência. Alguns anos passam sem eu proferir uma única palavra.',
        'Aprendi a silenciar os pensamentos, por sobrevivência. Esse domínio sobre a própria mente me ensinou também a deixar de sentir o frio. Nós, os Lúmae, temos veias douradas sob a pele que acendem quando pensamos, e quanto mais intenso o pensamento, mais forte a luz. É uma atenção que não posso me dar ao luxo de atrair.',
      ],
      },

    { id: 'p04', zona: 'borda', fundo: { img: 'assets/images/encosta.jpg', kb: 'in', foco: '30% 50%', lado: 'dir', clima: 'neve' },
      texto: [
        'O ciclo é quase sempre o mesmo: me localizam. Querem me matar porque são recompensados por isso, ou porque são justiceiros e protetores do mundo, decididos a acabar com todo praticante de magia. E a magia que me protege deles é a mesma que guia os próximos até aqui. Resta-me mudar de lugar, encontrar um novo esconderijo e esperar que me localizem outra vez.',
        'Mas já são cinquenta e seis ou cinquenta e sete anos aqui. Sou realmente grato a Gelunah, mas é um sentimento que não devo nutrir, porque me faz brilhar e eu acho que, de algum modo, ela sabe disso.',
      ] },

    { id: 'cabana-manha', zona: 'cabana-dia', fundo: { img: 'assets/images/cabana-dia.jpg', kb: 'in', dim: .4, foco: '50% 45%', lado: 'dir' },
      narracao: 'assets/audio/narration/line4.mp3', narracaoDepois: 'assets/audio/voz/cabana-manha-2.mp3', narracaoLang: 'en', capitular: true,
      texto: [
        'A cabana em que moro é pequena de propósito. Uma mesa. Um catre que não uso para dormir, porque não durmo. Fico quieto, de olhos abertos, que é o mais perto do sono que a minha espécie alcança, e deixo a noite passar por mim como a água passa pelo gelo.',
        'De manhã ela parece ainda menor, prefiro assim. Antes de sair, confiro tudo, não é paranoia.', // NOVO
      ],
      minijogo: 'cabana',
      depois: ['Estava tudo onde eu tinha deixado. Peguei os frascos e abri a porta.'], // NOVO
      explorar: {
        img: 'assets/images/cabana-dia.jpg', proporcao: 1672 / 941,
        instrucao: 'Conferir a casa', porta: 'Abrir a porta',
        fecho: 'Estava tudo onde eu tinha deixado. Peguei os frascos e abri a porta.', // NOVO
        pontos: [
          { id: 'viga', rotulo: 'A viga', x: 76, y: 8, w: 24, h: 11, som: 'viga-riscos', voz: ['viga', 'viga-conta'],
            texto: ['Um risco por inverno, na viga sobre a porta. Comecei a contar no primeiro e parei de conferir no vigésimo. Hoje a viga diz cinquenta e seis e a minha memória diz cinquenta e sete. Tanto faz.'] }, // NOVO
          { id: 'catre', rotulo: 'O catre', x: 13, y: 63, w: 25, h: 24, voz: 'catre',
            texto: ['O catre está feito como no primeiro dia, a pele esticada, o canto dobrado. Nunca deitei nele. Uma cabana sem catre parece de outra pessoa, e ela precisa parecer minha, para o caso de alguém me visitar. Ninguém me visita. Eu faço a cama do mesmo jeito.'] }, // NOVO
          { id: 'mesa', rotulo: 'A mesa', x: 41, y: 52, w: 15, h: 10, som: 'frascos', voz: 'mesa',
            texto: ['Os frascos em fila sobre a mesa, vazios, virados para a janela como uma plateia que já conhece o final. Doze, um por mês, se eu me comportar. Ou melhor, se eu não pensar muito.'] }, // NOVO
          { id: 'peles', rotulo: 'As peles', x: 88.5, y: 57, w: 9, h: 30,
            texto: ['Pele de urso das neves em rolos, madeira de Frígia empilhada até a altura do joelho, tudo o que os Aug aceitam em troca de pinguim. Eles não regateiam, e por isso me obrigo a ser justo.'] }, // NOVO
          { id: 'bacia', rotulo: 'A bacia', x: 79, y: 55, w: 9.5, h: 12, som: 'bacia-gelo',
            texto: [
              'A água do degelo na bacia tem uma película de gelo que eu quebro com o dedo toda manhã.', // NOVO
              { se: (st) => st.escolhas.armadilha === 'rapido', t: 'Lavei as mãos duas vezes. A segunda foi por causa do cheiro, que não era da água.' }, // NOVO
              { se: (st) => st.escolhas.armadilha === 'frio', t: 'Lavei as mãos, que não tinham tocado em nada. Lavei por hábito. Alguém como eu precisa ter hábitos e não questioná-los.' }, // NOVO
              { se: (st) => st.escolhas.armadilha === 'salvar', t: 'Lavei as mãos. Havia uma pena de pinguim presa na manga, e eu a deixei onde estava.' }, // NOVO
            ] },
          { id: 'janela', rotulo: 'A janela', x: 44.5, y: 29, w: 16, h: 25, som: 'vidraca-geada',
            texto: ['O vidro é a única coisa da cabana que não fabriquei. A geada nele começa a desenhar formas se eu olho por tempo demais. Passei a manga e as formas viraram água.'] }, // NOVO
          { id: 'diario', rotulo: 'O diário', x: 53, y: 53.5, w: 7.5, h: 7, tipo: 'diario' },
          { id: 'tabua', x: 25.5, y: 73.5, w: 6, h: 7, tipo: 'pedra', oculto: true, opcional: true },
        ],
      } },

    { id: 'c-gelunah', falas: [{ n: 'gelunah-evitar', ms: 5200 }], trai: { atraso: 1400 }, zona: 'borda', fundo: { video: 'assets/video/gelunah-flight.mp4', kb: 'none', clima: 'neve-leve' }, cena: 'assets/video/gelunah-flight.mp4',
      texto: [
        'Na soleira, com a mão ainda na porta, o frio mudou, e alguma coisa se apertou no peito.', // ALTERADO
        'Ela passou a oeste, longe, sobre a montanha mais distante. Linda. As escamas níveas devolviam o sol fraco, e ela voava quase sem bater as asas. Os olhos azul-violeta brilhavam feito pedra preciosa, e eram tristes… foi a tristeza que me apertou o peito. Parecia um aviso.',
        { se: (st) => st.f.viu_pedra, t: 'O olho dela deslizou um instante na direção da cabana. Azul, depois violeta, a cor que eu tinha girado contra a luz de manhã. Eu não me mexi. Ela seguiu.' }, // NOVO
      ],
      olhoSe: (st) => st.f.viu_pedra,
      escolha: { id: 'gelunah', opcoes: [
        { eixo: 'perto', id: 'sentir', txt: 'Deixar o aperto no peito ficar.', luz: 10, gelunah: 1, aviso: 'Algo no frio mudou de lado.',
          resultado: ['Deixei. Por um momento não fiz nada contra ele, e as veias dos pulsos esquentaram, acesas por baixo das mangas. Ela não virou a cabeça.'] }, // NOVO
        { eixo: 'longe', id: 'esvaziar', voz: 'gelunah-olhar', vozAtraso: 1200, txt: 'Esvaziar a cabeça, como aprendi.', luz: -6,
          resultado: ['Fiz o que sempre faço. Tirei da cabeça o nome dela, depois o da montanha, depois o do frio. O aperto ficou onde estava, sem nome, e o dourado não subiu.'] }, // NOVO
      ] } },

    { id: 'p07', zona: 'borda', fundo: { img: 'assets/images/codex-gelunah.webp', kb: 'in', dim: .5, foco: '40% 40%', lado: 'dir', retrato: true, clima: 'neve' },
      texto: [
        'Foi só um instante, fiquei a vê-la sumir rumo ao norte branco. Quando me recompus, atrelei o trenó e comecei a andar.', // ALTERADO
        { se: (st) => quieto(st), t: 'O trenó pesava o mesmo de sempre.' }, // NOVO v21 (quieto)
        { se: (st) => medido(st), t: 'Andei com o frio dela ainda no peito, e não fiz nada para tirá-lo de lá.' }, // NOVO v21 (medido)
        { se: (st) => aceso(st), t: 'Os Lúmae diziam que os dragões não envelhecem. Vendo Gelunah sumir no branco, quase acreditei: de longe, já não dava para saber onde ela acabava e o norte começava.' }, // NOVO v21 (aceso)
      ],
      pensa: [{ id: 'norte', luzMin: 31, t: 'Para onde ela vai, quando some no norte?', luz: 2, atraso: 4200 }], // NOVO v21
      fimDeParte: true },

    // ===================================================== II · GLACIAR OCO
    { id: 'parte-II', parte: 'II', zona: 'glaciar', fundo: { img: 'assets/images/entrada-glaciar.jpg', kb: 'in', dim: .62, clima: 'neve' },
      cartao: { num: 'II', nome: 'O Glaciar Oco', epigrafe: 'Os Aug contam os anos pelas vezes que o gelo racha. Contam devagar.', fonte: 'anotação à margem de um mapa do norte' } }, // NOVO (epígrafe)

    { id: 'p08', titulo: { nivel: 2, atraso: 5000 }, zona: 'glaciar', fundo: { img: 'assets/images/entrada-glaciar.jpg', kb: 'in', dim: .45, foco: '60% 55%', clima: 'neve' },
      narracao: 'assets/audio/narration/line2.mp3', narracaoLang: 'en', som: 'assets/audio/gelo-quebrando.mp3', capitular: true,
      texto: [
        'Caminhava em direção ao Glaciar Oco, uma espécie de vilarejo da sociedade dos Aug: uma geleira gigante, cheia de fendas e túneis naturais formados pelo degelo e recongelamento milenar. Deve ser tão antiga quanto Gelunah. O gelo que a forma é diferente: ficou azul-turquesa, duro como pedra. É bonito, mas fedido.',
        { se: (st) => st.escolhas.armadilha === 'salvar', t: 'No caminho, um pinguim atravessou a neve, longe demais para eu saber se era o mesmo.' }, // NOVO
      ] },

    // NOVO v25: sozinho com o trenó. Quando o corpo para, a cabeça começa a andar; o brilho chama os caçadores.
    { id: 'treno', estado: 'alerta', zona: 'borda', fundo: { img: 'assets/images/treno.jpg', kb: 'in', dim: .45, foco: '45% 55%', clima: 'neve' },
      texto: ['Parei numa dobra da neve, onde o vento não alcançava, para descansar o ombro da corda do trenó. Foi um erro. Quando o corpo para, a cabeça começa a andar.'],
      mente: {
        inicio: 3600, limite: 3, fim: 26000,
        alerta: 'As veias estão acendendo.',
        botao: 'Respirar fundo e silenciar a mente, como aprendi.',
        fios: [
          { id: 'g1', ms: 0, t: 'O olho dela, hoje cedo. Azul, depois violeta.', voz: 'mente-gelunah-1' },
          { id: 'g2', ms: 3500, t: 'Ela não voa. É o céu que abre caminho para ela passar.', voz: 'mente-gelunah-2' },
          { id: 'h1', ms: 7500, t: 'Cantaram o meu nome uma vez, numa praça cheia de luz.', voz: 'mente-heroi-1' },
          { id: 'h2', ms: 11000, t: 'Herói de quê? De cem anos escondido, trocando pinguins por esquecimento?', voz: 'mente-heroi-2' },
          { id: 'pg', ms: 14500, se: (st) => st.escolhas.armadilha !== 'salvar', t: 'O do fundo da cova parou de tentar. Eu parei antes dele.', voz: 'mente-pinguim' },
          { id: 'pd', ms: 18500, pedra: true, se: (st) => !st.f.viu_pedra, t: 'A tábua solta, perto do catre… eu guardei alguma coisa ali. Uma vez. O quê?', voz: 'mente-pedra' },
          { id: 'pv', ms: 18500, pedra: true, se: (st) => st.f.viu_pedra, t: 'A pedra debaixo da tábua. Da cor do olho dela.', voz: 'mente-pedra-vista' },
        ],
        murmurios: [
          { t: 'Não pensar.', voz: 'mente-m1' },
          { t: 'Cinquenta e seis. Cinquenta e sete.', voz: 'mente-m2' },
          { t: 'Ela sabe.', voz: 'mente-m3' },
          { t: 'Brilhar era bonito.', voz: 'mente-m4' },
          { t: 'Apaga. Apaga.', voz: 'mente-m5' },
        ],
        cedo: 'Respirei fundo e calei um pensamento de cada vez. As minhas mãos continuaram escuras.',
        tarde: 'Respirei fundo e calei tudo. Mas tinha demorado. O dourado ainda descia dos meus pulsos, devagar, como água voltando para dentro da terra, e na neve cinzenta da tarde aquilo se via de longe.',
        nunca: 'Não calei nada. A luz chegou aos pulsos antes de mim, e por um instante a dobra da neve ficou da cor de uma vela.',
        dica: 'A tábua solta, perto do catre. Fazia anos que eu não olhava debaixo dela.',
      },
      resumoEsc: { id: 'mente', opcoes: [
        { id: 'cedo', rs: 'Silenciou a mente a tempo. Os caçadores passaram sem vê-lo.' },
        { id: 'tarde', rs: 'Demorou a silenciar a mente. O brilho chamou os caçadores.' },
        { id: 'nunca', rs: 'Deixou os pensamentos subirem. O brilho chamou os caçadores.' },
      ] } }, // NOVO v25

    { id: 'cacadores-passam', se: (st) => st.f.naoVisto, estado: 'alerta', zona: 'borda', fundo: { img: 'assets/images/cacadores-passam.jpg', kb: 'in', dim: .45, foco: '50% 40%', clima: 'neve' },
      texto: ['O vento trouxe o cheiro antes das vozes: óleo de baleia, couro molhado. Homens, na crista acima de mim. Encolhi-me ao lado do trenó, com as mãos enterradas na neve, escuro como uma pedra. Passaram sem olhar para baixo. Esperei até o último som sumir, e mais um pouco.'] }, // NOVO v25

    // NOVO v22: caçadores de Frígia. Os primeiros humanos do capítulo; diante deles, brilhar é ser descoberto.
    { id: 'cacadores', se: (st) => !st.f.naoVisto, estado: 'alerta', zona: 'borda', fundo: { img: 'assets/images/cacadores-2.jpg', kb: 'in', dim: .42, foco: '50% 50%', clima: 'neve' },
      texto: [
        'Quando levantei a cabeça, eles já estavam na crista, olhando para baixo. Para mim. Para as minhas mãos.', // v25
        'Desceram até uns cinquenta passos do trenó. Peles de foca, capuzes de lobo, o cheiro de óleo de baleia. Caçadores de Frígia. O mais alto trazia uma besta armada, apontada para o chão, por enquanto.', // v25
        '— Pinguim. Muito pinguim pra um velho só.',
      ],
      escolha: { id: 'olharCacadores', pergunta: 'O que Aheryn olha?', opcoes: [
        { id: 'besta', txt: 'A besta.', flag: 'olhouBesta', rs: 'Olhou a besta.',
          resultado: ['A trava estava solta, e o dedo não estava no gatilho, estava ao lado dele. Quem segura uma besta assim já matou gente e não gostou.'] },
        { id: 'mao', txt: 'A mão do que se aproxima do trenó.', flag: 'olhouMao', rs: 'Olhou a mão perto do trenó.',
          resultado: ['O de perna ruim já estava a três passos do trenó, a mão aberta, olhando os pinguins como quem conta. Não olhava para mim. Olhava o que eu estava puxando.'] },
        { id: 'novo', txt: 'Os olhos do mais novo.', flag: 'olhouNovo', rs: 'Olhou os olhos do mais novo.',
          resultado: ['O mais novo não devia ter vinte invernos. Olhava os pinguins e engolia em seco, de um jeito que eu já tinha visto em outros rostos. Fome de dias.'] },
      ] } },

    { id: 'c-cacadores', se: (st) => !st.f.naoVisto, estado: 'alerta', zona: 'borda', fundo: { img: 'assets/images/cacadores-besta-2.jpg', kb: 'out', dim: .45, foco: '50% 45%', clima: 'neve' },
      texto: [
        { se: (st) => quieto(st), t: 'Mantive as mãos dentro das mangas. Nada nelas para ver.' },
        { se: (st) => medido(st), t: 'Senti os pulsos quentes dentro das mangas e torci para que a luz do dia bastasse para esconder.' },
        { se: (st) => aceso(st), t: 'As veias dos meus pulsos estavam acesas, e a luz do dia não escondia tudo. Um caçador de Frígia sabe o que vale a cabeça de quem brilha.' },
      ],
      escolha: { id: 'cacadores', pergunta: 'O que Aheryn faz?', opcoes: [
        { eixo: 'perto', id: 'dar', txt: 'Dar parte dos pinguins.', rs: 'Deu parte dos pinguins.', flag: 'deuPinguins', voz: 'cacador-dar', vozAtraso: 1700,
          resultado: [
            { se: (st) => !st.f.olhouMao, t: 'Soltei a corda de trás do trenó e deixei uns vinte rolarem para a neve.' },
            { se: (st) => st.f.olhouMao, t: 'Soltei a corda de trás do trenó e deixei uns vinte rolarem até os pés do de perna ruim, que era quem ia buscá-los de qualquer jeito.' },
            '— Levem esses e sigam o caminho de vocês.',
            'O da besta demorou a baixar a arma. Quando baixou, os três recolheram os pinguins sem pressa e sem agradecer, e sumiram atrás da crista. Vinte pinguins a menos. Os Aug iam notar.',
          ] },
        { eixo: 'longe', id: 'mentir', txt: 'Fingir ser um velho caçador a serviço dos gigantes.', rs: 'Mentiu que os pinguins eram dos gigantes.', luzMax: 45, travaAcesaTxt: 'As mãos estão acesas demais para mentir.', voz: 'cacador-mentir', vozAtraso: 1700,
          resultado: [
            'Puxei o capuz, curvei os ombros e deixei a voz sair rouca.',
            '— São do Glaciar. Os gigantes esperam por eles. Quem mexer no trenó vai explicar aos gigantes.',
            'O da besta olhou para o norte, para a sombra azul do Glaciar, e fez as contas que um homem de Frígia faz quando ouve falar dos Aug. Recuaram de costas até a crista.',
          ] },
        { eixo: 'longe', id: 'lutar', voz: [['cacador-lutar-1', 1600], ['cacador-lutar-ombro', 6400], ['cacador-matar-2', 11200]], txt: 'Sacar a espada curta.', rs: 'Lutou com a espada curta e matou o da besta.', flag: 'feridoBesta', flags: ['matouCacadores'], luz: 5,
          fundo: { img: 'assets/images/cacadores-luta.jpg', kb: 'in', dim: .42, foco: '55% 40%', clima: 'neve' },
          resultado: [
            'A espada curta saiu da bainha antes que eu terminasse de decidir. Fazia décadas que eu não a usava para nada além de cortar corda.',
            '— Último aviso. Ou o trenó, ou a estrada.',
            { se: (st) => st.f.olhouBesta, t: 'Eu sabia que ele ia atirar, e mesmo assim não fui rápido o bastante.' },
            'A seta entrou no meu ombro direito e me girou meio corpo. Cheguei nele assim mesmo, torto, antes que armasse a segunda, e a lâmina entrou abaixo das costelas, até o cabo.',
            'Ele caiu de costas na neve, me olhando sem entender. O de perna ruim puxou o mais novo para trás da crista. Não voltaram para buscá-lo.',
            'Fiquei de joelhos ao lado dele até ele parar. Mais de cinquenta anos escondido na Borda do Mundo, e o que eu fiz para continuar vivo foi isso.',
            'Arranquei a seta sozinho, sentado na neve. O braço ainda respondia, mas cada vez que eu fechava a mão, a dor subia até a nuca e apagava todo o resto.',
          ] }, // v24: só a espada mata; a magia dele não mata
        { id: 'gelo', voz: 'cacador-gelo', vozAtraso: 4200, txt: 'Erguer o gelo entre nós, para assustá-los.', rs: 'Ergueu o gelo para assustá-los.', luz: 10, flag: 'viramLuz', aviso: 'Os caçadores viram a luz.',
          fundo: { img: 'assets/images/cacadores-muro.jpg', kb: 'in', dim: .42, foco: '50% 45%', clima: 'neve' },
          resultado: [
            'Pus a mão na neve. A luz subiu dos dedos até o pulso, e o gelo respondeu como um vizinho a quem se pede um favor pequeno: rompeu a neve entre nós em lascas da minha altura, uma fileira torta de dentes azuis.',
            { se: (st) => st.f.olhouBesta, t: 'Eu já sabia para onde ia a seta antes de ela sair. Dei um passo para o lado, e ela se partiu contra o gelo.' },
            { se: (st) => !st.f.olhouBesta, t: 'O da besta disparou por reflexo. A seta se partiu contra o gelo, a um palmo do meu ombro.' },
            '— Vão. Antes que eu esqueça que estou sendo gentil.',
            'Largaram a besta na neve e correram sem olhar para trás. Mas olharam para a minha mão antes de correr, e os três a viram acesa.',
            'Talvez contassem aquilo numa taverna de Frígia. Talvez alguém ouvisse.',
          ] }, // v24: muro de gelo, não fenda
        { eixo: 'perto', id: 'fome', txt: 'Dar comida ao mais novo.', rs: 'Deu comida ao mais novo.', flag: 'deuComida', luz: 3, travaSe: (st) => !st.f.olhouNovo, travaTxt: 'Não reparei em nada que me dissesse isso.', voz: 'cacador-fome', vozAtraso: 600,
          resultado: [
            '— Vocês estão com fome, não com raiva. Tem diferença, e eu conheço as duas.',
            'Peguei cinco pinguins e pus nas mãos do mais novo, não nas do líder. O garoto ficou parado, segurando os bichos contra o peito.',
            '— De onde você é, velho?',
            'Não respondi. Foram embora pelo mesmo caminho por onde vieram, e o mais novo olhou para trás duas vezes.',
          ] },
      ] } },

    // NOVO v25: o resto do caminho até o Glaciar, conforme o que aconteceu com os caçadores
    { id: 'chegada-glaciar', zona: 'glaciar', fundo: { img: 'assets/images/entrada-glaciar.jpg', kb: 'in', dim: .5, foco: '60% 55%', clima: 'neve' },
      texto: [
        { se: (st) => st.f.naoVisto, t: 'Passei o dia sem ser visto. Era assim que eu gostava que os dias fossem.' },
        { se: (st) => !st.f.naoVisto && st.escolhas.cacadores === 'dar', t: 'Cheguei ao Glaciar com o trenó mais leve: oitenta e poucos pinguins. Os Aug sabem contar até cem quando o assunto é comida.' },
        { se: (st) => !st.f.naoVisto && st.escolhas.cacadores === 'mentir', t: 'Tinha usado o nome dos Aug para assustar homens. Se soubessem o medo que metem nos outros, dominariam o mundo. Ainda bem que só querem pinguim.' },
        { se: (st) => !st.f.naoVisto && st.escolhas.cacadores === 'lutar', t: 'Puxei o trenó com a mão esquerda até o Glaciar, com o braço direito morto ao lado do corpo e o sangue endurecido na manga. Com sorte, o álcool ia afogar a dor.' },
        { se: (st) => !st.f.naoVisto && st.escolhas.cacadores === 'gelo', t: 'Olhei para trás o resto do caminho. Ninguém me seguia, o que não me deixou mais tranquilo. Talvez nem precisassem me seguir. Bastava contarem a alguém.' },
        { se: (st) => !st.f.naoVisto && st.escolhas.cacadores === 'fome', t: 'O trenó estava cinco pinguins mais leve. Não senti diferença no peso.' },
        'A boca do Glaciar Oco me engoliu como sempre: devagar, azul, e com aquele cheiro.',
      ] }, // NOVO v25

    { id: 'p09', estado: 'companhia', antes: { som: 'passosAug', ms: 1900 }, zona: 'tunel', fundo: { img: 'assets/images/nuuk.jpg', kb: 'in', dim: .38, foco: '62% 8%', clima: 'cristais' },
      texto: [
        'Geralmente faço o combinado com o líder deles, Gromm, o Quebra-Marfim, título dado a ele pelos próprios Aug por derrubar um Mamute Colossal com as próprias mãos. Mas naquela noite, quem me recepcionou foi um gigante menor, chamado Nuuk. Disse que Gromm estava com problemas de intestino.',
        { se: (st) => st.f.feridoBesta, t: 'Nuuk farejou o ar antes de falar.' }, // NOVO v25
        { se: (st) => st.f.feridoBesta, t: '— UCÊ SANGUE.' }, // NOVO v25
        { se: (st) => st.f.feridoBesta, t: '— Não é nada.' }, // NOVO v25
        { se: (st) => st.f.feridoBesta, t: 'Ele olhou para o meu ombro e não perguntou mais.' }, // NOVO v25
        '— GROMM BARRIGA RUIM, JÁ CAGAR UM URSO. NUUK FALAR COM UCÊ.',
        { se: (st) => !st.f.deuPinguins, t: '— Certo, Nuuk. Vim falar dos pinguins, tenho uma centena deles. Ainda tenho na minha cabana muita madeira e pele. Nessa temporada preciso apenas de banha e do destilado.' },
        { se: (st) => st.f.deuPinguins, t: '— Certo, Nuuk. Vim falar dos pinguins. São menos do que eu queria, oitenta e poucos. Ainda tenho na minha cabana muita madeira e pele. Nessa temporada preciso apenas de banha e do destilado.' }, // NOVO v22
        { se: (st) => st.f.deuPinguins, t: '— PINGUIM POUCO. BEBIDA POUCA.' }, // NOVO v22
        { se: (st) => quieto(st), t: 'Nuuk esperou a resposta olhando para os pinguins.' }, // NOVO v21 (quieto)
        { se: (st) => medido(st), t: 'Nuuk tinha líquen novo nos ombros. Fazia um ano que eu não o via.' }, // NOVO v21 (medido)
        { se: (st) => aceso(st), t: 'Os Aug vivem tão devagar que o musgo cresce neles como cresce nas pedras. Nuuk tinha líquen novo nos ombros, e eu calculei sem querer quantos invernos aquilo levava para pegar.' }, // NOVO v21 (aceso)
      ] },

    { id: 'c-passo', zona: 'tunel', fundo: { video: 'assets/video/glaciar-walk.mp4', img: 'assets/images/seguindo-nuuk.jpg', dim: .35, foco: '38% 55%', clima: 'cristais' }, cena: 'assets/video/glaciar-walk.mp4', passosGigante: true,
      texto: [
        'Ele não respondeu, só se virou. Por mais lentos que sejam a cada passo, a estatura deles me obriga a correr para acompanhá-lo.',
      ],
      escolha: { id: 'passo', opcoes: [
        { eixo: 'perto', id: 'correr', txt: 'Correr atrás dele.',
          resultado: ['Mantive o passo, meio correndo, meio escorregando, a respiração virando fumaça na frente do rosto.'] }, // NOVO
        { eixo: 'longe', id: 'ritmo', txt: 'Andar no meu ritmo e seguir as pegadas dele.', luz: 3, flag: 'passoPerdido',
          resultado: ['Perdi as costas dele duas vezes nas curvas do túnel, mas pegadas daquele tamanho só podiam ser de Nuuk. Ele não diminuiu o passo por mim.', 'Andando sozinho entre paredes que brilham, é difícil não pensar, e as veias dos pulsos me lembraram disso.'] }, // NOVO
      ] } },

    { id: 'p11', zona: 'tunel', fundo: { img: 'assets/images/dois-aug.jpg', kb: 'in', dim: .42, foco: '70% 55%', clima: 'cristais' },
      texto: [
        { se: (st) => st.f.passoPerdido, t: 'Quando o alcancei, ele estava parado numa curva, olhando para o outro lado.' }, // NOVO
        'Gromm era mais educado, pensei. Mas melhor assim: quando me contou a história do Mamute, levou algumas horas para dizer o que uma criança humana diria em três frases.',
        'Segui Nuuk pelos túneis. Os Aug não são numerosos: mesmo ali, na maior concentração da população deles, vi cerca de quatro ou cinco pelo caminho. É muito raro vê-los conversando entre si, mas me peguei ouvindo a conversa entre dois deles, mesmo a muitos passos de distância.',
        '— GROMM TAR MAL.',
        '— NUM CONSEGUIR FICAR DE PÉ.',
        '— NUNCA VER GROMM ASSIM.',
      ],
      escolha: { id: 'atencao', pergunta: 'O que Aheryn percebe?', opcoes: [
        { eixo: 'perto', id: 'nuuk', txt: 'Nuuk.',
          resultado: ['Ele pisava sempre no mesmo lugar do túnel, onde o gelo já tinha afundado em duas marcas largas. Devia ter feito aquele caminho mil vezes.'] }, // NOVO
        { id: 'gelo', txt: 'O gelo.', luz: 2,
          resultado: ['Por baixo da camada turquesa há outra, mais escura, e por baixo dela outra. Contei sete antes de o azul ficar escuro demais.'] }, // NOVO
        { id: 'cheiro', txt: 'O cheiro.',
          resultado: ['Peixe velho, gordura e alguma coisa doce por baixo, a raiz que eles mastigam para fazer o destilado.'] }, // NOVO
      ] } },

    { id: 'd-nuuk', zona: 'tunel', fundo: { img: 'assets/images/nuuk.jpg', kb: 'out', dim: .4, foco: '62% 8%', clima: 'cristais' },
      texto: [
        'Quis perguntar a Nuuk o que se passava com Gromm. Os Aug têm dois estômagos e digerem quase qualquer coisa.', // ALTERADO
      ],
      dialogo: { interlocutor: 'Nuuk', rodadas: [
        { id: 'nuuk1', pergunta: 'O que Aheryn pergunta a Nuuk?', opcoes: [
          { eixo: 'perto', id: 'contou', txt: 'Nuuk, o que exatamente Gromm te contou? Como ele está?', canon: true },
          { eixo: 'longe', id: 'morrendo', txt: 'Ele está morrendo, Nuuk?', aug: -1, aviso: 'Nuuk vai lembrar disso.' }, // NOVO
          { eixo: 'perto', id: 'pedra', txt: 'Os Aug não adoecem da barriga, Nuuk. Vocês digerem pedra.', luzMin: 60, flag: 'deduziu', resposta: 'NUUK NUM SABER.' }, // NOVO v21 (só o Aheryn aceso)
          { eixo: 'longe', id: 'silencio', txt: '…', silencio: true, luz: -2, luzMax: 80 },
        ], resposta: 'GROMM NUM FALAR. SÓ GRUNHIR.' },
        { id: 'nuuk2', pergunta: 'O que Aheryn diz?', opcoes: [
          { eixo: 'perto', id: 'ver', txt: 'Posso ver ele?', canon: true },
          { eixo: 'longe', id: 'deixar', txt: 'Tudo bem. Não é da minha conta.', aug: -1, luz: -2, fim: true, flag: 'pulou_gromm', resposta: 'NUUK LEVAR UCÊ BEBIDA.' }, // NOVO
          { eixo: 'longe', id: 'silencio', txt: '…', silencio: true, luz: -2, luzMax: 80, fim: true, flag: 'pulou_gromm', resposta: 'NUUK LEVAR UCÊ BEBIDA.' },
        ], resposta: 'GROMM NUM CONSEGUIR FICAR DE PÉ.' },
        { id: 'nuuk3', pergunta: 'O que Aheryn diz?', opcoes: [
          { eixo: 'perto', id: 'ajudar', txt: 'Às vezes consigo ajudá-lo.', canon: true, aug: 1, aviso: 'Nuuk vai lembrar disso.' },
          { eixo: 'longe', id: 'exigir', txt: 'Me leve até ele, Nuuk.', aug: -1, luz: 3 }, // NOVO
        ], resposta: 'NUUK LEVAR UCÊ.' },
      ] },
      depois: [
        { se: (st) => st.escolhas.nuuk1 === 'morrendo' || st.escolhas.nuuk2 === 'deixar', t: 'Nuuk caminhou um pouco mais rígido depois da conversa, os ombros mais altos do que antes.' }, // ALTERADO
        { se: (st) => st.escolhas.nuuk1 !== 'morrendo' && st.escolhas.nuuk2 !== 'deixar', t: 'Segui Nuuk sem mais perguntas.' }, // NOVO
        { se: (st) => !st.f.pulou_gromm, t: 'Não sabia se queria mesmo ajudá-lo. Queria entender o que tinha derrubado o maior dos Aug. O passo de Nuuk hesitou, e o corpo dele mudou de direção, para longe do destilado.' },
        { se: (st) => st.f.pulou_gromm, t: 'Nuuk não mudou de direção. Seguiu reto, rumo ao destilado, e o mal-estar de Gromm ficou onde estava, sem que eu o visse.' }, // NOVO
      ] },

    { id: 'v-glaciar', se: (st) => !st.f.pulou_gromm, zona: 'glaciar', fundo: { img: 'assets/images/aposento.jpg', kb: 'in', dim: .4, foco: '30% 55%', lado: 'dir', clima: 'cristais' },
      texto: [
        'O “aposento” de Gromm é um grande amontoado de ossos sobre uma pilha de rochas e ossos menores, formando um platô da altura de dois Aug, um tanto afastado do centro do Glaciar Oco.',
        { se: (st) => quieto(st), t: 'Subi atrás de Nuuk.' }, // NOVO v21 (quieto)
        { se: (st) => medido(st), t: 'Os ossos de baixo eram mais velhos que os de cima. Os Aug constroem como dormem, devagar, uma estação por vez.' }, // NOVO v21 (medido)
        { se: (st) => aceso(st), t: 'Ossos de baleia na base, de mamute no meio, de urso no alto. Quem soubesse ler aquilo leria ali a história do Glaciar Oco em restos de refeição. Os Lúmae teriam passado anos estudando aquilo. Eu só subi por cima.' }, // NOVO v21 (aceso)
      ] },

    { id: 'c-bronze', se: (st) => !st.f.pulou_gromm, zona: 'glaciar', fundo: { img: 'assets/images/aposento.jpg', kb: 'out', dim: .38, foco: '40% 80%', lado: 'dir', clima: 'cristais' },
      texto: [
        'Foi a primeira vez que pisei ali, e não foi a “arquitetura” que me chamou a atenção, mas sim dezenas, talvez centenas, de pedaços de bronze espalhados pelo chão. Bronze não sai da terra, é liga, e os Aug não sabem fundir cobre nem estanho. Aquilo não tinha o que fazer ali.',
      ],
      escolha: { id: 'bronze', pergunta: 'O que Aheryn olha?', opcoes: [
        { eixo: 'perto', id: 'examinar', txt: 'Abaixar e examinar um caco.', flag: 'examinou_bronze', som: 'bronze-caco',
          voz: (st) => (st.f.leu_tacets ? 'bronze-2' : 'bronze-1'), vozAtraso: 3400,
          fundo: { img: 'assets/images/bronze-caco.jpg', kb: 'in', dim: .38, foco: '35% 55%', lado: 'dir', clima: 'cristais' },
          resultado: [
            'Peguei um caco. Frio, pesado para o tamanho, com as bordas ainda vivas, de quem quebrou há pouco.',
            'Bronze aqui?',
            { se: (st) => st.f.leu_tacets, t: 'Nada bom.' },
            'Larguei o caco onde estava. Depois disso fiquei de sobreaviso, com o peso nos calcanhares e um ouvido no chão.',
          ] }, // NOVO
        { eixo: 'perto', id: 'nuuk', txt: 'Olhar os pés de Nuuk.', flag: 'leuNuuk',
          resultado: ['Nuuk não tinha entrado no aposento. Os pés dele paravam na soleira, com os dedos virados para trás, prontos para sair.', 'Os Aug não recuam diante de quase nada.'] }, // NOVO v20
        { eixo: 'longe', id: 'deixar', txt: 'Não tocar em nada.',
          resultado: ['Não toquei em nada. Na casa dos outros não se mexe no que não é seu.'] }, // ALTERADO
      ] } },

    { id: 'p15', antes: { som: 'respira', ms: 2400 }, se: (st) => !st.f.pulou_gromm, zona: 'glaciar', fundo: { img: 'assets/images/gromm.jpg', kb: 'in', dim: .4, foco: '72% 35%', clima: 'cristais' },
      texto: [
        '— O que são esses pedaços de metal espalhados pelo chão, Nuuk?',
        '— SUJEIRA.',
        'Imaginava que o gigante não me ajudaria a solucionar aquele mistério, mas logo avistei Gromm, bufando, enorme, escorado nos ossos. Ele me notou quando me aproximei mais, e gritou de dor.',
        '— O QUE GROMM FALAR, NUUK?! GROMM MAL, NUM QUERER VER NINGUÉM, NEM PEQUENINO.',
      ] },

    // NOVO v20: Gromm grita com Nuuk por ter trazido o pequenino. Nenhuma opção é segura.
    { id: 'c-culpa', se: (st) => !st.f.pulou_gromm, zona: 'glaciar', fundo: { img: 'assets/images/gromm.jpg', kb: 'out', dim: .42, foco: '72% 35%', clima: 'cristais' },
      texto: ['Nuuk olhou para mim e depois para o chão.'],
      escolha: { id: 'culpa', pergunta: 'Gromm grita com Nuuk. O que Aheryn faz?', opcoes: [
        { eixo: 'perto', id: 'assumir', txt: 'Tomar a culpa para mim.', rs: 'Tomou a culpa para si.', aug: 1, flag: 'culpaMinha', aviso: 'Nuuk vai lembrar disso.',
          resultado: ['— Fui eu que insisti em vir, Gromm. Nuuk não queria me trazer.', 'Nuuk soltou o ar devagar, um som de fole velho. Gromm virou a cabeça para mim, e era isso que eu queria: que ele olhasse para mim e não para Nuuk.'] },
        { eixo: 'longe', id: 'calar', txt: '…', silencio: true, rs: 'Ficou em silêncio.',
          resultado: ['Não disse nada. Nuuk encolheu o pescoço entre os ombros, um gigante tentando caber num lugar menor que ele.'] },
        { eixo: 'longe', id: 'nuuk', txt: 'Deixar a culpa com Nuuk.', rs: 'Deixou a culpa com Nuuk.', aug: -1, flag: 'culpaNuuk', aviso: 'Nuuk vai lembrar disso.',
          resultado: ['— Foi Nuuk que me chamou, Gromm.', 'Era mentira, e Nuuk sabia. Não olhou para mim. Gromm rosnou para ele do fundo do peito, e Nuuk recuou até a entrada.'] },
      ] } },

    { id: 'p16', checkpoint: true, se: (st) => !st.f.pulou_gromm, zona: 'glaciar', fundo: { img: 'assets/images/gromm-ferido.jpg', kb: 'in', dim: .45, tint: 'sangue', foco: '72% 35%' },
      texto: [
        { se: (st) => !st.escolhas.culpa || st.escolhas.culpa === 'calar', t: 'Não esperei a reação de Nuuk e respondi.' },
        { se: (st) => st.escolhas.culpa === 'assumir' || st.escolhas.culpa === 'nuuk', t: 'Continuei antes que Gromm respondesse.' }, // NOVO v20
        '— Vim te ajudar, Gromm. Sei que está mal da barriga.',
        '— SE PEQUENINO ANDAR MAIS PERTO DE GROMM, PEQUENINO ESMAGADO.',
        'Havia um líquido viscoso escorrendo pelo chão próximo a Gromm, e não eram fezes. Era sangue, bastante sangue.',
        '— Você está ferido, Gromm?',
      ] },

    { id: 'c-pedra', se: (st) => !st.f.pulou_gromm, zona: 'glaciar', fundo: { img: 'assets/images/gromm-pedra.jpg', kb: 'out', dim: .5, foco: '58% 40%' },
      texto: [ 'Ele não me respondeu, não da maneira que eu esperava. A reação dele foi se erguer dos ossos, com um urro mais de dor que de raiva, e jogar uma pedra, maior que meu torso, na minha direção.' ],
      escolha: { id: 'pedra', urgente: true, cinema: 'pedra', opcoes: [
        { id: 'desviar', txt: 'Jogar o corpo para o lado.',
          fundo: { img: 'assets/images/gromm-desvia.jpg', kb: 'in', dim: .4, foco: '45% 45%' },
          resultado: ['Me joguei para o lado. A pedra passou tão perto que senti o vento dela no rosto, e se arrebentou contra o gelo atrás de mim.'] }, // v27
        { eixo: 'perto', id: 'ficar', txt: 'Ficar onde estou, de mãos abertas.', morte: true, // v27: a pedra mata; game over volta à entrada do Glaciar
        },
        { id: 'magia', txt: 'Erguer o gelo entre mim e a pedra.', luz: 12, aug: -1, flag: 'magiaGromm', aviso: 'Gromm viu a luz.',
          fundo: { img: 'assets/images/gromm-barreira.jpg', kb: 'in', dim: .4, foco: '40% 45%' },
          resultado: ['Não pensei. A luz subiu antes de mim, e o gelo do chão se ergueu numa lâmina entre nós. A pedra se partiu contra ela a um palmo do meu peito, e os pedaços caíram entre os ossos.', 'Gromm parou de bufar. Nuuk deu um passo para trás.'] }, // NOVO
      ] } },

    { id: 'p18', zona: 'tunel', fundo: { clip: 'assets/clip/tunel.mp4', img: 'assets/images/seguindo-nuuk.jpg', dim: .45, clima: 'cristais' },
      texto: [
        { se: (st) => !st.f.pulou_gromm, t: '— IR EMBORA OU GROMM MATAR.' },
        { se: (st) => !st.f.pulou_gromm, t: 'Foi mais um aviso do que uma ameaça de Nuuk. Percebi na voz dele o medo que sentia de Gromm.' },
        { se: (st) => !st.f.pulou_gromm, t: '— Certo, vamos buscar a bebida. Espero que melhore da dor de barriga, Gromm.' },
        { se: (st) => !st.f.pulou_gromm, t: 'Nuuk não disse mais nada. Só me levou de volta pelos túneis.' },
        { se: (st) => st.aug >= 1, t: 'No caminho, sem se virar, ele empurrou com o pé uma pedra solta para fora da minha frente.' }, // NOVO
        { se: (st) => st.escolhas.atencao === 'nuuk', t: 'Ele pisou nas mesmas duas marcas da ida.' }, // NOVO (eco: o que Aheryn percebeu)
        { se: (st) => st.aug <= -1 && !st.f.pulou_gromm, t: 'No caminho, ele manteve mais distância entre nós dois do que na ida.' }, // NOVO
        { se: (st) => st.aug <= -1 && st.f.pulou_gromm, t: 'No caminho, ele manteve mais distância entre nós dois do que antes.' }, // NOVO
        { se: (st) => perfil(st) >= 2, t: 'No túnel, andei mais perto dele do que costumo andar de alguém.' }, // NOVO
        { se: (st) => perfil(st) <= -2, t: 'Nuuk caminhava à minha frente, e eu atrás, contando os passos dele.' }, // NOVO
        { se: (st) => quieto(st), t: 'Na volta não pensei em nada. Era o mais seguro.' }, // NOVO v21 (quieto)
        { se: (st) => medido(st) && !st.f.pulou_gromm, t: 'Na volta, o sangue de Gromm ficou comigo mais tempo do que eu queria.' }, // NOVO v21 (medido)
        { se: (st) => aceso(st) && !st.f.pulou_gromm, t: 'Um gigante que derruba mamutes não sangra por causa de uma barriga. Alguma coisa tinha entrado no Glaciar Oco e saído em pedaços, e eu não parava de pensar no que podia ser.' }, // NOVO v21 (aceso)
        { se: (st) => perfil(st) > -2 && perfil(st) < 2 && st.f.pulou_gromm, t: 'Pensei em perguntar de novo sobre Gromm, mas Nuuk andava rápido demais para perguntas.' }, // NOVO
      ], fimDeParte: true },

    // NOVO v20: a mentira de Nuuk ("SUJEIRA"). Insistir ou deixá-la em pé.
    { id: 'c-sujeira', se: (st) => !st.f.pulou_gromm, zona: 'tunel', fundo: { img: 'assets/images/tunel-aheryn.jpg', kb: 'in', dim: .42, foco: '40% 35%', lado: 'dir', clima: 'cristais' },
      texto: ['Na metade do caminho o túnel se alargou, e Nuuk diminuiu o passo.'],
      escolha: { id: 'sujeira', pergunta: 'O que Aheryn diz?', opcoes: [
        { id: 'insistir', txt: '“Aquilo no chão não era sujeira, Nuuk.”', rs: 'Insistiu na pergunta.', flag: 'insistiu',
          resultado: ['— Aquilo no chão não era sujeira, Nuuk.', '— SUJEIRA.', 'Disse mais alto da segunda vez, e mais rápido, e olhou para a parede do túnel em vez de olhar para mim. Os Aug mentem mal.'] },
        { id: 'bronze', txt: '“Bronze não suja, Nuuk. Bronze quebra.”', luzMin: 60, rs: 'Disse a Nuuk o que o bronze era.', flag: 'bronzeQuebra',
          resultado: ['— Bronze não suja, Nuuk. Bronze quebra.', 'Nuuk parou e olhou direto para mim pela primeira vez desde o aposento. Depois voltou a andar, sem responder.'] }, // NOVO v21 (só o Aheryn aceso)
        { eixo: 'perto', id: 'deixar', txt: 'Deixar a mentira dele em pé.', rs: 'Deixou a mentira em pé.', aug: 1, aviso: 'Nuuk vai lembrar disso.',
          resultado: ['Não perguntei mais. Se Nuuk queria que fosse sujeira, que fosse. Ele andou o resto do caminho mais devagar, ao meu lado.'] },
      ] } },

    { id: 'volta-tuneis', zona: 'tunel', se: (st) => st.f.examinou_bronze, fundo: { clip: 'assets/clip/tunel.mp4', img: 'assets/images/seguindo-nuuk.jpg', dim: .45, clima: 'cristais' },
      narracao: 'assets/audio/voz/tuneis.mp3', narracaoLang: 'en',
      texto: ['Na volta pelos túneis ouvi cada passo de Nuuk e cada pingo de água, e senti que havia algo errado. Não era paranoia.'] }, // NOVO

    // ===================================================== III · O DESTILADO
    { id: 'parte-III', parte: 'III', zona: 'glaciar', fundo: { img: 'assets/images/destilaria.jpg', kb: 'in', dim: .62, clima: 'cristais' },
      cartao: { num: 'III', nome: 'O Destilado', epigrafe: 'Todo povo que vive no frio inventa um jeito de esquecer.', fonte: 'provérbio do sul' } }, // NOVO (epígrafe)

    { id: 'p19', zona: 'glaciar', fundo: { img: 'assets/images/destilaria.jpg', kb: 'in', dim: .4, foco: '40% 60%', lado: 'dir', clima: 'cristais' },
      narracao: 'assets/audio/narration/line3.mp3', narracaoLang: 'en', capitular: true,
      texto: [
        'O gigante me levou até onde armazenam o destilado. A vista sempre me faz repensar meu hábito de beber, mas é necessário quando se é alguém que não pode pensar como eu:',
        'Basicamente eles arrancam uma raiz doce do gelo, mastigam até virar pasta e cospem em uma tina de madeira. Em seguida, guardam a tina perto das fendas quentes por uma semana. A mistura borbulha e vira um líquido aguado.',
        { se: (st) => st.escolhas.atencao === 'cheiro', t: 'O cheiro doce dos túneis vinha dali.' }, // NOVO (eco: o que Aheryn percebeu)
      ],
      pensa: [{ id: 'destilaria', t: 'A última vez que pensei sem medo, havia uma cidade inteira acesa comigo.', mais: 'As veias do meu pulso acenderam por baixo da manga, e Nuuk olhou para elas.', luz: 3, atraso: 6500 }], // NOVO v20
      },

    { id: 'p20', zona: 'glaciar', fundo: { img: 'assets/images/destilaria-osso.jpg', kb: 'out', dim: .45, foco: '40% 60%', lado: 'dir', clima: 'cristais' },
      texto: [
        'Colocam o líquido dentro de um osso oco de baleia, tampam e aquecem no vapor do gêiser. O vapor do álcool sobe, passa por um tubo de tripa de algum animal grande, que na ocasião não procurei identificar nem perguntar, e pinga do outro lado, pronto. Aí chega a parte mais nojenta: eles esvaziam a bexiga de outro animal gigante marinho, lavam com neve e costuram a abertura com tendões. Despejam o líquido lá dentro e dão um nó na entrada.',
        'Abri a mochila e tirei os frascos, o suficiente para um ano de bebida. Daquela vez, a bexiga não me revirou o estômago.',
        { se: (st) => st.f.deuPinguins, t: 'Nuuk me deu menos destilado do que nos outros invernos. Os pinguins que ficaram com os caçadores faltaram para o resto. Cada frasco ia ter de durar mais do que um mês.' }, // NOVO v22
        { se: (st) => quieto(st), t: 'Enchi os frascos. O cheiro subiu e eu não deixei que levasse nada junto.' }, // NOVO v21 (quieto)
        { se: (st) => medido(st) && !st.f.deuPinguins, t: 'Enchi os frascos devagar. Doze, um por lua, como sempre.' },
        { se: (st) => medido(st) && st.f.deuPinguins, t: 'Enchi os frascos devagar, contando cada um.' }, // NOVO v21 (medido)
        { se: (st) => aceso(st), t: 'Enchi os frascos pensando que os Lúmae teriam feito disso uma ciência: a raiz certa, o tempo certo, um tratado sobre a melhor maneira de esquecer.' }, // NOVO v21 (aceso)
      ],
      // v29: a pergunta a Nuuk fica visível desde o início (antes era um "…" que só surgia se o leitor esperasse, e falava em vez de calar)
      escolha: { id: 'destilaria', pergunta: 'O que Aheryn diz?', opcoes: [
        { eixo: 'perto', id: 'fala', txt: '“Nuuk. Gromm vai ficar bem?”', rs: 'Perguntou a Nuuk por Gromm.',
          resultado: ['— Nuuk. Gromm vai ficar bem?', '— GROMM AINDA TAR MAL.', 'Enchi o último frasco. Ele esperou eu terminar.'] },
        { eixo: 'longe', id: 'cala', txt: '…', silencio: true, rs: 'Ficou em silêncio com Nuuk.' },
      ] },
      fimDeParte: true },

    // NOVO v20: se a relação ficou boa, Nuuk acompanha o Aheryn até a saída
    { id: 'boca-glaciar', se: (st) => st.aug >= 1, zona: 'glaciar', fundo: { img: 'assets/images/boca-glaciar.jpg', kb: 'out', dim: .42, foco: '60% 55%', clima: 'neve' },
      texto: [
        'Na saída, Nuuk veio comigo até a boca do Glaciar, mais longe do que costumava vir.',
        '— PEQUENINO VOLTAR.',
        'Do alto da encosta olhei para trás. Ele ainda estava lá, parado na boca do Glaciar, do tamanho de uma pedra.',
      ] },

    // ===================================================== IV · A CABANA
    { id: 'parte-IV', parte: 'IV', zona: 'cabana-dentro', fundo: { img: 'assets/images/cabana-noite.jpg', kb: 'in', dim: .62, clima: 'brasas' },
      cartao: { num: 'IV', nome: 'A Cabana', epigrafe: 'Sæl’orin vethas, dumael corvethune.', fonte: 'louvor Lúmae, primeiro verso' } }, // NOVO (epígrafe)

    { id: 'p21', pensa: [{ id: 'noites', luzMin: 60, t: 'Quantas noites como esta cabem num século?', mais: 'Fiz a conta sem querer. Trinta e seis mil e quinhentas, mais ou menos. Passei quase todas olhando para um fogo ou outro.', luz: 3, atraso: 3200 }], estado: 'seco', ecos: [{ som: 'gelo3', ms: 5200 }, { som: 'gelo3', ms: 15500 }], zona: 'cabana-dentro', fundo: { img: 'assets/images/cabana-noite.jpg', kb: 'in', dim: .38, foco: '50% 35%', desloca: .16, clima: 'brasas' },
      capitular: true,
      texto: [
        'Voltei à cabana com os frascos cheios e a noite em cima do telhado.', // ALTERADO
        { se: (st) => st.f.matouCacadores, t: 'Na volta passei pelo lugar. A neve já tinha coberto metade dele. Não parei.' }, // NOVO v25
        { se: (st) => st.escolhas.cacadores === 'gelo', t: 'Na volta, o muro de gelo ainda estava de pé, torto, com a seta partida no pé dele.' }, // NOVO v25
        { se: (st) => st.f.naoVisto, t: 'Na volta, as pegadas deles cortavam as minhas na crista. Três pares, e nenhum tinha descido.' }, // NOVO v25
        { se: (st) => st.escolhas.destilaria === 'cala', t: 'Não tinha dito uma palavra a Nuuk desde os túneis. Alguns anos passam assim.' }, // NOVO
        { se: (st) => st.f.matouCacadores, t: 'Tentei não pensar no homem da besta, e passei a noite nisso.' }, // NOVO v22
        { se: (st) => st.f.feridoBesta, t: 'Tirei a camisa com cuidado. O furo da seta tinha fechado por fora e continuava aberto por dentro.' }, // NOVO v22
        { se: (st) => st.luz <= 30, t: 'Quando os Lúmae ainda se reuniam para… Não. Não pensar nisso.' }, // NOVO
        { se: (st) => st.luz > 30 && st.luz < 60, t: 'Quando os Lúmae ainda se reuniam para me ouvir, eu contava o que tinha visto, e não pensei no resto.' }, // NOVO
        { se: (st) => st.luz >= 60, t: 'Quando os Lúmae ainda se reuniam para me ouvir, eu contava o que tinha visto do outro lado do que se vê, e eles vinham ver também, todos.' }, // NOVO
      ],
      escolha: { id: 'ritual', pergunta: 'Antes de beber, o que Aheryn faz?', opcoes: [
        { eixo: 'perto', id: 'janela', txt: 'Olhar pela janela, para o norte.', luz: 3, flag: 'olhouNorte',
          resultado: ['Nada no norte. Só o branco, e o costume de olhar para ele.'] }, // NOVO
        { id: 'fogo', txt: 'Pôr lenha no fogo.', flag: 'fogo',
          resultado: ['Pus duas achas no fogo. Madeira de Frígia, que chegou até aqui em troca de pinguins.'] }, // NOVO
        { eixo: 'longe', id: 'frasco', txt: 'Abrir o frasco antes de tirar as luvas.', luz: -3, flag: 'frasco',
          resultado: ['Abri o frasco antes de tirar as luvas, e o primeiro gole veio com gosto de couro.'] }, // NOVO
      ] } },

    { id: 'mg-goles', estado: 'bebendo', zona: 'cabana-dentro', fundo: { clip: 'assets/clip/bebendo.mp4', img: 'assets/images/cabana-noite.jpg', dim: .42, foco: '50% 35%', desloca: .16, clima: 'brasas' },
      texto: [],
      minijogo: 'goles' },

    { id: 'c-hino', estado: 'bebado', trai: { atraso: 1200 }, titulo: { nivel: 3, atraso: 1600 }, zona: 'cabana-dentro', fundo: { img: 'assets/images/cabana-noite-luz.jpg', kb: 'in', dim: .38, foco: '50% 35%', desloca: .16, clima: 'brasas' },
      texto: [
        { se: (st) => !st.f.deuPinguins && (!st.guardados || st.guardados.length === 0), t: 'Ao quinto gole, ou ao sexto, sobrava um único pensamento. O Título.' }, // v24
        { se: (st) => st.f.deuPinguins && (!st.guardados || st.guardados.length === 0), t: 'No quarto gole parei, como tinha prometido a mim mesmo, e sobrava um único pensamento. O Título.' }, // NOVO
        { se: (st) => !st.f.deuPinguins && (st.guardados && st.guardados.length === 1), t: 'Ao quinto gole, ou ao sexto, quase tudo tinha ido embora. Sobrou o Título, e sobrou mais uma coisa, que não bebi até apagar.' }, // v24
        { se: (st) => st.f.deuPinguins && (st.guardados && st.guardados.length === 1), t: 'No quarto gole parei, como tinha prometido a mim mesmo, e quase tudo tinha ido embora. Sobrou o Título, e sobrou mais uma coisa, que não bebi até apagar.' }, // NOVO
        { se: (st) => st.guardados && st.guardados.length >= 2, t: 'Parei antes do fim. Ficaram o Título e mais algumas coisas que não tive coragem de afogar.' }, // NOVO
        'Título que me deram quando eu era o orgulho de um povo inteiro, quando a minha gente se reunia para me ouvir, quando ser eu era uma coisa boa de ser. Fizeram de mim uma canção. Uma criatura, no auge, recebe canções, e eu recebi a minha, e ela era bonita.',
        'E eu, bêbado, sozinho, na companhia espiritual da Mãe do Inverno, fiz a única coisa que faço quando a luz dentro de mim se recusa a apagar: cantei.',
      ],
      escolha: { id: 'hino', opcoes: [
        { eixo: 'longe', id: 'dentro', txt: 'Cantar para dentro, quase sem voz.', luz: 6,
          resultado: ['Cantei com a boca quase fechada, a melodia presa entre os dentes. A luz subiu até o pescoço e parou ali.'] }, // NOVO
        { eixo: 'perto', id: 'frestas', txt: 'Deixar a luz vazar pelas frestas da cabana.', luz: 20, aviso: 'A luz saiu pelas frestas.',
          resultado: ['Abri a boca e a garganta junto. A luz passou do peito para os braços, dos braços para as paredes, e as frestas entre as tábuas desenharam na neve lá fora linhas finas de ouro.'] }, // NOVO
      ] } },

    { id: 'hino', zona: 'cabana-dentro', fundo: { clip: 'assets/clip/cantando.mp4', img: 'assets/images/rosto-veias.jpg', dim: .35, foco: '50% 35%', lado: 'dir', desloca: -.16, clima: 'brasas' },
      musica: 'assets/audio/hino.mp3',
      louvor: { src: 'assets/audio/hino/louvor.mp3', marcas: [0, 3.6, 6.8, 9.9, 13.8, 17.1] },
      vozes: ['assets/audio/hino/verso1.mp3', 'assets/audio/hino/verso2.mp3', 'assets/audio/hino/verso3.mp3', 'assets/audio/hino/verso4.mp3', 'assets/audio/hino/verso5.mp3', 'assets/audio/hino/verso6.mp3'],
      cantarSob: 'next', // NOVO: só começa a cantar quando o leitor clicar em Próxima
      letraSe: (st) => st.escolhas.hino === 'frestas', // NOVO: as estrofes só existem pra quem canta alto
      texto: [
        { se: (st) => st.escolhas.hino !== 'frestas', t: 'Cantei baixo, na língua que ninguém mais no mundo fala, a língua que morreu na boca dos que a falavam comigo. Um louvor a um homem que viu mais longe do que qualquer um do seu povo jamais vira, que olhou para onde não se deve olhar e voltou inteiro, e ensinou os outros a olhar.' },
        { se: (st) => st.escolhas.hino === 'frestas', t: 'Cantei na língua que ninguém mais no mundo fala, a língua que morreu na boca dos que a falavam comigo. Um louvor a um homem que viu mais longe do que qualquer um do seu povo jamais vira, que olhou para onde não se deve olhar e voltou inteiro, e ensinou os outros a olhar.' }, // ALTERADO (quem cantou alto)
        { se: (st) => st.escolhas.hino === 'frestas', t: 'A melodia subia e o meu peito subia com ela, e a luz subiu também, e dessa vez eu deixei. Deixei brilhar, uma noite, porque em cem léguas não há quem fareje um velho cantando para si mesmo.' }, // NOVO
        { se: (st) => st.escolhas.hino !== 'frestas', t: 'A melodia subia, mas eu a mantive baixa. A luz não passou dos pulsos. Cantei até o último verso como se pensa uma coisa proibida: por dentro, quase sem som.' }, // NOVO
      ],
      letra: [
        ['Sæl’orin vethas, dumael corvethune', 'luz que caminha, sob o peso do silêncio'],
        ['Yr’onai selu, tharennis vael-korei', 'nós fomos o nome, agora somos a névoa'],
        ['Aeth-vorunda, sæl’aeth mor’ilenne', 'ele viu mais longe, ele voltou inteiro'],
        ['Dumael, dumael, corvethune sæl’orin', 'silêncio, silêncio, sob o peso da luz'],
        ['Yr’onai selu, thariel, thariel', 'nós fomos o nome, chorai, chorai'],
        ['Vael-korei sæl’aeth, mor’ilenne vorunda', 'a névoa é luz, o inteiro é distância'],
      ] },

    { id: 'p25', zona: 'cabana', fundo: (st) => (st.escolhas.hino === 'frestas' ? { clip: 'assets/clip/frestas.mp4', img: 'assets/images/frestas.jpg', dim: .35, foco: '40% 50%', lado: 'dir', clima: 'neve' } : { img: 'assets/images/noite-frasco.jpg', kb: 'in', dim: .45, foco: '35% 45%', lado: 'dir' }), musicaSai: true,
      texto: [
        'Cantei o louvor até o fim, cada verso que me chamava de grande.',
        'Do lado de fora da cabana, o céu começava a clarear sem entusiasmo, como faz no inverno.',
        { se: (st) => st.f.fogo, t: 'O fogo tinha virado brasa e ainda esquentava o chão perto da mesa.' }, // NOVO
        { se: (st) => st.f.frasco, t: 'O frasco estava vazio sobre a mesa. Não lembrava de tê-lo terminado.' }, // NOVO
        { se: (st) => quieto(st), t: 'Lavei o rosto na bacia e esperei a luz da pele sumir antes que a do céu chegasse.' }, // NOVO v21 (quieto)
        { se: (st) => medido(st), t: 'Fiquei sentado até o céu clarear de todo. A garganta guardava a melodia.' }, // NOVO v21 (medido)
        { se: (st) => aceso(st), t: 'Nas Cidades-Espelho, cantar o louvor ao amanhecer era costume, e todo mundo acordava ouvindo o que eu tinha feito. Agora acordava só eu, e era a última coisa que eu queria ouvir.' }, // NOVO v21 (aceso)
      ], fimDeParte: true },

    // ===================================================== V · OS TACETS
    { id: 'parte-V', estado: 'ressaca', parte: 'V', zona: 'tacets', fundo: { img: 'assets/images/tacets-neve.jpg', kb: 'in', dim: .62, clima: 'neve' },
      cartao: { num: 'V', nome: 'Os Tacets', epigrafe: 'Fizemos o que não se cansa, para não termos de nos cansar.', fonte: 'inscrição Lúmae, meio apagada, numa placa de bronze' } }, // NOVO (epígrafe)

    { id: 'p26', zona: 'tacets', fundo: (st) => ({ img: st.luz >= 50 ? 'assets/images/amanhecer-luz.jpg' : 'assets/images/amanhecer.jpg', kb: 'in', dim: .38, foco: '70% 50%', clima: 'neve-leve' }),
      narracao: 'assets/audio/narration/line5.mp3', narracaoLang: 'en', capitular: true,
      texto: [
        'Senti-os antes de os ouvir, e ouvi-os muito antes do que qualquer outro os ouviria.',
        'Foi pela manhã, estava de cócoras recolhendo a água do degelo quando a terra mudou de assunto sob os meus pés. Não era ela. O passo dela eu conhecia, vasto, artístico e frio. Isto era outra coisa. Pequeno. Regular. Pesado de um jeito que a vida não é: a vida pisa torto, descansa, hesita. Aquilo vinha em compasso, metal e pedra mordendo o chão gelado, um estalo seco e outro e outro, todos iguais.',
        { se: (st) => st.f.olhouNorte, t: 'Olhei primeiro para o norte, como na noite anterior. Não era de lá que vinha.' }, // NOVO
      ] },

    { id: 'p27', estado: 'alerta', conter: { mostra: 1 }, zona: 'tacets', fundo: { img: 'assets/images/tacets-neve.jpg', kb: 'in', dim: .4, foco: '60% 50%', clima: 'neve' }, passos: true,
      texto: [
        'Pousei a concha. Fiquei muito quieto, com a planta dos pés colada à terra, contando. Tacets.',
        'Três. Vinham três.',
        { se: (st) => !st.f.leu_tacets, t: 'E eu soube o que eram antes de subir ao alto e vê-los recortados contra a neve, porque o compasso daquilo estava gravado em mim mais fundo do que a língua morta, mais fundo que a canção. Eram obra da minha gente. Criamos os Tacets séculos atrás, construídos à base de bronze e magia para nos ajudar nos serviços braçais. Hoje eles vivem por conta própria porque nenhum Lúmae existe mais. Exceto um.' },
        { se: (st) => st.f.leu_tacets, t: 'E eu soube o que eram antes de subir ao alto e vê-los recortados contra a neve, porque o compasso daquilo estava gravado em mim mais fundo do que a língua morta, mais fundo que a canção. Eram obra da minha gente. Hoje eles vivem por conta própria porque nenhum Lúmae existe mais. Exceto um.' }, // ALTERADO (quem leu o diário já sabe o resto)
        { se: (st) => st.f.examinou_bronze && !st.f.leu_tacets, t: 'Bronze. Outra vez.' }, // NOVO
      ] },

    { id: 'tacets-eco', zona: 'tacets', se: (st) => st.f.leu_tacets, fundo: { img: 'assets/images/tacets-neve.jpg', kb: 'in', dim: .4, foco: '60% 50%', clima: 'neve' }, passos: true,
      narracao: (st) => 'assets/audio/voz/' + (st.f.examinou_bronze ? 'tres-tempos-glaciar' : 'tres-tempos') + '.mp3', narracaoLang: 'en',
      texto: [
        { se: (st) => !st.f.examinou_bronze, t: 'Compasso de três, em repouso. Estão me procurando.' }, // NOVO
        { se: (st) => st.f.examinou_bronze, t: 'Compasso de três, em repouso. Estão me procurando desde o Glaciar Oco…' }, // NOVO
      ] },

    { id: 'c-proibido', trai: { atraso: 2600 }, zona: 'tacets', fundo: { img: 'assets/images/tacets-perto.jpg', kb: 'in', dim: .4, foco: '55% 30%', clima: 'neve' }, passos: true,
      texto: [
        'O primeiro me viu.',
        'A cabeça lisa se virou, sem olhos, e os pontos de luz na face se acenderam um tom acima, e o compasso quebrou, quebrou pela primeira vez, de três para quatro, mais rápido, porque a coisa tinha um alvo agora e o alvo era eu. Os outros dois se viraram juntos. E aqui é onde um homem corajoso teria agido, feito o que eu sei fazer, o que me valeu uma canção: tocar o que é proibido e desfazer aqueles três num gesto, como quem apaga três contas de um ábaco.',
      ],
      escolha: { id: 'proibido', urgente: true, revelar: true, janela: 5.3, som: 'decisao', padrao: 'recusar', opcoes: [
        { id: 'tocar', txt: 'Tocar o que é proibido.', rs: 'Quase tocou o proibido. A visão segurou a mão.', luz: 15, flag: 'hesitou', travaSe: (st) => st.f.afogouMagia, travaTxt: 'Afoguei isso ontem à noite.' },
        { id: 'recusar', txt: 'Recusar.', rs: 'Recusou o proibido.', luz: 2 },
      ] } },

    { id: 'visao', zona: 'tacets', som: 'assets/audio/sfx/visao.mp3', se: (st) => st.escolhas.proibido === 'tocar', fundo: { img: 'assets/images/rosto-veias.jpg', kb: 'in', dim: .35, tint: 'visao', foco: '40% 35%', lado: 'dir' },
      texto: [
        'A mão já subia quando vi. O bronze virando cinza no vento. A cinza chegando ao sul antes de mim, em boca de viajante, em aviso de mercador. Trinta Tacets no ano seguinte. Trezentos caçadores depois deles. Uma cabana nova em outra neve, e a mesma soleira, e a mesma espera.', // NOVO
        'A mão parou no ar.', // NOVO
      ] },

    { id: 'p30', zona: 'tacets', fundo: { img: 'assets/images/olhos-fechados.jpg', kb: 'out', dim: .45, foco: '40% 35%', lado: 'dir' }, passos: true,
      texto: [
        'Pensei nisso. Por meio segundo, pensei.',
        { se: (st) => st.escolhas.proibido !== 'tocar' && st.f.afogouMagia, t: 'Foi o tempo de a luz me subir pela garganta e não encontrar nada para fazer lá em cima. Havia uma porta que eu conhecia, e a noite anterior tinha levado a chave.' }, // NOVO v22
        { se: (st) => st.escolhas.proibido !== 'tocar' && !st.f.afogouMagia, t: 'Foi o tempo de a luz me subir pela garganta, oferecida, a magia grande dizendo: usa-me, é para isto que serves, é isto que tu és, e foi o tempo de eu a recusar. Porque o ciclo se repetiria: eu usaria a magia, o bronze viraria cinza, e eu teria de partir outra vez, sei lá para onde.' },
        { se: (st) => st.escolhas.proibido === 'tocar', t: 'Foi o tempo de a luz me subir pela garganta, oferecida, a magia grande dizendo: usa-me, é para isto que serves, é isto que tu és, e foi o tempo de eu a recusar.' }, // ALTERADO (a visão já mostrou o resto)
        { se: (st) => !st.f.afogouGelunah, t: 'Mas em seguida me veio o olhar de Gelunah, na manhã anterior. Era uma despedida. De algum modo ela sabia, e eu não queria continuar ali, atraindo problemas para o jardim de gelo dela.' },
        { se: (st) => st.f.afogouGelunah, t: 'Mas em seguida me veio um frio que eu conhecia de algum lugar, um frio com olhos. Não consegui lembrar de quem. Só sabia que não queria atrair problemas para aquele gelo.' }, // NOVO v22
        { se: (st) => st.f.hesitou, t: 'Fiquei com as mãos abertas mais tempo do que precisava, sentindo o resto do calor que quase tinha virado luz.' }, // NOVO
        { se: (st) => quieto(st), t: 'Fechei as mãos.' }, // NOVO v21 (quieto)
        { se: (st) => medido(st), t: 'Fechei as mãos, e o calor ficou preso dentro delas.' }, // NOVO v21 (medido)
        { se: (st) => aceso(st), t: 'A magia grande nunca insistiu. Oferecia-se e esperava. Cem anos recusando, e ela ainda falava comigo como na primeira vez.' }, // NOVO v21 (aceso)
      ] },

    { id: 'jogo', zona: 'tacets', fundo: { clip: 'assets/clip/maos-gelo-v2.mp4', img: 'assets/images/maos-gelo.jpg', dim: .35, foco: '62% 55%', clima: 'neve' },
      texto: [
        'Pus a mão no chão, no chão dela, no frio dela. Meu corpo brilhou e pedi ao gelo, e o gelo me fez a cortesia de obedecer.',
      ],
      minijogo: 'hino-do-gelo' },

    { id: 'marca', zona: 'tacets', se: (st) => st.jogo && !st.jogo.won, som: 'assets/audio/sfx/visao.mp3',
      fundo: { img: 'assets/images/marca.jpg', kb: 'in', dim: .45, foco: '50% 45%', tint: 'visao', clima: 'neve' },
      texto: [
        'O primeiro chegou antes do gelo.', // NOVO
        'A mão de bronze fechou no meu antebraço, fria como a coisa que era, e pela primeira vez na vida senti a luz ser puxada para fora de mim em vez de subir. Então o chão respondeu.', // NOVO
      ], efeito: { luz: -10, flag: 'marcado' } },

    { id: 'v-fenda', falas: [{ n: (st) => (st.luz >= 60 ? 'fenda-2' : 'fenda-1'), ms: 2600 }], zona: 'tacets', fundo: { video: 'assets/video/tacets-ice-v2.mp4', clima: 'neve' }, cena: 'assets/video/tacets-ice-v2.mp4', som: 'assets/audio/gelo-quebrando.mp3',
      texto: [
        'A crosta sob os três Tacets se abriu.',
        'Não com fúria, com lógica. Uma fenda reta, limpa, geométrica, do jeito que a minha gente gostava das coisas, e os três caíram pelo rasgo na água escura por baixo, o compasso virando estrondo, e depois nada.',
        { se: (st) => st.escolhas.atencao === 'gelo', t: 'Por baixo da crosta, as mesmas camadas que eu tinha contado no Glaciar, escuras até onde a vista ia.' }, // NOVO (eco: o que Aheryn percebeu)
        { se: (st) => st.gelunah >= 1, t: 'Por um instante, tive certeza de que não era só o meu pedido que o gelo estava atendendo.' }, // NOVO
        { se: (st) => quieto(st), t: 'Fiquei olhando a água fechar.' }, // NOVO v21 (quieto)
        { se: (st) => medido(st), t: 'A água fechou devagar sobre o rasgo, e o gelo voltou a ser só gelo.' }, // NOVO v21 (medido)
        { se: (st) => aceso(st), t: 'Tive orgulho dela, e me lembrei de que foi esse mesmo orgulho que nos matou.' }, // NOVO v21 (aceso)
      ] },

    { id: 'p33', estado: 'seco', zona: 'tacets', fundo: { img: 'assets/images/queda-2.jpg', kb: 'in', dim: .35, foco: '45% 40%', lado: 'dir', clima: 'neve' },
      texto: [
        { se: (st) => st.jogo && st.jogo.won && st.jogo.time <= 75, t: 'Foi rápido. Rápido o bastante para o terceiro não terminar o passo que dava.' }, // NOVO
        { se: (st) => st.jogo && st.jogo.won && st.jogo.time > 75, t: 'Demorou. Quando o gelo cedeu, o primeiro estava perto o bastante para eu ouvir o bronze ranger nas juntas.' }, // NOVO
        'Não os destruí. Bronze daqueles não se afoga; vão andar pelo fundo, cegos, e um dia subir por uma margem qualquer e recomeçar o compasso.',
        { se: (st) => st.jogo && st.jogo.won && st.luz >= 70, t: 'O gelo obedeceu a tempo. Mas a luz tinha subido alto demais, e o que sobe alto demais se vê de longe.' }, // NOVO
        { se: (st) => !st.f.pulou_gromm, t: 'Foi então que pensei em Gromm: nos cacos de bronze espalhados pelo chão do seu aposento, no sangue, na pedra que ele me jogou. Três Tacets não fazem tanto estrago. Deviam ser trinta, ou perto disso, e talvez o líder Aug os tivesse enfrentado antes que chegassem a mim. Nunca saberia ao certo. Desejei, sem poder dizer isso a ninguém, que ele estivesse melhor.' },
        { se: (st) => st.f.pulou_gromm, t: 'Foi então que pensei no Glaciar, que ficava no caminho deles. Pensei em Gromm, que eu não tinha visto, e no mal-estar que Nuuk nunca explicou. Os Aug têm dois estômagos e uma digestão incrível, e preferi acreditar que era só isso. Desejei, sem poder dizer isso a ninguém, que ele estivesse melhor.' }, // NOVO
        { se: (st) => st.aug >= 1, t: 'Pensei em Nuuk também, que na noite anterior tirara uma pedra do meu caminho sem se virar.' }, // NOVO
        { se: (st) => st.f.leuNuuk, t: 'O medo nos pés de Nuuk, na soleira do aposento, não era de Gromm.' }, // NOVO v20
        { se: (st) => st.f.culpaMinha, t: 'Eu tinha tomado para mim a culpa de entrar no aposento dele. A dívida corria no sentido contrário.' }, // NOVO v20
        { se: (st) => st.f.culpaNuuk, t: 'E eu tinha posto em Nuuk a culpa de me levar até lá.' }, // NOVO v20
        { se: (st) => st.f.insistiu, t: 'Sujeira, Nuuk tinha dito. Duas vezes, porque eu perguntei duas vezes.' }, // NOVO v20
        { se: (st) => st.f.matouCacadores, t: 'Na véspera, um homem de Frígia tinha morrido na minha espada por causa de pinguins. Os três Tacets, que vinham me matar, estavam inteiros no fundo da água. Não soube dizer qual das duas coisas pesava mais.' }, // NOVO v22
        { se: (st) => st.f.bronzeQuebra, t: 'Bronze não suja, eu tinha dito a Nuuk. Bronze quebra. Quebra quando alguém do tamanho de Gromm decide quebrá-lo.' }, // NOVO v21
        { se: (st) => st.f.deduziu, t: 'Eu mesmo tinha dito a Nuuk que os Aug digerem pedra.' }, // NOVO v21
        { se: (st) => st.f.magiaGromm, t: 'E Gromm tinha visto a luz. Os Aug não costumam contar o que veem.' }, // NOVO
        { se: (st) => st.f.examinou_bronze, t: 'Eu tivera um daqueles cacos na mão, e tudo o que fiz foi perguntar o que bronze fazia num lugar sem forja.' }, // NOVO
      ] },

    { id: 'despedida', falas: [{ n: 'despedida-calar', ms: 2600 }], zona: 'cabana-amanhecer', fundo: { img: 'assets/images/cabana-amanhecer.jpg', kb: 'in', dim: .4, foco: '50% 45%', lado: 'dir' },
      texto: [
        'Entrei. Como sempre, a luz do amanhecer fazia da cabana uma coisa menor. Pus na mochila o que cabe numa mochila quando se faz isto há um século: pouco. O álcool. Sobrava decidir o resto.', // ALTERADO
      ],
      minijogo: 'despedida',
      explorar: {
        img: 'assets/images/cabana-amanhecer.jpg', proporcao: 1672 / 941, porta: 'Partir',
        pontos: [
          { id: 'diario', rotulo: 'O diário', x: 53, y: 53.5, w: 8, h: 7.5, tipo: 'diario-despedida' },
          { id: 'tabua', x: 25.5, y: 73, w: 6, h: 7, tipo: 'pedra-despedida', oculto: (st) => !st.f.viu_pedra && !st.f.dicaPedra, opcional: true },
        ],
      } },

    { id: 'p34', zona: 'borda', fundo: { img: 'assets/images/soleira.jpg', kb: 'out', dim: .4, foco: '72% 45%', clima: 'neve' },
      texto: [
        'Voltei à soleira uma última vez.',
        'A oeste, sob o gelo, o frio tinha um peso conhecido. Ela estava perto, ou estivera, ou estaria. Com ela os tempos do verbo nunca foram firmes. Não disse adeus. Não se diz adeus a uma vizinha que vai durar mil anos depois de a nossa estrada ter virado pó; seria pretensão minha. Apenas olhei o norte branco uma vez, demoradamente.',
        { se: (st) => st.gelunah >= 1, t: 'Por um instante, o vento virou de norte para oeste e voltou.' }, // NOVO
        { se: (st) => perfil(st) >= 2, t: 'Pensei em descer até o Glaciar e dizer a Nuuk que ia embora, mas os Aug não entenderiam para que serve isso.' }, // NOVO
        { se: (st) => quieto(st), t: 'Fechei a porta da cabana sem olhar para dentro.' }, // NOVO v21 (quieto)
        { se: (st) => medido(st), t: 'Olhei a cabana uma vez antes de fechar a porta. Pequena de propósito, como sempre.' }, // NOVO v21 (medido)
        { se: (st) => aceso(st), t: 'Cinquenta e seis riscos na viga, cinquenta e sete na memória. Um dos dois estava errado, e eu ia embora sem saber qual.' }, // NOVO v21 (aceso)
      ],
      pensa: [{ id: 'ficar', luzMin: 60, t: 'E se eu ficasse?', mais: 'Segurei a pergunta como se fosse uma pedra que valesse alguma coisa. Depois a larguei na neve.', luz: 3, atraso: 3600 }], // NOVO v21
      },

    { id: 'olho-norte', zona: 'borda', se: (st) => st.escolhas.joia === 'gelunah', fundo: { img: 'assets/images/olho-norte.jpg', kb: 'out', dim: .4, foco: '72% 45%', clima: 'neve' },
      narracao: 'assets/audio/voz/ergui-olho.mp3', narracaoLang: 'en',
      texto: ['Ergui o Olho de Gelunah contra o norte, talvez à procura dela. Não a vi para me despedir, mas me senti vigiado. Eu agradeci.'] }, // NOVO

    { id: 'p35', apagar: true, zona: 'borda', fundo: { img: 'assets/images/estrada-sul.jpg', kb: 'in', dim: .35, foco: '48% 45%', lado: 'dir', clima: 'neve-leve' },
      texto: [
        'Depois virei as costas ao frio e desci para o sul, onde o mundo era mais morno e mais cheio de gente, e portanto mais perigoso.',
        'Comecei a andar. À frente, a estrada; atrás, mais um lugar onde estive e que não foi meu. Pelo caminho, sem pressa, fui apagando a luz, uma linha de cada vez, e ensaiando o rosto seguinte, o de um homem velho e sem história, sobre quem ninguém mais cantaria.',
        { se: (st) => st.f.marcado, t: 'No antebraço, onde o bronze fechou, a pele ficou lisa e fria, sem veia nenhuma. A luz passava por ali e não acendia.' }, // NOVO
        { se: (st) => st.luz >= 70, t: 'Levou mais tempo do que das outras vezes. A última linha só apagou quando a Borda já não aparecia atrás de mim.' }, // NOVO
        { se: (st) => st.luz <= 30, t: 'Não levou tempo nenhum. Quase nada tinha acendido.' }, // NOVO
        { se: (st) => st.luz > 30 && st.luz < 70, t: 'Levou o tempo de sempre.' }, // NOVO
        { se: (st) => st.guardados && st.guardados.length === 0, t: 'Não sobrou nenhuma outra memória acesa além do Título. Achei que doeria mais.' }, // NOVO
        { se: (st) => st.guardados && st.guardados.length > 0, t: 'Alguma coisa, além do Título, continuava acesa em mim. Não tentei apagar.' }, // NOVO
        { se: (st) => st.escolhas.joia === 'misterio', t: 'Passei a mão no bolso duas vezes antes do meio-dia, para ver se a pedra ainda estava lá. Estava.' }, // NOVO
        { se: (st) => st.escolhas.joia === 'valer', t: 'Passei a mão no bolso duas vezes antes do meio-dia, para ver se a Pedra da Borda ainda estava lá. Estava.' }, // NOVO
        { se: (st) => st.escolhas.joia === 'gelunah', t: 'Passei a mão no bolso duas vezes antes do meio-dia, para ver se o Olho de Gelunah ainda estava lá. Estava.' }, // NOVO
        { se: (st) => st.escolhas.joia === 'cor', t: 'Passei a mão no bolso duas vezes antes do meio-dia, para ver se a pedra azul ainda estava lá. Estava. A cor me lembrava de alguma coisa que eu não alcançava.' }, // NOVO v22
        { se: (st) => st.f.feridoBesta, t: 'O ombro direito, onde a seta de Frígia entrou, latejava no frio a cada passo.' }, // NOVO v22
        { se: (st) => st.f.matouCacadores, t: 'O homem da besta continuava na neve, em algum lugar atrás de mim. Frígia não ia mandar buscá-lo antes da primavera.' }, // v24
        { se: (st) => st.f.viramLuz, t: 'Em algum lugar ao sul, numa taverna de Frígia, talvez três caçadores já estivessem contando de um velho que acendia. A estrada que eu ia tomar passava por lá.' }, // NOVO v22
        { se: (st) => st.f.naoVisto && !(st.jogo && st.jogo.won && st.luz >= 70), t: 'Frígia não sabia que eu existia. Por mais um dia, isso ainda era verdade.' }, // NOVO v25
        { se: (st) => st.f.naoVisto && st.jogo && st.jogo.won && st.luz >= 70, t: 'No caminho do Glaciar, os caçadores de Frígia não tinham me visto. Mas a luz da fenda subiu alto demais, e alguém, de algum lugar, deve ter visto aquela.' }, // NOVO v25
        { se: (st) => st.f.deuComida, t: 'Pensei no garoto de Frígia segurando os pinguins contra o peito, e torci para que tivesse comido.' }, // NOVO v22
        { se: (st) => st.escolhas.diario === 'levar', t: 'O diário pesava no fundo da mochila mais do que o couro e o papel justificavam.' }, // NOVO
        { se: (st) => st.escolhas.diario === 'deixar', t: 'Da estrada dava para ver a chaminé até certa curva. Depois dela, ficaram para trás a cabana, o diário e a Borda do Mundo.' }, // NOVO
      ],
      fim: true },
  ],
};
