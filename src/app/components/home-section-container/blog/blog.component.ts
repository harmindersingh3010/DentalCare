import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { DoctorsModel } from '../doctors/doctors.component';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

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
    margin: 15,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 2
      },
      940: {
        items: 3
      }
    },
    nav: false
  }

  
  constructor() { }

  ngOnInit(): void {
  }

}
