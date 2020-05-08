import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LandingPageComponent} from './landing-page/landing-page.component';
import {FeedTheWormComponent} from './feed-the-worm/feed-the-worm.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'feedTheWorm',
    component: FeedTheWormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
