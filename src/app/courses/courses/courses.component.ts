import { Course } from './../models/course';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

import { CoursesService } from './../services/courses.service';
// import { Course } from '../models/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {

  courses$: Observable<Course[]>;
  displayedColumns = ['name', 'category', 'actions'];

  // courseService: CoursesService
constructor(private courseService: CoursesService,
  public dialog: MatDialog,
  private router: Router,
  private route: ActivatedRoute

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

onAdd() {
 this.router.navigate(['new'], {relativeTo: this.route});
}


onEdit(element: Course) {
 this.router.navigate(['new'], {relativeTo: this.route})
}


}


