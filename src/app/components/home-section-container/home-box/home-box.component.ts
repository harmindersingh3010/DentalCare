import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';


export interface SliderModel {
  img: string
}

@Component({
  selector: 'app-home-box',
  templateUrl: './home-box.component.html',
  styleUrls: ['./home-box.component.scss']
})
export class HomeBoxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 300,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }

  doctors: SliderModel[] = [{
    img: 'assets/images/bg/bg18.jpg',
  }, {
    img: 'assets/images/bg/bg16.jpg',
  }];

}
