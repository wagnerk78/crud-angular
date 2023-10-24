import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupName } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Course } from '../models/course';
import { CoursesService } from '../services/courses.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';




@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {

form: FormGroup;

constructor(private fb: FormBuilder, private service: CoursesService,
  private snackBar: MatSnackBar,
  private location: Location ) {
this.form = fb.group({
 'name': 'null',
 'category': 'null'

})
}

ngOnInit(): void {

}

onSubmit(f: NgForm){
  this.service.save(f.value).subscribe(result => this.onSucess(),  error => this.onError())
}

private onError() {
  this.snackBar.open('Erro ao salvar curso', '',   {duration: 3000})
}

private onSucess(){
  this.snackBar.open('Curso salvo com sucesso!', '',   {duration: 3000})
  this.onCancel()
}

onCancel() {
  this.location.back();
}

}
