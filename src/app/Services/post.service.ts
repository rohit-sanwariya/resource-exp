import { inject, Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable, switchMap, timer } from 'rxjs';
import { IPost } from '../Interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
 _http = inject(HttpService);

  
 getPosts():Observable<IPost[]>{
  return timer(2000).pipe(
    switchMap(()=> this._http.GET<IPost[]>('posts'))
  )
 }

}
