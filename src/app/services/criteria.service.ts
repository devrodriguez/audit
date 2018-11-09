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

  getSpecific(id: String) {
    return this.http.get(`http://localhost:8000/api/criterias/${id}`);
  }

  createCriteria(criteria: any) {
    return this.http.post('http://localhost:8000/api/criterias', criteria);
  }

  updateCriteria(criteria: any) {
    return this.http.put(`http://localhost:8000/api/criterias/${criteria.id}`, criteria);
  }
}
