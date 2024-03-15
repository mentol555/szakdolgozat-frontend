import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { LoginRequest } from "../../shared/models/request/loginRequest";
import { LoginResponse } from "../../shared/models/response/loginResponse";
import { RegisterRequest } from "../../shared/models/request/registerRequest";
import { Observable, map } from "rxjs";
import { ImageResponse } from "../../shared/models/response/imageResponse";
import { DocumentResponse } from "../../shared/models/response/documentResponse";
import { CommentDto } from "../../shared/models/comment";
import { CommentRequest } from "../../shared/models/request/commentRequest";


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

    getImageById(id: number): Observable<ImageResponse> {
        return this.http.get<ImageResponse>(`${environment.apiUrl}/image/${id}`);
    }

    getImagesByUserId(userId: number): Observable<ImageResponse[]> {
        return this.http.get<ImageResponse[]>(`${environment.apiUrl}/image/user/${userId}`);
    }

    // 

    saveDocument(content: string) {
        return this.http.post<any>(environment.apiUrl + '/document/new', content);
    }

    getDocumentById(id: number): Observable<string> {
        const headers = new HttpHeaders();
        headers.set('Accept', 'text/plain');
    
        return this.http.get(`${environment.apiUrl}/document/${id}`, { headers, responseType: 'text' });
    }

    loadDocumentsByUserId(userId: number): Observable<DocumentResponse[]> {
        return this.http.get<DocumentResponse[]>(`${environment.apiUrl}/document/user/${userId}`);
    }

    //

    getCommentsByImageId(imageId: number) {
        return this.http.get<CommentDto[]>(`${environment.apiUrl}/comments/image/${imageId}`)
    }

    postCommentToImage(imageId: number, request: CommentRequest) {
        return this.http.post<any>(`${environment.apiUrl}/comments/image/${imageId}`, request);
    }

    getCommentsByDocumentId(documentId: number) {
        return this.http.get<CommentDto[]>(`${environment.apiUrl}/comments/document/${documentId}`)
    }

    postCommentToDocument(documentId: number, request: CommentRequest) {
        return this.http.post<any>(`${environment.apiUrl}/comments/document/${documentId}`, request);
    }
}