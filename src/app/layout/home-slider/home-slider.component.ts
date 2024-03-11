import { Component } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, Inject } from '@angular/core';


@Component({
  selector: 'app-home-slider',
  standalone: true,
  imports: [],
  templateUrl: './home-slider.component.html',
  styleUrl: './home-slider.component.css'
})

export class HomeSliderComponent {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
      if (isPlatformBrowser(this.platformId)) {
          document.getElementById('next')?.addEventListener('click', () => {
              const lists = document.querySelectorAll('.item');
              const slide = document.getElementById('slide');
  
              if (slide) {
                  slide.appendChild(lists[0]);
              }
          });
  
          document.getElementById('prev')?.addEventListener('click', () => {
              const lists = document.querySelectorAll('.item');
              const slide = document.getElementById('slide');
  
              if (slide) {
                  slide.prepend(lists[lists.length - 1]);
              }
          });
      }
  }
}
