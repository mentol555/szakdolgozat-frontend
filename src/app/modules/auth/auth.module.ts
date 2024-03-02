import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { reducers } from './store/reducers';
import { AuthEffects } from './store/effects/auth.effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    EffectsModule.forFeature([
        AuthEffects
    ])
  ],
  providers: [AuthService]
})
export class AuthModule { }

