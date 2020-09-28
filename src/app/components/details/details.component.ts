import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styles: [
  ]
})
export class DetailsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  back(): void {
    this.router.navigateByUrl('speech');
  }

}
