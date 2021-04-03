import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable, OnInit} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {FormBuilder, FormGroup} from '@angular/forms';
import {PropertiesModel} from "../models/properties.model";

@Injectable({
  providedIn: 'root'
})
export class BodyGeneratorService {
  constructor(private http: HttpClient) {

  }

  uploadForm: FormGroup;
  public ramlProperty: BehaviorSubject<PropertiesModel> = new BehaviorSubject<PropertiesModel>(null);
  public newProperty: BehaviorSubject<PropertiesModel> = new BehaviorSubject<PropertiesModel>(null);


  toRaml(data: PropertiesModel) {
    this.ramlProperty.next(data);
  }

  loadObject(data: PropertiesModel) {
    this.newProperty.next(data);
  }


  saveObject(file: File): Observable<object> {

    const formData = new FormData();
    formData.append('file', file);

    return this.http.post<PropertiesModel>('http://172.16.1.83:8081/users/1/specs/2/files', formData);
  }

  downloadObject(fileName: string, userId?: number, specId?: number): Observable<Blob> {
    console.log(fileName);
    return this.http.get('http://172.16.1.83:8081/users/1/specs/2/files/' + fileName, {responseType: 'blob'});
  }


  loadFilesList(userId?: number, specId?: number): Observable<string []> {

    return this.http.get<string []>('http://172.16.1.83:8081/users/1/specs/2/files');
  }
}

