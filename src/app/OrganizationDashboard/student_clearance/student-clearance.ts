import { Component } from '@angular/core';
import { SSCSidebar } from '../SSC-sidebar/SSC-sidebar';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Student {
  studentId: string;
  name: string;
  program: string;
  year: string;
  treasurer: string;
  adviser: string;
  librarian: string;
  dean: string;
  overallStatus: string;
}

@Component({
  selector: 'app-student-clearance',
  standalone: true,
  imports: [SSCSidebar, CommonModule, FormsModule],
  templateUrl: './student-clearance.html',
  

})
export class StudentClearance {
  searchTerm = '';
  yearFilter = '';
  statusFilter = '';

  students: Student[] = [
    { studentId: '2301436', name: 'Egonio, Carol Jean', program: 'BSIT', year: '3rd Year', treasurer: 'DONE', adviser: 'DONE', librarian: 'DONE', dean: 'PENDING', overallStatus: 'INCOMPLETE' },
    { studentId: '2301536', name: 'De la Cruz, Juan', program: 'BSCS', year: '2nd Year', treasurer: 'DONE', adviser: 'PENDING', librarian: 'DONE', dean: 'DONE', overallStatus: 'INCOMPLETE' },
    { studentId: '2301636', name: 'Doe, John', program: 'BSIT', year: '4th Year', treasurer: 'DONE', adviser: 'DONE', librarian: 'REJECTED', dean: 'DONE', overallStatus: 'REJECTED' },
  ];

  get filteredStudents(): Student[] {
    return this.students.filter(s => {
      const matchesSearch = s.studentId.includes(this.searchTerm) || s.name.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesYear = !this.yearFilter || s.year.startsWith(this.yearFilter);
      const matchesStatus = !this.statusFilter || s.overallStatus.toLowerCase() === this.statusFilter.toLowerCase();
      return matchesSearch && matchesYear && matchesStatus;
    });
  }

  getBadgeClass(status: string): string {
    if (status.toLowerCase() === 'done') return 'approved';
    if (status.toLowerCase() === 'pending') return 'pending';
    if (status.toLowerCase() === 'rejected') return 'rejected';
    if (status.toLowerCase() === 'incomplete') return 'pending';
    return '';
  }

  addComment(studentId: string) {
    const comment = prompt(`Add a comment for Student ID: ${studentId}`);
    if (comment) {
      alert(`Comment for ${studentId}: ${comment}`);
    }
  }
}
