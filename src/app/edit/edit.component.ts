import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { title } from 'process';

interface Postion {
  id: number,
  value: string,
  name: string
}
interface Job {
  id: string,
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
    { id: 2, value: "frontend", name: "Front-end" },
    { id: 3, value: "backend", name: "Back-end" },
    { id: 4, value: "fullstack", name: "Fullstack" },
  ];

  job: Job = {
    id: '',
    title: '',
    position: '',
    description: ''
  }

  editJobForm: FormGroup = new FormGroup({
    title: new FormControl(null, Validators.required),
    position: new FormControl(null, Validators.required),
    description: new FormControl(null, Validators.required)
  });

  constructor(private firestore: AngularFirestore) { }

  onDelete() {
    console.log('delete job');
    // this.firestore.doc('jobs/AqzpbblU1J5wHxUYpqCU').delete();
  }

  ngOnInit(): void {

    this.firestore.doc('jobs/VFOvUF2cc8KZ9wBywSZk').valueChanges().subscribe(
      (data: any) => {
        this.job = {
          title: data.title,
          position: data.position,
          description: data.description,
          ...data
        }
        console.log('job', this.job);
      }

    );
  }
  onSubmit() {
    console.log('edit job', this.editJobForm);
    this.firestore.doc('jobs/AqzpbblU1J5wHxUYpqCU').update({
      title: this.editJobForm.controls['title'].value,
      position: this.editJobForm.controls['position'].value,
      description: this.editJobForm.controls['description'].value
    });

  }
}

