import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
   c:any;
   public currentUser$ = this.userservice.user;
  constructor(private userservice: UsersService) { }
  ngOnInit(): void {
    console.log(this.currentUser$)
  }
  logout = () => {
    this.userservice.logout();
  }
  
}
