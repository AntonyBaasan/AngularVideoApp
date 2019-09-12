import { Component, OnInit, Input } from '@angular/core';
import { Video } from 'src/app/models/types';
import { ActivatedRoute } from '@angular/router';
import { VideoDataService } from 'src/app/services/video-data.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit {
  video: Video = null;

  constructor(private route: ActivatedRoute, videoDataService: VideoDataService) {
    this.route.queryParamMap
      .pipe(
        switchMap(param => {
          const id = param.get('videoId');
          return videoDataService.getVideoById(id);
        })
      ).subscribe(v => this.video = v);
  }

  ngOnInit() {
  }

}
