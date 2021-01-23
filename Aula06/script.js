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
console.log(pessoa._idade)
console.log(pessoa.state)
console.log(pessoa.idade)
console.log(pessoa.state)