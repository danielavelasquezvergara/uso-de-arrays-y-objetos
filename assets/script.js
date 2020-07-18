
//listado de arreglos y objetos 
//Consultas radiología
let radiologia = [
    {
        Hora: "11:00",
        Especialista: "Ignacio Schulz",
        Paciente: "Francisca Rojas", 
        Rut: "9878782-1",
        Prevision: "Fonasa"
    },
    {
        Hora: "11:30", 
        Especialista: "Federico Subercaseaux",
        Paciente: "Pamela Estrada", 
        Rut: "15345241-3",
        Prevision: "isapre"
    },
    {
        Hora: "15:00", 
        Especialista: "Fernando Wurthz",
        Paciente: "Armando Luna", 
        Rut: "16445345-9",
        Prevision: "isapre"
    },
    {
        Hora: "15:30", 
        Especialista: "Ana María Godoy",
        Paciente: "Manuel Godoy", 
        Rut: "17666419-0",
        Prevision: "fonasa"
    },
    {
        Hora: "16:00", 
        Especialista: "Patricia Suazo",
        Paciente: "Ramon Ulloa", 
        Rut: "14989389-k",
        Prevision: "fonasa"
    }
]

 //Consultas Traumatología 
let traumatologia = [
    {
        Hora: "8:00", 
        Especialista: "María Paz Urrutia",
        Paciente: "Paula Sanchez", 
        Rut: "15554774-5",
        Prevision: "fonasa"
    },
    {
        Hora: "10:00", 
        Especialista: "Raúl Araya",
        Paciente: "Angélica Navas", 
        Rut: "14444147-9",
        Prevision: "isapre"
    },
    {
        Hora: "10:30", 
        Especialista: "María Arriagada",
        Paciente: "Ana Klapp", 
        Rut: "17879423-9",
        Prevision: "isapre"
    },
    {
        Hora: "11:00", 
        Especialista: "Alejandro Badilla",
        Paciente: "Felipe Mardones", 
        Rut: "15474423-6",
        Prevision: "isapre"
    },
    {
        Hora: "11:30", 
        Especialista: "Cecilia Budnik",
        Paciente: "Diego Marre", 
        Rut: "16554741-k",
        Prevision: "fonasa"
    },
    {
        Hora: "12:00", 
        Especialista: "Arturo Cavagnaro",
        Paciente: "Cecilia Mendez", 
        Rut: "9747535-8",
        Prevision: "isapre"
    },
    {
        Hora: "12:30", 
        Especialista: "Andres Kanacri",
        Paciente: "Marcial Suazo", 
        Rut: "11254785-5",
        Prevision: "isapre"
    },

] 
//consultas dental 
let dental = [
    {
        Hora: "8:30", 
        Especialista: "Andrea Zuñiga",
        Paciente: "Marcela Retamal", 
        Rut: "11123425-6",
        Prevision: "isapre"
    },
    {
        Hora: "11:00", 
        Especialista: "María Pía Zañartu",
        Paciente: "Angel Muñoz", 
        Rut: "9878789-2",
        Prevision: "isapre"
    },
    {
        Hora: "11:30", 
        Especialista: "Scarlett Witting",
        Paciente: "Mario Kast", 
        Rut: "7998789-5",
        Prevision: "fonasa"
    },
    {
        Hora: "13:00", 
        Especialista: "Francisco Von Teuber",
        Paciente: "Karin Fernandez", 
        Rut: "18887662-k",
        Prevision: "fonasa"
    },
    {
        Hora: "13:30", 
        Especialista: "Eduardo Viñuela",
        Paciente: "Hugo Sanchez", 
        Rut: "17665461-4",
        Prevision: "fonasa"
    },
    {
        Hora: "14:00", 
        Especialista: "Raquel Villaseca",
        Paciente: "Ana Sepulveda", 
        Rut: "14441281-0",
        Prevision: "isapre"
    },
]

//cantiadad de consultas (longitud) 
let radiologiaLongitud = radiologia.length;

let traumatologiaLongitud = traumatologia.length;

let dentalLongitud = dental.length;

//mostrar en pantalla la longitud
document.write(` La cantidad de consultas para Radiología es: ${radiologiaLongitud}  </br>`);

document.write (` La cantidad de consultas para traumatología es: ${traumatologiaLongitud} </br>`);

document.write (` La cantidad de conultas para Dental es: ${dentalLongitud} </br>`);

//mostrar primera y última atención de cada arreglo
document.write(` Primera atención: ${radiologia[0].Paciente} - ${radiologia[0].Prevision}  | Última atención: ${radiologia[radiologiaLongitud - 1].Paciente} - ${radiologia [radiologiaLongitud - 1].Prevision} </br>`);

document.write(` Primera atención: ${traumatologia[0].Paciente} - ${traumatologia[0].Prevision}  | Última atención: ${traumatologia[traumatologiaLongitud - 1].Paciente} - ${traumatologia[traumatologiaLongitud - 1].Prevision} </br>`);

document.write(` Primera atención: ${dental[0].Paciente} - ${dental[0].Prevision}  | Última atención: ${dental[dentalLongitud - 1].Paciente} - ${dental [dentalLongitud - 1].Prevision} </br>`);