import { PostService } from './../../services/post.service';
import { UserService } from './../../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { Post } from 'src/app/models/post.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  isInformationLoading = true;
  isPostsLoading = true;
  isCurrentUser = false;
  isRecent = true;
  userId: string;
  information: User = new User();
  posts: Post[] = [];
  filteredPosts: Post[] = [];
  
  constructor(public postService: PostService, public userService: UserService ,public route: ActivatedRoute) { }

  async ngOnInit(): Promise<void> {
    this.route.queryParams.subscribe(values => {
      this.userId = values.userId;
      this.isCurrentUser = this.userService.isCurrentUser(this.userId)
    });
    
    Promise
      .all([this.userService.getUserInfo(this.userId), this.postService.getPostsById(this.userId)])
      .then(response => {
        this.information = response[0];
        this.posts = response[1];
        this.filteredPosts = this.posts
        this.filterByRecent()
      })
      .finally(() => {
        this.isInformationLoading = false;
        this.isPostsLoading = false;
    })
  }


  setUserInformation(user) {
    // ..
  }

  getDateOfPost(date: string) {
    return new Date(date)
  }

  filterByRecent() {
    this.isRecent = true;
    this.filteredPosts.sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    });
  }

  filterByPopular() {
    this.isRecent = false;
    this.filteredPosts.sort((a, b) => { return b.noice_ids.length - a.noice_ids.length });
  }

}
