import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-custominput',
  templateUrl: './custominput.component.html',
  styleUrls: ['./custominput.component.scss'],
})
export class CustominputComponent implements OnInit {
  @Input() control!: FormControl;
  @Input() type!: string;
  @Input() label!: string;
  @Input() autocomplete!: string;
  @Input() icon!: string;

  isPassword!: boolean;
  hide: boolean = true;

  constructor() {}

  ngOnInit() {

    if (this.type == "password") {
      this.isPassword = true;
    }

  }

  showOrHidePassword() {
    this.hide = !this.hide;

    if (this.hide) this.type = "password";
    else this.type = "text";

  }
}
