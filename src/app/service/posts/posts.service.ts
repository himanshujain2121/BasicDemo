import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Posts } from './posts';

@Injectable()
export class PostsService {

  constructor(private httpclient:HttpClient) { }

  getposts(){
    return this.httpclient.get<Posts[]>('https://jsonplaceholder.typicode.com/posts');
  }

} 
