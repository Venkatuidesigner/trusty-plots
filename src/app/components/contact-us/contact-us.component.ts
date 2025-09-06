import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-contact-us',
  standalone: false,
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {
  contactForm: FormGroup;
  submitting = false;
  successMessage = '';
  errorMessage = '';

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  get f() {
    return this.contactForm.controls;
  }

  sendMail() {
    if(this.contactForm.invalid) return;

    this.submitting = true;
    this.successMessage = '';
    this.errorMessage = '';

    const formData = new FormData();
    formData.append('name', this.f['name'].value);
    formData.append('email', this.f['email'].value);
    formData.append('phone', this.f['phone'].value);
    formData.append('message', this.f['message'].value);

    this.http.post('https://www.trustyplots.com/contact.php', formData, { responseType: 'text' })
      .subscribe({
        next: (res) => {
          this.successMessage = res;
          this.contactForm.reset();
          this.submitting = false;
        },
        error: (err: HttpErrorResponse) => {
          this.errorMessage = err.error || 'Failed to send message. Please try again later.';
          this.submitting = false;
        }
      });
  }
}
