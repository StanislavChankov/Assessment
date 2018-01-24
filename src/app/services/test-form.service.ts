import { TestForm } from './../models/TestForm';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class TestFormService {

constructor(private http: Http) { }

public getTestForm(): Observable<TestForm> {
    return this.http
      .get(environment.apiUrl + '/testform')
      .map(response => {
        const testForm: TestForm = response.json();
        return new TestForm(testForm);
       })
      .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }
}
