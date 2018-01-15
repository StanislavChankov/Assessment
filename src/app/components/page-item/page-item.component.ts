import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-item',
  templateUrl: './page-item.component.html',
  styleUrls: ['./page-item.component.css']
})
export class PageItemComponent implements OnInit {

  @Input()
  pageNumber: number;

  constructor() { }

  ngOnInit() {
  }

}
