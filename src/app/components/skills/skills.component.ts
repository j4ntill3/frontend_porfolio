import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/models/skill'

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skillsArray: Skill[] = [
    { id: 0, nombre: "Java", porcentaje: "70" },
    { id: 1, nombre: "C++", porcentaje: "65" },
    { id: 2, nombre: "Angular", porcentaje: "40" },
    { id: 3, nombre: "TypeScript", porcentaje: "40" },
    { id: 4, nombre: "MySQL", porcentaje: "60" },
    { id: 5, nombre: "Git", porcentaje: "80" },
    { id: 6, nombre: "Bash", porcentaje: "50" }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
