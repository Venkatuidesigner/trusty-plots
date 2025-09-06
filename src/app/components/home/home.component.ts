import { Component } from '@angular/core';
import * as globals from '../../globals';
@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  // Properties Section Data
properties = [
    {
      type: 'Villa',
      status: 'For Sale',
      title: 'New Perungalathur ',
      location: 'Approved by MMDA',
      details: '2 BHK • 2800 SF',
      price: '₹5000/-SF',
      img: globals.property_1
    },
    {
      type: 'Villa',
      status: 'For Sale',
      title: 'Thiruporur',
      location: 'Thiruporur',
      details: '1250 SF',
      price: '₹4000/-SF (Negotiable)',
      img: globals.property_2
    },
    {
      type: 'Apartment',
      status: 'For Sale',
      title: 'Guduvanchery',
      location: 'Guduvanchery',
      details: '3 BHK',
      price: '₹72 L ',
      img: globals.property_3
    },
    {
      type: 'Apartment',
      status: 'For Sale',
      title: 'Guduvanchery',
      location: 'Guduvanchery',
      details: '2 BHK',
      price: '₹52 L ',
      img: globals.property_3
    },
  ];

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

  // Services Section Data
  services = [
    {
      img: globals.services_1,
      title: 'Property Sales',
      description: 'Buy and sell residential & commercial properties with ease and reliability.'
    },
    {
      img: globals.services_2,
      title: 'Property Rentals',
      description: 'Affordable rental solutions with verified listings to suit every budget.'
    },
    {
      img: globals.services_3,
      title: 'Land Development',
      description: 'Trusted services in land development and plotting for future investments.'
    },
    {
      img: globals.services_4,
      title: 'Real Estate Consulting',
      description: 'Professional advice to help you make informed property decisions.'
    },
    {
      img: globals.services_5,
      title: 'Legal Assistance',
      description: 'Hassle-free documentation and legal support for property transactions.'
    },
    {
      img: globals.services_6,
      title: 'Customer Support',
      description: 'Dedicated 24/7 support to assist you at every step of your property journey.'
    }
  ];
}
