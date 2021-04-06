import {HttpClient,} from '@angular/common/http';
import {Injectable,} from '@angular/core';
import {Observable} from 'rxjs';
import {SpecModel} from "../models/spec.model";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SpecsService {
  constructor(private http: HttpClient) {

  }

  createSpec(userId: any, spec: SpecModel): Observable<object> {

    return this.http.post<SpecModel>(environment.api_url + `/users/${userId}/specs`, spec);
  }

  getSpec(userId: any, specId: number): Observable<SpecModel> {

    return this.http.get<SpecModel>(environment.api_url + `/users/${userId}/specs${specId}`);
  }

  getSpecs(userId: any): Observable<SpecModel[]> {

    return this.http.get<SpecModel[]>(environment.api_url + `/users/${userId}/specs`);
  }

  updateSpec(userId: any, specId: any, spec: SpecModel): Observable<SpecModel> {

    return this.http.put<SpecModel>(environment.api_url + `/users/${userId}/specs/${specId}`, spec);
  }

}

