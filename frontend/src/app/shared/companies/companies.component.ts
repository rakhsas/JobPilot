import { Component, OnInit } from '@angular/core';

interface TopCompany {
  name: string;
  location: string;
  openPositions: number;
}

@Component({
  selector: 'companies',
  templateUrl: './companies.component.html',
  styleUrl: './companies.component.css'
})
export class CompaniesComponent implements OnInit {
    companies: TopCompany[] = [];
    ngOnInit(): void {
        this.companies = [
          { name: 'Google', location: 'Mountain View, CA', openPositions: 10 },
          { name: 'Facebook', location: 'Menlo Park, CA', openPositions: 5 },
          { name: 'Apple', location: 'Cupertino, CA', openPositions: 3 },
          { name: 'Amazon', location: 'Seattle, WA', openPositions: 7 },
          { name: 'Microsoft', location: 'Redmond, WA', openPositions: 6 },
          { name: 'IBM', location: 'Armonk, NY', openPositions: 1200 },
        ];
    }
}
