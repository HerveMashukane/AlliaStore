import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { GalleryComponent } from "./pages/gallery/gallery.component";
import { FooterComponent } from "./pages/footer/footer.component";
import { FaqsComponent } from "./pages/faqs/faqs.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    HomePageComponent,
    GalleryComponent,
    FaqsComponent,
    FooterComponent,
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AlliaStore';
}
