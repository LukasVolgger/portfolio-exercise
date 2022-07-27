import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'lukas-volgger';

  images = ['unique.jpg', 'quality.jpg', 'security.jpg'];
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
