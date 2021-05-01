import { PostService } from './../../services/post.service';
import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { Post } from 'src/app/models/post.model';

@Component({
  selector: 'create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  // files
  uploading = false;
  fileList: File[] = [];

  // text input
  textValue: string = "";
  
  // hashtags input
  inputVisible = false;
  tagValue = '';
  suggestions: string[] = ['Angular', 'React', 'Node.js'];
  tags: string[] = [];
  
  // on screen click [effect]
  @Input() isCreatePostClicked;
  @Output() isCreatePostClickedEventEmitter = new EventEmitter<boolean>();

    
  constructor(private authService: AuthService, private postService: PostService, private eRef: ElementRef) {
  }

  ngOnInit(): void {
  }

  @HostListener('document:click', ['$event'])
  clickOut(event: Event) {
    if (this.eRef.nativeElement.contains(event.target)) {
      this.isCreatePostClickedEventEmitter.emit(true)
    } else {
      this.isCreatePostClickedEventEmitter.emit(false)
      this.inputVisible = false;
    }
  }

  handleClose(removedTag: {}, event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.tags = this.tags.filter(tag => tag !== removedTag);
  }

  sliceTagName(tag: string): string {
    const isLongTag = tag.length > 20;
    return isLongTag ? `${tag.slice(0, 20)}...` : tag;
  }

  showInput(): void {
    this.inputVisible = true;
  }

  handleInputConfirm(): void {
    if (this.tagValue && this.tags.indexOf(this.tagValue) === -1) {
      this.tags = [...this.tags, this.tagValue];
    }
    this.tagValue = '';
    this.inputVisible = false;
  }

  beforeUpload = (file: File): boolean => {
    this.fileList = this.fileList.concat(file);
    return false;
  };

  handleUpload(): void {
    let post = new Post()
    post.user_id = this.authService.userId
    post.user_name = "Max Pokidaylo"
    post.content = this.textValue
    post.date = new Date().toDateString()
    post.tags = this.tags
    this.postService.createPost(this.fileList, post);
  }
}
