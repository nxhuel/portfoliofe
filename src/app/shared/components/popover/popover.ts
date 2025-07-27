import { AfterViewInit, Component, ElementRef } from '@angular/core';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-popover',
  imports: [],
  template: `
    <button
      #popoverBtn
      type="button"
      class="btn btn-secondary"
      data-bs-container="body"
      data-bs-toggle="popover"
      data-bs-placement="bottom"
      data-bs-content=" 
      - html </br>
      - css
      - javascript
      - java"
    >
      Popover on bottom
    </button>
  `,
  styleUrl: './popover.scss',
})
export class Popover implements AfterViewInit {
  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    // Seleccionar todos los elementos con data-bs-toggle="popover"
    const popoverTriggerList = this.el.nativeElement.querySelectorAll(
      '[data-bs-toggle="popover"]'
    );
    popoverTriggerList.forEach((popoverTriggerEl: HTMLElement) => {
      // Inicializar popover con opción container='body'
      new bootstrap.Popover(popoverTriggerEl, {
        container: 'body',
      });
    });
  }
}
