import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss'
  })
  export class LoginComponent implements OnInit {

    constructor(private http: HttpClient) {}

    login() {
        const req = {
            email: "teszt@asd.com",
            password: "1234"
        }
        this.http.post('http://localhost:8080/api/auth/authenticate', req).subscribe();
    }

    ngOnInit(): void {
    
    }
  }