/*
Você deve desenvolver um sistema simples para controlar atendimentos de uma clínica veterinária. O sistema deve registrar:

Animais atualmente em atendimento

Histórico de animais que já foram atendidos

Cada animal deve ter:

nome

espécie (Cachorro, Gato, Pássaro)

nome do dono

horaEntrada

horaSaida (null enquanto estiver em atendimento)

A clínica deve ter:

Lista de animais em atendimento

Lista de histórico

E deve implementar:

registrarEntrada(animal)

registrarSaida(nome)

listarAtendimentosAtuais()

listarHistorico()

A clínica atende diferentes tipos de animais, e cada tipo possui características próprias:

Cachorro → precisa informar raça

Gato → precisa informar se é castrado

Pássaro → precisa informar se sabe voar

Todos são animais, mas cada um tem informações extras e valor de consulta diferente.

*/

class Animal{
    nome
    nome_dono
    dateIn
    dateOut = null
    
    constructor(nome, nome_dono, dateIn = new Date()){
        this.nome = nome
        this.nome_dono = nome_dono
        this.dateIn = dateIn
    }

        registro_saida(){
        this.horario_saida = new Date()
    }

}

class Consulta{
    horario_entrada
    horario_saida = null
    animal_consultado

    constructor(animal, horario_entrada = new Date){
        this.animal_consultado = animal
        this.horario_entrada = horario_entrada
    }

    registro_saida(){
        this.horario_saida = new Date()
    }

}

class Passaro extends Animal{
    tipo_animal = "Pássaro"
    sabe_voar = false
    constructor(nome, nome_dono, sabe_voar){
        super(nome, nome_dono)
        this.sabe_voar = sabe_voar
    }

}
class Gato extends Animal{
    tipo_animal = "Gato"
    castrado = false
    constructor(nome, nome_dono, castrado){
        super(nome, nome_dono)
        this.castrado = castrado
    }

}
class Cachorro extends Animal{
    tipo_animal = "Cachorro"
    raca
    constructor(nome, nome_dono, raca){
        super(nome, nome_dono)
        this.raca = raca
    }
}

class Clinica{
    animais_em_atendimento
    animais_atendidos

    constructor(){
        this.animais_em_atendimento = []
        this.animais_atendidos = []
    }

    registro_consulta(animal){
        this.animais_em_atendimento.push(animal)
    }

    registro_saida_consulta(nome, nome_dono){
        let animal_index = this.animais_em_atendimento.findIndex(animal => animal.nome === nome && animal.nome_dono == nome_dono)
        if (animal_index !== -1){
            let animal = this.animais_em_atendimento[animal_index]
            animal.registro_saida()
            this.animais_atendidos.push(new Consulta(animal))
            this.animais_em_atendimento.splice(animal_index, 1) 
        
        }
    }
    get historico_animais(){
        return console.log(this.animais_atendidos)
    }

    get animais_atendimento(){
        return console.log(this.animais_em_atendimento)
    }
}

const clinica_pet_lindo = new Clinica()
const cachorrinho = new Cachorro("Oznek", "Kenzo", "Bull, the Dog")
clinica_pet_lindo.registro_consulta(cachorrinho)
clinica_pet_lindo.registro_saida_consulta("Oznek", "Kenzo")
clinica_pet_lindo.registro_consulta(cachorrinho)
clinica_pet_lindo.registro_saida_consulta("Oznek", "Kenzo")
clinica_pet_lindo.historico_animais