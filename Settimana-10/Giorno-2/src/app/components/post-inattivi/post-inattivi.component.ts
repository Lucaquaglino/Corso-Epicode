import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post';
import { PostServiceService } from 'src/app/service/post-service.service';
@Component({
  selector: 'app-post-inattivi',
  templateUrl: './post-inattivi.component.html',
  styleUrls: ['./post-inattivi.component.scss'],
})
export class PostInattiviComponent implements OnInit {
  posts!: Post[];

  constructor(private postsrv: PostServiceService) {
    this.postsrv.getPosts().then((posts) => {
      this.posts = posts;
      console.log(this.posts);
    });
  }

  ngOnInit(): void {}
}
