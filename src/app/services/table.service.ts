import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TableModel } from '../model/table-model';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(private httpClient:HttpClient) { }

  gettable():Observable<any>{
    return this.httpClient.get("https://reqres.in/api/users?page=2")
  }
}
