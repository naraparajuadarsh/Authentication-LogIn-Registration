/* --- Angular Imports --- */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/* --- Other Vendor Imports --- */
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(private httpClient:HttpClient) { }

  gettable():Observable<any>{
    return this.httpClient.get("https://reqres.in/api/users?page=2")
  }

  gettable1(value:any):Observable<any>{
    return this.httpClient.get("https://reqres.in/api/users?page="+value);
  }
}
