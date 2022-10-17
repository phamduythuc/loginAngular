import { Component, OnInit, Input,  SimpleChanges, EventEmitter, Output } from '@angular/core';
import {CardService} from "../../card.service"
// SwiperCore.use([Pagination])
@Component({
  selector: 'app-swiper-slide',
  templateUrl: './swiper-slide.component.html',
  styleUrls: ['./swiper-slide.component.scss']
})

export class SwiperSlideComponent implements OnInit {
  @Input() value:any = '';
  @Output () title: EventEmitter<string> = new EventEmitter();
  perPage: number = 8;
  currentPage: number = 1;
  cardDisplay = [];
  totalPage: number = 0;
  loading: boolean = true;
  catchError:boolean = false;
  valueError:string = '';
  constructor(private card_service : CardService) { }
  ngOnInit(): void {
    this.renderCard();
  }
  ngOnChanges (changes: SimpleChanges) {
    if (changes['value'].currentValue) {
      this.currentPage = 1;
      this.renderCard();
    }else {
      this.value = '';
      this.renderCard();
    }
  }
  
  clickChangePage (page: number) {
    this.currentPage = page;
    this.renderCard();

  }
  renderCard () {
    this.card_service.getCard(this.currentPage, this.perPage, this.value).subscribe((reponse: any,) => {
      this.loading = false;
      this.totalPage = Math.ceil( reponse.count / this.perPage);
      this.cardDisplay = reponse.data
    }, (error: any) => {
      this.loading = false;
        this.catchError = true;
        this.valueError = 'API data error'
    })
  }
  
}