// ANOTE TUDO QUE PRECISAR, KENZO;
class Veiculo {
  constructor(placa, modelo) {// SÓ PRECISA RECEBER PLACA E MODELO NO CONSTRUCTOR, OUTRO PARÂMETROS SÃO DADOS AUTOMÁTICAMENTE
    this.placa = placa;
    this.modelo = modelo;
    this.horaEntrada = new Date();
    this.horaSaida = null;
  }
}
// sempre preciso passar o super antes de referenciar o this.
class Carro extends Veiculo {
  constructor(placa, modelo) { 
    super(placa, modelo); // pegou o "Placa e modelo dos parâmetros de veículo"
    this.tipoVaga = "Carro";
    this.valorHora = 5;
  }
}

class Moto extends Veiculo {
  constructor(placa, modelo) {
    super(placa, modelo);
    this.tipoVaga = "Moto";
    this.valorHora = 2;
  }
}
// todas as classes extendidas precisam do método super
class Caminhao extends Veiculo {
  constructor(placa, modelo, eixos=2) {
    super(placa, modelo);
    this.tipoVaga = "Caminhão";
    this.valorHora = 10;
    this.eixos = eixos;
  }
}

class Estacionamento { // estacionamento é uma classe que vai manipular veículos, mas não possui "placa ou modelo".
    veiculosAtuais
    historico

    constructor() {
    this.veiculosAtuais = []; // como o teacher disse, esses atributos não precisam serem estáticas
    this.historico = [];
  }

  registrarEntrada(veiculo) {
    this.veiculosAtuais.push(veiculo);
  }

  registrarSaida(placa) {
    let index = this.veiculosAtuais.findIndex(v => v.placa === placa);
    if (index !== -1) {
      let veiculo = this.veiculosAtuais[index];
      veiculo.horaSaida = new Date();
      this.historico.push(veiculo);
      this.veiculosAtuais.splice(index, 1);
    }
  }

  listarVeiculosAtuais() {
    return this.veiculosAtuais;
  }

  listarHistorico() {
    return this.historico;
  }
}


const estacionamento = new Estacionamento();

function registrarEntrada() {
  const placa = document.getElementById("placa").value;
  const modelo = document.getElementById("modelo").value;
  const tipo = document.getElementById("tipo").value;

  let veiculo;
  if (tipo === "Carro") veiculo = new Carro(placa, modelo);
  else if (tipo === "Moto") veiculo = new Moto(placa, modelo);
  else veiculo = new Caminhao(placa, modelo);

  estacionamento.registrarEntrada(veiculo);
  atualizarListas();
}

function registrarSaida() {
  const placa = document.getElementById("placa").value;
  estacionamento.registrarSaida(placa);
  atualizarListas();
}

function atualizarListas() {
  const atuais = document.getElementById("atuais");
  const historico = document.getElementById("historico");

  atuais.innerHTML = estacionamento.listarVeiculosAtuais()
    .map(v => `<li>${v.tipoVaga} - ${v.placa} (${v.modelo})</li>`).join("");

  historico.innerHTML = estacionamento.listarHistorico()
    .map(v => `<li>${v.tipoVaga} - ${v.placa} (${v.modelo}) | Entrada: ${v.horaEntrada.toLocaleTimeString()} | Saída: ${v.horaSaida.toLocaleTimeString()}</li>`).join("");
}