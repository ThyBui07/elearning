import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'elearning';

  scroll(element: HTMLElement): void {
    element.scrollIntoView({behavior: "smooth", inline: "nearest"});
  };
}
