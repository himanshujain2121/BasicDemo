import { Component, OnInit } from '@angular/core';
import { PostsService } from '../service/posts/posts.service';
import { Posts } from '../service/posts/posts';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  providers:[{provide:PostsService,useClass:PostsService}]
})
export class PostsComponent implements OnInit {

  postList:Posts[];
  constructor(private postservice:PostsService) { }

  ngOnInit() {
    this.postservice.getposts().subscribe(
      (res) =>{
         console.log(res);
        this.postList = res;
      },
      (err) => console.log(err)
    );
  }

  addPost(){
     this.postservice.addPost().subscribe(
       (res)=>{console.log(res)},
       (err)=>console.log(err),
     )
  }
  updatePost(){
   this.postservice.updatePost().subscribe((res)=>console.log(res)
   )
  }

}
