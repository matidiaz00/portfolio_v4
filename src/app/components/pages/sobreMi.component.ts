import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre_mi',
  templateUrl: './sobreMi.component.html'
})
export class SobreMiComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  playPause() {
    let myVideo = document.getElementById("video") as HTMLMediaElement;
    if (myVideo.paused)
        myVideo.play();
    else
        myVideo.pause();
  }

}
