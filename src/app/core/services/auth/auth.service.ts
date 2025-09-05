import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../base/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  sentRegisterData(data: object): Observable<any> {
    return this.httpClient.post(`${environment.BASE_URL}/auth/signup`, data);
  }

  sentLoginData(data: object): Observable<any> {
    return this.httpClient.post(`${environment.BASE_URL}/auth/signin`, data);
  }
}
