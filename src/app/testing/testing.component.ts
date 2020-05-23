import { Component, OnInit } from '@angular/core';
import {PostsService} from './../posts.service';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {

  constructor(private _postsService: PostsService) { }
    
  users: any =[];

  ngOnInit() {
    this.getData();
  }

  getData()
  {
    this.
      _postsService.getUsers().subscribe((data: any) =>
      {this.users = data});
      console.log(this.users);
      ;
  }
}
