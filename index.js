let conteudo = document.getElementById('log');
let button = document.getElementById('initial')
var textos = [
            'Imagine que você está caminhando a pé por uma floresta... imagine todos os detalhes dessa floresta.',
            'E de repente você se depara com um cachorro, imagine como é este cachorro...',
            'Após continuar andando você se depara com um jarro, imagine como é este jarro...',
            'Agora imagine que você chegou há um lago, imagine como é este lago...',
            'Agora você chegou em um muro, muito alto. Imagine como é este muro.'
        ];

function escrever(str, done) 
{
    var char = str.split('').reverse();
    var typer = setInterval(function() {
        if (!char.length) 
        {
            clearInterval(typer);
            return setTimeout(done, 500); // esperar um pouco
        }
        var next = char.pop();
        conteudo.innerHTML += next;
    }, 100);
}

button.addEventListener("click", () => 
{
   button.classList.add('none')
})

function rodape(conteudos, el) 
{
    var atual = -1;
	function prox(){
		if (atual < conteudos.length - 1) atual++;
		else atual = 0;
		var str = conteudos[atual];
		escrever(str, function()
        {
			conteudo.innerHTML = '';
            if(atual < 4){
                prox()
            }else{
                window.location.href = "./formulario.html";
            }
			
		});
	}
	prox();
}

function iniciar ()
{
    rodape(textos)
}


