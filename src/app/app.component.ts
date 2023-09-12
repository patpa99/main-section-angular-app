import type {OnDestroy, OnInit} from '@angular/core';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {Component} from '@angular/core';

import {assetUrl} from 'src/single-spa/asset-url';

@Component({
  selector: 'app-root2',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export class AppComponent implements OnInit, OnDestroy {
  title = 'main-section-angular-app';

  // For the Angular image
  angularImgUrl = assetUrl('images/angular.png');

  clicked = false;
  count = 0;

  // To increase the counter by 1
  buttonPlus = () => (this.count += 1);

  // To decrease the counter by 1
  buttonMinus = () => {
    if (this.count > 0) this.count -= 1;
  };

  // For adding EventListeners
  ngOnInit(): void {
    window.addEventListener('buttonPlus', this.buttonPlus);
    window.addEventListener('buttonMinus', this.buttonMinus);
  }

  // For removing EventListeners
  ngOnDestroy(): void {
    window.removeEventListener('buttonPlus', this.buttonPlus);
    window.removeEventListener('buttonMinus', this.buttonMinus);
  }

  /* To modify the 'clicked' attribute to check if the button is clicked
  to enable or disable Angular image display */
  enableDisable(): void {
    this.clicked = !this.clicked;
  }
}
