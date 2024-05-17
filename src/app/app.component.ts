import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet, Router, NavigationStart } from '@angular/router';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { isPlatformBrowser, ViewportScroller } from '@angular/common';
import { FirebaseModule } from './firebase.module'; // Importa el módulo de Firebase
import { environment } from './enviroments/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavBarComponent,
    FooterComponent,
    CommonModule,
    FirebaseModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'dspbim_v0';
  constructor(
    private router: Router,
    private viewportScroller: ViewportScroller,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.router.events.subscribe((event) => {
      if (
        event instanceof NavigationStart &&
        isPlatformBrowser(this.platformId)
      ) {
        this.viewportScroller.scrollToPosition([0, 0]);
      }
    });
  }
}
