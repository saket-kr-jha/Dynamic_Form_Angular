import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FormServiceService {

  constructor(private http: HttpClient) { }

  getFormFields(){
    return this.http.get('https://mocki.io/v1/45c88f15-5ea6-4f12-bf48-0b2ec7749eab');
  }
}
