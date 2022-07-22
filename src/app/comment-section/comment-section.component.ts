import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Comments } from '../models/comments.model';

@Component({
  selector: 'app-comment-section',
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class CommentSectionComponent implements OnInit {

  profilePic = 'assets/images/profilePictures/default.png';
  videoId = 1;
  Comment = new Comments(this.videoId);
  commentsArr = this.Comment.Comments;
  showreplies = false;
  newComment: string | undefined;
  currentName = 'Debz';
  currentDate = 'Now';
  formActive = '';
  buttonTxt = 'COMMENT'

  constructor() { }

  ngOnInit(): void {
  }


  postComment(newCommentData: string){
    const newId = this.Comment.allComments[0].id + 1;
    const data = {
      id: newId,
      postedBy: this.currentName,
      videoId: this.videoId,
      responseTo: 0,
      body: newCommentData,
      datePosted: this.currentDate
    };
    this.Comment.postComment(data);
    this.commentsArr = this.Comment.getComments();
  }


}
