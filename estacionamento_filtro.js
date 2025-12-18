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

class Estacionamento {
    veiculos_estacionados = []
    relatorio = []

    constructor(){
        this.veiculos_estacionados = []
        this.relatorio = []
    }

    registrar_veiculo(veiculo){
        const registro = new registroEstacionamento(veiculo)
        this.veiculos_estacionados.push(registro)
        this.relatorio.push(registro)
    }

    registrar_saida(placa){
        let index_carro = this.veiculos_estacionados.findIndex(
            registro => registro.veiculo_estacionado.placa === placa
        )

        if (index_carro !== -1){
            this.veiculos_estacionados[index_carro].registrarSaidaHora()
            this.veiculos_estacionados.splice(index_carro, 1)
        }
    }

    registro_geral(){
        return this.relatorio
    }

    registro_atual(){
        return this.veiculos_estacionados
    }

    tipoMaisEstacionado(){
        const contagem = {}
        this.relatorio.forEach(reg => {
            const tipo = reg.veiculo_estacionado.tipo_veiculo
            contagem[tipo] = (contagem[tipo] || 0) + 1
        })

        return Object.entries(contagem).sort((a,b) => b[1] - a[1])[0] || null
    }

    tipoMaisPresenteAgora(){
        const contagem = {}

        this.veiculos_estacionados.forEach(reg => {
            const tipo = reg.veiculo_estacionado.tipo_veiculo
            contagem[tipo] = (contagem[tipo] || 0) + 1
        })

        return Object.entries(contagem).sort((a,b) => b[1] - a[1])[0] || null
    }

    filtrarPorTipo(tipo){
        return this.veiculos_estacionados.filter(
            reg => reg.veiculo_estacionado.tipo_veiculo === tipo
        )
    }

    filtrarPorCor(cor){
        return this.veiculos_estacionados.filter(
            reg => reg.veiculo_estacionado.cor.toLowerCase() === cor.toLowerCase()
        )
    }

    filtrarPorAno(ano){
        return this.veiculos_estacionados.filter(
            reg => reg.veiculo_estacionado.ano == ano
        )
    }

    quantidadePorTipo(){
        const contagem = {}

        this.relatorio.forEach(reg => {
            const tipo = reg.veiculo_estacionado.tipo_veiculo
            contagem[tipo] = (contagem[tipo] || 0) + 1
        })

        return contagem
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

const carro_legal_incrivel_branca_de_neve = new Carro(123124, 2019, "Chevrolet Cruise LT 2019", "Rosa", false, "sim")
const carro_velho = new Carro(124, 2019, "Ferrari nova ai", "verMelho", false, "SIM")
const carreta_furacao = new caminhao(125, 2026, "Olha onda, Olha ondaa", "Rosa", 12)

exxxtacionamento.registrar_veiculo(carro_legal_incrivel_branca_de_neve)
exxxtacionamento.registrar_veiculo(carro_velho)
exxxtacionamento.registrar_veiculo(carreta_furacao)
exxxtacionamento.registrar_saida(123124)

console.log(exxxtacionamento.filtrarPorAno(2026))

console.log(exxxtacionamento.filtrarPorCor("rosa"))

console.log(exxxtacionamento.tipoMaisEstacionado())

console.log(exxxtacionamento.quantidadePorTipo())

console.log(exxxtacionamento.tipoMaisPresenteAgora())

console.log(exxxtacionamento.registro_atual())

function ExbitionInHtmlesson(){
    const atuais = document.getElementById("atuais")
    const historico = document.getElementById("relatorio")

    atuais.innerHTML = exxxtacionamento.registro_atual().map(veiculo => `<li>${veiculo.tipo_veiculo}: ${veiculo.placa} - ${veiculo.modelo} - ${veiculo.ano} - ${veiculo.cor} <li>`).join("")

    historico.innerHTML = exxxtacionamento.registro_geral().map(veiculo => `<li>${veiculo.tipo_veiculo}: ${veiculo.placa} - ${veiculo.modelo} - ${veiculo.ano} - ${veiculo.cor} <li>`).join("")
}