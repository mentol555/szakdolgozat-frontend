import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../../../core/services/auth.service";

export interface RegisterForm {
    email: FormControl<string>,
    username: FormControl<string>,
    password: FormControl<string>
}

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrl: './register.component.scss'
  })
  export class RegisterComponent implements OnInit {

    constructor(private authService: AuthService) {}

    registerForm = new FormGroup<RegisterForm>({
        email: new FormControl<string>('', { validators: [Validators.required], nonNullable: true }),
        username: new FormControl<string>('', { validators: [Validators.required], nonNullable: true }),
        password: new FormControl<string>('', { validators: [Validators.required], nonNullable: true })
    })

    register() {
        this.authService.register(this.registerForm);
    }

    ngOnInit(): void {
    
    }
  }