import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeSectionContainerModule } from 'src/app/components/home-section-container/home-section-container.module';

const route: Routes = [
  { path: '', component: HomeComponent },
];



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeSectionContainerModule,
    RouterModule.forChild(route),
  ]
})
export class HomeModule { }
