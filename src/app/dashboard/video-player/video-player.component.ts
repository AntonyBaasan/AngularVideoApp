import { Component, OnInit, Input } from '@angular/core';
import { Video } from 'src/app/models/types';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit {
  @Input() video: Video = null;
  
  constructor() { }

  ngOnInit() {
  }

}
