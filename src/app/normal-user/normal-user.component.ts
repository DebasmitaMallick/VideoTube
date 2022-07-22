import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Privileges } from '../models/privileges.model';
import { NavElements } from '../models/NavElements.model';
// import { DeleteRequest } from '../models/DeleteRequest.model';
// import { Video } from '../models/VideoInfo.model';

@Component({
  selector: 'app-normal-user',
  templateUrl: './normal-user.component.html',
  styleUrls: ['./normal-user.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NormalUserComponent implements OnInit {
  Privileges = new Privileges(1);
  roles = this.Privileges.getRoles();
  NavElements = new NavElements();
  // DeleteRequest = new DeleteRequest();
  // delete_requests = this.DeleteRequest.delete_request;
  // Video = new Video(1);
  // videoList = this.Video.videoList;
  // req_videoList: any = [];
  // req_status: {
  //   status: string;
  //   badge: string;
  // }[] = [];
  // showDescription = true;
  
  uploadStatus(upload: any, delete_:any){
    if(upload === 1){
      if(delete_ === 1){
        return "Upload, Delete";
      } else {
        return "Upload";
      }
    } else {
      if(delete_ === 1){
        return "Delete";
      }
    }
    return "all";
  }

  // requestedVideos(){
  //   for(let i=0; i<this.delete_requests.length; i++){
  //     const videoId = this.delete_requests[i].videoId;
  //     const videoItem = new Video(videoId).getVideoItem();
  //     this.req_videoList.push(videoItem);
  //   }
  // }

  // status(){
  //   for(let i=0; i<this.delete_requests.length; i++){
  //     const s = this.delete_requests[i];
  //     let st = '';
  //     let b = '';
  //     if(s.status === 1){
  //       st = "Approved";
  //       b = 'success';
  //     } else if(s.status === 0){
  //       st = "Rejected";
  //       b = 'danger';
  //     } else {
  //       st = "Pending";
  //       b = 'warning';
  //     }
  //     this.req_status.push({
  //       status: st,
  //       badge: b
  //     });
  //   }
  // }

  constructor() { 
  }

  ngOnInit(): void {
    // this.requestedVideos();
    // this.status();
    // $('.videoGrid').addClass('large');
    // $('.videoGridItem').addClass('gridSmall');
    // $('.title').addClass('titleSmall');
  }

}

