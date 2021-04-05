import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable, OnInit} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {FormBuilder, FormGroup} from '@angular/forms';
import {NbAuthJWTToken, NbAuthService} from "@nebular/auth";
import {SpecModel} from "./models/spec.model";

@Injectable({
  providedIn: 'root'
})
export class SpecsService {
  constructor(private http: HttpClient) {

  }

  createSpec(userId: any, spec: SpecModel): Observable<object> {

    return this.http.post<SpecModel>(`http://172.16.1.83:8081/users/${userId}/specs`, spec);
  }

  getSpec(userId: any, specId: number): Observable<SpecModel> {

    return this.http.get<SpecModel>(`http://172.16.1.83:8081/users/${userId}/specs${specId}`);
  }

  getSpecs(userId: any): Observable<SpecModel[]> {

    console.log(userId);

    return this.http.get<SpecModel[]>(`http://172.16.1.83:8081/users/${userId}/specs`);
  }


  getSpecFileNumber(userId: any, specId: number): Observable<string []> {

    return this.http.get<string []>(`http://172.16.1.83:8081/users/${userId}/specs/${specId}/files`);
  }
}

