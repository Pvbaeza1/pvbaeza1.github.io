import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValorantMapApiService {
  private urlApi = 'https://valorant-api.com/v1/maps';

  constructor(private http: HttpClient) { }

  getMap(): Observable<any> {
    return this.http.get<any>(this.urlApi);
  }

}
