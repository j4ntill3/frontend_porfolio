import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/models/proyecto';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyectosArray: Proyecto[] = [
    {
      id: 0,
      nombre: "Sistema de Gestion para Estacionamientos",
      descripcion: "Proyecto Final para la catedra de 'Programación Orientada a Objetos' de la carrera Ingeniería en Informatica (U.N.L), programado en C++ utilizando el paradigma POO.",
      link: "https://github.com/j4ntill3/gestion-estacionamiento-POO"
    },
    {
      id: 1,
      nombre: "Portfolio Web (en desarrollo)",
      descripcion: 'Proyecto Final para BootCamp dictado por i2T S.A. y "Argentina Programa". Etapa 2 "#YoProgramo". Es un porfolio web que se desarrollara en base a las tecnologias impartidas en el curso (HTML,CSS,Bootstrap,Angular,TypeScript,Java,JSP,SringBoot,MySQL).',
      link: "https://github.com/j4ntill3/yo_programo_frontend_jose_antille.git"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
