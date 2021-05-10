import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss']
})
export class CertificatesComponent implements OnInit {
  doctors: any = [{
    name: 'Dr. Linda Feldman',
    img: 'assets/images/team/1.jpg',
    specialization: 'Root Canals Dentist',
    _id: '1'
  }, {
    name: 'Dr. Jessica Tailor',
    img: 'assets/images/team/2.jpg',
    specialization: 'Implant Surgeon',
    _id: '2'
  }, {
    name: 'Dr. Nicholas Fleming',
    img: 'assets/images/team/3.jpg',
    specialization: 'Cosmetic Dental Surgeon',
    _id: '3'
  }, {
    name: 'Dr. Brian Adam',
    img: 'assets/images/team/4.jpg',
    specialization: 'Restorative Dentist',
    _id: '4'
  }];

  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    // margin: 5,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: false
  }
  constructor() { }

  ngOnInit(): void {
  }

}
