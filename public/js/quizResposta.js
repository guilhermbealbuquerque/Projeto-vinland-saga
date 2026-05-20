
function obterDados() {

    // Pega o ID do usuário que foi salvo no sessionStorage quando ele fez login
    var idUsuario = sessionStorage.ID_USUARIO;

    // Se não tiver ID, o usuário não está logado — manda para o login
    if (!idUsuario) {
        alert("Você precisa estar logado para ver o resultado!");
        window.location = "../login.html";
        return; // para a função aqui, não executa o resto
    }

    // Faz GET para a rota que criamos: /quiz/resultado/:idUsuario
    // Igual ao fetch("/avisos/listar") do mural.html — sem method, sem body
    fetch(`/quiz/resultado/${idUsuario}`)
        .then(function (resposta) {

            

            if (resposta.ok) {

                resposta.json().then(function (resultado) {

                    // resultado é uma lista — pegamos a primeira (e única) posição
                    // esses nomes vêm do AS que colocamos no SQL:
                    // p.nome AS personagem, pe.nome AS personalidade, pe.descricao
                    var personagem    = resultado[0].personagem;
                    var personalidade = resultado[0].personalidade;
                    var descricao     = resultado[0].descricao;

                    // Coloca os dados nos elementos HTML pelos IDs que você criou
                    document.getElementById("h1_personagem").innerHTML = personagem;
                    document.getElementById("h2_personalidade").innerHTML = personalidade;
                    document.getElementById("span_descricao_personagem").innerHTML = descricao;

                    // Monta o caminho da imagem dinamicamente co
                    document.getElementById("img_personagem").src = `./assets/imgs/${personagem.toLowerCase()}.png`;
                });

            } else if (resposta.status == 204) {
                // 204 para ver se o usuario fez o quiz
                alert("Você ainda não fez o quiz!");
                window.location = "./quiz.html";

            } else {
                console.error("Erro ao buscar resultado: " + resposta.status);
            }
        })
        .catch(function (erro) {
            console.error("Erro na requisição: " + erro);
        });
}

