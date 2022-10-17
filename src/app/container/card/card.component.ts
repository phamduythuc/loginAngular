import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() title: string = '';
  @Input() ram: number = 0;;
  @Input() cpu: number = 0;
  @Input() hdd: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
