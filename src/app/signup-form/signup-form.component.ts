import {   NgModule, Component, Pipe, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit{
public  myform: FormGroup;
public email: FormControl;
public nickname: FormControl;
public password: FormControl;
title: string;
  constructor() { }
  onSubmit(){
    if (this.myform.valid){
      console.log('Form Submitted');
    }
  }
  onClear(){
    this.myform.reset();
  }
  ngOnInit() {
    this.createFormControls();
    this.createForm();
    }
    createFormControls(){
      this.nickname = new FormControl('', Validators.required);
      this.password = new FormControl('', Validators.required);
      this.email = new FormControl('', [ Validators.required,
        Validators.pattern('[^ @]*@[^ @]*')
       ]);
      this.password = new FormControl('', [ Validators.required,
      Validators.minLength(8)]);
    }

createForm(){
  this.myform = new FormGroup({
    name: new FormGroup({
      email: this.email,
      nickname: this.nickname,
      password: this.password
    })
  });
}



}
