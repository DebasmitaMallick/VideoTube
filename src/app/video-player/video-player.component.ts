import { Component, OnInit } from '@angular/core';
import { Video } from '../models/VideoInfo.model';
import { faShare, faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { likes } from '../models/likes.model';
import { dislikes } from '../models/dislikes.model';
import { Subscribers } from '../models/Subscribers.model';


@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {

  videoId: number = 1;
  username = 'Debz';

  userId = 0;

  videoInfo = new Video(this.videoId);
  videoTitle = this.videoInfo.getVideoTitle();
  viewCount = this.videoInfo.getViews();
  uploadedBy = this.videoInfo.getUploader();
  uploadDate = this.videoInfo.getUploadDate();
  videoDescription = this.videoInfo.getVideoDescription();
  profilePic = 'assets/images/profilePictures/default.png';
  actionDivClass = 'subscribeButtonContainer';

  Subscribers = new Subscribers();

  isSubscribedTo = this.Subscribers.isSubscribed(this.username, this.uploadedBy);
  actionBtnClass = this.isSubscribedTo ? "unsubscribe button" : "subscribe button";
  actionBtnText = 'SUBSCRIBE';
  deleteActionDivClass = 'deleteVideoButtonContainer';
  deleteActionBtnClass = 'delete button';
  deleteActionBtnText = 'DELETE VIDEO';

  Likes = new likes();
  likesCount = this.Likes.videoLikesCount(this.videoId);

  Dislikes = new dislikes();
  dislikesCount = this.Dislikes.videodislikesCount(this.videoId);

  faShare = faShare;
  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;

  id: number | undefined
  userTo: String | undefined
  userFrom: String  | undefined

  subscribe()
  {
    if(this.isSubscribedTo)
    {
      this.Subscribers.unsubscribe(this.username, this.uploadedBy);
      this.isSubscribedTo=false;
      this.actionBtnText="SUBSCRIBE";
    }
    else
    {
      const newId = this.Subscribers.subscribers[0].id + 1;
      this.Subscribers.subscribe({id: newId, userTo: this.uploadedBy, userFrom: this.username});
      this.isSubscribedTo=true;
      this.actionBtnText="SUBSCRIBED";
    }
    this.actionBtnClass = this.isSubscribedTo ? "unsubscribe button" : "subscribe button";    
  }

  likeVideo(){
    if(this.Likes.videoIsLiked(this.username, this.videoId)){
      this.Likes.unLike(this.username, 0, this.videoId);
    } else {
      const newId = this.Likes.likes[0].id + 1;
      this.Likes.postLike({
        id: newId,
        username: this.username,
        commentId: 0,
        videoId: this.videoId
      });
      this.Dislikes.undislike(this.username, 0, this.videoId);
      if($(".dislikeButton fa-icon").hasClass('btnActive')){
        $(".dislikeButton fa-icon").removeClass('btnActive');
      }
    }
    $(".likeButton fa-icon").toggleClass('btnActive');
    this.likesCount = this.Likes.videoLikesCount(this.videoId);
    this.dislikesCount = this.Dislikes.videodislikesCount(this.videoId);
  }

  dislikeVideo(){
    if(this.Dislikes.videoIsdisliked(this.username, this.videoId)){
      this.Dislikes.undislike(this.username, 0, this.videoId);
    } else {
      const newId = this.Dislikes.dislikes[0].id + 1;
        this.Dislikes.postdislike({
        id: newId,
        username: this.username,
        commentId: 0,
        videoId: this.videoId
      });
      this.Likes.unLike(this.username, 0, this.videoId);
      if($(".likeButton fa-icon").hasClass('btnActive')){
        $(".likeButton fa-icon").removeClass('btnActive');
      }
    }
    $(".dislikeButton fa-icon").toggleClass('btnActive');
    this.dislikesCount = this.Dislikes.videodislikesCount(this.videoId);
    this.likesCount = this.Likes.videoLikesCount(this.videoId);
  }

  ngOnInit(): void {
    $('#videoElementID').bind('contextmenu',function() { return false; });
    if(this.Likes.videoIsLiked(this.username, this.videoId)){
      $(".likeButton fa-icon").addClass('btnActive');
    }
    if(this.Dislikes.videoIsdisliked(this.username, this.videoId)){
      $(".dislikeButton fa-icon").addClass('btnActive');
    }
  }

}
