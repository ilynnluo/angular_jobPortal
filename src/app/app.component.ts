import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private firestore: AngularFirestore) {}
  title = 'angular_jobPortal';
  onOnInit(): void {
    this.firestore.collection('job').valueChanges().subscribe(console.log);
    console.log('app.component.ts: Hello');
  }
}
