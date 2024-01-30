import { HttpClient } from '@angular/common/http';
import { ResfulService } from '../shared/services/restful.service';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Book } from '../shared/models/book.model';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class BookRepository extends ResfulService {
  constructor(protected override httpClient: HttpClient) {
    super(httpClient);
  }

  getAllBook(): Observable<Book[]> {
    return this.doGet(`${environment.apiUrl}/book`);
  }
}
