// Tarea de Casquete Rodriguez Jean Pier WEB 2 ''A''
// Definir objeto Paciente
const Paciente = {
    ID: '',
    Nombre: '',
    Identificacion: '',
    Edad: 0,
    Enfermedad: ''
  };
  
  // Crear arreglos que almacenan objetos
  const pacientes = [
    {
      ID: 'P001',
      Nombre: 'Jean Pier',
      Identificacion: '123456789',
      Edad: 30,
      Enfermedad: 'Gripe'
    },
    {
      ID: 'P002',
      Nombre: 'Dani Perez',
      Identificacion: '987654321',
      Edad: 25,
      Enfermedad: 'Dolor de cabeza'
    },
    {
      ID: 'P003',
      Nombre: 'Leonel Messi',
      Identificacion: '456789123',
      Edad: 34,
      Enfermedad: 'Lesión en el tobillo'
    },
    {
      ID: 'P004',
      Nombre: 'Ana de Armas',
      Identificacion: '789123456',
      Edad: 32,
      Enfermedad: 'Resfriado'
    },
    {
      ID: 'P005',
      Nombre: 'Roberto Martinez',
      Identificacion: '321654987',
      Edad: 45,
      Enfermedad: 'Hipertensión'
    }
  ];
  
  module.exports = {
    Paciente,
    pacientes
  };
  