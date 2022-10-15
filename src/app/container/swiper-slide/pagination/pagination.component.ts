import { Component, Input, OnInit, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnChanges  {
  @Input() currentPage: number = 0;
  @Input() totalPage: number = 0;
  pages = [];
  @Output () changePage: EventEmitter<number> = new EventEmitter<number>();
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (
      (changes['currentPage'] && changes['currentPage'].currentValue) ||
      (changes['totalPage'] && changes['totalPage'].currentValue)
    ) {
      this.pages = this.renderPage(this.totalPage);
    }
  }
  clickChangePage(page: number) {
    this.changePage.emit(page);
  }
  renderPage (total: any): any { 
    return [...Array(total).keys()].map(x => x + 1);
  }
}
