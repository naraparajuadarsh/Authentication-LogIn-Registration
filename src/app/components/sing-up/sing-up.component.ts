import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent implements OnInit {

  singUp:FormGroup;

  constructor(private authService:AuthService) { 
    this.singUp=new FormGroup({
      email:new FormControl(),
      password:new FormControl()
    })
  }

  ngOnInit() {
  }

  singUp1(){
    // console.log(this.singUp);
    this.authService.createEmployee(this.singUp.value).subscribe(value=>{
      alert("Sucess")
    },
    error=>{
      alert("Fail")
    })

  }
}
