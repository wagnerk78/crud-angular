import { Course } from './../models/course';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private httpClient: HttpClient) { }

  list (): Course[] {
    return [
      {_id: '1', name: 'Angular', category: 'Front-end'},
      {_id: '2', name: 'PHP', category: 'Back-end'},
      {_id: '3', name: 'Java', category: 'Back-end'}
    ];
  }
}
