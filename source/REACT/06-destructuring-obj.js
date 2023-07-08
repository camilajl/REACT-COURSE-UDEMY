// Desestructuracion 

const persona = {
    nombre: 'tony',
    edad: 45,
    clave: 'Ironman'
}

// const { nombre, edad, clave } = persona;
// console.log('nombre :>> ', nombre);
// console.log('edad :>> ', edad);
// console.log('clave :>> ', clave);

const retornaPersona = ({nombre, edad, clave}) => {
    console.log(nombre, edad, clave);
}

retornaPersona( persona )

const useContext = ({clave, nombre, edad, rango = 'capi'}) => {
    return{
        nombreClave: clave,
        anios: edad,
        latLng: {
            lat:14.123,
            lng:-12.345
        }
    }
}

const avenger =  useContext (persona)
console.log('avenger :>> ', avenger);

const {nombreClave, anios, latLng: {lat, lng}} = useContext(persona)
console.log('nombreClave,anios, latLng :>> ', nombreClave,anios, lat,lng);