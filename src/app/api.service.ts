import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse }  from '@angular/common/http';
import { User } from './models/user.model';
import { NavElements } from './models/NavElements.model';
import { VideoUploadData } from './models/VideoUploadData.model';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  _url = 'http://localhost:3000/enroll';

  constructor(private _http: HttpClient) { }

  enroll(user: User){
    return this._http.post<any>(this._url, user).pipe(
      catchError(this.errorHandler)
    )
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error)
  }

  newCategory(navElements: NavElements){
    return this._http.post<any>(this._url, navElements).pipe(
      catchError(this.errorHandler)
    )
  }

  uploadVideo(Video: VideoUploadData){
    return this._http.post<any>(this._url, Video).pipe(
      catchError(this.errorHandler)
    )
  }
}
