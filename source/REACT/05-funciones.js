const saludar2 = (nombre) => {
    return `Hola, ${ nombre }`;
}

const saludar3 = (nombre) => `Hola, ${ nombre }`
const saludar4 = () => `Hola`

console.log('saludar :>> ', saludar2('goku'));

const getUsuarioActivo = (name) => ({
    uid: 'ABC234',
    username: name
})

const usuarioActivo = getUsuarioActivo('Camila')
console.log('uausrioActivo :>> ', usuarioActivo);