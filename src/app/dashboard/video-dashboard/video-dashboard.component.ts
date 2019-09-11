import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpXsrfTokenExtractor } from '@angular/common/http';

const apiUrl = 'https://api.angularbootcamp.com';

@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.scss']
})
export class VideoDashboardComponent implements OnInit {

  videoList: any = [];
  selected: any = null;

  constructor(http: HttpClient) {
    http.get<any[]>(apiUrl + '/videos').subscribe(videos => {
      this.videoList = videos;
    });
  }

  ngOnInit() {
  }

  videoSelected(video) {
    this.selected = video;
  }

}
