import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit{
public email: any;
public nickname: any;
public password: any;
title: string;
@ViewChild('f', {static: false}) regform: NgForm;
  constructor() { }
  onSubmit(form: NgForm){
    console.log('Nazwa Gracza: ' + form.value.nickname);
    console.log('Hasło: ' + form.value.password);
    console.log('Email: ' + form.value.email);
  }
  onClear(){
    this.nickname.reset();
    this.password.reset();
    this.email.reset();
  }
  ngOnInit(): void {
  }





}
