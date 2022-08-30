import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {

  images = ['unique.jpg', 'quality.jpg', 'security.jpg'];
  headlines = [
    'Every project is unique',
    'Quality comes first',
    'Safety is top priority'
  ];
  currentImage = 0;
  showImage = true;

  ngOnInit() {
    this.updateImage();
  }

  updateImage() {
    setInterval(() => {
      this.currentImage++;

      /**
       *  currentImage = 0;
       *  1. Run: 1%3 = 1;
       *  2. Run: 2%3 = 2;
       *  3. Run: 3%3 = 0;
       *  ...
       */
      this.currentImage = this.currentImage % this.images.length;
      this.showImage = false;

      setTimeout(() => {
        this.showImage = true;
      }, 10);
    }, 8000);
  }

}
