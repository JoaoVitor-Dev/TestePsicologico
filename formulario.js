const floresta = document.getElementById('floresta')
const cachorro = document.getElementById('cachorro')
const jarro = document.getElementById('jarro')
const lago = document.getElementById('lago')
const muro = document.getElementById('muro')
const enviar = document.getElementById('enviar')
const form = document.getElementById('form')
const exemple = document.getElementsByClassName('container')
const resultado = document.getElementById('resultado')

function verificaFloresta(floresta)
{

    if(floresta == 1)
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


enviar.addEventListener('click', () => {
    

    form.classList.add('none')

    enviar.classList.add('none')

    let primeira = document.createElement('h3')
    resultado.appendChild(primeira).innerHTML = verificaFloresta(floresta.value)

    let segundo = document.createElement('h3')
    resultado.appendChild(segundo).innerHTML = verificaCachorro(cachorro.value)

    let terceira = document.createElement('h3')
    resultado.appendChild(terceira).innerHTML = verificaJarro(jarro.value)
    let quarta = document.createElement('h3')

    resultado.appendChild(quarta).innerHTML = verificaLago(lago.value)

    let quinta = document.createElement('h3')
    resultado.appendChild(quinta).innerHTML = verificaMuro(muro.value)

    resultado.classList.add('box-result')


})
