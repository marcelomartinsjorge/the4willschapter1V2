/* ======================================================================
   DADOS DO CAPÍTULO 1 (Aheryn) — tudo que muda de capítulo pra capítulo.
   Carregar este arquivo ANTES de shared/js/app.js.
   ====================================================================== */

window.CHAPTER_CONFIG = {

  meta: {
    titleEn: 'Aheryn — The Light at the Edge of the World · The Four Wills',
    titlePt: 'Aheryn — A Luz na Borda do Mundo · As Quatro Vontades'
  },

  defaultZone: 'borda',

  // Cada zona = um ambiente sonoro + cor de destaque do capítulo.
  // "accent" só aceita 'gold' ou 'turq' por enquanto (tokens já existentes
  // no main.css). Se um capítulo novo precisar de uma paleta a mais
  // (ex: um terceiro ambiente bem diferente), é preciso antes adicionar o
  // token de cor correspondente (--nome/--nome-soft) no shared/css/main.css.
  zones: {
    borda: {
      en: 'Edge of the World', pt: 'Borda do Mundo',
      volume: .55, accent: 'gold',
      src: 'assets/audio/borda-do-mundo-loop.mp3',
      oneShot: 'assets/audio/corvos.mp3'
    },
    glaciar: {
      en: 'Hollow Glacier', pt: 'Glaciar Oco',
      volume: .55, accent: 'turq',
      src: 'assets/audio/glaciar-oco-loop.mp3',
      oneShot: 'assets/audio/gelo-quebrando.mp3'
    },
    cabana: {
      en: "Aheryn's Cabin", pt: 'A Cabana',
      volume: .32, accent: 'gold',
      src: 'assets/audio/cabana-loop.mp3',
      dimSnow: true // neve esmaece com fade enquanto essa zona está na tela
    },
    tacets: {
      en: 'The Pursuit', pt: 'A Perseguição',
      volume: .5, accent: 'gold',
      src: 'assets/audio/tacets-tension.mp3'
    }
  },

  // Cada verbete do codex. "aliasesEn"/"aliasesPt" são todas as formas de
  // texto que devem virar link automático no corpo do capítulo (plural,
  // variações, etc). Se omitido, cai no título como única forma.
  codex: {

    "gelunah": {
      image: "assets/images/codex-gelunah.webp",
      accent: "gold",
      aliasesEn: ["Gelunah"],
      aliasesPt: ["Gelunah"],
      en: {
        title: "Gelunah",
        eyebrow: "Zealot Dragon · White Mantle",
        pages: [
          [
            "Gelunah is one of five zealot dragons who govern the world's climate. She is the regent of the White Mantle, the frozen territory to the north of all that is known — absolute mistress of ice and silence."
          ],
          [
            "Her form is majestic and terrible: white scales with the exact texture of freshly formed ice, layered like the plates of a living armor. Her wings, when spread, reveal fine cracks that shimmer like veins of quartz under the weak northern light, as if the cold itself had cracked while stretching.",
            "Her eyes are a deep blue tinged with violet, carrying a constant melancholy — the weariness of centuries watching over a realm where nothing grows. She is estimated at roughly 600 meters in length, from snout to tail-tip, making her the largest living creature in the White Mantle."
          ],
          [
            "She is worshipped as a deity by the Children of Winter, a small human settlement that defies the cold to live near the Mother of Winter. They are a peaceful people, seeking spirituality in the harshness of the landscape.",
            "Their strictest laws concern procreation: they believe every new mouth is a promise of hunger, and that when hunting and fishing grow scarce, it is because Gelunah herself goes without food — and a hungry dragon makes the cold deadly. The Children of Winter do not fear her; they understand her as a force of nature, as inevitable as snow."
          ],
          [
            "Further north, where the cold grows so intense that humans dare not tread, Gelunah is also revered by the <span class=\"gloss\" data-codex=\"aug\">Aug</span>. The giants, however, make no pilgrimages, offer no prayers. They simply know she exists, and that her mood is the weather. When Gelunah grows restless, even the Aug retreat into the <span class=\"gloss\" data-codex=\"glaciar-oco\">Hollow Glacier</span> and wait."
          ],
          [
            "Her resting place is the Tomb of Ardor — a depression in the perpetual ice where the cold reaches such intensity that the sensation on the body is no longer one of cold, but of burning. It is the once-in-a-lifetime pilgrimage destination for the Children of Winter: a journey few complete, and from which none return the same.",
            "It is said that, in that place, the air is so dense and frigid that every breath feels like swallowing shards of glass, and the silence is so absolute one can hear one's own blood circulating."
          ]
        ]
      },
      pt: {
        title: "Gelunah",
        eyebrow: "Dragã zeladora · Manto Branco",
        pages: [
          [
            "Gelunah é uma dos cinco dragões zeladores que regem o clima do mundo. É a regente do Manto Branco, o território congelado ao norte de tudo o que é conhecido — senhora absoluta do gelo e do silêncio."
          ],
          [
            "Sua forma é majestosa e terrível: escamas brancas com a textura exata do gelo recém-formado, sobrepondo-se como placas de uma armadura viva. Suas asas, quando abertas, revelam finas rachaduras que brilham como veios de quartzo sob a luz fraca do norte, como se o próprio frio tivesse se rachado ao se esticar.",
            "Seus olhos são de um azul profundo tingido de violeta, e carregam uma melancolia constante — o cansaço de séculos vigiando um reino onde nada cresce. Estima-se que possua cerca de 600 metros de comprimento, da ponta do focinho à extremidade da cauda, tornando-a a maior criatura viva do Manto Branco."
          ],
          [
            "É venerada como divindade pelos Filhos do Inverno, um pequeno assentamento humano que desafia o frio para viver próximo da Mãe do Inverno. São um povo pacífico, que busca espiritualidade na dureza da paisagem.",
            "Suas leis mais rigorosas dizem respeito à procriação: acreditam que cada nova boca é uma promessa de fome, e que quando a caça e a pesca se tornam escassas, é porque falta comida para Gelunah — e a fome da dragã torna o frio mortal. Os Filhos do Inverno não a temem; eles a compreendem como uma força natural, tão inevitável quanto a neve."
          ],
          [
            "Mais ao norte, onde o frio se torna tão intenso que os humanos não ousam pisar, Gelunah também é reverenciada pelos <span class=\"gloss\" data-codex=\"aug\">Aug</span>. Os gigantes, porém, não fazem peregrinações nem rezam. Limitam-se a saber que ela existe, e que seu humor é o clima. Quando Gelunah se agita, até os Aug se recolhem ao <span class=\"gloss\" data-codex=\"glaciar-oco\">Glaciar Oco</span> e esperam."
          ],
          [
            "Seu local de descanso é o Túmulo do Ardor — uma depressão no gelo perpétuo onde o frio atinge tamanha intensidade que a sensação no corpo não é mais de frio, mas de queimadura. É o destino de peregrinação única na vida dos Filhos do Inverno: uma jornada que poucos completam, e da qual nenhum volta o mesmo.",
            "Dizem que, naquele lugar, o ar é tão denso e gelado que cada respiração parece engolir estilhaços de vidro, e que o silêncio é tão absoluto que se pode ouvir o próprio sangue circulando."
          ]
        ]
      }
    },

    "aug": {
      image: "assets/images/codex-aug.webp",
      accent: "turq",
      aliasesEn: ["Augs", "Aug"],
      aliasesPt: ["Augs", "Aug"],
      en: {
        title: "Aug",
        eyebrow: "Race of giants · White Mantle",
        pages: [
          [
            "The Aug are a race of giants inhabiting the White Mantle, standing an estimated near-4 meters tall. Their build is broad and massive, with thick limbs and rough skin, covered by a sparse layer of pale fur that shields them from the cold.",
            "They possess two stomachs — an adaptation that lets them digest everything from meat and frozen roots to stones, which they swallow to reach satiety when food runs scarce."
          ],
          [
            "Their diet is seasonal: they eat once per season, consuming absurd quantities of food in a single feast that can last for days. After that meal, they enter a state of deep sleep that stretches on for weeks, or even an entire season, hibernating in the warmest chambers of the <span class=\"gloss\" data-codex=\"glaciar-oco\">Hollow Glacier</span> while their bodies slowly digest the accumulated stock."
          ],
          [
            "The Aug are described by the Children of Winter as peaceful, though the same source admits to avoiding them. Not out of malice — the giants simply inspire an instinctive dread: their speech is slow, guttural, and made up of few words; their small, dark eyes seem to look straight through people, as if always half-asleep. They prefer silence and isolation, and rarely initiate contact with humans."
          ],
          [
            "They are not numerous. Their reproduction is slow and ceremonial: they mate only in winter, in a ritual involving the consumption of great quantities of the liquor they brew themselves. It is during these brief festive periods that the Aug become louder and more expansive."
          ]
        ]
      },
      pt: {
        title: "Aug",
        eyebrow: "Raça de gigantes · Manto Branco",
        pages: [
          [
            "Os Aug são uma raça de gigantes que habita o Manto Branco, com altura estimada em quase 4 metros. Sua fisionomia é larga e maciça, com membros grossos e pele áspera, coberta por uma camada esparsa de pelos claros que os protege do frio.",
            "Possuem dois estômagos — uma adaptação que lhes permite digerir desde carne e raízes congeladas até pedras, que engolem para atingir a saciação quando a comida escasseia."
          ],
          [
            "Sua alimentação é sazonal: alimentam-se uma vez por estação, consumindo quantidades absurdas de comida num único banquete que pode durar dias. Após essa refeição, entram em um estado de sono profundo que se estende por semanas ou mesmo por uma estação inteira, hibernando nas câmaras mais quentes do <span class=\"gloss\" data-codex=\"glaciar-oco\">Glaciar Oco</span> enquanto o corpo digere lentamente o estoque acumulado."
          ],
          [
            "Os Aug são descritos pelos Filhos do Inverno como pacíficos, mas a mesma fonte admite que os evitam. Não por maldade — os gigantes simplesmente inspiram um temor instintivo: sua fala é lenta, gutural e composta de poucas palavras; seus olhos pequenos e escuros parecem olhar através das pessoas, como se estivessem sempre meio sonolentos. Preferem o silêncio e o isolamento, e raramente iniciam contato com humanos."
          ],
          [
            "Não são numerosos. Sua reprodução é lenta e cerimonial: acasalam apenas no inverno, em um ritual que envolve o consumo de grandes quantidades da bebida alcoólica que eles mesmos produzem. É durante esses breves períodos de festa que os Aug se tornam mais barulhentos e expansivos."
          ]
        ]
      }
    },

    "lumae": {
      image: "assets/images/codex-lumae.webp",
      accent: "gold",
      aliasesEn: ["Lúmae"],
      aliasesPt: ["Lúmae"],
      en: {
        title: "Lúmae",
        eyebrow: "Near-extinct people",
        pages: [
          [
            "The Lúmae are a people with a great affinity for wielding magic without suffering the effects of madness usually associated with the practice. They possess near-translucent skin, beneath which run lines of golden light that intensify with the individual's mental activity.",
            "They were the target of a massacre sponsored by the Four Wills, the creative forces of the World. They are, in theory, an extinct people, cursed by their own unrestrained use of magic."
          ]
        ]
      },
      pt: {
        title: "Lúmae",
        eyebrow: "Povo quase extinto",
        pages: [
          [
            "Os Lúmae são um povo com grande afinidade em utilizar magia sem sofrer efeitos de insanidade associados a essa prática. Possuem uma pele quase translúcida, sob a qual correm linhas de luz dourada que se intensificam conforme a atividade mental do indivíduo.",
            "Foram alvo de um massacre patrocinado pelas Quatro Vontades, forças criadoras do mundo. São, teoricamente, um povo extinto, amaldiçoados pelo uso desenfreado de magia."
          ]
        ]
      }
    },

    "glaciar-oco": {
      image: "assets/images/codex-glaciar-oco.webp",
      accent: "turq",
      aliasesEn: ["Hollow Glacier"],
      aliasesPt: ["Glaciar Oco"],
      en: {
        title: "Hollow Glacier",
        eyebrow: "Aug settlement",
        pages: [
          [
            "The Hollow Glacier is the settlement of Aug society: a millennia-old glacier of turquoise-blue ice, so compact it creaks like stone underfoot. Across countless cycles of thaw and refreeze, nature itself carved a labyrinth of fissures, tunnels, and chambers into the glacier's belly — a shelter no <span class=\"gloss\" data-codex=\"aug\">Aug</span> ever needed to build, only to occupy."
          ],
          [
            "The main entrance is a vertical fissure over six meters tall, wide enough for even the largest of the giants to pass through without bowing their heads. Inside, sunlight — when it manages to penetrate — filters through the thick ice, tinting the corridors in a greenish, aquatic hue, like the inside of a frozen wave.",
            "During the long winter nights, seal-fat torches scattered along the walls cast dancing shadows that stretch through the tunnels."
          ],
          [
            "The lower reaches of the glacier are warmed by geothermal fissures, staying damp and above freezing. There, water trickles in constant threads, forming small pools of meltwater where the Aug rest and prepare their seasonal meals. The upper tunnels, dry and frigid, function as natural meat stores, where sub-zero temperatures preserve the stockpiles for the long sleeping periods."
          ],
          [
            "The Hollow Glacier is not a city — it is a refuge: vast, dark, creaking and groaning with every millimeter the ice shifts. For the Aug, it is the only home they know."
          ]
        ]
      },
      pt: {
        title: "Glaciar Oco",
        eyebrow: "Assentamento dos Aug",
        pages: [
          [
            "O Glaciar Oco é o assentamento da sociedade <span class=\"gloss\" data-codex=\"aug\">Aug</span>: uma geleira milenar de gelo azul-turquesa, tão compacta que range como pedra sob os pés. Ao longo de incontáveis ciclos de degelo e recongelamento, a própria natureza esculpiu um labirinto de fendas, túneis e câmaras no ventre da geleira — um abrigo que nenhum Aug precisou construir, apenas ocupar."
          ],
          [
            "A entrada principal é uma fenda vertical com mais de seis metros de altura, larga o bastante para que até o maior dos gigantes passe sem curvar a cabeça. Lá dentro, a luz do sol — quando consegue penetrar — filtra-se através do gelo espesso, tingindo os corredores num tom esverdeado e aquático, como o interior de uma onda congelada.",
            "Durante as longas noites de inverno, tochas de gordura de foca espalhadas pelas paredes criam danças de sombras que se esticam pelos túneis."
          ],
          [
            "As partes mais baixas da geleira são aquecidas por fendas geotérmicas, mantendo-se úmidas e acima do ponto de congelamento. Ali, a água escorre em filetes constantes, formando pequenos lagos de água derretida onde os Aug descansam e preparam suas refeições sazonais. Os túneis superiores, secos e gélidos, funcionam como depósitos naturais de carne, onde a temperatura negativa preserva os estoques para os longos períodos de sono."
          ],
          [
            "O Glaciar Oco não é uma cidade — é um refúgio: amplo, escuro, rangendo e gemendo a cada milímetro que o gelo se move. Para os Aug, é o único lar que conhecem."
          ]
        ]
      }
    },

    "borda-do-mundo": {
      image: "assets/images/codex-borda-do-mundo.webp",
      accent: "gold",
      aliasesEn: ["Edge of the World"],
      aliasesPt: ["Borda do Mundo"],
      en: {
        title: "Edge of the World",
        eyebrow: "Region · White Mantle",
        pages: [
          [
            "The Edge of the World is the northernmost region of the territory under <span class=\"gloss\" data-codex=\"gelunah\">Gelunah's</span> dominion, within the White Mantle. It becomes practically uninhabitable during certain periods, tied to shifts in Gelunah's temperament."
          ],
          [
            "Temperatures range between –30°C and –45°C, with a dry, constant wind blowing off the frozen sea, cutting the skin like a dull blade. The snow is thin and coarse, like white sand crunching underfoot; the sky stays an eternal pearl-grey, with rare pale-blue rifts where the weak sun drags itself along for three or four hours before hiding again.",
            "It is a perpetual winter, stable and predictable — except when Gelunah grows restless."
          ]
        ]
      },
      pt: {
        title: "Borda do Mundo",
        eyebrow: "Região · Manto Branco",
        pages: [
          [
            "A Borda do Mundo é a região mais setentrional do território sob domínio de <span class=\"gloss\" data-codex=\"gelunah\">Gelunah</span>, dentro do Manto Branco. Torna-se praticamente inabitável em determinados períodos, associados a alterações no comportamento de Gelunah."
          ],
          [
            "As temperaturas oscilam entre –30°C e –45°C, com um vento seco e constante que vem do mar congelado, cortando a pele como uma lâmina cega. A neve é fina e áspera, parecendo areia branca que range sob os pés; o céu permanece num cinza-perolado eterno, com raras fendas de um azul pálido onde o sol fraco se arrasta por três ou quatro horas antes de se esconder.",
            "É um inverno perpétuo, estável e previsível — exceto quando Gelunah se agita."
          ]
        ]
      }
    }

  }
};
