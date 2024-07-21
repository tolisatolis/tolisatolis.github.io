import { Component } from '@angular/core';
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardTitle,
} from '@angular/material/card';

@Component({
  selector: 'app-education',
  standalone: true,
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
  imports: [MatCard, MatCardContent, MatCardHeader, MatCardTitle],
})
export class EducationComponent {}
