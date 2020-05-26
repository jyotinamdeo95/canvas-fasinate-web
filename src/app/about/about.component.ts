import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  
  /**------IMAGE(S)/ICON(S) VARIABLES----- */
  ABOUT_VIDEO: string = "assets/images/gifs/nebula.mp4";

  /**-----------IMAGE VARIABLES----------- */
  aboutImage:string = "assets/images/gallery/vinchi.jpg";
  self_logo:string = "assets/images/gallery/vinchi.jpg";
  nebula:string ="assets/images/gifs/nebula.mp4";
  

  constructor() { }

  ngOnInit() {
  }
 

}
