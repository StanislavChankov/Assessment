import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input()
  currentPage;
  @Input()
  itemCount: number;
  get ItemCount(): number {
    return this.itemCount;
  }
  set ItemCount(value: number) {
    this.itemCount = value;
  }
  visiblePages: number;
  shownPageNumbers: Array<number>;
  leftUnrevealPagesCount: number;
  rightUnrevealPagesCount: number;

  constructor() {
    this.visiblePages = 3;
   }

  ngOnInit() {
  }

  GetArrayOfItemCount(): Array<number> {
    // const countArray: Array<number> = new Array<number>(this.itemCount);
    // for (let index = 0; index < this.itemCount; index++) {
    //   countArray[index] = index + 1;
    // }
    const startPageRange = this.currentPage - (this.visiblePages % 2);
    const endPageRange = this.currentPage + (this.visiblePages % 2);

    const countArray: Array<number> = new Array<number>();
    for (let index = startPageRange; index <= endPageRange; index++) {
      countArray.push(index);
    }

    return countArray;
  }

}
