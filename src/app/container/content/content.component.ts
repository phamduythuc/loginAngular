import { Component, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  valueSearch = '';
  titleSlide = "saaa"
  constructor() { }

  ngOnInit(): void {
  }
  onSearchHandler(event:any) {
    const value = event.target.value
    this.valueSearch = value;
   
  }
  titleChange(event: any) {
    if (event === 0) {
      this.titleSlide = "Flavour"
    }else if (event === 1) {
      this.titleSlide = "VDU"
    }else if (event === 2) {
      this.titleSlide = "VNF Indicator"
    }
  }
}
