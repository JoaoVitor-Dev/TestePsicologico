const floresta = document.getElementById('floresta').value
const cachorro = document.getElementById('cachorro').value
const jarro = document.getElementById('jarro').value
const lago = document.getElementById('lago').value
const muro = document.getElementById('muro').value
const enviar = document.getElementById('enviar')
const form = document.getElementById('form')
const exemple = document.getElementsByClassName('container')
const resultado = document.getElementById('resultado')

function verificaFloresta(valuefloresta)
{
    if(floresta == true)
    {
        return 'Você é uma pessoa que enxerga a vida bem'
    }else{
        return 'Você enxerga a vida com tristeza'
    }
  
    
}

function verificaCachorro(cachorro)
{
    if(cachorro == true)
    {
        return 'Você é uma pessoa com facilidade em fazer amigos'
    }else
    {
        return 'Você tem dificuldade em fazer amizades'
    }
}

function verificaJarro(jarro)
{
    if(jarro == true)
    {
        return 'Você não possuí apego a bens materiais'
    }else
    {
        return 'Você é uma pessoa apegada a bens materiais'
    }
}

function verificaLago(lago){
    if(lago == true)
    {
        return 'Você é uma pessoa tranquila'
    }else
    {
        return 'Você é uma pessoa inquieta'
    }
}

function verificaMuro(muro)
{
    if(muro == true)
    {
        return 'Você acredita em algo após a morte'
    }else
    {
        return 'Você acredita que a morte é o ponto final de tudo!'
    }
}

let linha1 = verificaFloresta(floresta)
let linha2 = verificaCachorro(cachorro)
let linha3 = verificaJarro(jarro)
let linha4 = verificaLago(lago)
let linha5 = verificaMuro(muro)

enviar.addEventListener('click', () => {


    form.classList.add('none')

    enviar.classList.add('none')

    let primeira = document.createElement('h3')
    resultado.appendChild(primeira).innerHTML = linha1

    let segundo = document.createElement('h3')
    resultado.appendChild(segundo).innerHTML = linha2

    let terceira = document.createElement('h3')
    resultado.appendChild(terceira).innerHTML = linha3

    let quarta = document.createElement('h3')
    resultado.appendChild(quarta).innerHTML = linha4

    let quinta = document.createElement('h3')
    resultado.appendChild(quinta).innerHTML = linha5

    resultado.classList.add('box-result')


})