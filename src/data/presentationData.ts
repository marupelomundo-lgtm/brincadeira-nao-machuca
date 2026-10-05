import {
  ActData,
  ChecklistItem,
  ImpactPhrase,
  PresentationConfig,
  SlideData,
} from '../types/presentation';

// Visual assets gerados
export const ASSETS = {
  plateiaSilhuetas: '/src/assets/images/plateia_silhuetas_palco_1790991430063.jpg',
  notificacaoCelular: '/src/assets/images/notificacao_celular_escuridao_1790991439515.jpg',
  ponteApoio: '/src/assets/images/ponte_apoio_estudante_1790991449057.jpg',
  redePontosLuz: '/src/assets/images/rede_pontos_de_luz_1790991459615.jpg',
};

export const DEFAULT_CONFIG: PresentationConfig = {
  presenterName: 'Adilson Vicente',
  presenterRole: 'Palestrante & Especialista em Educação Socioemocional',
  schoolName: 'Auditório Principal da Escola',
  cityState: 'São Paulo / SP',
  durationMinutes: 50,
  audienceSize: '120 a 250 estudantes',
  availableResources: 'Projetor 16:9, Áudio e Microfone sem fio',
  preferredTone: 'cinematográfico e empático',
  schoolSupportChannel: 'Coordenação Pedagógica / Orientação Educacional (SOE)',
};

export const EMOTIONAL_CURVE_DATA = [
  {
    act: 1,
    name: 'Ato 1: O Acontecimento',
    tension: 82,
    empathy: 60,
    insight: 'Quebra de expectativa: a palestra já começa no clímax de uma situação real sem rodeios.',
    stateBefore: '“É apenas mais uma palestra chata sobre bullying.”',
    stateAfter: '“Espera aí... essa história parece exatamente com a minha sala.”',
  },
  {
    act: 2,
    name: 'Ato 2: A Palavra Disfarce',
    tension: 70,
    empathy: 75,
    insight: 'Desconstrução do escudo do "foi só brincadeira" com as 3 perguntas-chave.',
    stateBefore: '“A gente só estava zoando, ninguém leva a sério.”',
    stateAfter: '“Se a pessoa pediu para parar e eu continuei, não foi brincadeira.”',
  },
  {
    act: 3,
    name: 'Ato 3: O Dilema da Testemunha',
    tension: 88,
    empathy: 85,
    insight: 'Validação genuína do medo. Alívio de culpa tóxica e abertura de espaço para escolha.',
    stateBefore: '“Se eu me meter, viro o próximo alvo ou fico de dedo-duro.”',
    stateAfter: '“Eu não preciso ser um herói solitário. O silêncio também é uma escolha que posso mudar.”',
  },
  {
    act: 4,
    name: 'Ato 4: A Tela e a Amplificação',
    tension: 75,
    empathy: 80,
    insight: 'O digital não cria o ódio do nada, ele apenas infla o número de espectadores.',
    stateBefore: '“Eu só dei uma risadinha e encaminhei no grupo.”',
    stateAfter: '“Cada curtida minha é um holofote que aumenta a humilhação.”',
  },
  {
    act: 5,
    name: 'Ato 5: A Rede de Proteção',
    tension: 45,
    empathy: 92,
    insight: 'Entrega de ferramenta prática: Fato — Impacto — Pedido. Coragem com segurança.',
    stateBefore: '“O que eu posso fazer? Não tenho superpoderes.”',
    stateAfter: '“Posso sentar do lado no recreio. Posso chamar um adulto com clareza.”',
  },
  {
    act: 6,
    name: 'Ato 6: O Retorno à Plateia',
    tension: 65,
    empathy: 96,
    insight: 'Revelação cinematográfica: a história da abertura não era sobre quem atacou, era sobre quem assistiu.',
    stateBefore: '“O bullying é um monstro impossível de parar.”',
    stateAfter: '“A plateia decide. E hoje eu decidi onde termina essa história.”',
  },
];

export const ACTS_DATA: ActData[] = [
  {
    number: 1,
    title: 'O acontecimento que ninguém interrompeu',
    subtitle: 'Abertura cinematográfica sem clichês ou definições de dicionário',
    duration40m: '5 a 7 min',
    duration60m: '8 a 10 min',
    narrativeGoal: 'Capturar atenção nos primeiros 60 segundos com uma cena real e viva, estabelecendo a tese central: o poder está em quem assiste.',
    toneOfVoice: 'Voz baixa, pausada, ritmo de suspense cinematográfico, olhar firme e circular.',
    fullSpokenScript: `[▶ SLIDE 1 NA TELA: A PLATEIA DECIDE]
Boa tarde a todos. Não vim aqui hoje para dar sermão ou repetir regras que vocês já conhecem de cor. Não vim dizer quem é vilão e quem é mocinho. Eu vim contar uma história real.

[▶ AVANÇAR PARA SLIDE 2: 19:42 · UMA NOTIFICAÇÃO NO GRUPO]
São sete e quarenta da noite de uma terça-feira comum.
Um celular sobre a escrivaninha vibra. Uma vez. Duas vezes. Dez vezes em seguida.

Não é uma ligação de emergência. É uma notificação de grupo.
Alguém pegou uma foto tirada de surpresa na aula de Educação Física. Alguém passou dez minutos recortando o rosto, trocando o fundo, escrevendo uma frase com letras garrafais.
E jogou no grupo da turma.

Em três minutos, quarenta e duas pessoas visualizaram.
Quatro enviaram figurinhas rindo.
Duas pessoas marcaram outros colegas nos comentários.
E trinta e seis pessoas... apenas olharam. Olharam e não disseram nada.

A pessoa da foto também estava no grupo.
Ela viu o número de visualizações subir. Ela viu as reações chegarem.
E pensou: "Amanhã de manhã, quando eu passar pelo portão da escola, todo mundo já viu isso."

(Pausa dramática de 4 segundos — silêncio total na sala)

[▶ AVANÇAR PARA SLIDE 3: EM QUE MOMENTO DEIXOU DE SER BRINCADEIRA?]
A pergunta que não quer calar é uma só:
Em que momento exato... essa história deixou de ser uma brincadeira?

(Gesto Cênico — Metáfora do Holofote: Se as luzes puderem ser reduzidas, aponte a lanterna ou laser para uma cadeira vazia)
"O agressor não tem força sozinho. Quem segura a lanterna e aponta o holofote para a pessoa... é a plateia que ri e compartilha. Se a plateia apagar a luz, a humilhação perde o palco."

Talvez o mais importante nessa história não seja quem criou a montagem.
Talvez o que realmente decide o final... seja o que aconteceu depois que todo mundo viu.`,
    pauseIndications: [
      'Pausa de 2 segundos após "Dez vezes em seguida"',
      'Pausa de 4 segundos após descrever a pessoa vendo as visualizações',
      'Pausa de 3 segundos antes da pergunta de abertura',
    ],
    audienceQuestions: [
      'Quem aqui já viu uma mensagem chegar num grupo e sentiu um nó no estômago antes mesmo de abrir?',
      'Em que momento uma piada deixa de ser diversão e vira outra coisa?',
    ],
    transitionToNext: 'Porque quando a gente pergunta para quem enviou a montagem, a resposta é quase sempre a mesma frase de duas palavras...',
    impactPhrase: 'Talvez o mais importante nessa história não seja quem criou a montagem, mas o que aconteceu depois que todo mundo viu.',
    associatedSlideNumbers: [1, 2, 3],
  },
  {
    number: 2,
    title: 'A palavra que tenta esconder o dano',
    subtitle: 'Desarmando o escudo do "foi só brincadeira" com três perguntas-chave',
    duration40m: '6 a 8 min',
    duration60m: '10 a 12 min',
    narrativeGoal: 'Diferenciar conflito comum, brincadeira recíproca e violência repetida sem usar juridiquês pesado.',
    toneOfVoice: 'Conversacional, direto, empático e questionador, sem soar como acusação.',
    fullSpokenScript: `[▶ AVANÇAR PARA SLIDE 4: "FOI SÓ UMA BRINCADEIRA"]
Existe uma frase que vocês já ouviram dezenas de vezes. Ela funciona quase como uma capa de invisibilidade:
"Ah, foi só uma brincadeira."
"Não aguenta, não brinca."
"Todo mundo faz isso, deixa de ser chato."

Mas vamos ser muito honestos entre nós.
Brincadeira é quando duas pessoas estão rindo juntas.
Se apenas uma ri, e a outra precisa engolir o choro ou disfarçar olhando para o chão... o nome disso mudou de endereço.

[▶ AVANÇAR PARA SLIDE 5: TRÊS ROSTOS DA EXCLUSÃO]
Pensem em três situações muito reais que acontecem em qualquer colégio do Brasil:
Primeira: um apelido inventado no início do ano. A pessoa riu na primeira vez para não ficar chata. Na décima vez, ela pediu: "Por favor, para, eu não gosto disso". E o apelido continuou.
Segunda: toda vez que o professor pede para montar grupos de quatro, três pessoas se olham, fecham a rodinha com os ombros e deixam alguém em pé, no meio do corredor, esperando o professor intervir.
Terceira: comentários diários e insistentes sobre o cabelo, o corpo, o jeito de andar, o sotaque, a família ou o celular que a pessoa usa.

[▶ AVANÇAR PARA SLIDE 6: O TESTE DAS TRÊS PERGUNTAS]
Como vocês sabem se ultrapassou o limite?
Guardem apenas três perguntas no bolso:
1. A pessoa conseguiu dizer livremente que não queria aquilo?
2. O pedido para parar foi escutado e respeitado?
3. A situação está se repetindo, atraindo uma plateia e fazendo alguém sentir vergonha de vir para a escola?

Se a resposta for "não foi respeitado" e "está atraindo plateia"... não é brincadeira. É um ciclo que precisa de oxigênio para queimar.`,
    pauseIndications: [
      'Pausa de 3 segundos após "o nome disso mudou de endereço"',
      'Silêncio após apresentar cada uma das 3 perguntas-chave',
    ],
    audienceQuestions: [
      'Uma brincadeira precisa humilhar alguém para ser engraçada?',
      'Quando alguém te pede para parar uma brincadeira, o que acontece se você simplesmente parar?',
    ],
    transitionToNext: 'E quem dá esse oxigênio quase nunca é o agressor sozinho. É alguém muito mais numeroso... que costuma ficar calado.',
    impactPhrase: 'Brincadeira é quando os dois lados se divertem. Quando um lado precisa fingir que não doeu, o nome é outro.',
    associatedSlideNumbers: [4, 5, 6],
  },
  {
    number: 3,
    title: 'A pessoa invisível no centro da história',
    subtitle: 'O dilema de quem presencia e o medo de se tornar o próximo alvo',
    duration40m: '7 a 9 min',
    duration60m: '10 a 13 min',
    narrativeGoal: 'Acolher o medo da testemunha, desmistificar o rótulo de "dedo-duro" e mostrar que a omissão pode ser transformada em proteção segura.',
    toneOfVoice: 'Íntimo, compreensivo, olho no olho com as primeiras fileiras, tom acolhedor.',
    fullSpokenScript: `[▶ AVANÇAR PARA SLIDE 7: O DILEMA DE QUEM PRESENCIA]
Eu quero falar agora com a pessoa que raramente é citada nas palestras.
Não é quem ofendeu. E não é quem foi ofendido.
É quem estava sentado na terceira carteira da esquerda. Olhando tudo.

Essa pessoa viu o bilhete passar. Viu o empurrão no corredor. Viu a montagem no celular.

[▶ AVANÇAR PARA SLIDE 8: O QUE A MENTE DIZ NO MEDO]
E naquele exato segundo, quatro pensamentos passaram como um raio na cabeça dela:
"Se eu falar alguma coisa, eles vão se virar contra mim e eu serei o próximo."
"Se eu contar para a coordenação, vão me chamar de dedo-duro até o nono ano."
"Isso nem é problema meu, eles que se resolvam."
"Com certeza alguém mais velho ou o professor vai ver e resolver."

Deixa eu dizer algo muito importante para vocês, e prestem bastante atenção:
Sentir medo diante de uma agressão é a coisa mais humana do mundo. Ninguém aqui é obrigado a ser herói de filme da Marvel. Ninguém aqui deve entrar no meio de uma briga para se machucar.

[▶ AVANÇAR PARA SLIDE 9: NÃO É CULPA. É CAPACIDADE]
Você não tem culpa pelo que outra pessoa fez.
Mas você tem um poder imenso sobre o que acontece no minuto seguinte.

Porque a testemunha tem escolhas:
Ela pode escolher rir — e aí ela acabou de dar um troféu para quem humilhou.
Ela pode escolher compartilhar — e aí ela multiplicou a dor por cem.
Ou ela pode escolher a ação mais corajosa e silenciosa de todas:
Não rir. Não curtir. Não aplaudir.
E, no intervalo, caminhar até aquela pessoa e dizer apenas: "Eu vi o que fizeram. Achei uma covardia. Quer sentar aqui comigo?"`,
    pauseIndications: [
      'Pausa reflexiva de 5 segundos após listar os 4 pensamentos da testemunha',
      'Pausa calma após "Sentir medo é a coisa mais humana do mundo"',
    ],
    audienceQuestions: [
      'Levantem a mão bem discreto: quem aqui já presenciou algo chato e não falou nada porque teve medo de virar o alvo?',
      'Vocês já perceberam que a maioria da sala pensa exatamente a mesma coisa ao mesmo tempo?',
    ],
    transitionToNext: 'E hoje em dia, esse medo ficou ainda mais barulhento porque as paredes da escola caíram. A plateia agora cabe na palma da mão.',
    impactPhrase: 'A testemunha não é responsável pelo que o outro fez, mas é quem decide se a humilhação vai ter aplausos ou silêncio.',
    associatedSlideNumbers: [7, 8, 9],
  },
  {
    number: 4,
    title: 'A tela não criou o problema; ela aumentou a plateia',
    subtitle: 'O efeito multiplicador do mundo digital, memes e grupos de mensagem',
    duration40m: '6 a 8 min',
    duration60m: '9 a 11 min',
    narrativeGoal: 'Explicar a dinâmica da violência digital sem demonizar a tecnologia, ressaltando o papel de cada curtida e compartilhamento.',
    toneOfVoice: 'Ágil, moderno, usando vocabulário que conecta com a realidade das redes sociais.',
    fullSpokenScript: `[▶ AVANÇAR PARA SLIDE 10: A TELA E O ESTÁDIO LOTADO]
Antigamente, quando duas pessoas se desentendiam no pátio da escola, o sinal tocava, todo mundo entrava para a sala de aula e a poeira começava a baixar.
Hoje, quando o sinal toca, a história nem começou.

Ela vai para o grupo do WhatsApp. Vira figurinha. Vira story de melhores amigos. Vira piada no chat do Discord durante o jogo à noite.
A internet não inventou o deboche. A internet só fez uma coisa:
Ela pegou uma sala de trinta pessoas e transformou em um estádio lotado com mil espectadores olhando para o mesmo alvo.

E atrás da tela, acontece um fenômeno curioso: a gente não vê a lágrima. A gente não vê a pessoa sem dormir.
A gente só vê um botão de coração, um emoji de gargalhada e uma contagem de compartilhamentos.
Parece um videogame. Parece que as pessoas na tela não têm carne, osso e coração.

[▶ AVANÇAR PARA SLIDE 11: A REGRA DE OURO DIGITAL]
Por isso, guardem a nossa regra de ouro digital:
PARE. PROTEJA. PROCURE AJUDA.

E antes de qualquer coisa, façam comigo o Pacto dos 3 Segundos:
Antes de apertar aquele botãozinho verde de enviar uma foto, uma figurinha ou um comentário zoando alguém... parem o dedo por 3 segundos.
Um... dois... três.
E façam o Teste do Espelho:
"Se essa foto fosse sobre a minha mãe, meu irmão ou sobre mim... eu acharia engraçado?"
Se a resposta for não, apague. Você acabou de salvar o dia de alguém sem ninguém nem saber.

1. PARE: viu uma montagem humilhante? Não encaminhe para o seu melhor amigo dizendo "olha que absurdo". Encaminhar para mostrar indignação ainda é encaminhar. Não curta. Não alimente o algoritmo da vergonha alheia.
2. PROTEJA: mande uma mensagem privada para quem está sendo atacado: "Eu não concordo com isso. Você tá bem?"
3. PROCURE AJUDA: tire um print com data e hora e leve direto a um adulto responsável. Não tente bancar o detetive sozinho na internet.`,
    pauseIndications: [
      'Pausa enfática ao anunciar os três verbos: PARE... PROTEJA... PROCURE AJUDA',
    ],
    audienceQuestions: [
      'Já pararam para pensar por que é tão mais fácil ser maldoso quando a gente não está olhando no olho da pessoa?',
      'Quantas curtidas vale a paz de alguém que estuda com você todo dia?',
    ],
    transitionToNext: 'E quando a gente decide agir, qual é o caminho certo? Brigar de volta? Pagar na mesma moeda? Não.',
    impactPhrase: 'A tela esconde a reação de quem sofre, mas não apaga a dor que ela causa.',
    associatedSlideNumbers: [10, 11],
  },
  {
    number: 5,
    title: 'A saída não é vingança; é uma rede',
    subtitle: 'O protocolo FATO — IMPACTO — PEDIDO e como agir com inteligência e segurança',
    duration40m: '6 a 8 min',
    duration60m: '8 a 10 min',
    narrativeGoal: 'Apresentar ferramenta de comunicação não violenta e segura para estudantes se reportarem a adultos sem risco.',
    toneOfVoice: 'Prático, instrutivo, firme, transmitindo segurança e acolhimento.',
    fullSpokenScript: `[▶ AVANÇAR PARA SLIDE 12: A SAÍDA NÃO É VINGANÇA]
Tem gente que acha que a solução contra quem ataca é atacar com mais força.
"Se me zoou, eu vou zoar em dobro. Se me bateu, eu vou chamar meus amigos para pegar na saída."
Sabe o que acontece quando a gente devolve na mesma moeda?
A fogueira não apaga. Ela só queima o colégio inteiro.

A saída não é vingança. A saída é construir uma rede.
E uma rede funciona quando você sabe como falar com quem pode resolver de verdade.

[▶ AVANÇAR PARA SLIDE 13: COMO FALAR COM UM ADULTO (FATO · IMPACTO · PEDIDO)]
Muitas vezes o estudante diz: "Eu avisei a professora, mas ela disse que era frescura".
Isso às vezes acontece porque a gente chega emocionado, falando: "Fulano é insuportável, todo mundo odeia ele!"
Adulto não consegue agir bem com desabafo vago. Adulto precisa de três coisas:
FATO. IMPACTO. PEDIDO.

Olhem como essa frase muda tudo:
1. FATO: "Durante quatro dias, três colegas estão jogando a mochila da Mariana no lixo durante o recreio, mesmo ela tendo pedido para parar." (Isso é concreto, sem exagero).
2. IMPACTO: "A Mariana passou o intervalo chorando no banheiro e disse que não quer mais vir para a aula amanhã." (Isso mostra o dano real).
3. PEDIDO: "Professor, nós precisamos que um adulto fique perto do corredor do recreio amanhã para que isso seja interrompido com segurança."

FATO. IMPACTO. PEDIDO.
Se o primeiro adulto não ouvir, você não desiste: você vai ao coordenador, à direção, ao orientador ou aos seus pais.
Coragem não é não sentir medo.
Coragem é fazer a coisa certa mesmo tremendo por dentro.`,
    pauseIndications: [
      'Pausas claras entre FATO... IMPACTO... e PEDIDO',
      'Pausa após a definição de coragem',
    ],
    audienceQuestions: [
      'Quem aqui tem pelo menos um adulto de confiança — seja em casa, seja aqui na escola — com quem conseguiria conversar com calma?',
    ],
    transitionToNext: 'E agora... eu preciso contar para vocês o verdadeiro final daquela história que começamos lá no primeiro minuto.',
    impactPhrase: 'Coragem não é ausência de medo. É escolher uma atitude segura mesmo quando o medo está presente.',
    associatedSlideNumbers: [12, 13],
  },
  {
    number: 6,
    title: 'O final surpreendente: a história volta para a plateia',
    subtitle: 'Retomada da abertura com virada cênica e decisão concreta',
    duration40m: '5 a 7 min',
    duration60m: '7 a 9 min',
    narrativeGoal: 'Encerrar com impacto indelével, devolvendo a responsabilidade e o poder para a plateia com esperança e união.',
    toneOfVoice: 'Emocionado, pausado, firme, olhando nos olhos de diferentes setores do auditório.',
    fullSpokenScript: `Lembram daquela terça-feira às sete e quarenta da noite?
A montagem humilhante no grupo de WhatsApp.
Quarenta e duas pessoas viram. Quatro riram. Duas comentaram.
E trinta e seis ficaram em silêncio.

Eu disse no começo que talvez o mais importante não fosse quem criou a imagem. E é verdade.
Porque às sete e quarenta e cinco, aquela história tomou um rumo que quase ninguém esperava.

[▶ AVANÇAR PARA SLIDE 14: ÀS 19H45: QUATRO PALAVRAS]
Uma das trinta e seis pessoas que estavam quietas... respirou fundo.
Ela não xingou ninguém. Não mandou mensagem com textão raivoso.
Ela apenas digitou quatro palavras simples no grupo:
"Gente, perdeu a graça."

(Silêncio sagrado de 5 segundos — sustentado com firmeza no palco)

Quatro palavras. "Gente, perdeu a graça."
Em dez segundos, outra pessoa mandou um emoji concordando.
Uma terceira escreveu: "Verdade, apaga isso aí."
E o silêncio de quem não concordava... de repente virou voz.
Quem tinha mandado a foto apagou a mensagem.
E na manhã seguinte, quando aquela aluna entrou pelo portão... ela não encontrou uma sala apontando o dedo.
Ela encontrou duas pessoas esperando por ela com um sorriso simples na porta.

[▶ AVANÇAR PARA SLIDE 15: A REDE DE PROTEÇÃO ESTÁ FORMADA]
Essa história não precisou de capa de super-herói.
Precisou de uma pessoa comum que se lembrou de uma verdade fundamental:
Olhem para os lados. Cada pessoa sentada nessa cadeira tem um dia difícil de vez em quando. Ninguém precisa enfrentar isso sozinho.
Quando uma voz se levanta com dignidade, o silêncio da sala inteira vira proteção mútua.

[▶ AVANÇAR PARA SLIDE 16: O BULLYING PRECISA DE UMA PLATEIA PARA CRESCER]
O bullying precisa de uma plateia para existir e crescer.
Mas quando a plateia decide que o espetáculo acabou...
A história termina ali.

Hoje, quando vocês saírem por aquela porta, ninguém precisa prometer que vai mudar o mundo inteiro.
Mas na próxima vez que alguém disser "foi só uma brincadeira"...
Lembrem-se de quem vocês são.
A plateia decide. E a escolha é de cada um de vocês.
Muito obrigado.`,
    pauseIndications: [
      'Silêncio sagrado de 5 segundos após a frase "Gente, perdeu a graça"',
      'Pausa final antes da frase de encerramento',
    ],
    audienceQuestions: [
      'Quem aqui aceita o desafio de não ser plateia para a humilhação de ninguém a partir de hoje?',
    ],
    transitionToNext: 'Abertura para acolhimento individual e perguntas finais da plateia.',
    impactPhrase: 'O bullying precisa de uma plateia para crescer. Mas também pode encontrar uma plateia que decide que a história termina ali.',
    associatedSlideNumbers: [14, 15, 16],
  },
];

export const SLIDES_DATA: SlideData[] = [
  {
    id: 'slide-01',
    number: 1,
    actNumber: 1,
    actTitle: 'Ato 1 — Abertura',
    title: 'A Plateia Decide',
    onScreenText: 'A PLATEIA DECIDE',
    subtitle: 'Bullying, silêncio e o poder de uma escolha',
    layout: 'cinematic-image',
    imageSrc: ASSETS.plateiaSilhuetas,
    imageAlt: 'Silhuetas de adolescentes no auditório em contraluz cinematográfica',
    narrativeFunction: 'Estabelecer clima cinematográfico sem clichês. Capturar curiosidade e quebrar a postura defensiva dos estudantes.',
    durationMinutes40: 2,
    durationMinutes60: 3,
    spokenSummary: 'Boas-vindas silenciosas, sem discursos formais. Entrada direto na atmosfera cênica.',
    slideTriggerPhrase: 'Boa tarde a todos. Não vim aqui dar sermão ou repetir regras que vocês já conhecem de cor...',
    whenToAdvance: 'Mantenha na tela enquanto sobe ao palco (30 a 50 segundos). Avance para o Slide 2 no exato segundo em que começar a descrever: "São sete e quarenta da noite...".',
    notes: {
      spokenText: 'Boa tarde a todos. Não vim aqui dar sermão ou repetir regras que vocês já conhecem de cor.',
      emotionalIntent: 'Gerar curiosidade e respeito mútuo instantâneo.',
      rhythm: 'Pausado e seguro, sem pressa de começar a falar logo.',
      suggestedPauseSec: 3,
      whereToLook: 'Varredura lenta da última fileira para as fileiras da frente.',
      wordsToEmphasize: ['Decide', 'Poder', 'Escolha'],
      misinterpretationRisk: 'Parecer uma bronca institucional ou discurso de punição.',
      recoveryAttentionTip: 'Dê dois passos lentos para a frente no palco e faça 4 segundos de silêncio absoluto com postura relaxada.',
    },
    imagePrompt: {
      pt: 'Fotografia cinematográfica ampla de um auditório com silhuetas de estudantes adolescentes diversos, iluminação dramática azul-marinho e âmbar, poeira suspensa na luz, atmosfera emocional e sóbria, proporção 16:9.',
      en: 'Cinematic wide shot of teenage students in auditorium as dramatic silhouettes against warm amber stage light, deep navy blue atmosphere, 35mm film still, 16:9.',
      palette: 'Azul marinho profundo (#0A1128), Âmbar quente (#F59E0B), Branco suave',
      lighting: 'Contraluz dramática, atmosfera cinematográfica de teatro',
    },
  },
  {
    id: 'slide-02',
    number: 2,
    actNumber: 1,
    actTitle: 'Ato 1 — O Acontecimento',
    title: 'A Mensagem que Ninguém Parou',
    onScreenText: '19:42 · UMA NOTIFICAÇÃO NO GRUPO',
    subtitle: 'Quarenta e duas pessoas viram. Quatro riram. Trinta e seis olharam em silêncio.',
    layout: 'cinematic-image',
    imageSrc: ASSETS.notificacaoCelular,
    imageAlt: 'Tela de celular iluminando uma carteira escolar na penumbra',
    narrativeFunction: 'Contar a história da montagem com riqueza sensorial, conectando direto com a vida digital cotidiana dos estudantes.',
    durationMinutes40: 2.5,
    durationMinutes60: 3.5,
    spokenSummary: 'A descrição da notificação, a imagem manipulada, o número de visualizações subindo e a sensação de impotência de quem é alvo.',
    slideTriggerPhrase: 'São sete e quarenta da noite de uma terça-feira comum. Um celular sobre a escrivaninha vibra...',
    whenToAdvance: 'Fale toda a cena da montagem até a pausa de 4 segundos ("silêncio total na sala"). Ao lançar a pergunta "Em que momento deixou de ser brincadeira?", avance para o Slide 3.',
    notes: {
      spokenText: 'São sete e quarenta da noite. O celular vibra na mesa. Uma montagem circula no grupo...',
      emotionalIntent: 'Criar tensão dramática e identificação imediata com a rotina digital.',
      rhythm: 'Cadenciado, voz mais baixa e confidencial.',
      suggestedPauseSec: 4,
      whereToLook: 'Olhar nos olhos de estudantes específicos no meio do auditório.',
      wordsToEmphasize: ['Quarenta e duas viram', 'Trinta e seis em silêncio'],
      misinterpretationRisk: 'Achar que você está criticando o uso de celulares em geral.',
      recoveryAttentionTip: 'Reduza o volume da sua voz. Quando o palestrante fala baixo, o auditório é forçado a silenciar para ouvir.',
    },
    interactiveSignal: {
      type: 'poll',
      prompt: 'Sinal discreto com a mão:',
      instruction: 'Quem aqui já viu uma foto ou montagem no grupo da turma que passou do limite? Apenas levantem um dedo.',
    },
    imagePrompt: {
      pt: 'Close-up cinematográfico de um smartphone moderno sobre uma carteira de escola de madeira em ambiente escurecido, luz suave azulada da tela refletindo na madeira, profundidade de campo rasa, 16:9.',
      en: 'Cinematic moody close-up of a glowing smartphone on a wooden school desk in dim classroom light, soft blue notification glow, shallow depth of field, 16:9.',
      palette: 'Preto ônix, Azul elétrico suave, Madeira escura',
      lighting: 'Luz pontual da tela no escuro',
    },
  },
  {
    id: 'slide-03',
    number: 3,
    actNumber: 1,
    actTitle: 'Ato 1 — O Ponto de Virada',
    title: 'A Pergunta que Fica',
    onScreenText: 'Em que momento deixou de ser brincadeira?',
    subtitle: 'Talvez o mais importante não seja quem criou a imagem, mas o que aconteceu depois que todos viram.',
    layout: 'interactive-question',
    narrativeFunction: 'Fazer o primeiro corte reflexivo. Tirar o foco do "culpado solitário" e abrir os olhos para o ecossistema social.',
    durationMinutes40: 2,
    durationMinutes60: 3,
    spokenSummary: 'Lançar a tese central: o que define o rumo de uma situação é o comportamento da plateia.',
    slideTriggerPhrase: 'A pergunta que não quer calar é uma só: Em que momento exato essa história deixou de ser uma brincadeira?...',
    whenToAdvance: 'Deixe a pergunta ecoar no auditório por 5 segundos. Ao fechar a transição ("Porque quando a gente pergunta..."), avance para o Slide 4 para iniciar o Ato 2.',
    notes: {
      spokenText: 'Em que momento essa história deixou de ser brincadeira? O que aconteceu depois que todo mundo viu? (Gesto da Lanterna: aponte o feixe para uma cadeira vazia: "Quem segura o holofote é a plateia").',
      emotionalIntent: 'Provocação intelectual respeitosa com metáfora visual física da lanterna.',
      rhythm: 'Lento, deixando ecoar o silêncio da pergunta.',
      suggestedPauseSec: 5,
      whereToLook: 'Giro completo de cabeça por todo o público.',
      wordsToEmphasize: ['Em que momento', 'Depois que todos viram', 'Holofote'],
      misinterpretationRisk: 'Fazer os alunos se sentirem acusados precocemente.',
      recoveryAttentionTip: 'Aguarde os 5 segundos sem quebrar a postura. O silêncio do palestrante gera expectativa.',
    },
  },
  {
    id: 'slide-04',
    number: 4,
    actNumber: 2,
    actTitle: 'Ato 2 — A Palavra Disfarce',
    title: 'O Escudo Invisível',
    onScreenText: '“FOI SÓ UMA BRINCADEIRA.”',
    subtitle: 'A frase usada para anestesiar o que aconteceu.',
    layout: 'minimal-quote',
    narrativeFunction: 'Desconstruir a desculpa mais comum usada em escolas e redes sociais.',
    durationMinutes40: 2.5,
    durationMinutes60: 3.5,
    spokenSummary: 'Análise das frases feitas: "Não aguenta não brinca", "Todo mundo faz", "Era só meme".',
    slideTriggerPhrase: 'Existe uma frase que vocês já ouviram dezenas de vezes. Ela funciona quase como uma capa de invisibilidade: Foi só uma brincadeira...',
    whenToAdvance: 'Fale sobre a fronteira entre rir junto e rir de alguém. Quando disser "Pensem em três situações muito reais...", avance para o Slide 5.',
    notes: {
      spokenText: 'Todo mundo aqui já ouviu essa frase. Ela serve como um passe livre para machucar sem assumir o estrago.',
      emotionalIntent: 'Desmistificar o cinismo com firmeza e lucidez.',
      rhythm: 'Enérgico e articulado.',
      suggestedPauseSec: 2,
      whereToLook: 'Para os grupos que costumam sentar no fundo da sala.',
      wordsToEmphasize: ['Só uma brincadeira', 'Anestesiar'],
      misinterpretationRisk: 'Parecer que qualquer brincadeira sadia é proibida.',
      recoveryAttentionTip: 'Diga: "Eu também gosto de rir e fazer piada. Mas tem uma fronteira muito clara entre rir junto e rir de alguém."',
    },
  },
  {
    id: 'slide-05',
    number: 5,
    actNumber: 2,
    actTitle: 'Ato 2 — Três Situações Reais',
    title: 'Três Rostos da Exclusão',
    onScreenText: '1. O apelido que não para após o pedido\n2. A rodinha que se fecha no trabalho em grupo\n3. O comentário diário sobre corpo, origem ou identidade',
    subtitle: 'Nenhum deles é invisível para quem está passando.',
    layout: 'three-pillars',
    narrativeFunction: 'Ilustrar o bullying sem termos abstratos, usando situações concretas e conhecidas por eles.',
    durationMinutes40: 2.5,
    durationMinutes60: 4,
    spokenSummary: 'Explicação detalhada dos 3 cenários cotidianos que doem mais pelo silêncio em volta.',
    slideTriggerPhrase: 'Pensem em três situações muito reais que acontecem em qualquer colégio do Brasil...',
    whenToAdvance: 'Fale dos três cenários (o apelido, a rodinha fechada, o comentário insistente). Ao perguntar "Como vocês sabem se ultrapassou o limite?", avance para o Slide 6.',
    notes: {
      spokenText: 'Não estamos falando de coisas de filme americano. Estamos falando do que acontece às dez da manhã no intervalo.',
      emotionalIntent: 'Validação da dor de quem sofre e clareza para quem presencia.',
      rhythm: 'Didático, com pausas entre cada um dos 3 itens.',
      suggestedPauseSec: 3,
      whereToLook: 'Alternar o olhar para o lado esquerdo, centro e lado direito da plateia.',
      wordsToEmphasize: ['Não para', 'Se fecha', 'Diário'],
      misinterpretationRisk: 'Expor algum aluno presente. Sempre reforce que são exemplos fictícios.',
      recoveryAttentionTip: 'Relembre: "Não citem nomes. Não olhem para ninguém em específico agora. Pensem apenas no conceito."',
    },
  },
  {
    id: 'slide-06',
    number: 6,
    actNumber: 2,
    actTitle: 'Ato 2 — O Teste das Três Perguntas',
    title: 'Como Saber a Diferença?',
    onScreenText: '1. A pessoa conseguiu dizer livremente que não queria?\n2. O pedido para parar foi respeitado?\n3. Está atraindo plateia ou impedindo a pessoa de participar?',
    subtitle: 'Se a resposta for NÃO para as duas primeiras, não é brincadeira.',
    layout: 'three-pillars',
    narrativeFunction: 'Fornecer uma bússola moral simples e memorável para os estudantes levarem para a vida.',
    durationMinutes40: 2,
    durationMinutes60: 3.5,
    spokenSummary: 'Apresentação da regra prática das três perguntas de checagem relacional.',
    slideTriggerPhrase: 'Como vocês sabem se ultrapassou o limite? Guardem apenas três perguntas no bolso...',
    whenToAdvance: 'Apresente as 3 perguntas e a regra do oxigênio. Ao fazer a transição ("E quem dá esse oxigênio quase nunca é o agressor sozinho..."), avance para o Slide 7.',
    notes: {
      spokenText: 'Daqui a cinco meses vocês podem esquecer meu nome, mas guardem essas três perguntas no bolso.',
      emotionalIntent: 'Empoderar o discernimento moral do jovem.',
      rhythm: 'Firme, assertivo, memorável.',
      suggestedPauseSec: 3,
      whereToLook: 'Conexão direta com as lideranças naturais da turma.',
      wordsToEmphasize: ['Livremente', 'Respeitado', 'Plateia'],
      misinterpretationRisk: 'Tornar a explicação jurídica ou mecânica.',
      recoveryAttentionTip: 'Peça para repetirem mentalmente as três palavras: Livre? Respeitou? Repetiu?',
    },
  },
  {
    id: 'slide-07',
    number: 7,
    actNumber: 3,
    actTitle: 'Ato 3 — A Testemunha',
    title: 'A Pessoa na Terceira Carteira',
    onScreenText: 'O DILEMA DE QUEM PRESENCIA',
    subtitle: 'Nem agressor. Nem vítima. A testemunha que sente o peso da escolha.',
    layout: 'split-mirror',
    narrativeFunction: 'Deslocar o foco da dupla clássica e acolher o espectador silencioso sem culpá-lo.',
    durationMinutes40: 2.5,
    durationMinutes60: 4,
    spokenSummary: 'A solidão de quem assiste e os quatro pensamentos automáticos de autopreservação.',
    slideTriggerPhrase: 'Eu quero falar agora com a pessoa que raramente é citada nas palestras: quem estava sentado na terceira carteira da esquerda...',
    whenToAdvance: 'Fale da testemunha vendo o bilhete, empurrão e celular. Ao dizer "E naquele exato segundo, quatro pensamentos passaram como um raio...", avance para o Slide 8.',
    notes: {
      spokenText: 'Vamos falar com quem quase nunca é chamado nas conversas: quem estava ali só assistindo.',
      emotionalIntent: 'Alívio de culpa tóxica e abertura de consciência.',
      rhythm: 'Tranquilo, acolhedor e cúmplice.',
      suggestedPauseSec: 3,
      whereToLook: 'Para os estudantes mais reservados e tímidos.',
      wordsToEmphasize: ['Terceira carteira', 'Escolha', 'Presencia'],
      misinterpretationRisk: 'Fazer o estudante se sentir covarde.',
      recoveryAttentionTip: 'Diga com afeto: "Eu também já tive medo na idade de vocês. Ter medo é a prova de que você é um ser humano vivo."',
    },
    interactiveSignal: {
      type: 'mental-choice',
      prompt: 'Escolha mental silenciosa:',
      instruction: 'Lembre-se da última vez que viu alguém ser zombado. O que falou mais alto: a vontade de ajudar ou o medo de virar o próximo alvo?',
    },
  },
  {
    id: 'slide-08',
    number: 8,
    actNumber: 3,
    actTitle: 'Ato 3 — Os Quatro Pensamentos',
    title: 'O Que a Mente Diz no Medo',
    onScreenText: '• “Se eu falar, serei o próximo.”\n• “Não quero parecer dedo-duro.”\n• “Não é problema meu.”\n• “Alguém com certeza vai resolver.”',
    subtitle: 'O medo é real. Mas a omissão coletiva é o que mantém o ciclo vivo.',
    layout: 'three-pillars',
    narrativeFunction: 'Dar nome aos bois. Expor os 4 pensamentos universais que paralisam uma turma.',
    durationMinutes40: 2.5,
    durationMinutes60: 3.5,
    spokenSummary: 'Desconstrução do efeito espectador e do mito do "dedo-duro".',
    slideTriggerPhrase: 'E naquele exato segundo, quatro pensamentos passaram como um raio na cabeça dela...',
    whenToAdvance: 'Leia e acolha os 4 medos. Explique que sentir medo é humano. Ao dizer "Você não tem culpa pelo que o outro fez, mas decide o que acontece depois", avance para o Slide 9.',
    notes: {
      spokenText: 'Quem aqui já pensou exatamente uma dessas quatro coisas? Todas são mecanismos normais de defesa.',
      emotionalIntent: 'Normalizar o sentimento para poder transformá-lo.',
      rhythm: 'Pausado em cada bullet point.',
      suggestedPauseSec: 3,
      whereToLook: 'Olhar aberto, convidativo, sem julgamento.',
      wordsToEmphasize: ['Serei o próximo', 'Dedo-duro', 'Problema meu', 'Alguém'],
      misinterpretationRisk: 'Ouvir risadas defensivas. Antecipe isso com seriedade acolhedora.',
      recoveryAttentionTip: 'Se houver risadinhas: "É engraçado porque todo mundo aqui já pensou isso, não é? A gente ri de nervoso quando a verdade bate na porta."',
    },
  },
  {
    id: 'slide-09',
    number: 9,
    actNumber: 3,
    actTitle: 'Ato 3 — A Virada de Postura',
    title: 'Não é Culpa. É Capacidade.',
    onScreenText: 'Você não é culpado pelo que outro fez.\nMas decide o que acontece depois.',
    subtitle: 'Não rir já é uma escolha. Não compartilhar já é uma barreira.',
    layout: 'minimal-quote',
    narrativeFunction: 'Transição da paralisia para a agência. Ninguém precisa de superpoderes, apenas de não alimentar o espetáculo.',
    durationMinutes40: 2,
    durationMinutes60: 3,
    spokenSummary: 'O poder da recusa: tirar o oxigênio da agressão ao não aplaudir.',
    slideTriggerPhrase: 'Você não tem culpa pelo que outra pessoa fez. Mas você tem um poder imenso sobre o que acontece no minuto seguinte...',
    whenToAdvance: 'Fale da escolha corajosa de convidar para sentar junto no recreio. Ao fazer a transição para o mundo digital ("E hoje em dia as paredes caíram..."), avance para o Slide 10.',
    notes: {
      spokenText: 'Você não causou a agressão. Mas você tem a chave que fecha o palco.',
      emotionalIntent: 'Transmitir serenidade e empoderamento moral.',
      rhythm: 'Voz convicta e serena.',
      suggestedPauseSec: 4,
      whereToLook: 'Direto para o centro da plateia.',
      wordsToEmphasize: ['Não é culpado', 'Decide', 'Depois'],
      misinterpretationRisk: 'Pensar que você está pedindo para confrontarem pessoas agressivas fisicamente.',
      recoveryAttentionTip: 'Reforce: "Eu nunca vou pedir para vocês brigarem com ninguém. A maior força muitas vezes está em recusar a gargalhada."',
    },
  },
  {
    id: 'slide-10',
    number: 10,
    actNumber: 4,
    actTitle: 'Ato 4 — O Efeito Digital',
    title: 'A Tela e o Estádio Lotado',
    onScreenText: 'A INTERNET NÃO CRIOU O PROBLEMA.\nELA AUMENTOU A PLATEIA.',
    subtitle: 'A agressão que antes acabava no portão agora entra no quarto à meia-noite.',
    layout: 'cinematic-image',
    imageSrc: ASSETS.notificacaoCelular,
    imageAlt: 'Ambiente de quarto escuro com a tela do celular emitindo luz fria',
    narrativeFunction: 'Abordar o cyberbullying com maturidade, sem proibir redes, mas desmascarando a ilusão de impunidade digital.',
    durationMinutes40: 2.5,
    durationMinutes60: 3.5,
    spokenSummary: 'Como as redes multiplicam a humilhação e distanciam o agressor das lágrimas reais do colega.',
    slideTriggerPhrase: 'Antigamente, quando duas pessoas se desentendiam, o sinal tocava e a poeira baixava. Hoje a história nem começou...',
    whenToAdvance: 'Fale da ilusão dos botões de emojis e videogame. Ao dizer "Por isso, guardem a nossa regra de ouro digital...", avance para o Slide 11.',
    notes: {
      spokenText: 'Atrás da tela ninguém vê a lágrima caindo no travesseiro. A gente só vê botão de like e comentário engraçadinho.',
      emotionalIntent: 'Provocar choque de empatia na dimensão virtual.',
      rhythm: 'Rápido na descrição das redes, lento no impacto humano.',
      suggestedPauseSec: 3,
      whereToLook: 'Para a plateia inteira, gesticulando com o formato de um celular na mão.',
      wordsToEmphasize: ['Não criou', 'Aumentou a plateia', 'Quarto à meia-noite'],
      misinterpretationRisk: 'Parecer discurso antigo contra celulares e tecnologia.',
      recoveryAttentionTip: 'Diga: "Celular é incrível. Eu uso o dia todo. O problema nunca é a ferramenta, é o que a gente decide fazer com ela."',
    },
  },
  {
    id: 'slide-11',
    number: 11,
    actNumber: 4,
    actTitle: 'Ato 4 — O Protocolo de Ação',
    title: 'A Regra de Ouro Digital',
    onScreenText: 'PARE · PROTEJA · PROCURE AJUDA\n+ O PACTO DOS 3 SEGUNDOS',
    subtitle: 'PARE o encaminhamento · PROTEJA no privado · PROCURE um adulto com prints e fatos',
    layout: 'three-pillars',
    narrativeFunction: 'Oferecer 3 passos práticos e a técnica corporal dos 3 segundos antes do botão enviar.',
    durationMinutes40: 2.5,
    durationMinutes60: 3.5,
    spokenSummary: 'O desdobramento prático dos três verbos e a pausa de 3 segundos com o teste do espelho.',
    slideTriggerPhrase: 'Por isso, guardem a nossa regra de ouro digital: PARE. PROTEJA. PROCURE AJUDA...',
    whenToAdvance: 'Detalhe cada um dos 3 passos digitais e ensine o Pacto dos 3 Segundos. Ao concluir e perguntar "E qual é o caminho certo? Brigar de volta?", avance para o Slide 12.',
    notes: {
      spokenText: 'Pare o fluxo. Proteja a pessoa mandando uma mensagem amiga. Procure um adulto responsável com data e hora. E façam o Pacto dos 3 Segundos: 1... 2... 3... Teste do espelho antes de enviar.',
      emotionalIntent: 'Instruir com objetividade cirúrgica e autocontrole emocional.',
      rhythm: 'Marcado, firme, quase militar em clareza.',
      suggestedPauseSec: 3,
      whereToLook: 'Olhar de professor/instrutor comprometido.',
      wordsToEmphasize: ['PARE', 'PROTEJA', 'PROCURE AJUDA', '3 SEGUNDOS'],
      misinterpretationRisk: 'Achar que encaminhar no privado "para avisar" não é espalhar.',
      recoveryAttentionTip: 'Enfatize: "Encaminhar para o amigo dizendo ‘olha que horror’ continua sendo encaminhar e expor."',
    },
    interactiveSignal: {
      type: 'mental-choice',
      prompt: 'O Pacto dos 3 Segundos:',
      instruction: 'Segure o dedo indicador no ar por 3 segundos. Antes do próximo envio em grupo, faça o Teste do Espelho.',
    },
  },
  {
    id: 'slide-12',
    number: 12,
    actNumber: 5,
    actTitle: 'Ato 5 — A Rede',
    title: 'A Saída Não é Vingança',
    onScreenText: 'CONSTRUIR REDE, NÃO PAGAR NA MESMA MOEDA',
    subtitle: 'Vingança dobra a fogueira. Acolhimento e intervenção adulta desarmam a agressão.',
    layout: 'cinematic-image',
    imageSrc: ASSETS.ponteApoio,
    imageAlt: 'Dois adolescentes conversando e se apoiando na arquibancada da escola',
    narrativeFunction: 'Desconstruir a ideia de justiça pelas próprias mãos ou retaliação violenta, mostrando o valor da ponte.',
    durationMinutes40: 2.5,
    durationMinutes60: 3.5,
    spokenSummary: 'Por que revidar só alimenta o espetáculo e como uma aproximação amiga desarma a solidão da vítima.',
    slideTriggerPhrase: 'Tem gente que acha que a solução contra quem ataca é atacar com mais força... A saída não é vingança; é construir uma rede.',
    whenToAdvance: 'Fale de como a vingança queima o colégio e por que adultos precisam de clareza. Ao dizer "Adulto precisa de três coisas: Fato, Impacto e Pedido", avance para o Slide 13.',
    notes: {
      spokenText: 'Devolver na mesma moeda só faz a escola inteira arder. A força real está em criar uma rede onde ninguém cai sozinho.',
      emotionalIntent: 'Sensação de calor humano, amizade e camaradagem.',
      rhythm: 'Suave, inspirador, confiante.',
      suggestedPauseSec: 3,
      whereToLook: 'Para estudantes que sentam juntos e parecem amigos leais.',
      wordsToEmphasize: ['Não é vingança', 'Rede', 'Desarmar'],
      misinterpretationRisk: 'Parecer passividade ou fraqueza diante de injustiças.',
      recoveryAttentionTip: 'Destaque: "Procurar apoio não é fraqueza, é inteligência tática."',
    },
  },
  {
    id: 'slide-13',
    number: 13,
    actNumber: 5,
    actTitle: 'Ato 5 — Fato, Impacto, Pedido',
    title: 'Como Falar com um Adulto',
    onScreenText: 'FATO · O que aconteceu concretamente\nIMPACTO · Como isso está machucando a pessoa\nPEDIDO · O que nós precisamos que o adulto faça agora',
    subtitle: 'A fórmula que transforma um desabafo em ação de proteção real.',
    layout: 'three-pillars',
    narrativeFunction: 'Ensinar aos adolescentes como relatar um caso aos coordenadores/pais de forma eficaz, sem ser desconsiderado.',
    durationMinutes40: 3,
    durationMinutes60: 4,
    spokenSummary: 'Exemplo prático de relato estruturado com o método Fato-Impacto-Pedido.',
    slideTriggerPhrase: 'Olhem como essa frase muda tudo: Fato, Impacto e Pedido. Vejam o exemplo da mochila da Mariana...',
    whenToAdvance: 'Apresente os 3 elementos e a definição de coragem ("mesmo tremendo por dentro"). Ao dizer "E agora... preciso contar o verdadeiro final da história...", avance para o Slide 14.',
    notes: {
      spokenText: 'Não chegue dizendo "fulano é chato". Chegue dizendo o Fato, o Impacto e o Pedido.',
      emotionalIntent: 'Dar ferramentas práticas de comunicação madura.',
      rhythm: 'Explicativo, com entonação de mentoria.',
      suggestedPauseSec: 3,
      whereToLook: 'Percorrer toda a sala com olhar seguro.',
      wordsToEmphasize: ['Fato', 'Impacto', 'Pedido'],
      misinterpretationRisk: 'Achar que se o primeiro adulto não resolver, o assunto acabou.',
      recoveryAttentionTip: 'Lembre: "Se o primeiro adulto não escutar por falta de tempo, procure o segundo. Não guarde o fardo sozinho."',
    },
  },
  {
    id: 'slide-14',
    number: 14,
    actNumber: 6,
    actTitle: 'Ato 6 — A Virada Final',
    title: 'Às 19h45: Quatro Palavras',
    onScreenText: '“GENTE, PERDEU A GRAÇA.”',
    subtitle: 'O momento exato em que a plateia mudou o final da história.',
    layout: 'minimal-quote',
    narrativeFunction: 'Revelação cinematográfica e clímax da palestra. A resolução da história do Ato 1 com uma atitude simples e corajosa.',
    durationMinutes40: 2.5,
    durationMinutes60: 3.5,
    spokenSummary: 'A mensagem no grupo que quebrou a complacência e fez quem agredia apagar a foto.',
    slideTriggerPhrase: 'Uma das trinta e seis pessoas que estavam quietas respirou fundo e digitou no grupo: "Gente, perdeu a graça."',
    whenToAdvance: 'SUSTENTE OS 5 SEGUNDOS DE SILÊNCIO TOTAL NO PALCO. Descreva como a montagem foi apagada e a acolhida no portão. Ao dizer "Quando uma voz se levanta com dignidade...", avance para o Slide 15.',
    notes: {
      spokenText: 'Às sete e quarenta e cinco, uma daquelas trinta e seis pessoas respirou fundo e digitou no grupo: "Gente, perdeu a graça."',
      emotionalIntent: 'Arrebatamento emocional, catarse narrativa.',
      rhythm: 'Voz grave, sussurrada com autoridade, seguida de pausa longa.',
      suggestedPauseSec: 5,
      whereToLook: 'Olhar cravado no fundo da sala, sustentando o impacto.',
      wordsToEmphasize: ['Quatro palavras', 'Perdeu a graça'],
      misinterpretationRisk: 'Achar que um emoji resolve tudo magicamente. Explique que isso abriu espaço para a rede agir.',
      recoveryAttentionTip: 'Faça silêncio total. Deixe as 4 palavras pesarem na mente de cada aluno.',
    },
    interactiveSignal: {
      type: 'silence',
      prompt: 'O Silêncio dos 5 Segundos:',
      instruction: 'Vamos ficar 5 segundos em silêncio absoluto para ouvir o peso dessas quatro palavras.',
    },
  },
  {
    id: 'slide-15',
    number: 15,
    actNumber: 6,
    actTitle: 'Ato 6 — A Rede de Luz',
    title: 'Uma Sala, Muitas Escolhas',
    onScreenText: 'A REDE DE PROTEÇÃO ESTÁ FORMADA',
    subtitle: 'Quando uma voz se levanta, o silêncio da sala vira proteção mútua.',
    layout: 'cinematic-image',
    imageSrc: ASSETS.redePontosLuz,
    imageAlt: 'Estudantes e mentores conectados por pontos luminosos acolhedores na biblioteca escolar',
    narrativeFunction: 'Consolidar a imagem mental que os estudantes levarão para casa: a rede unida de apoio e dignidade.',
    durationMinutes40: 2,
    durationMinutes60: 3,
    spokenSummary: 'A visualização da comunidade escolar unida como guardiã de cada um de seus membros.',
    slideTriggerPhrase: 'Olhem para os lados. Cada pessoa sentada nessa cadeira tem um dia difícil de vez em quando. Ninguém precisa enfrentar isso sozinho...',
    whenToAdvance: 'Deixe os estudantes assimilarem a imagem da rede unida. Ao iniciar a tese final ("O bullying precisa de uma plateia para crescer..."), avance para o Slide 16.',
    notes: {
      spokenText: 'Olhem para os lados. Cada pessoa sentada nessa cadeira tem um dia difícil de vez em quando. Ninguém precisa enfrentar isso sozinho.',
      emotionalIntent: 'Sensação profunda de pertencimento e responsabilidade coletiva.',
      rhythm: 'Lento, solene, caloroso.',
      suggestedPauseSec: 3,
      whereToLook: 'Apontar suavemente para as pessoas da sala.',
      wordsToEmphasize: ['Rede', 'Voz', 'Proteção mútua'],
      misinterpretationRisk: 'Ficar piegas ou excessivamente sentimental.',
      recoveryAttentionTip: 'Mantenha tom sóbrio e realista: não é conto de fadas, é convivência cidadã no colégio.',
    },
  },
  {
    id: 'slide-16',
    number: 16,
    actNumber: 6,
    actTitle: 'Ato 6 — Encerramento',
    title: 'A História Termina Aqui',
    onScreenText: 'O bullying precisa de uma plateia para crescer.\nMas também pode encontrar uma plateia que decide que a história termina ali.',
    subtitle: 'A Plateia Decide. E hoje, a escolha é de cada um de vocês.',
    layout: 'final-call',
    narrativeFunction: 'Frase final memorável para ecoar na mente dos estudantes nos dias seguintes. Chamado à ação autêntico.',
    durationMinutes40: 2,
    durationMinutes60: 3,
    spokenSummary: 'Encerramento inspirador com agradecimento e transição segura para os canais de apoio da escola.',
    slideTriggerPhrase: 'O bullying precisa de uma plateia para existir e crescer. Mas quando a plateia decide que o espetáculo acabou, a história termina ali...',
    whenToAdvance: 'Último slide! Mantenha na tela durante os aplausos, agradecimentos e o acolhimento pós-palestra.',
    notes: {
      spokenText: 'O bullying precisa de uma plateia para crescer. Mas também pode encontrar uma plateia que decide que a história termina ali. Muito obrigado.',
      emotionalIntent: 'Deixar a plateia com energia de dignidade, orgulho e compromisso pessoal.',
      rhythm: 'Firme, sonoro, concluindo com reverência e gratidão.',
      suggestedPauseSec: 4,
      whereToLook: 'Olhar aberto de gratidão para todos.',
      wordsToEmphasize: ['Precisa de plateia', 'A história termina ali', 'A escolha é de vocês'],
      misinterpretationRisk: 'Sair correndo do palco. Fique firme no centro e receba o silêncio/aplausos.',
      recoveryAttentionTip: 'Ao final dos aplausos, indique com a mão o orientador/coordenador da escola presente na sala.',
    },
    interactiveSignal: {
      type: 'collective-gesture',
      prompt: 'O Pacto da Plateia:',
      instruction: 'Quem aqui topa fazer parte da plateia que interrompe a história? Mão no peito ou um aceno sutil.',
    },
    imagePrompt: {
      pt: 'Composição cinematográfica de arte editorial com feixes de luz conectando jovens e professores num ambiente escolar contemporâneo, estética sóbria e esperançosa, 16:9.',
      en: 'Cinematic composition of warm light rays connecting diverse youth and teachers in an inspiring school courtyard, emotional hope and unity, 16:9.',
      palette: 'Azul ardósia escuro, Violeta sutil, Dourado solar',
      lighting: 'Luz dourada do amanhecer suave',
    },
  },
];

export const IMPACT_QUOTES: ImpactPhrase[] = [
  {
    id: 'q-01',
    text: 'Talvez o mais importante nessa história não seja quem criou a montagem, mas o que aconteceu depois que todo mundo viu.',
    category: 'abertura',
    actRef: 1,
  },
  {
    id: 'q-02',
    text: 'Em que momento uma brincadeira deixa de ser risada e passa a ser covardia?',
    category: 'abertura',
    actRef: 1,
  },
  {
    id: 'q-03',
    text: 'Brincadeira é quando duas pessoas estão rindo juntas. Se uma precisa disfarçar o choro, o nome mudou de endereço.',
    category: 'transição',
    actRef: 2,
  },
  {
    id: 'q-04',
    text: 'A palavra “foi só uma brincadeira” quase sempre é o disfarce de quem não teve a hombridade de pedir desculpas.',
    category: 'transição',
    actRef: 2,
  },
  {
    id: 'q-05',
    text: 'Se a pessoa pediu para parar e você continuou, você não está brincando. Você está testando até onde consegue humilhar.',
    category: 'reflexão',
    actRef: 2,
  },
  {
    id: 'q-06',
    text: 'Sentir medo diante de uma agressão é humano. Mas o silêncio da maioria é o chão onde o agressor pisa firme.',
    category: 'reflexão',
    actRef: 3,
  },
  {
    id: 'q-07',
    text: 'A testemunha não é culpada pelo ataque do outro, mas é quem decide se haverá plateia para aplaudir.',
    category: 'reflexão',
    actRef: 3,
  },
  {
    id: 'q-08',
    text: 'Não rir já é um posicionamento. Não curtir já é uma barreira de proteção.',
    category: 'ação segura',
    actRef: 3,
  },
  {
    id: 'q-09',
    text: 'A internet não inventou a crueldade; ela só deu um megafone e um estádio lotado para quem ataca.',
    category: 'reflexão',
    actRef: 4,
  },
  {
    id: 'q-10',
    text: 'Atrás da tela ninguém enxerga a lágrima. Mas a lágrima não deixa de existir só porque você não viu.',
    category: 'reflexão',
    actRef: 4,
  },
  {
    id: 'q-11',
    text: 'Encaminhar um print dizendo “olha que horror” continua sendo espalhar a vergonha de alguém.',
    category: 'ação segura',
    actRef: 4,
  },
  {
    id: 'q-12',
    text: 'PARE o encaminhamento. PROTEJA quem foi ferido. PROCURE um adulto com prints e fatos.',
    category: 'ação segura',
    actRef: 4,
  },
  {
    id: 'q-13',
    text: 'Vingança não apaga a fogueira; só queima o colégio inteiro.',
    category: 'transição',
    actRef: 5,
  },
  {
    id: 'q-14',
    text: 'Coragem não é ausência de medo. Coragem é fazer o que é certo mesmo tremendo por dentro.',
    category: 'ação segura',
    actRef: 5,
  },
  {
    id: 'q-15',
    text: 'FATO, IMPACTO e PEDIDO: adulto não age com fofoca vaga, adulto age com evidência e pedido claro.',
    category: 'ação segura',
    actRef: 5,
  },
  {
    id: 'q-16',
    text: 'Se o primeiro adulto não escutar, procure o segundo. O silêncio nunca é uma opção quando alguém está em risco.',
    category: 'ação segura',
    actRef: 5,
  },
  {
    id: 'q-17',
    text: 'Quatro palavras têm a força de parar um exército: “Gente, perdeu a graça.”',
    category: 'encerramento',
    actRef: 6,
  },
  {
    id: 'q-18',
    text: 'Uma sala de aula pode ser uma selva ou pode ser um refúgio. Quem decide isso é a plateia.',
    category: 'encerramento',
    actRef: 6,
  },
  {
    id: 'q-19',
    text: 'Você não precisa ser super-herói de filme. Precisa apenas de coragem para não ser cúmplice da covardia alheia.',
    category: 'encerramento',
    actRef: 6,
  },
  {
    id: 'q-20',
    text: 'O bullying precisa de uma plateia para crescer. Mas também pode encontrar uma plateia que decide que a história termina ali.',
    category: 'encerramento',
    actRef: 6,
  },
];

export const INITIAL_CHECKLIST: ChecklistItem[] = [
  {
    id: 'chk-1',
    category: 'técnica',
    text: 'Testar projetor no formato 16:9 e legibilidade das fontes na última fileira do auditório.',
    completed: true,
  },
  {
    id: 'chk-2',
    category: 'técnica',
    text: 'Verificar pilha/bateria do microfone sem fio e volume das caixas de som sem eco estridente.',
    completed: true,
  },
  {
    id: 'chk-3',
    category: 'segurança',
    text: 'Alinhar previamente com o orientador pedagógico / SOE a disponibilidade de acolhimento pós-palestra.',
    completed: true,
  },
  {
    id: 'chk-4',
    category: 'segurança',
    text: 'Reforçar expressamente no início que ninguém será exposto ou obrigado a relatar casos pessoais.',
    completed: true,
  },
  {
    id: 'chk-5',
    category: 'narrativa',
    text: 'Manter a regra dos 60 segundos: entrar no palco contando a história da notificação, sem abertura protocolar.',
    completed: false,
  },
  {
    id: 'chk-6',
    category: 'narrativa',
    text: 'Sustentar o silêncio de 5 segundos no Ato 6 após a frase "Gente, perdeu a graça".',
    completed: false,
  },
  {
    id: 'chk-7',
    category: 'pessoal',
    text: 'Beber água 15 minutos antes e fazer respiração diafragmática para acalmar o tom de voz.',
    completed: false,
  },
  {
    id: 'chk-8',
    category: 'pessoal',
    text: 'Posicionar-se no centro do palco com postura aberta, ombros relaxados e olhar de conexão.',
    completed: false,
  },
  {
    id: 'chk-9',
    category: 'segurança',
    text: 'Garantir que nenhum estudante seja estigmatizado como "o valentão da escola" durante os exemplos.',
    completed: true,
  },
  {
    id: 'chk-10',
    category: 'narrativa',
    text: 'Adequar os tempos ao formato escolhido (40 min para aula única ou 60 min para auditório solene).',
    completed: true,
  },
  {
    id: 'chk-11',
    category: 'técnica',
    text: 'Deixar o controle remoto / passador de slides à mão com pilhas novas ou teclado acessível.',
    completed: true,
  },
  {
    id: 'chk-12',
    category: 'segurança',
    text: 'Disponibilizar os contatos de canais de proteção (Disque 100 e SOE da escola) nos slides finais.',
    completed: true,
  },
];
