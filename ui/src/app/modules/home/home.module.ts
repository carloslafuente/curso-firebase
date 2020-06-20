import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { NavbarModule } from 'src/app/shared/navbar/navbar.module';
import { FooterComponent } from './components/footer/footer.component';
import { MainContentComponent } from './components/main-content/main-content.component';

@NgModule({
  declarations: [HomeComponent, FooterComponent, MainContentComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NavbarModule,
  ],
})
export class HomeModule {}
