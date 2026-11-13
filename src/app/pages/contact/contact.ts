import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  submitted = false;
  name = '';
  email = '';
  subject = '';
  message = '';

  onSubmit(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    this.submitted = true;
    form.resetForm();
  }
}
