import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { LoginRequest } from "../../shared/models/request/loginRequest";
import { LoginResponse } from "../../shared/models/response/loginResponse";
import { RegisterRequest } from "../../shared/models/request/registerRequest";


@Injectable()
export class ApiService {
    constructor(private http: HttpClient) {}

    login(request: LoginRequest) {
        return this.http.post<LoginResponse>(environment.apiUrl + '/auth/authenticate', request);
    }

    register(request: RegisterRequest) {
        return this.http.post<LoginResponse>(environment.apiUrl + '/auth/register', request);
    }

    getUserById(userId: number) {
        return this.http.get<any>(environment.apiUrl + '/users/' + userId);
    }
}