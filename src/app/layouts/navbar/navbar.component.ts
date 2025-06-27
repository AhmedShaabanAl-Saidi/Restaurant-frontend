import { Component } from '@angular/core';
import { HomeComponent } from '../../pages/home/home.component';
import { AboutComponent } from '../../pages/about/about.component';
import { MenuComponent } from '../../pages/menu/menu.component';
import { ContactComponent } from '../../pages/contact/contact.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { BlogComponent } from '../../pages/blog/blog.component';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {}
