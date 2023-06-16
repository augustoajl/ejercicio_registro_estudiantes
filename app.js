const readlineSync = require('readline-sync');
const {mostrarListaEstudiantes} = require('./lista_estudiantes')

const registrarEstudiantes = () => {
console.log("Iniciando Registro de Estudiantes")
const cantidadEstudiantes = readlineSync.question(
    "Ingresar la cantidad de estudiantes a registrar:"
);
//console.log("Cantidad de estudiantes a registrar: "+ cantidadEstudiantes)
const estudiantes = [];

for(let i=1; i <= cantidadEstudiantes; i++){
    const nombre = readlineSync.question(`Ingrese el nombre del estudiante ${i}:`);
    const edad = readlineSync.question(`Ingrese la edad de ${nombre}:`);
    
    const estudiante = {
        nombre,
        edad,
    };
        estudiantes.push(estudiante);
    }
    mostrarListaEstudiantes(estudiantes);
}
// Iniciar el registro de estudiantes
registrarEstudiantes();