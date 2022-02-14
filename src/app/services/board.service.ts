import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BoardService {
  constructor(private httpClient: HttpClient) {}

  readAll(): Observable<any> {
    return this.httpClient.get(
      'https://api.trello.com/1/members/me/boards?fields=name,url&key=3c47c8854951984339bcac171efe9446&token=558416912afcf2f6d53a035813fe8c567657609dd82caa0726ed0f637fd66d12'
    );
  }
}
