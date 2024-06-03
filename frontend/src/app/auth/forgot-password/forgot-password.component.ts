import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent implements OnInit {
  email: string = '';
  responseMessage: string = '';
  isEmailValid: boolean = false;
  showAlert: boolean = false;
  alertDescription: string = '';
  alertTitle: string = "";
  constructor(
    private readonly authService: AuthService
  ) {
  }
  onValidityChange(isValid: boolean): void {
    // console.log(isValid)
    this.isEmailValid = isValid;
  }
  ngOnInit() {
    // console.log('email')
  }
  forgotPassword(): void {
    this.authService.forgotPassword(this.email).subscribe(
      {
        next: (response) => {
          this.responseMessage = response;
          console.log(response)
        },
        error: (error) => {
          this.showAlert = true;
          const body = JSON.parse(error.message);
          this.alertTitle = body.title;
          this.alertDescription = body.description;
          // setTimeout(() => {
          //   this.showAlert = false;
          //   this.alertTitle = '';
          //   this.alertDescription = '';
          //   this.email = ""
          // }, 5000)
          console.log(error.message);
        }
      }
    )
  }
}
