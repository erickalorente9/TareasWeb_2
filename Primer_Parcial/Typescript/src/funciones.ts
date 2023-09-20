import { Paciente, pacientes } from './datos';

// Función para recorrer y mostrar elementos del arreglo usando forEach
function recorrerConForEach(arreglo: Paciente[]) {
  console.log("Recorriendo con forEach:");
  arreglo.forEach(element => {
    console.log(element);
  });
}

// Función para recorrer y mostrar elementos del arreglo usando for...in
function recorrerConForIn(arreglo: Paciente[]) {
  console.log("\nRecorriendo con for...in:");
  for (let key in arreglo) {
    console.log(arreglo[key]);
  }
}

// Función para recorrer y mostrar elementos del arreglo usando for...of
function recorrerConForOf(arreglo: Paciente[]) {
  console.log("\nRecorriendo con for...of:");
  for (let element of arreglo) {
    console.log(element);
  }
}

function buscarPacientePorID(id: string, callback: (paciente: Paciente | undefined) => void) {
  // Buscar el paciente en el arreglo
  const pacienteEncontrado = pacientes.find(paciente => paciente.ID === id);

  // Llamar al callback con el resultado
  callback(pacienteEncontrado);
}

function mostrarPaciente(paciente: Paciente | undefined) {
  if (paciente) {
    console.log('Paciente encontrado:');
    console.log('ID:', paciente.ID);
    console.log('Nombre:', paciente.Nombre);
    console.log('Identificación:', paciente.Identificacion);
    console.log('Edad:', paciente.Edad);
    console.log('Enfermedad:', paciente.Enfermedad);
  } else {
    console.log('Paciente no encontrado');
  }
}

// Exportar las funciones
export { recorrerConForEach, recorrerConForIn, recorrerConForOf, buscarPacientePorID, mostrarPaciente };
