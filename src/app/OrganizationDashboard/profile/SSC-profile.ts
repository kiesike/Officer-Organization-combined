import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SSCSidebar } from '../SSC-sidebar/SSC-sidebar';

@Component({
  selector: 'app-ssc-profile',
  standalone: true,
  imports: [CommonModule, FormsModule, SSCSidebar],
  templateUrl: './SSC-profile.html'
})
export class SSCProfile {
  profile = {
    name: 'Treasurer',
    office: 'Student Organization',
    contact: '+63 999 123 4567',
    email: 'treasurer@university.edu'
  };

  passwords = { current: '', new: '', confirm: '' };
  editMode = false;

  get initials() {
    return this.profile.name.split(' ').map(n => n.charAt(0)).join('').toUpperCase();
  }

  get passwordMismatch() {
    return this.passwords.new && this.passwords.confirm && this.passwords.new !== this.passwords.confirm;
  }

  toggleEditMode() {
    if (this.editMode) {
      alert('Profile updated successfully!');
    }
    this.editMode = !this.editMode;
  }

  updatePassword() {
    if (this.passwordMismatch) { alert('Passwords do not match!'); return; }
    if (!this.passwords.current) { alert('Please enter your current password.'); return; }
    alert('Password updated successfully!');
    this.passwords = { current: '', new: '', confirm: '' };
  }

  logout() {
    alert('Logging out...');
  }
}
