import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //index sayfasında html tagi gibi kullanılan yerdir.
  templateUrl: './app.component.html', // burası html in içeriğinin yer aldığı
  styleUrls: ['./app.component.css'], // html in css olduğu yerdir. burası array burada birden fazla css olabilir.
})
export class AppComponent {
  title: string = 'northwind';
  user: string = 'Kaan Gemalmaz';
  
}
