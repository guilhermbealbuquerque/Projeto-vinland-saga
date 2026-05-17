
let personagens = {
    Canute: 0,
    Bjorn: 0,
    Thorkell: 0,
    Askeladd: 0,
    Thors: 0,
    Thorgil: 0,
    Olmar: 0,
    Snake: 0,
    Arnheid: 0,
    Einar: 0
};

let personalidades = {

    "Filosofia de paz e empatia": {
        pontos: 0,
        frase: "Você não tem inimigos."
    },

    "Honra e autocontrole": {
        pontos: 0,
        frase: "Um verdadeiro guerreiro não precisa de espada."
    },

    "Reflexão e maturidade": {
        pontos: 0,
        frase: "A vingança consome mais do que resolve."
    },

    "Resiliência": {
        pontos: 0,
        frase: "Sobreviver também é uma forma de coragem."
    },

    "Sabedoria estratégica": {
        pontos: 0,
        frase: "Nem toda batalha vale a pena."
    },

    "Ambição controlada": {
        pontos: 0,
        frase: "O poder sem propósito leva à destruição."
    },

    "Natureza protetora": {
        pontos: 0,
        frase: "Quem protege os outros demonstra verdadeira força."
    },

    "Espírito livre": {
        pontos: 0,
        frase: "A liberdade vale mais que ouro."
    },

    "Superação pessoal": {
        pontos: 0,
        frase: "O medo pode controlar um homem ou fortalecê-lo."
    },

    "Liderança e responsabilidade": {
        pontos: 0,
        frase: "Liderar é carregar o peso das escolhas."
    },

    "Humanidade e dor emocional": {
        pontos: 0,
        frase: "Até os mais fortes carregam cicatrizes."
    },

    "Mentalidade pacífica": {
        pontos: 0,
        frase: "A paz exige mais coragem que a guerra."
    }
};


const pesosPerguntas = [
    3,
    2,
    3,
    2,
    4,
    3,
    2,
    4,
    3,
    2,
    3,
    2,
    4,
    3,
    2,
    4
];

const perguntasQuiz = [

    {
        pergunta: "Quando alguém te provoca, você:",

        alternativaA: "Tenta resolver sem violência",
        alternativaB: "Responde imediatamente",
        alternativaC: "Analisa antes de agir",
        alternativaD: "Ignora e segue em frente",

        resultado: [
            ["Thors", "Filosofia de paz e empatia"],
            ["Thorkell", "Ambição controlada"],
            ["Askeladd", "Sabedoria estratégica"],
            ["Einar", "Mentalidade pacífica"]
        ]
    },

    {
        pergunta: "Qual qualidade você mais admira?",

        alternativaA: "Empatia",
        alternativaB: "Coragem",
        alternativaC: "Inteligência",
        alternativaD: "Honra",

        resultado: [
            ["Arnheid", "Natureza protetora"],
            ["Bjorn", "Superação pessoal"],
            ["Canute", "Liderança e responsabilidade"],
            ["Snake", "Honra e autocontrole"]
        ]
    },

    {
        pergunta: "O que mais te motiva?",

        alternativaA: "Paz",
        alternativaB: "Poder",
        alternativaC: "Objetivos pessoais",
        alternativaD: "Liberdade",

        resultado: [
            ["Thors", "Mentalidade pacífica"],
            ["Thorgil", "Ambição controlada"],
            ["Askeladd", "Reflexão e maturidade"],
            ["Einar", "Espírito livre"]
        ]
    },

    {
        pergunta: "Quando enfrenta dificuldades, você:",

        alternativaA: "Mantém a calma",
        alternativaB: "Luta até o fim",
        alternativaC: "Pensa racionalmente",
        alternativaD: "Usa a dor para evoluir",

        resultado: [
            ["Snake", "Honra e autocontrole"],
            ["Thorkell", "Superação pessoal"],
            ["Canute", "Sabedoria estratégica"],
            ["Olmar", "Humanidade e dor emocional"]
        ]
    },

    {
        pergunta: "Qual dessas frases mais combina com você?",

        alternativaA: "Você não tem inimigos",
        alternativaB: "A força resolve tudo",
        alternativaC: "Toda batalha exige inteligência",
        alternativaD: "A paz exige coragem",

        resultado: [
            ["Thors", "Filosofia de paz e empatia"],
            ["Thorgil", "Ambição controlada"],
            ["Askeladd", "Sabedoria estratégica"],
            ["Einar", "Mentalidade pacífica"]
        ]
    },

    {
        pergunta: "Como as pessoas normalmente te enxergam?",

        alternativaA: "Calmo",
        alternativaB: "Intimidador",
        alternativaC: "Inteligente",
        alternativaD: "Inspirador",

        resultado: [
            ["Thors", "Mentalidade pacífica"],
            ["Bjorn", "Superação pessoal"],
            ["Askeladd", "Sabedoria estratégica"],
            ["Canute", "Liderança e responsabilidade"]
        ]
    },

    {
        pergunta: "Quando alguém precisa da sua ajuda, você:",

        alternativaA: "Ajuda imediatamente",
        alternativaB: "Resolve do seu jeito",
        alternativaC: "Pensa na melhor solução",
        alternativaD: "Protege acima de tudo",

        resultado: [
            ["Arnheid", "Natureza protetora"],
            ["Snake", "Honra e autocontrole"],
            ["Canute", "Reflexão e maturidade"],
            ["Thors", "Natureza protetora"]
        ]
    },

    {
        pergunta: "Qual ambiente mais combina com você?",

        alternativaA: "Uma vila tranquila",
        alternativaB: "Um campo de batalha",
        alternativaC: "Um reino político",
        alternativaD: "Uma jornada pelo mundo",

        resultado: [
            ["Einar", "Mentalidade pacífica"],
            ["Thorkell", "Superação pessoal"],
            ["Canute", "Liderança e responsabilidade"],
            ["Einar", "Espírito livre"]
        ]
    },

    {
        pergunta: "Como você reage ao fracasso?",

        alternativaA: "Aprende com ele",
        alternativaB: "Fica obcecado em vencer",
        alternativaC: "Esconde suas emoções",
        alternativaD: "Segue em frente mesmo ferido",

        resultado: [
            ["Askeladd", "Reflexão e maturidade"],
            ["Thorgil", "Ambição controlada"],
            ["Snake", "Honra e autocontrole"],
            ["Olmar", "Humanidade e dor emocional"]
        ]
    },

    {
        pergunta: "Qual dessas atitudes mais combina com você?",

        alternativaA: "Proteger quem ama",
        alternativaB: "Buscar reconhecimento",
        alternativaC: "Planejar tudo antes",
        alternativaD: "Valorizar a liberdade",

        resultado: [
            ["Thors", "Natureza protetora"],
            ["Canute", "Liderança e responsabilidade"],
            ["Askeladd", "Sabedoria estratégica"],
            ["Einar", "Espírito livre"]
        ]
    },

    {
        pergunta: "O que mais te incomoda nas pessoas?",

        alternativaA: "Crueldade",
        alternativaB: "Fraqueza",
        alternativaC: "Impulsividade",
        alternativaD: "Falsidade",

        resultado: [
            ["Arnheid", "Filosofia de paz e empatia"],
            ["Thorkell", "Superação pessoal"],
            ["Canute", "Sabedoria estratégica"],
            ["Askeladd", "Reflexão e maturidade"]
        ]
    },

    {
        pergunta: "Em um grupo, você normalmente é:",

        alternativaA: "Quem aconselha",
        alternativaB: "Quem lidera",
        alternativaC: "Quem protege",
        alternativaD: "Quem diverte todo mundo",

        resultado: [
            ["Snake", "Reflexão e maturidade"],
            ["Canute", "Liderança e responsabilidade"],
            ["Thors", "Natureza protetora"],
            ["Bjorn", "Espírito livre"]
        ]
    },

    {
        pergunta: "Qual dessas frases você mais acredita?",

        alternativaA: "A paz é sempre a melhor escolha",
        alternativaB: "Somente os fortes sobrevivem",
        alternativaC: "Tudo depende da estratégia",
        alternativaD: "Cada pessoa carrega suas dores",

        resultado: [
            ["Thors", "Mentalidade pacífica"],
            ["Thorgil", "Resiliência"],
            ["Askeladd", "Sabedoria estratégica"],
            ["Olmar", "Humanidade e dor emocional"]
        ]
    },

    {
        pergunta: "O que você faria após vencer uma batalha?",

        alternativaA: "Tentaria evitar outra guerra",
        alternativaB: "Buscaria novos desafios",
        alternativaC: "Planejaria os próximos passos",
        alternativaD: "Ajudaria os feridos",

        resultado: [
            ["Einar", "Filosofia de paz e empatia"],
            ["Thorkell", "Ambição controlada"],
            ["Canute", "Liderança e responsabilidade"],
            ["Arnheid", "Natureza protetora"]
        ]
    },

    {
        pergunta: "Qual dessas características mais define você?",

        alternativaA: "Compaixão",
        alternativaB: "Determinação",
        alternativaC: "Inteligência",
        alternativaD: "Persistência",

        resultado: [
            ["Arnheid", "Filosofia de paz e empatia"],
            ["Bjorn", "Superação pessoal"],
            ["Askeladd", "Sabedoria estratégica"],
            ["Einar", "Resiliência"]
        ]
    },

    {
        pergunta: "O que representa força para você?",

        alternativaA: "Controlar sua raiva",
        alternativaB: "Nunca desistir",
        alternativaC: "Saber liderar",
        alternativaD: "Defender os outros",

        resultado: [
            ["Snake", "Honra e autocontrole"],
            ["Thorkell", "Resiliência"],
            ["Canute", "Liderança e responsabilidade"],
            ["Thors", "Natureza protetora"]
        ]
    }
];


let indicePerguntaAtual = 0;

let perguntaRespondida = false;

let alternativaSelecionada = 0;

let ultimoBotaoSelecionado;

let respostaProcessada = false;

let id_quiz = 1;


// Verifica login

// if (!sessionStorage.ID_USUARIO) {

//     alert("Faça login antes de responder o quiz.");

//     window.location.href = "login.html";
// }


// Inicia primeira pergunta

carregarPergunta();


// Carrega pergunta atual

function carregarPergunta() {
    // Impede avançar sem responder

    if (
        indicePerguntaAtual > 0 &&
        perguntaRespondida == false
    ) {
        return;
    }

    // Salva pontuação da resposta anterior

    if (respostaProcessada) {

        let perguntaAnterior =
            perguntasQuiz[indicePerguntaAtual - 1];

        let resultadoResposta =
            perguntaAnterior.resultado[
            alternativaSelecionada - 1
            ];

        let personagemEscolhido =
            resultadoResposta[0];

        let personalidadeEscolhida =
            resultadoResposta[1];

        let pesoPergunta =
            pesosPerguntas[indicePerguntaAtual - 1];

        // Soma personagem

        personagens[personagemEscolhido] +=
            pesoPergunta;

        // Soma personalidade

        personalidades[
            personalidadeEscolhida
        ].pontos += pesoPergunta;
    }

    let perguntaAtual =
        perguntasQuiz[indicePerguntaAtual];

    // Atualiza HTML

    document.getElementById("pergunta").innerHTML =
        perguntaAtual.pergunta;

    document.getElementById("primeiraQuestao").innerHTML =
        perguntaAtual.alternativaA;

    document.getElementById("segundaQuestao").innerHTML =
        perguntaAtual.alternativaB;

    document.getElementById("terceiraQuestao").innerHTML =
        perguntaAtual.alternativaC;

    document.getElementById("quartaQuestao").innerHTML =
        perguntaAtual.alternativaD;

    // Salva progresso temporário

    sessionStorage.INDICE_PERGUNTA =
        indicePerguntaAtual;

    indicePerguntaAtual++;

    perguntaRespondida = false;
}


// Usuário responde pergunta

function responderPergunta(numeroAlternativa) {

    alternativaSelecionada = numeroAlternativa;

    perguntaRespondida = true;

    respostaProcessada = true;

    let alternativas = document.querySelectorAll(".item-alternativa-quiz");

    for (let i = 0; i < alternativas.length; i++) {
        alternativas[i].classList.remove("alternativa-selecionada");
    }

    alternativas[numeroAlternativa - 1]
        .classList.add("alternativa-selecionada");
}

// para avancar pergunta

function avancarPergunta() {

    if (!perguntaRespondida) {

        alert("Escolha uma alternativa.");

        return;
    }

    carregarPergunta();
}

// Finaliza quiz

function finalizarQuiz() {

    // Descobre personagem final

    let nomesPersonagens =
        Object.keys(personagens);

    let personagemFinal =
        nomesPersonagens[0];

    for (
        let i = 1;
        i < nomesPersonagens.length;
        i++
    ) {

        if (

            personagens[nomesPersonagens[i]] >

            personagens[personagemFinal]

        ) {

            personagemFinal =
                nomesPersonagens[i];
        }
    }

    let nomesPersonalidades =
        Object.keys(personalidades);

    let personalidadeFinal =
        nomesPersonalidades[0];

    for (
        let i = 1;
        i < nomesPersonalidades.length;
        i++
    ) {

        if (

            personalidades[
                nomesPersonalidades[i]
            ].pontos >

            personalidades[
                personalidadeFinal
            ].pontos

        ) {

            personalidadeFinal =
                nomesPersonalidades[i];
        }
    }

    let idPersonagemFinal =
        id_personagem[personagemFinal];

    let idPersonalidadeFinal =
        id_personalidade[personalidadeFinal];


    // Salva dados temporários

    sessionStorage.PERSONAGEM_FINAL =
        personagemFinal;

    sessionStorage.PERSONALIDADE_FINAL =
        personalidadeFinal;

    sessionStorage.FRASE_FINAL =
        personalidades[
            personalidadeFinal
        ].frase;


    // Envia resultado para backend

    fetch("/quiz/salvarResultado", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({

            idUsuarioServer:
                sessionStorage.ID_USUARIO,

            idQuizServer:
                id_quiz,

            personagemServer:
                idPersonagemFinal,

            personalidadeServer:
                idPersonalidadeFinal
        })
    })

        .then(function (resposta) {

            if (resposta.ok) {

                window.location.href =
                    "resultado.html";

            } else {

                alert(
                    "Erro ao salvar resultado."
                );
            }
        })

        .catch(function (erro) {

            console.log(erro);

        });
}



