
// mock 

let produtos = [{
    nome: 'Notebook',
    preco: 1200,
    imagem: 'https://via.placeholder.com/150',
    detalhes: {
        fabricante: 'Dell',
        modelo: 'Inspiron 15 3000'
    }
},
{
    nome: 'Smartphone',
    preco: 800,
    imagem: 'https://via.placeholder.com/150',
    detalhes: {
        fabricante: 'Samsung',
        modelo: 'Galaxy A10'
    },
},
{
    nome: 'Tablet',
    preco: 500,
    imagem: 'https://via.placeholder.com/150',
    detalhes: {
        fabricante: 'Apple',
        modelo: 'iPad 2020'
    }
},
{
    nome: 'Smartwatch',
    preco: 300,
    imagem: 'https://via.placeholder.com/150',
    detalhes: {
        fabricante: 'Xiaomi',
        modelo: 'Mi Band 5'
    }
},
{
    nome: 'Fone de ouvido',
    preco: 100,
    imagem: 'https://via.placeholder.com/150',
    detalhes: {
        fabricante: 'JBL',
        modelo: 'Tune 500'
    }
}]

const listaProduto = document.querySelector('#listaProdutos')


produtos.forEach( (produto) => {
    let { nome, preco, imagem, detalhes: { fabricante, modelo } } = produto
    let item = document.createElement('li')

    let card = `
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">${nome}</h5>
            <img src='${imagem}' alt='${nome}' />
            <p class='preco'>R$ ${preco}</p>
            <p class='fabricante'>${fabricante}</p>
            <p class='modelo'>${modelo}</p>
            <button class='btn btn-primary'>Comprar</button>
        </div>
    `
 
    item.innerHTML = card

    listaProduto.appendChild(item)
   
})






// ES6
// let { nome, preco } = produto
// // let { preco } = produto
// let { detalhes: { fabricante, modelo } } = produto



// console.log(nome, preco, fabricante, modelo)


// console.log(produto)
// destrutação do objeto produto
// let nome  = produto.nome;
// let preco = produto.preco;
// let fabricante = produto.detalhes.fabricante;
// let modelo = produto.detalhes.modelo;





// async function buscaPokemon() {
//     const res = await fetch('api.json');
//     const data = await res.json();
//     console.log(data)
// }

// buscaPokemon();


// async function buscaPreco() {
//     const response = await fetch('https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1h&limit=1000');
//     const data = await response.json();
//     console.log(data)
// }

// buscaPreco()




class Pessoa { 
    constructor(nome, sobrenome, idade) { 
        this.nome = nome 
        this.sobrenome = sobrenome
        this.idade = idade 
    }
    andar() { 
        console.log('estou andando') 
    }
}


class Aluno extends Pessoa { 
    constructor(nome, sobrenome, idade, curso) { 
        super(nome, sobrenome, idade) 
        this.curso = curso 
    }
    estudar() { 
        console.log('estou estudando') 
    }
}

let aluno = new Aluno('João', 'Silva', 20, 'ADS')
console.log(aluno)
aluno.estudar()


class ListaLigada { 
    constructor() { 
        this.cabeca = null
        this.calda = null
    }
    adicionar(valor) { 
        let no = new No(valor)
        if (!this.cabeca) { 
            this.cabeca = no
            this.calda = no
        } else { 
            this.calda.proximo = no
            this.calda = no
        }
    }
}

class No { 
    constructor(valor) { 
        this.valor = valor
        this.proximo = null
    }
}