import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const BACKEND_URL = '';
@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  url = `https://jsonplaceholder.typicode.com/photos/`;

  constructor(private http: HttpClient) {}
  signin(value: any): Observable<any> {
    const searchParams = {
      params: {
        email: value.email,
        password: value.password,
      },
    };
    return this.http.get(BACKEND_URL + '/signin', searchParams);
  }
  getData(): Observable<any> {
    return this.http.get(this.url);
  }
  deleteData(id: any) {
    return this.http.delete(this.url + id);
  }
}
