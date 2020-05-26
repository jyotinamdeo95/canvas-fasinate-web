import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  /**------IMAGE(S)/ICON(S) VARIABLES----- */

  WORK_VIDEO: string = "assets/images/gifs/nebula.mp4";


  constructor() { }

  ngOnInit() {
  }

}
