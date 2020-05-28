import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  /**------IMAGE(S)/ICON(S) VARIABLES----- */

  BLOG_VIDEO: string = "assets/images/gifs/nebula.mp4";


  Black_white_gallery:any[]=["assets/images/gallery/Black-white/Deves.jpg","assets/images/gallery/Black-white/Kovind.jpg","assets/images/gallery/Black-white/Prachi.jpg",
  "assets/images/gallery/Black-white/Radhe-Krishna.jpg","assets/images/gallery/Black-white/A-Girl.jpg","assets/images/gallery/Black-white/Vinchi.jpg","assets/images/gallery/Black-white/A-Letter.png","assets/images/gallery/Black-white/S-Letter.jpg" ];
  colored_gallery:any[]=[
    "assets/images/gallery/colored/Lord-ganesha.jpg","assets/images/gallery/colored/Ankita.jpg","assets/images/gallery/colored/Couple.jpg","assets/images/gallery/colored/Red-rose.png"
  ];


  constructor() { }

  ngOnInit() {

  }

}
