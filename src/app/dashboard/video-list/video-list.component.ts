import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Video } from 'src/app/models/types';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {
  @Input() videoList: Video[] = [];
  @Input() selectedVideo: Video = null;
  @Output() selectVideo = new EventEmitter<Video>();

  constructor() {
  }

  ngOnInit() {
  }

  onSelect(video: Video) {
    this.selectVideo.emit(video);
  }

  isSelected(video: Video) {
    return this.selectedVideo === video;
  }
}


