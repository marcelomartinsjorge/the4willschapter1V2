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

window.LIVRO = {
  id: 'cap01',
  titulo: 'Aheryn',
  subtitulo: 'A Luz na Borda do Mundo',
  subtituloEn: 'The Light at the Edge of the World',
  capa: 'assets/images/capa.jpg',
  luzInicial: 20,
  proximo: { titulo: 'Capítulo II · Laura D’Orrose, Sob a Seda', tituloEn: 'Chapter II · Laura D’Orrose, Beneath the Silk', url: 'https://marcelomartinsjorge.github.io/the4willschapter2/' },

  // camas sonoras extras (somam-se às do capítulo antigo)
  zonas: {
    tunel: { src: 'assets/audio/tunel-loop.mp3', volume: .45 },
    'cabana-dentro': { src: 'assets/audio/cabana-dentro-loop.mp3', volume: .55 },
  },

  // nomes que aparecem no resumo final
  escolhas: {
    armadilha: 'Os pinguins vivos',
    gelunah: 'Quando Gelunah passou',
    nuuk1: 'A primeira pergunta a Nuuk',
    nuuk3: 'O pedido a Nuuk',
    bronze: 'Os cacos de bronze',
    passo: 'Nos túneis com Nuuk',
    pedra: 'A pedra de Gromm',
    hino: 'Como cantou o hino',
    proibido: 'A magia proibida',
    jogo: 'O gelo obedece',
  },

  paginas: [

    // ===================================================== I · BORDA DO MUNDO
    { id: 'parte-I', parte: 'I', zona: 'borda', fundo: { img: 'assets/images/codex-borda-do-mundo.webp', kb: 'in', dim: .62, clima: 'neve' },
      cartao: { num: 'I', nome: 'A Borda do Mundo', epigrafe: 'O frio não guarda rancor. Guarda todo o resto.', fonte: 'ditado dos caçadores de Frígia' } }, // NOVO (epígrafe)

    { id: 'p01', zona: 'borda', fundo: { img: 'assets/images/soleira.jpg', kb: 'in', foco: '72% 45%', clima: 'neve' },
      narracao: 'assets/audio/narration/line1.mp3', narracaoLang: 'en', // só existe gravação em inglês por enquanto som: 'assets/audio/corvos.mp3', capitular: true,
      texto: [
        'A neve daquele ano chegou cedo, e chegou seca, do jeito que ela manda quando anda de bom humor. Depois de tantas décadas vivendo na Borda do Mundo, é natural para mim reconhecer o estado de espírito da Mãe do Inverno.',
        'Eu estava na soleira, me aproximava da armadilha de cova que uso para capturar os pinguins. Os Aug adoram o sabor de pinguins, mas por terem quase 4 metros, é muito difícil capturarem um. E eles não sabem fazer armadilhas. O escambo é simples: eu junto centenas de pinguins e troco com eles por outros materiais. Pele de urso das neves, madeiras das árvores de Frígia e, claro, bebida alcóolica. Muita.',
      ] },

    { id: 'p02', zona: 'borda', fundo: { img: 'assets/images/codex-gelunah.webp', kb: 'out', dim: .55, foco: '40% 40%', lado: 'dir', clima: 'neve' },
      texto: [
        'No início eu me importava com a severidade do inverno. Claro que por aqui é sempre frio — ou sempre foi frio — mas quando Gelunah se incomodava com algo, geralmente fome, ela tornava o ambiente praticamente inabitável. Exceto para mim… e para os Augs, os gigantes que são os únicos seres minimamente conscientes com quem mantenho contato há mais de 50 anos.',
        'Gelunah também é consciente, claro, ou mais do que isso, se for possível de entender. Mas a comunicação com ela é diferente — não diria telepatia, e sim algo espiritual. Algo que eu, como Lúmae, devo evitar sentir. Foi exatamente esse tipo de investigação mais profunda do imaterial que levou à extinção completa dos meus semelhantes, e é o motivo de eu viver na Borda do Mundo há cinco décadas.',
      ] },

    { id: 'p03', zona: 'borda', fundo: { img: 'assets/images/codex-lumae.webp', kb: 'none', dim: .45, retrato: true, foco: '50% 12%' },
      texto: [
        'Às vezes sinto falta de uma conversa mais elaborada — os Aug não são conhecidos por grande intelecto. Mas a vantagem é essa: não ligam se sou um Lúmae ou não, nem se deveriam se juntar ao resto do mundo, mais rico em conhecimento, para me declarar inimigo mortal da existência. Alguns anos passam sem eu proferir uma única palavra.',
        'Aprendi como ninguém a silenciar os pensamentos. Praticamente hiberno como um urso. Esse domínio sobre a própria mente me permitiu me acostumar com o frio, ou simplesmente deixar de senti-lo. Aprendi a “não pensar” por sobrevivência. Como Lúmae, meus pensamentos me fazem brilhar — temos veias douradas sob a pele que acendem brilhosas com pensamentos, ainda mais fortes quando os pensamentos são intensos. É uma atenção que não posso ter o luxo de atrair.',
      ],
      tutorialLuz: true },

    { id: 'p04', zona: 'borda', fundo: { img: 'assets/images/encosta.jpg', kb: 'in', foco: '30% 50%', lado: 'dir', clima: 'neve' },
      texto: [
        'O ciclo é quase sempre o mesmo: me localizam. Querem me matar porque são recompensados por isso, ou porque são justiceiros e protetores do mundo, decididos a acabar com todo praticante de magia. O que me estranha é que todos parecem esquecer o motivo: querem me matar justamente por eu ser capaz de lançar magia — magia que me protege dos agressores, e que por isso atrai ainda mais atenção para mim, guiando outros até aqui. Resta-me mudar de lugar, encontrar um novo esconderijo. É um ciclo vicioso.',
        'Mas já são 56 ou 57 anos aqui. Sou realmente grato a Gelunah, mas é um sentimento que não devo nutrir, porque me faz brilhar e eu acho que, de algum modo, ela sabe disso.',
      ] },

    { id: 'c-armadilha', zona: 'borda', fundo: { img: 'assets/images/cova.jpg', kb: 'in', dim: .4, foco: '65% 40%', clima: 'neve' },
      texto: [
        'Cheguei ao lado do poço, uma nova colônia tinha caído lá. Infelizmente ainda tinham alguns vivos, é estranho ainda sentir algum tipo de sentimento vendo os animais morrendo, mas são essas pequenas coisas que ainda me fazem me sentir vivo. Ou pelo menos com sentimentos.',
        'Três ainda se mexiam no fundo da cova. Um deles tinha parado de tentar subir e me olhava.', // NOVO
      ],
      escolha: { id: 'armadilha', opcoes: [
        { id: 'rapido', txt: 'Descer e acabar com eles, rápido.', luz: 4,
          resultado: ['Desci pela borda de gelo. Três vezes a mesma torção, a mesma pressa. Quando subi, a ponta dos meus dedos ainda estava acesa. Fechei as mãos dentro das mangas até apagar.'] }, // NOVO
        { id: 'frio', txt: 'Deixar que o frio termine o serviço.', luz: -4,
          resultado: ['Deixei. O frio faz isso melhor do que eu e não guarda o rosto de ninguém. Fiquei de costas para a cova, contando a respiração, até o fundo ficar quieto.'] }, // NOVO
        { id: 'salvar', txt: 'Tirar da cova o que me olhava.', luz: 8, fundo: { img: 'assets/images/pinguim-salvo.jpg', kb: 'in', dim: .35, foco: '70% 60%', clima: 'neve' },
          resultado: ['Desci, peguei o que me olhava pelo meio do corpo e o pus na neve, longe da borda. Ele ficou parado um tempo, depois foi embora sem pressa, como se a ideia tivesse sido dele. Os outros dois deixei como estavam.'] }, // NOVO
      ] } },

    { id: 'c-gelunah', zona: 'borda', fundo: { video: 'assets/video/gelunah-flight.mp4', kb: 'none', clima: 'neve-leve' }, cena: 'assets/video/gelunah-flight.mp4',
      texto: [
        'Mas dessa vez eu senti algo a mais — o frio mudou, e alguma coisa se apertou no peito.',
        'Ela passou a oeste, longe, sobre a montanha mais distante. Linda, escamas níveas, refletindo o sol fraco, voando de maneira majestosa, como se um Dragão fosse capaz de dançar no ar. Olhos brilhantes, de cor azul-violeta, parecendo pedras preciosas. Mas ao mesmo tempo melancólicos, tristes… e isso que me deu um nó na barriga. Como se ela me avisasse sobre algo.',
      ],
      escolha: { id: 'gelunah', opcoes: [
        { id: 'sentir', txt: 'Deixar o aperto no peito ficar.', luz: 10, gelunah: 1, aviso: 'Algo no frio mudou de lado.',
          resultado: ['Deixei. Por um momento não fiz nada contra ele, e as veias dos pulsos esquentaram sob a pele, visíveis até através das luvas. Ela não virou a cabeça. Não precisava.'] }, // NOVO
        { id: 'esvaziar', txt: 'Esvaziar a cabeça, como aprendi.', luz: -6,
          resultado: ['Fiz o que faço há cinquenta anos. Tirei da cabeça o nome dela, depois o da montanha, depois o do frio. O aperto ficou onde estava, sem nome, e o dourado não subiu.'] }, // NOVO
      ] } },

    { id: 'p07', zona: 'borda', fundo: { img: 'assets/images/codex-gelunah.webp', kb: 'in', dim: .5, foco: '40% 40%', lado: 'dir', clima: 'neve' },
      texto: [
        'Foi só um instante, fiquei a vê-la sumir rumo ao norte branco. Quando me recompus, voltei à armadilha. Contei os pinguins, era o suficiente.',
      ], fimDeParte: true },

    // ===================================================== II · GLACIAR OCO
    { id: 'parte-II', parte: 'II', zona: 'glaciar', fundo: { img: 'assets/images/entrada-glaciar.jpg', kb: 'in', dim: .62, clima: 'neve' },
      cartao: { num: 'II', nome: 'O Glaciar Oco', epigrafe: 'Os Aug contam os anos pelas vezes que o gelo racha. Contam devagar.', fonte: 'anotação à margem de um mapa do norte' } }, // NOVO (epígrafe)

    { id: 'p08', zona: 'glaciar', fundo: { img: 'assets/images/entrada-glaciar.jpg', kb: 'in', dim: .45, foco: '60% 55%', clima: 'neve' },
      narracao: 'assets/audio/narration/line2.mp3', narracaoLang: 'en', // só existe gravação em inglês por enquanto som: 'assets/audio/gelo-quebrando.mp3', capitular: true,
      texto: [
        'Caminhava em direção ao Glaciar Oco, uma espécie de vilarejo da sociedade dos Aug: uma geleira gigante, cheia de fendas e túneis naturais formados pelo degelo e recongelamento milenar. Deve ser tão antiga quanto Gelunah. O gelo que a forma é diferente — ficou azul-turquesa, duro como pedra. É bonito, mas fedido.',
      ] },

    { id: 'p09', zona: 'tunel', fundo: { img: 'assets/images/nuuk.jpg', kb: 'in', dim: .38, foco: '62% 8%', clima: 'cristais' },
      texto: [
        'Geralmente faço o combinado com o líder deles, Gromm, o Quebra-Marfim — título dado a ele pelos próprios Aug por derrubar um Mamute Colossal com as próprias mãos. Mas naquela noite, quem me recepcionou foi um gigante menor, chamado Nuuk. Disse que Gromm estava com problemas de intestino.',
        '— GROMM BARRIGA RUIM, JÁ CAGAR UM URSO. NUUK FALAR COM UCÊ.',
        '— Certo, Nuuk. Vim falar dos pinguins, tenho uma centena deles. Ainda tenho na minha cabana muita madeira e pele. Nessa temporada preciso apenas de banha e o destilado.',
      ] },

    { id: 'c-passo', zona: 'tunel', fundo: { video: 'assets/video/glaciar-walk.mp4', img: 'assets/images/seguindo-nuuk.jpg', dim: .35, foco: '38% 55%', clima: 'cristais' }, cena: 'assets/video/glaciar-walk.mp4', passosGigante: true,
      texto: [
        'Ele não respondeu, só se virou. Por mais lentos que sejam a cada passo, a estatura deles me obriga a correr para acompanhá-lo.',
      ],
      escolha: { id: 'passo', opcoes: [
        { id: 'correr', txt: 'Correr atrás dele.',
          resultado: ['Mantive o passo, meio correndo, meio escorregando, a respiração virando fumaça na frente do rosto.'] }, // NOVO
        { id: 'ritmo', txt: 'Andar no meu ritmo e segui-lo pelo cheiro.', luz: 3, flag: 'passoPerdido',
          resultado: ['Perdi as costas dele duas vezes nas curvas do túnel e o encontrei pelo cheiro. Nuuk não diminuiu o passo por mim. Os Aug não diminuem.', 'Andando sozinho entre paredes que brilham, é difícil não pensar. Pensei um pouco.'] }, // NOVO
      ] } },

    { id: 'p11', zona: 'tunel', fundo: { img: 'assets/images/dois-aug.jpg', kb: 'in', dim: .42, foco: '70% 55%', clima: 'cristais' },
      texto: [
        { se: (st) => st.f.passoPerdido, t: 'Quando o alcancei, ele já estava parado, esperando sem parecer que esperava.' }, // NOVO
        'Gromm era mais educado, pensei — mas melhor assim: quando me contou a história do Mamute, levou algumas horas para dizer o que uma criança humana explicaria em 10 minutos.',
        'Segui Nuuk pelos túneis. Os Aug não são numerosos — mesmo ali, na maior concentração da população deles, vi cerca de 4 ou 5 pelo caminho. É muito raro vê-los conversando entre si, mas me vi curioso, ouvindo a conversa entre dois deles, mesmo a muitos metros de distância.',
        '— GROMM TAR MAL.',
        '— NUM CONSEGUIR FICAR DE PÉ.',
        '— NUNCA VER GROMM ASSIM.',
      ] },

    { id: 'd-nuuk', zona: 'tunel', fundo: { img: 'assets/images/nuuk.jpg', kb: 'out', dim: .4, foco: '62% 8%', clima: 'cristais' },
      texto: [
        'Questionei Nuuk sobre o mal-estar de Gromm. Os Augs, assim como os Grakh, possuem dois estômagos e uma capacidade incrível de digestão.',
      ],
      dialogo: { interlocutor: 'Nuuk', rodadas: [
        { id: 'nuuk1', opcoes: [
          { id: 'contou', txt: 'Nuuk, o que exatamente Gromm te contou? Como ele está?', canon: true },
          { id: 'morrendo', txt: 'Ele está morrendo, Nuuk?', aug: -1, aviso: 'Nuuk vai lembrar disso.' }, // NOVO
          { id: 'silencio', txt: '…', silencio: true, luz: -2 },
        ], resposta: 'GROMM TAR MAL.' },
        { id: 'nuuk2', opcoes: [
          { id: 'ver', txt: 'Posso ver ele?', canon: true },
          { id: 'deixar', txt: 'Tudo bem. Não é da minha conta.', aug: -1, luz: -2 }, // NOVO
          { id: 'silencio', txt: '…', silencio: true, luz: -2 },
        ], resposta: 'GROMM TAR MAL.' },
        { id: 'nuuk3', opcoes: [
          { id: 'ajudar', txt: 'Às vezes consigo ajudá-lo.', canon: true, aug: 1, aviso: 'Nuuk vai lembrar disso.' },
          { id: 'exigir', txt: 'Me leve até ele, Nuuk.', aug: -1, luz: 3 }, // NOVO
        ], resposta: 'GROMM TAR MAL.' },
      ] },
      depois: [
        { se: (st) => st.escolhas.nuuk1 === 'morrendo' || st.escolhas.nuuk2 === 'deixar', t: 'Nuuk não respondeu à última pergunta. Só caminhou um pouco mais rígido depois dela, os ombros mais altos do que antes.' }, // NOVO
        { se: (st) => st.escolhas.nuuk1 !== 'morrendo' && st.escolhas.nuuk2 !== 'deixar', t: 'Segui Nuuk sem mais perguntas. Havia algo de familiar naquele tipo de silêncio — o mesmo que eu uso.' }, // NOVO
        'Não sei se realmente queria ajudá-lo, mas é importante entender o que causou esse mal-estar no maior dos Augs. Entendi que Nuuk me levaria até Gromm quando seu passo hesitou e lentamente mudou a direção do seu corpo.',
      ] },

    { id: 'v-glaciar', zona: 'glaciar', fundo: { img: 'assets/images/aposento.jpg', kb: 'in', dim: .4, foco: '30% 55%', lado: 'dir', clima: 'cristais' },
      texto: [
        'O “aposento” de Gromm é um grande amontoado de ossos sobre uma pilha de rochas e ossos menores, formando um platô natural de cerca de 10 metros de altura, um tanto afastado do centro do Glaciar Oco.',
      ] },

    { id: 'c-bronze', zona: 'glaciar', fundo: { img: 'assets/images/aposento.jpg', kb: 'out', dim: .38, foco: '40% 80%', lado: 'dir', clima: 'cristais' },
      texto: [
        'Foi a primeira vez que pisei ali, e não foi a “arquitetura” que me chamou a atenção, mas sim dezenas ou centenas de pedaços de bronze espalhados por todo o local, como se uma enorme jazida de bronze tivesse sido estilhaçada. Mas como uma jazida de bronze não existe, e como os Augs não sabem fundir nem unir cobre e estanho, aquilo era muito estranho.',
      ],
      escolha: { id: 'bronze', opcoes: [
        { id: 'pegar', txt: 'Guardar um caco no bolso.', luz: 3, flag: 'bronze', aviso: 'Você guardou um caco de bronze.',
          resultado: ['Abaixei como quem ajeita a bota e guardei um caco do tamanho de uma unha. Estava morno. Bronze não fica morno no Glaciar Oco.'] }, // NOVO
        { id: 'deixar', txt: 'Não tocar em nada.',
          resultado: ['Não toquei em nada. Na casa dos outros não se mexe no lixo, mesmo quando o lixo não faz sentido.'] }, // NOVO
      ] } },

    { id: 'p15', zona: 'glaciar', fundo: { img: 'assets/images/gromm.jpg', kb: 'in', dim: .4, foco: '72% 35%', clima: 'cristais' },
      texto: [
        '— O que são esses pedaços de metal espalhados pelo chão, Nuuk?',
        '— SUJEIRA.',
        'Imaginava que o gigante não me ajudaria a solucionar aquele mistério, mas logo avistei Gromm, bufando, enorme, escorado nos ossos. Ele me notou quando me aproximei mais, e gritou, obviamente com dor.',
        '— O QUE GROMM FALAR, NUUK?! GROMM MAL, NUM QUERER VER NINGUÉM, NEM PEQUENINO.',
      ] },

    { id: 'p16', zona: 'glaciar', fundo: { img: 'assets/images/gromm-ferido.jpg', kb: 'in', dim: .45, tint: 'sangue', foco: '72% 35%' },
      texto: [
        'Não esperei a reação de Nuuk e respondi.',
        '— Vim te ajudar, Gromm. Sei que está mal da barriga.',
        '— SE PEQUENINO ANDAR MAIS PERTO DE GROMM, PEQUENINO ESMAGADO.',
        'Havia um líquido viscoso escorrendo pelo chão próximo a Gromm, e não eram fezes. Era sangue, bastante sangue.',
        '— Você está ferido, Gromm?',
      ] },

    { id: 'c-pedra', zona: 'glaciar', fundo: { img: 'assets/images/gromm-ferido.jpg', kb: 'out', dim: .5, foco: '72% 35%' },
      texto: [ 'Ele não me respondeu, não da maneira que eu esperava. A reação dele foi jogar uma pedra, maior que meu torso, na minha direção.' ],
      escolha: { id: 'pedra', urgente: true, cinema: 'pedra', opcoes: [
        { id: 'desviar', txt: 'Jogar o corpo para o lado.',
          resultado: ['Desviei por pouco.'] },
        { id: 'ficar', txt: 'Ficar onde estou, de mãos abertas.', flag: 'ferido', aug: 1, aviso: 'Nuuk vai lembrar disso.',
          resultado: ['Não desviei. A pedra pegou o meu ombro esquerdo e me jogou contra os ossos. Levantei devagar, as mãos ainda abertas. O braço respondia, mais lento.', 'Gromm parou de bufar por um instante. Nuuk olhava para as minhas mãos.'] }, // NOVO
        { id: 'magia', txt: 'Parar a pedra no ar.', luz: 12, aug: -1, flag: 'magiaGromm', aviso: 'Gromm viu a luz.',
          resultado: ['Não pensei. A luz subiu antes de mim, e a pedra parou a um palmo do meu peito, girando devagar, suspensa, até eu soltá-la. Caiu entre os ossos com um estalo seco.', 'Gromm me olhou como quem vê alguém pela primeira vez. Nuuk deu um passo para trás.'] }, // NOVO
      ] } },

    { id: 'p18', zona: 'tunel', fundo: { clip: 'assets/clip/tunel.mp4', img: 'assets/images/seguindo-nuuk.jpg', dim: .45, clima: 'cristais' },
      texto: [
        '— IR EMBORA OU GROMM MATAR.',
        'Foi mais um aviso do que uma ameaça de Nuuk. Percebi na voz dele o medo que sentia de Gromm.',
        '— Certo, vamos buscar a bebida. Espero que melhore da dor de barriga, Gromm.',
        'Nuuk não disse mais nada. Só me levou de volta pelos túneis.',
        { se: (st) => st.aug >= 1, t: 'No caminho, sem se virar, ele empurrou com o pé uma pedra solta para fora da minha frente.' }, // NOVO
        { se: (st) => st.aug <= -1, t: 'No caminho, ele manteve mais distância entre nós dois do que na ida, do jeito que se anda ao lado de algo que ainda não se decidiu se é perigoso.' }, // NOVO
      ], fimDeParte: true },

    // ===================================================== III · O DESTILADO
    { id: 'parte-III', parte: 'III', zona: 'glaciar', fundo: { img: 'assets/images/destilaria.jpg', kb: 'in', dim: .62, clima: 'cristais' },
      cartao: { num: 'III', nome: 'O Destilado', epigrafe: 'Todo povo que vive no frio inventa um jeito de esquecer.', fonte: 'provérbio do sul' } }, // NOVO (epígrafe)

    { id: 'p19', zona: 'glaciar', fundo: { img: 'assets/images/destilaria.jpg', kb: 'in', dim: .4, foco: '40% 60%', lado: 'dir', clima: 'cristais' },
      narracao: 'assets/audio/narration/line3.mp3', narracaoLang: 'en', // só existe gravação em inglês por enquanto capitular: true,
      texto: [
        'O gigante me levou até onde armazenam o destilado. A vista sempre me faz repensar meu hábito de beber, mas é necessário quando se é alguém que não pode pensar como eu:',
        'Basicamente eles arrancam uma raiz doce do gelo, mastigam até virar pasta e cospem em uma tina de madeira. Em seguida, guardam a tina perto das fendas quentes por 1 semana. A mistura borbulha e vira um líquido aguado.',
      ] },

    { id: 'p20', zona: 'glaciar', fundo: { img: 'assets/images/destilaria.jpg', kb: 'out', dim: .45, foco: '40% 60%', lado: 'dir', clima: 'cristais' },
      texto: [
        'Colocam o liquido dentro de um osso oco de baleia, tampam e aquecem no vapor do gêiser. O vapor do álcool sobe, passa por um tubo de tripa de algum animal grande — que na ocasião não procurei identificar nem perguntar — e pinga do outro lado, pronto. Aí chega a parte mais nojenta: eles esvaziam a bexiga de outro animal gigante marinho, lavam com neve e costuram a abertura com tendões. Despejam o líquido lá dentro e dão um nó na entrada.',
        'Abri a minha mochila e retirei meus frascos — o suficiente para um ano inteiro de bebida — e os enchi. Aquela noite fiquei satisfeito porque não senti ânsia.',
      ], fimDeParte: true },

    // ===================================================== IV · A CABANA
    { id: 'parte-IV', parte: 'IV', zona: 'cabana-dentro', fundo: { img: 'assets/images/cabana-noite.jpg', kb: 'in', dim: .62, clima: 'brasas' },
      cartao: { num: 'IV', nome: 'A Cabana', epigrafe: 'Sæl’orin vethas, dumael corvethune.', fonte: 'louvor Lúmae, primeiro verso' } }, // NOVO (epígrafe)

    { id: 'p21', zona: 'cabana-dentro', fundo: { img: 'assets/images/cabana-noite.jpg', kb: 'in', dim: .38, foco: '50% 35%', desloca: .16, clima: 'brasas' },
      narracao: 'assets/audio/narration/line4.mp3', narracaoLang: 'en', // só existe gravação em inglês por enquanto capitular: true,
      texto: [
        'A cabana em que moro é pequena de propósito. Uma mesa. Um catre que não uso para dormir — porque não durmo. Fico quieto, de olhos abertos, que é o mais perto do sono que a minha espécie alcança, e deixo a noite passar por mim como a água passa pelo gelo.',
      ] },

    { id: 'mg-goles', zona: 'cabana-dentro', fundo: { clip: 'assets/clip/bebendo.mp4', img: 'assets/images/cabana-noite.jpg', dim: .42, foco: '50% 35%', desloca: .16, clima: 'brasas' },
      texto: [],
      minijogo: 'goles' },

    { id: 'c-hino', zona: 'cabana-dentro', fundo: { img: 'assets/images/cabana-noite-luz.jpg', kb: 'in', dim: .38, foco: '50% 35%', desloca: .16, clima: 'brasas' },
      texto: [
        'Ao quinto gole, ou ao sexto, apenas sobrava um único pensamento. O Título. Título que me deram quando eu era o orgulho de um povo inteiro, quando a minha gente se reunia para me ouvir, quando ser eu era uma coisa boa de ser. Fizeram de mim uma canção. Uma criatura, no auge, recebe canções, e eu recebi a minha, e ela era bonita.',
        'E eu, bêbado, sozinho, na companhia espiritual da Mãe do Inverno, fiz a única coisa que faço quando a luz dentro de mim se recusa em apagar: cantei.',
      ],
      escolha: { id: 'hino', opcoes: [
        { id: 'dentro', txt: 'Cantar para dentro, quase sem voz.', luz: 6,
          resultado: ['Cantei com a boca quase fechada, a melodia presa entre os dentes. A luz subiu até o pescoço e parou ali, como quem espera permissão.'] }, // NOVO
        { id: 'frestas', txt: 'Deixar a luz vazar pelas frestas da cabana.', luz: 20, aviso: 'A luz saiu pelas frestas.',
          resultado: ['Abri a boca e a garganta junto. A luz passou do peito para os braços, dos braços para as paredes, e as frestas entre as tábuas desenharam na neve lá fora linhas finas de ouro.'] }, // NOVO
      ] } },

    { id: 'hino', zona: 'cabana-dentro', fundo: { clip: 'assets/clip/cantando.mp4', img: 'assets/images/rosto-veias.jpg', dim: .35, foco: '50% 35%', lado: 'dir', desloca: -.16, clima: 'brasas' },
      musica: 'assets/audio/hino.mp3',
      louvor: { src: 'assets/audio/hino/louvor.mp3', marcas: [0, 3.6, 6.8, 9.9, 13.8, 17.1] },
      vozes: ['assets/audio/hino/verso1.mp3', 'assets/audio/hino/verso2.mp3', 'assets/audio/hino/verso3.mp3', 'assets/audio/hino/verso4.mp3', 'assets/audio/hino/verso5.mp3', 'assets/audio/hino/verso6.mp3'],
      texto: [
        'Cantei baixo, na língua que ninguém mais no mundo fala, a língua que morreu na boca dos que a falavam comigo. Um louvor a um homem que viu mais longe do que qualquer um do seu povo jamais vira, que olhou para onde não se deve olhar e voltou inteiro, e ensinou os outros a olhar.',
        'A melodia subia e o meu peito subia com ela, e a luz subiu também, e dessa vez eu deixei. Deixei brilhar, uma noite, porque não há ninguém em cem léguas para farejar um velho a cantar a si mesmo.',
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
      ], fimDeParte: true },

    // ===================================================== V · OS TACETS
    { id: 'parte-V', parte: 'V', zona: 'tacets', fundo: { img: 'assets/images/tacets-neve.jpg', kb: 'in', dim: .62, clima: 'neve' },
      cartao: { num: 'V', nome: 'Os Tacets', epigrafe: 'Fizemos o que não se cansa, para não termos de nos cansar.', fonte: 'inscrição Lúmae, meio apagada, numa placa de bronze' } }, // NOVO (epígrafe)

    { id: 'p26', zona: 'tacets', fundo: (st) => ({ img: st.luz >= 50 ? 'assets/images/amanhecer-luz.jpg' : 'assets/images/amanhecer.jpg', kb: 'in', dim: .38, foco: '70% 50%', clima: 'neve-leve' }),
      narracao: 'assets/audio/narration/line5.mp3', narracaoLang: 'en', // só existe gravação em inglês por enquanto capitular: true,
      texto: [
        'Senti-os antes de os ouvir, e ouvi-os muito antes de qualquer outro os ouviria.',
        'Foi pela manhã, estava de cócoras a recolher a água do degelo quando a terra mudou de assunto sob os meus pés. Não era ela. O passo dela eu conhecia, vasto, artístico e frio. Isto era outra coisa. Pequeno. Regular. Pesado de um jeito que a vida não é: a vida pisa torto, descansa, hesita. Aquilo vinha em compasso, metal e pedra mordendo o chão gelado, um estalo seco e outro e outro, todos iguais.',
      ] },

    { id: 'p27', zona: 'tacets', fundo: { img: 'assets/images/tacets-neve.jpg', kb: 'in', dim: .4, foco: '60% 50%', clima: 'neve' }, passos: true,
      texto: [
        'Pousei a concha. Fiquei muito quieto, com a planta dos pés colada à terra, a contar. Tacets.',
        'Três. Vinham três.',
        'E eu soube o que eram antes de subir ao alto e os ver recortados contra a neve, porque o compasso daquilo estava gravado em mim mais fundo do que a língua morta, mais fundo que a canção. Eram obra da minha gente. Criamos os Tacets séculos atrás, construídos a base de bronze e magia para nos ajudar nos serviços braçais. Hoje eles vivem por conta própria porque nenhum Lúmae existe mais.',
        { se: (st) => st.f.bronze, t: 'No bolso, o caco que eu trouxe do Glaciar esquentou contra a minha coxa.' }, // NOVO
      ] },

    { id: 'c-proibido', zona: 'tacets', fundo: { img: 'assets/images/tacets-perto.jpg', kb: 'in', dim: .4, foco: '55% 30%', clima: 'neve' }, passos: true,
      texto: [
        'Exceto e eu sei que vinham me buscar.',
        'O primeiro me viu.',
        'A cabeça lisa virou-se, sem olhos, e os pontos de luz na face acenderam-se um tom acima, e o compasso quebrou, quebrou pela primeira vez, de três para quatro, mais rápido, porque a coisa tinha um alvo agora e o alvo era eu. Os outros dois viraram-se juntos. E aqui é onde um homem corajoso teria agido, feito o que eu sei fazer, o que me valeu uma canção: tocar o que é proibido e desfazer aqueles três num gesto, como quem apaga três contas de um ábaco.',
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
        'Foi o tempo de a luz me subir pela garganta, oferecida, a magia grande a dizer: usa-me, é para isto que serves, é isto que tu és, e foi o tempo de eu a recusar. Porque novamente o ciclo se repetiria, usaria magia, transformaria o bronze em cinza e teria de partir, sei lá para onde, mais uma vez.',
        'Mas em seguida me veio no pensamento o olhar dela, Gelunah. E o sentimento que aquele momento me trouxe. Era uma despedida, de algum modo ela sabia e eu não queria viver ali, atraindo problemas para seu jardim de gelo.',
        { se: (st) => st.f.hesitou, t: 'Fiquei com as mãos abertas mais tempo do que precisava, sentindo o resto do calor que quase tinha virado luz.' }, // NOVO
      ] },

    { id: 'jogo', zona: 'tacets', fundo: { clip: 'assets/clip/maos-gelo.mp4', img: 'assets/images/maos-gelo.jpg', dim: .35, foco: '62% 55%', clima: 'neve' },
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

    { id: 'v-fenda', zona: 'tacets', fundo: { video: 'assets/video/tacets-ice.mp4', clima: 'neve' }, cena: 'assets/video/tacets-ice.mp4', som: 'assets/audio/gelo-quebrando.mp3',
      texto: [
        'A crosta sob os três Tacets se abriu.',
        'Não com fúria — com lógica. Uma fenda reta, limpa, geométrica, do jeito que a minha gente gostava das coisas, e os três caíram pelo rasgo na água escura por baixo, o compasso a virar estrondo, o bronze a engolir o frio negro que nem o bronze atravessa a nado.',
        { se: (st) => st.gelunah >= 1, t: 'Por um instante, tive certeza de que não era só o meu pedido que o gelo estava atendendo.' }, // NOVO
      ] },

    { id: 'p33', zona: 'tacets', fundo: { img: 'assets/images/queda.jpg', kb: 'in', dim: .35, foco: '45% 40%', lado: 'dir', clima: 'neve' },
      texto: [
        { se: (st) => st.jogo && st.jogo.won && st.jogo.time <= 75, t: 'Foi rápido. Rápido o bastante para o terceiro não terminar o passo que dava.' }, // NOVO
        { se: (st) => st.jogo && st.jogo.won && st.jogo.time > 75, t: 'Demorou. Quando o gelo cedeu, o primeiro estava perto o bastante para eu ouvir o bronze ranger nas juntas.' }, // NOVO
        'Não os destruí. Bronze daqueles não se afoga; vão andar pelo fundo, cegos, e um dia subir por uma margem qualquer e recomeçar o compasso.',
        { se: (st) => st.jogo && st.jogo.won && st.luz >= 70, t: 'Ganhei a tempo. Mas em algum lugar, alguma coisa deve ter visto a luz subir tanto assim.', flag: 'visto' }, // NOVO
        'Foi então que pensei em Gromm — nos cacos de bronze espalhados pelo chão do seu aposento, no sangue, na pedra que quase me acertou. Três Tacets não fazem tanto estrago. Deviam ser trinta, ou perto disso, e por algum motivo o líder Aug quis destruí-los antes que chegassem a mim. Nunca saberia ao certo. Desejei, sem poder dizer isso a ninguém, que ele estivesse melhor.',
        { se: (st) => st.aug >= 1, t: 'Talvez fosse por isso que Nuuk empurrara a pedra do meu caminho, dias atrás. Talvez soubesse, do jeito que os Aug sabem as coisas, que eu ainda teria um caminho pela frente.' }, // NOVO
        { se: (st) => st.f.ferido, t: 'O ombro que ele acertou doeu quando me levantei do gelo. Achei justo.' }, // NOVO
        { se: (st) => st.f.magiaGromm, t: 'E Gromm tinha visto a luz. Os Aug não contam nada a ninguém. Esperei que continuasse assim.' }, // NOVO
        { se: (st) => st.f.bronze, t: 'Tirei o caco do bolso. Tinha esfriado.' }, // NOVO
      ] },

    { id: 'p34', zona: 'borda', fundo: { img: 'assets/images/soleira.jpg', kb: 'out', dim: .4, foco: '72% 45%', clima: 'neve' },
      texto: [
        'Entrei. Pus numa mochila o que cabe numa mochila quando se faz isto há um século: pouco. O álcool. Voltei à soleira uma última vez.',
        'A oeste, sob o gelo, o frio tinha um peso conhecido. Ela estava perto, ou estivera, ou estaria. Com ela os tempos do verbo nunca foram firmes. Não disse adeus. Não se diz adeus a uma vizinha que vai durar mil anos depois de a nossa estrada ter virado pó; seria pretensão minha. Apenas olhei o norte branco uma vez, demoradamente, do jeito que se olha uma paisagem que no momento não se sente saudade, mas que sabe que sentirá nos anos à frente.',
        { se: (st) => st.gelunah >= 1, t: 'Por um instante, o vento virou de norte para oeste e voltou.' }, // NOVO
      ] },

    { id: 'p35', zona: 'borda', fundo: { img: 'assets/images/estrada-sul.jpg', kb: 'in', dim: .35, foco: '48% 45%', lado: 'dir', clima: 'neve-leve' },
      texto: [
        'Depois virei as costas ao frio e desci para o sul, onde o mundo era mais morno e mais cheio de gente, e portanto mais perigoso.',
        'Comecei a andar. À frente, a estrada; atrás, mais um lugar onde estive e que não foi meu. Pelo caminho, sem pressa, fui apagando a luz, uma linha de cada vez, e ensaiando o rosto seguinte, o de um homem velho e sem história, que ninguém mais cantaria sobre.',
        { se: (st) => st.f.marcado, t: 'No antebraço, onde o bronze fechou, a pele ficou lisa e fria, sem veia nenhuma. A luz passava por ali e não acendia.' }, // NOVO
        { se: (st) => st.luz >= 70, t: 'Levou mais tempo do que das outras vezes. A última linha só apagou quando a Borda já não aparecia atrás de mim.' }, // NOVO
        { se: (st) => st.luz <= 30, t: 'Não levou tempo nenhum. Quase nada tinha acendido.' }, // NOVO
        { se: (st) => st.luz > 30 && st.luz < 70, t: 'Levou o tempo de sempre. Nem rápido, nem devagar — a luz saindo do mesmo jeito de todas as outras vezes que fiz isto.' }, // NOVO
        { se: (st) => st.escolhas.armadilha === 'rapido', t: 'Ainda senti, por um instante, a ponta dos dedos quente demais, do jeito que ficaram na beira da cova.' }, // NOVO
        { se: (st) => st.escolhas.armadilha === 'frio', t: 'Passei outras coves como aquela, no caminho, sem olhar para dentro de nenhuma. Não era vergonha. Era só não precisar.' }, // NOVO
        { se: (st) => st.escolhas.armadilha === 'salvar', t: 'Se ainda houvesse pinguins por perto, eu teria gostado de ver um deles de longe, seguindo vivo.' }, // NOVO
        { se: (st) => st.guardados && st.guardados.length === 0, t: 'Não sobrou nenhuma outra memória acesa além do Título. Achei que doeria mais.' }, // NOVO
        { se: (st) => st.guardados && st.guardados.length > 0, t: 'Alguma coisa, além do Título, continuava acesa em mim. Não tentei apagar.' }, // NOVO
      ],
      fim: true },
  ],
};
