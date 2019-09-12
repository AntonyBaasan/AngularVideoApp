import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-stat-filters',
  templateUrl: './stat-filters.component.html',
  styleUrls: ['./stat-filters.component.scss']
})
export class StatFiltersComponent implements OnInit {
  form: FormGroup;
  stats: string[] = [];
  videoTypes = ['type1', 'type2'];

  constructor(fb: FormBuilder) {
    this.form = this.createForm(fb);

    this.form.valueChanges.subscribe(ch => console.log(ch));
  }

  ngOnInit() {
  }

  createForm(fb: FormBuilder): FormGroup {
    return fb.group({
      name: ['aaa', Validators.required],
      comment: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      videoType: [''],
    });
  }

  saveStat() {
    console.log(this.form);

    this.form.reset();
  }
}
