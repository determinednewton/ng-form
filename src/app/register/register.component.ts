import { Component, OnInit, ViewChild } from '@angular/core';
import { UserRegistration } from '../user-registration';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model = new UserRegistration();

  @ViewChild('f') form: NgForm;

  constructor() { }

  ngOnInit() {
  }

  submit() {
    console.log(this.model);
  }

  logForm() {
    console.log(this.form);
  }
}
