import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GallaryComponent implements OnInit {


  _albums: any = [];
  constructor(private _lightbox: Lightbox) {
    for (let i = 1; i <= 9; i++) {
      const src = `assets/images/gallery/full/${i}.jpg`;
      const caption = 'Image ' + i + ' caption here';
      const thumb = `assets/images/gallery/full/${i}.jpg`;
      const album = {
        src: src,
        caption: caption,
        thumb: thumb
      };

      this._albums.push(album);
    }
  }

  open(index: number): void {
    // open lightbox
    this._lightbox.open(this._albums, index, {
      // wrapAround: true,
      // showImageNumberLabel: true,
      // showZoom: true,
      // disableScrolling: true
    });
  }

  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }


  ngOnInit(): void {
  }

}
