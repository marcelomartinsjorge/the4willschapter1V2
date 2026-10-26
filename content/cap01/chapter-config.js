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
        eyebrow: "Warden Dragon · White Mantle",
        pages: [
          [
            "Gelunah is one of five warden dragons who govern the world's climate. She is the regent of the White Mantle, the frozen territory to the north of all that is known, and mistress of ice and silence."
          ],
          [
            "She has white scales with the texture of freshly formed ice, layered in plates. Her spread wings show fine cracks that shimmer under the weak northern light.",
            "Her eyes are a deep blue tinged with violet. She measures some eight hundred paces from snout to tail-tip, the largest living creature in the White Mantle."
          ],
          [
            "She is worshipped as a deity by the Children of Winter, a small human settlement that lives in the cold, near the Mother of Winter. They are a peaceful people.",
            "Their strictest laws concern procreation: they believe every new mouth is a promise of hunger, and that when hunting and fishing grow scarce, it is because Gelunah herself goes without food, and a hungry dragon makes the cold deadly. The Children of Winter do not fear her; they treat her as a force of nature."
          ],
          [
            "Further north, where the cold grows so intense that humans dare not tread, Gelunah is also revered by the <span class=\"gloss\" data-codex=\"aug\">Aug</span>. The giants, however, make no pilgrimages, offer no prayers. They simply know she exists, and that her mood is the weather. When Gelunah grows restless, even the Aug retreat into the <span class=\"gloss\" data-codex=\"glaciar-oco\">Hollow Glacier</span> and wait."
          ],
          [
            "Her resting place is the Tomb of Ardor, a depression in the perpetual ice where the cold is so intense the body feels it as burning. It is the once-in-a-lifetime pilgrimage of the Children of Winter. Few complete it.",
            "It is said that, in that place, every breath cuts the throat and the silence lets one hear one's own blood."
          ]
        ]
      },
      pt: {
        title: "Gelunah",
        eyebrow: "Dragoa zeladora · Manto Branco",
        pages: [
          [
            "Gelunah é uma dos cinco dragões zeladores que regem o clima do mundo. É a regente do Manto Branco, o território congelado ao norte de tudo o que é conhecido, e senhora do gelo e do silêncio."
          ],
          [
            "Tem escamas brancas, da textura do gelo recém-formado, sobrepostas em placas. Nas asas abertas aparecem rachaduras finas que brilham sob a luz fraca do norte.",
            "Os olhos são de um azul profundo tingido de violeta. Mede cerca de oitocentos passos, do focinho à ponta da cauda, e é a maior criatura viva do Manto Branco."
          ],
          [
            "É venerada como divindade pelos Filhos do Inverno, um pequeno assentamento humano que vive no frio, perto da Mãe do Inverno. São um povo pacífico.",
            "Suas leis mais rigorosas dizem respeito à procriação: acreditam que cada nova boca é uma promessa de fome, e que quando a caça e a pesca se tornam escassas, é porque falta comida para Gelunah, e a fome da dragoa torna o frio mortal. Os Filhos do Inverno não a temem; tratam-na como uma força da natureza."
          ],
          [
            "Mais ao norte, onde o frio se torna tão intenso que os humanos não ousam pisar, Gelunah também é reverenciada pelos <span class=\"gloss\" data-codex=\"aug\">Aug</span>. Os gigantes, porém, não fazem peregrinações nem rezam. Limitam-se a saber que ela existe, e que seu humor é o clima. Quando Gelunah se agita, até os Aug se recolhem ao <span class=\"gloss\" data-codex=\"glaciar-oco\">Glaciar Oco</span> e esperam."
          ],
          [
            "Seu local de descanso é o Túmulo do Ardor, uma depressão no gelo perpétuo onde o frio é tão intenso que o corpo o sente como queimadura. É o destino da peregrinação única na vida dos Filhos do Inverno. Poucos a completam.",
            "Dizem que, naquele lugar, cada respiração corta a garganta e o silêncio deixa ouvir o próprio sangue."
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
            "The Aug are a race of giants inhabiting the White Mantle, nearly twice the height of a man. They are broad and massive, with thick limbs and rough skin, covered by sparse pale fur that shields them from the cold.",
            "They have two stomachs and digest everything from meat and frozen roots to stones, which they swallow to stave off hunger when food runs scarce."
          ],
          [
            "Their diet is seasonal: they eat once per season, consuming absurd quantities of food in a single feast that can last for days. After that meal, they enter a state of deep sleep that stretches on for weeks, sometimes until the next season, hibernating in the warmest chambers of the <span class=\"gloss\" data-codex=\"glaciar-oco\">Hollow Glacier</span> while their bodies slowly digest the accumulated stock."
          ],
          [
            "The Children of Winter describe the Aug as peaceful, but admit to avoiding them. The giants' speech is slow, guttural, and made of few words; their small, dark eyes are always half-closed. They prefer silence and isolation, and rarely initiate contact with humans."
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
            "Os Aug são uma raça de gigantes que habita o Manto Branco, com quase o dobro da altura de um homem. São largos e maciços, de membros grossos e pele áspera, coberta por pelos claros e esparsos que os protegem do frio.",
            "Têm dois estômagos e digerem desde carne e raízes congeladas até pedras, que engolem para matar a fome quando a comida escasseia."
          ],
          [
            "Sua alimentação é sazonal: alimentam-se uma vez por estação, consumindo quantidades absurdas de comida num único banquete que pode durar dias. Após essa refeição, entram em um estado de sono profundo que se estende por semanas, às vezes até a estação seguinte, hibernando nas câmaras mais quentes do <span class=\"gloss\" data-codex=\"glaciar-oco\">Glaciar Oco</span> enquanto o corpo digere lentamente o estoque acumulado."
          ],
          [
            "Os Filhos do Inverno os descrevem como pacíficos, mas admitem que os evitam. A fala dos gigantes é lenta, gutural e de poucas palavras; os olhos, pequenos e escuros, ficam sempre meio fechados. Preferem o silêncio e o isolamento, e raramente iniciam contato com humanos."
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
            "The Hollow Glacier is the settlement of Aug society: a millennia-old glacier of turquoise-blue ice, so compact it creaks underfoot. Cycles of thaw and refreeze opened a labyrinth of fissures, tunnels, and chambers in the glacier's belly, which no <span class=\"gloss\" data-codex=\"aug\">Aug</span> ever needed to build, only to occupy."
          ],
          [
            "The main entrance is a vertical fissure, tall and wide enough for the largest of the giants to pass through without bowing their heads. Inside, sunlight, when it gets through the ice, tints the corridors green.",
            "On the long winter nights, seal-fat torches set along the walls cast shadows through the tunnels."
          ],
          [
            "The lower reaches of the glacier are warmed by geothermal fissures, staying damp and above freezing. There, water trickles in constant threads, forming small pools of meltwater where the Aug rest and prepare their seasonal meals. The upper tunnels, dry and frigid, function as natural meat stores, where sub-zero temperatures preserve the stockpiles for the long sleeping periods."
          ],
          [
            "It is a vast, dark refuge that creaks whenever the ice shifts. For the Aug, it is the only home they know."
          ]
        ]
      },
      pt: {
        title: "Glaciar Oco",
        eyebrow: "Assentamento dos Aug",
        pages: [
          [
            "O Glaciar Oco é o assentamento da sociedade <span class=\"gloss\" data-codex=\"aug\">Aug</span>: uma geleira milenar de gelo azul-turquesa, compacta a ponto de ranger sob os pés. Ciclos de degelo e recongelamento abriram no ventre da geleira um labirinto de fendas, túneis e câmaras, que nenhum Aug precisou construir, apenas ocupar."
          ],
          [
            "A entrada principal é uma fenda vertical, alta e larga o bastante para que o maior dos gigantes passe sem curvar a cabeça. Lá dentro, a luz do sol, quando atravessa o gelo, tinge os corredores de verde.",
            "Nas longas noites de inverno, tochas de gordura de foca presas às paredes lançam sombras pelos túneis."
          ],
          [
            "As partes mais baixas da geleira são aquecidas por fendas geotérmicas, mantendo-se úmidas e acima do ponto de congelamento. Ali, a água escorre em filetes constantes, formando pequenos lagos de água derretida onde os Aug descansam e preparam suas refeições sazonais. Os túneis superiores, secos e gélidos, funcionam como depósitos naturais de carne, onde a temperatura negativa preserva os estoques para os longos períodos de sono."
          ],
          [
            "É um refúgio amplo e escuro, que range sempre que o gelo se move. Para os Aug, é o único lar que conhecem."
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
            "The cold there runs far past the point where water freezes, and a dry, constant wind blows off the frozen sea. The snow is thin and coarse and crunches underfoot; the sky is almost always pearl-grey, and the sun shows for three or four hours a day, low on the horizon.",
            "Winter there is perpetual and predictable, except when Gelunah grows restless."
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
            "O frio ali passa muito do ponto em que a água congela, e um vento seco e constante sopra do mar congelado. A neve é fina e áspera e range sob os pés; o céu fica quase sempre cinza-perolado, e o sol aparece três ou quatro horas por dia, baixo no horizonte.",
            "O inverno é perpétuo e previsível, exceto quando Gelunah se agita."
          ]
        ]
      }
    }

  }
};
