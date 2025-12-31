// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));


import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, inject } from '@angular/core';

bootstrapApplication(AppComponent, {
  providers: [
    {
      provide: 'SWIPER_REGISTER',
      useFactory: () => {
        const platformId = inject(PLATFORM_ID);
        if (isPlatformBrowser(platformId)) {
          import('swiper/element/bundle').then(m => m.register());
        }
      }
    }
  ]
});
