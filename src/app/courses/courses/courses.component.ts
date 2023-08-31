import { CoursesService } from './../services/courses.service';
import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course';
import { Observable, catchError, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {

  courses$: Observable<Course[]>;
  displayedColumns = ['name', 'category'];

  // courseService: CoursesService
constructor(private courseService: CoursesService,
  public dialog: MatDialog

  ) {
  // this.courseService = new CoursesService();
  this.courses$ = this.courseService.list()
  .pipe(
    catchError(error => {
      this.onError('Erro ao carregar lista de cursos.')
      return of([])
    })
  )

}


onError(errorMsg: string) {
  this.dialog.open(ErrorDialogComponent, {
    data: errorMsg
  });
}
}


