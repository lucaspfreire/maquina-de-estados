// Máquina de estados / Semáforo
// Critérios:
// O sinal vermelho tem que durar 5 segundos;
// O sinal amarelo tem que durar 2 sefundos;
// O sinal verde tem que durar 5 segundos;

// Criar botão "Atravessar a rua" com os seguintes critérios:
// Vermelho: print "Pedestre atravessou a rua!";
// Amarelo: 30% de chance de ser atropelado e quando atrolepado print "Pedestre foi atropelado!" se não, print "Pedestre atravessou a rua!";
// Verde: 60% de chance de ser atropelado e quando atrolepado print "Pedestre foi atropelado!" se não, print "Pedestre atravessou a rua!";

// Criar botão "Avançar sinal" com os seguintes critérios:
// Vermelho: print "Avanço de sinal, carro tomou multa!";
// Amarelo: 30% de chance do carro tomar multa e quando tomar print "Carro tomou multa!" se não, print "Carro passou sinal!";
// Verde: print !Carro passou o sinal!";

// Criar contador para as metrícas:
// Quantos carros passaram o sinal;
// Quantos carros tomaram multa;
// Quantos pedestres foram atropelados;
// Quantos pedestres atravessaram a rua;

// ESTUDAR CONCEITO DE MÁQUINA DE ESTADOS E SET TIMEOUT EM JS

var corAtual

function verde() {
    var corVerde = document.getElementById("verde")
    corVerde.style.backgroundColor = "green"
    corAtual = "green"
    setTimeout(() => {
        corVerde.style.backgroundColor = "grey"
        amarelo()
    },5000)

}

function amarelo() {
    var corAmarelo = document.getElementById("amarelo")
    corAmarelo.style.backgroundColor = "yellow"
    corAtual = "yellow"
    setTimeout(() => {
        corAmarelo.style.backgroundColor = "grey"
        vermelho()
    },2000)
}

function vermelho() {
    var corVermelho = document.getElementById("vermelho")
    corVermelho.style.backgroundColor = "red"
    corAtual = "red"
    setTimeout(() => {
        corVermelho.style.backgroundColor = "grey"
        verde()
    },5000)
}

vermelho()

function resetGame() {
    location.reload()
}

var qtdCarrosPassaram = 0

function logicaGame() {
    if (corAtual == "green") {
        document.getElementById("qtdCarrosPassaram").innerHTML = ++qtdCarrosPassaram
    }
}