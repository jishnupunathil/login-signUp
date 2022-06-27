import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  signSubmit=false
  submit=false
  hide=true
  role=[
    {id:1,name:'Manager'},
    {id:2,name:'Hr'},
    {id:3,name:'Ceo'},
    {id:4,name:'Director'},
    {id:5,name:'Client'}
  ]
  constructor(private fb:FormBuilder){}

  loginForm=this.fb.group({
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.minLength(6)]]
  })

  signUpForm=this.fb.group({

    firstName:['',Validators.required],
    lastName:['',Validators.required],
    age:['',Validators.required],
    gender:['',Validators.required],
    date:['',Validators.required],
    role:[,Validators.required]

  }
  )



  get allControls(){
    return this.loginForm.controls
  }

  onSubmit(data:any){
    this.submit=true
    console.log({data});
    
  }


  get signControls(){
    return this.signUpForm.controls
  }



  onSign(value:any){
    this.signSubmit=true
    console.log(value);
    
  }


}
