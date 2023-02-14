programa
{
	
	inclua biblioteca Matematica --> mat
	funcao real calculaarea(real lado){
		real porencia, area
		area = mat.potencia(lado, 2)
		retorne (area)
	}
	funcao inicio(){
		escreva("Área do quadrado: ", calculaarea(2.0))
	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 201; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */