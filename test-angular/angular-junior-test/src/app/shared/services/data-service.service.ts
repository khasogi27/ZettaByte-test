import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import $data from 'assets/data/mentor.json';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http: HttpClient) { }

  getData() {
    return $data;
  }
}
