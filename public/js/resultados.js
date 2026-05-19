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

// PERGUNTAS DO QUIZ

const perguntasQuiz = [
    {
        pergunta: "Quando alguém te desrespeita, você normalmente:",
        alternativas: [
            "Tenta resolver sem violência",       // A - Thorfinn
            "Parte para o confronto",             // B - Thorkell
            "Espera o melhor momento para agir",  // C - Askeladd
            "Ignora e segue em frente"            // D - Leif
        ],
        pontuacao: ["Thorfinn", "Thorkell", "Askeladd", "Leif"]
    },

    {
        pergunta: "O que mais define um verdadeiro guerreiro?",
        alternativas: [
            "Proteger os outros",        // A - Thors
            "Ser o mais forte",          // B - Thorkell
            "Ser inteligente nas batalhas", // C - Askeladd
            "Nunca desistir"             // D - Einar
        ],
        pontuacao: ["Thors", "Thorkell", "Askeladd", "Einar"]
    },

    {
        pergunta: "Qual dessas qualidades você mais admira?",
        alternativas: [
            "Empatia",    // A - Thorfinn
            "Coragem",    // B - Thors
            "Estratégia", // C - Canute
            "Honra"       // D - Snake
        ],
        pontuacao: ["Thorfinn", "Thors", "Canute", "Snake"]
    },

    {
        pergunta: "Se estivesse em uma guerra, você seria:",
        alternativas: [
            "O pacificador",              // A - Thorfinn
            "O guerreiro da linha de frente", // B - Thorkell
            "O estrategista",             // C - Askeladd
            "O líder"                     // D - Canute
        ],
        pontuacao: ["Thorfinn", "Thorkell", "Askeladd", "Canute"]
    },

    {
        pergunta: "Quando enfrenta dificuldades, você:",
        alternativas: [
            "Mantém a calma",             // A - Thors
            "Luta até o fim",             // B - Thorkell
            "Analisa todas possibilidades", // C - Canute
            "Usa a dor para evoluir"      // D - Einar
        ],
        pontuacao: ["Thors", "Thorkell", "Canute", "Einar"]
    },

    {
        pergunta: "Qual frase mais combina com você?",
        alternativas: [
            "Você não tem inimigos",        // A - Thorfinn
            "A força decide tudo",          // B - Thorkell
            "Toda batalha exige estratégia", // C - Askeladd
            "A paz exige coragem"           // D - Thors
        ],
        pontuacao: ["Thorfinn", "Thorkell", "Askeladd", "Thors"]
    },

    {
        pergunta: "O que mais te motiva?",
        alternativas: [
            "Paz",              // A - Thorfinn
            "Poder",            // B - Canute
            "Objetivos pessoais", // C - Askeladd
            "Liberdade"         // D - Leif
        ],
        pontuacao: ["Thorfinn", "Canute", "Askeladd", "Leif"]
    },

    {
        pergunta: "Como as pessoas te enxergam?",
        alternativas: [
            "Calmo",       // A - Thors
            "Intimidador", // B - Thorkell
            "Inteligente", // C - Askeladd
            "Inspirador"   // D - Canute
        ],
        pontuacao: ["Thors", "Thorkell", "Askeladd", "Canute"]
    },

    {
        pergunta: "Quando alguém precisa da sua ajuda, você:",
        alternativas: [
            "Ajuda imediatamente",        // A - Thors
            "Resolve do seu jeito",       // B - Snake
            "Pensa na melhor solução",    // C - Canute
            "Protege a pessoa acima de tudo" // D - Einar
        ],
        pontuacao: ["Thors", "Snake", "Canute", "Einar"]
    },

    {
        pergunta: "Qual ambiente mais combina com você?",
        alternativas: [
            "Uma vila tranquila",    // A - Einar
            "Um campo de batalha",   // B - Thorkell
            "Um reino político",     // C - Canute
            "Uma jornada pelo mundo" // D - Leif
        ],
        pontuacao: ["Einar", "Thorkell", "Canute", "Leif"]
    },

    {
        pergunta: "Qual seu maior medo?",
        alternativas: [
            "Machucar pessoas",  // A - Thorfinn
            "Ser fraco",         // B - Thorkell
            "Fracassar",         // C - Askeladd
            "Perder quem ama"    // D - Snake
        ],
        pontuacao: ["Thorfinn", "Thorkell", "Askeladd", "Snake"]
    },

    {
        pergunta: "Como você toma decisões importantes?",
        alternativas: [
            "Pela empatia",       // A - Thorfinn
            "Pelo instinto",      // B - Thorkell
            "Pela lógica",        // C - Canute
            "Pelos seus princípios" // D - Thors
        ],
        pontuacao: ["Thorfinn", "Thorkell", "Canute", "Thors"]
    }
];