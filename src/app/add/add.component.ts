import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { PositionsService } from 'src/services/positions.service';

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
  positions!: Postion[];
  addJobForm: FormGroup = new FormGroup({});

  constructor(private positionsService: PositionsService, private firestore: AngularFirestore) {}

  ngOnInit(): void {
    this.positions = this.positionsService.getPositions();
    this.addJobForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      position: new FormControl('backend', Validators.required),
      description: new FormControl(null, Validators.required)
    })
  }
  onSubmit() {
    this.firestore.collection('jobs').add({
      title: this.addJobForm.controls['title'].value,
      position: this.addJobForm.controls['position'].value,
      description: this.addJobForm.controls['description'].value
    });
  }
}
