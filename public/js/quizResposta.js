
function obterDados() {
//    aguardar();

    if (!sessionStorage.personagemServer || !sessionStorage.personalidadeServer) {
        alert("É necessário responder o quiz para ver o resultado do quiz")
        window.location("./quiz.html")
    }

    var emailVar = email_input.value;
    var senhaVar = senha_input.value;

        if (emailVar == "" || senhaVar == "") {
        cardErro.style.display = "block"
        mensagem_erro.innerHTML = "(Mensagem de erro para todos os campos em branco)";
        finalizarAguardar();
        return false;
    }
    else {
        setInterval(sumirMensagem, 5000)
    }

    console.log("FORM LOGIN: ", emailVar);
    console.log("FORM SENHA: ", senhaVar);

    fetch("/usuarios/autenticar", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            emailServer: emailVar,
            senhaServer: senhaVar
        })
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO entrar()!")

        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));
                sessionStorage.EMAIL_USUARIO = json.email;
                sessionStorage.NOME_USUARIO = json.nome;
                sessionStorage.ID_USUARIO = json.id_usuario;
                sessionStorage.PERSONAGEM_FINAL = json.fk_personagem;
                sessionStorage.PERSONALIDADE_FINAL = json.fk_personalidade;
                sessionStorage.FRASE_FINAL = json.frase_final;

                // setTimeout(function () {
                //     window.location = "./dashboard/cards.html";
                // }, 3000); // apenas para exibir o loading

            });

        } else {

            console.log("Houve um erro ao tentar realizar a busca dos dados do QUIZ!");

            resposta.text().then(texto => {
                console.error(texto);
                finalizarAguardar(texto);
            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })

    return false;
}

function sumirMensagem() {
    cardErro.style.display = "none"
}
