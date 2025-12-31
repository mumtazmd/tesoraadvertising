// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-hero-slider',
//   standalone: true,
//   imports: [],
//   templateUrl: './hero-slider.component.html',
//   styleUrl: './hero-slider.component.scss'
// })
// export class HeroSliderComponent {
// slides = [
//   {
//     title: 'Visual Communication',
//     subtitle: 'Outdoor Media Solutions',
//     image: 'assets/images/slide1.jpg'
//   },
//   {
//     title: 'Retail & Traffic Signage',
//     subtitle: 'Across UAE & Middle East',
//     image: 'assets/images/slide2.jpg'
//   }
// ];

// currentIndex = 0;

// next() {
//   this.currentIndex = (this.currentIndex + 1) % this.slides.length;
// }

// prev() {
//   this.currentIndex =
//     (this.currentIndex - 1 + this.slides.length) % this.slides.length;
// }
// }





import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules';
import SwiperCore from 'swiper';

// Register Swiper modules globally so we don't need SwiperModule in the component metadata
SwiperCore.use([Autoplay, Navigation, Pagination, EffectFade]);

@Component({
  selector: 'app-hero-slider',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule],
  templateUrl: './hero-slider.component.html',
  styleUrls: ['./hero-slider.component.scss']
})
export class HeroSliderComponent {
  slides = [
    {
      title: 'Visual Communication',
      subtitle: 'Outdoor Media Solutions',
      image: 'assets/slide1.jpg'
    },
    {
      title: 'Retail & Traffic Signage',
      subtitle: 'Across UAE & Middle East',
      image: 'assets/slide2.jpg'
    }
  ];
modules: any;
}

