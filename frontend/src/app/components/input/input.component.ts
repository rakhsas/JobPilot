import { Component, ElementRef, Input, Output, Renderer2, forwardRef, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';

type required = "true" | "false";

@Component({
  selector: 'spartan-input',
  template: `<input [class]="class" [placeholder]="placeHolder" [type]="type" [required]="required" (input)="onInput($event)" [value]="value" hlmInput/>`,

  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent {
    @Input() placeHolder: string = '';
    @Input() type: string = 'text';
    @Input() class: string = '';
    @Input() required: boolean = false;
    @Output() validityChange = new EventEmitter<boolean>()
    value: any;
    onChange: any = () => {};
    onTouched: any = () => {};

    constructor(private renderer: Renderer2, private elRef: ElementRef) {}

    writeValue(value: any): void {
        this.value = value;
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    setDisabledState?(isDisabled: boolean): void {
        const input = this.elRef.nativeElement.querySelector('input');
        this.renderer.setProperty(input, 'disabled', isDisabled);
    }

    onInput(event: any): void {
        const value = event.target.value;
        this.value = value;
        this.onChange(value);
        this.onTouched();
        if (this.type === 'email') {
            this.validateEmail(value, event.target);
        }
    }

    validateEmail(value: string, inputElement: any): void {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValid = emailPattern.test(value);
        if (value.length == 0) {
            this.renderer.removeClass(inputElement, "border-red-500");
            this.renderer.removeClass(inputElement, "border-green-600");
            this.validityChange.emit(false);
            return ;
        }
        if (isValid)
        {

            this.renderer.removeClass(inputElement, "border-red-500");
            this.renderer.addClass(inputElement, "border-green-700");
        } else {
            this.renderer.removeClass(inputElement, "border-green-700")
            this.renderer.addClass(inputElement, "border-red-500")
        }
        this.validityChange.emit(isValid)
    }


}