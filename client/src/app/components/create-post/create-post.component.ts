import { Component, OnInit } from '@angular/core';
import { NzUploadChangeParam, NzUploadFile } from 'ng-zorro-antd/upload';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  inputValue: string | null = null;
  textValue: string | null = null;

  panels = [
    {
      active: true,
      disabled: false
    },
  ];

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

}
