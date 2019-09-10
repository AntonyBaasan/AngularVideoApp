import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoDashboardComponent } from './video-dashboard/video-dashboard.component';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { StatFiltersComponent } from './stat-filters/stat-filters.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: VideoDashboardComponent }
]

@NgModule({
  declarations: [
    VideoDashboardComponent, 
    VideoListComponent, 
    VideoPlayerComponent, 
    StatFiltersComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule { }
