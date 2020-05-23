import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
 
  constructor(private http: HttpClient) { }

  users_url = 'https://jsonplaceholder.typicode.com/users';
    
  public getUsers()
  {
    return this.http.get<any>(this.users_url)
  }



}
