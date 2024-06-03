import { Component, OnInit } from '@angular/core';

interface Category {
  title: string;
  openPositions: number;
  lucideIconName: string;
}

@Component({
  selector: 'categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit {
  categories: Category[] = []
  ngOnInit(): void {
    this.categories = [
      { title: 'Graphic & Design', openPositions: 4, lucideIconName: 'lucidePenTool' },
      { title: 'Code & programing', openPositions: 5, lucideIconName: 'lucideCode2' },
      { title: 'Digital Marketing', openPositions: 3, lucideIconName: 'lucideMegaphone' },
      { title: 'Video & Animation', openPositions: 2, lucideIconName: 'lucideMonitorPlay' },
      { title: 'Music & Audio', openPositions: 1, lucideIconName: 'lucideMusic' },
      { title: 'Data & Science', openPositions: 2, lucideIconName: 'lucideDatabase' },
      { title: 'Health & Care', openPositions: 44, lucideIconName: 'lucideStethoscope' },
      { title: 'Account & Finance', openPositions: 4, lucideIconName: 'lucideBarChart2' },
      { title: 'Business & Management', openPositions: 3, lucideIconName: 'lucideBriefcase' },
    ]
  }
}
