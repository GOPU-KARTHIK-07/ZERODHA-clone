import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "../home/home.component";
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterOutlet, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {

}
