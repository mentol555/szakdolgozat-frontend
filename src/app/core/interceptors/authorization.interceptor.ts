import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor {
    
    constructor() {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        const authToken = localStorage.getItem("token");

        if(authToken) {
            req = req.clone({
                headers: req.headers
                .set('Authorization', 'Bearer ' + authToken)
            })
        }
        
        return next.handle(req);
    }
}