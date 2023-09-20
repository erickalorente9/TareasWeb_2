// Importamos los datos y las funciones
import { pacientes } from './datos';
import { recorrerConForEach, recorrerConForIn, recorrerConForOf, buscarPacientePorID, mostrarPaciente } from './funciones';

// Llamamos a las funciones para recorrer y mostrar los elementos del arreglo pacientes
console.log("Recorriendo y mostrando elementos con forEach:");
recorrerConForEach(pacientes);

console.log("\nRecorriendo y mostrando elementos con for...in:");
recorrerConForIn(pacientes);

console.log("\nRecorriendo y mostrando elementos con for...of:");
recorrerConForOf(pacientes);

console.log("\nBuscar por id CALLBACK");
buscarPacientePorID('P003', mostrarPaciente);
