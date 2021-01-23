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
Object.seal(pessoa)
console.log(Object.isSealed(pessoa))

/*Object.preventExtensions(pessoa)
console.log(Object.isExtensible(pessoa))
delete pessoa.nome
pessoa.altura = '1,78m'

console.log(pessoa)

/*var atributos = Object.getOwnPropertyDescriptor(pessoa, 'nome');

pessoa.nome = 'Maria'
pessoa.sexo = 'Feminino'
console.log(pessoa.nome)
console.log(pessoa.sexo);

console.log(atributos)*/