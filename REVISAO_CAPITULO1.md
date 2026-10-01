# Capítulo I, versão 15

- **Tela final:** a linha do resultado do jogo voltou ("O gelo obedeceu em 1:35, com 54.321 pontos." ou "O primeiro Tacet chegou antes do gelo. Aheryn carrega a marca de bronze no braço."). O resto do v14 continua.

# Capítulo I, versão 14

- **Diálogo com Nuuk:** a página abria com "Questionei Nuuk" e depois oferecia "ficar em silêncio" e "Responder a Nuuk", quando Nuuk ainda não tinha dito nada. Agora abre com "Quis perguntar a Nuuk o que se passava com Gromm", e a pergunta de cada rodada é "O que Aheryn pergunta a Nuuk?" (primeira) e "O que Aheryn diz?" (as outras duas). Também corrigi a frase "Nuuk não respondeu à última pergunta", que contradizia o diálogo (ele sempre responde).
- **O Olho de Gelunah ao norte:** aparece para todo mundo que levou a pedra e a batizou assim, tenha visto a pedra de manhã ou não.
- **Tela final enxuta:** Luz, relação com Nuuk, relação com Gelunah, a pedra (com o nome que ganhou) e o diário. A comparação "X% dos leitores fizeram o mesmo" continua, só para a pedra e o diário.

# Capítulo I, versão 13: as novas falas do Aheryn

- 19 falas gravadas, ligadas aos momentos certos (pasta `assets/audio/voz/`):
  - Tocam sozinhas ao abrir: a ponte dos pinguins, a manhã na cabana (logo depois da gravação antiga), a volta pelos túneis, o compasso dos Tacets, e o olhar ao norte com o Olho de Gelunah.
  - Tocam ao tocar o ponto: a viga, a mesa, o catre, e as entradas I e III do diário.
  - Tocam ao decidir: o bronze no aposento de Gromm ("Bronze, here?" ou "Bronze, here? Not good."), os três motivos da pedra, e levar ou deixar o diário.
  - A cena do olho de Gelunah dura agora o tempo da voz e fecha sozinha.
- Três linhas viraram páginas curtas, só para quem tem o estado certo, para a voz tocar na hora de ler: a volta pelos túneis (examinou o bronze), o compasso dos Tacets (leu o diário) e o Olho de Gelunah ao norte (levou a pedra por esse motivo).
- As quatro falas sussurradas foram amplificadas um pouco para não sumirem sob o ambiente.
- O inglês da tela agora é igual ao que foi dublado (a última frase da entrada dos Tacets, e "Three counts, at rest").
- Removida a procura por arquivos `narracao/<idioma>/<página>.mp3`, que gerava dezenas de erros 404 inofensivos.

# Capítulo I — versão 11

## Correções da versão 11
- **Tirado o eco que não fazia sentido** ("Ao passar pela cova, não olhei para dentro"): ele está indo para o Glaciar Oco, não voltando pela cova dos pinguins. Agora só existe eco nesse trecho pra quem salvou o pinguim (ele reaparece de longe no caminho); quem matou todos ou deixou morrer não tem nenhuma linha aqui.
- **"Não o tirei dali." removido** do eco do caco de bronze — ficou só "O caco no bolso batia contra a minha coxa a cada passo."
- **Frase quebrada dos Tacets corrigida:** "Exceto e eu sei que vinham me buscar." virou "Exceto que eu sabia que vinham me buscar." — provavelmente um erro que já vinha do texto original.
- **Tela final do jogo cortada no PC, corrigida.** O painel de fim de jogo tinha um problema de CSS (centralização vertical que corta o topo quando o conteúdo é mais alto que a tela, sem jeito de rolar pra cima). Agora o painel sempre começa do topo e rola normalmente.
- **Jogar de novo depois de vencer.** No livro, ganhar só oferecia "Continuar a história". Agora tem "Jogar de novo" do lado, igual já existia pra quem perde.

# Versão 10

## Correções da versão 10
- **O hino agora só começa depois do "I sang low..."** O texto some de imediato antes; agora o leitor lê os dois parágrafos com calma, e só quando clica em Próxima é que o Aheryn começa a cantar de verdade (o Próxima fica bloqueado enquanto ele canta). Vale só para quem escolheu cantar alto.
- **Quem canta pra dentro não tem mais a parte de cantar alto.** O segundo parágrafo e as seis estrofes do hino só existem para quem escolheu "Deixar a luz vazar pelas frestas". Quem canta pra dentro lê um parágrafo diferente, sobre segurar a luz nos pulsos, sem nenhuma estrofe.
- **"Pelo cheiro" tirado de vez.** Achei o resto que faltava: a opção de seguir no próprio ritmo pelos túneis. Agora ele segue as pegadas de Nuuk no gelo.

# Versão 9

## Novidades da versão 9
- **Pinguins:** quem mata todos os três não tem mais nenhum eco depois — ficava sem sentido um pinguim reaparecer no caminho se não sobrou nenhum. A opção "deixar o frio" foi reescrita: os pinguins estão feridos da queda, não morrendo de frio (pinguim não morre de frio). Agora é "Deixar que morram sozinhos" — omissão, não frio.
- **Nuuk varia.** As quatro respostas dele (3 rodadas de diálogo + a da destilaria) não são mais idênticas. Mantive o vocabulário quebrado que você já tinha estabelecido — a segunda resposta ("GROMM NUM CONSEGUIR FICAR DE PÉ") é literalmente uma fala que os outros Aug já tinham dito, ouvida de longe, no capítulo. Isso é canônico — não inventei vocabulário novo, só reaproveitei o que você já tinha escrito em outro lugar.
- **A caminhada pelos túneis:** troquei "encontrei pelo cheiro" — sem sentido para um humano — por ele seguir as pegadas do Nuuk no gelo, batendo com a escolha de atenção que você já tem nos túneis (ele repara nas marcas onde o Nuuk sempre pisa).
- **O final da bebida agora reage de verdade** a quantos pensamentos sobraram — três variações, não mais uma frase fixa que ignorava a escolha do jogador.
- **O hino começa sozinho.** Tirei o botão "Let Aheryn sing". Ele começa a cantar assim que a página abre, e o "Próxima" fica bloqueado até a última estrofe soar — nas duas versões da escolha (cantar pra dentro ou cantar alto). Se você quiser que só valha para quem canta alto, me avisa que eu solto o bloqueio no outro caso.

# Versão 8

## Novidades da versão 8 (textos novos para revisar)
- **O silêncio como escolha** (destilaria): não aparece botão nenhum. Se o leitor esperar alguns segundos, surge um "…" discreto. Quem toca, faz o Aheryn falar: *— Nuuk. Gromm vai ficar bem? / — GROMM TAR MAL. / Enchi o último frasco. Ele esperou eu terminar.* Quem simplesmente segue, escolheu o silêncio, e isso volta na cabana: *Não tinha dito uma palavra a Nuuk desde os túneis. Alguns anos passam assim.*
- **Os três passos contados**: na página em que o Aheryn para e conta, o texto "Três. Vinham três." só aparece depois que o leitor ouve os três passos de bronze.
- **Despedida que não acontece**: quem deixou o mundo chegar perto durante o capítulo lê, na soleira: *Pensei em descer até o Glaciar e dizer a Nuuk que ia embora. Os Aug não entenderiam para que serve isso. Não fui.*
- **Revisão de voz**: tirei dois travessões narrativos que eu tinha escrito (regra do Guia de Vozes) e uma frase com cara de videogame ("Ganhei a tempo" virou "O gelo obedeceu a tempo. Mas a luz tinha subido alto demais, e o que sobe alto demais se vê de longe.").

# Versão 7

## Novidades da versão 7 (textos novos para revisar)
- **Perfil invisível** (perto × longe): cada escolha empurra o Aheryn para deixar o mundo chegar perto ou manter distância. Nada disso aparece na tela; muda como ele narra a volta pelos túneis:
  - perto: *No meio do túnel, quase chamei Nuuk pelo nome. Não chamei.*
  - longe: *Nuuk caminhava à minha frente. Não havia nada a dizer, e eu não disse.*
  - meio: *Pensei em perguntar de novo sobre Gromm. Deixei a pergunta onde estava.*
- **Escolha de atenção** nos túneis — *O que Aheryn percebe?* Nuuk (as marcas no gelo onde ele sempre pisa), o gelo (camadas de invernos, tão antigo quanto Gelunah), o cheiro (a raiz doce do destilado).
- **Ritual antes de beber** — janela para o norte, lenha de Frígia no fogo, ou o frasco antes das luvas. Cada um volta mais tarde: o fogo virado brasa, o frasco vazio sem lembrança, o olhar para o norte na manhã dos Tacets.
- **Memória que se fragmenta com a Luz** (texto novo, confirmar cânone):
  - Luz baixa: *Quando os Lúmae ainda se reuniam para… Não. Não pensar nisso.*
  - Luz média: *…eu contava o que tinha visto. Parei aí.*
  - Luz alta: *…eu contava o que tinha visto do outro lado do que se vê, e eles vinham ver também. Vinham todos.* — insinua que o que ele ensinou levou os Lúmae a olhar; confirme se isso bate com a Bíblia.
- **Pinguins** agora ecoam no meio do capítulo, a caminho do Glaciar, em vez do epílogo.
- **Caco de bronze** batendo na coxa no caminho de volta.
- **A Luz muda a interface**: com Luz alta a página ganha bordas douradas pulsando; com Luz baixa as cores apagam.
- **A voz do Aheryn toca sozinha** ao abrir as 5 páginas com narração; o hino só começa quando o leitor toca em *Deixar Aheryn cantar*.

## Versão 6

## Novidades desta versão
- **A magia proibida** agora fica escondida atrás de um botão "Decidir". Só depois do clique é que as opções aparecem, com um som de tensão e uma barra fina esvaziando — sem relógio visível, sem pressa em cima da leitura.
- **A flag `hesitou`** (quase tocar a magia) ganhou textura logo na página seguinte, e agora também ecoa dentro do próprio jogo final, como uma legenda.
- **A flag `ferido`** (atingido pela pedra) também ecoa dentro do jogo final, do mesmo jeito.
- **Os Aug ganharam um segundo eco**, symmetric ao que já existia: se a relação ficou ruim, Nuuk mantém mais distância no caminho de volta pelos túneis.
- **A Gelunah ganhou um segundo eco**, no instante em que o gelo obedece.
- **A vitória no jogo final ganhou peso próprio**: com Luz muito alta, uma linha nova planta a sensação de ter sido visto — sem mudar nada mecanicamente ainda, de propósito, como semente pro Capítulo II.
- **O diálogo com o Nuuk agora reage ao tom das perguntas**: se as duas primeiras respostas foram mais frias, ele fica mais rígido depois; se foram as canônicas, o Aheryn reconhece nele o próprio silêncio.
- **A escolha dos pinguins (armadilha) ganhou eco no epílogo**, um pra cada um dos três caminhos — antes ficava isolada, sem repercussão nenhuma no resto do capítulo.
- **A banda do meio da Luz (nem alta, nem baixa) ganhou linha própria no epílogo**, não só na tela de resumo do final.
- **Os pensamentos guardados no minijogo da bebida** agora ecoam no epílogo: se sobrou alguma coisa além do Título, ou se afogou tudo.
- **Limpeza**: removido o código morto dos dois minijogos antigos (Nuuk e pedra) e ~6 MB de arquivos que só existiam por causa deles.

# Capítulo I, livro interativo · Versão 3 para revisão

## O que entrou na versão 4
- **Capa**: Aheryn ocupa a direita da tela inteira (não mais espremido no canto) e a neve cai sobre a capa.
- **Nuuk**: novo retrato no lugar do antigo.
- **Minijogos de Nuuk e da pedra removidos.** Viraram escolhas com consequência, cada uma com sua cena em vídeo (detalhes abaixo). Ficaram dois minijogos: *Um pensamento a menos* e *O gelo obedece*.
- **O jogo principal agora tem consequência** na história (abaixo).

### Nos túneis com Nuuk (fundo: Nuuk andando no túnel, vídeo montado com os seus dois clipes)
| Opção | Efeito | Resultado |
|---|---|---|
| Correr atrás dele. | nenhum | Mantive o passo, meio correndo, meio escorregando, a respiração virando fumaça na frente do rosto. |
| Andar no meu ritmo e segui-lo pelo cheiro. | Luz +3 | Perdi as costas dele duas vezes nas curvas do túnel e o encontrei pelo cheiro. Nuuk não diminuiu o passo por mim. Os Aug não diminuem. / Andando sozinho entre paredes que brilham, é difícil não pensar. Pensei um pouco. |

Na página seguinte, quem andou no próprio ritmo lê: *Quando o alcancei, ele já estava parado, esperando sem parecer que esperava.*

### A pedra de Gromm (o vídeo da pedra toca depois da escolha, diferente para cada opção)
| Opção | Efeito | Resultado |
|---|---|---|
| Jogar o corpo para o lado. | nenhum (canônico) | Desviei por pouco. |
| Ficar onde estou, de mãos abertas. | ferido, Aug +1, *Nuuk vai lembrar disso* | Não desviei. A pedra pegou o meu ombro esquerdo e me jogou contra os ossos. Levantei devagar, as mãos ainda abertas. O braço respondia, mais lento. / Gromm parou de bufar por um instante. Nuuk olhava para as minhas mãos. |
| Parar a pedra no ar. | Luz +12, Aug −1, *Gromm viu a luz* | Não pensei. A luz subiu antes de mim, e a pedra parou a um palmo do meu peito, girando devagar, suspensa, até eu soltá-la. Caiu entre os ossos com um estalo seco. / Gromm me olhou como quem vê alguém pela primeira vez. Nuuk deu um passo para trás. |

Eco no fim, para quem usou a magia: *E Gromm tinha visto a luz. Os Aug não contam nada a ninguém. Esperei que continuasse assim.*

### Consequências do jogo O gelo obedece
- **Venceu em até 1:15:** *Foi rápido. Rápido o bastante para o terceiro não terminar o passo que dava.*
- **Venceu depois de 1:15:** *Demorou. Quando o gelo cedeu, o primeiro estava perto o bastante para eu ouvir o bronze ranger nas juntas.*
- **Perdeu (os Tacets chegaram):** entra uma página nova antes da fenda, Luz −10 e o Aheryn fica marcado:
  > O primeiro chegou antes do gelo.
  >
  > A mão de bronze fechou no meu antebraço, fria como a coisa que era, e pela primeira vez em cinquenta anos senti a luz ser puxada para fora de mim em vez de subir. Então o chão respondeu.

  No epílogo: *No antebraço, onde o bronze fechou, a pele ficou lisa e fria, sem veia nenhuma. A luz passava por ali e não acendia.* A marca fica gravada para os próximos capítulos.

## O que entrou na versão 3
- **Todo o kit de mídia**: 18 imagens, 6 vídeos, 10 efeitos, 2 ambientes sonoros e o louvor gravado.
- **Diagramação de livro**: cabeçalho corrido no topo da página, parágrafos justificados com recuo (como livro impresso), capitular dourada que brilha mais quando a Luz está alta, número da página no rodapé.
- **Cartões de abertura** para as cinco partes, cada um com uma epígrafe (textos novos, abaixo).
- **Clima de volta e ampliado**: neve caindo nas páginas ao ar livre, cristais de gelo cintilando dentro do Glaciar, brasas flutuando na cabana.
- **Codex** com tamanho fixo: a imagem não encolhe mais entre as páginas do verbete.
- **Imagens que mudam com a história**: o pinguim salvo aparece quando o leitor o tira da cova; o amanhecer tem as veias acesas se a Luz passou de 50; a cabana só aparece com luz nas frestas se o leitor cantou alto.
- **Minijogos com os vídeos novos**: Nuuk (recortado do fundo verde) caminha dentro do túnel em movimento, e a pedra de Gromm é o vídeo real vindo na direção da câmera.
- **Sons reais** no lugar dos sintetizados: página, gole, pensamento apagando, passadas, escorregão, pedra, visão, Luz subindo; vento de túnel e ambiente da cabana.

## Epígrafes das partes (texto novo, revisar)
| Parte | Título | Epígrafe | Fonte |
|---|---|---|---|
| I | A Borda do Mundo | O frio não guarda rancor. Guarda todo o resto. | ditado dos caçadores de Frígia |
| II | O Glaciar Oco | Os Aug contam os anos pelas vezes que o gelo racha. Contam devagar. | anotação à margem de um mapa do norte |
| III | O Destilado | Todo povo que vive no frio inventa um jeito de esquecer. | provérbio do sul |
| IV | A Cabana | Sæl’orin vethas, dumael corvethune. | louvor Lúmae, primeiro verso |
| V | Os Tacets | Fizemos o que não se cansa, para não termos de nos cansar. | inscrição Lúmae, meio apagada, numa placa de bronze |


O texto canônico do capítulo está palavra por palavra, em inglês e português, só dividido em páginas.
O livro abre em inglês; o botão PT/EN fica no topo da tela e na capa.
Tudo o que é texto novo está marcado com `// NOVO` em `capitulo1.js`, e a tradução inglesa fica em `capitulo1.en.js`.

## 1. Textos novos, página por página

### A armadilha
Contexto antes da escolha:
> Três ainda se mexiam no fundo da cova. Um deles tinha parado de tentar subir e me olhava.

| Opção | Luz | Resultado |
|---|---|---|
| Descer e acabar com eles, rápido. | +4 | Desci pela borda de gelo. Três vezes a mesma torção, a mesma pressa. Quando subi, a ponta dos meus dedos ainda estava acesa. Fechei as mãos dentro das mangas até apagar. |
| Deixar que o frio termine o serviço. | −4 | Deixei. O frio faz isso melhor do que eu e não guarda o rosto de ninguém. Fiquei de costas para a cova, contando a respiração, até o fundo ficar quieto. |
| Tirar da cova o que me olhava. | +8 | Desci, peguei o que me olhava pelo meio do corpo e o pus na neve, longe da borda. Ele ficou parado um tempo, depois foi embora sem pressa, como se a ideia tivesse sido dele. Os outros dois deixei como estavam. |

### Gelunah passa
| Opção | Efeito | Resultado |
|---|---|---|
| Deixar o aperto no peito ficar. | Luz +10, vínculo com Gelunah | Deixei. Por um momento não fiz nada contra ele, e as veias dos pulsos esquentaram sob a pele, visíveis até através das luvas. Ela não virou a cabeça. Não precisava. |
| Esvaziar a cabeça, como aprendi. | Luz −6 | Fiz o que faço há cinquenta anos. Tirei da cabeça o nome dela, depois o da montanha, depois o do frio. O aperto ficou onde estava, sem nome, e o dourado não subiu. |

O "fechar o punho" saiu. O jeito do Aheryn de suprimir é o que o próprio capítulo descreve: silenciar os pensamentos, um nome de cada vez.

### Acompanhar Nuuk (minijogo)
- Ficou para trás: *Perdi as costas dele duas vezes nas curvas do túnel e o encontrei pelo cheiro. Nuuk não diminuiu o passo por mim. Os Aug não diminuem.*
- Acompanhou: *Mantive o passo, meio correndo, meio escorregando, a respiração virando fumaça na frente do rosto.*

### Diálogo com Nuuk (três rodadas, sem relógio)
Qualquer pergunta recebe a mesma resposta canônica: **GROMM TAR MAL.** As falas canônicas estão entre as opções.

| Rodada | Opções (canônica em negrito) | Efeito das novas |
|---|---|---|
| 1 | **Nuuk, o que exatamente Gromm te contou? Como ele está?** · Ele está morrendo, Nuuk? · (silêncio) | "morrendo": Aug −1, aviso *Nuuk vai lembrar disso.* |
| 2 | **Posso ver ele?** · Tudo bem. Não é da minha conta. · (silêncio) | Aug −1, Luz −2 |
| 3 | **Às vezes consigo ajudá-lo.** · Me leve até ele, Nuuk. | canônica: Aug +1 · "me leve": Aug −1, Luz +3 |

### Os cacos de bronze
| Opção | Efeito | Resultado |
|---|---|---|
| Guardar um caco no bolso. | Luz +3, objeto *caco de bronze* | Abaixei como quem ajeita a bota e guardei um caco do tamanho de uma unha. Estava morno. Bronze não fica morno no Glaciar Oco. |
| Não tocar em nada. | nenhum | Não toquei em nada. Na casa dos outros não se mexe no lixo, mesmo quando o lixo não faz sentido. |

O caco volta três vezes: na chegada dos Tacets (*No bolso, o caco que eu trouxe do Glaciar esquentou contra a minha coxa.*), no jogo final (a primeira runa de bronze tocada é perdoada) e depois da fenda (*Tirei o caco do bolso. Tinha esfriado.*).

### A pedra de Gromm (reflexo, uma chance só)
- Desviou: canônico, *Desviei por pouco.*
- Atingido: *Não desviei inteiro. A pedra pegou o meu ombro esquerdo e me jogou contra os ossos. Levantei devagar. O braço respondia, mais lento.*
- Eco no fim: *O ombro que ele acertou doeu quando me levantei do gelo. Achei justo.*
- Se a relação com os Aug ficou positiva: *No caminho, sem se virar, ele empurrou com o pé uma pedra solta para fora da minha frente.*

### Um pensamento a menos (minijogo, agora com escolha de verdade)
Cada toque é um gole que afoga um pensamento. O leitor escolhe quais afogar e pode **parar de beber** quando quiser.
- Pensamento guardado: +5 de Luz. Pensamento afogado: −1,5.
- O que ficou aceso se junta ao Título na tela, e o cânone se mantém: sobra um único pensamento.
- Os pensamentos guardados aparecem listados na página e ficam gravados para usarmos depois.

Pensamentos: O século passado · Quando os Lúmae existiam · Quando eu era o herói do meu povo (resiste a um gole) · Todas as magias que sei lançar · O olhar dela, hoje, sobre a montanha / Um dragão triste, a oeste · O sangue de Gromm no chão / O ombro que ainda dói · O caco de bronze, morno, no bolso (só se pegou).

### Como cantou o hino
| Opção | Luz | Resultado |
|---|---|---|
| Cantar para dentro, quase sem voz. | +6 | Cantei com a boca quase fechada, a melodia presa entre os dentes. A luz subiu até o pescoço e parou ali, como quem espera permissão. |
| Deixar a luz vazar pelas frestas da cabana. | +20 | Abri a boca e a garganta junto. A luz passou do peito para os braços, dos braços para as paredes, e as frestas entre as tábuas desenharam na neve lá fora linhas finas de ouro. |

### A magia proibida (sem relógio)
Opções: **Tocar o que é proibido** (Luz +15) · **Recusar** (Luz +2). Quem escolhe tocar vê a visão:
> A mão já subia quando vi. O bronze virando cinza no vento. A cinza chegando ao sul antes de mim, em boca de viajante, em aviso de mercador. Trinta Tacets no ano seguinte. Trezentos caçadores depois deles. Uma cabana nova em outra neve, e a mesma soleira, e a mesma espera.
>
> A mão parou no ar.

### Epílogo (uma linha cada)
- Vínculo com Gelunah: *Por um instante, o vento virou de norte para oeste e voltou.*
- Luz 70 ou mais: *Levou mais tempo do que das outras vezes. A última linha só apagou quando a Borda já não aparecia atrás de mim.*
- Luz 30 ou menos: *Não levou tempo nenhum. Quase nada tinha acendido.*

## 2. O louvor (para gravar a voz do Aheryn)
Grave um arquivo por verso, dito e não cantado, com respiração entre eles. Nomes exatos:
`assets/audio/hino/verso1.mp3` até `verso6.mp3`. Quando os seis existirem, o livro toca a voz verso a verso e mostra a tradução junto. Enquanto não existirem, toca a trilha.

| Arquivo | Língua Lúmae | Inglês | Português |
|---|---|---|---|
| verso1 | Sæl’orin vethas, dumael corvethune | light that walks beneath the weight of silence | luz que caminha, sob o peso do silêncio |
| verso2 | Yr’onai selu, tharennis vael-korei | we were the name, now we are the mist | nós fomos o nome, agora somos a névoa |
| verso3 | Aeth-vorunda, sæl’aeth mor’ilenne | he saw farther, he came back whole | ele viu mais longe, ele voltou inteiro |
| verso4 | Dumael, dumael, corvethune sæl’orin | silence, silence, beneath the weight of light | silêncio, silêncio, sob o peso da luz |
| verso5 | Yr’onai selu, thariel, thariel | we were the name, weep, weep | nós fomos o nome, chorai, chorai |
| verso6 | Vael-korei sæl’aeth, mor’ilenne vorunda | the mist is light, the whole is distance | a névoa é luz, o inteiro é distância |

Pronúncia sugerida: *æ* como "é" aberto; *th* como no inglês "think"; o apóstrofo é uma pausa curta.

## 3. Lista completa do que enviar

Formato das imagens: 1920×1080, fotorrealista, mesma direção de arte do capítulo, **assunto no terço direito ou esquerdo do quadro** (o outro lado recebe o texto), rostos inteiros com folga acima da cabeça. Vídeos: 1080p, 5 a 10 s, sem cortes. Fundo verde quando indicado.

### Imagens de cena (substituem os fundos provisórios)
| # | Página | O que mostrar | Lado do assunto |
|---|---|---|---|
| 1 | Abertura | Aheryn de costas na soleira da cabana, neve seca caindo | direita |
| 2 | A armadilha | A cova de gelo com pinguins no fundo, um deles olhando para cima | direita |
| 3 | A armadilha, se salvou | Um pinguim sozinho indo embora na neve | direita |
| 4 | Glaciar Oco | Entrada da geleira turquesa ao anoitecer, Aheryn pequeno chegando | direita |
| 5 | Nuuk | Nuuk em plano médio, rosto inteiro, menor e mais jovem que Gromm | direita |
| 6 | Túneis | Aheryn seguindo as costas enormes de Nuuk num túnel azul | direita |
| 7 | Dois Aug conversando | Dois gigantes ao longe num salão de gelo | direita |
| 8 | O aposento | Platô de ossos, chão coberto de cacos de bronze | esquerda |
| 9 | Gromm | Gromm escorado nos ossos, sangue no gelo, rosto inteiro | direita |
| 10 | Destilaria | Tina de madeira, osso de baleia soltando vapor de gêiser | direita |
| 11 | A cabana por dentro | Mesa, catre, frascos, a única luz vindo das veias de Aheryn | direita |
| 12 | Frestas de luz | A cabana vista de fora, de noite, linhas douradas saindo pelas tábuas | esquerda |
| 13 | Amanhecer | Aheryn de cócoras recolhendo água do degelo | direita |
| 14 | A partida | A estrada para o sul, Aheryn pequeno e de costas | esquerda |
| 15 | Capa | Opcional: versão 16:9 da capa, com o rosto no terço direito | direita |

### Vídeos
| # | Para quê | Descrição |
|---|---|---|
| V1 | Minijogo Acompanhar Nuuk | **Fundo verde.** Nuuk caminhando de costas, se afastando da câmera, em loop, 8 s. Vou colocá-lo dentro do túnel. É o que falta para esse minijogo ficar bom. |
| V2 | Minijogo Acompanhar Nuuk | Túnel de gelo em primeira pessoa, câmera andando para a frente, loop de 8 s. |
| V3 | Minijogo A pedra | Gromm arremessando a pedra na direção da câmera, 3 s. |
| V4 | Cabana | Aheryn bebendo do frasco, as veias apagando, 6 s. |
| V5 | Hino | Aheryn cantando de olhos fechados, veias acendendo, loop de 8 s. |
| V6 | Frestas | A cabana de fora com a luz vazando pelas tábuas, loop de 6 s. |

### Sons
| # | Som | Uso |
|---|---|---|
| S1 | Virar de página com textura de gelo fino | toda página |
| S2 | Gole de bebida + frasco na mesa | minijogo dos pensamentos |
| S3 | Pensamento apagando (sopro curto, grave) | minijogo dos pensamentos |
| S4 | Passada de gigante em túnel, com eco (3 variações) | Acompanhar Nuuk |
| S5 | Escorregão no gelo | Acompanhar Nuuk |
| S6 | Pedra enorme cortando o ar + impacto em ossos | A pedra |
| S7 | Vento dentro de túnel (loop 30 s) | páginas dos túneis |
| S8 | Nota grave sustentada, dissonante | visão da magia proibida |
| S9 | Brilho da Luz subindo (cristal suave) | quando a Luz sobe |
| S10 | Ambiente da cabana à noite com fogo apagado (loop 30 s) | Parte IV, se quiser trocar o atual |

### Voz
| # | O quê | Observação |
|---|---|---|
| N1 | Louvor, 6 versos | tabela da seção 2 |
| N2 | Narração de cada página em inglês | o livro abre em inglês; um arquivo por página em `assets/audio/narracao/en/`, com o nome do id da página (ex.: `p01.mp3`, `c-armadilha.mp3`). A lista de ids está em `capitulo1.js`. O botão "Listen to Aheryn" aparece sozinho na página quando o arquivo existe |
| N3 | Narração em português | mesma divisão, em `assets/audio/narracao/pt/` |
| N4 | Falas do Nuuk e do Gromm | "GROMM TAR MAL", "SUJEIRA", "IR EMBORA OU GROMM MATAR" etc., em inglês e português |
| N5 | Falas do Aheryn no diálogo com Nuuk | as seis opções da seção 1, se quiser que ele fale o que o leitor escolhe |

### Texto
- Sua revisão dos textos novos desta página e das traduções inglesas (`capitulo1.en.js`).
