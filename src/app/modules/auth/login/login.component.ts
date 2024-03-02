import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../../../core/services/auth.service";

export interface LoginForm {
    email: FormControl<string>,
    password: FormControl<string>
}

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss'
  })
  export class LoginComponent implements OnInit {

    loginForm = new FormGroup<LoginForm>({
        email: new FormControl<string>('', { validators: [Validators.required], nonNullable: true }),
        password: new FormControl<string>('', { validators: [Validators.required], nonNullable: true })
    })

    constructor(private authService: AuthService) {}

    login() {
        this.authService.login(this.loginForm);
    }

    ngOnInit(): void {
        this.authService.doLogout();
    }
  }