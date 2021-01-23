var getNome = function(nome, sobrenome){
    console.log(this.nome = nome)
    console.log(this.sobrenome = sobrenome)
    console.log(this)
}

var pessoa = {
    nome:'Fabricio',
    idade:'18',
    getNome: getNome
};

var carros = {
    nome: 'Siena',
    sobrenome: '1000',
    marca: 'Fiat',
    getNome: getNome
}

pessoa.getNome();
carros.getNome();

getNome.call(carros, 'Fusca', '1500')
getNome.apply(carros, ['Palio', '1.0'])