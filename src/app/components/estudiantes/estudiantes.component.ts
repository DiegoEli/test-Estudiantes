import { Component } from '@angular/core';
import { Estudiante } from 'src/app/models/Estudiante';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent {
  nombre = "";
  apellido="";
  nacionalidad="";
  listEstudiante: Estudiante[] = [];

  ngOnInit(): void {

  }
  agregarEstudiante():void {
    const estudiante: Estudiante = {
      nombre: this.nombre,
      apellido: this.apellido,
      nacionalidad: this.nacionalidad,
      estado: false
    }

    this.listEstudiante.push(estudiante);

    this.nombre='';
    this.apellido='';
    this.nacionalidad='';

  }

  eliminarEstudiante(indice:number):void{
    this.listEstudiante.splice(indice,1);

  }

  actualizarEstudiante(estudiante:Estudiante, indice:number){
    console.log(estudiante);
    this.listEstudiante[indice].estado=!estudiante.estado;

  }
}
