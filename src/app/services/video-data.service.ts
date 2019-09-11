import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoDataService {

  constructor() { }

  getVideos(): Observable<Video>{
    http.get<any[]>(apiUrl + '/videos').subscribe(videos => {
      this.videoList = videos;
    });
  }
}
