import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

export interface DoctorsModel {
  _id: string,
  img: string,
  name: string,
  specialization: string
}

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss']
})
export class DoctorsComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    margin: 15,
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

  doctors: DoctorsModel[] = [{
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
  constructor() { }

  ngOnInit(): void {
  }

}
