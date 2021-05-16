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

  like(post, userId) {
    post.liked = !post.liked;
    if (post.liked) {
      // add userId to noice_ids array
      post.noice_ids.push(userId)
    } else {
      // remove userId to noice_ids array
      const index = post.noice_ids.indexOf(userId)
      if (index > -1) {
        post.noice_ids.splice(index, 1)
      }
    }
    this.http.post(this.userPostUrl + 'update', post, { responseType: 'text' }).toPromise().catch(err => {
      post.liked = !post.liked;
      if (post.liked) {
        // add userId to noice_ids array
        post.noice_ids.push(userId)
      } else {
        // remove userId to noice_ids array
        const index = post.noice_ids.indexOf(userId)
        if (index > -1) {
          post.noice_ids.splice(index, 1)
        }
      }
    })
  }
}
