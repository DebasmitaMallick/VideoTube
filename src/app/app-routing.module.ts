import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UploadComponent } from './upload/upload.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { ProcessingComponent } from './processing/processing.component';
import { WatchComponent } from './watch/watch.component';
import { UploaderProfileComponent } from './uploader-profile/uploader-profile.component';
import { CategoryVideosComponent } from './category-videos/category-videos.component';
import { NormalUserComponent } from './normal-user/normal-user.component';
import { SignupComponent } from './signup/signup.component';
import { EditVideoComponent } from './edit-video/edit-video.component';
import { DemoMainComponent } from './demo-main/demo-main.component';
// import { SettingComponent } from './setting/setting.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'upload',
    component: UploadComponent
  },
  {
    path: 'admin',
    component: AdminDashboardComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  },
  {
    path: 'processing',
    component: ProcessingComponent
  },
  {
    path: 'watch',
    component: WatchComponent
  },
  {
    path: 'profile',
    component: UploaderProfileComponent
  },
  {
    path: 'category',
    component: CategoryVideosComponent
  },
  {
    path: 'normalUser',
    component: NormalUserComponent
  },
  {
    path: 'signUp',
    component: SignupComponent
  },
  {
    path: 'editVideo',
    component: EditVideoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
