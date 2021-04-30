import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NzUploadFile } from 'ng-zorro-antd/upload';
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

  createPost(fileList, userId) {    
    const formData = new FormData()
    fileList.forEach((file: any) => {
      formData.append('files[]', file);
    });
    
    this.http.post(this.userPostUrl + 'upload', formData, { reportProgress: true })
      .subscribe(res => {
        console.log(res);
    })
  }
}
