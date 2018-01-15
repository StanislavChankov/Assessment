import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input()
  itemCount: number;
  get ItemCount(): number {
    return this.itemCount;
  }
  set ItemCount(value: number) {
    this.itemCount = value;
  }

  constructor() { }

  ngOnInit() {
  }




  GetArrayOfItemCount(): Array<number> {
    const countArray: Array<number> = new Array<number>(this.itemCount);
    for (let index = 0; index < this.itemCount; index++) {
      countArray[index] = index + 1;
    }

    return countArray;
  }

}
