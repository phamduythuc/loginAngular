import { Component, OnInit, Input,  SimpleChanges, EventEmitter, Output } from '@angular/core';
import SwiperCore, {Pagination} from 'swiper';
SwiperCore.use([Pagination])
@Component({
  selector: 'app-swiper-slide',
  templateUrl: './swiper-slide.component.html',
  styleUrls: ['./swiper-slide.component.scss']
})

export class SwiperSlideComponent implements OnInit {
  @Input() value:any = '';
  @Output () title: EventEmitter<string> = new EventEmitter();
  perPage = 8;
  start = 0;
  currentPage = 1;
  end = this.currentPage * this.perPage;
  cardDisplay: any = [];
  arrData = [
    { title: "Arsenal" },
    { title: "Manchester City" },
    { title: "Tottenham Hotspur" },
    { title: "Brighton & Hove Albion" },
    { title: "Manchester United" },
    { title: "Fulham" },
    { title: "Chelsea" },
    { title: "Liverpool" },
    { title: "Brentford" },
    { title: "Newcastle United  " },
    { title: "Leeds United  " },
    { title: "AFC Bournemouth  " },
    { title: "Everton" },
    { title: "Southampton  " },
    { title: "Aston Villa  " },
    { title: "Crystal Palace  " },
    { title: "Wolverhampton" },
    { title: "West Ham United  " },
    { title: "Nottingham Forest" },
    { title: "Leicester City  " },
    { title: "Real Madrid  " },
    { title: "Barcelona" },
    { title: "Real Betis  " },
    { title: "Athletic Club  " },
    { title: "Atlético Madrid  " },
    { title: "Valencia" },
    { title: "Real Valladolid  " },
    { title: "Elche" },
    { title: "Celta de Vigo  " },
    { title: "Sevilla" },
    { title: "Espanyol" },
    { title: "Cádiz" },
    { title: "Mallorca" },
  ];
  totalPage = 0;
  constructor() { }
  ngOnInit(): void {
    this.setTotalPage(this.arrData);
    this.cardDisplay = this.itemPaginate(this.arrData, this.start, this.end);
    
  }
  ngOnChanges (changes: SimpleChanges) {
    if (changes['value'].currentValue) {
      this.onSearchValue();
    }else {
      this.ngOnInit();
    }
  }
  onSwiper(swiper:any ) {
    // swiper.on('activeIndexChange', () => {
    //   this.title.emit(swiper.activeIndex);
    // })
    console.log(swiper)
  }
  onSlideChange() {
  }
  onSearchValue () {
    const filerData: any = this.arrData.filter((card: any) => {
      if (card.title.trim().toLowerCase().includes(this.value)) {
        return card
      }
    })
    this.currentPage = 1;
    this.getCurentPage(this.currentPage)
    this.cardDisplay = this.itemPaginate(filerData, this.start, this.end);
    this.setTotalPage(filerData);
  }
  setTotalPage (data:any) {
    return this.totalPage = Math.ceil(data.length / this.perPage);
  }
  clickChangePage (page: any) {
    this.currentPage = page;
    this.getCurentPage(this.currentPage);
    this.cardDisplay = this.itemPaginate(this.arrData,this.start, this.end)

  }
  
  getCurentPage (curent: any) {
    this.start = (curent - 1) * this.perPage;
    this.end = curent * this.perPage;
  }
  itemPaginate (data: any, start: number, end: number) : any {
    return data.slice(start, end);
  }
}