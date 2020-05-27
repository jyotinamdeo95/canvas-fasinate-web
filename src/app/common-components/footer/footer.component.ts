import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
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
