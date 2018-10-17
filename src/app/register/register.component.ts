import { Component, OnInit } from '@angular/core';
import { UserRegistration } from '../user-registration';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model = new UserRegistration();

  constructor() { }

  ngOnInit() {
  }

}
