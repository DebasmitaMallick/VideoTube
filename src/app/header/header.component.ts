import { Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import { fromEvent, Observable, Subscription } from "rxjs";
import { faNavicon, faUserCircle} from '@fortawesome/free-solid-svg-icons';
import * as $ from 'jquery';
import { NavElements } from '../models/NavElements.model';
import { LogoutAlert } from '../models/Alert.model';
import { LoginStatusService } from '../login-status.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild('toggleButton')
  toggleButton!: ElementRef
  @ViewChild('menu')
  menu!: ElementRef
  resizeObservable$!: Observable<Event>; 
  resizeSubscription$!: Subscription; 
  faNavicon = faNavicon;
  faUserCircle = faUserCircle;
  navItem = "<div class='navigationItem'><a href=''><span>Home</span></a></div>";
  private navEle = new NavElements();
  categoryLists = this.navEle.navEle;
  logoutAlert: LogoutAlert = new LogoutAlert();
  isMenuOpen = true;
  login = false;

  constructor(private renderer: Renderer2, private appService:LoginStatusService) {
    this.renderer.listen('window', 'click',(e:Event)=>{
      if(e.target !== this.menu.nativeElement && this.isMenuOpen==true){
        this.isMenuOpen=false;
      }
      else{
        this.isMenuOpen=true;
      }
    });
  }

  ngOnInit(): void {
    this.appService.currentLoginStatus.subscribe(status => this.login = status)
    this.resizeObservable$ = fromEvent(window, 'resize')
    this.resizeSubscription$ = this.resizeObservable$.subscribe( () => {
      if(window.innerWidth>807 && $("#sideNavContainer").hasClass("sideNavContainer-expand-sm")){
        $('#sideNavContainer').removeClass('sideNavContainer-expand-sm');
      }

      if(window.innerWidth<808 && $("#sideNavContainer").hasClass("sideNavContainer-compress")){
        $("#sideNavContainer").removeClass("sideNavContainer-compress");
        $("#sideNavContainer .navigationItem a").removeClass("sidenav-item-compress");
        $("#sideNavContainer .navigationItem img").removeClass("sidenav-img-compress");
        $("#sideNavContainer .navigationItem").removeClass("sidenav-mainItem-compress");
        $("#sideNavContainer .navigationItem span").removeClass("sidenav-span-compress");
        $("div.navigationItem").eq(1).removeClass("navitem-display-none");
        $("div.navigationItem").eq(3).removeClass("navitem-display-none");
        $("#sideNavContainer .heading").removeClass("sidenav-heading-compress");
        $("#mainSectionContainer").removeClass("leftPadding");
      }

      if(window.innerWidth<=662){
        $("#searchIcon").removeClass("navitem-display-none");
        $("#mastHeadContainer .searchBarContainer").addClass("navitem-display-none");
        $("#mastHeadContainer .searchBarContainer").addClass("searchbar-margin");
      }
  

      if(window.innerWidth>662){
        $("#searchIcon").addClass("navitem-display-none");
        $("#mastHeadContainer .searchBarContainer").removeClass("navitem-display-none");
        $(".navShowHide").removeClass("navitem-display-none");
        $("#mastHeadContainer .logoContainer").removeClass("navitem-display-none");
        $("#mastHeadContainer .rightIcons").removeClass("navitem-display-none");
        $("#backIcon").addClass("navitem-display-none");
        $("#mastHeadContainer .searchBarContainer").removeClass("searchbar-margin");
      }
    })
    
    // JS for search bar animations
    $("#searchIcon").on("click", function(){
      $("#searchIcon").addClass("navitem-display-none");
      $("#mastHeadContainer .searchBarContainer").removeClass("navitem-display-none");
      $(".navShowHide").addClass("navitem-display-none");
      $("#mastHeadContainer .logoContainer").addClass("navitem-display-none");
      $("#mastHeadContainer .rightIcons").addClass("navitem-display-none");
      $("#backIcon").removeClass("navitem-display-none");
    })
    $("#backIcon").on("click", function(){
        $("#searchIcon").removeClass("navitem-display-none");
        $("#mastHeadContainer .searchBarContainer").addClass("navitem-display-none");
        $(".navShowHide").removeClass("navitem-display-none");
        $("#mastHeadContainer .logoContainer").removeClass("navitem-display-none");
        $("#mastHeadContainer .rightIcons").removeClass("navitem-display-none");
        $("#backIcon").addClass("navitem-display-none");
    })
  }

  ngOnDestroy() {
    this.resizeSubscription$.unsubscribe()
  }
  
  navToggle(){
    var main = $("#mainSectionContainer");
    if(window.innerWidth >= 808){
        if(main.hasClass("leftPadding")) {
            $("#sideNavContainer").removeClass("sideNavContainer-compress");
            $("#sideNavContainer .navigationItem a").removeClass("sidenav-item-compress");
            $("#sideNavContainer .navigationItem img").removeClass("sidenav-img-compress");
            $("#sideNavContainer .navigationItem").removeClass("sidenav-mainItem-compress");
            $("#sideNavContainer .navigationItem span").removeClass("sidenav-span-compress");
            $("#sideNavContainer .heading").removeClass("sidenav-heading-compress");
        }
        else {
            $("#sideNavContainer").addClass("sideNavContainer-compress");
            $("#sideNavContainer .navigationItem a").addClass("sidenav-item-compress");
            $("#sideNavContainer .navigationItem img").addClass("sidenav-img-compress");
            $("#sideNavContainer .navigationItem").addClass("sidenav-mainItem-compress");
            $("#sideNavContainer .navigationItem span").addClass("sidenav-span-compress");
            $("#sideNavContainer .heading").addClass("sidenav-heading-compress");
        }
        main.toggleClass("leftPadding");
    }
    else{
        $("#sideNavContainer").css('margin-top', '3rem !important');
        $("#sideNavContainer").toggleClass("sideNavContainer-expand-sm");
    }

  }

  showDropDownItems(){
    $("#profileDropdown").toggle();
  }

  showAlert(){
    this.logoutAlert.fireLogoutAlert();
  }


}
