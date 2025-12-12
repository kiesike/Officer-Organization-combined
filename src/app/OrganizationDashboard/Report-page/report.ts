import { Component } from '@angular/core';
import { SSCSidebar } from '../SSC-sidebar/SSC-sidebar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-report',
  standalone: true,
  imports: [SSCSidebar, CommonModule],
  templateUrl: './report.html',
  
})
export class ReportPage {}
