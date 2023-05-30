import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post';
import { PostServiceService } from 'src/app/service/post-service.service';
@Component({
  selector: 'app-post-attivi',
  templateUrl: './post-attivi.component.html',
  styleUrls: ['./post-attivi.component.scss']
})
export class PostAttiviComponent implements OnInit {
  posts!: Post[];
  constructor(private postsrv:PostServiceService) {

    this.postsrv.getPosts().then((posts) => {
      this.posts = posts;
      console.log(this.posts);
    });
   }

  ngOnInit(): void {
  }

}
