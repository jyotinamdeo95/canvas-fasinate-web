import { Component, OnInit, Output ,EventEmitter, Input} from '@angular/core';


@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  siteLogo:string="assets/images/logo/siteLogo.PNG";
  /**SOCIAL ICONS */
  facebookIcon:string ="assets/images/svgs/facebook-icon.svg";
  instagramIcon:string ="assets/images/svgs/instagram-icon.svg";
  twitterIcon:string ="assets/images/svgs/twitter-icon.svg";
  youtubeIcon:string ="assets/images/svgs/youtube-icon.svg";
  @Output() closePageEvent= new EventEmitter();
  // @Input() showCloseIcon :boolean = false;

  constructor() { }

  ngOnInit() {
  }
  closePage()
  {
    this.closePageEvent.emit();
  }

}
