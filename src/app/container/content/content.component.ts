import { Component, OnInit, SimpleChanges, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { fromEvent, map, debounceTime, distinctUntilChanged, pluck } from 'rxjs';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements AfterViewInit, OnInit {
  valueSearch: string = '';
  @ViewChild('yourElement') yourElement!: ElementRef;
  constructor() { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    fromEvent(this.yourElement.nativeElement, 'input') .pipe(pluck('target', 'value'))
    .pipe(debounceTime(2000))
    .pipe(distinctUntilChanged())
    .subscribe((data: any) => this.valueSearch = data);
  }
  // onSearchHandler(event:any) {
    // const value = event.target.value
    
    // fromEvent(event.target, 'input') .pipe(map(value))
    // .pipe(debounceTime(3000))
    // .pipe(distinctUntilChanged())
    // .subscribe(data => console.log(data));
  // }
 }
