/* --- Angular Imports --- */
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

/* --- Other Imports --- */
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptors implements HttpInterceptor{

  constructor(private router:Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = localStorage.getItem("token")
    // console.log("tokenfgfvg f")
    if(token)
    {
      req.clone({
        headers:req.headers.set("Authorization",token)
      })

    }
    else
    {
      this.router.navigateByUrl("LogIn")
    }
    return next.handle(req)
  }
}
