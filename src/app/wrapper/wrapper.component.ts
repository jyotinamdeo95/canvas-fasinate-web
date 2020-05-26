import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {

  /**------IMAGE(S)/ICON(S) VARIABLES----- */
  about_video: string = "assets/images/gifs/swing-kid.gif";
  work_video: string = "assets/images/gifs/gym-couple.gif";
  blog_video: string = "assets/images/gifs/lady-gif.gif";
  contact_video: string = "assets/images/gifs/multiple-hands-woman.gif";
  siteLogo:string="assets/images/logo/siteLogo.png";

  /**SOCIAL ICONS */
  facebookIcon:string ="assets/images/svgs/facebook-icon.svg";
  instagramIcon:string ="assets/images/svgs/instagram-icon.svg";
  twitterIcon:string ="assets/images/svgs/twitter-icon.svg";
  youtubeIcon:string ="assets/images/svgs/youtube-icon.svg";

  /**DISPLAY -COMPLONENT-TOGGLE-VARIABLES */
  showHome: boolean = true;
  showAbout: boolean = false;
  showWork: boolean = false;
  showBlog: boolean = false;
  showContact: boolean = false;


  constructor() { }


  ngOnInit() {
  }
  displayPage(pageType) {
    if (pageType != undefined && pageType != "") {
      this.resetAllVariables();
     
      if (pageType == 'ABOUT') {
        this.showAbout = true;
      }
      if (pageType == 'GALLERY') {
        this.showWork = true;
      }
      if (pageType == 'ACCOMPLISHMENTS') {
        this.showBlog = true;
      }
      if (pageType == 'CONTACT') {
        this.showContact = true;
      }

    }
  }
  resetAllVariables()
  {
    this.showHome = false;
    this.showAbout = false;
    this.showWork = false;
    this.showBlog = false;
    this.showContact = false;
  }
  hoverOnGrid(event)
  {
    // console.error("hoverOnGrid", event);
  }
  mouseoutOnGrid(event)
  {
    // console.error("mouseoutOnGrid", event);
  }
  closePage()
  {
    this.showHome = true;
  }
  

}
