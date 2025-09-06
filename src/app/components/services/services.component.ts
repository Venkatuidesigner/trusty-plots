import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: false,
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  // Services Section Data
  serviceCards = [
    {
      title: 'Buy Property',
      description: 'Find your ideal home or investment with verified listings and expert support.',
      iconColor: 'from-blue-500 to-indigo-500',
      svgPath: 'M3 9.75L12 4l9 5.75M4.5 10.5V19a1.5 1.5 0 001.5 1.5H9v-6h6v6h3a1.5 1.5 0 001.5-1.5v-8.5',
      features: ['Verified documents', 'Site visits', 'Financing assistance'],
      routerLink: '/properties'
    },
    {
      title: 'Sell Property',
      description: 'Reach serious buyers quickly with our smart marketing and listing solutions.',
      iconColor: 'from-pink-500 to-rose-500',
      svgPath: 'M12 8c-1.657 0-3 .672-3 1.5S10.343 11 12 11s3 .672 3 1.5S13.657 14 12 14m0-6v8m9-4a9 9 0 11-18 0 9 9 0 0118 0z',
      features: ['Free property listing', 'Promotional campaigns', 'End-to-end documentation'],
      routerLink: '/contact-us'
    },
    {
      title: 'Rent & Lease',
      description: 'Connect with trusted tenants and landlords for residential and commercial spaces.',
      iconColor: 'from-green-500 to-emerald-500',
      svgPath: 'M15 7a5 5 0 11-9.9 1h-.1a7 7 0 1014 0h-.1a5 5 0 01-4.9-1zM10 14l-2 2m0 0l2 2m-2-2h6',
      features: ['Rental agreements', 'Property management', 'Tenant verification'],
      routerLink: '/contact-us'
    },
    {
      title: 'Legal Assistance',
      description: 'We simplify paperwork, registration, and compliance for smooth property transactions.',
      iconColor: 'from-yellow-500 to-orange-500',
      svgPath: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h7l5 5v12a2 2 0 01-2 2z',
      features: ['Registration help', 'Legal consultation', 'Loan guidance'],
      routerLink: '/contact-us'
    }
  ];

  ngAfterViewInit() {
  const video: HTMLVideoElement | null = document.querySelector('video');
  if (video) {
    video.muted = true;   // force mute
    video.play().catch(err => console.log("Autoplay blocked:", err));
  }
}
}
