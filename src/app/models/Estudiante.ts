export class Estudiante {
    nombre: string;
    apellido: string;
    nacionalidad: string;
    estado: boolean;

    constructor(nombre: string, apellido: string, nacionalidad: string, estado: boolean) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.nacionalidad = nacionalidad;
        this.estado = estado;
    }
}