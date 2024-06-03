import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, Input, OnChanges, PLATFORM_ID, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'svg-component',
  templateUrl: './svg-component.component.html',
  styleUrl: './svg-component.component.css'
})
export class SvgComponent implements OnChanges {
  @Input() src: string = ''
  @Input() color: string = 'black';
  @Input() fill: string = 'none';
  @Input() strokeWidth: number = 1;
  @Input() strokeColor: string = 'black';
  svgContent: SafeHtml | null = null;
  constructor(
    private http: HttpClient,
    private sanitizer: DomSanitizer,
    @Inject(PLATFORM_ID) private platformId: any
    ) {
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['src']) {
      this.loadSvgContent();
    }
  }

  loadSvgContent(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.http.get(this.src, { responseType: 'text' }).subscribe(
        (svg: string) => {
          const coloredSvg = svg.replace(/fill=".*?"/g, `fill="${this.color}"`);
          const strokeWidth = svg.replace(/stroke-width=".*?"/g, `stroke-width="${this.strokeWidth}"`);
          const strokeColor = svg.replace(/stroke=".*?"/g, `stroke="${this.strokeColor}"`);
          this.svgContent = this.sanitizer.bypassSecurityTrustHtml(coloredSvg);
          this.svgContent = this.sanitizer.bypassSecurityTrustHtml(strokeWidth);
          this.svgContent = this.sanitizer.bypassSecurityTrustHtml(strokeColor);
        },
        (error: any) => {
          console.error('Error loading SVG file', error);
        }
      );
    }
  }
}
