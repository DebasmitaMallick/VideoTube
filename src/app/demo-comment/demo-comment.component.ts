import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'demoComments',
  templateUrl: './demo-comment.component.html',
  styleUrls: ['./demo-comment.component.css']
})
export class DemoCommentComponent implements OnInit {
  @Input() comments: any;

  constructor() { }

  ngOnInit(): void {
  }

}
