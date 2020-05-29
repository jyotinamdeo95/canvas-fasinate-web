import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  /**------IMAGE(S)/ICON(S) VARIABLES----- */

  WORK_VIDEO: string = "assets/images/gifs/nebula.mp4";

  commissioned_arts: any[] = [
    {
      "title":"Daya Chaturvedi (Friend)",
      "src":"assets/images/work/Deves-Work.jpg"
    },
    {
      "title":"Chetan Malvi (Friend)",
      "src":"assets/images/work/Chetan-Work2.jpg"
    },
    {
      "title":" Ansh Namdeo (Nephew)",
      "src":"assets/images/work/Ansh-Work.jpg"
    },
    {
      "title":"Prachi Namdeo (Cousin)",
      "src":"assets/images/work/Prachi-Work2.jpg"
    },
    {
      "title":"Hema Malini (Actress)",
      "src":"assets/images/work/Hema-Malini-Work.jpg"
    },
    {
      "title":"Couple (Client)",
      "src":"assets/images/work/Couple-Work.jpg"
    }
  
    // "assets/images/work/Radhe-Krishna.jpg", "assets/images/work/Jyoti-Gargi.jpg",
    // "assets/images/work/Naniji.jpg", "assets/images/work/A-Boy.jpg",
    // "assets/images/work/Mahatma-Gandhi.png", "assets/images/work/A-Letter.png",
    // "assets/images/work/S-Letter.jpg", "assets/images/work/A-Girl.jpg"
  ];
  constructor() { }

  ngOnInit() {
  }

}
