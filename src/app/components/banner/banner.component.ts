import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {

  public changeSize(event: MouseEvent): void {
    const title: HTMLElement = <HTMLElement>event.target;
    if (event.type === 'mouseover') {
      title.style.fontSize = '200px';
    }
    else {
      title.style.fontSize = '150px';
    }
  }
}
