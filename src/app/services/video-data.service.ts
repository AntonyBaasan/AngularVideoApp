import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Video } from '../models/types';
import { HttpClient } from '@angular/common/http';

const apiUrl = 'https://api.angularbootcamp.com';

@Injectable({
  providedIn: 'root'
})
export class VideoDataService {

  constructor(private http: HttpClient) { }

  getVideos(): Observable<Video[]> {
    return this.http.get<Video[]>(apiUrl + '/videos');
  }
}
