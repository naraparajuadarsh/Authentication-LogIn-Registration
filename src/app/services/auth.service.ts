import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SingUpAndLogInModel } from '../model/sing-up-and-log-in-model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient) { }

  createEmployee(value:SingUpAndLogInModel):Observable<any>{
    return this.httpClient.post("https://reqres.in/api/register",value)
  }

  createStudent(value:SingUpAndLogInModel):Observable<any>{
    return this.httpClient.post("https://reqres.in/api/login",value)
  }
}


