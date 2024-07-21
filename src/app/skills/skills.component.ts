import { Component } from '@angular/core';
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardTitle,
} from '@angular/material/card';
import {
  MatExpansionPanel,
  MatExpansionPanelHeader,
  MatExpansionPanelTitle,
} from '@angular/material/expansion';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
  imports: [
    MatIcon,
    MatExpansionPanel,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatExpansionPanel,
    MatCardContent,
    MatExpansionPanelTitle,
    MatExpansionPanelHeader,
  ],
})
export class SkillsComponent {}
