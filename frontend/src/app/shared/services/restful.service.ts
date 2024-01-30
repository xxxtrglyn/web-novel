import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ResfulService {
  constructor(protected httpClient: HttpClient) {}

  protected doGet(url: string, isLoading = true): Observable<any> {
    return this.httpClient.get(url);
  }

  protected doPost(url: string, isLoading = true, data: any) {
    return this.httpClient.post(url, data);
  }

  protected doPut(url: string, isLoading = true, data: any) {
    return this.httpClient.put(url, data);
  }

  protected doPatch(url: string, isLoading = true) {
    return this.httpClient.get(url);
  }
}
