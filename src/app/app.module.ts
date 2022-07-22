import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
// import { FormGroup,  FormBuilder,  Validators, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UploadComponent } from './upload/upload.component';
import { LoginStatusService } from './login-status.service';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { ProcessingComponent } from './processing/processing.component';
import { VideoItemComponent } from './video-item/video-item.component';
import { WatchComponent } from './watch/watch.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { CommentSectionComponent } from './comment-section/comment-section.component';
import { SuggestionComponent } from './suggestion/suggestion.component';
import { UploaderProfileComponent } from './uploader-profile/uploader-profile.component';
import { CategoryVideosComponent } from './category-videos/category-videos.component';
import { NormalUserComponent } from './normal-user/normal-user.component';
import { VideoGridItemComponent } from './video-grid-item/video-grid-item.component';
import { SignupComponent } from './signup/signup.component';
import { DeleteRequestComponent } from './delete-request/delete-request.component';
import { EditVideoComponent } from './edit-video/edit-video.component';
import { CommentItemComponent } from './comment-item/comment-item.component';
import { CommentFormComponent } from './comment-form/comment-form.component';
import { CommentControlsComponent } from './comment-controls/comment-controls.component';
import { DemoCommentComponent } from './demo-comment/demo-comment.component';
import { DemoMainComponent } from './demo-main/demo-main.component';
import { CommentComponent } from './comment/comment.component';
// import { ChangePasswordComponent } from './change-password/change-password.component';
// import { SharedDirective } from './shared.directive';
import { CompareValidatorDirective } from './shared.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    UploadComponent,
    AdminDashboardComponent,
    ProfileComponent,
    SettingsComponent,
    ProcessingComponent,
    VideoItemComponent,
    WatchComponent,
    VideoPlayerComponent,
    CommentSectionComponent,
    SuggestionComponent,
    UploaderProfileComponent,
    CategoryVideosComponent,
    NormalUserComponent,
    VideoGridItemComponent,
    SignupComponent,
    DeleteRequestComponent,
    EditVideoComponent,
    CommentItemComponent,
    CommentFormComponent,
    CommentControlsComponent,
    DemoCommentComponent,
    DemoMainComponent,
    CommentComponent
    // SettingComponent,
    // ChangePasswordComponent,
    // CompareValidatorDirective
    // SharedDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    // FormGroup,
    // FormBuilder,
    // Validators,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    LoginStatusService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
