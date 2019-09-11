import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-stat-filters',
  templateUrl: './stat-filters.component.html',
  styleUrls: ['./stat-filters.component.scss']
})
export class StatFiltersComponent implements OnInit {
  form: FormGroup;
  stats: string[] = [];

  constructor(fb: FormBuilder) {
    this.form = this.createForm(fb);
  }

  ngOnInit() {
  }

  createForm(fb: FormBuilder): FormGroup {
    return fb.group({
      name: [''],
      email: [''],
    });
  }

  saveStat() {
    console.log(this.form);

  }
}
