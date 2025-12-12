import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SSCSidebar } from '../SSC-sidebar/SSC-sidebar';

@Component({
  selector: 'app-approvers',
  standalone: true,
  imports: [CommonModule, FormsModule, SSCSidebar],
  templateUrl: './approvers.html',
  
})
export class Approvers {

  approvers = [
    {
      id: 'APR-001',
      name: 'Ramon Cruz',
      title: 'Student',
      department: 'Information Technology',
      organization: 'BSIT Digits Organization',
      role: 'Student President',
      type: 'Student Leader',
      status: 'Active',
      requirements: ['Treasurer Clearance']
    }
  ];

  searchTerm = '';
  roleFilter = '';
  statusFilter = '';

  showAddModal = false;
  showEditModal = false;
  editingApprover: any = null;

  form: any = {
    facultyID: '',
    name: '',
    organization: '',
    email: '',
    confirmEmail: '',
    password: '',
    confirmPassword: '',
    agree: false,
    requirements: []
  };

  openAddModal() { this.showAddModal = true; }
  closeAddModal() { this.showAddModal = false; this.resetForm(); }

  openEditModal(a: any) {
    this.editingApprover = a;
    this.form = { ...a, password: '', confirmPassword: '', confirmEmail: a.email || a.confirmEmail, agree: true };
    this.showEditModal = true;
  }

  closeEditModal() { this.showEditModal = false; this.resetForm(); }

  toggleRequirement(req: string) {
    const exists = this.form.requirements.includes(req);
    if (exists) {
      this.form.requirements = this.form.requirements.filter((r: string) => r !== req);
    } else {
      this.form.requirements.push(req);
    }
  }

  get emailMismatch(): boolean {
    return this.form.email && this.form.confirmEmail && this.form.email !== this.form.confirmEmail;
  }

  get passwordMismatch(): boolean {
    return this.form.password && this.form.confirmPassword && this.form.password !== this.form.confirmPassword;
  }

  submitAddApprover() {
    if (this.emailMismatch || this.passwordMismatch) {
      alert('Please fix the errors before submitting.');
      return;
    }

    const newApprover = {
      id: this.form.facultyID,
      name: this.form.name,
      title: 'Faculty',
      department: 'N/A',
      organization: this.form.organization,
      role: 'Approver',
      type: 'Faculty Adviser',
      status: 'Active',
      requirements: this.form.requirements
    };

    this.approvers.push(newApprover);
    alert('Approver Added Successfully!');
    this.closeAddModal();
  }

  submitEditApprover() {
  if (this.emailMismatch) {
    alert('Please fix the email mismatch before submitting.');
    return;
  }

  // Only check password mismatch if the user entered a new password
  if (this.form.password || this.form.confirmPassword) {
    if (this.passwordMismatch) {
      alert('Passwords do not match.');
      return;
    } else {
      // Update password if new password entered
      this.editingApprover.password = this.form.password;
    }
  }

  // Update other fields
  Object.assign(this.editingApprover, {
    name: this.form.name,
    organization: this.form.organization,
    email: this.form.email,
    requirements: this.form.requirements
  });

  alert('Approver Updated Successfully!');
  this.closeEditModal();
}


  deleteApprover(a: any) {
    if (confirm('Delete Approver?')) {
      this.approvers = this.approvers.filter(x => x !== a);
    }
  }

  get filteredApprovers() {
    return this.approvers.filter(a => 
      a.name.toLowerCase().includes(this.searchTerm.toLowerCase()) &&
      (this.roleFilter === '' || a.type === this.roleFilter) &&
      (this.statusFilter === '' || a.status === this.statusFilter)
    );
  }

  resetForm() {
    this.form = {
      facultyID: '',
      name: '',
      organization: '',
      email: '',
      confirmEmail: '',
      password: '',
      confirmPassword: '',
      agree: false,
      requirements: []
    };
  }

}
