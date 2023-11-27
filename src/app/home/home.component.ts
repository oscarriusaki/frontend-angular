import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../shared/navbar/navbar.component';

@Component({
  standalone: true,
  imports: [ RouterModule , NavbarComponent],
  templateUrl: './home.component.html',
  styles: ``
})
export default class HomeComponent {

}
