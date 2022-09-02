import { Component, OnInit } from '@angular/core';
import { Institucion } from 'src/app/models/institucion';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  institucionArray: Institucion[] = [

    {
      id: 0, nombre: "Instituto Superior de Comercio Domingo Guzmán Silva",
      certificacion: "Tecnicatura en Desarrollo de Software",
      descripcion: "Me encuentro actualmente cursando y rindiendo materias de 3er y 2do año.",
      img: "./assets/Sin_titulo-1.png"
    },
    {
      id: 1, nombre: "Instituto de Estudios Superiores (I.E.S)",
      certificacion: "Tecnicatura en Desarrollo de Software",
      descripcion: "Curse un año y luego me cambié de instituto.",
      img: "./assets/logo-instituto-de-estudios-superiores-ies.jpg"
    },
    {
      id: 2, nombre: "FICH - Facultad de Ingeniería y Ciencias Hídricas (U.N.L)",
      certificacion: "Ingeniería en Informática Aplicada",
      descripcion: "2do año.",
      img: "./assets/unl-logo.PNG"
    },
    {
      id: 3, nombre: 'i2T S.A. ',
      certificacion: "POO en Java y Bases de Datos SQL",
      descripcion: "Beca de capacitación otorgada por i2T S.A.",
      img: "./assets/i2t.png"
    },
    {
      id: 4, nombre: 'i2T S.A. - "Argentina Programa"',
      certificacion: "Etapa 1: #SeProgramar",
      descripcion: "Beca de capacitación otorgada por i2T S.A. Fui seleccionado entre otros 200 participantes a traves de una encuesta.",
      img: "./assets/i2t.png"
    },
    {
      id: 5, nombre: 'i2T S.A. - "Argentina Programa"',
      certificacion: 'Etapa 2: "#YoProgramo"',
      descripcion: "Beca de capacitación otorgada por i2T S.A. Fui seleccionado entre otros 40 participantes luego de mi buen rendimiento en la Etapa 1: #SeProgramar",
      img: "./assets/i2t.png"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
