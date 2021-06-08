import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable, OnInit} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {FormBuilder, FormGroup} from '@angular/forms';
import {PropertiesModel} from "../../models/properties.model";
import {NbAuthJWTToken, NbAuthService} from "@nebular/auth";
import {environment} from "../../../../environments/environment";

@Injectable({providedIn: 'root'})
export class BodyGeneratorService {
  constructor(private http: HttpClient) {
  }

  uploadForm: FormGroup;
  public ramlProperty: BehaviorSubject<PropertiesModel> = new BehaviorSubject<PropertiesModel>(null);
  public toPropertyObjects: BehaviorSubject<PropertiesModel> = new BehaviorSubject<PropertiesModel>(null);
  public newProperty: BehaviorSubject<PropertiesModel> = new BehaviorSubject<PropertiesModel>(null);


  toRaml(data: PropertiesModel) {
    this.ramlProperty.next(data);
  }

  toObjects(data: PropertiesModel) {
    this.toPropertyObjects.next(data);
  }

  loadObject(data: PropertiesModel) {
    this.newProperty.next(data);
  }


  saveObject(userId: any, specId: any, file: File): Observable<object> {

    const formData = new FormData();
    formData.append('file', file);

    return this.http.post<PropertiesModel>(environment.api_url + `/users/${userId}/specs/${specId}/files`, formData);
  }

  downloadObject(userId: any, specId: any, fileName: string): Observable<Blob> {
    return this.http.get(environment.api_url + "/users/" + userId + "/specs/" + specId + "/files/" + fileName, {responseType: 'blob'});
  }


  loadFilesList(userId: any, specId: any): Observable<string []> {

    return this.http.get<string []>(environment.api_url + `/users/${userId}/specs/${specId}/files`);
  }
}

