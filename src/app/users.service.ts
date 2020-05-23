import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  users_url = 'https://jsonplaceholder.typicode.com/users';
  posts_url = 'https://jsonplaceholder.typicode.com/posts';

  public getUsers()
  {
    return this.http.get<any>(this.users_url);
  }

  public getPosts()
  {
    return this.http.get<any>(this.posts_url);
  }
}
