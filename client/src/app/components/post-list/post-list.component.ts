import { AuthService } from 'src/app/services/auth.service';
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

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  constructor(private postService: PostService, private authService: AuthService) { }

  ngOnInit(): void {
    this.postService.getAllPosts().then(response => {
      const posts = response.map(post => {
        const noice_ids: string[] = post.noice_ids;
        return { ...post, liked: noice_ids.indexOf(this.authService.userId) >= 0 ? true : false }
      })
      this.posts = posts      
    })
  }

  like(post) {
    this.postService.like(post, this.authService.userId)
  }

}
