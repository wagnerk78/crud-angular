
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Course } from '../models/course';


@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {

form: FormGroup;


// @Input()
// get value(): Course | null {
//   let n = this.form.value;
// return n
// }
// set value(c: Course | null) {
//   this.form.setValue({id: c?._id, name: c?.name, category: c?.category })
// }


constructor(private fb: FormBuilder) {
this.form = fb.group({
 'name': 'null',
 'category': 'null'

})
}

ngOnInit(): void {

}

}
