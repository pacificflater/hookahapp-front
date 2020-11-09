import { Component, OnInit } from '@angular/core';
import {UserService} from '../_services/user.service';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { MessagesService } from '../_services/messages.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
    form: FormGroup;
    showErrorMessage: boolean;

    constructor(private fb: FormBuilder,
                private authService: UserService,
                private router: Router,
                private messagesService: MessagesService) {

        this.form = this.fb.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    login() {
        const val = this.form.value;
        this.showErrorMessage = false;

        if (val.username && val.password) {
            this.authService.login(val.username, val.password)
                .subscribe(
                    () => {
                        this.router.navigateByUrl('/');
                    },
                  (error) => {
                      this.showErrorMessage = true;
                  }
                );
        }

    }
}



