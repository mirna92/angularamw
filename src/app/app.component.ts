import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'amw';
  c:any;
  ngOnInit(): void {
     this.c=localStorage.getItem("token");
     console.log(this.c);
    }
}
