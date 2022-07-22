import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Comments } from '../models/comments.model';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { likes } from '../models/likes.model';
import { dislikes } from '../models/dislikes.model';

@Component({
  selector: 'comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() commentsArr: any;
  @Output() commentsArrChange = new EventEmitter<any>();
  
  videoId = 1;
  username = 'Debz';
  Comment = new Comments(this.videoId);
  profilePic = 'assets/images/profilePictures/default.png';
  newComment: any;
  currentName = 'Debz';
  currentDate = 'Now';
  formActive = 'hidden';
  buttonTxt = 'Reply';
  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;

  Likes = new likes();
  

  Dislikes = new dislikes();
  
  ngOnInit(): void {
    
  }

  constructor() { }
  
  showReplySection(currentElement:any){
    if($(currentElement).html() === ' View reply '){
      $(currentElement).html(' Hide reply ');
    } else {
      $(currentElement).html(' View reply ');
    }
    $(currentElement).parent().find('.hiddenReply').first().toggleClass('hidden');
  }

  toggleReply(currentElement: any) {
    $(currentElement).closest('.controls').siblings('.replyCommentForm').toggleClass('hidden');
  }

  postComment(newCommentData: string, responseTo: number){
    alert(responseTo);
    const newId = this.Comment.allComments[0].id + 1;
    const data = {
      id: newId,
      postedBy: this.currentName,
      videoId: this.videoId,
      responseTo: responseTo,
      body: newCommentData,
      datePosted: this.currentDate
    };
    this.Comment.postComment(data);
    this.commentsArrChange.emit(this.Comment.allComments);
  }

  likeComment(commentId: number){
    if(this.Likes.commentIsLiked(this.username, commentId)){
      this.Likes.unLike(this.username, commentId, 0);
    } else {
      const newId = this.Likes.likes[0].id + 1;
      this.Likes.postLike({
        id: newId,
        username: this.username,
        commentId: commentId,
        videoId: 0
      });
      this.Dislikes.undislike(this.username, commentId, 0);
      
    }
    
  }

  dislikeComment(commentId: number){
    if(this.Dislikes.commentIsdisliked(this.username, commentId)){
      this.Dislikes.undislike(this.username, commentId, 0);
    } else {
      const newId = this.Dislikes.dislikes[0].id + 1;
        this.Dislikes.postdislike({
        id: newId,
        username: this.username,
        commentId: commentId,
        videoId: 0
      });
      this.Likes.unLike(this.username, commentId, 0);
      
    }
    
  }



}
