import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Posts } from './posts';

@Injectable()
export class PostsService {

  constructor(private httpclient: HttpClient) { }

  getposts() {
    return this.httpclient.get<Posts[]>('https://jsonplaceholder.typicode.com/posts');
  }

  addPost(post:Posts) {
   // let post = { userId: 1, title: 'qwertyuiop', body: 'asdfghjkl' };
    return this.httpclient.post('https://jsonplaceholder.typicode.com/posts', post);
  }

  updatePost() {
    let post = { userId: 1, id: 2, title: 'qwertyuiop', body: 'asdfghjkl' };
    return this.httpclient.put('https://jsonplaceholder.typicode.com/posts/1',post);
  }

  deletePost(){
   
    return this.httpclient.delete('https://jsonplaceholder.typicode.com/posts/1');
  }
} 
