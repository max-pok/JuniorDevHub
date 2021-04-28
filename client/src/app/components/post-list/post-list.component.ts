import { PostService } from './../../services/post.service';
import { Component, OnInit } from '@angular/core';
import { faHeart, faComment, faBookmark } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faEmptyHeart, faBookmark as faEmptyBookmark, faComment as faEmptyComment } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  faHeart = faHeart;
  faEmptyHeart = faEmptyHeart;
  faComment = faComment;
  faBookmark = faBookmark;
  faEmptyBookmark = faEmptyBookmark;
  faEmptyComment = faEmptyComment;

  posts = []

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getAllPosts().then(response => {    
      response.sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime()
      });
      this.posts = response
    })
  }

}
