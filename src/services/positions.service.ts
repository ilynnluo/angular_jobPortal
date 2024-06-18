import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PositionsService {

constructor() { }
getPositions() {
  return [
    { id: 2, value: "frontend", name: "Front-end" },
    { id: 3, value: "backend", name: "Back-end" },
    { id: 4, value: "fullstack", name: "Fullstack" },
  ]
}
}
