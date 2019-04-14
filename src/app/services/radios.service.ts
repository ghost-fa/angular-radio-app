import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class RadiosService {
  radiosUrl: string = "https://teclead.de/recruiting/radios";
  constructor(private http: HttpClient) {}

  getRadios(): Observable<any> {
    return this.http.get<any>(this.radiosUrl);
  }
}
