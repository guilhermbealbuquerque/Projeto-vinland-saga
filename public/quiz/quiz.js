<script>
    // VARIÁVEIS GLOBAIS
    let indiceQuestaoAtual = 0;
    let pontuacaoFinal = 0;
    let quantidadeErros = 0;
    let quantidadeAcertos = 0;
    let quantidadeQuestoes = listaDeQuestoes.length;
    
    // ESCONDER QUIZ AO CARREGAR
    function esconderQuizAoCarregar() {
        document.getElementById("pontuacao").style.display = "none";
        document.getElementById("containerQuiz").style.display = "none";
    }

    // INICIAR QUIZ
    function iniciarQuiz() {

        document.getElementById("pontuacao").style.display = "flex";
        document.getElementById("containerQuiz").style.display = "flex";

        document.getElementById("btnIniciarQuiz").style.display = "none";

        document.getElementById("totalQuestoes").innerHTML = quantidadeQuestoes;

        preencherQuestaoAtual(0);

        botaoSubmeterResposta.disabled = false;
        botaoProximaQuestao.disabled = true;
        botaoReiniciarQuiz.disabled = true;
    }

    // PREENCHER QUESTÃO
    function preencherQuestaoAtual(indiceQuestao) {

        habilitarAlternativas(true);

        const questaoAtual = listaDeQuestoes[indiceQuestao];

        indiceQuestaoAtual = indiceQuestao;

        document.getElementById("numeroQuestaoAtual").innerHTML = indiceQuestao + 1;

        document.getElementById("textoPerguntaAtual").innerHTML =
            questaoAtual.pergunta;

        document.getElementById("textoAlternativaUm").innerHTML =
            questaoAtual.alternativaA;

        document.getElementById("textoAlternativaDois").innerHTML =
            questaoAtual.alternativaB;

        document.getElementById("textoAlternativaTres").innerHTML =
            questaoAtual.alternativaC;

        document.getElementById("textoAlternativaQuatro").innerHTML =
            questaoAtual.alternativaD;

</script>