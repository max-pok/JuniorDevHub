import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  userPostUrl = "http://localhost:8080/api/posts/"

  constructor(private http: HttpClient) { }

  getPostsById(userId) {
    return this.http.get<Post[]>(this.userPostUrl + userId).toPromise()
  }
}
