import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {
  @Input() profilePic!: string;
  @Input() buttonTxt!: any;
  @Output() newCommentEvent = new EventEmitter<string>();
  newComment: string | undefined;

  postComment(newCommentData: string){
    this.newCommentEvent.emit(newCommentData);
  }

  toggleReply(currentEl: any){
    $(currentEl).parent().find('textarea').val('');
  }

  constructor() { }

  ngOnInit(): void {
  }


}
