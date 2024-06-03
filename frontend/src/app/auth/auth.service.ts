import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { CookieService } from 'ngx-cookie-service';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  BASE_API_URL: string = "http://localhost:8080/api/v1/auth/";
  constructor(private http: HttpClient,
    private cookieService: CookieService) { }

  getToken(): string {
    console.log(this.cookieService.get('accessToken'));
    return "";
  }
  forgotPassword(email: string): Observable<string> {
    const body = new URLSearchParams();
    body.set('email', email);
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.post<any>(this.BASE_API_URL + 'forgot', body.toString(), {
      headers,
      responseType: 'text' as 'json'
    })
    .pipe(
      catchError(this.handleError)
    )
  }
  private handleError(error: any) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError({
      message: error.error,
      status: error.status
    });
  }
}
