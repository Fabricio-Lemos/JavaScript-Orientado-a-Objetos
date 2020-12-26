/*var pessoa = {
    nome:'Fabricio',
    _idade: '18',
    _sexo: 'Masculino',
    casado: false,
    state: 'pristine',
    get idade() {
        this.state = 'dirty'
        return this._idade
    },
    set idade(valor){
        this._idade = valor
    }
}

pessoa.idade = '19'

Object.defineProperty(pessoa, 'idade', {
    enumerable: false,
    value: '20',
    writable: false
})

Object.defineProperty(pessoa, 'nome', {
    configurable: false,
    value: 'Roberto',
    writable: false
})
pessoa.idade = '19'

console.log(pessoa)
console.log(pessoa.propertyIsEnumerable('nome'))

for (propriedade in pessoa){
    console.log(propriedade + ': ' + pessoa[propriedade])
}

Object.defineProperty(pessoa, 'sexo', {
    get: function(){
        return this._sexo
    },
    set: function(value){
        this._sexo = value
    }
})

pessoa.sexo = 'Feminino'

var sexo = pessoa.sexo

console.log(sexo)*/

var pessoa = {};

Object.defineProperties(pessoa,{
    _nome: {
        value:'Fabricio',
        enumerable: true,
        configurable: false,
        writable: true
    },
    _sexo: {
        value:'Masculino',
        enumerable: true,
        configurable: true,
        writable: true
    },
    _idade: {
        value:'18',
        enumerable: true,
        configurable: true,
        writable: true
    },
    nome: {
        get: function(){
            return this._nome;
        },
        set: function(value){
            this._nome = value;
        }
    },
    sexo: {
        get: function(){
            return this._sexo;
        },
        set: function(value){
            this._sexo = value;
        }
    }
});

pessoa.nome = 'Maria'
pessoa.sexo = 'Feminino'
console.log(pessoa.nome)
console.log(pessoa.sexo)