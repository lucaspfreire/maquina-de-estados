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
// Vermelho: print "Carro avançou o sinal, tomou multa!";
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
var qtdPedestresAtropelados = 0
var qtdCarrosMultados = 0
var qtdPedestresAtravessaram = 0
var qtdTotalTentativas = 0

function logicaPedestre() {
    chanceAtropelamento = Math.round(Math.random() * 100)

    if (corAtual == "red") {
        qtdPedestresAtravessaram = actions(qtdPedestresAtravessaram, "qtdPedestresAtravessaram", "Pedestre atravessou a rua!")
    }
    else if (corAtual == "yellow" && chanceAtropelamento <= 30) {
        qtdPedestresAtropelados = actions(qtdPedestresAtropelados, "qtdPedestresAtropelados", "Pedestre foi atropelado!")
    }
    else if (corAtual == "yellow" && chanceAtropelamento >= 30) {
        qtdPedestresAtravessaram = actions(qtdPedestresAtravessaram, "qtdPedestresAtravessaram", "Pedestre atravessou a rua!")
    }
    else if (corAtual == "green" && chanceAtropelamento <= 60) {
        qtdPedestresAtropelados = actions(qtdPedestresAtropelados, "qtdPedestresAtropelados", "Pedestre foi atropelado!")
    }
    else if (corAtual == "green" && chanceAtropelamento >= 60) {
        qtdPedestresAtravessaram = actions(qtdPedestresAtravessaram, "qtdPedestresAtravessaram", "Pedestre atravessou a rua!")
    }
}

function logicaCarro() {
    chanceMulta = Math.round(Math.random() * 100)

    if (corAtual == "green") {
        qtdCarrosPassaram = actions(qtdCarrosPassaram, "qtdCarrosPassaram", "Carro passou o sinal!")
    }
    else if (corAtual == "red") {
        qtdCarrosMultados = actions(qtdCarrosMultados, "qtdCarrosMultados", "Carro tomou multa!")
    }
    else if (corAtual == "yellow" && chanceMulta <= 30) {
        qtdCarrosMultados = actions(qtdCarrosMultados, "qtdCarrosMultados", "Carro tomou multa!")
    }
    else if (corAtual == "yellow" && chanceMulta >= 30) {
        qtdCarrosPassaram = actions(qtdCarrosPassaram, "qtdCarrosPassaram", "Carro passou o sinal!")
    }
}

function actions(variable, idQuantity, message) {
    document.getElementById(`${idQuantity}`).innerHTML = ++variable
    document.getElementById("result").innerHTML = message
    document.getElementById("qtdTotalTentativas").innerHTML = ++qtdTotalTentativas
    return variable
}