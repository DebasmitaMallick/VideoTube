import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.css']
})
export class CommentItemComponent implements OnInit {
  @Input()
  item!: any;

  profilePic = 'assets/images/profilePictures/default.png';

  constructor() { }

  ngOnInit(): void {
  }

}
