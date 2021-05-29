/**
 * © Rolling Array https://rollingarray.co.in/
 *
 * long description for the file
 *
 * @summary Data communication service
 * @author code@rollingarray.co.in
 *
 * Created at     : 2021-05-29 23:52:55 
 * Last modified  : 2021-05-29 23:53:50
 */

import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataCommunicationModel } from '../model/data-communication.model';

@Injectable({
  providedIn: 'root'
})
export class DataCommunicationService {
    dataCommunicationModel = new DataCommunicationModel();
    private subject = new BehaviorSubject<any>(this.dataCommunicationModel);

    sendMessage(message: string) {
        this.dataCommunicationModel.message = message;
        this.subject.next(this.dataCommunicationModel);
    }

    clearMessage() {
        
    }

    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }
}
