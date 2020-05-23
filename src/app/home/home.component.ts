import { Component, OnInit } from '@angular/core';
import {UsersService} from './../users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users: any = [];
  posts: any =[];
  people: any = [];

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.getData();
    this.getPosts();
  }

  getData(){
    this
      .usersService
      .getUsers()
      .subscribe ((data: any) => {
        this.users = data;
       console.log(this.users);
    });

  }

  getPosts()
  {
    this.usersService.getPosts().subscribe((data: any) => {this.posts = data;
    console.log(this.posts);
    });
  }

}
