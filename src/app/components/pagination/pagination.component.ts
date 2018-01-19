import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input()
  currentPage: number;
  @Input()
  itemCount: number;
  @Output()
  pageClickEvent: EventEmitter<Number>;
  // get ItemCount(): number {
  //   return this.itemCount;
  // }
  // set ItemCount(value: number) {
  //   this.itemCount = value;
  // }
  visiblePages: number;
  shownPageNumbers: Array<number>;
  hasLeftUnrevealedPages: boolean;
  hasRightUnrevealedPages: boolean;
  leftUnrevealPagesCount: number;
  rightUnrevealPagesCount: number;

  constructor() {
    this.visiblePages = 3;
    this.pageClickEvent = new EventEmitter<Number>();
   }

  ngOnInit() {
  }

  GetArrayOfItemCount(): Array<number> {
    let startPageRange = this.currentPage - (this.visiblePages % 2);
    let endPageRange = this.currentPage + (this.visiblePages % 2);

    // We should not start to display from page 0
    // and we shouldn't show page number after that we have.
    if (this.currentPage === 1) {
      startPageRange += 1;
      endPageRange += 1;
    } else if (this.currentPage === this.itemCount) {
      startPageRange -= 1;
      endPageRange -= 1;
    }

    const countArray: Array<number> = new Array<number>();
    for (let index = startPageRange; index <= endPageRange; index++) {
      countArray.push(index);
    }

    return countArray;
  }

  SetBorderClass(value): string {
    if (value === this.currentPage) {
    return 'current-page';
    }
  }

  HasLeftUnrevealedPages(): boolean {
    if (this.currentPage <= 2) {
      return false;
    }

     return true;
  }

  HasRightUnrevealedPages(): boolean {
    if (this.currentPage >= this.itemCount - 1) {
      return false;
    }

     return true;
  }

  onPageClickEvent(clickedPageNumber: number): void {
    this.pageClickEvent.emit(clickedPageNumber);
  }
}
