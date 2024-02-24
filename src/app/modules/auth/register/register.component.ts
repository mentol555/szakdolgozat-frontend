import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrl: './register.component.scss'
  })
  export class RegisterComponent implements OnInit {

    constructor(private http: HttpClient) {}

    register() {
        const req = {
            email: "teszt@asd.com",
            password: "1234"
        }
        this.http.post('http://localhost:8080/api/auth/authenticate', req).subscribe();
    }

    ngOnInit(): void {
    
    }
  }