import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Video } from '../models/types';
import { HttpClient } from '@angular/common/http';

const apiUrl = 'https://api.angularbootcamp.com';

@Injectable({
  providedIn: 'root'
})
export class VideoDataService {
  getVideoById(id: string): Observable<Video> {
    return this.http
      .get<Video[]>(apiUrl + '/videos').pipe(
        map((videos: Video[]) => {
          return videos.find(v => v.id === id);
        })
      );
  }

  constructor(private http: HttpClient) { }

  getVideos(): Observable<Video[]> {
    return this.http
      .get<Video[]>(apiUrl + '/videos').pipe(
        map((videos: Video[]) => {
          videos.forEach(v => v.title = v.title.toUpperCase());
          return videos;
        })
      );
  }
}
