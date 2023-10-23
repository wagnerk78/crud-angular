import { Course } from './../models/course';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = 'api/courses'

  constructor(private httpClient: HttpClient) { }

  list () {
    return this.httpClient.get<Course[]>(this.API)
    .pipe(
      first(),
      //delay(3000)
    );
  }

  save (record: Course){
   return this.httpClient.post<Course>(this.API, record).pipe(first())
  }
}
