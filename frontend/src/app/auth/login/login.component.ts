import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [AuthService]
})
export class LoginComponent {

  logWithGoogle() {
    window.location.href = "https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=http://localhost:8080/api/v1/auth/oauth2/code&response_type=code&client_id=289218385019-8561vk22j963bvi8vgv4o3p0o9g70mqu.apps.googleusercontent.com&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile+openid&access_type=offline"
  }
  loginWithLinkedIn() {
    window.location.href = "https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=86gp8on0ghor9h&redirect_uri=http://localhost:8080/api/v1/auth/oauth2/linkedin/code&state=342DCEeFWf4&scope=openid%20profile%20email"
  }

  constructor(
    private readonly authService: AuthService,
  ) {
    
  }
  ngOnInit() {
    this.authService.getToken();
  }
}
