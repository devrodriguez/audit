import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CriteriaService {

  constructor(private http: HttpClient) { }

  getCriterias() {
    return this.http.get('http://localhost:8000/api/criterias')
  }
}
