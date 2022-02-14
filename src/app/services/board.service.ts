import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BoardService {
  urlBack: string = 'https://api.trello.com/1/';
  token: string =
    '558416912afcf2f6d53a035813fe8c567657609dd82caa0726ed0f637fd66d12';
  key: string = '3c47c8854951984339bcac171efe9446';
  memberId: string = '5af0c0c1c839decdef38dfa9';

  constructor(private httpClient: HttpClient) {}
  readAll(): Observable<any> {
    return this.httpClient.get(
      this.urlBack +
        'members/me/boards?token=' +
        this.token +
        '&key=' +
        this.key
    );
  }
  search(query: string): Observable<any> {
    return this.httpClient.get(
      this.urlBack +
        'search?query=' +
        query +
        '&token=' +
        this.token +
        '&key=' +
        this.key
    );
  }
  starredGet(): Observable<any> {
    return this.httpClient.get(
      this.urlBack +
        'members/' +
        this.memberId +
        '/boardStars?token=' +
        this.token +
        '&key=' +
        this.key
    );
  }
  starredCreate(id: any): Observable<any> {
    const body = {
      idBoard: id,
      pos: 'top',
    };
    return this.httpClient.post(
      this.urlBack +
        'members/' +
        this.memberId +
        '/boardStars?token=' +
        this.token +
        '&key=' +
        this.key,
      body
    );
  }
  starredDelete(boardStars: any): Observable<any> {
    return this.httpClient.delete(
      this.urlBack +
        'members/' +
        this.memberId +
        '/boardStars/' +
        boardStars +
        '?token=' +
        this.token +
        '&key=' +
        this.key
    );
  }
}
