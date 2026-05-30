const formulario = document.querySelector("form");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.querySelector("#nome").value;
    const email = document.querySelector("#email").value;
    const mensagem = document.querySelector("#mensagem").value;

    if (nome === "" || email === "" || mensagem === "") {
        alert("Preencha todos os campos!");
    } else {
        alert("Mensagem enviada com sucesso!");
    }
});

const projetos = [
    {
        titulo: "Sistema de Estacionamento",
        descricao: "Projeto para controlar vagas de estacionamento utilizando programação.",
        link: "https://github.com/its-wess"
    },
    {
        titulo: "Cadastro de Clientes",
        descricao: "Projeto simples para cadastrar e consultar clientes.",
        link: "https://github.com/its-wess"
    }
];

const listaProjetos = document.querySelector("#lista-projetos");

projetos.forEach(function(projeto) {
    listaProjetos.innerHTML += `
        <article>
            <h3>${projeto.titulo}</h3>
            <p>${projeto.descricao}</p>
            <a href="${projeto.link}" target="_blank">Ver no GitHub</a>
        </article>
    `;
});