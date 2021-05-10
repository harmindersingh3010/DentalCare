import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { PricingComponent } from './pricing/pricing.component';
import { DepartmentComponent } from './department/department.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { HomeBoxComponent } from './home-box/home-box.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { BlogComponent } from './blog/blog.component';
import { GallaryComponent } from './gallary/gallary.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { LightboxModule } from 'ngx-lightbox';



@NgModule({
  declarations: [
    TestimonialsComponent,
    PricingComponent,
    DepartmentComponent,
    CertificatesComponent,
    ServicesComponent,
    AboutComponent,
    HomeBoxComponent,
    DoctorsComponent,
    BlogComponent,
    GallaryComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    LightboxModule
  ],
  exports: [
    TestimonialsComponent,
    PricingComponent,
    DepartmentComponent,
    CertificatesComponent,
    ServicesComponent,
    AboutComponent,
    HomeBoxComponent,
    DoctorsComponent,
    BlogComponent,
    GallaryComponent
  ]
})
export class HomeSectionContainerModule { }
