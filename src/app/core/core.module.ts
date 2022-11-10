import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './pages/layout/layout.component';

@NgModule({
  declarations: [
    LayoutComponent,
    HomeComponent,
    SidebarComponent,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [SharedModule],
})
export class CoreModule {}
