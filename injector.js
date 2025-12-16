class Veiculo{
    placa
    ano
    modelo
    cor
    constructor(placa, ano, modelo, cor){
        this.placa = placa
        this.ano = ano
        this.modelo = modelo
        this.cor = cor
    }

}

class Carro extends Veiculo{
    tipo_veiculo = "Carro"
    precisa_carregamento_eletrico = false
    caro = false
    constructor(placa, ano, modelo, cor, precisa_carregamento_eletrico, caro){
        super(placa, ano, modelo, cor)
        this.precisa_carregamento_eletrico = precisa_carregamento_eletrico
        this.caro = caro
    }
}
class moto extends Veiculo{
    tipo_veiculo = "Moto"
    quantas_vagas_necessita
    constructor(placa, ano, modelo, cor, quantas_vagas_necessita){
        super(placa, ano, modelo, cor)
        this.quantas_vagas_necessita = quantas_vagas_necessita
    }

}

class caminhao extends Veiculo{
    tipo_veiculo = "Caminhão"
    qnt_eixos
    constructor(placa, ano, modelo, cor, qnt_eixos){
        super(placa, ano, modelo, cor)
        this.qnt_eixos = qnt_eixos
    }

}

class registroEstacionamento{
    dataIn
    dataOut = false
    veiculo_estacionado

    constructor(veiculo_estacionado, dataIn = new Date()){
        this.veiculo_estacionado = veiculo_estacionado
        this.dataIn = dataIn
    }

    registrarSaidaHora(){
        this.dataOut = new Date()
    }

}

class Estacionamento{
    veiculos_estacionados = []
    relatorio = []

    constructor(){
        this.veiculos_estacionados = []
        this.relatorio = []
    }

    registrar_veiculo(veiculo){
        this.veiculos_estacionados.push(veiculo)
    }

    registrar_saida(placa){
        let index_carro = findIndex(veiculo => veiculo.placa === placa)
        if (index_carro !== -1){
            let veiculo = this.veiculos_estacionados[index_carro]
            veiculo.registrarSaidaHora()
            this.historico.push(veiculo)
            this.veiculos_estacionados.splice(index_carro, 1)
        }
    
    }

    registro_geral(){
        return this.relatorio
    }
    registro_atual(){
        return this.veiculos_estacionados
    }

}

const exxxtacionamento = new Estacionamento()

function registro_entrada_Html(){
    const placa = document.getElementById("placa").values
    const modelo = document.getElementById("modelo").values
    const ano = document.getElementById("ano").values
    const cor = document.getElementById("cor").values

    let veiculo

    if (modelo === "Carro")
        veiculo = new Carro(placa, ano, modelo, cor)
    else if (modelo === "Moto"){
        veiculo = new moto(placa, ano, modelo, cor)
    }
    else if (modelo === "Caminhão"){
        veiculo = new caminhao(placa, ano, modelo, cor)
    }

    exxxtacionamento.registrar_veiculo(veiculo)

}

function ExbitionInHtmlesson(){
    const atuais = document.getElementById("atuais")
    const historico = document.getElementById("relatorio")

    atuais.innerHTML = exxxtacionamento.registro_atual().map(veiculo => `<li>${veiculo.tipo_veiculo}: ${veiculo.placa} - ${veiculo.modelo} - ${veiculo.ano} - ${veiculo.cor} <li>`).join("")

    historico.innerHTML = exxxtacionamento.registro_geral().map(veiculo => `<li>${veiculo.tipo_veiculo}: ${veiculo.placa} - ${veiculo.modelo} - ${veiculo.ano} - ${veiculo.cor} <li>`).join("")
}