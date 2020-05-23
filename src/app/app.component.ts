import { Component, OnInit } from '@angular/core';
import {UsersService} from './users.service';
import { from } from 'rxjs';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  

  constructor(
    private usersService: UsersService,
  ) { }

  title = 'icep-App';
  users;

  ngOnInit() {
    this.users = this.usersService.getUsers();
  }


}

