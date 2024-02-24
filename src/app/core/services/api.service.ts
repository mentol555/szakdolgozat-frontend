import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { LoginRequest } from "../../shared/models/request/loginRequest";
import { LoginResponse } from "../../shared/models/response/loginResponse";


@Injectable()
export class ApiService {
    constructor(private http: HttpClient) {}

    login(request: LoginRequest) {
        return this.http.post<LoginResponse>(environment.apiUrl + '/auth/authenticate', request);
    }
}