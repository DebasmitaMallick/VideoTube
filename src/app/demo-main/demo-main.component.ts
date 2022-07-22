import { Component, OnInit } from '@angular/core';
import { Comments } from '../models/comments.model';

@Component({
  selector: 'app-demo-main',
  templateUrl: './demo-main.component.html',
  styleUrls: ['./demo-main.component.css']
})
export class DemoMainComponent implements OnInit {
  postComments = new Comments(1).demoComments;


  constructor() { }

  ngOnInit(): void {
  }

}
