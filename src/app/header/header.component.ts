import { Component, HostListener, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {
  MatSidenav,
  MatSidenavContainer,
  MatSidenavContent,
} from '@angular/material/sidenav';
import { MatIcon } from '@angular/material/icon';
import { MatNavList } from '@angular/material/list';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [
    MatToolbarModule,
    MatButtonModule,
    RouterLink,
    RouterOutlet,
    MatSidenav,
    MatSidenavContent,
    MatIcon,
    MatSidenavContainer,
    MatNavList,
    NgIf,
  ],
})
export class HeaderComponent implements OnInit {
  constructor() {} // Inject PdfService

  isSidebarOpen = true;
  isMobile = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.isMobile = window.innerWidth <= 600;
    if (this.isMobile) {
      this.isSidebarOpen = false; // Automatically close sidebar on mobile
    }
  }

  ngOnInit(): void {
    this.isMobile = window.innerWidth <= 600;
  }
}
