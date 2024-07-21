import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-experience',
  standalone: true,
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  imports: [MatCardModule],
})
export class ExperienceComponent {}
