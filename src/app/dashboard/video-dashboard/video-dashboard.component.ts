import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Video } from 'src/app/models/types';

const apiUrl = 'https://api.angularbootcamp.com';

@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.scss']
})
export class VideoDashboardComponent implements OnInit {

  videoList: Video[] = [];
  selected: Video = null;

  constructor(http: HttpClient) {
    http.get<Video[]>(apiUrl + '/videos').subscribe(videos => {
      this.videoList = videos;
    });
  }

  ngOnInit() {
  }

  onVideoSelected(video: Video) {
    this.selected = video;
  }

}
