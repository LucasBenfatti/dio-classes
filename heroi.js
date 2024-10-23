class heroi{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
        }

    atacar(){
        if(this.tipo === "mago"){
            this.ataque = "magia"
        } else if(this.tipo === "guerreiro"){
            this.ataque = "espada"
        } else if(this.tipo === "monge"){
            this.ataque = "artes marciais"
        } else {
            this.ataque = "shuriken"
        }
        console.log(`O ${this.tipo} ${this.nome} atacou usando ${this.ataque} `)
    }
    }
    
let heroi1 = new heroi("Saruman", 358, "mago")
heroi1.atacar()
let heroi2 = new heroi("Uhtred", 28, "guerreiro")
heroi2.atacar()
let heroi3 = new heroi("Papa Francisco", 79, "monge")
heroi3.atacar()
let heroi4 = new heroi("Bruce Lee", 358, "ninja")
heroi4.atacar()


/*se mago -> no ataque exibir (usou magia)
se guerreiro -> no ataque exibir (usou espada)
se monge -> no ataque exibir (usou artes marciais)
se ninja -> no ataque exibir (usou shuriken)

## Saída

Ao final deve se exibir uma mensagem:

- "o {tipo} atacou usando {ataque}"
  ex: mago atacou usando magia
  guerreiro atacou usando espada*/
