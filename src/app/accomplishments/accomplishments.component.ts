import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'accomplishments',
  templateUrl: './accomplishments.component.html',
  styleUrls: ['./accomplishments.component.scss']
})
export class AccomplishmentsComponent implements OnInit {

  /**------IMAGE(S)/ICON(S) VARIABLES----- */

  BLOG_VIDEO: string = "assets/images/gifs/nebula.mp4";


  constructor() { }

  ngOnInit() {
  }

}
