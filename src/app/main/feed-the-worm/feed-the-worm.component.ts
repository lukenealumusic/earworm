import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-feed-the-worm',
  templateUrl: './feed-the-worm.component.html',
  styleUrls: ['./feed-the-worm.component.scss'],
})
export class FeedTheWormComponent implements OnInit {

  genres = new FormControl();
  genreList: string[] = ['Rock', 'Hip Hop', 'Jazz', 'Classical'];

  decades = new FormControl();
  decadeList: string[] = ['50s', '60s', '70s', '80s', '90s', 'Noughties', '10s'];

  constructor() { }

  ngOnInit() {}
}
