const personajes = [ 'goku', 'vegeta', 'trunks'];

const [, , p1] = personajes

console.log('p1 :>> ', p1);

const retornaArreglo = () => {
    return ['ABC',123]
}

const [letras, numeros] = retornaArreglo()
console.log('letras,numeros :>> ', letras,numeros);

const useState = (valor) => {
    return [valor, () => {console.log( 'holamundogok ');}]
}

const arr = useState('goku')
console.log('arr :>> ', arr);

const [nombre, setNombre] = useState('gok')
console.log('nombre :>> ', nombre);
setNombre()