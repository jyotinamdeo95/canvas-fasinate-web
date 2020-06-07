import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  /**------IMAGE(S)/ICON(S) VARIABLES----- */

  BLOG_VIDEO: string = "assets/images/gifs/nebula.mp4";
  B_W_A: any = "assets/images/gallery/Black-white/";


  Black_white_gallery: any[] = [
    "assets/images/gallery/Black-white/Deves.jpg", "assets/images/gallery/Black-white/Kovind.jpg",
    "assets/images/gallery/Black-white/Prachi.jpg", "assets/images/gallery/Black-white/Vinchi.jpg",
    "assets/images/gallery/Black-white/Radhe-Krishna.jpg", "assets/images/gallery/Black-white/Jyoti-Gargi.jpg",
    "assets/images/gallery/Black-white/Naniji.jpg", "assets/images/gallery/Black-white/A-Boy.jpg",
    "assets/images/gallery/Black-white/Mahatma-Gandhi.png", "assets/images/gallery/Black-white/A-Letter.png",
    "assets/images/gallery/Black-white/S-Letter.jpg", "assets/images/gallery/Black-white/A-Girl.jpg"
  ];
  colored_gallery: any[] = [
    
    "assets/images/gallery/colored/Radhe-Krishna.jpg", "assets/images/gallery/colored/Couple.jpg",
     "assets/images/gallery/colored/Buddha.jpg", "assets/images/gallery/colored/Lord-ganesha.jpg",
     "assets/images/gallery/colored/Chetan.jpg","assets/images/gallery/colored/Sai-Baba.jpg",
    "assets/images/gallery/colored/Dulhan.jpg", "assets/images/gallery/colored/Hema-Malini.jpg",
    "assets/images/gallery/colored/Ankita.jpg","assets/images/gallery/colored/Red-rose.png", 
    "assets/images/gallery/colored/Dulhan-On-Wall.png","assets/images/gallery/colored/Ganesha-On-Wall.png", 
  ];


  constructor() {
    this.loadGallery();

  }

  ngOnInit() {

  }
  loadGallery() {


  }


}
