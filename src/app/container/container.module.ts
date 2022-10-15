import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContainerRoutingModule } from './container-routing.module';
import { ContainerTmlpComponent } from './container-tmlp/container-tmlp.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';
import { SectionComponent } from './section/section.component';
import { SwiperSlideComponent } from './swiper-slide/swiper-slide.component';
import { SwiperModule } from 'swiper/angular';
import { CardComponent } from './card/card.component';
import { PaginationComponent } from './swiper-slide/pagination/pagination.component';
import { TitleComponent } from './content/title/title.component';



@NgModule({
  declarations: [
    ContainerTmlpComponent,
    HeaderComponent,
    NavbarComponent,
    ContentComponent,
    SectionComponent,
    SwiperSlideComponent,
    CardComponent,
    PaginationComponent,
    TitleComponent,
  ],
  imports: [
    CommonModule,
    ContainerRoutingModule,
    SwiperModule
  ],
  exports: [ContainerTmlpComponent]
})
export class ContainerModule { 
  
}
