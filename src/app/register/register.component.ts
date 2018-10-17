import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { UserRegistration } from '../user-registration';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, AfterViewInit {
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

  ngAfterViewInit(): void {
    this.form.form.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }
}
