import { Component, HostListener, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
interface Testimonial {
  content: string;
  rating: number;
  author: {
    name: string;
    image: string;
    jobTitle: string;
  }
}

@Component({
  selector: 'testimonial',
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.css'
})
export class TestimonialComponent implements OnInit {
  testimonials: Testimonial[] = [];
  activeTestimonialIndex = 0;
  ngOnInit(): void {
      this.testimonials = [
          {
            content: 'JobPilot has been a game-changer for my career! The platform\'s intuitive interface and comprehensive job listings made it easy for me to find and apply for positions that matched my skills and interests.',
            rating: 2,
            author: {
              name: 'John Doe',
              image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3648&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              jobTitle: 'Software Engineer'
            }
          },
          {
            content: 'I never thought job hunting could be this stress-free. JobPilot\'s search filters and company insights allowed me to focus my efforts on roles that truly fit my career goals. The process was smooth and efficient',
            rating: 2,
            author: {
              name: 'John Doe',
              image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHVzZXJ8ZW58MHx8MHx8fDA%3D',
              jobTitle: 'Software Engineer'
            }
          },
          {
            content: 'JobPilot has been a game-changer for my career! The platform\'s intuitive interface and comprehensive job listings made it easy for me to find and apply for positions that matched my skills and interests.',
            rating: 2,
            author: {
              name: 'John Doe',
              image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=3744&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              jobTitle: 'Software Engineer'
            }
          },
          {
            content: 'JobPilot has been a game-changer for my career! The platform\'s intuitive interface and comprehensive job listings made it easy for me to find and apply for positions that matched my skills and interests.',
            rating: 2,
            author: {
              name: 'John Doe',
              image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3648&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              jobTitle: 'Software Engineer'
            }
          },

      ]
      if (isPlatformBrowser(this.platformId)) {
        this.adjustTestimonialsToShow();
      }
  }
  constructor(@Inject(PLATFORM_ID) private platformId: any) {}
  testimonialsToShow = 1;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.adjustTestimonialsToShow();
  }

  adjustTestimonialsToShow() {
    if (isPlatformBrowser(this.platformId)) {
      if (window.innerWidth >= 1024) {
        this.testimonialsToShow = 3;
      } else {
        this.testimonialsToShow = 1;
      }
      this.correctIndex();
    }
  }

  correctIndex() {
    if (this.activeTestimonialIndex > this.testimonials.length - this.testimonialsToShow) {
      this.activeTestimonialIndex = Math.max(0, this.testimonials.length - this.testimonialsToShow);
    }
  }

  prevTestimonial() {
    if (this.activeTestimonialIndex > 0) {
      this.activeTestimonialIndex -= 1;
    }
  }

  nextTestimonial() {
    if (this.activeTestimonialIndex < this.testimonials.length) {
      // if (this.activeTestimonialIndex + this.testimonialsToShow < this.testimonials.length)
      //   this.testimonialsToShow = this.testimonialsToShow + 1;
      this.activeTestimonialIndex += 1;
    }
    // if (this.activeTestimonialIndex < this.testimonials.length - this.testimonialsToShow) {
    //   this.activeTestimonialIndex += 1;
    // }
  }

  setActiveIndex(index: number) {
    this.activeTestimonialIndex = Math.min(index, this.testimonials.length - this.testimonialsToShow);
  }
}
