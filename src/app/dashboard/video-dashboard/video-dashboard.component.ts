import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Video } from 'src/app/models/types';
import { VideoDataService } from 'src/app/services/video-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.scss']
})
export class VideoDashboardComponent implements OnInit {

  videoList$: Observable<Video[]>;
  selected: Video = null;

  constructor(videoService: VideoDataService) {
    this.videoList$ = videoService.getVideos();
  }

  ngOnInit() {
  }

  onVideoSelected(video: Video) {
    this.selected = video;
  }

}
