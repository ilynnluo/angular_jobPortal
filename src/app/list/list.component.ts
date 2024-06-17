import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

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
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  positions: Postion[] = [
    {id: 1, value: "all", name: "All"},
    {id: 2, value: "frontend", name: "Front-end"},
    {id: 3, value: "backend", name: "Back-end"},
    {id: 4, value: "fullstack", name: "Fullstack"},
  ]

  jobs: Job[] = [
    {id: 1, title: "Senior Full Stack Developer", position: "Fullstack", description: "You have an active Github account and a simple portfolio website that shows your prior activity You've been described by others as having JavaScript as your first language"},
    {id: 2, title: "Software Developer", position: "Front-end", description: "Complete full life cycle development using structured design methodologies including test-driven development, unit testing, code reviews and scrum"}
  ]

  constructor(private firestore: AngularFirestore) {}

  ngOnInit() {
    this.firestore.collection('jobs').valueChanges().subscribe(console.log);
    console.log('list.component.ts: Hello');
  }

}