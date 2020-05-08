import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {FeedTheWormComponent} from './feed-the-worm/feed-the-worm.component';
import {IonicModule} from '@ionic/angular';
import {MainRoutingModule} from './main-routing.module';
import {MatSelectModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [
      LandingPageComponent,
      FeedTheWormComponent
  ],
  entryComponents: [
  ],
  imports: [
    CommonModule,
    IonicModule,
    MatSelectModule,
    MainRoutingModule,
    ReactiveFormsModule,
  ]
})
export class MainModule { }
