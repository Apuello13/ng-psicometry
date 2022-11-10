import { NgModule } from '@angular/core';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './pages/login/login.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [SharedModule],
  providers: [AuthService],
})
export class AuthModule {}
