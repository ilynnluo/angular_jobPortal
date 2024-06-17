import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";

interface Postion {
  id: number,
  value: string,
  name: string
}
interface Job {
  id: number,
  title: string,
  position: string,
  description: string
}

@Component({
  selector: 'edit-add',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  positions: Postion[] = [
    {id: 2, value: "frontend", name: "Front-end"},
    {id: 3, value: "backend", name: "Back-end"},
    {id: 4, value: "fullstack", name: "Fullstack"},
  ];
  jobs: Job[] = [
    {id: 1, title: "Senior Full Stack Developer", position: "Fullstack", description: "You have an active Github account and a simple portfolio website that shows your prior activity You've been described by others as having JavaScript as your first language"},
    {id: 2, title: "Software Developer", position: "Front-end", description: "Complete full life cycle development using structured design methodologies including test-driven development, unit testing, code reviews and scrum"}
  ]
  editJobForm: FormGroup = new FormGroup({});

  constructor() { }

  ngOnInit(): void {
    this.editJobForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      position: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required)
    })
  }
  onSubmit() {
    console.log(this.editJobForm);
  }
}
