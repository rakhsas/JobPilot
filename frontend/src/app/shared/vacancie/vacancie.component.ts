import { Component, OnInit } from '@angular/core';

interface vacancie {
  title: string;
  openPositions: number;
}

@Component({
  selector: 'vacancies',
  templateUrl: './vacancie.component.html',
  styleUrl: './vacancie.component.css'
})
export class VacancieComponent implements OnInit {
  vacancies: vacancie[] = [];
  ngOnInit() {
    this.vacancies = [
      {
        title: 'Frontend Developer',
        openPositions: 2
      },
      {
        title: 'Backend Developer',
        openPositions: 1
      },
      {
        title: 'Full Stack Developer',
        openPositions: 3
      },
      {
        title: 'DevOps Engineer',
        openPositions: 1
      },
      {
        title: 'QA Engineer',
        openPositions: 2
      },
      {
        title: 'Product Manager',
        openPositions: 1
      },
      {
        title: 'Business Analyst',
        openPositions: 1
      },
      {
        title: 'UI/UX Designer',
        openPositions: 2
      },
      {
        title: 'Scrum Master',
        openPositions: 1
      },
      {
        title: 'Project Manager',
        openPositions: 1
      },
      {
        title: 'Data Scientist',
        openPositions: 1
      },
      {
        title: 'Machine Learning Engineer',
        openPositions: 1
      },
      {
        title: 'Security Engineer',
        openPositions: 1
      },
      {
        title: 'Network Engineer',
        openPositions: 1
      },
      {
        title: 'Technical Writer',
        openPositions: 1
      },
      {
        title: 'Sales Manager',
        openPositions: 2
      },
      {
        title: 'Customer Relationship Manager',
        openPositions: 1
      },
      {
        title: 'Marketing Manager',
        openPositions: 1
      },
      {
        title: 'HR Manager',
        openPositions: 1
      },
      {
        title: 'Finance Manager',
        openPositions: 1
      },
      {
        title: 'Legal Counsel',
        openPositions: 1
      },
      {
        title: 'Intern',
        openPositions: 2
      },
      {
        title: 'UI/UX Designer',
        openPositions: 1
      },
      {
        title: 'Data Scientist',
        openPositions: 1
      }
    ]
  }
}

