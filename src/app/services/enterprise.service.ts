import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnterpriseService {

  public enterprise: any = {
    nit: '',
    name: ''
  };

  constructor(private http: HttpClient) { }

  getEnterprises() {
    return this.http.get('http://localhost:8000/api/enterprises');
  }

  getEnterprise(id: any) {
    return this.http.get(`http://localhost:8000/api/enterprises/${id}`);
  }

  createEnterprise(enterprise: any) {
    return this.http.post(`http://localhost:8000/api/enterprises`, enterprise);
  }

  updateEnterprise(enterprise: any) {
    return this.http.put(`http://localhost:8000/api/enterprises/${enterprise.id}`, enterprise);
  }
}
