import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {
  @Input() videoList: any = [];
  @Input() selectedVideo: any = null;
  @Output() selectVideo = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  onSelect(video) {
    this.selectVideo.emit(video);
  }

  isSelected(video) {
    return this.selectedVideo === video;
  }
}


