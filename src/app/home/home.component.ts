import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  signSubmit=false
  submitted=false
  hide=true
  signHide=true
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
    role:[,Validators.required],
    passWord:['',[Validators.required,Validators.minLength(6)]],
    ConfirmPass:['',[Validators.required,Validators.minLength(6)]]

  },
  {
    validators:()=>{
      if(this.signUpForm?.controls?.passWord.value!=this.signUpForm?.controls?.ConfirmPass.value){
        console.log('hello');
        this.signUpForm.controls.ConfirmPass.setErrors({passMisMatch:true})
      }
      console.log('hello');
      
    }
  }
  )



  get allControls(){
    return this.loginForm.controls
  }

  onSubmit(data:any){
    this.submitted=true
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
