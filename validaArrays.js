function validaArrays(arr, num) {
	try {
		if (!arr && !num) throw new ReferenceError('Envie os parâmetros!');

		if (typeof arr !== 'object')
			throw new TypeError('Array prescisa ser do tipo object!');

		if (typeof num !== 'number')
			throw new TypeError('Num prescisa ser do tipo number!');

		if (arr.length !== num) throw new RangeError('Tamanho do array inválido!');

		return arr;
	} catch (e) {
		if (e instanceof ReferenceError) {
            console.log('este é um ReferenceError!')
            console.log(e.message);
        } else if (e instanceof TypeError) {
            console.log('este é um TypeError!')
            console.log(e.message);
        } else if (e instanceof RangeError) {
            console.log('este é um RangeError!')
            console.log(e.message);
        } else {
            console.log('Tipo de erro não esperado:' + e);
        }
    }
}

console.log(ValidaArray());
