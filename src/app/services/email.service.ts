import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {EmailEntity, EmailEntityRequest} from '../types';
import {ErrorDialogComponent} from "../custom/error-dialog/error-dialog.component";
import {MatDialog} from "@angular/material";

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private httpHeaders: HttpHeaders;

  constructor(private http: HttpClient, private router: Router, private dialog: MatDialog) {
    this.httpHeaders = new HttpHeaders()
      .set('Access-Control-Allow-Origin', 'https://localhost:4200');
  }

  fetchReceivedEmails(): Observable<Array<EmailEntity>> {
    return this.http.get<Array<EmailEntity>>('http://localhost:8080/emails/inbox',
      {headers: this.httpHeaders});
  }

  fetchSentEmails(): Observable<Array<EmailEntity>> {
    return this.http.get<Array<EmailEntity>>('http://localhost:8080/emails/outbox',
      {headers: this.httpHeaders});
  }

  sendEmail(request: EmailEntityRequest): Observable<EmailEntity> {
    return this.http.post<EmailEntity>('http://localhost:8080/emails', request,
      {headers: this.httpHeaders});
  }

  reply(request: EmailEntityRequest, id: number): Observable<EmailEntity> {
    return this.http.post<EmailEntity>('http://localhost:8080/emails/' + id, request,
      {headers: this.httpHeaders});
  }

  fetchConversation(id: number): Observable<Array<EmailEntity>> {
    return this.http.get<Array<EmailEntity>>('http://localhost:8080/emails/' + id,
      {headers: this.httpHeaders});
  }

  removeMessage(id: number) {
    this.http.delete('http://localhost:8080/emails/' + id, {headers: this.httpHeaders})
      .subscribe(() => {
        },
        err => {
          this.showError(err);
        },
        () => {
          this.router.navigate(['/emails/inbox']);
        });
  }

  showError(err) {
    this.dialog.open(ErrorDialogComponent, {
      width: '700px',
      data: {
        error: err.error
      }
    });
  }
}
