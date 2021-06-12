import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";
import {PropertiesModel} from "../../models/properties.model";


@Injectable({providedIn: 'root'})
export class SchemaService {
  constructor(private http: HttpClient) {
  }

  loadFilesList(userId: any, specId: any): Observable<string []> {
    return this.http.get<string []>(environment.api_url + `/users/${userId}/specs/${specId}/files`, {params: {fileType: 'resourceType'}});
  }

  saveObject(userId: any, specId: any, file: File): Observable<object> {

    const formData = new FormData();
    formData.append('file', file);

    return this.http.post<PropertiesModel>(environment.api_url + `/users/${userId}/specs/${specId}/files`, formData);
  }

}

