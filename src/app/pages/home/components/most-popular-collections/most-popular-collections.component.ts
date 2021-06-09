import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-most-popular-collections',
  templateUrl: './most-popular-collections.component.html',
  styleUrls: ['./most-popular-collections.component.css']
})
export class MostPopularCollectionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  collectionOnFire: SwiperOptions = {
    a11y: { enabled: true },
    direction: 'horizontal',
    slidesPerView: 3,
    spaceBetween: 30,
    breakpoints:{
      1200: {
        slidesPerView: 3
      },
      992: {
        slidesPerView: 2
      },
      300: {
        slidesPerView: 1
      },
    },
    keyboard: true,
    mousewheel: true,
    scrollbar: false,
    navigation: false,
    pagination: true
  }

}
