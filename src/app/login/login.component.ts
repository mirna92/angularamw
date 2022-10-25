import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userservice: UsersService) { }
  userNameFormControl = new FormControl('', [Validators.required]);
  passwordFormControl = new FormControl('', [Validators.required]);
  loading = false;
  ngOnInit(): void {
  }
  submit = async () => {
    console.log(this.userNameFormControl);
    this.loading = true;
    try {
      // if(!this.userNameFormControl.valid || !this.passwordFormControl.valid) return;
      await this.userservice.login(this.userNameFormControl.value, this.passwordFormControl.value);

    } catch (error) {
      console.log(error);
    } finally {
      this.loading = false;
    }
  }

}
