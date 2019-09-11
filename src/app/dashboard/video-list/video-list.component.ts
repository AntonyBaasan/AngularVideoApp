import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {
  @Input() videoList: any = [];
  @Input() selectedVideo: any = null;

  @Output() onSelectVideo: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  onSelect(video) {
    this.onSelectVideo.emit(video);
  }

  isSelected(video) {
    if(this.selectedVideo && this.selectedVideo.id == video.id){
      return true;
    }
    // return this.selectedVideo === video;
  }
}


