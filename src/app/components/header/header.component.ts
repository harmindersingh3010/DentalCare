import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  toAbout() {
    document.getElementById("about")?.scrollIntoView({behavior: 'smooth'});
  }
  toServices() {
    document.getElementById("services")?.scrollIntoView({behavior: 'smooth'});
  }
  toDepartment() {
    document.getElementById("department")?.scrollIntoView({behavior: 'smooth'});
  }
  toGallery() {
    document.getElementById("gallery")?.scrollIntoView({behavior: 'smooth'});
  }
  toBlog() {
    document.getElementById("blog")?.scrollIntoView({behavior: 'smooth'});
  }
  toContact() {
    document.getElementById("contact")?.scrollIntoView({behavior: 'smooth'});
  }






}
