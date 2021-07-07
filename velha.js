const quadrados = document.querySelectorAll('.quadrado');
const jogadorSelecionado = document.getElementById('jogador-selecionado');
const vencedor = document.getElementById('vencedor');
const button = document.querySelector('.button');
let fimDoJogo = false;

let jogadorAtual = null;

mudarJogador('X');

function escolherQuadrado(quadrado){
	if(!fimDoJogo){

		let id = quadrado.id;
	
		quadrado.innerText = jogadorAtual;
		quadrado.style.color = '#000';
	
		if(jogadorAtual === "X"){
			jogadorAtual = 'O';
		}else{
			jogadorAtual = 'X';
		}
	
		mudarJogador(jogadorAtual);
		checarVencedor();
	}
}

function mudarJogador(valor){
	jogadorAtual = valor;
	jogadorSelecionado.innerText = jogadorAtual;
} 

function checarVencedor(){
	let quadrado1 = document.getElementById(1);
	let quadrado2 = document.getElementById(2);
	let quadrado3 = document.getElementById(3);
	let quadrado4 = document.getElementById(4);
	let quadrado5 = document.getElementById(5);
	let quadrado6 = document.getElementById(6);
	let quadrado7 = document.getElementById(7);
	let quadrado8 = document.getElementById(8);
	let quadrado9 = document.getElementById(9);


	//HORIZONTAIS
	//Topo
	if(checarQuadrados(quadrado1, quadrado2, quadrado3)){
		mudarCorDosQuadrados(quadrado1, quadrado2, quadrado3);
		vencedor.innerText = quadrado1.innerText;
		vencedor.innerText =  `${vencedor.innerHTML} venceu, parabéns!`
	}
	//Meio
	if(checarQuadrados(quadrado4, quadrado5, quadrado6)){
		mudarCorDosQuadrados(quadrado4, quadrado5, quadrado6);
		vencedor.innerText = quadrado4.innerText;
		vencedor.innerText =  `${vencedor.innerHTML} venceu, parabéns!`
	}
	//	Baixo
	if(checarQuadrados(quadrado7, quadrado8, quadrado9)){
		mudarCorDosQuadrados(quadrado7, quadrado8, quadrado9);
		vencedor.innerText = quadrado7.innerText;
		vencedor.innerText =  `${vencedor.innerHTML} venceu, parabéns!`
	}


	//VERTICAIS
	//Equerda
	if(checarQuadrados(quadrado1, quadrado4, quadrado7)){
		mudarCorDosQuadrados(quadrado1, quadrado4, quadrado7);
		vencedor.innerText = quadrado1.innerText;
		vencedor.innerText =  `${vencedor.innerHTML} venceu, parabéns!`
	}
	//Meio
	if(checarQuadrados(quadrado2, quadrado5, quadrado8)){
		mudarCorDosQuadrados(quadrado2, quadrado5, quadrado8);
		vencedor.innerText = quadrado2.innerText;
		vencedor.innerText =  `${vencedor.innerHTML} venceu, parabéns!`
	}
	//Direita
	if(checarQuadrados(quadrado3, quadrado6, quadrado9)){
		mudarCorDosQuadrados(quadrado3, quadrado6, quadrado9);
		vencedor.innerText = quadrado3.innerText;
		vencedor.innerText =  `${vencedor.innerHTML} venceu, parabéns!`
	}

	//CRUZADOS
	//Esquerda topo para Direita baixo
	if(checarQuadrados(quadrado1, quadrado5, quadrado9)){
		mudarCorDosQuadrados(quadrado1, quadrado5, quadrado9);
		vencedor.innerText = quadrado1.innerText;
		vencedor.innerText =  `${vencedor.innerHTML} venceu, parabéns!`
	}

	//Direita Topo para Esquerda baixo
	if(checarQuadrados(quadrado3, quadrado5, quadrado7)){
		mudarCorDosQuadrados(quadrado3, quadrado5, quadrado7);
		vencedor.innerText = quadrado3.innerText;
		vencedor.innerText =  `${vencedor.innerHTML} venceu, parabéns!`
	}

}

function mudarCorDosQuadrados(quadrado1, quadrado2, quadrado3){
	console.log('verde')
	quadrado1.style.color = 'white';
	quadrado1.style.background = '#7db7f5';
	quadrado2.style.color = 'white';
	quadrado2.style.background = '#7db7f5';
	quadrado3.style.color = 'white';
	quadrado3.style.background = '#7db7f5';
}

function checarQuadrados(quadrado1, quadrado2, quadrado3){
	let ehIgual = false;

	if(quadrado1.innerText !== '-' && quadrado1.innerText === quadrado2.innerText && quadrado2.innerText === quadrado3.innerText){
		console.log('iguais');
		ehIgual = true;
		fimDoJogo = true;

	}

	return ehIgual;
}

function resetarJogo(){
	Array.from(quadrados).forEach((quadrado) => {quadrado.innerText = '-'; quadrado.style.color='#ccc'});
	mudarJogador('X');
	vencedor.innerText = '';
	fimDoJogo = false;
}

Array.from(quadrados).forEach(quadrado => quadrado.addEventListener('click', (event) => escolherQuadrado(quadrado)))
button.addEventListener('click', resetarJogo);
