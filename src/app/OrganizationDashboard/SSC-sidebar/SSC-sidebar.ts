import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // ✅ Add this

interface SidebarTab {
  label: string;
  icon: string;
  route: string;
}

@Component({
  selector: 'app-ssc-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule], // ✅ Include RouterModule
  templateUrl: './SSC-sidebar.html',
})
export class SSCSidebar {
  currentRoute = '';

  tabs: SidebarTab[] = [
    { label: 'Report', route: '/organization/report', icon: '📊' },
    { label: 'Student Clearance', route: '/organization/student-clearance', icon: '📝' },
    { label: 'Approvers', route: '/organization/approvers', icon: '👥' },
    { label: 'Profile', route: '/organization/profile', icon: '👤' },
  ];

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.urlAfterRedirects;
      }
    });
  }

  showPage(route: string) {
    this.router.navigate([route]);
  }

  isActive(route: string): boolean {
    return this.currentRoute.includes(route);
  }
}
