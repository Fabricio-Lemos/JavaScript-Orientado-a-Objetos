var idade = 18;
var sexo = 'm'
var nome = 'Fabricio'
var endereco = false
var casa = true
document.write(idade.toFixed(2));
document.write(nome.charAt(0));
document.write(!!casa);
//Todos são tipos de referência.

var pessoa = new Object();
console.log(typeof(pessoa))
var pessoa2 = {
    'nome': 'Fabricio',
    'idade': '21',
    'sexo': 'M'
}
 var mostrarNome = new Function("console.log('Fabricio')")
 mostrarNome()

 function mostraIdade(){
     console.log(`Idade é igual a ${idade}`)
 }
 mostraIdade()