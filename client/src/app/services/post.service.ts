import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { mergeMap } from 'rxjs/operators';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  userPostUrl = "http://localhost:8080/api/posts/";

  constructor(private http: HttpClient) { }

  getPostsById(userId) {
    return this.http.get<Post[]>(this.userPostUrl + userId).toPromise()
  }

  getAllPosts() {
    return this.http.get<Post[]>(this.userPostUrl).toPromise();
  }

  createPost(fileList, post) {
    const formData = new FormData()
    fileList.forEach((file: any) => {
      formData.append('files[]', file);
    });
        
    return this.http.post(this.userPostUrl + 'upload-form-data', formData, { reportProgress: true })
      .pipe(
        mergeMap(postId => {
          console.log(postId);
          post = { ...post, img: postId || "" }
          return this.http.post(this.userPostUrl + 'upload-post-data', post)
        })
      )
  }
}
