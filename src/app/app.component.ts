import { HeaderComponent } from './components/header/header.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { ComodidadesComponent } from './components/comodidades/comodidades.component';
import { AboutComponent } from './components/about/about.component';
import { AdsComponent } from './components/ads/ads.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, HeroComponent, ComodidadesComponent, AboutComponent, AdsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'pousada-carlos';
}
