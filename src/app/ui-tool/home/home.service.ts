import {HttpClient,} from '@angular/common/http';
import {Injectable,} from '@angular/core';
import {Observable} from 'rxjs';
import {SpecModel} from "../models/spec.model";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(private http: HttpClient) {

  }
  getAllPublicSpecs(): Observable<SpecModel[]> {
    return this.http.get<SpecModel[]>(environment.api_url + `/specs`);
  }

}

