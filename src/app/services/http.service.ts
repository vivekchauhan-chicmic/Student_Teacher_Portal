import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseUrl, environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  postData(URL, data) {
    return this.http.post<any>(`${BaseUrl}${URL}`, data)
  }

  getData(URL, data) {
    return this.http.get<any>(`${BaseUrl}${URL}`, data)
  }

  putData(URL, data) {
    return this.http.put<any>(`${BaseUrl}${URL}`, data)

  }
  VIEWPROFILE(URL) {
    return this.http.get<any>(`${BaseUrl}${URL}`);
  }

  MyStudents(URL) {
    return this.http.get<any>(`${BaseUrl}${URL}`);
  }
}
