import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  /**------IMAGE(S)/ICON(S) VARIABLES----- */

  WORK_VIDEO: string = "assets/images/gifs/nebula.mp4";


  constructor() { }

  ngOnInit() {
  }

}
