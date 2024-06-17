import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";

interface Postion {
  id: number,
  value: string,
  name: string
}

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  positions: Postion[] = [
    {id: 2, value: "frontend", name: "Front-end"},
    {id: 3, value: "backend", name: "Back-end"},
    {id: 4, value: "fullstack", name: "Fullstack"},
  ];
  addJobForm: FormGroup = new FormGroup({});

  constructor() { }

  ngOnInit(): void {
    this.addJobForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      position: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required)
    })
  }
  onSubmit() {
    console.log(this.addJobForm);
  }
}
