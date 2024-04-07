import { Component, OnInit } from '@angular/core';
import { ImageService, PasswordChange, UserData } from '../../core/services/image.service';
import { AuthService } from '../../core/services/auth.service';
import { tap } from 'rxjs';
import { DocumentService } from '../../core/services/document.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
//@ts-ignore
import * as html2pdf from 'html2pdf.js'

export interface UserForm {
    usernameControl: FormControl<string>,
    emailControl: FormControl<string>
}

export interface PasswordForm {
    oldpasswordControl: FormControl<string>,
    newpasswordControl: FormControl<string>,
    newpasswordagainControl: FormControl<string>
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {
    currentUser$ = this.authService.getCurrentUser().pipe(tap(user => {
        this.avatar = "data:image/jpeg;base64," + user.avatar;
        this.base64avatar = this.avatar;
        this.usernameControl.setValue(user.uname);
        this.emailControl.setValue(user.email);
    }));
    selectedTab = 1;

    images$ = this.imageService.getImagesByUserId();
    documents$ = this.documentService.getDocumentsByUserId();


    usernameControl = new FormControl<string>('', {nonNullable: true, validators: [Validators.required]});
    emailControl = new FormControl<string>('', {nonNullable: true, validators: [Validators.required, Validators.email]});

    userForm = new FormGroup<UserForm>({
        usernameControl: this.usernameControl,
        emailControl: this.emailControl
    });

    oldpasswordControl = new FormControl<string>('', {nonNullable: true, validators: [Validators.required]});
    newpasswordControl = new FormControl<string>('', {nonNullable: true, validators: [Validators.required]});
    newpasswordagainControl = new FormControl<string>('', {nonNullable: true, validators: [Validators.required]});

    passwordForm = new FormGroup<PasswordForm>({
        oldpasswordControl: this.oldpasswordControl,
        newpasswordControl: this.newpasswordControl,
        newpasswordagainControl: this.newpasswordagainControl
    });

    avatar: string;
    base64avatar: string;

    hideOld = true;
    hideNew = true;
    hideNewAgain = true;

    constructor(
        private imageService: ImageService, 
        private authService: AuthService,
        private documentService: DocumentService
    ) {}

    ngOnInit() {
        const userId = this.authService.getUserId();
        if(userId) {
            this.imageService.loadImagesByUserId(+userId);
            this.documentService.loadDocumentsByUserId(+userId);
        }
    }

    selectTab(index: number) {
        this.selectedTab = index;
    }

    openImage(imageId: number, $event: any) {
        $event.stopPropagation();
        this.imageService.openImage(imageId);
    }

    editImage(imageId: number, $event: any) {
        $event.stopPropagation();
        this.imageService.editImage(imageId);
    }

    openDocument(documentId: number, $event: any) {
        $event.stopPropagation();
        this.documentService.openDocument(documentId);
    }

    editDocument(documentId: number, $event: any) {
        $event.stopPropagation();
        this.documentService.editDocument(documentId);
    }

    updateUserData(id: number) {
        if(this.userForm.invalid) {
            this.userForm.markAllAsTouched();
            return;
        }
        const userdata: UserData = {
            username: this.usernameControl.value,
            email: this.emailControl.value,
            avatar: this.base64avatar
        }
        this.authService.updateUserData(id, userdata);
    }

    changePassword(id: number) {
        if(this.passwordForm.invalid) {
            this.passwordForm.markAllAsTouched();
            return;
        }
        if(this.newpasswordControl.value !== this.newpasswordagainControl.value) {
            this.newpasswordagainControl.setErrors({'passwordMismatch': true});
            return;
        }
        const passwordChange: PasswordChange = {
            oldpassword: this.oldpasswordControl.value,
            newpassword: this.newpasswordControl.value,
            newpasswordagain: this.newpasswordagainControl.value
        }
        this.authService.changePassword(id, passwordChange);
    }

    imageUpload($event: any) {
        const file = $event.target.files[0];
        
        if (!file) {
            return;
        }
    
        const reader = new FileReader();
    
        reader.onload = (event) => {
            this.base64avatar = event.target?.result as string;
            const blob = this.base64ToBlob(this.base64avatar.split(',')[1], file.type);
            this.avatar = URL.createObjectURL(blob);
        };
    
        reader.readAsDataURL(file);
    }

    base64ToBlob(base64String: string, contentType: string): Blob {
        const byteCharacters = atob(base64String);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        return new Blob([byteArray], { type: contentType });
    }

    downloadImage(imageData: string, $event: Event) {
        $event.stopPropagation();
        const link = document.createElement('a');
        console.log(imageData)
        link.href = imageData;
        link.download = 'image.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    downloadDocument(content: HTMLElement, $event: Event) {
        $event.stopPropagation();
        const options = {
            filename: 'document.pdf',
            margin: 5
        };
        html2pdf().set(options).from(content).save();
    }
}