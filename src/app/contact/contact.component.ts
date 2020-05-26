import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  /**------IMAGE(S)/ICON(S) VARIABLES----- */
  CONTACT_VIDEO: string = "assets/images/gifs/nebula.mp4";

  constructor() { }

  ngOnInit() {
  }

}
