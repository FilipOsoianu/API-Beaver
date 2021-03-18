import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable, OnInit} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {PropertiesModel} from '../../models/properties.model';
import {FormBuilder, FormGroup} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class BodyGeneratorService {
  constructor(private http: HttpClient,) {

  }

  uploadForm: FormGroup;
  public myData: BehaviorSubject<PropertiesModel> = new BehaviorSubject<PropertiesModel>(null);


  load(data: PropertiesModel) {
    this.myData.next(data);
  }


  saveObject(file: File): Observable<object> {

    const formData = new FormData();
    formData.append('file', file);

    return this.http.post<PropertiesModel>('http://192.168.81.136:8081/users/5/specs/14/files', formData);
  }


}

