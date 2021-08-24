/* --- Angular Imports --- */
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

/* --- Auth Imports --- */
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  logIn:FormGroup;

  constructor(private authService:AuthService,private router:Router) { 
    this.logIn=new FormGroup({
      email:new FormControl(),
      password:new FormControl()
    })
  }

  ngOnInit() {
  }

  logIn1(){
    console.log(this.logIn)
    this.authService.createStudent(this.logIn.value).subscribe(value=>{
      localStorage.setItem("token",value.token);
      alert("Sucess");
      this.router.navigateByUrl("Home")
    },
    error=>{
      alert("Fail")
    })
  }

}
