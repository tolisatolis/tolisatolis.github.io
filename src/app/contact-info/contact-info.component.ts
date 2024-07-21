import { Component } from '@angular/core';
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardTitle,
} from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-contact-info',
  standalone: true,
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.scss'],
  imports: [MatCard, MatCardContent, MatCardHeader, MatCardTitle, MatIcon],
})
export class ContactInfoComponent {}
