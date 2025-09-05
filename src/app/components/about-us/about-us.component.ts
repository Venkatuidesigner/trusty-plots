import { Component } from '@angular/core';
import * as globals from '../../globals';

@Component({
  selector: 'app-about-us',
  standalone: false,
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {
  // Why Choose Us Section Data
  wcuCards = [
    {
      img: globals.wcu_1,
      title: 'Wide Property Choices',
      description: 'Explore a wide range of residential and commercial properties to suit every budget and lifestyle.'
    },
    {
      img: globals.wcu_2,
      title: 'Trusted & Verified',
      description: 'All our listings are verified to ensure transparency and reliability for your peace of mind.'
    },
    {
      img: globals.wcu_3,
      title: 'Expert Guidance',
      description: 'Get personalized assistance from experienced real estate experts at every step of your journey.'
    }
  ];
  // Mission and Vision Section Data
  missionVision = [
    {
      title: 'Our Mission',
      description: 'Our mission is to make property transactions hassle-free for everyone. We provide verified listings, site visit assistance, and end-to-end support so you can make confident decisions.',
      features: [
        'Verified and transparent documentation',
        'End-to-end property guidance',
        'Dedicated customer support'
      ]
    },
    {
      title: 'Our Vision',
      description: 'We envision a world where property transactions are seamless, trustworthy, and accessible for all. Our goal is to become a one-stop solution for every property buyer and seller.',
      features: [
        'Building trust with every deal',
        'Bringing innovation to real estate',
        'Empowering communities'
      ]
    }
  ];

}
