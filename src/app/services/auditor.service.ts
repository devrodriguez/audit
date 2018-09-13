import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuditorService {

  constructor(private http: HttpClient) {  }

  getAuditors() {
    return this.http.get('http://localhost:8000/api/auditors_full');
  }
}
