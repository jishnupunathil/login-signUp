import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  submit=false
  hide=true
  constructor(private fb:FormBuilder){}

  loginForm=this.fb.group({
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.minLength(6)]]
  })

  get allControls(){
    return this.loginForm.controls
  }

  onSubmit(data:any){
    this.submit=true
    console.log({data});
    
  }
}
