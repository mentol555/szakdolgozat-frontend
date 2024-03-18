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
import { jwtDecode } from "jwt-decode";
import { TokenData } from "../../shared/models/tokenData";
import { AuthSelectors } from "../../modules/auth/store/selectors";
import { AppSelectors } from "../../store/selectors";
import { AppActions } from "../../store/actions/actionTypes";
import { Router } from "@angular/router";
import { UserData } from "./image.service";


@Injectable()
export class AuthService {
    constructor(
        private store: Store,
        private router: Router
    ) {
    }

    private _isLoggedIn = new BehaviorSubject<boolean>(false);

    public set isLoggedIn(value: boolean) {
        this._isLoggedIn.next(value);
    }
    getIsLoggedIn() {
        return this._isLoggedIn.asObservable();
    }

    loadCurrentUser() {
        this.store.dispatch(AppActions.loadLoggedInUser());
    }

    getCurrentUser() {
        return this.store.select(AppSelectors.appSelector.currentUser);
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

    doLogout() {
        localStorage.clear();
        this.isLoggedIn = false;
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
        this.store.dispatch(AuthActions.registerUser({registerRequest: request}));
    }

    getToken() {
        return localStorage.getItem('token') || "";
    }

    getDecodedToken() {
        if(this.getToken()) {
            return jwtDecode(this.getToken()) as TokenData;
        }
        return;
    }

    getUserId() {
        return this.getDecodedToken()?.userId;
    }

    notAuthorized() {
        this.router.navigate(['/']);
    }

    updateUserData(id: number, userdata: UserData) {
        this.store.dispatch(AppActions.updateUserData({id, userdata}));
    }
}