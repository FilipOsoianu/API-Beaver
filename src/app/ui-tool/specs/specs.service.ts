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

  deleteSpec(userId: any, specId: number): void {
    this.http.delete(environment.api_url + `/users/${userId}/specs/${specId}`);
  }

  getSpecs(userId: any): Observable<SpecModel[]> {
    return this.http.get<SpecModel[]>(environment.api_url + `/users/${userId}/specs`);
  }

  downloadZip(userId: any, specId: any): Observable<any> {
    return this.http.get(environment.api_url + `/users/${userId}/specs/${specId}/zipContent`, {
      responseType: 'arraybuffer'
    });
  }


  updateSpec(userId: any, specId: any, spec): Observable<SpecModel> {

    return this.http.put<SpecModel>(environment.api_url + `/users/${userId}/specs/${specId}`, spec);
  }

}

