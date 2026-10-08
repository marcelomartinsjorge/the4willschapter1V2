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
window.perfil = (st) => ((st.perfil && st.perfil.perto) || 0) - ((st.perfil && st.perfil.longe) || 0);

window.LIVRO = {
  id: 'cap01',
  titulo: 'Aheryn',
  subtitulo: 'A Luz na Borda do Mundo',
  subtituloEn: 'The Light at the Edge of the World',
  capa: 'assets/images/capa.jpg',
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
      { id: 'noite', titulo: 'I. A Noite Luminosa', voz: 'noite-luminosa', texto: 'Na primeira noite de cada estação, nos reuníamos ao pôr do sol em conjunto e iluminávamos nossos pensamentos, em conjunto e em silêncio, uma comunhão, uma grande reunião sem palavras. Noite virava dia.' }, // NOVO
      { id: 'estrelas', titulo: 'II. Estrelas', texto: 'Os pontos luminosos no céu e nossos heróis na terra. Uma vez por ano, uma grande festividade para honrar nossos heróis, vivos ou mortos, por seus avanços na filosofia, na matemática, na arquitetura, na magia, no estudo dos seres vivos e em outros conhecimentos importantes.' }, // NOVO
      { id: 'ajudantes', titulo: 'III. Ajudantes', flag: 'leu_tacets', voz: 'diario-ajudantes', img: 'assets/images/diario-tacet.jpg', texto: 'Os Tacets chegaram numa manhã, de bronze e de magia, para carregar o que não queríamos carregar. Uma invenção que nos elevou como raça dominante. O primeiro que vi na vida varria a praça toda manhã, e eu nunca a vi suja. Hoje, me procuram para me matar com a mesma disciplina que varriam a praça.' }, // NOVO
      { id: 'outras', titulo: 'IV. Outras anotações', texto: 'Não é o momento de visitar todo o passado agora.' }, // NOVO
    ],
  },

  // a pedra debaixo da tábua
  pedra: {
    lembranca: [
      'Uma tábua solta ao lado do catre, que eu nunca preguei. Debaixo dela, embrulhada num pano, a pedra.',
      'Achei-a numa viagem, meio enterrada no cascalho de um rio seco, entre pedras que não eram da mesma família. Azul, e violeta quando a girei contra a luz, e depois cinza, como o gelo faz. Apesar de me considerar um grande conhecedor de gemologia, não sei que tipo de mineral é.',
    ], // NOVO
    recolocar: 'Recoloquei a tábua. Melhor deixá-la guardada.', // NOVO
    curta: 'Uma tábua solta ao lado do catre. Debaixo dela, embrulhada num pano, uma pedra que achei numa viagem e nunca soube o que era.', // NOVO
    levantar: 'Levantei a tábua. A pedra estava no pano, do jeito que eu a deixei.', // NOVO
    deixar: 'Recoloquei a tábua e pisei nela até assentar. A pedra ficou onde estava, sem ninguém para lhe dar nome.', // NOVO
    pergunta: 'Por que ele a leva?',
    razoes: [
      { id: 'valer', voz: 'pedra-valer', txt: 'Porque parece valer alguma coisa.', nome: 'a Pedra da Borda', resultado: 'Levei porque uma pedra assim paga um inverno, ou serve para convencer algumas bocas que eu não existo.' }, // NOVO
      { id: 'gelunah', voz: 'pedra-gelunah', txt: 'Porque me lembra Gelunah.', nome: 'o Olho de Gelunah', resultado: 'Levei porque tem a cor do olho dela. A Mãe do Inverno que me fez companhia, mesmo que solitária, por todos esses anos na Borda do Mundo.' }, // NOVO
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

    // ===================================================== I · BORDA DO MUNDO
    { id: 'parte-I', parte: 'I', zona: 'borda', fundo: { img: 'assets/images/codex-borda-do-mundo.webp', kb: 'in', dim: .62, clima: 'neve' },
      cartao: { num: 'I', nome: 'A Borda do Mundo', epigrafe: 'O frio não guarda rancor. Guarda todo o resto.', fonte: 'ditado dos caçadores de Frígia' } }, // NOVO (epígrafe)

    { id: 'p01', zona: 'borda', fundo: { img: 'assets/images/soleira.jpg', kb: 'in', foco: '72% 45%', clima: 'neve' },
      narracao: 'assets/audio/narration/line1.mp3', narracaoLang: 'en', som: 'assets/audio/corvos.mp3', capitular: true,
      texto: [
        'A neve daquele ano chegou cedo, e chegou seca, do jeito que ela manda quando anda de bom humor. Depois de tantas décadas vivendo na Borda do Mundo, é natural para mim reconhecer o estado de espírito da Mãe do Inverno.',
        'Saí da soleira rumo à armadilha de cova que uso para capturar os pinguins. Os Aug adoram o sabor de pinguins, mas por terem quase quatro metros, é muito difícil capturarem um. E eles não sabem fazer armadilhas. O escambo é simples: eu junto centenas de pinguins e troco com eles por outros materiais. Pele de urso das neves, madeiras das árvores de Frígia e, claro, bebida alcoólica. Muita.',
      ] },

    { id: 'p02', zona: 'borda', fundo: { img: 'assets/images/codex-gelunah.webp', kb: 'out', dim: .55, foco: '40% 40%', lado: 'dir', clima: 'neve' },
      texto: [
        'No início eu me importava com a severidade do inverno. Claro que por aqui é sempre frio, ou sempre foi frio, mas quando Gelunah se incomodava com algo, geralmente fome, ela tornava o ambiente praticamente inabitável. Exceto para mim… e para os Aug, os gigantes que são os únicos seres minimamente conscientes com quem mantenho contato desde que cheguei.',
        'Gelunah também é consciente, claro, ou mais do que isso, se for possível de entender. Mas a comunicação com ela é diferente: não diria telepatia, e sim algo espiritual. Algo que eu, como Lúmae, devo evitar sentir. Foi exatamente esse tipo de investigação mais profunda do imaterial que levou à extinção completa dos meus semelhantes, e é o motivo de eu viver na Borda do Mundo há cinco décadas.',
      ] },

    { id: 'p03', zona: 'borda', fundo: { img: 'assets/images/codex-lumae.webp', kb: 'none', dim: .45, retrato: true, foco: '50% 12%' },
      texto: [
        'Às vezes sinto falta de uma conversa mais elaborada. Os Aug não são conhecidos por grande intelecto. Mas a vantagem é essa: não ligam se sou um Lúmae ou não, nem se deveriam se juntar ao resto do mundo, mais rico em conhecimento, para me declarar inimigo mortal da existência. Alguns anos passam sem eu proferir uma única palavra.',
        'Aprendi como ninguém a silenciar os pensamentos. Praticamente hiberno como um urso. Esse domínio sobre a própria mente me permitiu me acostumar com o frio, ou simplesmente deixar de senti-lo. Aprendi a “não pensar” por sobrevivência. Como Lúmae, meus pensamentos me fazem brilhar: temos veias douradas sob a pele que acendem brilhosas com pensamentos, ainda mais fortes quando os pensamentos são intensos. É uma atenção que não posso ter o luxo de atrair.',
      ],
      tutorialLuz: true },

    { id: 'p04', zona: 'borda', fundo: { img: 'assets/images/encosta.jpg', kb: 'in', foco: '30% 50%', lado: 'dir', clima: 'neve' },
      texto: [
        'O ciclo é quase sempre o mesmo: me localizam. Querem me matar porque são recompensados por isso, ou porque são justiceiros e protetores do mundo, decididos a acabar com todo praticante de magia. E a magia que me protege deles é a mesma que guia os próximos até aqui. Resta-me mudar de lugar, encontrar um novo esconderijo e esperar que me localizem outra vez.',
        'Mas já são cinquenta e seis ou cinquenta e sete anos aqui. Sou realmente grato a Gelunah, mas é um sentimento que não devo nutrir, porque me faz brilhar e eu acho que, de algum modo, ela sabe disso.',
      ] },

    { id: 'c-armadilha', zona: 'borda', fundo: { img: 'assets/images/cova.jpg', kb: 'in', dim: .4, foco: '65% 40%', clima: 'neve' },
      texto: [
        'Cheguei à beira da cova. Uma nova colônia tinha caído lá, e infelizmente ainda havia alguns vivos. É estranho ainda sentir alguma coisa vendo os animais morrerem, mas são essas pequenas coisas que ainda me fazem sentir vivo. Ou pelo menos com sentimentos.',
        'Três ainda se mexiam no fundo da cova, machucados demais da queda para subir sozinhos. Um deles tinha parado de tentar e me olhava.', // NOVO
      ],
      escolha: { id: 'armadilha', opcoes: [
        { eixo: 'perto', id: 'rapido', txt: 'Descer e acabar com eles, rápido.', luz: 4,
          resultado: ['Desci pela borda de gelo. Três vezes a mesma torção, a mesma pressa. Quando subi, a ponta dos meus dedos ainda estava acesa. Fechei as mãos dentro das mangas até apagar.'] }, // NOVO
        { eixo: 'longe', id: 'frio', txt: 'Deixar que morram sozinhos.', luz: -4,
          resultado: ['Não desci. Fiquei de costas para a cova, contando a respiração, até o fundo ficar quieto.'] }, // NOVO
        { eixo: 'perto', id: 'salvar', txt: 'Tirar da cova o que me olhava.', luz: 8, fundo: { img: 'assets/images/pinguim-salvo.jpg', kb: 'in', dim: .35, foco: '70% 60%', clima: 'neve' },
          resultado: ['Desci, peguei o que me olhava pelo meio do corpo e o pus na neve, longe da borda. Ele ficou parado um tempo, depois foi embora sem pressa, como se a ideia tivesse sido dele. Os outros dois deixei como estavam.'] }, // NOVO
      ] } },

    { id: 'ponte', zona: 'borda', fundo: { img: 'assets/images/encosta.jpg', kb: 'in', dim: .45, foco: '30% 50%', lado: 'dir', clima: 'neve' },
      narracao: 'assets/audio/voz/ponte.mp3', narracaoLang: 'en',
      texto: [
        'Contei os pinguins, era o suficiente. Cem, contando os da cova.', // NOVO
        'Amarrei os pinguins no trenó e voltei à cabana buscar os frascos, que eu levava vazios e trazia cheios. Às vezes, parece que minha vida sempre foi sobre isso.', // NOVO
        { se: (st) => st.escolhas.armadilha === 'salvar', t: 'Noventa e nove, na verdade. Para os Aug, cem.' }, // NOVO (sem voz, depois da gravação)
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
          { id: 'viga', rotulo: 'A viga', x: 76, y: 8, w: 24, h: 11, som: 'viga-riscos', voz: 'viga',
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
              { se: (st) => st.escolhas.armadilha === 'frio', t: 'Lavei as mãos, que não tinham tocado em nada. Lavei por hábito, alguém como eu precisa ter hábitos e não questioná-los.' }, // NOVO
              { se: (st) => st.escolhas.armadilha === 'salvar', t: 'Lavei as mãos. Havia uma pena de pinguim presa na manga, e eu a deixei onde estava.' }, // NOVO
            ] },
          { id: 'janela', rotulo: 'A janela', x: 44.5, y: 29, w: 16, h: 25, som: 'vidraca-geada',
            texto: ['O vidro é a única coisa da cabana que não fabriquei. A geada nele começa a desenhar formas se eu olho por tempo demais. Passei a manga e as formas viraram água.'] }, // NOVO
          { id: 'diario', rotulo: 'O diário', x: 53, y: 53.5, w: 7.5, h: 7, tipo: 'diario' },
          { id: 'tabua', x: 25.5, y: 73.5, w: 6, h: 7, tipo: 'pedra', oculto: true, opcional: true },
        ],
      } },

    { id: 'c-gelunah', zona: 'borda', fundo: { video: 'assets/video/gelunah-flight.mp4', kb: 'none', clima: 'neve-leve' }, cena: 'assets/video/gelunah-flight.mp4',
      texto: [
        'Na soleira, com a mão ainda na porta, o frio mudou, e alguma coisa se apertou no peito.', // ALTERADO
        'Ela passou a oeste, longe, sobre a montanha mais distante. Linda, escamas níveas, refletindo o sol fraco, voando de maneira majestosa, como se um dragão fosse capaz de dançar no ar. Olhos brilhantes, de cor azul-violeta, parecendo pedras preciosas. Mas ao mesmo tempo melancólicos, tristes… e foi isso que me deu um nó no peito. Como se ela me avisasse sobre algo.',
        { se: (st) => st.f.viu_pedra, t: 'O olho dela deslizou um instante na direção da cabana. Azul, depois violeta, a cor que eu tinha girado contra a luz de manhã. Eu não me mexi. Ela seguiu.' }, // NOVO
      ],
      olhoSe: (st) => st.f.viu_pedra,
      escolha: { id: 'gelunah', opcoes: [
        { eixo: 'perto', id: 'sentir', txt: 'Deixar o aperto no peito ficar.', luz: 10, gelunah: 1, aviso: 'Algo no frio mudou de lado.',
          resultado: ['Deixei. Por um momento não fiz nada contra ele, e as veias dos pulsos esquentaram sob a pele, visíveis até através das luvas. Ela não virou a cabeça.'] }, // NOVO
        { eixo: 'longe', id: 'esvaziar', txt: 'Esvaziar a cabeça, como aprendi.', luz: -6,
          resultado: ['Fiz o que faço há cinquenta anos. Tirei da cabeça o nome dela, depois o da montanha, depois o do frio. O aperto ficou onde estava, sem nome, e o dourado não subiu.'] }, // NOVO
      ] } },

    { id: 'p07', zona: 'borda', fundo: { img: 'assets/images/codex-gelunah.webp', kb: 'in', dim: .5, foco: '40% 40%', lado: 'dir', clima: 'neve' },
      texto: [
        'Foi só um instante, fiquei a vê-la sumir rumo ao norte branco. Quando me recompus, atrelei o trenó e comecei a andar.', // ALTERADO
      ], fimDeParte: true },

    // ===================================================== II · GLACIAR OCO
    { id: 'parte-II', parte: 'II', zona: 'glaciar', fundo: { img: 'assets/images/entrada-glaciar.jpg', kb: 'in', dim: .62, clima: 'neve' },
      cartao: { num: 'II', nome: 'O Glaciar Oco', epigrafe: 'Os Aug contam os anos pelas vezes que o gelo racha. Contam devagar.', fonte: 'anotação à margem de um mapa do norte' } }, // NOVO (epígrafe)

    { id: 'p08', zona: 'glaciar', fundo: { img: 'assets/images/entrada-glaciar.jpg', kb: 'in', dim: .45, foco: '60% 55%', clima: 'neve' },
      narracao: 'assets/audio/narration/line2.mp3', narracaoLang: 'en', som: 'assets/audio/gelo-quebrando.mp3', capitular: true,
      texto: [
        'Caminhava em direção ao Glaciar Oco, uma espécie de vilarejo da sociedade dos Aug: uma geleira gigante, cheia de fendas e túneis naturais formados pelo degelo e recongelamento milenar. Deve ser tão antiga quanto Gelunah. O gelo que a forma é diferente — ficou azul-turquesa, duro como pedra. É bonito, mas fedido.',
        { se: (st) => st.escolhas.armadilha === 'salvar', t: 'No caminho, um pinguim atravessou a neve, longe demais para eu saber se era o mesmo.' }, // NOVO
      ] },

    { id: 'p09', zona: 'tunel', fundo: { img: 'assets/images/nuuk.jpg', kb: 'in', dim: .38, foco: '62% 8%', clima: 'cristais' },
      texto: [
        'Geralmente faço o combinado com o líder deles, Gromm, o Quebra-Marfim, título dado a ele pelos próprios Aug por derrubar um Mamute Colossal com as próprias mãos. Mas naquela noite, quem me recepcionou foi um gigante menor, chamado Nuuk. Disse que Gromm estava com problemas de intestino.',
        '— GROMM BARRIGA RUIM, JÁ CAGAR UM URSO. NUUK FALAR COM UCÊ.',
        '— Certo, Nuuk. Vim falar dos pinguins, tenho uma centena deles. Ainda tenho na minha cabana muita madeira e pele. Nessa temporada preciso apenas de banha e o destilado.',
      ] },

    { id: 'c-passo', zona: 'tunel', fundo: { video: 'assets/video/glaciar-walk.mp4', img: 'assets/images/seguindo-nuuk.jpg', dim: .35, foco: '38% 55%', clima: 'cristais' }, cena: 'assets/video/glaciar-walk.mp4', passosGigante: true,
      texto: [
        'Ele não respondeu, só se virou. Por mais lentos que sejam a cada passo, a estatura deles me obriga a correr para acompanhá-lo.',
      ],
      escolha: { id: 'passo', opcoes: [
        { eixo: 'perto', id: 'correr', txt: 'Correr atrás dele.',
          resultado: ['Mantive o passo, meio correndo, meio escorregando, a respiração virando fumaça na frente do rosto.'] }, // NOVO
        { eixo: 'longe', id: 'ritmo', txt: 'Andar no meu ritmo e seguir as pegadas dele.', luz: 3, flag: 'passoPerdido',
          resultado: ['Perdi as costas dele duas vezes nas curvas do túnel, mas as pegadas eram do tamanho de Nuuk e de mais ninguém. Ele não diminuiu o passo por mim.', 'Andando sozinho entre paredes que brilham, é difícil não pensar, e as veias dos pulsos me lembraram disso.'] }, // NOVO
      ] } },

    { id: 'p11', zona: 'tunel', fundo: { img: 'assets/images/dois-aug.jpg', kb: 'in', dim: .42, foco: '70% 55%', clima: 'cristais' },
      texto: [
        { se: (st) => st.f.passoPerdido, t: 'Quando o alcancei, ele estava parado numa curva, olhando para o outro lado.' }, // NOVO
        'Gromm era mais educado, pensei. Mas melhor assim: quando me contou a história do Mamute, levou algumas horas para dizer o que uma criança humana explicaria em dez minutos.',
        'Segui Nuuk pelos túneis. Os Aug não são numerosos: mesmo ali, na maior concentração da população deles, vi cerca de quatro ou cinco pelo caminho. É muito raro vê-los conversando entre si, mas me vi curioso, ouvindo a conversa entre dois deles, mesmo a muitos metros de distância.',
        '— GROMM TAR MAL.',
        '— NUM CONSEGUIR FICAR DE PÉ.',
        '— NUNCA VER GROMM ASSIM.',
      ],
      escolha: { id: 'atencao', pergunta: 'O que Aheryn percebe?', opcoes: [
        { eixo: 'perto', id: 'nuuk', txt: 'Nuuk.',
          resultado: ['Ele pisa sempre no mesmo lugar do túnel, onde o gelo já afundou em duas marcas largas. Deve ter feito este caminho mil vezes.'] }, // NOVO
        { id: 'gelo', txt: 'O gelo.', luz: 2,
          resultado: ['Por baixo da camada turquesa há outra, mais escura, e por baixo dela outra. Contei sete antes de o azul ficar escuro demais.'] }, // NOVO
        { id: 'cheiro', txt: 'O cheiro.',
          resultado: ['Peixe velho, gordura e alguma coisa doce por baixo, a raiz que eles mastigam para fazer o destilado.'] }, // NOVO
      ] } },

    { id: 'd-nuuk', zona: 'tunel', fundo: { img: 'assets/images/nuuk.jpg', kb: 'out', dim: .4, foco: '62% 8%', clima: 'cristais' },
      texto: [
        'Quis perguntar a Nuuk o que se passava com Gromm. Os Aug, assim como os Grakh, possuem dois estômagos e uma capacidade incrível de digestão.', // ALTERADO
      ],
      dialogo: { interlocutor: 'Nuuk', rodadas: [
        { id: 'nuuk1', pergunta: 'O que Aheryn pergunta a Nuuk?', opcoes: [
          { eixo: 'perto', id: 'contou', txt: 'Nuuk, o que exatamente Gromm te contou? Como ele está?', canon: true },
          { eixo: 'longe', id: 'morrendo', txt: 'Ele está morrendo, Nuuk?', aug: -1, aviso: 'Nuuk vai lembrar disso.' }, // NOVO
          { eixo: 'longe', id: 'silencio', txt: '…', silencio: true, luz: -2 },
        ], resposta: 'GROMM NUM FALAR. SÓ GRUNHIR.' },
        { id: 'nuuk2', pergunta: 'O que Aheryn diz?', opcoes: [
          { eixo: 'perto', id: 'ver', txt: 'Posso ver ele?', canon: true },
          { eixo: 'longe', id: 'deixar', txt: 'Tudo bem. Não é da minha conta.', aug: -1, luz: -2, fim: true, flag: 'pulou_gromm', resposta: 'NUUK LEVAR UCÊ BEBIDA.' }, // NOVO
          { eixo: 'longe', id: 'silencio', txt: '…', silencio: true, luz: -2, fim: true, flag: 'pulou_gromm', resposta: 'NUUK LEVAR UCÊ BEBIDA.' },
        ], resposta: 'GROMM NUM CONSEGUIR FICAR DE PÉ.' },
        { id: 'nuuk3', pergunta: 'O que Aheryn diz?', opcoes: [
          { eixo: 'perto', id: 'ajudar', txt: 'Às vezes consigo ajudá-lo.', canon: true, aug: 1, aviso: 'Nuuk vai lembrar disso.' },
          { eixo: 'longe', id: 'exigir', txt: 'Me leve até ele, Nuuk.', aug: -1, luz: 3 }, // NOVO
        ], resposta: 'NUUK LEVAR UCÊ.' },
      ] },
      depois: [
        { se: (st) => st.escolhas.nuuk1 === 'morrendo' || st.escolhas.nuuk2 === 'deixar', t: 'Nuuk caminhou um pouco mais rígido depois da conversa, os ombros mais altos do que antes.' }, // ALTERADO
        { se: (st) => st.escolhas.nuuk1 !== 'morrendo' && st.escolhas.nuuk2 !== 'deixar', t: 'Segui Nuuk sem mais perguntas.' }, // NOVO
        { se: (st) => !st.f.pulou_gromm, t: 'Não sei se realmente queria ajudá-lo, mas queria entender o que tinha causado esse mal-estar no maior dos Aug. Entendi que Nuuk me levaria até Gromm quando seu passo hesitou e lentamente mudou a direção do seu corpo.' },
        { se: (st) => st.f.pulou_gromm, t: 'Nuuk não mudou de direção. Seguiu reto, rumo ao destilado, e o mal-estar de Gromm ficou onde estava, sem que eu o visse.' }, // NOVO
      ] },

    { id: 'v-glaciar', se: (st) => !st.f.pulou_gromm, zona: 'glaciar', fundo: { img: 'assets/images/aposento.jpg', kb: 'in', dim: .4, foco: '30% 55%', lado: 'dir', clima: 'cristais' },
      texto: [
        'O “aposento” de Gromm é um grande amontoado de ossos sobre uma pilha de rochas e ossos menores, formando um platô natural de cerca de dez metros de altura, um tanto afastado do centro do Glaciar Oco.',
      ] },

    { id: 'c-bronze', se: (st) => !st.f.pulou_gromm, zona: 'glaciar', fundo: { img: 'assets/images/aposento.jpg', kb: 'out', dim: .38, foco: '40% 80%', lado: 'dir', clima: 'cristais' },
      texto: [
        'Foi a primeira vez que pisei ali, e não foi a “arquitetura” que me chamou a atenção, mas sim dezenas ou centenas de pedaços de bronze espalhados por todo o local, como se uma enorme jazida de bronze tivesse sido estilhaçada. Mas como uma jazida de bronze não existe, e como os Aug não sabem fundir nem unir cobre e estanho, aquilo era muito estranho.',
      ],
      escolha: { id: 'bronze', opcoes: [
        { eixo: 'perto', id: 'examinar', txt: 'Abaixar e examinar um caco.', flag: 'examinou_bronze', som: 'bronze-caco',
          voz: (st) => (st.f.leu_tacets ? 'bronze-2' : 'bronze-1'), vozAtraso: 3400,
          fundo: { img: 'assets/images/bronze-caco.jpg', kb: 'in', dim: .38, foco: '35% 55%', lado: 'dir', clima: 'cristais' },
          resultado: [
            'Peguei um caco. Frio, pesado para o tamanho, com as bordas ainda vivas, de quem quebrou há pouco.',
            'Bronze aqui?',
            { se: (st) => st.f.leu_tacets, t: 'Nada bom.' },
            'Larguei o caco onde estava. Depois disso fiquei de sobreaviso, com o peso nos calcanhares e um ouvido no chão.',
          ] }, // NOVO
        { eixo: 'longe', id: 'deixar', txt: 'Não tocar em nada.',
          resultado: ['Não toquei em nada. Na casa dos outros não se mexe no que não é seu.'] }, // ALTERADO
      ] } },

    { id: 'p15', se: (st) => !st.f.pulou_gromm, zona: 'glaciar', fundo: { img: 'assets/images/gromm.jpg', kb: 'in', dim: .4, foco: '72% 35%', clima: 'cristais' },
      texto: [
        '— O que são esses pedaços de metal espalhados pelo chão, Nuuk?',
        '— SUJEIRA.',
        'Imaginava que o gigante não me ajudaria a solucionar aquele mistério, mas logo avistei Gromm, bufando, enorme, escorado nos ossos. Ele me notou quando me aproximei mais, e gritou de dor.',
        '— O QUE GROMM FALAR, NUUK?! GROMM MAL, NUM QUERER VER NINGUÉM, NEM PEQUENINO.',
      ] },

    { id: 'p16', se: (st) => !st.f.pulou_gromm, zona: 'glaciar', fundo: { img: 'assets/images/gromm-ferido.jpg', kb: 'in', dim: .45, tint: 'sangue', foco: '72% 35%' },
      texto: [
        'Não esperei a reação de Nuuk e respondi.',
        '— Vim te ajudar, Gromm. Sei que está mal da barriga.',
        '— SE PEQUENINO ANDAR MAIS PERTO DE GROMM, PEQUENINO ESMAGADO.',
        'Havia um líquido viscoso escorrendo pelo chão próximo a Gromm, e não eram fezes. Era sangue, bastante sangue.',
        '— Você está ferido, Gromm?',
      ] },

    { id: 'c-pedra', se: (st) => !st.f.pulou_gromm, zona: 'glaciar', fundo: { img: 'assets/images/gromm-ferido.jpg', kb: 'out', dim: .5, foco: '72% 35%' },
      texto: [ 'Ele não me respondeu, não da maneira que eu esperava. A reação dele foi jogar uma pedra, maior que meu torso, na minha direção.' ],
      escolha: { id: 'pedra', urgente: true, cinema: 'pedra', opcoes: [
        { id: 'desviar', txt: 'Jogar o corpo para o lado.',
          resultado: ['Desviei por pouco.'] },
        { eixo: 'perto', id: 'ficar', txt: 'Ficar onde estou, de mãos abertas.', flag: 'ferido', aug: 1, aviso: 'Nuuk vai lembrar disso.',
          resultado: ['Não desviei. A pedra pegou o meu ombro esquerdo e me jogou contra os ossos. Levantei devagar, as mãos ainda abertas. O braço respondia, mais lento.', 'Gromm parou de bufar por um instante. Nuuk olhava para as minhas mãos.'] }, // NOVO
        { id: 'magia', txt: 'Parar a pedra no ar.', luz: 12, aug: -1, flag: 'magiaGromm', aviso: 'Gromm viu a luz.',
          resultado: ['Não pensei. A luz subiu antes de mim, e a pedra parou a um palmo do meu peito, girando devagar, suspensa, até eu soltá-la. Caiu entre os ossos com um estalo seco.', 'Gromm parou de bufar. Nuuk deu um passo para trás.'] }, // NOVO
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
        { se: (st) => perfil(st) > -2 && perfil(st) < 2, t: 'Pensei em perguntar de novo sobre Gromm, mas Nuuk andava rápido demais para perguntas.' }, // NOVO
      ], fimDeParte: true },

    { id: 'volta-tuneis', zona: 'tunel', se: (st) => st.f.examinou_bronze, fundo: { clip: 'assets/clip/tunel.mp4', img: 'assets/images/seguindo-nuuk.jpg', dim: .45, clima: 'cristais' },
      narracao: 'assets/audio/voz/tuneis.mp3', narracaoLang: 'en',
      texto: ['Na volta pelos túneis ouvi cada passo de Nuuk e cada pingo de água, sinto que há algo errado. Não é paranoia.'] }, // NOVO

    // ===================================================== III · O DESTILADO
    { id: 'parte-III', parte: 'III', zona: 'glaciar', fundo: { img: 'assets/images/destilaria.jpg', kb: 'in', dim: .62, clima: 'cristais' },
      cartao: { num: 'III', nome: 'O Destilado', epigrafe: 'Todo povo que vive no frio inventa um jeito de esquecer.', fonte: 'provérbio do sul' } }, // NOVO (epígrafe)

    { id: 'p19', zona: 'glaciar', fundo: { img: 'assets/images/destilaria.jpg', kb: 'in', dim: .4, foco: '40% 60%', lado: 'dir', clima: 'cristais' },
      narracao: 'assets/audio/narration/line3.mp3', narracaoLang: 'en', capitular: true,
      texto: [
        'O gigante me levou até onde armazenam o destilado. A vista sempre me faz repensar meu hábito de beber, mas é necessário quando se é alguém que não pode pensar como eu:',
        'Basicamente eles arrancam uma raiz doce do gelo, mastigam até virar pasta e cospem em uma tina de madeira. Em seguida, guardam a tina perto das fendas quentes por uma semana. A mistura borbulha e vira um líquido aguado.',
        { se: (st) => st.escolhas.atencao === 'cheiro', t: 'O cheiro doce dos túneis vinha dali.' }, // NOVO (eco: o que Aheryn percebeu)
      ] },

    { id: 'p20', zona: 'glaciar', fundo: { img: 'assets/images/destilaria.jpg', kb: 'out', dim: .45, foco: '40% 60%', lado: 'dir', clima: 'cristais' },
      texto: [
        'Colocam o líquido dentro de um osso oco de baleia, tampam e aquecem no vapor do gêiser. O vapor do álcool sobe, passa por um tubo de tripa de algum animal grande, que na ocasião não procurei identificar nem perguntar, e pinga do outro lado, pronto. Aí chega a parte mais nojenta: eles esvaziam a bexiga de outro animal gigante marinho, lavam com neve e costuram a abertura com tendões. Despejam o líquido lá dentro e dão um nó na entrada.',
        'Abri a minha mochila e retirei meus frascos, o suficiente para um ano inteiro de bebida, e os enchi. Aquela noite fiquei satisfeito porque não senti ânsia.',
      ],
      quieto: { id: 'destilaria', espera: 2, eixo: 'perto', fala: 'Nuuk. Gromm vai ficar bem?', resposta: 'GROMM AINDA TAR MAL.',
        depois: ['Enchi o último frasco. Ele esperou eu terminar.'] }, // NOVO
      fimDeParte: true },

    // ===================================================== IV · A CABANA
    { id: 'parte-IV', parte: 'IV', zona: 'cabana-dentro', fundo: { img: 'assets/images/cabana-noite.jpg', kb: 'in', dim: .62, clima: 'brasas' },
      cartao: { num: 'IV', nome: 'A Cabana', epigrafe: 'Sæl’orin vethas, dumael corvethune.', fonte: 'louvor Lúmae, primeiro verso' } }, // NOVO (epígrafe)

    { id: 'p21', zona: 'cabana-dentro', fundo: { img: 'assets/images/cabana-noite.jpg', kb: 'in', dim: .38, foco: '50% 35%', desloca: .16, clima: 'brasas' },
      capitular: true,
      texto: [
        'Voltei à cabana com os frascos cheios e a noite inteira por cima do telhado.', // ALTERADO
        { se: (st) => st.escolhas.destilaria === 'cala', t: 'Não tinha dito uma palavra a Nuuk desde os túneis. Alguns anos passam assim.' }, // NOVO
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

    { id: 'mg-goles', zona: 'cabana-dentro', fundo: { clip: 'assets/clip/bebendo.mp4', img: 'assets/images/cabana-noite.jpg', dim: .42, foco: '50% 35%', desloca: .16, clima: 'brasas' },
      texto: [],
      minijogo: 'goles' },

    { id: 'c-hino', zona: 'cabana-dentro', fundo: { img: 'assets/images/cabana-noite-luz.jpg', kb: 'in', dim: .38, foco: '50% 35%', desloca: .16, clima: 'brasas' },
      texto: [
        { se: (st) => !st.guardados || st.guardados.length === 0, t: 'Ao quinto gole, ou ao sexto, apenas sobrava um único pensamento. O Título. Título que me deram quando eu era o orgulho de um povo inteiro, quando a minha gente se reunia para me ouvir, quando ser eu era uma coisa boa de ser. Fizeram de mim uma canção. Uma criatura, no auge, recebe canções, e eu recebi a minha, e ela era bonita.' }, // NOVO
        { se: (st) => st.guardados && st.guardados.length === 1, t: 'Ao quinto gole, ou ao sexto, quase tudo tinha ido embora. Sobrou o Título, e sobrou mais uma coisa, que não bebi até apagar. Título que me deram quando eu era o orgulho de um povo inteiro, quando a minha gente se reunia para me ouvir, quando ser eu era uma coisa boa de ser. Fizeram de mim uma canção. Uma criatura, no auge, recebe canções, e eu recebi a minha, e ela era bonita.' }, // NOVO
        { se: (st) => st.guardados && st.guardados.length >= 2, t: 'Parei antes do fim. Ficaram o Título e mais algumas coisas que não tive coragem de afogar. Título que me deram quando eu era o orgulho de um povo inteiro, quando a minha gente se reunia para me ouvir, quando ser eu era uma coisa boa de ser. Fizeram de mim uma canção. Uma criatura, no auge, recebe canções, e eu recebi a minha, e ela era bonita.' }, // NOVO
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
        { se: (st) => st.escolhas.hino === 'frestas', t: 'A melodia subia e o meu peito subia com ela, e a luz subiu também, e dessa vez eu deixei. Deixei brilhar, uma noite, porque não há ninguém em cem léguas para farejar um velho cantando para si mesmo.' }, // NOVO
        { se: (st) => st.escolhas.hino !== 'frestas', t: 'A melodia subia, mas eu a mantive baixa, do jeito que mantenho tudo. A luz não passou dos pulsos. Foi o hino inteiro, cantado do jeito que se pensa uma coisa proibida: por dentro, sem som.' }, // NOVO
      ],
      letra: [
        ['Sæl’orin vethas, dumael corvethune', 'luz que caminha, sob o peso do silêncio'],
        ['Yr’onai selu, tharennis vael-korei', 'nós fomos o nome, agora somos a névoa'],
        ['Aeth-vorunda, sæl’aeth mor’ilenne', 'ele viu mais longe, ele voltou inteiro'],
        ['Dumael, dumael, corvethune sæl’orin', 'silêncio, silêncio, sob o peso da luz'],
        ['Yr’onai selu, thariel, thariel', 'nós fomos o nome, chorai, chorai'],
        ['Vael-korei sæl’aeth, mor’ilenne vorunda', 'a névoa é luz, o inteiro é distância'],
      ] },

    { id: 'p25', zona: 'cabana', fundo: (st) => (st.escolhas.hino === 'frestas' ? { clip: 'assets/clip/frestas.mp4', img: 'assets/images/frestas.jpg', dim: .35, foco: '40% 50%', lado: 'dir', clima: 'neve' } : { img: 'assets/images/frestas.jpg', kb: 'in', dim: .5, foco: '40% 50%', lado: 'dir', clima: 'neve', apagada: true }), musicaSai: true,
      texto: [
        'Cantei o louvor inteiro. Cada verso que me chamava de grande.',
        'Do lado de fora da cabana, o céu começava a clarear sem entusiasmo, do modo que ele faz no inverno: uma palidez gradual, como quem não tem pressa de acordar e nem razão particular para o fazer.',
        { se: (st) => st.f.fogo, t: 'O fogo tinha virado brasa e ainda esquentava o chão perto da mesa.' }, // NOVO
        { se: (st) => st.f.frasco, t: 'O frasco estava vazio sobre a mesa. Não lembrava de tê-lo terminado.' }, // NOVO
      ], fimDeParte: true },

    // ===================================================== V · OS TACETS
    { id: 'parte-V', parte: 'V', zona: 'tacets', fundo: { img: 'assets/images/tacets-neve.jpg', kb: 'in', dim: .62, clima: 'neve' },
      cartao: { num: 'V', nome: 'Os Tacets', epigrafe: 'Fizemos o que não se cansa, para não termos de nos cansar.', fonte: 'inscrição Lúmae, meio apagada, numa placa de bronze' } }, // NOVO (epígrafe)

    { id: 'p26', zona: 'tacets', fundo: (st) => ({ img: st.luz >= 50 ? 'assets/images/amanhecer-luz.jpg' : 'assets/images/amanhecer.jpg', kb: 'in', dim: .38, foco: '70% 50%', clima: 'neve-leve' }),
      narracao: 'assets/audio/narration/line5.mp3', narracaoLang: 'en', capitular: true,
      texto: [
        'Senti-os antes de os ouvir, e ouvi-os muito antes de qualquer outro os ouviria.',
        'Foi pela manhã, estava de cócoras recolhendo a água do degelo quando a terra mudou de assunto sob os meus pés. Não era ela. O passo dela eu conhecia, vasto, artístico e frio. Isto era outra coisa. Pequeno. Regular. Pesado de um jeito que a vida não é: a vida pisa torto, descansa, hesita. Aquilo vinha em compasso, metal e pedra mordendo o chão gelado, um estalo seco e outro e outro, todos iguais.',
        { se: (st) => st.f.olhouNorte, t: 'Olhei primeiro para o norte, como na noite anterior. Não era de lá que vinha.' }, // NOVO
      ] },

    { id: 'p27', contagem: { mostra: 1, passos: 3 }, zona: 'tacets', fundo: { img: 'assets/images/tacets-neve.jpg', kb: 'in', dim: .4, foco: '60% 50%', clima: 'neve' }, passos: true,
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

    { id: 'c-proibido', zona: 'tacets', fundo: { img: 'assets/images/tacets-perto.jpg', kb: 'in', dim: .4, foco: '55% 30%', clima: 'neve' }, passos: true,
      texto: [
        'O primeiro me viu.',
        'A cabeça lisa se virou, sem olhos, e os pontos de luz na face se acenderam um tom acima, e o compasso quebrou, quebrou pela primeira vez, de três para quatro, mais rápido, porque a coisa tinha um alvo agora e o alvo era eu. Os outros dois se viraram juntos. E aqui é onde um homem corajoso teria agido, feito o que eu sei fazer, o que me valeu uma canção: tocar o que é proibido e desfazer aqueles três num gesto, como quem apaga três contas de um ábaco.',
      ],
      escolha: { id: 'proibido', urgente: true, revelar: true, janela: 5.3, som: 'decisao', padrao: 'recusar', opcoes: [
        { id: 'tocar', txt: 'Tocar o que é proibido.', luz: 15, flag: 'hesitou' },
        { id: 'recusar', txt: 'Recusar.', luz: 2 },
      ] } },

    { id: 'visao', zona: 'tacets', som: 'assets/audio/sfx/visao.mp3', se: (st) => st.escolhas.proibido === 'tocar', fundo: { img: 'assets/images/rosto-veias.jpg', kb: 'in', dim: .35, tint: 'visao', foco: '40% 35%', lado: 'dir' },
      texto: [
        'A mão já subia quando vi. O bronze virando cinza no vento. A cinza chegando ao sul antes de mim, em boca de viajante, em aviso de mercador. Trinta Tacets no ano seguinte. Trezentos caçadores depois deles. Uma cabana nova em outra neve, e a mesma soleira, e a mesma espera.', // NOVO
        'A mão parou no ar.', // NOVO
      ] },

    { id: 'p30', zona: 'tacets', fundo: { img: 'assets/images/olhos-fechados.jpg', kb: 'out', dim: .45, foco: '40% 35%', lado: 'dir' }, passos: true,
      texto: [
        'Pensei nisso. Por meio segundo, pensei.',
        { se: (st) => st.escolhas.proibido !== 'tocar', t: 'Foi o tempo de a luz me subir pela garganta, oferecida, a magia grande dizendo: usa-me, é para isto que serves, é isto que tu és, e foi o tempo de eu a recusar. Porque novamente o ciclo se repetiria, usaria magia, transformaria o bronze em cinza e teria de partir, sei lá para onde, mais uma vez.' },
        { se: (st) => st.escolhas.proibido === 'tocar', t: 'Foi o tempo de a luz me subir pela garganta, oferecida, a magia grande dizendo: usa-me, é para isto que serves, é isto que tu és, e foi o tempo de eu a recusar.' }, // ALTERADO (a visão já mostrou o resto)
        'Mas em seguida me veio no pensamento o olhar dela, Gelunah. E o sentimento que aquele momento me trouxe. Era uma despedida, de algum modo ela sabia e eu não queria viver ali, atraindo problemas para seu jardim de gelo.',
        { se: (st) => st.f.hesitou, t: 'Fiquei com as mãos abertas mais tempo do que precisava, sentindo o resto do calor que quase tinha virado luz.' }, // NOVO
      ] },

    { id: 'jogo', zona: 'tacets', fundo: { clip: 'assets/clip/maos-gelo-v2.mp4', img: 'assets/images/maos-gelo.jpg', dim: .35, foco: '62% 55%', clima: 'neve' },
      texto: [
        'Pus a mão no chão, no chão dela, no frio dela. Meu corpo brilhou e pedi ao gelo, e o gelo me fez a cortesia de obedecer.',
      ],
      minijogo: 'hino-do-gelo' },

    { id: 'marca', zona: 'tacets', se: (st) => st.jogo && !st.jogo.won, som: 'assets/audio/sfx/visao.mp3',
      fundo: { img: 'assets/images/tacets-perto.jpg', kb: 'in', dim: .45, foco: '55% 30%', tint: 'visao', clima: 'neve' },
      texto: [
        'O primeiro chegou antes do gelo.', // NOVO
        'A mão de bronze fechou no meu antebraço, fria como a coisa que era, e pela primeira vez em cinquenta anos senti a luz ser puxada para fora de mim em vez de subir. Então o chão respondeu.', // NOVO
      ], efeito: { luz: -10, flag: 'marcado' } },

    { id: 'v-fenda', zona: 'tacets', fundo: { video: 'assets/video/tacets-ice-v2.mp4', clima: 'neve' }, cena: 'assets/video/tacets-ice-v2.mp4', som: 'assets/audio/gelo-quebrando.mp3',
      texto: [
        'A crosta sob os três Tacets se abriu.',
        'Não com fúria, com lógica. Uma fenda reta, limpa, geométrica, do jeito que a minha gente gostava das coisas, e os três caíram pelo rasgo na água escura por baixo, o compasso virando estrondo, o bronze engolindo o frio negro que nem o bronze atravessa a nado.',
        { se: (st) => st.escolhas.atencao === 'gelo', t: 'Por baixo da crosta, as mesmas camadas que eu tinha contado no Glaciar, escuras até onde a vista ia.' }, // NOVO (eco: o que Aheryn percebeu)
        { se: (st) => st.gelunah >= 1, t: 'Por um instante, tive certeza de que não era só o meu pedido que o gelo estava atendendo.' }, // NOVO
      ] },

    { id: 'p33', zona: 'tacets', fundo: { img: 'assets/images/queda.jpg', kb: 'in', dim: .35, foco: '45% 40%', lado: 'dir', clima: 'neve' },
      texto: [
        { se: (st) => st.jogo && st.jogo.won && st.jogo.time <= 75, t: 'Foi rápido. Rápido o bastante para o terceiro não terminar o passo que dava.' }, // NOVO
        { se: (st) => st.jogo && st.jogo.won && st.jogo.time > 75, t: 'Demorou. Quando o gelo cedeu, o primeiro estava perto o bastante para eu ouvir o bronze ranger nas juntas.' }, // NOVO
        'Não os destruí. Bronze daqueles não se afoga; vão andar pelo fundo, cegos, e um dia subir por uma margem qualquer e recomeçar o compasso.',
        { se: (st) => st.jogo && st.jogo.won && st.luz >= 70, t: 'O gelo obedeceu a tempo. Mas a luz tinha subido alto demais, e o que sobe alto demais se vê de longe.' }, // NOVO
        { se: (st) => !st.f.pulou_gromm, t: 'Foi então que pensei em Gromm: nos cacos de bronze espalhados pelo chão do seu aposento, no sangue, na pedra que quase me acertou. Três Tacets não fazem tanto estrago. Deviam ser trinta, ou perto disso, e por algum motivo o líder Aug quis destruí-los antes que chegassem a mim. Nunca saberia ao certo. Desejei, sem poder dizer isso a ninguém, que ele estivesse melhor.' },
        { se: (st) => st.f.pulou_gromm, t: 'Foi então que pensei no Glaciar, que ficava no caminho deles. Pensei em Gromm, que eu não tinha visto, e no mal-estar que Nuuk nunca explicou. Os Aug têm dois estômagos e uma digestão incrível, e preferi acreditar que era só isso. Desejei, sem poder dizer isso a ninguém, que ele estivesse melhor.' }, // NOVO
        { se: (st) => st.aug >= 1, t: 'Pensei em Nuuk também, que na noite anterior tirara uma pedra do meu caminho sem se virar.' }, // NOVO
        { se: (st) => st.f.ferido, t: 'O ombro que ele acertou doeu quando me levantei do gelo. Achei justo.' }, // NOVO
        { se: (st) => st.f.magiaGromm, t: 'E Gromm tinha visto a luz. Os Aug não costumam contar nada a ninguém.' }, // NOVO
        { se: (st) => st.f.examinou_bronze, t: 'Eu tivera um daqueles cacos na mão, e a única coisa que me ocorrera foi perguntar o que fazia bronze num lugar sem forja. Ligar as coisas é sempre a parte tardia…' }, // NOVO
      ] },

    { id: 'despedida', zona: 'cabana-amanhecer', fundo: { img: 'assets/images/cabana-amanhecer.jpg', kb: 'in', dim: .4, foco: '50% 45%', lado: 'dir' },
      texto: [
        'Entrei. Como sempre, a luz do amanhecer fazia da cabana uma coisa menor. Pus na mochila o que cabe numa mochila quando se faz isto há um século: pouco. O álcool. Sobrava decidir o resto.', // ALTERADO
      ],
      minijogo: 'despedida',
      explorar: {
        img: 'assets/images/cabana-amanhecer.jpg', proporcao: 1672 / 941, porta: 'Partir',
        pontos: [
          { id: 'diario', rotulo: 'O diário', x: 53, y: 53.5, w: 8, h: 7.5, tipo: 'diario-despedida' },
          { id: 'tabua', x: 25.5, y: 73, w: 6, h: 7, tipo: 'pedra-despedida', oculto: (st) => !st.f.viu_pedra, opcional: true },
        ],
      } },

    { id: 'p34', zona: 'borda', fundo: { img: 'assets/images/soleira.jpg', kb: 'out', dim: .4, foco: '72% 45%', clima: 'neve' },
      texto: [
        'Voltei à soleira uma última vez.',
        'A oeste, sob o gelo, o frio tinha um peso conhecido. Ela estava perto, ou estivera, ou estaria. Com ela os tempos do verbo nunca foram firmes. Não disse adeus. Não se diz adeus a uma vizinha que vai durar mil anos depois de a nossa estrada ter virado pó; seria pretensão minha. Apenas olhei o norte branco uma vez, demoradamente, do jeito que se olha uma paisagem de que ainda não se sente saudade, mas que se sabe que vai fazer falta nos anos à frente.',
        { se: (st) => st.gelunah >= 1, t: 'Por um instante, o vento virou de norte para oeste e voltou.' }, // NOVO
        { se: (st) => perfil(st) >= 2, t: 'Pensei em descer até o Glaciar e dizer a Nuuk que ia embora, mas os Aug não entenderiam para que serve isso.' }, // NOVO
      ] },

    { id: 'olho-norte', zona: 'borda', se: (st) => st.escolhas.joia === 'gelunah', fundo: { img: 'assets/images/soleira.jpg', kb: 'out', dim: .4, foco: '72% 45%', clima: 'neve' },
      narracao: 'assets/audio/voz/ergui-olho.mp3', narracaoLang: 'en',
      texto: ['Ergui o Olho de Gelunah contra o norte, talvez à procura dela. Não vi ela para poder me despedir, mas me senti vigiado. Eu agradeci.'] }, // NOVO

    { id: 'p35', zona: 'borda', fundo: { img: 'assets/images/estrada-sul.jpg', kb: 'in', dim: .35, foco: '48% 45%', lado: 'dir', clima: 'neve-leve' },
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
        { se: (st) => st.escolhas.diario === 'levar', t: 'O diário pesava no fundo da mochila, como se as páginas carregassem o peso das histórias centenárias.' }, // NOVO
        { se: (st) => st.escolhas.diario === 'deixar', t: 'Da estrada dava para ver a chaminé até certa curva. Depois dela, ficaram para trás a cabana, o diário e a Borda do Mundo.' }, // NOVO
      ],
      fim: true },
  ],
};
