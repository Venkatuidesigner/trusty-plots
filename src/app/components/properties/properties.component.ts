import { Component } from '@angular/core';
import * as globals from '../../globals';
import { MatTabChangeEvent } from '@angular/material/tabs';

interface Property {
  type: string;
  status: string;
  title: string;
  location: string;
  details: string;
  price: string;
  img: string;
}


@Component({
  selector: 'app-properties',
  standalone: false,
  templateUrl: './properties.component.html',
  styleUrl: './properties.component.scss'
})
export class PropertiesComponent {
  selectedType = 'All';


  properties: Property[] = [
    {
      type: 'Apartment',
      status: 'For Sale',
      title: 'New Apartment Nice View',
      location: 'Belmont Gardens, Chicago',
      details: '3 Bed • 2 Bath • 3450 Sq Ft',
      price: '$34,900',
      img: globals.property_1
    },
    {
      type: 'Villa',
      status: 'For Sale',
      title: 'Luxury Villa',
      location: 'Palm Beach, Miami',
      details: '5 Bed • 4 Bath • 4500 Sq Ft',
      price: '$65,000',
      img: globals.property_2
    },
    {
      type: 'Apartment',
      status: 'For Sale',
      title: 'City View Apartment',
      location: 'Downtown, New York',
      details: '2 Bed • 2 Bath • 1500 Sq Ft',
      price: '$18,500',
      img: globals.property_3
    },
    {
      type: 'Villa',
      status: 'For Sale',
      title: 'Cozy Cottage',
      location: 'Maple Street, Boston',
      details: '2 Bed • 1 Bath • 900 Sq Ft',
      price: '$12,500',
      img: globals.property_4
    },
    {
      type: 'Villa',
      status: 'For Sale',
      title: 'Luxury Villa',
      location: 'Palm Beach, Miami',
      details: '5 Bed • 4 Bath • 4500 Sq Ft',
      price: '$65,000',
      img: globals.property_1
    },
    {
      type: 'Apartment',
      status: 'For Sale',
      title: 'City View Apartment',
      location: 'Downtown, New York',
      details: '2 Bed • 2 Bath • 1500 Sq Ft',
      price: '$18,500',
      img: globals.property_2
    },
    {
      type: 'Villa',
      status: 'For Sale',
      title: 'Cozy Cottage',
      location: 'Maple Street, Boston',
      details: '2 Bed • 1 Bath • 900 Sq Ft',
      price: '$12,500',
      img: globals.property_3
    },
    {
      type: 'Plots',
      status: 'For Sale',
      title: 'Cozy Cottage',
      location: 'Maple Street, Boston',
      details: '2 Bed • 1 Bath • 900 Sq Ft',
      price: '$12,500',
      img: globals.property_3
    }
  ];

  get filteredProperties() {
    if (this.selectedType === 'All') return this.properties;
    return this.properties.filter(p => p.type === this.selectedType);
  }

  onTabChange(event: MatTabChangeEvent) {
    switch (event.index) {
      case 0:
        this.selectedType = 'All';
        break;
      case 1:
        this.selectedType = 'Apartment';
        break;
      case 2:
        this.selectedType = 'Villa';
        break;
      case 3:
        this.selectedType = 'Plots';
        break;
    }
  }
}
