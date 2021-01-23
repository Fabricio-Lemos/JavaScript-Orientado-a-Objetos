var pessoa = {
    nome:'Fabricio',
    _idade: '18',
    sexo: 'Masculino',
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