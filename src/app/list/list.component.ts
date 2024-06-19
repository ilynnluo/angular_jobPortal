import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AvatarService } from 'src/services/avatar.service';
import { Store } from '@ngrx/store';
import { Job} from '../../models/job.model'
import { Postion } from '../../models/position.model'
import { selectAvatar } from '../store/avatar/avatar.selectors';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  avatar$ = this.store.select(selectAvatar);
  @Input() avatar: string = '';
  pos: Postion[] = [
    { id: 1, value: "all", name: "All" },
    { id: 2, value: "frontend", name: "Front-end" },
    { id: 3, value: "backend", name: "Back-end" },
    { id: 4, value: "fullstack", name: "Fullstack" },
  ];
  jobs: Job[] = [];
  selectedPosition = 'all';
  constructor(private firestore: AngularFirestore, private avatarService: AvatarService, private store: Store) { }

  ngOnInit() {
    this.firestore.collection('jobs').snapshotChanges().subscribe(
      (data: any) => {
        this.jobs = data.map((e: any) => {
          return {
            id: e.payload.doc.id,
            title: e.payload.doc.data().title,
            position: this.pos.find(p => p.value === e.payload.doc.data().position)?.name || '',
            description: e.payload.doc.data().description
          }
        });
      }
    );
    this.avatarService
      .getUsername()
      .subscribe((data) =>
        this.store.dispatch(avatarActions.getAvatar({ avatar: data }))
      );

    console.log('avatar', this.avatar$);
  }
  
  onPositionChange(e: any) {
    this.selectedPosition = e.target.value;
  }
}
