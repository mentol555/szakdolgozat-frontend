import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { LoginRequest } from "../../shared/models/request/loginRequest";
import { LoginResponse } from "../../shared/models/response/loginResponse";
import { RegisterRequest } from "../../shared/models/request/registerRequest";
import { Observable, map } from "rxjs";


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

    // IMAGE

    saveImage(href: string) {
        return this.http.post<any>(environment.apiUrl + '/image/new', href);
    }

    getImageById(id: number): Observable<string> {
        const headers = new HttpHeaders();
        return this.http.get(`${environment.apiUrl}/image/${id}`, { headers, responseType: 'blob' }).pipe(
            map(response => URL.createObjectURL(response))
        );
    }

}