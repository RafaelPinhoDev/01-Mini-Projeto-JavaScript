'use strict'


function removerClasses(){

    const resultado = document.getElementById('resultado')
    resultado.classList.remove("abaixo-cinco", "cinco-dez", "acima-dez")

}

function limparCampos(){

    const preco = document.getElementById('preco')
    const desconto = document.getElementById('desconto')
    const resultado = document.getElementById('resultado')

    preco.value = ''
    desconto.value = ''
    resultado.textContent = ''

    removerClasses()
}

function calcularDesconto(){
    // Calculo Porcentagem: resultado <- (valor * percentual) / 100
    const preco = Number(document.getElementById('preco').value)
    const desconto = Number(document.getElementById('desconto').value)
    const resultado = document.getElementById('resultado')


    // Calculo do novo preço
    const precoDesconto = (preco * desconto) / 100
    const novoPreco = preco - precoDesconto
    resultado.textContent = `Preço com desconto: R$ ${novoPreco.toFixed(1)}`


    if (desconto < 5){
        removerClasses()
        resultado.classList.add("abaixo-cinco")
        

    }else if(desconto >=5 && desconto <= 10) {
        removerClasses()
        resultado.classList.add("cinco-dez")

    }else{
        
        removerClasses()
        resultado.classList.add("acima-dez")
       
    }
   
    

}

