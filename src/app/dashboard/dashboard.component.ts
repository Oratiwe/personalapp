// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-dashboard',
//   templateUrl: './dashboard.component.html',
//   styleUrls: ['./dashboard.component.scss']
// })
// export class DashboardComponent {

// }

// src/app/slideshow/slideshow.component.ts
import { Component, OnInit } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';


@Component({
  selector: 'app-slideshow',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  slides = [
    'assets/img1.jpg',
    'assets/img2.jpg',
    'assets/img3.jpg'
  ];
  currentSlide = 0;

  ngOnInit() {
    this.showSlides();
  }

  showSlides() {
    setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    }, 3000);
  }

  changeSlide(n: number) {
    this.currentSlide = (this.currentSlide + n + this.slides.length) % this.slides.length;
  }
}

