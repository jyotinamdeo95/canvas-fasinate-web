import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  /**------IMAGE(S)/ICON(S) VARIABLES----- */

  BLOG_VIDEO: string = "assets/images/gifs/nebula.mp4";


  constructor() { }

  ngOnInit() {
  }

}
