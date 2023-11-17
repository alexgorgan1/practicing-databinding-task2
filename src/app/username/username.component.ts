import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrl: './username.component.css'
})
export class UsernameComponent implements OnInit {
  username = '';
  usernameEmpty = false;
  
  constructor() {
    
    this.username = 'Alex'; // Asigură-te că username este setat înainte de a face verificarea
    this.usernameEmpty = this.username === '';

  }

  ngOnInit() {
    
  }
  
  resetUsername() {
    this.username = '';
    this.usernameEmpty = this.username === '';
  }
  updateUsernameEmpty() {
    this.usernameEmpty = this.username === '';
  }

}
