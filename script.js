// array
let filmes = [
    "Interestelar",
    "Vingadores",
    "Avatar"
];

// função
function fazerLogin() {

    let usuario = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;

    let mensagemLogin = document.getElementById("mensagemLogin");

    if (usuario.trim() === "" || senha.trim() === "") {

        mensagemLogin.innerText = "Preencha todos os campos";
        return;
    }

    if (usuario === "aluno" && senha === "fiap2025") {

        document.getElementById("loginContainer").classList.add("oculto");

        document.getElementById("sistemaContainer").classList.remove("oculto");

    } else {

        mensagemLogin.innerText = "Usuário ou senha inválidos";
    }
}

// adiciona no final
function adicionarFilmeFinal() {

    let input = document.getElementById("novoFilme");

    let nomeFilme = input.value;

    let mensagem = document.getElementById("mensagemFilme");

    if (nomeFilme.trim() === "") {

        mensagem.innerText = "Digite um filme válido";
        return;
    }

    filmes.push(nomeFilme);

    input.value = "";

    mensagem.innerText = "";

    renderizarLista();
}

// adiciona no ínicio
function adicionarFilmeInicio() {

    let input = document.getElementById("novoFilme");

    let nomeFilme = input.value;

    let mensagem = document.getElementById("mensagemFilme");

    if (nomeFilme.trim() === "") {

        mensagem.innerText = "Digite um filme válido";
        return;
    }

    filmes.unshift(nomeFilme);

    input.value = "";

    mensagem.innerText = "";

    renderizarLista();
}

// renderiza a lista
function renderizarLista() {

    let lista = document.getElementById("listaFilmes");

    lista.innerHTML = "";

    for (let i = 0; i < filmes.length; i++) {

        lista.innerHTML += `
            <li>

                <span>${filmes[i]}</span>

                <div class="acoes">

                    <button onclick="editarFilme(${i})">
                        Editar
                    </button>

                    <button onclick="removerFilme(${i})">
                        Remover
                    </button>

                </div>

            </li>
        `;
    }
}

// edita o filme
function editarFilme(indice) {

    let filmeAtual = filmes[indice];

    let novoNome = prompt(
        "Editar filme:",
        filmeAtual
    );

    if (
        novoNome === null ||
        novoNome.trim() === ""
    ) {

        return;
    }

    filmes[indice] = novoNome;

    renderizarLista();
}

// remove o filme
function removerFilme(indice) {

    filmes.splice(indice, 1);

    renderizarLista();
}

// inicia
renderizarLista();