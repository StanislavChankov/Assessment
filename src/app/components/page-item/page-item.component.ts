import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-page-item',
  templateUrl: './page-item.component.html',
  styleUrls: ['./page-item.component.css']
})
export class PageItemComponent implements OnInit {

  @Input()
  pageNumber: number;
  @Output()
  pageClickEvent: EventEmitter<Number>;

  constructor() {
    this.pageClickEvent = new EventEmitter<Number>();
   }

  ngOnInit() {
  }

  onPageClicked(): void {
    this.pageClickEvent.emit(this.pageNumber);
  }

}
