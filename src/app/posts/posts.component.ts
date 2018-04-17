import { Component, OnInit } from '@angular/core';
import { PostsService } from '../service/posts/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  providers:[{provide:PostsService,useClass:PostsService}]
})
export class PostsComponent implements OnInit {

  constructor(private postservice:PostsService) { }

  ngOnInit() {
    this.postservice.getposts().subscribe(
      (res) =>{
         console.log(res);
      },
      (err) => console.log(err)
    );
  }

}
