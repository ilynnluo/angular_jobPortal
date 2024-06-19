import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AvatarService {

constructor(private http: HttpClient) { }
getUsername(): Observable<any> {
  return this.http
  .get<any>(
    'https://randomuser.me/api/'
  )
  .pipe(
    map((data: any) => {
      console.log('getAvatar HttpClient username: ', data.results[0].name.first)
      return data.results[0].name.first;
    })
  );
}
}
