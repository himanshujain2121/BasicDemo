import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PostsService {

  constructor(private httpclient:HttpClient) { }

  getposts(){
    return this.httpclient.get('https://jsonplaceholder.typicode.com/posts');
  }

} 
