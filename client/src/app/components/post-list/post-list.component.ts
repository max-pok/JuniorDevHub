import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  images = [944, 1011, 984];
  constructor() { }

  ngOnInit(): void {
  }

}
