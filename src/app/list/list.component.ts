import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

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
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  positions: Postion[] = [
    { id: 1, value: "all", name: "All" },
    { id: 2, value: "frontend", name: "Front-end" },
    { id: 3, value: "backend", name: "Back-end" },
    { id: 4, value: "fullstack", name: "Fullstack" },
  ];
  jobs: Job[] = [];
  selectedPosition = 'all';
  constructor(private firestore: AngularFirestore) { }

  ngOnInit() {
    this.firestore.collection('jobs').snapshotChanges().subscribe(
      (data: any) => {
        this.jobs = data.map((e: any) => {
          return {
            id: e.payload.doc.id,
            title: e.payload.doc.data().title,
            position: e.payload.doc.data().position,
            description: e.payload.doc.data().description
          }
        });
      }
    );
  }
  onPositionChange(e: any) {
    this.selectedPosition = e.target.value;
  }
}
