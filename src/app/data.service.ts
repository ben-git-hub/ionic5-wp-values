import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Subject } from 'rxjs';
const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class DataService {
  token;
  public refreshQuotes = new Subject<number>();
  constructor(private http: HttpClient) { }
  getData(url: string) {
    return this.http.get(`${apiUrl}wp/v2/${url}?_embed&per_page=100`);
    // return this.http.get('http://ionicwp.local/wp-json/wp/v2/' + url);
  }
  postData(url: string, data) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.token}`
    });
    return this.http.post(`${apiUrl}wp/v2/${url}`, data, {
     headers: headers
    });
  }
  putData(url: string, data) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.token}`
    });
    return this.http.put(`${apiUrl}wp/v2/${url}`, data, {
     headers: headers
    });
  }
  deleteData(url: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.token}`
    });
    return this.http.delete(`${apiUrl}wp/v2/${url}`, {
     headers: headers
    });
  }
}
