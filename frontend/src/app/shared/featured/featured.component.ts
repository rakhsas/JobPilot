import { Component, OnInit } from '@angular/core';

interface FeaturedJob {
  title: string;
  company: string;
  location: string;
  salary: string;
  description: string;
  type: string;
}

@Component({
  selector: 'featured',
  templateUrl: './featured.component.html',
  styleUrl: './featured.component.css'
})
export class FeaturedComponent implements OnInit {
  featuredJobs: FeaturedJob[] = [];
  ngOnInit(): void {
    this.featuredJobs = [
      {
        title: 'Software Engineer',
        company: 'Google inc.',
        location: 'Mountain View, CA',
        salary: 'MAD 10,000 - 15,000',
        description: 'Google is looking for a software engineer with 5 years of experience.',
        type: 'Full-Time',
      },
      {
        title: 'Software Engineer',
        company: 'Facebook',
        location: 'Menlo Park, CA',
        salary: 'MAD 13,000 - 18,000',
        description: 'Facebook is looking for a software engineer with 5 years of experience.',
        type: 'Full-Time',
      },
      {
        title: 'Software Engineer',
        company: 'Amazon',
        location: 'Seattle, WA',
        salary: '$110,000',
        description: 'Amazon is looking for a software engineer with 5 years of experience.',
        type: 'Full-Time',
      },
      {
        title: 'Software Engineer',
        company: 'Microsoft',
        location: 'Redmond, WA',
        salary: '$125,000',
        description: 'Microsoft is looking for a software engineer with 5 years of experience.',
        type: 'Part-Time',
      },
      {
        title: 'Software Engineer',
        company: 'Apple',
        location: 'Cupertino, CA',
        salary: '$120,000',
        description: 'Apple is looking for a software engineer with 5 years of experience.',
        type: 'Internship',
      },
      {
        title: 'Software Engineer',
        company: 'Netflix',
        location: 'Los Gatos, CA',
        salary: '$130,000',
        description: 'Netflix is looking for a software engineer with 5 years of experience.',
        type: 'Full-Time',
      },
      {
        title: 'Software Engineer',
        company: 'Twitter',
        location: 'San Francisco, CA',
        salary: '$120,000',
        description: 'Twitter is looking for a software engineer with 5 years of experience.',
        type: 'Full-Time',
      },
      {
        title: 'Software Engineer',
        company: 'LinkedIn',
        location: 'Sunnyvale, CA',
        salary: '$110,000',
        description: 'LinkedIn is looking for a software engineer with 5 years of experience.',
        type: 'Full-Time',
      },
      {
        title: 'Software Engineer',
        company: 'Airbnb',
        location: 'San Francisco, CA',
        salary: '$130,000',
        description: 'Airbnb is looking for a software engineer with 5 years of experience.',
        type: 'Full-Time',
      }
    ];
  }
}
