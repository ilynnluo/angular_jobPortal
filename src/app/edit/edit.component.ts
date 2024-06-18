import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Params } from '@angular/router';
import { PositionsService } from 'src/services/positions.service';

interface Postion {
  id: number,
  value: string,
  name: string
}

@Component({
  selector: 'edit-add',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent implements OnInit {
  positions!: Postion[];
  id!: string;
  positionValue!: string;
  editJobForm: FormGroup = new FormGroup({
    title: new FormControl(null, Validators.required),
    position: new FormControl('backend', Validators.required),
    description: new FormControl(null, Validators.required)
  });

  constructor(private positionService: PositionsService, private firestore: AngularFirestore, private activatedRoute: ActivatedRoute) { }

  onDelete() {
    this.firestore.doc(`jobs/${this.id}`).delete();
  }

  ngOnInit(): void {
    this.positions = this.positionService.getPositions();
    this.activatedRoute.params.subscribe((params: Params) => this.id = params['id']);
    this.firestore.doc(`jobs/${this.id}`).valueChanges().subscribe(
      (data: any) => {
        this.editJobForm.get('title')?.setValue(data.title);
        this.editJobForm.get('position')?.setValue(data.position);
        this.editJobForm.get('description')?.setValue(data.description);
        this.positionValue = this.editJobForm.controls['position'].value
      }
    );
  }
  onSubmit() {
    this.firestore.doc(`jobs/${this.id}`).update({
      title: this.editJobForm.controls['title'].value,
      position: this.editJobForm.controls['position'].value,
      description: this.editJobForm.controls['description'].value
    })
  }

  onPositionChange(e: any) {
    this.positionValue = e.target.value;
  }

}

