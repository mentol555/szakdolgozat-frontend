import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthorizationInterceptor } from "./authorization.interceptor";
import { HttperrorInterceptor } from "./httperror.interceptor";

export const httpInterceptProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizationInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttperrorInterceptor, multi: true }
]