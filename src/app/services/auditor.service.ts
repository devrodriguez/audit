import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuditorService {

  constructor(private http: HttpClient) {  }

  getAuditors() {
    return this.http.get('http://localhost:8000/api/auditors_full');
  }

  createAuditor(auditor) {
    // let headers = new HttpHeaders({
    //   'Content-Type': 'application/json'
    // });

    return this.http.post('http://localhost:8000/api/auditors', auditor);
  }
}
