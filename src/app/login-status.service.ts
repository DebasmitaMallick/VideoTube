import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginStatusService {
  private loginStatus = new BehaviorSubject(false);
  currentLoginStatus = this.loginStatus.asObservable();

  constructor() { }

  updateLoginStatus(status: boolean) {
    this.loginStatus.next(status);
  }
}
