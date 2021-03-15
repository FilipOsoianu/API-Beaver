import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ObjectTypeModel} from '../../models/object-type.model';


@Injectable()
export class BodyGeneratorService {
  constructor(private http: HttpClient) {
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  saveObject(objectTypeModel: ObjectTypeModel): Observable<ObjectTypeModel> {
    return this.http.post<ObjectTypeModel>('url', objectTypeModel, this.httpOptions);
  }
}

