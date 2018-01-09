import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'appp';
  mynumber: number = 10;
  myboolean: boolean = true;
  myobj: {} = {
    cle: 'ma clé',
  };
  date: string = 'date';
  divcolor = 'red';
  content: string = '';
  otherContent: string = '';

  onclick(event: Event): void {
    this.divcolor = 'green';
  }

  mouseenter(): void {
    this.divcolor = 'blue';
  }

  mouseleave(): void {
    this.divcolor = 'red';
  }

  catchInput(event: Event) {
    console.log((<HTMLInputElement>event.target).value);
    this.content = (<HTMLInputElement>event.target).value;
  }
}
