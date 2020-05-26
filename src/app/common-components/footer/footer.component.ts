import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  /**SOCIAL ICONS */
  facebookIcon:string ="assets/images/svgs/facebook-icon.svg";
  instagramIcon:string ="assets/images/svgs/instagram-icon.svg";
  twitterIcon:string ="assets/images/svgs/twitter-icon.svg";
  youtubeIcon:string ="assets/images/svgs/youtube-icon.svg";


  constructor() { }

  ngOnInit() {
  }

}
