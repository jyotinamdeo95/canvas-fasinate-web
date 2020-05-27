import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  /**------IMAGE(S)/ICON(S) VARIABLES----- */
  CONTACT_VIDEO: string = "assets/images/gifs/contact-guy.gif";
  /**SOCIAL ICONS */
  facebookIcon: string = "assets/images/svgs/facebook-square-brands.svg";
  instagramIcon: string = "assets/images/svgs/instagram-square-brands.svg";
  twitterIcon: string = "assets/images/svgs/twitter-square-brands.svg";
  youtubeIcon: string = "assets/images/svgs/youtube-square-brands.svg";
  phoneIcon: string = "assets/images/svgs/phone-square-alt-solid.svg";
  gmailIcon: string = "assets/images/svgs/gmail.svg";
  behanceIcon: string = "assets/images/svgs/behance-square-brands.svg";

  constructor() { }

  ngOnInit() {
  }

}
