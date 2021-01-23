var pessoa = {};
pessoa.nome = 'Fabricio'
pessoa.idade = '18'
pessoa.sexo = 'Masculino'
pessoa.casado = false

//delete pessoa.idade

if(pessoa.hasOwnProperty('casado')){
    delete pessoa.casado
}

/*for(propriedade in pessoa){
    console.log(pessoa[propriedade])
    console.log(propriedade)
}

console.log(pessoa.hasOwnProperty('casado'))
console.log(pessoa)*/

var i, size;
var propriedades = Object.keys(pessoa)

for(i=0, size=propriedades.length; i < size; i++){
    console.log(propriedades[i] + ': ' + pessoa[propriedades[i]])
}

console.log(pessoa.propertyIsEnumerable('idade'))