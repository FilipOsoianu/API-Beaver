import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";


@Injectable({providedIn: 'root'})
export class SchemaService {
  constructor(private http: HttpClient) {
  }
  loadFilesList(userId: any, specId: any): Observable<string []> {
    return this.http.get<string []>(environment.api_url + `/users/${userId}/specs/${specId}/files`);
  }

}

