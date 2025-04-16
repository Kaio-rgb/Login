// Implementação acesso para a tela de login
function acessar() {
    let loginEmail = document.getElementById("loginEmail").value;
    let loginSenha = document.getElementById("loginSenha").value;

    //implementa estrutura que testa se todos os campos foram preenchidos
    if(!loginEmail || !loginSenha) {
        alert("Favor preencher todos os campos");
    } else {
        window.location.href = "cadastro.html";
    }
}
//cria variavel tipo array
var dadosLista = [];

function salvarUser(){
    let nomeUser = document.getElementById('nomeUser').value;

    if(nomeUser){
    dadosLista.push(nomeUser);
    console.log(dadosLista);
    criaLista();
    document.getElementById('nomeUser').value = "";
    }else{
        alert("favor informar nome para cadastro");
    }
    
}

//funcao para preencher a lista de cadastro
function criaLista() {
    let tabela = "<tr><th>Nome</th><th>Ações</th></tr>";

    for(let i = 0; i <= (dadosLista.length - 1); i++) {
        tabela += "<tr><td>" + dadosLista[i] + "</td><td><button class='btn btn-warning' onclick='editar(this.parentNode.parentNode.rowIndex)'>editar</button><butto class='btn btn-danger' onclick='excluir(this.parentNode.parentNode.rowIndex)'>excuir</butto></td></tr>";

        document.getElementById("tabela").innerHTML = tabela;
    }
}
//funcao para excluir nome da lista
function excluir(i){
    dadosLista.slice((i-1), 1);
    document.getElementById('tabela').deletRow(i);
} 

//funcao para edicao do nome da lista 
function editar(i){
    document.getElementById('nomeUser').value = dadosLista[(i - 1)];
    dadosLista.slice(dadosLista[(i - 1)],1);
}


















    