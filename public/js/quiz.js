// PONTUAÇÃO DOS PERSONAGENS
// Começa tudo zerado. A gente vai somando conforme o usuário responde.

let personagens = {
    Thorfinn: 0,
    Thors: 0,
    Askeladd: 0,
    Canute: 0,
    Thorkell: 0,
    Einar: 0,
    Snake: 0,
    Leif: 0
};

// PESOS PERSONAGENS

const pesosPersonagens = {
    Thorfinn: 0.85,
    Thors: 0.95,
    Askeladd: 0.95,
    Canute: 0.85,
    Thorkell: 0.95,
    Einar: 1,
    Snake: 1,
    Leif: 1.05
}

const idGm = {
    'Mikhail Tal': 1,
    'Garry Kasparov': 2,
    'Magnus Carlsen': 3,
    'Anatoly Karpov': 4,
    'Bobby Fischer': 5,
    'Vladimir Kramnik': 6,
    'Hikaru Nakamura': 7,
    'Judit Polgar': 8,
    'Viswanathan Anand': 9,
    'Fabiano Caruana': 10,
    'Ding Liren': 11,
    'Alireza Firouzja': 12,
    'Wesley So': 13,
    'Tigran Petrosian': 14,
    'Hou Yifan': 15
};

// PESOS PERSONALIDADES
const pesosPersonalidades {
"Você não tem inimigos.": 0.8 ,// id 1
"Honra e autocontrole": ,// id 2
"Reflexão e maturidade": ,// id 3
"Resiliência": ,// id 4
"Sabedoria estratégica": ,//  id 5
"Ambição controlada": , // id 6
"Natureza protetora":// id 7
"Espírito livre": ,// id 8
"Superação pessoal": ,// id 9
"Liderança e responsabilidade": ,// id 10
"Humanidade e dor emocional": ,// id 11
"Mentalidade pacífica": ,// id 12
}


// PERGUNTAS DO QUIZ

const perguntasQuiz = [
    {
        pergunta: "Quando alguém te desrespeita, você normalmente:",
        alternativas: [
            "Tenta resolver sem violência",       // A → Thorfinn
            "Parte para o confronto",             // B → Thorkell
            "Espera o melhor momento para agir",  // C → Askeladd
            "Ignora e segue em frente"            // D → Leif
        ],
        pontuacao: ["Thorfinn", "Thorkell", "Askeladd", "Leif"]
    },

    {
        pergunta: "O que mais define um verdadeiro guerreiro?",
        alternativas: [
            "Proteger os outros",        // A → Thors
            "Ser o mais forte",          // B → Thorkell
            "Ser inteligente nas batalhas", // C → Askeladd
            "Nunca desistir"             // D → Einar
        ],
        pontuacao: ["Thors", "Thorkell", "Askeladd", "Einar"]
    },

    {
        pergunta: "Qual dessas qualidades você mais admira?",
        alternativas: [
            "Empatia",    // A → Thorfinn
            "Coragem",    // B → Thors
            "Estratégia", // C → Canute
            "Honra"       // D → Snake
        ],
        pontuacao: ["Thorfinn", "Thors", "Canute", "Snake"]
    },

    {
        pergunta: "Se estivesse em uma guerra, você seria:",
        alternativas: [
            "O pacificador",              // A → Thorfinn
            "O guerreiro da linha de frente", // B → Thorkell
            "O estrategista",             // C → Askeladd
            "O líder"                     // D → Canute
        ],
        pontuacao: ["Thorfinn", "Thorkell", "Askeladd", "Canute"]
    },

    {
        pergunta: "Quando enfrenta dificuldades, você:",
        alternativas: [
            "Mantém a calma",             // A → Thors
            "Luta até o fim",             // B → Thorkell
            "Analisa todas possibilidades", // C → Canute
            "Usa a dor para evoluir"      // D → Einar
        ],
        pontuacao: ["Thors", "Thorkell", "Canute", "Einar"]
    },

    {
        pergunta: "Qual frase mais combina com você?",
        alternativas: [
            "Você não tem inimigos",        // A → Thorfinn
            "A força decide tudo",          // B → Thorkell
            "Toda batalha exige estratégia", // C → Askeladd
            "A paz exige coragem"           // D → Thors
        ],
        pontuacao: ["Thorfinn", "Thorkell", "Askeladd", "Thors"]
    },

    {
        pergunta: "O que mais te motiva?",
        alternativas: [
            "Paz",              // A → Thorfinn
            "Poder",            // B → Canute
            "Objetivos pessoais", // C → Askeladd
            "Liberdade"         // D → Leif
        ],
        pontuacao: ["Thorfinn", "Canute", "Askeladd", "Leif"]
    },

    {
        pergunta: "Como as pessoas te enxergam?",
        alternativas: [
            "Calmo",       // A → Thors
            "Intimidador", // B → Thorkell
            "Inteligente", // C → Askeladd
            "Inspirador"   // D → Canute
        ],
        pontuacao: ["Thors", "Thorkell", "Askeladd", "Canute"]
    },

    {
        pergunta: "Quando alguém precisa da sua ajuda, você:",
        alternativas: [
            "Ajuda imediatamente",        // A → Thors
            "Resolve do seu jeito",       // B → Snake
            "Pensa na melhor solução",    // C → Canute
            "Protege a pessoa acima de tudo" // D → Einar
        ],
        pontuacao: ["Thors", "Snake", "Canute", "Einar"]
    },

    {
        pergunta: "Qual ambiente mais combina com você?",
        alternativas: [
            "Uma vila tranquila",    // A → Einar
            "Um campo de batalha",   // B → Thorkell
            "Um reino político",     // C → Canute
            "Uma jornada pelo mundo" // D → Leif
        ],
        pontuacao: ["Einar", "Thorkell", "Canute", "Leif"]
    },

    {
        pergunta: "Qual seu maior medo?",
        alternativas: [
            "Machucar pessoas",  // A → Thorfinn
            "Ser fraco",         // B → Thorkell
            "Fracassar",         // C → Askeladd
            "Perder quem ama"    // D → Snake
        ],
        pontuacao: ["Thorfinn", "Thorkell", "Askeladd", "Snake"]
    },

    {
        pergunta: "Como você toma decisões importantes?",
        alternativas: [
            "Pela empatia",       // A → Thorfinn
            "Pelo instinto",      // B → Thorkell
            "Pela lógica",        // C → Canute
            "Pelos seus princípios" // D → Thors
        ],
        pontuacao: ["Thorfinn", "Thorkell", "Canute", "Thors"]
    }
];

let perguntaCount = 0;
let respAtual = true;
let ultBotao;
let exec = false;
let respostaEscolhida;

carregarPergunta();

if (!sessionStorage.ID_USUARIO) {
    alert('Por favor, faça seu login antes de responder o questionário');
    window.location.href = 'login.html';
}

function carregarPergunta() {
    if (perguntaCount == 16) {
        let personalidadeFinal = maiorPontuacao(personalidade);
        let personagemFinal = maiorPontuacao(gms);

        let personalidadeId = id_personalidade[personalidadeFinal];
        let idPersonagem = id_personagem[personagemFinal];

        if (personalidadeFinal == 'agressivo') {
            personalidadeId = 1;



        } else if (personalidadeFinal == 'estrategico') {
            personalidadeId = 2;



        } else {
            personalidadeId = 3;


        }

        fetch("/quiz/salvarResultado", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: sessionStorage.ID_USUARIO,
                personalidadeServer: personalidadeId,
                personagemServer: idPersonagem
            })
        })
            .then(function (resposta) {

                if (resposta.ok) {
                    window.location.href = "resultado.html";
                } else {
                    alert("Erro ao salvar resultado");
                }

            })
            .catch(function (erro) {
                console.log(erro);
            });

        return;
    }

    if (!respAtual) {
        return;
    }

    if (exec) {
        ultBotao.style.color = 'white';
        porc += 6.25;
        progresso.style.width = porc + '%';

        let dadosResposta = resultadoPerguntas[perguntaCount - 1][respostaEscolhida - 1];
        let personalidadeEscolhido = dadosResposta[0];
        let gmEscolhido = dadosResposta[1];

        let peso = pesosPergunta[perguntaCount - 1];
        personalidade[personalidadeEscolhido] += peso;
        gms[gmEscolhido] += peso * pesoGm[gmEscolhido];
    }

    let titulos = Object.keys(perguntas);

    document.getElementById('pergunta').textContent = titulos[perguntaCount];

    document.getElementById('primeiraQuestao').textContent = perguntas[titulos[perguntaCount]][0];
    document.getElementById('segundaQuestao').textContent = perguntas[titulos[perguntaCount]][1];
    document.getElementById('terceiraQuestao').textContent = perguntas[titulos[perguntaCount]][2];
    document.getElementById('quartaQuestao').textContent = perguntas[titulos[perguntaCount]][3];

    perguntaCount++;
    respAtual = false;
}

function responder(resposta) {
    if (exec) {
        ultBotao.style.color = 'white';
    }

    respostaEscolhida = resposta;

    respAtual = true;

    let botoes = document.querySelectorAll('.questNumberText');

    ultBotao = botoes[resposta - 1];

    botoes[resposta - 1].style.color = '#2A2A2A';

    exec = true;
}

function maiorPontuacao(indice) {
    let nomes = Object.keys(indice);

    let maior = nomes[0];

    for (let i = 1; i < nomes.length; i++) {
        if (indice[nomes[i]] > indice[maior]) {
            maior = nomes[i];
        }
    }

    return maior;
}


