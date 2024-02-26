import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { LoginRequest } from "../../shared/models/request/loginRequest";
import { LoginResponse } from "../../shared/models/response/loginResponse";
import { ApiService } from "./api.service";
import { FormGroup } from "@angular/forms";
import { LoginForm } from "../../modules/auth/login/login.component";
import { Store } from "@ngrx/store";
import { AuthActions } from "../../modules/auth/store/actions/actionTypes";
import { BehaviorSubject } from "rxjs";
import { RegisterForm } from "../../modules/auth/register/register.component";
import { RegisterRequest } from "../../shared/models/request/registerRequest";


@Injectable({providedIn: 'root'})
export class AuthService {
    constructor(
        private store: Store
    ) {
        localStorage.getItem('token') ? this.isLoggedIn = true : this.isLoggedIn = false;
    }

    private _isLoggedIn = new BehaviorSubject<boolean>(false);

    public set isLoggedIn(value: boolean) {
        this._isLoggedIn.next(value);
    }
    getIsLoggedIn() {
        return this._isLoggedIn.asObservable();
    }

    login(loginForm: FormGroup<LoginForm>) {
        if(loginForm.invalid) {
            loginForm.markAllAsTouched();
            return;
        }
        const request: LoginRequest = {
            email: loginForm.controls.email.value,
            password: loginForm.controls.password.value
        }
        this.store.dispatch(AuthActions.loginUser({loginRequest: request}));
    }

    register(registerForm: FormGroup<RegisterForm>) {
        if(registerForm.invalid) {
            registerForm.markAllAsTouched();
            return;
        }
        const request: RegisterRequest = {
            email: registerForm.controls.email.value,
            uname: registerForm.controls.username.value,
            password: registerForm.controls.password.value
        }
        console.log(request);
        this.store.dispatch(AuthActions.registerUser({registerRequest: request}));
    }
}

// TODO: after login, fetch user. Token should contain the userID