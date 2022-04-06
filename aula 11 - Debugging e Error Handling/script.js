
function verificaArray(vet, num){
  try {
    if(!vet || !num) throw new ReferenceError('Envie os parâmetros');
    if(typeof vet != 'object') throw new TypeError('O vetor precisa ser do tipo Object');
    if(typeof num != 'number') throw new TypeError('O vetor precisa ser do tipo Number');
    if(vet.length != num) throw new RangeError('Tamanho inválido');
    return vet;
  } catch (error) {
      if(error instanceof ReferenceError){
        console.log('ReferenceError')
        console.log(error.message)
      } else if (error instanceof TypeError) {
        console.log('TypeError')
        console.log(error.message)
      } else if (error instanceof RangeError){
        console.log('RangeError')
        console.log(error.message)
      } else
      console.log('Erro nao esperado ' + error)

  }

}