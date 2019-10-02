import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubmitterService {

  constructor(private _http: HttpClient) { }
  url = 'http://localhost:5000/formSubmit';

  postData(formData): any {
    return this._http.post<any>(this.url, formData);
  }
}