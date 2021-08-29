/* --- Angular Imports --- */
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

/* --- Auth Imports --- */
import { AuthService } from 'src/app/services/auth.service';

declare var FB:any;

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  logIn:FormGroup;
  toastr: any;

  constructor(private authService:AuthService,private router:Router) { 
    this.logIn=new FormGroup({
      email:new FormControl(),
      password:new FormControl()
    })
  }

  ngOnInit() {}
  //   window.fbAsyncInit = function() {
  //     FB.init({
  //       appId      : '1839348026256274',
  //       cookie     : true,
  //       xfbml      : true,
  //       version    : '{api-version}'
  //     });
        
  //     FB.AppEvents.logPageView();   
        
  //   };
  
  //   (function(d, s, id){
  //      var js: HTMLElement, fjs = d.getElementsByTagName(s)[0];
  //      if (d.getElementById(id)) {return;}
  //      js = d.createElement(s); js.id = id;
  //      js.src = "https://connect.facebook.net/en_US/sdk.js";
  //      fjs.parentNode.insertBefore(js, fjs);
  //    }(document, 'script', 'facebook-jssdk'));
  // }

  logIn1(){
    console.log(this.logIn)
    this.authService.createStudent(this.logIn.value).subscribe(value=>{
      localStorage.setItem("token",value.token);
      alert("Sucess");
      this.router.navigateByUrl("Home");
    },
    error=>{
      alert("Fail");
    })
  }

  // FaceBook(){
  //   console.log("submit to facebook");
  //   // FB.login();
  //   FB.logIn((_response: any)=>
  //   {
  //     console.log("FaceBook",_response);
  //     if (_response.authResponse){
  //       this.toastr.SucessToastr('login successful', 'success!');
  //     }
  //     else{
  //       this.toastr.errorToastr('login failed', 'Oops!');
  //     }
  //   })
  // }

}
