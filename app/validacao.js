function verificaSeOChutePossuiUmValorValido(chute){
         const numero = +chute

         if (chuteForInvalido(numero))
             console.log('valor invalido')

}

function chuteForInvalido (numero) {
        return Number.isNaN(numero)
}