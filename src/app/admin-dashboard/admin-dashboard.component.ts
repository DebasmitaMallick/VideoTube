import { Component, OnInit } from '@angular/core';
import { NavElements } from '../models/NavElements.model';
import { EnrollmentService } from '../api.service';
import { faEdit, faTrash, faArrowUp, faTimes, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { DeleteRequest } from '../models/DeleteRequest.model';
import * as $ from 'jquery';
import { Video } from '../models/VideoInfo.model';
import { Thumbnail } from '../models/SelectThumbnail.model';


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  faEdit = faEdit
  faTrash = faTrash
  faArrowUp = faArrowUp
  faTimes = faTimes
  plusMinus1 = faMinus
  plusMinus2 = faMinus
  checked = false
  gridSmall = 'gridSmall'
  large = 'large'
  titleSmall = 'titleSmall'
  showDescription = true
  Video = new Video(1);
  videoList = this.Video.videoList;
  DeleteRequest = new DeleteRequest();
  delete_requests = this.DeleteRequest.delete_request;
  req_videoList: any = [];

  NavElements = new NavElements();
  categoryLists = this.NavElements.navEle;

  categoryNewName: string | undefined;

  newCategory: string | undefined;

  thumbnail = new Thumbnail();
  thumbnailList = this.thumbnail.thumbnailList;

  getThumbnailData(videoId: number){
    let link: string | undefined;
    for (let i = 0; i< this.thumbnailList.length; i++){
        if((this.thumbnailList[i].videoId == videoId) && (this.thumbnailList[i].selected == 1)){
            link = this.thumbnailList[i].filePath;
            break;
        }
    }
    return link;
  }

  requestedVideos(){
    for(let i=0; i<this.delete_requests.length; i++){
      const videoId = this.delete_requests[i].videoId;
      const videoItem = new Video(videoId).getVideoItem();
      this.req_videoList.push(videoItem);
    }
  }
  approveRequest(videId: number){
    //delete video
  }

  rejectRequest(videId: number){
    
  }

  renameCategory(){
    alert(this.categoryNewName);
  }
  

  constructor(private _enrollmentService: EnrollmentService) {
  }

  ngOnInit(checked = this.checked): void {
    this.requestedVideos();

    $("#checkAll").on('change',function(){
      checked = !checked
      $('#categoryForm input[type="checkbox"]').prop('checked', !checked);
    })
  }

  editAction(currentEl: any,label: any,save: any,cancel: any){
    $('#'+currentEl).attr("type", 'text');
    $('#'+label).hide();
    $('#'+save).show();
    $('#'+cancel).show();
  }

  cancelAction(currentEl: any,label: any,save: any,cancel: any){
    $('#'+currentEl).attr("type", 'checkbox');
    $('#'+label).show();
    $('#'+save).hide();
    $('#'+cancel).hide();
  }

  togglePlusMinus1(){
    this.plusMinus1 = (this.plusMinus1 == faMinus)?faPlus:faMinus;
  }

  togglePlusMinus2(){
    this.plusMinus2 = (this.plusMinus2 == faMinus)?faPlus:faMinus;
  }

  addCategory(data: any){
    alert(data.newCategory);
  }

  categoryFormSubmit(newCategory: any){
    // let link: string = ''
    // let icon: string = ''
    // let category: string = this.NavElements.newCategory;
    const hasCategory = this.NavElements.navEle.some(item => item.category === newCategory.value.newCategory);
    if (!hasCategory){
      this.NavElements.addNewCategory(newCategory.value.newCategory);
      this._enrollmentService.newCategory(newCategory.value.newCategory).subscribe(
        data => console.log('Success', data),
        error => console.log('Error!', error)
      );
      alert(newCategory.value.newCategory+" added successfully");
    } else {
      alert("please add a new category");
    }
  }

}
