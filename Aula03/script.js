/*mostraNome()

function mostraNome(){
    console.log('Fabricio')
}*/
//Utilizar mais esse formato para usar funções
var mostrarNome = function(nome){
    var qtd = arguments.length
    var nomeCompleto = '';
    while (qtd > 0){
        nomeCompleto += ' ' + arguments[qtd-1]
        qtd--
    }
    console.log(nomeCompleto)
}

mostrarNome('De Santana','Lemos','Fabricio');