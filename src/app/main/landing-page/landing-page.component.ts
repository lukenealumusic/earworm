import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {}

  public feedTheWorm(): void {
    this.router.navigateByUrl('/feedTheWorm');
  }

}
