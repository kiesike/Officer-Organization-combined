// src/app/app.routes.ts
import { Routes } from '@angular/router';

// Officer Dashboard Components
import { Dashboard } from './OfficerDashboard/dashboard/dashboard';
import { ClearanceQue } from './OfficerDashboard/clearance-que/clearance-que';
import { FollowUp } from './OfficerDashboard/follow-up/follow-up';
import { AuditLogs } from './OfficerDashboard/audit-logs/audit-logs';
import { Settings } from './OfficerDashboard/settings/settings';


// Organization Dashboard Components
import { ReportPage } from './OrganizationDashboard/Report-page/report';
import { StudentClearance } from './OrganizationDashboard/student_clearance/student-clearance';
import { Approvers } from './OrganizationDashboard/approvers/approvers';
import { SSCProfile } from './OrganizationDashboard/profile/SSC-profile';


export const routes: Routes = [
  // Officer Dashboard Routes
  { path: 'officer/dashboard', component: Dashboard },
  { path: 'officer/queue', component: ClearanceQue },
  { path: 'officer/follow-up', component: FollowUp },
  { path: 'officer/audit-logs', component: AuditLogs },
  { path: 'officer/settings', component: Settings },

  // Organization Dashboard Routes
  { path: 'organization/report', component: ReportPage },
  { path: 'organization/student-clearance', component: StudentClearance },
  { path: 'organization/approvers', component: Approvers },
  { path: 'organization/profile', component: SSCProfile },

];
