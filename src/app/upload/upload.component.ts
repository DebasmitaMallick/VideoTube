import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { NavElements } from '../models/NavElements.model';
import { EnrollmentService } from '../api.service';
import { VideoUploadData } from '../models/VideoUploadData.model';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  uploadModel = new VideoUploadData('', '', '', '', '');

  videos=['private','public'];
  private navEle = new NavElements();
  categoryList = this.navEle.navEle;
  constructor(private router:Router, private _enrollmentService: EnrollmentService, ) { }

  ngOnInit(): void {
  }

  submitForm() {
    // let title: any = this.uploadModel.getTitle();
    // alert(title);
    this._enrollmentService.uploadVideo(this.uploadModel).subscribe(
      data => console.log('Success', data),
      error => console.log('Error!', error)
    )
    this.router.navigate(['/processing']);
  }

  public getTitle(video: VideoUploadData) {}

  public getCategory(video: VideoUploadData) {}


}