import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainContentComponent } from './components/main-content/main-content.component';

@NgModule({
  declarations: [HomeComponent, FooterComponent, MainContentComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ],
})
export class HomeModule {}
