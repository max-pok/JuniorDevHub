import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isSelected = false;
  isCreatePostClicked = false;

  constructor() { }

  ngOnInit(): void {
  }

  update(data: boolean) {
    this.isSelected = data;
  }

}
