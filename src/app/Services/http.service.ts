import { HttpBackend, HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private readonly BASE_URL = 'http://localhost:3000';
  _http = inject(HttpClient);
  

  GET<T>(url:string):Observable<T>{
    return this._http.get<T>(`${this.BASE_URL}/${url}`)
  }
  POST<T,K>(url:string,body:K):Observable<T>{
    return this._http.post<T>(`${this.BASE_URL}/${url}`,body)
  }
  PUT<T,K>(url:string,body:K):Observable<T>{
    return this._http.put<T>(`${this.BASE_URL}/${url}`,body);
  }
}
