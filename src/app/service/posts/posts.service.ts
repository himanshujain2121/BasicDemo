import { Injectable ,Inject} from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Posts } from './posts';
import { VALUE_PROVIDER } from '../valueProvider/valueProvider';

@Injectable()
export class PostsService {

   apiBaseUrl:string;
  constructor(private httpclient: HttpClient, @Inject(VALUE_PROVIDER) private valueProvider:any) {
    this.apiBaseUrl = this.valueProvider.apiUrl;
    console.log('output = '+this.apiBaseUrl);
   }

  getposts() {
    return this.httpclient.get<Posts[]>(this.apiBaseUrl+'posts');
  }

  addPost(post:Posts) {
   // let post = { userId: 1, title: 'qwertyuiop', body: 'asdfghjkl' };
    return this.httpclient.post(this.apiBaseUrl+'posts', post);
  }

  updatePost() {
    let post = { userId: 1, id: 2, title: 'qwertyuiop', body: 'asdfghjkl' };
    return this.httpclient.put(this.apiBaseUrl+'posts/1',post);
  }

  deletePost(){
    return this.httpclient.delete(this.apiBaseUrl+'posts/1');
  }

  getPhotos(){
    const request = new HttpRequest('GET',this.apiBaseUrl+'photos'
    ,{reportProgress:true});
    return this.httpclient.request(request);
  }
} 
