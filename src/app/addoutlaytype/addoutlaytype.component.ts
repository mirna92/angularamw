import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-addoutlaytype',
  templateUrl: './addoutlaytype.component.html',
  styleUrls: ['./addoutlaytype.component.css']
})
export class AddoutlaytypeComponent implements OnInit {
  nameFormControl= new FormControl('', [Validators.required]);
  descriptionFormControl= new FormControl('',[Validators.required]);
loading=false;
  constructor( private userservice:UsersService) { }

  ngOnInit(): void {
  }
  submit = async () => {
    this.loading=true;
    try {
      // await this.userservice.signup(this.form.value.firstNameFormControl, this.form.value.lastNameFormControl, this.form.value.mobileFormControl, this.form.value.nationalFormControl, this.form.value.passwordFormControl, this.form.value.userNameFormControl,this.form.value.nationalityFormControl);
      await this.userservice.addoutlaytype( this.nameFormControl.value,this.descriptionFormControl.value);
     
    } catch (error) {
      console.log(error);
    }
    finally{
      this.loading=false;
    }
  }
}
