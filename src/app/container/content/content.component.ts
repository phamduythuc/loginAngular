import { Component, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  valueSearch = '';
  constructor() { }

  ngOnInit(): void {
  }
  onSearchHandler(event:any) {
    const value = event.target.value
    this.valueSearch = value;
   
  }
}
