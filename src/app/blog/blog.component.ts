import { Component, OnInit } from '@angular/core';
import * as fs from 'fs';


@Component({
  selector: 'blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  /**------IMAGE(S)/ICON(S) VARIABLES----- */

  BLOG_VIDEO: string = "assets/images/gifs/nebula.mp4";
  B_W_A :any ="assets/images/gallery/Black-white/";


  Black_white_gallery:any[]=["assets/images/gallery/Black-white/Deves.jpg","assets/images/gallery/Black-white/Kovind.jpg","assets/images/gallery/Black-white/Prachi.jpg",
  "assets/images/gallery/Black-white/Radhe-Krishna.jpg","assets/images/gallery/Black-white/A-Girl.jpg","assets/images/gallery/Black-white/Vinchi.jpg","assets/images/gallery/Black-white/A-Letter.png","assets/images/gallery/Black-white/S-Letter.jpg" ];
  colored_gallery:any[]=[
    "assets/images/gallery/colored/Lord-ganesha.jpg","assets/images/gallery/colored/Ankita.jpg",
    "assets/images/gallery/colored/Couple.jpg","assets/images/gallery/colored/Red-rose.png",

    "assets/images/gallery/colored/Buddha.jpg","assets/images/gallery/colored/Dulhan.jpg",
    "assets/images/gallery/colored/Hema-Malini.jpg","assets/images/gallery/colored/Sai-Baba.jpg",
    "assets/images/gallery/colored/Radhe-Krishna.jpg","assets/images/gallery/colored/Dulhan-On-Wall.png",
    "assets/images/gallery/colored/Ganesha-On-Wall.png"
  ];


  constructor() {
    this.loadGallery();
    // this.getAllFilesFromFolder(__dirname + "folder");
   }

  ngOnInit() {

  }
  loadGallery()
  {
    // console.error("B_W_A:",this.B_W_A);

  }
//    getAllFilesFromFolder(B_W_A){

//     var filesystem = require('fs');
//     var results = [];

//     filesystem.readdirSync(B_W_A).forEach(function(file) {

//         file = B_W_A+'/'+file;
//         var stat = filesystem.statSync(file);

//         if (stat && stat.isDirectory()) {
//             results = results.concat();
//         } else results.push(file);
//         console.error("results:",this.results);

//     });

//     return results;

// };

}
