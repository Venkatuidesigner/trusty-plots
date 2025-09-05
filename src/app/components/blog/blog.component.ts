import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  standalone: false,
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {
blogs = [
  {
    title: 'Top 10 Tips for Buying Your Dream Home',
    description: `
      Buying a home is one of the most <b>significant investments</b> you will make in your life, and it requires careful planning.<br><br>
      Start by defining your <i>budget</i> and exploring mortgage options.<br>
      Consider property location, schools, healthcare, and amenities.<br><br>
      Inspect the property carefully and verify all legal documents.<br>
      Working with a trusted <i>real estate agent</i> can save you time and ensure a smooth transaction.
    `,
    image: '../../../../blogs/1.jpg',
    category: 'Real Estate',
    date: 'Jan 20, 2025'
  },
  {
    title: 'Why Real Estate is Still the Best Investment',
    description: `
      Real estate continues to be a <b>stable and profitable</b> investment.<br><br>
      Unlike volatile stock markets, property investments provide tangible assets, rental income, and long-term growth.<br>
      Focus on <i>location</i>, property type, and market trends to maximize returns.<br><br>
      Urban areas with growing infrastructure yield higher appreciation rates, making real estate a safe and strategic investment.
    `,
    image: '../../../../blogs/2.webp',
    category: 'Investment',
    date: 'Feb 05, 2025'
  }
];
}
